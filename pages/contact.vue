<script setup lang="ts">
  import { useForm } from 'vee-validate';
  import { toTypedSchema } from '@vee-validate/zod';
  import {
    LoaderCircleIcon,
    CheckCircleIcon,
    CircleXIcon,
    MailIcon,
    PhoneIcon,
  } from 'lucide-vue-next';
  import { contactFormSchema } from '~/schemas';

  definePageMeta({
    title: 'contact.meta.title',
    desription: 'contact.meta.description',
  });

  const appConfig = useAppConfig();
  const typedFormSchema = toTypedSchema(contactFormSchema);

  const form = useForm({
    validationSchema: typedFormSchema,
  });

  const success = ref(false);
  const submitError = ref(false);
  const isLoading = ref(false);

  const onSubmit = form.handleSubmit(async (values) => {
    submitError.value = false;
    isLoading.value = true;
    const { error } = await useFetch('/api/contact', {
      method: 'POST',
      body: {
        name: values.name,
        email: values.email,
        message: values.message,
        type: values.type,
      },
    });
    isLoading.value = false;
    if (!error.value) {
      success.value = true;
    } else {
      submitError.value = true;
    }
  });
</script>

<template>
  <SectionContainer>
    <div class="grid gap-32 lg:grid-cols-2">
      <div class="size-full bg-slate-50">
        <h1 class="whitespace-pre-wrap text-6xl font-semibold">
          {{ $t('contact.title') }}
        </h1>
        <div class="flex border-0 py-14 lg:justify-end">
          <NuxtImg
            src="/images/optimization.png"
            format="webp"
            alt="Contact us"
            class="h-80 w-[30rem] rounded-2xl object-cover lg:-mr-8"
          />
        </div>
        <div class="grid grid-cols-2 gap-8 p-10">
          <div class="flex">
            <div class="w-10 shrink-0">
              <MailIcon class="size-6 stroke-1.5 text-sky-600" />
            </div>
            <div class="w-full">
              <span class="text-base font-semibold">{{
                $t('contact.emailme.title')
              }}</span>
              <p class="pb-6 pt-4">
                {{ $t('contact.emailme.subtitle') }}
              </p>
              <NuxtLink
                :to="appConfig.social.email"
                class="text-base text-sky-600 hover:underline"
              >
                hi@svenson.ai
              </NuxtLink>
            </div>
          </div>
          <div class="flex">
            <div class="w-10 shrink-0">
              <PhoneIcon class="size-6 stroke-1.5 text-sky-600" />
            </div>
            <div class="w-full">
              <span class="text-base font-semibold">
                {{ $t('contact.callme.title') }}
              </span>
              <p class="pb-6 pt-4">
                {{ $t('contact.callme.subtitle') }}
              </p>
              <NuxtLink
                :to="appConfig.social.calendar"
                :external="true"
                target="_blank"
                class="text-base text-sky-600 hover:underline"
              >
                {{ $t('contact.callme.cta') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="px-20">
        <div v-if="success">
          <div class="flex items-center gap-3">
            <CheckCircleIcon class="size-8 shrink-0" />
            <span class="text-3xl font-semibold">
              {{ $t('contact.form.success') }}
            </span>
          </div>
        </div>
        <div v-else-if="submitError">
          <div class="flex items-center gap-3">
            <CircleXIcon class="size-8 shrink-0" />
            <span class="text-3xl font-semibold">
              {{ $t('contact.form.error') }}
            </span>
          </div>
        </div>
        <form v-else class="space-y-5" @submit="onSubmit">
          <FormField v-slot="{ componentField }" name="name">
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="John Smith"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="email">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="john@smith.com"
                  v-bind="componentField"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="message">
            <FormItem>
              <FormLabel>{{ $t('contact.form.message') }}</FormLabel>
              <FormControl>
                <Textarea
                  :placeholder="$t('contact.form.placeholder')"
                  v-bind="componentField"
                  class="h-40"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" type="radio" name="type">
            <FormItem class="space-y-3">
              <FormLabel>{{ $t('contact.form.services.title') }}</FormLabel>

              <FormControl>
                <RadioGroup
                  class="flex flex-col space-y-1"
                  v-bind="componentField"
                >
                  <FormItem class="flex items-center gap-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="consulting" />
                    </FormControl>
                    <FormLabel class="font-normal">
                      {{ $t('contact.form.services.consulting') }}
                    </FormLabel>
                  </FormItem>
                  <FormItem class="flex items-center gap-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="software" />
                    </FormControl>
                    <FormLabel class="font-normal">
                      {{ $t('contact.form.services.software') }}
                    </FormLabel>
                  </FormItem>
                  <FormItem class="flex items-center gap-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="training" />
                    </FormControl>
                    <FormLabel class="font-normal">
                      {{ $t('contact.form.services.workshop') }}
                    </FormLabel>
                  </FormItem>
                  <FormItem class="flex items-center gap-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel class="font-normal">
                      {{ $t('contact.form.services.all') }}
                    </FormLabel>
                  </FormItem>
                  <FormItem class="flex items-center gap-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="other" />
                    </FormControl>
                    <FormLabel class="font-normal">
                      {{ $t('contact.form.services.other') }}
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <div class="py-2">
            <Separator class="" />
          </div>
          <Button type="submit" class="w-full" :disabled="isLoading">
            <LoaderCircleIcon
              v-if="isLoading"
              class="mr-2 size-5 animate-spin stroke-1.5"
            />
            {{ $t('contact.form.button') }}
          </Button>
        </form>
      </div>
    </div>
  </SectionContainer>
</template>
