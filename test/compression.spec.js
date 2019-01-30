'use strict';

const http = require('http');
const { Config } = require('@adonisjs/sink');
const chai = require('chai');
const chaiHttp = require('chai-http');
const CompressionMiddleware = require('../src/middleware');

chai.use(chaiHttp);

const { expect, request } = chai;

describe('Compression', function () {
  before(function () {
    this.responseBody = JSON.stringify({
      data: [{
        type: 'people',
        id: '1',
        attributes: {
          name: 'Allen Lee',
          email: 'allen@example.com',
          gender: 'M'
        }
      }, {
        type: 'people',
        id: '2',
        attributes: {
          name: 'Andrew Jo',
          email: 'andrew@example.com',
          gender: 'M'
        }
      }, {
        type: 'people',
        id: '4',
        attributes: {
          name: 'Chiqun Zhang',
          email: 'chiqun@example.com',
          gender: 'M'
        }
      }, {
        type: 'people',
        id: '4',
        attributes: {
          name: 'Hannah Hagen',
          email: 'hannah@example.com',
          gender: 'F'
        }
      }, {
        type: 'people',
        id: '5',
        attributes: {
          name: 'Lily Xu',
          email: 'lily@example.com',
          gender: 'F'
        }
      }, {
        type: 'people',
        id: '6',
        attributes: {
          name: 'Jason Goldman',
          email: 'jason@example.com',
          gender: 'M'
        }
      }, {
        type: 'people',
        id: '7',
        attributes: {
          name: 'Sam Olukotun',
          email: 'sam@example.com',
          gender: 'M'
        }
      }]
    }, null, 2);
  });

  describe('#handle()', function () {
    it('should compress response when request has header: "Accept-Encoding: gzip"', async function () {
      const config = new Config();
      config.set('compression.threshold', 512);
      const middleware = new CompressionMiddleware(config);
      const server = http.createServer(async (req, res) => {
        const context = {
          request: {
            request: req
          },
          response: {
            response: res
          }
        };

        await middleware.handle(context, async function () {
          return true;
        });

        res.writeHead(200, {
          'Content-Type': 'application/vnd.api+json',
          'Content-Length': this.responseBody.length
        });
        res.write(this.responseBody);
        res.end();
      });

      const response = await request(server)
        .get('/')
        .set('Accept-Encoding', 'gzip,deflate');

      expect(response).not.to.have.header('Content-Length');
      expect(response).to.have.header('Content-Encoding', 'gzip');
      expect(response).to.have.header('Transfer-Encoding', 'chunked');
      expect(response).to.have.header('Vary', 'Accept-Encoding');
    });

    it('should not compress response when request does not have header: "Accept-Encoding: gzip, deflate"', async function () {
      const config = new Config();
      config.set('compression.threshold', 512);
      const middleware = new CompressionMiddleware(config);
      const server = http.createServer(async (req, res) => {
        const context = {
          request: {
            request: req
          },
          response: {
            response: res
          }
        };

        await middleware.handle(context, async function () {
          return true;
        });

        res.writeHead(200, {
          'Content-Type': 'application/vnd.api+json',
          'Content-Length': this.responseBody.length
        });
        res.write(this.responseBody);
        res.end();
      });

      const response = await request(server)
        .get('/')
        .set('Accept-Encoding', 'identity');

      expect(response).to.have.header('Content-Length');
    });

    it('should not compress response when content length is less than threshold', async function () {
      const config = new Config();
      config.set('compression.threshold', 4096);
      const middleware = new CompressionMiddleware(config);
      const server = http.createServer(async (req, res) => {
        const context = {
          request: {
            request: req
          },
          response: {
            response: res
          }
        };

        await middleware.handle(context, async function () {
          return true;
        });

        res.writeHead(200, {
          'Content-Type': 'application/vnd.api+json',
          'Content-Length': this.responseBody.length
        });
        res.write(this.responseBody);
        res.end();
      });

      const response = await request(server)
        .get('/')
        .set('Accept-Encoding', 'gzip,deflate');

      expect(response).to.have.header('Content-Length', this.responseBody.length);
      expect(response).not.to.have.header('Content-Encoding');
      expect(response).not.to.have.header('Transfer-Encoding');
      expect(response).to.have.header('Vary', 'Accept-Encoding');
    });
  });
});
