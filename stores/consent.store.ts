import { useStorage } from '@vueuse/core';
// import useClarityClient from '~/composables/useClarityClient';

interface StateInterface {
  modalOpen: any;
  settingsVisible: boolean;
  allCookiesAccepted: any;
  givenFor: {
    [key: string]: boolean;
  };
}

export const consentStore = defineStore({
  id: 'consentStore',
  state: (): StateInterface => {
    return {
      modalOpen: false,
      allCookiesAccepted: useStorage('all-cookies-accepted', false) ?? false,
      settingsVisible: false,
      givenFor: {
        essential: true,
        analytics: false,
      },
    };
  },
  getters: {
    showModal(state: StateInterface) {
      const route = useRoute();

      if (route.path === '/privacy') {
        return false;
      }
      return state.modalOpen;
    },
    showSettings(state: StateInterface) {
      return state.settingsVisible;
    },
    hasAllCookiesAccepted(state: StateInterface) {
      if (state.allCookiesAccepted === true) {
        return true;
      }

      for (const key in state.givenFor) {
        if (state.givenFor[key] !== true) {
          return false;
        }
      }

      return true;
    },
  },
  actions: {
    init() {
      const allAccepted = useStorage('all-cookies-accepted', false);
      const show = useStorage('show-cookie-consent', true);

      if (allAccepted.value && show.value) {
        show.value = false;
      }

      if (!allAccepted.value && !show.value) {
        show.value = true;
      }

      this.modalOpen = show.value;
    },
    trackCookieEvent(name: string) {
      const matomo = useMatomoClient();
      matomo.trackEvent({
        category: 'Cookie',
        action: name,
      });
    },
    allAccepted() {
      // walk through the array this.consentGivenFor and set all of them to true
      for (const key in this.givenFor) {
        this.givenFor[key] = true;
      }
      this.allCookiesAccepted = true;
      this.modalOpen = false;
      this.updateStorage();
      this.setCookiesBasedonConsent();
      this.trackCookieEvent('All Accepted');
    },
    openModal() {
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    updateStorage() {
      const show = useStorage('show-cookie-consent', true);
      const allAccepted = useStorage('all-cookies-accepted', false);
      show.value = this.modalOpen;
      allAccepted.value = this.allCookiesAccepted;
    },
    openSettings() {
      this.settingsVisible = true;
      this.trackCookieEvent('Open settings');
    },
    closeSettings() {
      this.settingsVisible = false;
    },
    savePreferences() {
      const show = useStorage('show-cookie-consent', true);
      if (!this.hasAllCookiesAccepted) {
        show.value = false;
      }
      if (this.hasAllCookiesAccepted) {
        this.allCookiesAccepted = true;
      }
      this.setCookiesBasedonConsent();
      this.closeSettings();
      this.trackCookieEvent('Save preferences');
      this.modalOpen = false;
    },
    setCookiesBasedonConsent() {
      if (this.givenFor.analytics === true) {
        this.enableAnalytics();
      }
    },
    enableAnalytics() {
      useMatomoClient().setCookieConsentGiven();
      // useMetaPixelClient().setCookieConsentGiven();
      // useClarityClient().setCookieConsentGiven();
    },
  },
});
