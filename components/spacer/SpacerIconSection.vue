<script setup lang="ts">
  import ArrowCircledSvg from '~/assets/svg/undraw_circled-arrow-sm.svg';
</script>

<template>
  <section class="relative py-24">
    <div class="absolute -bottom-10 right-40 flex rotate-12 space-x-10">
      <ArrowCircledSvg class="w-14 text-6xl opacity-70" />
      <span class="font-gochi text-2xl text-slate-700">
        The tools I use on<br />
        my day-to-day
      </span>
    </div>
    <div class="overflow-hidden">
      <SpacerIconWave />
    </div>
  </section>
</template>
