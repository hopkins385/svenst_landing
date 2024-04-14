<script setup lang="ts">
  import {
    ComputerIcon,
    GithubIcon,
    LinkedinIcon,
    MailIcon,
    PresentationIcon,
    SquareGanttChartIcon,
  } from 'lucide-vue-next';
  import FunArrowSvg from '~/assets/svg/undraw_fun-arrow.svg';

  const appConfig = useAppConfig();
</script>

<template>
  <section id="home-hero">
    <div
      class="mx-auto overflow-hidden px-7 pb-24 lg:container lg:h-screen"
      style="height: calc(100vh - 110px)"
    >
      <div class="h-full lg:grid lg:grid-cols-2 lg:gap-20">
        <div
          class="z-0 flex flex-col items-center justify-center space-y-8 py-12 lg:items-start"
        >
          <h1 class="text-center text-5xl font-bold lg:text-left lg:text-6xl">
            <span class="relative">
              <ShapeUnderline
                class="absolute left-0 top-14 fill-blue-300/50"
                style="z-index: -1"
              />
              {{ $t('home.hero.titleHighlight') }}
            </span>
            {{ $t('home.hero.title') }}
          </h1>
          <p class="text-center text-lg lg:text-left">
            {{ $t('home.hero.subtitle') }}
          </p>
          <div class="items-right flex w-full justify-center lg:justify-start">
            <NuxtLink
              :to="appConfig.social.calendar"
              :external="true"
              target="_blank"
              class="rounded-full bg-slate-900 px-6 py-3 text-sm text-white"
            >
              {{ $t('home.hero.cta') }}
            </NuxtLink>
            <div
              class="flex items-center justify-center space-x-2 pl-5 lg:space-x-4 lg:pl-10"
            >
              <NuxtLink
                :to="appConfig.social.linkedin"
                target="_blank"
                rel="noopener"
                :external="true"
                class="flex size-10 shrink-0 items-center justify-center rounded-full border hover:bg-slate-100"
              >
                <LinkedinIcon class="size-4 stroke-1.5" />
              </NuxtLink>
              <NuxtLink
                :to="appConfig.social.email"
                :external="true"
                class="flex size-10 shrink-0 items-center justify-center rounded-full border hover:bg-slate-100"
              >
                <MailIcon class="size-4 stroke-1.5" />
              </NuxtLink>
              <NuxtLink
                :to="appConfig.social.github"
                target="_blank"
                rel="noopener"
                :external="true"
                class="flex size-10 shrink-0 items-center justify-center rounded-full border hover:bg-slate-100"
              >
                <GithubIcon class="size-4 stroke-1.5" />
              </NuxtLink>
            </div>
          </div>
        </div>
        <div class="size-full py-10 lg:pl-32 lg:pt-32">
          <div class="relative size-full">
            <div class="absolute -top-20 right-10 flex rotate-6 space-x-10">
              <FunArrowSvg class="rotate-180 text-7xl opacity-70" />
              <span
                class="whitespace-pre-wrap font-gochi text-2xl text-slate-700"
              >
                {{ $t('home.hero.slogan') }}
              </span>
            </div>
            <HomeFloatBox
              :text="$t('home.hero.floatText1')"
              class="-left-28 top-24"
            >
              <template #icon>
                <ComputerIcon
                  class="mr-2 size-5 -rotate-6 text-violet-800 drop-shadow-sm"
                />
              </template>
            </HomeFloatBox>
            <HomeFloatBox
              :text="$t('home.hero.floatText2')"
              class="top-40"
              style="right: -1.5rem"
            >
              <template #icon>
                <SquareGanttChartIcon
                  class="mr-2 size-5 text-emerald-600 drop-shadow-sm"
                />
              </template>
            </HomeFloatBox>
            <HomeFloatBox
              :text="$t('home.hero.floatText3')"
              class="-left-10 bottom-24"
            >
              <template #icon>
                <PresentationIcon
                  class="mr-2 size-5 text-lime-500 drop-shadow-sm"
                />
              </template>
            </HomeFloatBox>
            <NuxtImg
              src="/images/teamwork-2.png"
              alt="Hero Image"
              format="webp"
              class="size-full rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
