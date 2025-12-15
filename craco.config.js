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
      return webpackConfig;
    }
  },
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          plugins: [
            // Remove postcss-calc to prevent CSS variable processing issues
            // The browser will handle the calc() with CSS variables at runtime
            require('autoprefixer'),
          ],
        },
      },
    },
  },
};
