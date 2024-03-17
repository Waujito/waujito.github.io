// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_library.scss" as *;',
        },
      },
    },
  },
  app: {
    head: {
      charset: "UTF-8",
      viewport: "width=device-width, initial-scale=1.0",
      meta: [
        {
          name: "yandex-verification",
          content: "e8cf32a674dbe6ee",
        },
      ],
      link: [
        {
          rel: "icon",
          href: "https://avatars.githubusercontent.com/u/53368344",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      githubNickname: "Waujito",
      githubId: 53368344,
    },
  },
});
