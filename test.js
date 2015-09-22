/*!
 * read-source-stream <https://github.com/tunnckoCore/read-source-stream>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var read = require('./index')
var concat = require('concat-stream')

function contains (buf, input) {
  return buf.toString('utf-8').indexOf(input) !== -1
}

test('read-source-stream:', function () {
  test('should throw TypeError if `fp` not a string', function (done) {
    function fixture () {
      read(123)
    }

    test.throws(fixture, TypeError)
    test.throws(fixture, /expect `fp` be string/)
    done()
  })
  test('read remote https:// url (e.g. https://github.com)', function (done) {
    read('https://github.com')
    .pipe(concat(function (body) {
      test.ok(contains(body, '<!DOCTYPE html>'))
      done()
    }))
  })
  test('read remote CDN-like url (e.g. //cdn.jsdelivr.net)', function (done) {
    read('//cdn.jsdelivr.net/dush/1.3.0/dush.standalone.min.js')
    .pipe(concat(function (body) {
      test.ok(contains(body, 'dush=e'))
      done()
    }))
  })
  test('read remote todomvc.com', function (done) {
    read('todomvc.com').on('error', done)
    .pipe(concat(function (body) {
      test.ok(contains(body, '<title>TodoMVC</title>'))
      done()
    }))
  })
  test('read local file', function (done) {
    read('package.json')
    .pipe(concat(function (body) {
      test.ok(contains(body, '"name": "read-source-stream"'))
      done()
    }))
  })
  test('read local file with `cwd` option', function (done) {
    read('package.json', {cwd: 'node_modules/simple-get'})
    .pipe(concat(function (body) {
      test.ok(contains(body, '"name": "simple-get"'))
      done()
    }))
  })
})
