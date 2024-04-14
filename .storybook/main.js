/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    "../src/components/**/__stories__/*.stories.@(js|jsx|ts|tsx)",
    "../src/components/**/__stories__/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)",
    "../src/**/*.mdx",
  ],

  addons: [
    "../src/custom/addons/matomo/register",
    "../src/custom/addons/title/register",
    "@storybook/preset-create-react-app",
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
    "@storybook/blocks",
    "@storybook/addon-docs", // Ensures MDX support
    "storybook-dark-mode",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs: ["../public"],
};
export default config;
