<script setup lang="ts">
import type { Collections } from '@nuxt/content';
import { getEquipmentById } from '~/data/equipment';


const SITE_URL = 'https://supermansamui.com';

const route = useRoute();
const { t, locale } = useI18n();
const localePath = useLocalePath();

const slug = computed(() => String(route.params.slug || ''));
const equipment = computed(() => getEquipmentById(slug.value));

if (!equipment.value) {
  throw createError({ statusCode: 404, statusMessage: 'Equipment not found' });
}

const localeData = computed(() => {
  const loc = locale.value as 'en' | 'ru' | 'th';

  return equipment.value!.i18n[loc] ?? equipment.value!.i18n.en;
});

// ─── Specs table ─────────────────────────────────────────────────────────────

type SpecRow = { label: string; value: string };

const specRows = computed<SpecRow[]>(() => {
  if (!equipment.value) return [];

  const specs = equipment.value.specs;
  const rows: SpecRow[] = [];

  const add = (key: keyof typeof specs, labelKey: string) => {
    const value = specs[key];

    if (value) {
      rows.push({ label: t(`specs.${labelKey}`), value });
    }
  };

  if (equipment.value.category === 'excavator') {
    add('operatingWeight', 'operatingWeight');
    add('bucketCapacity', 'bucketCapacity');
    add('maxDigDepth', 'maxDigDepth');
    add('maxReach', 'maxReach');
    add('enginePower', 'enginePower');
    add('tailSwing', 'tailSwing');
    add('trackWidth', 'trackWidth');
  } else if (equipment.value.category === 'tractor') {
    add('operatingWeight', 'operatingWeight');
    add('enginePower', 'enginePower');
    add('drivetrain', 'drivetrain');
    add('bladeWidth', 'bladeWidth');
    add('mowerWidth', 'mowerWidth');
    add('pto', 'pto');
  } else {
    add('payload', 'payload');
    add('bodyVolume', 'bodyVolume');
    add('gvw', 'gvw');
    add('axles', 'axles');
    add('bodyType', 'bodyType');
    add('bodyDimensions', 'bodyDimensions');
  }

  return rows;
});

// ─── Prices ──────────────────────────────────────────────────────────────────

type PriceRow = { label: string; value: string };

const priceRows = computed<PriceRow[]>(() => {
  if (!equipment.value) return [];

  const { prices } = equipment.value;
  const rows: PriceRow[] = [];

  if (prices.hour) {
    rows.push({ label: t('prices.hour'), value: `฿ ${prices.hour}` });
  }

  if (prices.trip) {
    rows.push({ label: t('prices.trip'), value: `฿ ${prices.trip}` });
  }

  rows.push({ label: t('prices.shift'), value: `฿ ${prices.shift}` });

  return rows;
});

// ─── Projects that used this equipment ───────────────────────────────────────

const collectionName = computed(() => `projects_${locale.value}` as keyof Collections);

const { data: linkedProjects } = await useAsyncData(
  () => `equipment-projects-${locale.value}-${slug.value}`,
  async () => {
    const all = await queryCollection(collectionName.value).all();

    return all.filter(project => (project.equipment ?? []).includes(slug.value)).slice(0, 6);
  },
  { watch: [locale, slug] },
);

// ─── SEO ─────────────────────────────────────────────────────────────────────

const canonicalUrl = computed(() =>
  `${SITE_URL}${localePath({ name: 'equipment-slug', params: { slug: slug.value } })}`,
);

const equipmentPath = computed(() =>
  localePath({ name: 'equipment-slug', params: { slug: slug.value } }),
);
const equipmentListPath = computed(() => localePath({ name: 'equipment' }));

