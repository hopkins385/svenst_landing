<script setup lang="ts">
  defineProps<{
    text: String;
  }>();
</script>

<template>
  <div
    class="absolute flex h-12 w-fit min-w-52 items-center justify-center rounded-2xl border border-slate-100 bg-gray-50/90 px-4 shadow-md shadow-neutral-100 backdrop-blur-sm lg:right-20"
  >
    <span>
      <slot name="icon" />
    </span>
    <span class="text-sm font-semibold">{{ text }}</span>
  </div>
</template>
