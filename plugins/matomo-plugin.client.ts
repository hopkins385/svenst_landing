import VueMatomo from 'vue-matomo';

export default defineNuxtPlugin((nuxtApp) => {
  const config = nuxtApp.$config.public.matomo;
  if (process.env.NODE_ENV === 'production') {
    nuxtApp.vueApp.use(VueMatomo, {
      host: config.host,
      siteId: config.siteId,
      router: nuxtApp.$router,
      enableHeartBeatTimer: true,
      heartBeatTimerInterval: 5,
      enableLinkTracking: true,
      requireConsent: false,
      trackInitialView: true,
      disableCookies: false,
      requireCookieConsent: true,
      domains: config.domain,
      cookieDomain: config.domain,
    });
  }
});
