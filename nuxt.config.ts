export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ['~/assets/css/main.css'],
  devtools: {
    enabled: process.env.NODE_ENV !== 'production',
  },
  i18n: {
    baseUrl: 'https://supermansamui.com',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    locales: [
      { code: 'en', language: 'en-US', name: 'English', flag: '🇬🇧' },
      { code: 'th', language: 'th-TH', name: 'ไทย', flag: '🇹🇭' },
      { code: 'ru', language: 'ru-RU', name: 'Русский', flag: '🇷🇺' },
    ],
    strategy: 'prefix_except_default',
  },
  modules: [
    '@nuxtjs/i18n',
    '@nuxt/ui',
    // '@nuxtjs/supabase',
    '@nuxtjs/sitemap',
  ],

  runtimeConfig: {
    TELEGRAM_CHAT_ID: '',
    TELEGRAM_BOT_TOKEN: '',

    SUPABASE_URL: '',
    SUPABASE_SERVICE_ROLE: '',

    LINE_CHANNEL_ACCESS_TOKEN: '',
    LINE_TO: '',

    public: {
      appName: 'Superman Samui',
      gtmId: '',
      gtmEnabled: false,

      supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
      },
    },
  },

  sitemap: {
    xsl: false,
    sitemapName: 'sitemap.xml',
    cacheMaxAgeSeconds: 86400,
  },

  ssr: true,

  // supabase: {
  //   redirect: false,
  //   serviceKey: process.env.SUPABASE_SERVICE_KEY,
  // },

  ui: {
    colorMode: false,
  },
});
