// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],
  modules: ["@nuxtjs/tailwindcss", "nuxt-swiper"],
  tailwindcss: {
    configPath: "~/tailwind.config.js",
  },
  router: {},
});
