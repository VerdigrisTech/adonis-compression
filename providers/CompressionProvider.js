'use strict';

/**
 * adonis-compression
 *
 * © 2019 Verdigris Technologies Inc. <opensource@verdigris.co>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const { ServiceProvider } = require('@adonisjs/fold');

class CompressionProvider extends ServiceProvider {
  register() {
    this.app.bind('Adonis/Middleware/Compression', app => {
      const CompressionMiddleware = require('../src/middleware');
      return new CompressionMiddleware(app.use('Adonis/Src/Config'));
    });
  }
}

module.exports = CompressionProvider;
