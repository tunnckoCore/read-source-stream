# [read-source-stream][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Streaming read of local file or remote url.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i read-source-stream --save
```


## Usage
> For more use-cases see the [tests](./test.js)

- `<fp>` **{String}** filepath or remote url
- `[opts]` **{Object}** options passed to `fs.createReadStream`
- `returns` **{Stream}** Readable stream

**Example**

```js
var read = require('read-source-stream')

// current working directory `package.json` file
read('package.json').pipe(process.stdout)

// package.json of `got` module
read('package.json', {cwd: 'node_modules/got'}).pipe(process.stdout)

// also works with CDN-like urls 
read('//todomvc.com').pipe(process.stdout)

// http and https urls
read('https://github.com').pipe(process.stdout)
read('www.tunnckocore.tk').pipe(process.stdout)
```


## Related
- [encode-image-stream](https://github.com/tunnckocore/encode-image-stream): Encode image to base64 string, just encode. ~20 sloc.
- [gulp-micromatch](https://github.com/tunnckocore/gulp-micromatch): Filter vinyl files with glob patterns, string, regexp, array, object… [more](https://github.com/tunnckocore/gulp-micromatch)
- [is-real-object](https://github.com/tunnckocore/is-real-object): Returns `true` if a value is any type of object, but not an array.
- [path-exists](https://github.com/sindresorhus/path-exists): Check if a path exists
- [simple-get](https://github.com/feross/simple-get): Simplest way to make http get requests. Supports HTTPS, redirects,… [more](https://github.com/feross/simple-get)


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/read-source-stream/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/read-source-stream
[npmjs-img]: https://img.shields.io/npm/v/read-source-stream.svg?label=read-source-stream

[license-url]: https://github.com/tunnckoCore/read-source-stream/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/read-source-stream
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/read-source-stream.svg

[travis-url]: https://travis-ci.org/tunnckoCore/read-source-stream
[travis-img]: https://img.shields.io/travis/tunnckoCore/read-source-stream.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/read-source-stream
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/read-source-stream.svg

[david-url]: https://david-dm.org/tunnckoCore/read-source-stream
[david-img]: https://img.shields.io/david/tunnckoCore/read-source-stream.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg