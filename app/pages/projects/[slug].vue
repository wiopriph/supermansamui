<script setup lang="ts">
import type { Collections } from '@nuxt/content';
import { getEquipmentById } from '~/data/equipment';


const SITE_URL = 'https://supermansamui.com';

const OG_LOCALE: Record<string, string> = {
  en: 'en_US',
  ru: 'ru_RU',
  th: 'th_TH',
};

function absoluteUrl(path: string): string {
  return path.startsWith('http') ? path : `${SITE_URL}${path}`;
}


const route = useRoute();
const { t, locale } = useI18n();
const localePath = useLocalePath();

const slug = computed(() => String(route.params.slug || ''));
const collectionName = computed(() => `projects_${locale.value}` as keyof Collections);

const { data: project } = await useAsyncData(
  () => `project-${locale.value}-${slug.value}`,
  () => queryCollection(collectionName.value).where('slug', '=', slug.value)
    .first(),
  { watch: [locale, slug] },
);

if (!project.value) {
  throw createError({ statusCode: 404, statusMessage: 'Project not found' });
}

const { data: relatedProjects } = await useAsyncData(
  () => `project-related-${locale.value}-${slug.value}`,
  async () => {
    const sameService = await queryCollection(collectionName.value)
      .where('service', '=', project.value!.service)
      .where('slug', '<>', slug.value)
      .order('date', 'DESC')
      .limit(3)
      .all();

    if (sameService.length >= 2) return sameService.slice(0, 3);

    const excludeSlugs = [slug.value, ...sameService.map(p => p.slug)];
    const needed = 3 - sameService.length;
    const others = await queryCollection(collectionName.value)
      .where('slug', 'NOT IN', excludeSlugs)
      .order('date', 'DESC')
      .limit(needed)
      .all();

    return [...sameService, ...others];
  },
  { watch: [locale, slug] },
);

// ─── Service helpers ──────────────────────────────────────────────────────────

const { labelFor, routeFor, relatedFor } = useServiceLabels();

const serviceLabel = computed(() => labelFor(project.value?.service ?? ''));
const servicePath = computed(() => routeFor(project.value?.service ?? ''));
const relatedServices = computed(() => relatedFor(project.value?.service ?? ''));

// ─── URLs & paths ─────────────────────────────────────────────────────────────

const projectPath = computed(() =>
  localePath({ name: 'projects-slug', params: { slug: slug.value } }),
);
const projectsListPath = computed(() => localePath({ name: 'projects' }));
const canonicalUrl = computed(() => absoluteUrl(projectPath.value));
const coverUrl = computed(() => absoluteUrl(project.value?.cover ?? ''));

// ─── Equipment used ──────────────────────────────────────────────────────────

const equipmentUsed = computed(() => (project.value?.equipment ?? []).map(id => getEquipmentById(id)).filter(Boolean));

// ─── Gallery ──────────────────────────────────────────────────────────────────

const galleryItems = computed(() =>
  (project.value?.gallery ?? []).map(item => ({
    src: item.src,
    alt: item.alt,
    title: item.alt,
  })),
);

// ─── Schema ───────────────────────────────────────────────────────────────────

const jsonLd = computed(() => {
  if (!project.value) return {};

  const images = [coverUrl.value, ...project.value.gallery.map(item => absoluteUrl(item.src))];
  const dateIso = new Date(project.value.date).toISOString();
  const businessRef = { '@id': `${SITE_URL}#business` };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${canonicalUrl.value}#article`,
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl.value },
        headline: project.value.title,
        description: project.value.summary,
        image: images,
        datePublished: dateIso,
        dateModified: dateIso,
        inLanguage: locale.value,
        author: businessRef,
        publisher: businessRef,
        keywords: [...new Set([serviceLabel.value, project.value.location, 'Koh Samui', 'Superman Samui'])].join(', '),
        articleSection: serviceLabel.value,
        about: {
          '@type': 'Service',
          name: serviceLabel.value,
          provider: businessRef,
          areaServed: project.value.location,
          serviceType: serviceLabel.value,
        },
        contentLocation: {
          '@type': 'Place',
          name: project.value.location,
          containedInPlace: { '@type': 'Place', name: 'Koh Samui, Surat Thani, Thailand' },
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl.value}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('nav.home'), item: absoluteUrl(localePath({ name: 'index' })) },
          { '@type': 'ListItem', position: 2, name: t('nav.projects'), item: absoluteUrl(projectsListPath.value) },
          { '@type': 'ListItem', position: 3, name: project.value.title, item: canonicalUrl.value },
        ],
      },
    ],
  };
});

