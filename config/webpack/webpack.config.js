// See the shakacode/shakapacker README and docs directory for advice on customizing your webpackConfig.
const { generateWebpackConfig, merge, inliningCss } = require('shakapacker');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');

const webpackConfig = generateWebpackConfig();

const isDevMode = process.env.NODE_ENV === 'development';
const customConfig = {
  resolve: {
    alias: {
      web: path.resolve(__dirname, '/app/javascript/packs/web'),
    },
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    ...(isDevMode && inliningCss
      ? [
          new ReactRefreshWebpackPlugin({
            overlay: {
              sockPort: webpackConfig.devServer.port,
            },
          }),
        ]
      : []),
  ],
};

module.exports = merge(webpackConfig, customConfig);
