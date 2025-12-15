const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src", "assets"),
    },
    configure: (webpackConfig) => {
      // Disable ESLint plugin to avoid warning
      webpackConfig.plugins = webpackConfig.plugins.filter(
        plugin => plugin.constructor.name !== 'ESLintWebpackPlugin'
      );
      
      // Disable CSS minification to avoid postcss-calc issues
      const miniCssExtractPlugin = webpackConfig.plugins.find(
        plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
      );
      if (miniCssExtractPlugin) {
        miniCssExtractPlugin.options.ignoreOrder = true;
      }
      
      return webpackConfig;
    }
  },
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          config: false, // Disable postcss.config.js
          plugins: [
            // Only use autoprefixer, skip postcss-calc
            require('autoprefixer'),
          ],
        },
      },
    },
  },
};