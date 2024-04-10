<script setup lang="ts">
  definePageMeta({
    title: 'about.meta.title',
    desription: 'about.meta.description',
  });

  const carrerSteps = ref([
    {
      icon: 'vw',
      date: '2006 - 2009',
      company: 'VW',
      title: 'Apprenticeship',
      description: 'Passenger car mechatronics technician.',
    },
    {
      icon: 'fh',
      date: '2009 - 2013',
      company: 'TH Cologne',
      title: 'Bachelor of Science',
      description: 'Electrical engineering and information technology.',
    },
    {
      icon: 'ford',
      date: '11/2013 - 03/2015',
      company: 'Ford',
      title: 'Project Engineer',
      description: 'Led prototype developments.',
    },
    {
      icon: 'bosch',
      date: '04/2015 - 12/2017',
      company: 'Bosch',
      title: 'Software System Engineer',
      description: 'Developed software for hybrid vehicles.',
    },
    {
      icon: 'bosch',
      date: '01/2018 - 03/2021',
      company: 'Bosch',
      title: 'Lead Engineer & Deputy Project Manager',
      description: 'Managed a team of software engineers.',
    },
    {
      icon: 'whu',
      date: '03/2021 - 11/2022',
      company: 'WHU',
      title: 'MBA',
      description: 'Studied business administration.',
    },
    {
      icon: 'svenson',
      date: '03/2023 - Present',
      company: 'Svenson.ai',
      title: 'Founder & CTO',
      description: 'Started my own venture.',
    },
  ]);

  const stackItems = ref([
    {
      title: 'TypeScript',
      icon: 'typescript',
    },
    {
      title: 'Python',
      icon: 'python',
    },
    {
      title: 'Vue.js',
      icon: 'vue',
    },
    {
      title: 'Tailwind CSS',
      icon: 'tailwind',
    },
    {
      title: 'NestJS',
      icon: 'nestjs',
    },
    {
      title: 'PostgreSQL',
      icon: 'pgsql',
    },
    {
      title: 'Docker',
      icon: 'docker',
    },
    {
      title: 'Laravel',
      icon: 'laravel',
    },
    {
      title: 'C++',
      icon: 'cplusplus',
    },
    {
      title: 'Swift',
      icon: 'swift',
    },
  ]);

  const i18n = useI18n();
</script>

<template>
  <SectionContainer>
    <div class="max-w-3xl pb-20">
      <h1 class="text-6xl font-bold">{{ $t('about.intro.title') }}</h1>
      <article v-if="i18n.locale.value === 'de'" class="space-y-4 pt-8 text-lg">
        <p>
          Als leidenschaftlicher und erfahrener Software-Ingenieur unterstütze
          ich Unternehmen dabei, das enorme Potential Generativer KI-Systeme
          voll auszuschöpfen. Mit maßgeschneiderten Lösungen optimieren wir
          gemeinsam Ihre Prozesse, steigern die Effizienz und erschließen neue
          Wachstumschancen.
        </p>
        <p>
          Mein technisches Know-how verbinde ich mit ausgeprägtem
          Geschäftsverständnis und Projekterfahrung aus vielen Branchen. So
          entstehen KI-Anwendungen, die höchsten technischen Ansprüchen genügen
          und gleichzeitig echten wirtschaftlichen Mehrwert liefern.
        </p>
        <p>
          In vielen erfolgreichen Projekten, auch mit großen Tech-Unternehmen,
          konnte ich bereits beweisen, wie sich innovative Ideen in profitable
          Lösungen verwandeln lassen. Dabei liegt mir eines besonders am Herzen:
          Eine vertrauensvolle und enge Zusammenarbeit mit meinen Kunden, um
          gemeinsam das bestmögliche Ergebnis zu erreichen.
        </p>
        <p>
          Lassen Sie uns darüber sprechen, wie Generative KI auch Ihr
          Unternehmen voranbringen kann. Als Ihr kompetenter und verlässlicher
          Partner freue ich mich darauf, Ihre individuellen Anforderungen
          kennenzulernen und Sie mit Begeisterung, Expertise und Kreativität zu
          unterstützen.
        </p>
        <p>
          Sprechen Sie mich an - gemeinsam bringen wir Ihr KI-Projekt zum Erfolg
        </p>
      </article>
      <article v-if="i18n.locale.value === 'en'" class="space-y-4 pt-8 text-lg">
        <p>
          As a passionate and experienced software engineer, I help businesses
          fully harness the tremendous potential of Generative AI systems. With
          tailored solutions, together we optimize your processes, increase
          efficiency, and unlock new growth opportunities.
        </p>
        <p>
          I combine my technical expertise with a strong business acumen and
          project experience from various industries. The result is AI
          applications that meet the highest technical standards while
          delivering real economic value.
        </p>
        <p>
          Through many successful projects, including collaborations with major
          tech companies, I have proven my ability to transform innovative ideas
          into profitable solutions. One thing is particularly close to my
          heart: a trusting and close collaboration with my clients to achieve
          the best possible outcome together.
        </p>
        <p>
          Let’s discuss how Generative AI can advance your business. As your
          competent and reliable partner, I look forward to understanding your
          unique requirements and supporting you with enthusiasm, expertise, and
          creativity.
        </p>
        <p>
          Get in touch with me - together, we will lead your AI project to
          success!
        </p>
      </article>
      <p class="pt-20">
        <span class="font-dafoe text-3xl">Sven Stadhouders</span>
      </p>
    </div>
    <div class="grid grid-cols-3 py-20">
      <div class="col-span-1">
        <h2 class="whitespace-pre-wrap text-5xl font-bold">
          {{ $t('about.career.title') }}
        </h2>
      </div>
      <div class="relative col-span-2 grid grid-cols-2 gap-x-10 gap-y-20">
        <div class="absolute bottom-10 right-96 border">here</div>
        <CareerStep
          v-for="step in carrerSteps"
          :key="step.date"
          v-bind="step"
          :number="String(carrerSteps.indexOf(step) + 1).padStart(2, '0')"
        />
      </div>
    </div>
    <div class="grid grid-cols-2 pt-40">
      <div class="mr-32 rounded-2xl">
        <NuxtImg
          src="images/mac-source-code.png"
          format="webp"
          width="1024"
          height="1024"
          alt="Sven Stadhouders"
          class="rounded-2xl"
        />
      </div>
      <div>
        <h2 class="text-5xl font-bold">My stack for modern web applications</h2>
        <p class="py-10">
          Qui in amet consequat in. Eu consequat ullamco aliqua et. Laborum est
          fugiat ex adipisicing commodo mollit sint do non nulla. Lorem
          voluptate aute ut veniam adipisicing mollit dolor sunt ipsum veniam ea
          aute. Magna sunt dolore sunt. Lorem laborum mollit amet anim ad velit
          sunt aliquip in sunt ipsum.
        </p>
        <div class="relative grid grid-cols-2 gap-10">
          <StackItem
            v-for="item in stackItems"
            :key="item.icon"
            v-bind="item"
          />
        </div>
      </div>
    </div>
  </SectionContainer>
</template>
