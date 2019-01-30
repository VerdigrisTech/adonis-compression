# AdonisJs Compression 🗜

This repo contains a provider for a middleware that compresses HTTP responses
with GZip.

[![NPM Version][npm-image]][npm-url]
[![Build][circleci-image]][circleci-url]
[![Coverage][codecov-image]][codecov-url]
[![License][license-image]](LICENSE.md)

## Intended use case — read me first

This middleware was originally created to compress verbose JSONAPI responses.
If you are considering this middleware for compressing static assets in
production, please consider using [nginx][nginx-url] or [lighttpd][lighttpd-url]
instead. These servers are vastly superior to Node.js in performance for serving
static assets.

## Setup

Install the provider from npm:

    adonis install @verdigris/adonis-compression

Next make sure to read the [INSTRUCTIONS.md](INSTRUCTIONS.md) file.

## Node/OS Target

This repo/branch is intended to run on all major OS platforms and targets
`Node.js >= 8.0`

## Development

Please read [CONTRIBUTING.md](CONTRIBUTING.md) to learn about the contribution
guidelines before contributing to this codebase.

Run the following command to see list of available npm scripts:

    npm run

### Tests & linting

1. Unlike majority of AdonisJs codebase, this repository follows official
   corporate Verdigris Technologies ECMAScript 6 styleguide. Run `npm run lint`
   command to check if there are any linting errors.
2. Make sure you write tests for all changes/bug fixes.
3. Also you can write **regression tests**, which shows that something is
   failing but doesn't breaks the build. Which is actually a nice way to show
   that something fails. Regression tests are written using `test.failing()`
   method.
4. Make sure all tests are passing on CircleCI.

### General practices

Most of the ES6 language features are officially supported on Node.js v8. Please
make use of the ES6 language features. For example:

1. Use [Spread syntax][mdn-js-spread] over `arguments` keyword in functions.
2. Never use `bind` or `call`. After calling these methods, AdonisJs cannot
   guarantee the scope of any methods.
3. Make sure to write proper docblock.

## License

This software is distributed AS IS WITHOUT WARRANTY under Simplified BSD
license.

Verdigris Technologies Inc. assumes NO RESPONSIBILITY OR LIABILITY UNDER ANY
CIRCUMSTANCES for usage of this software. See the [LICENSE.md](LICENSE.md) file
for detailed legal information.

---

<sub>Copyright © 2019 Verdigris Technologies Inc. All rights reserved.</sub>

[npm-image]: https://img.shields.io/npm/v/@verdigris/adonis-compression.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@verdigris/adonis-compression
[circleci-image]: https://img.shields.io/circleci/project/github/VerdigrisTech/adonis-compression.svg?style=flat-square
[circleci-url]: https://circleci.com/gh/VerdigrisTech/adonis-compression
[license-image]: https://img.shields.io/github/license/VerdigrisTech/adonis-compression.svg?style=flat-square
[codecov-image]: https://img.shields.io/codecov/c/github/VerdigrisTech/adonis-compression.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/VerdigrisTech/adonis-compression
[nginx-url]: https://www.nginx.com
[lighttpd-url]: https://www.lighttpd.net
[mdn-js-spread]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
