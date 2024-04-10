<script setup lang="ts">
  import { ArrowUpRightIcon } from 'lucide-vue-next';

  const appConfig = useAppConfig();
  const localePath = useLocalePath();
  const menu = ref(false);
</script>

<template>
  <section class="pt-40">
    <div class="relative bg-slate-900 pb-10 pt-20 text-slate-50">
      <div
        v-if="menu"
        class="absolute -top-40 left-1/2 z-10 mx-auto -translate-x-1/2 rounded-2xl bg-gradient-to-r from-[#0A6EA4] via-[#0c79b5] to-[#0A6EA4] p-16"
      >
        <div class="grid gap-20 lg:grid-cols-2">
          <div class="space-y-4 text-slate-50">
            <h3 class="text-5xl font-bold">Get in touch with me</h3>
            <p>
              I am always open to new opportunities and collaborations. Feel
              free to reach out to me.
            </p>
          </div>

          <div class="flex flex-col justify-center">
            <div class="flex space-x-4">
              <input type="text" class="w-full rounded-lg p-2" />
              <Button>Send</Button>
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto">
        <div
          class="flex flex-col space-y-10 lg:flex-row lg:justify-between lg:space-y-0 lg:pb-5"
        >
          <div class="flex max-w-xl flex-col space-y-12">
            <p class="text-5xl font-bold">Lets make something great together</p>
            <span>
              <Button
                variant="outline"
                class="flex items-center justify-center rounded-full px-6 font-bold text-slate-900"
                @click="() => navigateTo(localePath('contact'))"
              >
                Contact Me
                <ArrowUpRightIcon class="ml-3 size-5" />
              </Button>
            </span>
          </div>
          <div class="w-full max-w-lg">
            <div class="">
              <p class="text-lg">
                I am a software manager based in Germany. I have a passion for
                creating software that is both functional and beautiful. I am
                always looking for new opportunities to learn and grow.
              </p>
            </div>
            <div class="flex space-x-4 py-8">
              <NuxtLink
                :to="appConfig.social.email"
                :external="true"
                class="whitespace-nowrap rounded-full border bg-transparent px-6 py-2 hover:bg-slate-800"
              >
                Email Me
              </NuxtLink>
              <NuxtLink
                :to="appConfig.social.linkedin"
                :external="true"
                target="_blank"
                class="whitespace-nowrap rounded-full border bg-transparent px-6 py-2 hover:bg-slate-800"
              >
                LinkedIn
              </NuxtLink>
              <NuxtLink
                :to="appConfig.social.github"
                :external="true"
                target="_blank"
                class="whitespace-nowrap rounded-full border bg-transparent px-6 py-2 hover:bg-slate-800"
              >
                GitHub
              </NuxtLink>
            </div>
            <div class="flex space-x-2 whitespace-nowrap">
              <span>{{ $t('lang.switch') }}</span>
              <SwitchLang />
            </div>
          </div>
        </div>
        <hr class="my-10 border-t border-slate-700" />
        <div
          class="flex flex-col items-center justify-center space-y-5 lg:flex-row lg:justify-between lg:space-y-0"
        >
          <ul class="flex space-x-4 font-semibold">
            <li>
              <NuxtLinkLocale to="/" class="hover:underline">
                {{ $t('nav.home') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="privacy" class="hover:underline">
                {{ $t('nav.privacy') }}
              </NuxtLinkLocale>
            </li>
            <li>
              <NuxtLinkLocale to="imprint" class="hover:underline">
                {{ $t('nav.imprint') }}
              </NuxtLinkLocale>
            </li>
          </ul>

          <div class="text-center">
            <!-- Copyright -->
            <span class="text-slate-400">
              &copy; 2024 Sven Stadhouders. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
