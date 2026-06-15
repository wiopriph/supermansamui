<script setup lang="ts">
const props = defineProps<{
  service: string
}>();

const { t, locale } = useI18n();
const localeRoute = useLocaleRoute();
const projectsPath = computed(() => `/projects/${locale.value}/%`);
const service = computed(() => props.service);

const { data: projects } = await useAsyncData(
  () => `service-projects-${locale.value}-${service.value}`,
  () => queryCollection('projects')
    .where('path', 'LIKE', projectsPath.value)
    .where('service', '=', service.value)
    .order('date', 'DESC')
    .all(),
  { watch: [locale, service] },
);

const latestProjects = computed(() => (projects.value || []).slice(0, 2));
</script>

<i18n lang="json">
{
  "ru": {
    "serviceProjects": {
      "eyebrow": "Наши работы",
      "title": "Последние проекты",
      "description": "Примеры выполненных работ по этой услуге на Самуи.",
      "readMore": "Смотреть проект",
      "viewAll": "Все проекты"
    }
  },
  "en": {
    "serviceProjects": {
      "eyebrow": "Our work",
      "title": "Recent projects",
      "description": "Examples of completed work for this service on Koh Samui.",
      "readMore": "View project",
      "viewAll": "All projects"
    }
  },
  "th": {
    "serviceProjects": {
      "eyebrow": "ผลงานของเรา",
      "title": "โครงการล่าสุด",
      "description": "ตัวอย่างงานบริการประเภทนี้ที่ทำเสร็จแล้วบนเกาะสมุย",
      "readMore": "ดูโครงการ",
      "viewAll": "ผลงานทั้งหมด"
    }
  }
}
</i18n>

<template>
  <section
    v-if="latestProjects.length"
    class="border-b border-default py-10 sm:py-14"
  >
    <div class="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div class="max-w-2xl">
        <p class="text-sm font-semibold uppercase tracking-wide text-primary">
          {{ t('serviceProjects.eyebrow') }}
        </p>

        <h2 class="mt-2 text-2xl font-semibold text-highlighted sm:text-3xl">
          {{ t('serviceProjects.title') }}
        </h2>

        <p class="mt-2 text-sm leading-6 text-muted sm:text-base">
          {{ t('serviceProjects.description') }}
        </p>
      </div>

      <UButton
        :to="localeRoute({ name: 'projects' })"
        variant="outline"
        color="neutral"
        trailingIcon="i-lucide-arrow-right"
        class="self-start sm:self-auto"
      >
        {{ t('serviceProjects.viewAll') }}
      </UButton>
    </div>

    <div class="mt-6 grid gap-5 md:grid-cols-2">
      <NuxtLink
        v-for="project in latestProjects"
        :key="project.id"
        :to="localeRoute({ name: 'projects-slug', params: { slug: project.slug } })"
        class="group grid overflow-hidden rounded-xl bg-default ring ring-default transition hover:bg-elevated/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:grid-cols-[180px_minmax(0,1fr)]"
      >
        <div class="aspect-video overflow-hidden bg-elevated sm:aspect-auto">
          <img
            :src="project.cover"
            :alt="project.title"
            loading="lazy"
            class="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          >
        </div>

        <div class="flex min-w-0 flex-col p-5">
          <p class="inline-flex items-center gap-1.5 text-xs font-medium text-muted">
            <UIcon
              name="i-lucide-map-pin"
              class="size-3.5"
            />
            {{ project.location }}
          </p>

          <h3 class="mt-2 text-lg font-semibold leading-6 text-highlighted">
            {{ project.title }}
          </h3>

          <p class="mt-2 line-clamp-2 text-sm leading-6 text-muted">
            {{ project.summary }}
          </p>

          <span class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary sm:mt-auto sm:pt-4">
            {{ t('serviceProjects.readMore') }}
            <UIcon
              name="i-lucide-arrow-up-right"
              class="size-4"
            />
          </span>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
