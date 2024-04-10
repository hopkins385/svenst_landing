<script setup lang="ts">
  import {
    ArrowUpRightIcon,
    SquareTerminalIcon,
    UserRoundIcon,
  } from 'lucide-vue-next';

  const props = defineProps<{
    category: string;
    image: string;
    title: string;
    description: string;
    link: {
      href: string;
      text: string;
      external: boolean;
    };
  }>();

  function getCategoryIcon() {
    return {
      development: SquareTerminalIcon,
      consulting: UserRoundIcon,
    }[props.category];
  }

  function getCategoryTitle() {
    return {
      development: 'Product Development',
      consulting: 'Consulting',
    }[props.category];
  }
</script>

<template>
  <div
    class="mx-auto w-full max-w-6xl rounded-2xl border border-slate-100 bg-slate-50 p-10 lg:p-14"
  >
    <div class="grid lg:grid-cols-12">
      <div class="flex flex-col justify-between pr-12 pt-12 lg:col-span-5">
        <div class="space-y-4">
          <div class="flex items-center text-slate-500">
            <component
              :is="getCategoryIcon()"
              class="mr-2 inline-block size-5"
            />
            <span class="font-semibold"> {{ getCategoryTitle() }} </span>
          </div>
          <h2 class="pt-2 text-3xl font-semibold">{{ title }}</h2>
          <p class="leading-loose">
            {{ description }}
          </p>
        </div>
        <div class="pb-8 text-sky-600">
          <NuxtLink
            :to="link.href"
            :external="link.external"
            class="font-semibold hover:underline"
          >
            {{ link.text }}
          </NuxtLink>
          <ArrowUpRightIcon class="ml-2 inline-block size-5 stroke-1.5" />
        </div>
      </div>
      <div
        class="rounded-2xl border border-slate-100 lg:col-span-7 lg:-mb-14 lg:-mr-14 lg:ml-14"
      >
        <div class="h-[26.5rem] overflow-hidden rounded-2xl">
          <NuxtImg
            :src="image"
            alt="RAGNA Desktop App"
            format="webp"
            class="size-full rounded-2xl object-cover transition-all duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
</template>
