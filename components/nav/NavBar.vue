<script setup lang="ts">
  const appConfig = useAppConfig();
  const isScrolled = computed(() => useWindowScroll().y.value > 0);
  const { scrollTo } = useScrollTo();
</script>

<template>
  <div
    class="sticky top-0 z-50 flex h-20 items-center border-b bg-white lg:h-28"
    :class="{
      'bg-white/95 shadow-md backdrop-blur-md': isScrolled,
    }"
  >
    <div class="container mx-auto flex w-full items-center justify-between">
      <BrandLogo />
      <ul class="hidden space-x-8 lg:flex">
        <li>
          <NuxtLinkLocale to="/" class="hover:underline">
            {{ $t('nav.home') }}
          </NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale
            to="/"
            class="hover:underline"
            @click="() => scrollTo('products')"
          >
            {{ $t('nav.products') }}
          </NuxtLinkLocale>
        </li>
        <li class="hidden">
          <NuxtLinkLocale to="services" class="hover:underline">
            {{ $t('nav.services') }}
          </NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="about" class="hover:underline">
            {{ $t('nav.about') }}
          </NuxtLinkLocale>
        </li>
        <li>
          <NuxtLinkLocale to="contact" class="hover:underline">
            {{ $t('nav.contact') }}
          </NuxtLinkLocale>
        </li>
      </ul>
      <NuxtLink
        :to="appConfig.social.calendar"
        :external="true"
        target="_blank"
        class="rounded-full border-0 bg-slate-100 px-6 py-3 text-sm font-semibold"
      >
        {{ $t('nav.cta') }}
      </NuxtLink>
    </div>
  </div>
</template>
