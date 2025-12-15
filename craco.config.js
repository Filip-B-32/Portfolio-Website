const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "src", "assets"),
    },
  },
  style: {
    postcss: {
      loaderOptions: {
        postcssOptions: {
          plugins: [
            require('postcss-calc')({ preserve: true }), // preserve invalid functions
            require('autoprefixer'),
          ],
        },
      },
    },
  },
};
