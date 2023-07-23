/** @type { import('@storybook/vue3-vite').StorybookConfig } */

import path from 'path'
import { loadConfigFromFile, mergeConfig } from 'vite'

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    //'storybook-addon-nuxt'
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  core: {
    //builder: '@storybook/builder-vite', // 👈 The builder enabled here.
  },
  docs: {
    autodocs: "tag",
  },
  async viteFinal(baseConfig) {
    const { config: userConfig } = await loadConfigFromFile(
      path.resolve(__dirname, "../vite.config.ts")
    )

    return mergeConfig(baseConfig, userConfig)
  },
};
export default config;
