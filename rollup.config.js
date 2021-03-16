// Set options as a parameter, environment variable, or rc file.
require = require('esm')(module /*, options*/ )
require('esbuild-register')
module.exports = require('./scripts/rollup.config.ts')
