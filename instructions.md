## Register provider

Make sure to register the provider inside `start/app.js` file.

```javascript
const providers = [
  '@verdigris/adonis-compression/providers/CompressionProvider'
]
```

## Registering middleware

The next thing you should do is register the server middleware inside `start/kernel.js` file.

```javascript
const serverMiddleware = [
  'Adonis/Middleware/Compression'
]
```

## Config

The config file `config/compression.js` contains all the configuration. Feel
free to tweak it as per your needs.
