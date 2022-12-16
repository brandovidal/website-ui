const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.mdx","../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
      },
    },
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  core: {
    builder: "webpack5",
  },
  // staticDirs: ["../public"],
  presets: [path.resolve(__dirname, "./next-preset.js")],
};