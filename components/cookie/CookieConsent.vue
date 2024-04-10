<script setup lang="ts">
  import { CookieIcon } from 'lucide-vue-next';
  const consent = consentStore();

  /*
      :class="[
      'fixed inset-x-0 bottom-0 z-[200] w-full duration-700 sm:bottom-4 sm:right-4 sm:max-w-md',
      !isOpen
        ? 'translate-y-8 opacity-0 transition-[opacity,transform]'
        : 'translate-y-0 opacity-100 transition-[opacity,transform]',
      hide && 'hidden',
    ]"
    */
  onBeforeMount(() => {
    consent.init();
  });
</script>

<template>
  <div
    v-if="consent.showModal"
    class="fixed bottom-0 right-0 z-[300] w-full md:max-w-md"
  >
    <div
      class="m-3 rounded-md border border-border bg-background shadow-lg dark:bg-secondary dark:shadow-none"
    >
      <div class="grid gap-2">
        <div
          class="flex h-14 items-center justify-between border-b border-border p-4 dark:border-background/20"
        >
          <h1 class="text-lg font-medium">{{ $t('cookie.title') }}</h1>
          <CookieIcon class="size-[1.2rem]" />
        </div>
        <div class="space-y-4 p-4 text-start text-sm font-normal">
          <p>
            {{ $t('cookie.text') }}
            <NuxtLinkLocale to="privacy" class="underline">
              {{ $t('cookie.link') }}
            </NuxtLinkLocale>
          </p>
          <p>{{ $t('cookie.hint') }}</p>
        </div>
        <div
          class="flex gap-2 border-t border-border p-4 py-5 dark:bg-background/20"
        >
          <Button class="w-full" @click="consent.allAccepted()">
            {{ $t('cookie.accept') }}
          </Button>
          <Button
            class="w-full"
            variant="secondary"
            @click="consent.closeModal()"
          >
            {{ $t('cookie.decline') }}
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>
