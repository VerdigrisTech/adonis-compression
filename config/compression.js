'use strict'

/*
|--------------------------------------------------------------------------
| Compression Configuration
|--------------------------------------------------------------------------
|
| Here we define the configuration for compression middleware.
|
*/

const zlib = require('zlib')
const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | chunk
  |--------------------------------------------------------------------------
  |
  | Output slab buffer for zlib.
  | See: https://nodejs.org/api/zlib.html#zlib_memory_usage_tuning
  |
  */
  chunkSize: parseInt(Env.get('COMPRESSION_CHUNKSIZE', zlib.Z_DEFAULT_CHUNK)),

  /*
  |--------------------------------------------------------------------------
  | filter
  |--------------------------------------------------------------------------
  |
  | A function to decide if the response should be considered for
  | compression. This function is called as `filter(req, res)` and is
  | expected to return `true` to consider the response for compression, or
  | `false` to not compress the response.
  |
  | The default filter function uses the compressible module to determine if
  | `res.getHeader('Content-Type')` is compressible.
  |
  | Uncomment the line below to implement your own filter function.
  |
  */
  //filter: function (req, res) {},

  /*
  |--------------------------------------------------------------------------
  | level
  |--------------------------------------------------------------------------
  |
  | The level of zlib compression to apply to responses. A higher level will
  | result in better compression, but will take longer to complete. A lower
  | level will result in less compression, but will be much faster.
  |
  | This is an integer in the range of `0` (no compression) to `9`
  | (maximum compression). The special value `-1` can be used to mean the
  | "default compression level", which is a default compromise between speed
  | and compression (currently equivalent to level `6`).
  |
  | • -1: Default compression level (also `zlib.Z_DEFAULT_COMPRESSION`)
  | • 0: No compression (also `zlib.Z_NO_COMPRESSION`).
  | • 1: Fastest compression (also `zlib.Z_BEST_SPEED`).
  | • 2
  | • 3
  | • 4
  | • 5
  | • 6 (currently what `zlib.Z_DEFAULT_COMPRESSION` points to).
  | • 7
  | • 8
  | • 9: Best compression (also `zlib.Z_BEST_COMPRESSION`).
  |
  */
  level: parseInt(Env.get('COMPRESSION_LEVEL', -1)),

  /*
  |--------------------------------------------------------------------------
  | mem level
  |--------------------------------------------------------------------------
  |
  | This specifies how much memory should be allocated for the internal
  | compression state and is an integer in the range of `1` (minimum level)
  | and `9` (maximum level).
  |
  | See: https://nodejs.org/api/zlib.html#zlib_memory_usage_tuning
  |
  */
  memLevel: parseInt(Env.get('COMPRESSION_MEMLEVEL', zlib.Z_DEFAULT_MEMLEVEL)),

  /*
  |--------------------------------------------------------------------------
  | strategy
  |--------------------------------------------------------------------------
  |
  | This is used to tune the compression algorithm. This value only affects
  | the compression ratio, not the correctness of the compressed output,
  | even if it is not set appropriately.
  |
  | • `zlib.Z_DEFAULT_STRATEGY`: Use for normal data.
  | • `zlib.Z_FILTERED`: Use for data produced by a filter (or predictor).
  |   Filtered data consists mostly of small values with a somewhat random
  |   distribution. In this case, the compression algorithm is tuned to
  |   compress them better. The effect is to force more Huffman coding and
  |   less string matching; it is somewhat intermediate between
  | `zlib.Z_DEFAULT_STRATEGY` and `zlib.Z_HUFFMAN_ONLY`.
  | • `zlib.Z_FIXED`: Use to prevent the use of dynamic Huffman codes,
  |   allowing for a simpler decoder for special applications.
  | • `zlib.Z_HUFFMAN_ONLY`: Use to force Huffman encoding only (no string
  |   match).
  | • `zlib.Z_RLE`: Use to limit match distances to one (run-length
  |   encoding). This is designed to be almost as fast as
  |   `zlib.Z_HUFFMAN_ONLY`, but give better compression for PNG image data.
  |
  */
  strategy: parseInt(Env.get('COMPRESSION_STRATEGY', zlib.Z_DEFAULT_STRATEGY)),

  /*
  |--------------------------------------------------------------------------
  | threshold
  |--------------------------------------------------------------------------
  |
  | The byte threshold for the response body size before compression is
  | considered for the response, defaults to `1kb`. This is number of bytes
  | or any string accepted by the `bytes` module.
  |
  | NOTE: this is only an advisory setting; if the response size cannot be
  | determined at the time the response headers are written, then it is
  | assumed the response is _over_ the threshold. To guarantee the response
  | size can be determined, be sure to set a `Content-Length` response
  | header.
  |
  | See: https://www.npmjs.com/package/bytes
  |
  */
  threshold: parseInt(Env.get('COMPRESSION_THRESHOLD', 1024)),

  /*
  |--------------------------------------------------------------------------
  | window bits
  |--------------------------------------------------------------------------
  |
  | The default value is `zlib.Z_DEFAULT_WINDOWBITS`, or `15`.
  |
  | See: http://nodejs.org/api/zlib.html#zlib_memory_usage_tuning
  |
  */
  windowBits: parseInt(Env.get('COMPRESSION_WINDOWBITS', zlib.Z_DEFAULT_WINDOWBITS))
}