const jsonLd = computed(() => {
  if (!equipment.value) return {};

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Product',
        '@id': `${canonicalUrl.value}#product`,
        name: equipment.value.name,
        description: localeData.value.summary,
        image: equipment.value.gallery.length ? equipment.value.gallery : [equipment.value.image],
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'THB',
          lowPrice: equipment.value.prices.trip ?? equipment.value.prices.hour ?? equipment.value.prices.shift,
          highPrice: equipment.value.prices.shift,
          offerCount: priceRows.value.length,
        },
        brand: { '@type': 'Brand', name: equipment.value.name.split(' ')[0] },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl.value}#breadcrumbs`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('nav.home'), item: `${SITE_URL}${localePath({ name: 'index' })}` },
          { '@type': 'ListItem', position: 2, name: t('nav.equipment'), item: `${SITE_URL}${equipmentListPath.value}` },
          { '@type': 'ListItem', position: 3, name: equipment.value.name, item: canonicalUrl.value },
        ],
      },
    ],
  };
});

useHead(() => {
  if (!equipment.value) return {};

  const title = `${equipment.value.name} - ${localeData.value.type}`;

  return {
    title,
    link: [{ rel: 'canonical', href: canonicalUrl.value }],
    meta: [
      { name: 'description', content: localeData.value.summary },
      { property: 'og:title', content: title },
      { property: 'og:description', content: localeData.value.summary },
      { property: 'og:image', content: `${SITE_URL}${equipment.value.image}` },
      { property: 'og:type', content: 'website' },
    ],
    script: [{ key: 'equipment-schema', type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd.value) }],
  };
});
</script>

<i18n lang="json">
{
  "ru": {
    "nav": {
      "home": "Главная",
      "equipment": "Техника"
    },
    "specs": {
      "operatingWeight": "Рабочая масса",
      "bucketCapacity": "Объём ковша",
      "maxDigDepth": "Глубина копания",
      "maxReach": "Максимальный вылет",
      "enginePower": "Мощность двигателя",
      "tailSwing": "Хвостовой радиус",
      "trackWidth": "Ширина гусениц",
      "payload": "Грузоподъёмность",
      "bodyVolume": "Объём кузова",
      "gvw": "Полная масса",
      "axles": "Колёсная формула",
      "bodyType": "Тип кузова",
      "bodyDimensions": "Размер кузова",
      "drivetrain": "Привод",
      "bladeWidth": "Ширина отвала",
      "mowerWidth": "Ширина косилки",
      "pto": "Вал отбора мощности"
    },
    "prices": {
      "hour": "В час",
      "shift": "За смену (8 ч)",
      "trip": "За рейс"
    },
    "features": "Особенности",
    "specsTitle": "Технические характеристики",
    "pricesTitle": "Стоимость аренды",
    "projectsTitle": "Проекты с этой техникой",
    "contactTitle": "Арендовать технику",
    "contactDescription": "Свяжитесь с нами, чтобы уточнить доступность и рассчитать стоимость.",
    "contactButton": "Связаться",
    "viewProject": "Смотреть"
  },
  "en": {
    "nav": {
      "home": "Home",
      "equipment": "Equipment"
    },
    "specs": {
      "operatingWeight": "Operating weight",
      "bucketCapacity": "Bucket capacity",
      "maxDigDepth": "Max dig depth",
      "maxReach": "Max reach",
      "enginePower": "Engine power",
      "tailSwing": "Tail swing",
      "trackWidth": "Track width",
      "payload": "Payload",
      "bodyVolume": "Body volume",
      "gvw": "GVW",
      "axles": "Drivetrain",
      "bodyType": "Body type",
      "bodyDimensions": "Body dimensions",
      "drivetrain": "Drivetrain",
      "bladeWidth": "Blade width",
      "mowerWidth": "Mower width",
      "pto": "PTO"
    },
    "prices": {
      "hour": "Per hour",
      "shift": "Per shift (8 h)",
      "trip": "Per trip"
    },
    "features": "Key features",
    "specsTitle": "Technical specifications",
    "pricesTitle": "Hire rates",
    "projectsTitle": "Projects using this machine",
    "contactTitle": "Hire this machine",
    "contactDescription": "Contact us to check availability and get a quote.",
    "contactButton": "Get in touch",
    "viewProject": "View"
  },
  "th": {
    "nav": {
      "home": "หน้าหลัก",
      "equipment": "เครื่องจักร"
    },
    "specs": {
      "operatingWeight": "น้ำหนักปฏิบัติการ",
      "bucketCapacity": "ความจุถัง",
      "maxDigDepth": "ความลึกขุดสูงสุด",
      "maxReach": "ระยะเอื้อมสูงสุด",
      "enginePower": "กำลังเครื่องยนต์",
      "tailSwing": "รัศมีหาง",
      "trackWidth": "ความกว้างแทร็ก",
      "payload": "น้ำหนักบรรทุก",
      "bodyVolume": "ปริมาตรกระบะ",
      "gvw": "น้ำหนักรวม",
      "axles": "ระบบขับเคลื่อน",
      "bodyType": "ประเภทกระบะ",
      "bodyDimensions": "ขนาดกระบะ",
      "drivetrain": "ระบบขับเคลื่อน",
      "bladeWidth": "ความกว้างใบมีด",
      "mowerWidth": "ความกว้างเครื่องตัดหญ้า",
      "pto": "PTO"
    },
    "prices": {
      "hour": "ต่อชั่วโมง",
      "shift": "ต่อกะ (8 ชม.)",
      "trip": "ต่อเที่ยว"
    },
    "features": "คุณสมบัติหลัก",
    "specsTitle": "สเปคเทคนิค",
    "pricesTitle": "อัตราค่าเช่า",
    "projectsTitle": "โครงการที่ใช้เครื่องจักรนี้",
    "contactTitle": "เช่าเครื่องจักรนี้",
    "contactDescription": "ติดต่อเราเพื่อตรวจสอบความพร้อมและรับใบเสนอราคา",
    "contactButton": "ติดต่อ",
    "viewProject": "ดู"
  }
}
</i18n>