// ─── Head ─────────────────────────────────────────────────────────────────────

useHead(() => {
  if (!project.value) return {};

  const dateIso = new Date(project.value.date).toISOString();

  return {
    title: project.value.title,
    link: [{ rel: 'canonical', href: canonicalUrl.value }],
    meta: [
      { name: 'description', content: project.value.summary },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },

      { property: 'og:type', content: 'article' },
      { property: 'og:url', content: canonicalUrl.value },
      { property: 'og:title', content: project.value.title },
      { property: 'og:description', content: project.value.summary },
      { property: 'og:image', content: coverUrl.value },
      { property: 'og:image:alt', content: project.value.title },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:locale', content: OG_LOCALE[locale.value] ?? 'en_US' },
      { property: 'og:site_name', content: 'Superman Samui' },

      { property: 'article:published_time', content: dateIso },
      { property: 'article:modified_time', content: dateIso },
      { property: 'article:section', content: serviceLabel.value },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: project.value.title },
      { name: 'twitter:description', content: project.value.summary },
      { name: 'twitter:image', content: coverUrl.value },
    ],
    script: [{ key: 'project-schema', type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd.value) }],
  };
});
</script>

<i18n lang="json">
{
  "ru": {
    "nav": {
      "home": "Главная",
      "projects": "Все проекты"
    },
    "details": "О проекте",
    "serviceLabel": "Услуга",
    "locationLabel": "Локация",
    "gallery": "Галерея проекта",
    "beforeAfterTitle": "До и после",
    "relatedProjects": "Похожие проекты",
    "relatedServices": "Связанные услуги",
    "contacts": "Обсудить похожий проект",
    "contactsDescription": "Расскажите о вашем участке - подберём технику и порядок работ.",
    "contactButton": "Обсудить проект",
    "coverAlt": "Выполненный проект: {title}, {location}",
    "equipmentUsed": "Использованная техника"
  },
  "en": {
    "nav": {
      "home": "Home",
      "projects": "All projects"
    },
    "details": "Project details",
    "serviceLabel": "Service",
    "locationLabel": "Location",
    "gallery": "Project gallery",
    "beforeAfterTitle": "Before & after",
    "relatedProjects": "Related projects",
    "relatedServices": "Related services",
    "contacts": "Discuss a similar project",
    "contactsDescription": "Tell us about your site and we will suggest the right machinery and work plan.",
    "contactButton": "Discuss your project",
    "coverAlt": "Completed project: {title}, {location}",
    "equipmentUsed": "Equipment used"
  },
  "th": {
    "nav": {
      "home": "หน้าหลัก",
      "projects": "ผลงานทั้งหมด"
    },
    "details": "เกี่ยวกับโครงการ",
    "serviceLabel": "บริการ",
    "locationLabel": "สถานที่",
    "gallery": "แกลเลอรีโครงการ",
    "beforeAfterTitle": "ก่อนและหลัง",
    "relatedProjects": "โครงการที่เกี่ยวข้อง",
    "relatedServices": "บริการที่เกี่ยวข้อง",
    "contacts": "คุยเรื่องโครงการที่คล้ายกัน",
    "contactsDescription": "บอกเราเกี่ยวกับพื้นที่ของคุณ แล้วเราจะแนะนำเครื่องจักรและลำดับงานที่เหมาะสม",
    "contactButton": "ปรึกษาโครงการ",
    "coverAlt": "โครงการที่เสร็จแล้ว: {title}, {location}",
    "equipmentUsed": "เครื่องจักรที่ใช้"
  }
}
</i18n>

