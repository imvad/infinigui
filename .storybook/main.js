// storybook fix theming - https://github.com/mui-org/material-ui/issues/24282#issuecomment-951015101
module.exports = {
    stories: [
      '../src/**/**.stories.mdx',
      '../src/**/**.stories.@(js|jsx|ts|tsx)',
    ],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-material-ui'],
    webpackFinal(config) {
      delete config.resolve.alias['emotion-theming'];
      delete config.resolve.alias['@emotion/styled'];
      delete config.resolve.alias['@emotion/core'];
      return config;
    },
  };
// module.exports = {
//   "stories": [
//     "../src/**/*.stories.mdx",
//     "../src/**/*.stories.@(js|jsx|ts|tsx)"
//   ],
//   "addons": [
//     "@storybook/addon-links",
//     "@storybook/addon-essentials",
//     'storybook-addon-material-ui'
//   ],
//   "framework": "@storybook/react"
// }