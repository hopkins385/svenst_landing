<script setup lang="ts">
  const { getIcon } = useIcons();

  const iconNames = [
    'html',
    'css',
    'tailwind',
    'outlook',
    'powerpoint',
    'excel',
    'python',
    'vue',
    'typescript',
    'pgsql',
  ];

  function getWaveTopPadding(index: number) {
    // 0, 4, 8 -> mt-0
    // 1, 5, 9 -> mt-8
    // 2, 6, 10 -> mt-14
    return `mt-${index % 4 === 0 ? 0 : index % 4 === 1 ? 8 : 14}`;
  }
</script>

<template>
  <div class="-mx-10 flex justify-between space-x-10">
    <SpacerIconBox
      v-for="(iconName, index) in iconNames"
      :key="index"
      :class="getWaveTopPadding(index)"
    >
      <component :is="getIcon(iconName)" class="size-11" />
    </SpacerIconBox>
  </div>
</template>