<template>
  <article
    v-if="equipment"
    class="pb-12 pt-4 sm:pb-16 sm:pt-10"
  >
    <!-- Breadcrumb -->
    <nav
      :aria-label="t('nav.equipment')"
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
            :to="equipmentListPath"
            class="inline-flex items-center gap-1.5 transition hover:text-highlighted"
          >
            <UIcon
              name="i-lucide-arrow-left"
              class="size-4 sm:hidden"
            />
            {{ t('nav.equipment') }}
          </NuxtLink>
        </li>

        <li
          class="hidden sm:block"
          aria-hidden="true"
        >
          /
        </li>

        <li class="hidden min-w-0 truncate text-highlighted sm:block">
          {{ equipment.name }}
        </li>
      </ol>
    </nav>

    <!-- Header -->
    <header class="mx-auto">
      <p class="text-sm font-semibold uppercase tracking-wider text-primary">
        {{ localeData.type }}
      </p>

      <h1 class="mt-2 text-3xl font-bold leading-tight text-highlighted sm:text-5xl">
        {{ equipment.name }}
      </h1>

      <p class="mt-5 text-lg leading-8 text-muted sm:text-xl sm:leading-9">
        {{ localeData.summary }}
      </p>
    </header>

    <!-- Cover image -->
    <figure class="-mx-4 mt-8 overflow-hidden bg-elevated sm:mx-auto sm:mt-12 sm:rounded-2xl">
      <img
        :src="equipment.image"
        :alt="equipment.name"
        width="1200"
        height="630"
        class="aspect-[4/3] h-full w-full object-cover sm:aspect-[16/9]"
        fetchpriority="high"
      >
    </figure>

    <!-- Main content + sidebar -->
    <div class="mx-auto mt-10 grid gap-8 sm:mt-14 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-10">
      <!-- Main column -->
      <div class="space-y-10">
        <!-- Features -->
        <section>
          <h2 class="text-xl font-semibold text-highlighted">
            {{ t('features') }}
          </h2>

          <ul class="mt-4 space-y-3">
            <li
              v-for="feature in localeData.features"
              :key="feature"
              class="flex items-start gap-3 text-sm leading-6 text-muted"
            >
              <UIcon
                name="i-lucide-check-circle"
                class="mt-0.5 size-4 shrink-0 text-primary"
              />
              {{ feature }}
            </li>
          </ul>
        </section>

        <!-- Specs table -->
        <section>
          <h2 class="text-xl font-semibold text-highlighted">
            {{ t('specsTitle') }}
          </h2>

          <div class="mt-4 overflow-hidden rounded-xl ring ring-default">
            <table class="w-full text-sm">
              <tbody class="divide-y divide-default">
                <tr
                  v-for="row in specRows"
                  :key="row.label"
                  class="grid grid-cols-2"
                >
                  <td class="px-4 py-3 font-medium text-muted">
                    {{ row.label }}
                  </td>

                  <td class="px-4 py-3 font-semibold text-highlighted">
                    {{ row.value }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <!-- Linked projects -->
        <section v-if="linkedProjects?.length">
          <h2 class="text-xl font-semibold text-highlighted">
            {{ t('projectsTitle') }}
          </h2>

          <div class="mt-4 grid gap-4 sm:grid-cols-2">
            <NuxtLink
              v-for="project in linkedProjects"
              :key="project.id"
              :to="localePath({ name: 'projects-slug', params: { slug: project.slug } })"
              class="group flex items-center gap-4 overflow-hidden rounded-xl bg-elevated/50 p-4 ring ring-default transition hover:bg-elevated"
            >
              <img
                :src="project.cover"
                :alt="project.title"
                class="size-16 shrink-0 rounded-lg object-cover"
                loading="lazy"
              >

              <div class="min-w-0">
                <p class="truncate text-sm font-semibold text-highlighted">
                  {{ project.title }}
                </p>

                <p class="mt-0.5 text-xs text-muted">
                  {{ project.location }}
                </p>
              </div>

              <UIcon
                name="i-lucide-arrow-up-right"
                class="ml-auto size-4 shrink-0 text-primary opacity-0 transition group-hover:opacity-100"
              />
            </NuxtLink>
          </div>
        </section>
      </div>

      <!-- Sidebar -->
      <aside class="space-y-5 lg:sticky lg:top-24 lg:self-start">
        <!-- Prices -->
        <div class="rounded-2xl bg-elevated/50 p-5 ring ring-default">
          <h2 class="text-lg font-semibold text-highlighted">
            {{ t('pricesTitle') }}
          </h2>

          <dl class="mt-4 divide-y divide-default">
            <div
              v-for="row in priceRows"
              :key="row.label"
              class="flex items-center justify-between py-3"
            >
              <dt class="text-sm text-muted">
                {{ row.label }}
              </dt>

              <dd class="text-lg font-bold text-highlighted">
                {{ row.value }}
              </dd>
            </div>
          </dl>

          <UButton
            to="#equipment-contact"
            icon="i-lucide-phone"
            size="lg"
            class="mt-6 w-full justify-center"
          >
            {{ t('contactButton') }}
          </UButton>
        </div>
      </aside>
    </div>

    <!-- Gallery -->
    <div
      v-if="equipment.gallery.length > 1"
      class="mx-auto mt-10"
    >
      <ServiceGallery
        :title="equipment.name"
        :items="equipment.gallery.map(src => ({ src, alt: equipment!.name, title: equipment!.name }))"
      />
    </div>

    <!-- Contact CTA -->
    <section
      id="equipment-contact"
      class="mx-auto mt-10 max-w-3xl scroll-mt-20 border-t border-default py-10 text-center sm:mt-14 sm:py-14"
    >
      <h2 class="text-2xl font-semibold sm:text-3xl">
        {{ t('contactTitle') }}
      </h2>

      <p class="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted sm:text-base">
        {{ t('contactDescription') }}
      </p>

      <CoreContactsMini
        :page="equipmentPath"
        location="equipment_bottom"
      />
    </section>
  </article>
</template>
