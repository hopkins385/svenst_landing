<script setup lang="ts">
  import SvensonIcon from '~/assets/svg/logo/svenson.svg';
</script>

<template>
  <div class="flex items-center justify-center">
    <span class="text-4xl">
      <SvensonIcon />
    </span>
    <NuxtLinkLocale
      to="/"
      class="pl-3 text-base font-semibold no-underline lg:text-lg"
    >
      Sven Stadhouders
    </NuxtLinkLocale>
  </div>
</template>