<template>
  <article
    v-if="project"
    class="pb-12 pt-4 sm:pb-16 sm:pt-10"
  >
    <nav
      :aria-label="t('nav.projects')"
      class="mx-auto mb-8 sm:mb-12"
    >
      <ol class="flex min-w-0 items-center gap-2 text-sm text-muted">
        <li class="hidden sm:block">
          <NuxtLink
            :to="localePath({ name: 'index' })"
            class="transition hover:text-highlighted"
          >
            {{ t('nav.home') }}
          </NuxtLink>
        </li>

        <li
          class="hidden sm:block"
          aria-hidden="true"
        >
          /
        </li>

        <li>
          <NuxtLink
            :to="projectsListPath"
            class="inline-flex items-center gap-1.5 transition hover:text-highlighted"
          >
            <UIcon
              name="i-lucide-arrow-left"
              class="size-4 sm:hidden"
            />
            {{ t('nav.projects') }}
          </NuxtLink>
        </li>

        <li
          class="hidden sm:block"
          aria-hidden="true"
        >
          /
        </li>

        <li class="hidden min-w-0 truncate text-highlighted sm:block">
          {{ project.title }}
        </li>
      </ol>
    </nav>

    <header class="mx-auto text-center">
      <h1 class="text-3xl font-bold leading-tight text-highlighted sm:text-5xl">
        {{ project.title }}
      </h1>

      <p class="mx-auto mt-5 text-lg leading-8 text-muted sm:text-xl sm:leading-9">
        {{ project.summary }}
      </p>

      <p class="mt-6 inline-flex items-center gap-2 text-sm text-muted">
        <UIcon
          name="i-lucide-map-pin"
          class="size-4"
        />
        {{ project.location }}
      </p>
    </header>

    <figure class="-mx-4 mt-8 overflow-hidden bg-elevated sm:mx-auto sm:mt-12 sm:rounded-2xl">
      <img
        :src="project.cover"
        :alt="t('coverAlt', { title: project.title, location: project.location })"
        width="1200"
        height="630"
        class="aspect-[4/3] h-full w-full object-cover sm:aspect-[16/9]"
        fetchpriority="high"
      >

      <figcaption class="px-4 py-3 text-center text-xs text-muted sm:text-sm">
        {{ project.title }} · {{ project.location }}
      </figcaption>
    </figure>

    <div class="mx-auto mt-10 grid gap-8 sm:mt-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-10">
      <div class="min-w-0">
        <ContentRenderer
          :value="project"
          class="prose prose-lg prose-neutral max-w-none dark:prose-invert prose-headings:text-highlighted prose-p:leading-8 prose-p:text-muted sm:prose-p:leading-9"
        />
      </div>

      <aside class="space-y-5 lg:sticky lg:top-24 lg:self-start">
        <div class="rounded-2xl bg-elevated/50 p-5 ring ring-default">
          <h2 class="text-lg font-semibold text-highlighted">
            {{ t('details') }}
          </h2>

          <dl class="mt-5 divide-y divide-default">
            <div class="pb-4">
              <dt class="text-xs font-semibold uppercase tracking-wide text-muted">
                {{ t('serviceLabel') }}
              </dt>

              <dd class="mt-1.5 font-medium">
                <NuxtLink
                  v-if="servicePath"
                  :to="servicePath"
                  class="text-primary transition hover:underline"
                >
                  {{ serviceLabel }}
                </NuxtLink>

                <span
                  v-else
                  class="text-highlighted"
                >{{ serviceLabel }}</span>
              </dd>
            </div>

            <div class="pt-4">
              <dt class="text-xs font-semibold uppercase tracking-wide text-muted">
                {{ t('locationLabel') }}
              </dt>

              <dd class="mt-1.5 font-medium text-highlighted">
                {{ project.location }}
              </dd>
            </div>
          </dl>

          <UButton
            to="#project-contact"
            icon="i-lucide-message-circle"
            size="lg"
            class="mt-6 w-full justify-center"
          >
            {{ t('contactButton') }}
          </UButton>
        </div>

        <div
          v-if="equipmentUsed.length"
          class="rounded-2xl bg-elevated/50 p-5 ring ring-default"
        >
          <h2 class="text-sm font-semibold uppercase tracking-wide text-muted">
            {{ t('equipmentUsed') }}
          </h2>

          <ul class="mt-3 space-y-2">
            <li
              v-for="machine in equipmentUsed"
              :key="machine!.id"
            >
              <NuxtLink
                :to="localePath({ name: 'equipment-slug', params: { slug: machine!.id } })"
                class="group flex items-center gap-3 rounded-lg p-1.5 text-sm transition hover:bg-elevated"
              >
                <img
                  :src="machine!.image"
                  :alt="machine!.name"
                  class="size-10 shrink-0 rounded-lg object-cover"
                  loading="lazy"
                >

                <div class="min-w-0">
                  <p class="truncate font-medium text-highlighted">
                    {{ machine!.name }}
                  </p>

                  <p class="text-xs text-muted">
                    {{ machine!.i18n[$i18n.locale as 'en' | 'ru' | 'th']?.type ?? machine!.i18n.en.type }}
                  </p>
                </div>

                <UIcon
                  name="i-lucide-arrow-right"
                  class="ml-auto size-3.5 shrink-0 text-muted opacity-0 transition group-hover:opacity-100"
                />
              </NuxtLink>
            </li>
          </ul>
        </div>

        <div
          v-if="relatedServices.length"
          class="rounded-2xl bg-elevated/50 p-5 ring ring-default"
        >
          <h2 class="text-sm font-semibold uppercase tracking-wide text-muted">
            {{ t('relatedServices') }}
          </h2>

          <ul class="mt-3 space-y-1">
            <li
              v-for="svc in relatedServices"
              :key="svc.key"
            >
              <NuxtLink
                :to="svc.to"
                class="group flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm transition hover:bg-elevated hover:text-highlighted"
              >
                <UIcon
                  :name="svc.icon"
                  class="size-4 shrink-0 text-primary"
                />

                <span>{{ svc.label }}</span>

                <UIcon
                  name="i-lucide-arrow-right"
                  class="ml-auto size-3.5 text-muted opacity-0 transition group-hover:opacity-100"
                />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>

    <div
      v-if="project?.beforeAfter?.length"
      class="mx-auto mt-10 sm:mt-14"
    >
      <h2
        class="mb-6 text-center text-2xl font-semibold sm:text-3xl"
        v-text="t('beforeAfterTitle')"
      />

      <div class="grid gap-5 sm:grid-cols-2">
        <BeforeAfterSlider
          v-for="(pair, i) in project.beforeAfter"
          :key="i"
          :beforeImage="pair.beforeImage"
          :beforeAlt="pair.beforeAlt"
          :afterImage="pair.afterImage"
          :afterAlt="pair.afterAlt"
        />
      </div>
    </div>

    <div class="mx-auto mt-6 sm:mt-10">
      <ServiceGallery
        :title="t('gallery')"
        :items="galleryItems"
      />
    </div>

    <section
      v-if="relatedProjects?.length"
      class="mx-auto mt-14 sm:mt-20"
    >
      <h2 class="text-2xl font-semibold text-highlighted sm:text-3xl">
        {{ t('relatedProjects') }}
      </h2>

      <div class="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <NuxtLink
          v-for="rel in relatedProjects"
          :key="rel.id"
          :to="localePath({ name: 'projects-slug', params: { slug: rel.slug } })"
          class="group flex flex-col overflow-hidden rounded-lg bg-default ring ring-default transition hover:bg-elevated/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <div class="aspect-video overflow-hidden bg-elevated">
            <NuxtImg
              :src="rel.cover"
              :alt="rel.title"
              width="480"
              height="270"
              fit="cover"
              loading="lazy"
              class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </div>

          <div class="flex flex-1 flex-col gap-3 p-4">
            <div class="flex flex-wrap gap-2">
              <UBadge
                color="primary"
                variant="soft"
                size="sm"
              >
                {{ labelFor(rel.service) }}
              </UBadge>

              <UBadge
                color="neutral"
                variant="outline"
                size="sm"
              >
                {{ rel.location }}
              </UBadge>
            </div>

            <p class="text-sm font-semibold leading-snug text-highlighted">
              {{ rel.title }}
            </p>
          </div>
        </NuxtLink>
      </div>
    </section>

    <section
      id="project-contact"
      class="mx-auto mt-10 max-w-3xl scroll-mt-20 border-t border-default py-10 text-center sm:mt-14 sm:py-14"
    >
      <h2 class="text-2xl font-semibold sm:text-3xl">
        {{ t('contacts') }}
      </h2>

      <p class="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
        {{ t('contactsDescription') }}
      </p>

      <CoreContactsMini
        :page="projectPath"
        location="project_bottom"
      />
    </section>
  </article>
</template>
