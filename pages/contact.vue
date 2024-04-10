<script setup lang="ts">
  import { useForm } from 'vee-validate';
  import { toTypedSchema } from '@vee-validate/zod';
  import {
    LoaderCircleIcon,
    CheckCircleIcon,
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
        <h1 class="text-6xl font-semibold">
          How can I help you? <br />
          Let's get in touch.
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
              <span class="text-base font-semibold">Email Me</span>
              <p class="pb-6 pt-4">
                I will usually email you back within an hour
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
              <span class="text-base font-semibold">Schedule a Call</span>
              <p class="pb-6 pt-4">I’m available weekdays from 9AM to 5PM</p>
              <NuxtLink
                :to="appConfig.social.calendar"
                :external="true"
                target="_blank"
                class="text-base text-sky-600 hover:underline"
              >
                Calendar
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
      <div class="px-20">
        <div v-if="success">
          <div class="flex items-center gap-3">
            <CheckCircleIcon class="size-8 shrink-0" />
            <h2 class="text-3xl font-semibold">
              Your message has been sent successfully.
            </h2>
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
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message here..."
                  v-bind="componentField"
                  class="h-40"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" type="radio" name="type">
            <FormItem class="space-y-3">
              <FormLabel>Expected Service</FormLabel>

              <FormControl>
                <RadioGroup
                  class="flex flex-col space-y-1"
                  v-bind="componentField"
                >
                  <FormItem class="flex items-center gap-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="consulting" />
                    </FormControl>
                    <FormLabel class="font-normal"> Consulting </FormLabel>
                  </FormItem>
                  <FormItem class="flex items-center gap-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="training" />
                    </FormControl>
                    <FormLabel class="font-normal">
                      Workshop / Training
                    </FormLabel>
                  </FormItem>
                  <FormItem class="flex items-center gap-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="software" />
                    </FormControl>
                    <FormLabel class="font-normal">
                      Software Development
                    </FormLabel>
                  </FormItem>
                  <FormItem class="flex items-center gap-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="all" />
                    </FormControl>
                    <FormLabel class="font-normal"> All from above </FormLabel>
                  </FormItem>
                  <FormItem class="flex items-center gap-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="other" />
                    </FormControl>
                    <FormLabel class="font-normal"> Other </FormLabel>
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
            Submit
          </Button>
        </form>
      </div>
    </div>
  </SectionContainer>
</template>
