'use strict';

const compression = require('compression');

class Compression {
  constructor(Config) {
    this.compression = compression(Config.get('compression'));
  }

  /**
   * Executes this middleware.
   * @param {Context} context
   * @param {function} next
   */
  async handle({ request, response }, next) {
    const [{ request: req }, { response: res }] = [request, response];

    // compression() is not async itself and next() should be managed using asynchronous API.
    this.compression(req, res, () => {});

    await next();
  }
}

module.exports = Compression;
