const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
  // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push(
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'sass-loader',
          options: {
            prependData: `
              @import "./src/styles/_variables.scss";
            `
          }
        }
      ],
      include: path.resolve(__dirname, '../'),
    }
  );
  config.resolve = {
    extensions: ['.mjs', '.js', '.jsx', '.json', '.vue', '.mdx'],
    alias: {
      vue$: 'vue/dist/vue.esm.js', // Make use of runtimeCompiler https://cli.vuejs.org/config/#runtimecompiler - Necessary for '@' alias.
      '@': path.resolve(__dirname, '../src'),
      '@sb': path.resolve(__dirname, '../.storybook')
    }
  };

  // Return the altered config
  return config;
};
