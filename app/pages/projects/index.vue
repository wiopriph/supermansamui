<script setup lang="ts">
import type { Collections } from '@nuxt/content';


const { t, locale } = useI18n();
const localeRoute = useLocaleRoute();

const collectionName = computed(() => `projects_${locale.value}` as keyof Collections);

const { data: projects } = await useAsyncData(
  () => `projects-list-${locale.value}`,
  () => queryCollection(collectionName.value)
    .order('date', 'DESC')
    .all(),
  { watch: [locale] },
);

const projectItems = computed(() => projects.value || []);

const { labelFor: getServiceLabel } = useServiceLabels();

useHead(() => ({
  title: t('seo.title'),
  meta: [
    { name: 'description', content: t('seo.description') },
    { name: 'robots', content: 'index, follow, max-image-preview:large' },
    { property: 'og:title', content: t('seo.title') },
    { property: 'og:description', content: t('seo.description') },
    { property: 'og:image', content: 'https://supermansamui.com/images/services/land-clearing/hero.webp' },
    { property: 'og:image:width', content: '1200' },
    { property: 'og:image:height', content: '630' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: t('seo.title') },
    { name: 'twitter:description', content: t('seo.description') },
    { name: 'twitter:image', content: 'https://supermansamui.com/images/services/land-clearing/hero.webp' },
  ],
}));
</script>

<i18n lang="json">
{
  "ru": {
    "seo": {
      "title": "Проекты на Самуи",
      "description": "Примеры выполненных земляных работ, расчистки участков, дренажа и работы техники на Самуи."
    },
    "title": "Выполненные работы",
    "description": "Примеры объектов на Самуи: фото, задачи, услуги и краткое описание выполненных работ.",
    "empty": "Проекты пока не добавлены.",
    "readMore": "Смотреть проект"
  },
  "en": {
    "seo": {
      "title": "Projects on Koh Samui",
      "description": "Examples of completed earthworks, land clearing, drainage and machinery work on Koh Samui."
    },
    "title": "Completed work",
    "description": "Project examples from Koh Samui with photos, services, locations and short descriptions.",
    "empty": "No projects have been added yet.",
    "readMore": "View project"
  },
  "th": {
    "seo": {
      "title": "ผลงานบนเกาะสมุย",
      "description": "ตัวอย่างงานดิน ถางที่ งานระบายน้ำ และงานเครื่องจักรบนเกาะสมุย"
    },
    "title": "งานที่ทำเสร็จแล้ว",
    "description": "ตัวอย่างโครงการบนเกาะสมุย พร้อมรูปภาพ บริการ สถานที่ และคำอธิบายสั้น ๆ",
    "empty": "ยังไม่มีการเพิ่มผลงาน",
    "readMore": "ดูโครงการ"
  }
}
</i18n>

<template>
  <div class="py-10 sm:py-14 space-y-10">
    <section class="text-center space-y-4 mx-auto">
      <h1 class="text-3xl sm:text-4xl font-bold text-highlighted">
        {{ t('title') }}
      </h1>

      <p class="text-base sm:text-lg text-muted">
        {{ t('description') }}
      </p>
    </section>

    <div
      v-if="projectItems.length"
      class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      <NuxtLink
        v-for="project in projectItems"
        :key="project.id"
        :to="localeRoute({ name: 'projects-slug', params: { slug: project.slug } })"
        class="group flex h-full flex-col overflow-hidden rounded-lg bg-default ring ring-default transition hover:bg-elevated/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <div class="aspect-video overflow-hidden bg-elevated">
          <img
            :src="project.cover"
            :alt="project.title"
            loading="lazy"
            class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          >
        </div>

        <div class="flex flex-1 flex-col gap-4 p-5">
          <div class="flex flex-wrap gap-2">
            <UBadge
              color="primary"
              variant="soft"
            >
              {{ getServiceLabel(project.service) }}
            </UBadge>

            <UBadge
              color="neutral"
              variant="outline"
            >
              {{ project.location }}
            </UBadge>
          </div>

          <div class="space-y-2">
            <h2 class="text-lg font-semibold leading-7 text-highlighted">
              {{ project.title }}
            </h2>

            <p class="text-sm leading-6 text-muted">
              {{ project.summary }}
            </p>
          </div>

          <div class="mt-auto flex justify-end pt-1 text-sm">
            <span class="inline-flex items-center gap-1 font-medium text-primary">
              {{ t('readMore') }}
              <UIcon
                name="i-lucide-arrow-up-right"
                class="size-4"
              />
            </span>
          </div>
        </div>
      </NuxtLink>
    </div>

    <UAlert
      v-else
      color="neutral"
      variant="soft"
      :title="t('empty')"
    />
  </div>
</template>
