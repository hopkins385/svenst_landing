<script setup lang="ts">
  import {
    StampIcon,
    HourglassIcon,
    UsersIcon,
    DownloadIcon,
  } from 'lucide-vue-next';
  import ArrowCircledSvg from '~/assets/svg/undraw_circled-arrow-sm.svg';

  const ringRef = ref<HTMLElement | null>(null);

  const OPTIONS = {
    text: 'Download CV • Download CV • ',
    size: '1',
    radius: '5.5',
  };
  const CHARS = OPTIONS.text.split('');
  const length = CHARS.length;

  const makeRing = () => {
    if (!ringRef.value) return;
    ringRef.value.innerHTML = '';
    ringRef.value.style.setProperty('--total', length);
    ringRef.value.style.setProperty('--radius', OPTIONS.radius);
    ringRef.value.style.setProperty('--font-size', OPTIONS.size);
    const HIDDEN_CHARS = Object.assign(document.createElement('span'), {
      ariaHidden: true,
    }) as HTMLSpanElement;

    for (let c = 0; c < length; c++) {
      HIDDEN_CHARS.innerHTML += `<span style="--index: ${c}">${CHARS[c]}</span>`;
    }
    ringRef.value.appendChild(HIDDEN_CHARS);
    ringRef.value.innerHTML += `<span class="sr-only">${OPTIONS.text}</span>`;
  };

  const hasCVDownload = false;

  onMounted(() => {
    if (hasCVDownload) makeRing();
  });
</script>

<template>
  <SectionContainer
    class="bg-gradient-to-b from-slate-50 via-slate-50 to-white"
  >
    <div class="grid lg:grid-cols-2">
      <div class="z-0">
        <h2 class="max-w-lg text-4xl font-bold lg:text-5xl">
          {{ $t('home.value.title1') }}
          <span class="relative whitespace-nowrap text-sky-700">
            <ShapeUnderline
              class="absolute left-0 top-11 fill-blue-300/50"
              style="z-index: -1"
            />
            {{ $t('home.value.titleHighlight') }}
          </span>
          {{ $t('home.value.title2') }}
        </h2>
      </div>
      <div>
        <p class="pt-8 text-lg lg:pt-0">
          Experience the advantage of an all-inclusive project solution, where
          excellence, speed, and responsiveness converge to ensure the highest
          quality outcome.
        </p>
      </div>
    </div>
    <div class="relative grid gap-32 pt-20 lg:grid-cols-3 lg:pt-28">
      <div class="lg:col-span-1">
        <div class="flex flex-col">
          <div class="flex">
            <div
              class="flex size-20 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-50 shadow-xl"
            >
              <StampIcon class="size-7 stroke-1.5" />
            </div>
            <div class="pl-6">
              <h3 class="pb-2 text-lg font-bold">Excellence</h3>
              <p>
                I take pride in doing things well. All client work is done with
                the best quality possible.
              </p>
            </div>
          </div>
          <div class="mb-4 h-20">
            <div class="ml-10 h-full border-l-2"></div>
          </div>
          <div class="flex">
            <div
              class="flex size-20 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-50 shadow-xl"
            >
              <HourglassIcon class="size-7 stroke-1.5" />
            </div>
            <div class="pl-6">
              <h3 class="pb-2 text-lg font-bold">Know How</h3>
              <p>
                I like to work hard and fast. I know how important deadlines are
                to my clients.
              </p>
            </div>
          </div>
          <div class="mb-4 h-20">
            <div class="border-l-dotted ml-10 h-full border-l-2"></div>
          </div>
          <div class="flex">
            <div
              class="flex size-20 shrink-0 items-center justify-center rounded-full bg-slate-800 text-slate-50 shadow-xl"
            >
              <UsersIcon class="size-7 stroke-1.5" />
            </div>
            <div class="pl-6">
              <h3 class="pb-2 text-lg font-bold">Reliability</h3>
              <p>
                You can rely on me to be responsive and clear whenever we work
                together.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="relative lg:col-span-2 lg:pl-20">
        <div
          class="absolute bottom-0 right-10 z-10 grid h-40 w-96 grid-cols-2 rounded-2xl bg-sky-800/90 text-slate-50 backdrop-blur-sm lg:right-24"
        >
          <div
            class="flex flex-col items-center justify-center space-y-2 font-bold"
          >
            <span class="text-4xl">10</span>
            <span class="text-sm">Years experience</span>
          </div>
          <div
            class="flex flex-col items-center justify-center space-y-2 font-bold"
          >
            <span class="text-4xl">150</span>
            <span class="text-sm">Projects completed</span>
          </div>
        </div>
        <div class="relative pb-20" style="height: 600px">
          <div
            v-if="hasCVDownload"
            class="group absolute left-1/2 top-1/2 flex size-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 backdrop-blur-sm"
          >
            <div class="animate-spin-slow">
              <span ref="ringRef" class="text-ring"></span>
            </div>
            <div
              class="absolute flex size-16 items-center justify-center rounded-full bg-slate-950 text-slate-200"
            >
              <DownloadIcon class="size-6 stroke-1.5" />
            </div>
          </div>
          <NuxtImg
            src="images/teamwork-2.png"
            alt="Teamwork"
            format="webp"
            class="size-full rounded-xl object-cover"
          />
        </div>
      </div>
      <div class="absolute -bottom-20 left-20 flex -rotate-6 space-x-10">
        <ArrowCircledSvg class="text-7xl opacity-70" />
        <span class="whitespace-pre-wrap font-gochi text-2xl text-slate-700">
          {{ $t('home.value.slogan') }}
        </span>
      </div>
    </div>
  </SectionContainer>
</template>
