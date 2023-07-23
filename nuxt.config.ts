export default defineNuxtConfig({
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    vue: {
      template: {
        transformAssetUrls: true,
      },
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
});