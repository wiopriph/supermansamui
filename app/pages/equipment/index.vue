<script setup lang="ts">
import { getEquipmentByCategory, EQUIPMENT, type Equipment } from '~/data/equipment';


const { t, locale } = useI18n();
const localePath = useLocalePath();

const excavators = getEquipmentByCategory('excavator');
const trucks = getEquipmentByCategory('truck');
const tractors = getEquipmentByCategory('tractor');

const categories = computed(() => [
  { key: 'excavator', label: t('categories.excavator'), items: excavators },
  { key: 'truck', label: t('categories.truck'), items: trucks },
  { key: 'tractor', label: t('categories.tractor'), items: tractors },
].filter(c => c.items.length > 0));

function specChips(item: Equipment) {
  const chips = [];

  if (item.specs.operatingWeight) {
    chips.push({ icon: 'i-lucide-weight', value: item.specs.operatingWeight });
  }

  if (item.specs.maxDigDepth) {
    chips.push({ icon: 'i-lucide-ruler', value: item.specs.maxDigDepth });
  }

  if (item.specs.bucketCapacity) {
    chips.push({ icon: 'i-lucide-cuboid', value: item.specs.bucketCapacity });
  }

  if (item.specs.payload) {
    chips.push({ icon: 'i-lucide-package', value: item.specs.payload });
  }

  if (item.specs.bodyVolume) {
    chips.push({ icon: 'i-lucide-box', value: item.specs.bodyVolume });
  }

  if (item.specs.bladeWidth) {
    chips.push({ icon: 'i-lucide-move-horizontal', value: item.specs.bladeWidth });
  }

  if (item.specs.enginePower) {
    chips.push({ icon: 'i-lucide-zap', value: item.specs.enginePower });
  }

  return chips.slice(0, 3);
}

function startingPrice(item: Equipment): { value: string; label: string } | null {
  if (item.prices.hour) {
    return {
      value: `฿${item.prices.hour.toLocaleString()}`,
      label: t('prices.hour'),
    };
  }

  if (item.prices.trip) {
    return {
      value: `฿${item.prices.trip.toLocaleString()}`,
      label: t('prices.trip'),
    };
  }

  return null;
}

const BASE_URL = 'https://supermansamui.com';
const OG_IMAGE = `${BASE_URL}/images/services/excavators/hero.webp`;

const canonicalUrl = computed(() => {
  const prefix = locale.value === 'en' ? '' : `/${locale.value}`;

  return `${BASE_URL}${prefix}/equipment`;
});

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ItemList',
      '@id': `${canonicalUrl.value}#list`,
      name: t('seo.title'),
      description: t('seo.description'),
      numberOfItems: EQUIPMENT.length,
      itemListElement: EQUIPMENT.map((item, index) => {
        const loc = item.i18n[locale.value as 'en' | 'ru' | 'th'] ?? item.i18n.en;
        const prefix = locale.value === 'en' ? '' : `/${locale.value}`;

        return {
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          description: loc.summary,
          url: `${BASE_URL}${prefix}/equipment/${item.id}`,
          image: `${BASE_URL}${item.image}`,
        };
      }),
    },
    {
      '@type': 'LocalBusiness',
      '@id': `${BASE_URL}#business`,
      name: 'Superman Samui',
      url: BASE_URL,
      telephone: '+66645351695',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ko Samui',
        addressRegion: 'Surat Thani',
        addressCountry: 'TH',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Koh Samui, Surat Thani, Thailand',
      },
    },
  ],
}));

useHead(() => {
  const title = t('seo.title');
  const description = t('seo.description');
  const keywords = t('seo.keywords');

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonicalUrl.value },
      { property: 'og:image', content: OG_IMAGE },
      { property: 'og:image:width', content: '960' },
      { property: 'og:image:height', content: '466' },
      { property: 'og:image:alt', content: t('seo.imageAlt') },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: OG_IMAGE },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(jsonLd.value),
      },
    ],
  };
});
</script>

