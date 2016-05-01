/*!
 * read-source-stream <https://github.com/tunnckoCore/read-source-stream>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

module.exports = function readSourceStream (fp, opts) {
  if (typeof fp !== 'string') {
    throw new TypeError('read-source-stream expect `fp` be string')
  }
  opts = utils.isObject(opts) ? opts : {}
  opts.cwd = opts.cwd || process.cwd()

  var filepath = utils.path.join(opts.cwd, fp)

  if (utils.exists(filepath)) {
    return utils.fs.createReadStream(filepath, opts)
  }
  if (/^\/\//.test(fp)) {
    fp = 'http:' + fp
  }
  if (!/http(?:s)?:\/\//.test(fp)) {
    fp = 'http://' + fp
  }

  opts.url = opts.url || fp
  return utils.simpleGetStream(opts)
}
