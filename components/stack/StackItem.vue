<script setup lang="ts">
  defineProps<{
    title: string;
    icon: string;
  }>();

  const { getIcon } = useIcons();
</script>

<template>
  <div class="w-full max-w-sm rounded-2xl bg-slate-100 p-5">
    <div class="flex items-center">
      <div
        class="flex size-14 items-center justify-center rounded-lg bg-slate-50"
      >
        <component
          :is="getIcon(icon)"
          class="size-8"
          :class="{ 'text-red-500': icon === 'laravel' }"
        />
      </div>
      <div class="pl-4">
        <span class="font-semibold">{{ title }}</span>
      </div>
    </div>
  </div>
</template>
