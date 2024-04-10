<script setup lang="ts">
  const { locale, locales } = useI18n();
  const switchLocalePath = useSwitchLocalePath();
  const availableLocales = computed(() => {
    return locales.value.filter((i) => i.code !== locale.value);
  });
</script>
<template>
  <div>
    <NuxtLink
      v-for="lang in availableLocales"
      :key="lang.code"
      :to="switchLocalePath(lang.code)"
    >
      {{ lang.name }}
    </NuxtLink>
  </div>
</template>