<i18n lang="json">
{
  "ru": {
    "seo": {
      "title": "Строительная техника на Самуи - экскаваторы, самосвалы, тракторы",
      "description": "Собственный парк техники Superman Samui на Ко Самуи: 5 экскаваторов, 6 грузовиков, трактор. Технические характеристики, стоимость аренды и фотографии каждой единицы.",
      "keywords": "строительная техника Самуи, аренда экскаватора Самуи, самосвал Ко Самуи, трактор аренда Самуи, строительные работы Самуи, Superman Samui техника",
      "imageAlt": "Строительная техника Superman Samui на Ко Самуи",
      "intro": "Весь парк находится в собственности компании и постоянно базируется на Ко Самуи - без посредников и ожидания доставки с материка. Операторы работают с этой техникой каждый день, поэтому мы гарантируем точные сроки и предсказуемое качество работ."
    },
    "title": "Наша техника",
    "description": "Собственный парк строительной техники на Самуи. Технические характеристики, стоимость аренды, фотографии.",
    "categories": {
      "excavator": "Экскаваторы",
      "truck": "Самосвалы",
      "tractor": "Тракторы"
    },
    "specs": {
      "payload": "Грузоподъёмность",
      "bodyVolume": "Объём кузова",
      "maxDigDepth": "Глубина копания",
      "operatingWeight": "Рабочая масса"
    },
    "prices": {
      "hour": "₿/час",
      "shift": "₿/смена",
      "trip": "₿/рейс"
    },
    "viewDetails": "Подробнее",
    "currency": "฿"
  },
  "en": {
    "seo": {
      "title": "Construction Equipment on Koh Samui - Excavators, Dump Trucks & Tractors",
      "description": "Superman Samui owns and operates 12 machines on Koh Samui: 5 excavators, 6 trucks and a tractor. Full specifications, hire rates and photos for every unit.",
      "keywords": "construction equipment Koh Samui, excavator hire Samui, dump truck rental Samui, tractor Samui, earthworks machinery Samui, Superman Samui equipment",
      "imageAlt": "Superman Samui construction equipment fleet on Koh Samui",
      "intro": "All machinery is company-owned and permanently based on Koh Samui - no middlemen, no waiting for mainland deliveries. Our operators work with these machines daily, so you get reliable schedules and consistent quality on every job."
    },
    "title": "Our equipment",
    "description": "Own fleet of construction machinery on Koh Samui. Specifications, hire rates and photos.",
    "categories": {
      "excavator": "Excavators",
      "truck": "Dump trucks",
      "tractor": "Tractors"
    },
    "specs": {
      "payload": "Payload",
      "bodyVolume": "Body volume",
      "maxDigDepth": "Max dig depth",
      "operatingWeight": "Operating weight"
    },
    "prices": {
      "hour": "฿/hr",
      "shift": "฿/shift",
      "trip": "฿/trip"
    },
    "viewDetails": "View details",
    "currency": "฿"
  },
  "th": {
    "seo": {
      "title": "เครื่องจักรก่อสร้างบนเกาะสมุย - รถขุด รถดั๊มพ์ และแทรกเตอร์",
      "description": "Superman Samui มีเครื่องจักร 12 คันบนเกาะสมุย: รถขุด 5 คัน รถบรรทุก 6 คัน และแทรกเตอร์ พร้อมสเปค ราคา และรูปภาพ",
      "keywords": "เครื่องจักรก่อสร้างเกาะสมุย, เช่ารถขุดสมุย, รถดั๊มพ์สมุย, แทรกเตอร์สมุย, งานดินสมุย, Superman Samui",
      "imageAlt": "เครื่องจักรก่อสร้าง Superman Samui บนเกาะสมุย",
      "intro": "เครื่องจักรทั้งหมดเป็นของบริษัทและประจำอยู่บนเกาะสมุย ไม่มีตัวกลาง ไม่ต้องรอขนส่งจากแผ่นดินใหญ่ ผู้ควบคุมของเราทำงานกับเครื่องจักรเหล่านี้ทุกวัน จึงรับประกันตารางงานที่แม่นยำและคุณภาพงานที่สม่ำเสมอ"
    },
    "title": "เครื่องจักรของเรา",
    "description": "ฝูงบินเครื่องจักรก่อสร้างของตัวเองบนเกาะสมุย สเปค ราคา และรูปภาพ",
    "categories": {
      "excavator": "รถขุด",
      "truck": "รถดั๊มพ์",
      "tractor": "แทรกเตอร์"
    },
    "specs": {
      "payload": "น้ำหนักบรรทุก",
      "bodyVolume": "ปริมาตรกระบะ",
      "maxDigDepth": "ความลึกขุดสูงสุด",
      "operatingWeight": "น้ำหนักปฏิบัติการ"
    },
    "prices": {
      "hour": "฿/ชม.",
      "shift": "฿/กะ",
      "trip": "฿/เที่ยว"
    },
    "viewDetails": "ดูรายละเอียด",
    "currency": "฿"
  }
}
</i18n>

<template>
  <div class="py-10 sm:py-14 space-y-14">
    <section class="text-center space-y-4 mx-auto">
      <h1 class="text-3xl sm:text-4xl font-bold text-highlighted">
        {{ t('title') }}
      </h1>

      <p class="text-base sm:text-lg text-muted">
        {{ t('description') }}
      </p>
    </section>

    <div
      v-for="category in categories"
      :key="category.key"
      class="space-y-6"
    >
      <h2 class="text-2xl font-semibold text-highlighted sm:text-3xl">
        {{ category.label }}
      </h2>

      <div class="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <EquipmentCard
          v-for="item in category.items"
          :key="item.id"
          :to="localePath({ name: 'equipment-slug', params: { slug: item.id } })"
          :image="item.image"
          :title="item.name"
          :subtitle="item.i18n[$i18n.locale as 'en' | 'ru' | 'th']?.type ?? item.i18n.en.type"
          :description="item.i18n[$i18n.locale as 'en' | 'ru' | 'th']?.summary ?? item.i18n.en.summary"
          :specs="specChips(item)"
          :priceLabel="startingPrice(item)?.label"
          :priceValue="startingPrice(item)?.value"
          :viewLabel="t('viewDetails')"
        />
      </div>
    </div>

    <p class="text-center text-sm text-muted/80 leading-relaxed">
      {{ t('seo.intro') }}
    </p>
  </div>
</template>
