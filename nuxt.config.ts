// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  telemetry: false,
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-svgo',
    'shadcn-nuxt',
    '@nuxt/image',
    ['unplugin-icons/nuxt', { autoInstall: true }],
    '@pinia/nuxt',
    'nuxt-security',
    '@nuxtjs/i18n',
    '@vee-validate/nuxt',
  ],
  runtimeConfig: {
    public: {
      matomo: {
        domain: process.env.NUXT_DOMAIN || '',
        host: process.env.NUXT_MATOMO_HOST || '',
        siteId: process.env.NUXT_MATOMO_SITEID || '',
      },
    },
    admin: {
      email: process.env.NUXT_ADMIN_EMAIL || '',
    },
    mailer: {
      fromEmail: process.env.NUXT_MAILER_FROM_EMAIL || '',
      fromName: process.env.NUXT_MAILER_FROM_NAME || '',
      host: process.env.NUXT_MAILER_HOST || '',
      port: process.env.NUXT_MAILER_PORT || '587',
      username: process.env.NUXT_MAILER_USERNAME || '',
      password: process.env.NUXT_MAILER_PASSWORD || '',
    },
  },
  security: {
    enabled: false, // process.env.NODE_ENV === 'production',
    headers: {
      referrerPolicy: 'strict-origin-when-cross-origin',
    },
  },
  imports: {
    dirs: ['./stores'],
  },
  image: {
    format: ['webp'],
  },
  googleFonts: {
    families: {
      'Gochi Hand': true,
      'Mr Dafoe': true,
    },
  },
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: '~/tailwind.config.ts',
  },
  veeValidate: {
    autoImports: false,
  },
  i18n: {
    locales: [
      {
        code: 'de',
        iso: 'de-DE',
        name: 'Deutsch',
        file: 'de-DE.json',
      },
      {
        code: 'en',
        iso: 'en-UK',
        name: 'English',
        file: 'en-UK.json',
      },
    ],
    lazy: true,
    langDir: 'lang',
    defaultLocale: 'de',
  },
  app: {
    head: {
      titleTemplate: '%s | Sven Stadhouders',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          name: 'cache-control',
          content: 'no-cache, no-store, must-revalidate',
        },
        { hid: 'robots', name: 'robots', content: 'index, follow' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'favicon.png' }],
    },
  },
});
