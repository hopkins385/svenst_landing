<script setup lang="ts">
  const showcases = ref([
    {
      image: '/images/ragna4.png',
      category: 'development',
      title: 'RAGNA Desktop App',
      description:
        'RAGNA is a desktop app that helps you manage your tasks and projects with ease. It is designed to be simple and intuitive to use.',
      link: {
        href: 'https://ragna.app',
        text: 'Download',
        external: true,
      },
    },
    {
      image: '/images/platform2.png',
      category: 'development',
      title: 'GenAI Platform',
      description:
        'RAGNA is a desktop app that helps you manage your tasks and projects with ease. It is designed to be simple and intuitive to use.',
      link: {
        href: 'https://app.svenson.ai',
        text: 'Try it out',
        external: true,
      },
    },
    {
      image: '/images/extension1.png',
      category: 'development',
      title: 'Browser Extension',
      description:
        'RAGNA is a desktop app that helps you manage your tasks and projects with ease. It is designed to be simple and intuitive to use.',
      link: {
        href: '/contact',
        text: 'Contact Sales',
        external: false,
      },
    },
  ]);
</script>

<template>
  <SectionContainer id="products">
    <div class="flex flex-col items-center justify-center space-y-5">
      <h2 class="text-center text-5xl font-bold">
        {{ $t('showcase.title') }}
      </h2>
      <p class="max-w-sm text-center text-lg leading-relaxed">
        {{ $t('showcase.subtitle') }}
      </p>
    </div>
    <div class="space-y-14 pt-14">
      <ShowcaseBox
        v-for="(showcase, index) in showcases"
        :key="index"
        :title="showcase.title"
        :description="showcase.description"
        :image="showcase.image"
        :category="showcase.category"
        :link="showcase.link"
      />
    </div>
  </SectionContainer>
</template>
