<script setup lang="ts">
const props = defineProps<{
  service?: string
  limit?: number
}>();

const { t, locale } = useI18n();
const localeRoute = useLocaleRoute();
const service = computed(() => props.service);
const collectionName = computed(() => `projects_${locale.value}` as 'projects_en' | 'projects_ru' | 'projects_th');

const { data: projects } = await useAsyncData(
  () => `service-projects-${locale.value}-${service.value ?? 'all'}`,
  () => {
    const q = queryCollection(collectionName.value).order('date', 'DESC');

    if (service.value) q.where('service', '=', service.value);

    return q.all();
  },
  { watch: [locale, service] },
);

const latestProjects = computed(() => (projects.value || []).slice(0, props.limit ?? (props.service ? 2 : 4)));
</script>

<i18n lang="json">
{
  "ru": {
    "serviceProjects": {
      "title": "Последние проекты",
      "titleAll": "Выполненные работы на Самуи",
      "description": "Примеры выполненных работ по этой услуге на Самуи.",
      "descriptionAll": "Расчистка участков, рытьё котлованов, дренаж, выравнивание - смотрите реальные объекты с фото.",
      "readMore": "Смотреть проект",
      "viewAll": "Все проекты"
    }
  },
  "en": {
    "serviceProjects": {
      "title": "Recent projects",
      "titleAll": "Completed work on Koh Samui",
      "description": "Examples of completed work for this service on Koh Samui.",
      "descriptionAll": "Land clearing, pool excavations, drainage, leveling - real projects with photos from across the island.",
      "readMore": "View project",
      "viewAll": "All projects"
    }
  },
  "th": {
    "serviceProjects": {
      "title": "โครงการล่าสุด",
      "titleAll": "งานที่เสร็จแล้วบนเกาะสมุย",
      "description": "ตัวอย่างงานบริการประเภทนี้ที่ทำเสร็จแล้วบนเกาะสมุย",
      "descriptionAll": "เคลียร์พื้นที่ ขุดบ่อ ระบายน้ำ ปรับระดับ - ดูงานจริงพร้อมรูปภาพจากทั่วเกาะ",
      "readMore": "ดูโครงการ",
      "viewAll": "ผลงานทั้งหมด"
    }
  }
}
</i18n>

<template>
  <section
    v-if="latestProjects.length"
    class="py-10 sm:py-14"
  >
    <div class="space-y-2 text-center">
      <h2 class="text-2xl sm:text-3xl font-semibold">
        {{ service ? t('serviceProjects.title') : t('serviceProjects.titleAll') }}
      </h2>

      <p class="text-sm text-muted max-w-2xl mx-auto">
        {{ service ? t('serviceProjects.description') : t('serviceProjects.descriptionAll') }}
      </p>
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

    <div class="flex justify-center mt-6">
      <UButton
        :to="localeRoute({ name: 'projects' })"
        variant="outline"
        color="neutral"
        trailingIcon="i-lucide-arrow-right"
      >
        {{ t('serviceProjects.viewAll') }}
      </UButton>
    </div>
  </section>
</template>
