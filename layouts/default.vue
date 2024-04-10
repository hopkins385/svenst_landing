<script setup lang="ts">
  const route = useRoute();
  const { t } = useI18n();
  const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true,
  });

  const metaData = computed(() => {
    return {
      title: t((route.meta.title as string) ?? t('default.meta.title')),
      description: t(
        (route.meta.description as string) ?? t('default.meta.description'),
      ),
    };
  });
</script>

<template>
  <Html
    :lang="head.htmlAttrs?.lang ?? 'de'"
    :dir="head.htmlAttrs?.dir ?? 'ltr'"
  >
    <Head>
      <Title>{{ metaData.title }}</Title>
      <Link
        v-for="link in head.link"
        :id="link.id"
        :key="link.id"
        :rel="link.rel"
        :href="link.href"
        :hreflang="link.hreflang"
      />
      <Meta
        v-for="meta in head.meta"
        :id="meta.id"
        :key="meta.id"
        :property="meta.property"
        :content="meta.content"
      />
      <Meta
        id="description"
        name="description"
        :content="metaData.description"
      />
    </Head>

    <Body>
      <NavBar />
      <!--Site main section -->
      <slot />
      <FooterSection />
      <CookieConsent />
    </Body>
  </Html>
</template>
