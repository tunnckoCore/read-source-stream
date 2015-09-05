/*!
 * read-source-stream <https://github.com/tunnckoCore/read-source-stream>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var fs = require('fs')
var got = require('got')
var path = require('path')
var exists = require('path-exists')
var isObject = require('is-real-object')

module.exports = function readSourceStream (fp, opts) {
  if (typeof fp !== 'string') {
    throw new TypeError('read-source-stream expect `fp` be string')
  }
  opts = isObject(opts) ? opts : {}

  var cwd = opts.cwd || process.cwd()
  var filepath = path.join(cwd, fp)

  if (exists.sync(filepath)) {
    return fs.createReadStream(filepath, opts)
  }
  if (/^\/\//.test(fp)) {
    fp = 'http:' + fp
  }
  return got.stream(fp)
}
