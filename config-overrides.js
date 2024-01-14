// config-overrides.js
const path = require('path');
const webpack = require('webpack');

module.exports = function override(config, env) {
  // Add the resolve fallback for buffer and path
  config.resolve = {
    ...config.resolve,
    fallback: {
      buffer: require.resolve('buffer'),
      path: require.resolve('path-browserify'),
    },
  };

  // Add a plugin to provide the Buffer global variable
  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    })
  );

  return config;
};
