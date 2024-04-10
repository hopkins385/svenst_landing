<script setup lang="ts">
  import FordIcon from '~icons/simple-icons/ford';
  import BoschIcon from '~icons/simple-icons/bosch';
  import VWIcon from '~icons/simple-icons/volkswagen';
  import SvensonIcon from '~/assets/svg/logo/svenson.svg';

  const props = defineProps<{
    number: string;
    icon: string;
    company: string;
    title: string;
    description: string;
    date: string;
  }>();

  function iconComponent() {
    return {
      ford: FordIcon,
      bosch: BoschIcon,
      vw: VWIcon,
      svenson: SvensonIcon,
    }[props.icon];
  }

  function iconColor() {
    return {
      ford: 'text-blue-900',
      bosch: 'text-gray-600',
      vw: 'text-blue-900',
    }[props.icon];
  }
</script>

<template>
  <div class="relative flex flex-col border-0">
    <div class="absolute -top-6 right-0" :style="{ opacity: 0.02 }">
      <span class="text-9xl font-bold">{{ number }}</span>
    </div>
    <div class="flex items-center space-x-2">
      <div
        class="flex size-11 items-center justify-center rounded-lg border border-slate-100 bg-slate-100"
      >
        <component
          :is="iconComponent()"
          class="size-6 text-2xl"
          :class="iconColor()"
        />
      </div>
      <span class="text-sm font-semibold">{{ company }}</span>
    </div>
    <div class="pb-1 pt-3">
      <span class="text-sm font-semibold text-blue-900">
        {{ date }}
      </span>
    </div>
    <div>
      <span class="text-lg font-bold">{{ title }}</span>
      <p class="pt-3 text-base">
        {{ description }}
      </p>
    </div>
  </div>
</template>
