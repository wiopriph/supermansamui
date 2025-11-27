<script setup lang="ts">
const { t } = useI18n();
const url = useRequestURL();

const services = [
  { key: 'earthworks', image: '/images/services/earthworks.webp' },
  { key: 'excavators', image: '/images/services/excavators.webp' },
  { key: 'moving', image: '/images/services/moving.webp' },
  { key: 'soilRemoval', image: '/images/services/soil-removal.webp' },
  { key: 'materials', image: '/images/services/materials.webp' },
  { key: 'cranes', image: '/images/services/cranes.webp' },
];

const siteUrl = computed(() => `${url.protocol}//${url.host}`);

const offerList = computed(() =>
  services.map((s) => ({
    '@type': 'Offer',
    name: t(`services.${s.key}.title`),
    description: t(`services.${s.key}.text`),
    priceCurrency: 'THB',
  })),
);

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${siteUrl.value}#service-heavy-equipment`,
      name: t('services.schemaTitle'),
      description: t('services.schemaDescription'),
      provider: {
        '@id': `${siteUrl.value}#business`,
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Ko Samui, Surat Thani, Thailand',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t('services.schemaTitle'),
        itemListElement: offerList.value,
      },
    },
  ],
}));

useHead(() => ({
  script: [
    {
      key: 'schema-org-services',
      type: 'application/ld+json',
      innerHTML: JSON.stringify(jsonLd.value),
    },
  ],
}));
</script>

<i18n lang="json">
{
  "ru": {
    "services": {
      "schemaTitle": "Аренда спецтехники и услуги на Самуи",
      "schemaDescription": "Земляные работы, услуги экскаваторов, самосвалов, кранов, вывоз грунта и доставка материалов на острове Самуи.",
      "title": "Основные виды работ",
      "subtitle": "Что мы делаем на объекте и как помогаем клиентам.",
      "earthworks": {
        "title": "Земляные работы",
        "text": "Котлованы, траншеи, планировка и подготовка участка под дом, дорогу или парковку. Работаем с любым рельефом Самуи, учитываем грунт, уклоны и дренаж, чтобы участок был готов к строительству."
      },
      "excavators": {
        "title": "Работа экскаваторов",
        "text": "Мини и крупные экскаваторы для аккуратной работы рядом с домами и коммуникациями. Выполняем копку, расчистку склонов, подготовку площадок под фундамент, бассейн или парковку."
      },
      "moving": {
        "title": "Переезды и грузоперевозки",
        "text": "Перевозим мебель, технику, стройматериалы и оборудование по всему Самуи. Помогаем с погрузкой и закреплением, чтобы всё приехало быстро и без повреждений."
      },
      "soilRemoval": {
        "title": "Вывоз грунта и мусора",
        "text": "Самосвалы для вывоза грунта, строительного мусора, камня, бетона и тяжёлых отходов. Очищаем участок после стройки или земляных работ."
      },
      "materials": {
        "title": "Доставка щебня и материалов",
        "text": "Привоз щебня, песка, камня и инертных материалов для подсыпки, дренажа и оснований. Помогаем рассчитать объём и доставляем напрямую на участок."
      },
      "cranes": {
        "title": "Крановые работы",
        "text": "Подъём и перемещение тяжёлых конструкций, септиков, контейнеров и оборудования. Работаем в стеснённых условиях, обеспечиваем точность и безопасность."
      }
    }
  },

  "en": {
    "services": {
      "schemaTitle": "Heavy equipment and site services on Koh Samui",
      "schemaDescription": "Earthworks, excavator hire, dump trucks, crane services, soil removal and material delivery on Koh Samui.",
      "title": "Main types of work",
      "subtitle": "What we do on site and how we help our clients.",
      "earthworks": {
        "title": "Earthworks",
        "text": "Foundations, trenches, leveling and full site preparation for houses, roads and parking. We work with any terrain on Koh Samui and plan proper slopes and drainage."
      },
      "excavators": {
        "title": "Excavator works",
        "text": "Mini and large excavators for precise digging near houses and utilities. Slope shaping, site clearance and preparation for foundations, pools or parking areas."
      },
      "moving": {
        "title": "Moving & cargo transport",
        "text": "Transport of furniture, appliances, materials and equipment across Koh Samui. We assist with loading and securing to ensure safe and timely delivery."
      },
      "soilRemoval": {
        "title": "Soil & debris removal",
        "text": "Dump trucks for removing soil, construction waste, broken concrete, rocks and heavy debris. Fast and clean site preparation for the next stage."
      },
      "materials": {
        "title": "Gravel & material delivery",
        "text": "Delivery of gravel, sand, rock and aggregates for backfilling, drainage and base layers. We help estimate volume and deliver directly to your site."
      },
      "cranes": {
        "title": "Crane services",
        "text": "Lifting and positioning heavy structures, tanks, containers and equipment. Ideal for tight spaces requiring precision and safety."
      }
    }
  },

  "th": {
    "services": {
      "schemaTitle": "บริการเครื่องจักรหนักและงานไซต์บนเกาะสมุย",
      "schemaDescription": "งานดิน รถขุด รถดั๊มพ์ เครน ขนย้ายดิน เศษวัสดุ และส่งวัสดุก่อสร้างบนเกาะสมุย.",
      "title": "งานหลักที่เรารับทำ",
      "subtitle": "งานที่เราดูแลให้ลูกค้าหน้างานบนเกาะสมุย.",
      "earthworks": {
        "title": "งานดิน",
        "text": "ขุดรากฐาน ทำร่อง ปรับระดับพื้นที่และเตรียมไซต์งานสำหรับบ้าน ถนน หรือที่จอดรถ พร้อมคำนึงถึงความลาดเอียงและการระบายน้ำ."
      },
      "excavators": {
        "title": "งานรถขุด",
        "text": "รถขุดเล็กและใหญ่สำหรับงานละเอียด ใกล้บ้าน กำแพง และแนวท่อ พร้อมเตรียมพื้นที่สำหรับฐานราก สระว่ายน้ำ หรือที่จอดรถ."
      },
      "moving": {
        "title": "ขนย้ายบ้าน & ขนส่งสินค้า",
        "text": "ขนย้ายเฟอร์นิเจอร์ เครื่องใช้ไฟฟ้า วัสดุก่อสร้าง และอุปกรณ์ต่าง ๆ พร้อมช่วยยกและจัดวางให้ปลอดภัย ส่งตรงเวลา."
      },
      "soilRemoval": {
        "title": "ขนย้ายดินและเศษวัสดุ",
        "text": "รถดั๊มพ์สำหรับขนดิน เศษวัสดุก่อสร้าง ปูนแตก และของหนัก เคลียร์พื้นที่ให้พร้อมสำหรับงานถัดไป."
      },
      "materials": {
        "title": "ส่งหิน ทราย และวัสดุ",
        "text": "บริการส่งหิน ทราย หินคลุก และวัสดุก่อสร้างสำหรับถม ปรับระดับ และทำฐานงาน พร้อมช่วยประเมินปริมาณ."
      },
      "cranes": {
        "title": "งานเครน",
        "text": "ยก เคลื่อนย้าย และติดตั้งโครงสร้าง ถังบำบัด คอนเทนเนอร์ และอุปกรณ์หนัก แม่นยำและปลอดภัยในพื้นที่แคบ."
      }
    }
  }
}
</i18n>

<template>
  <section class="py-10 space-y-6">
    <div class="space-y-2 text-center">
      <h2 class="text-2xl sm:text-3xl font-semibold">
        {{ t('services.title') }}
      </h2>

      <p class="text-sm text-gray-600 max-w-2xl mx-auto">
        {{ t('services.subtitle') }}
      </p>
    </div>

    <UBlogPosts orientation="horizontal">
      <UBlogPost
        v-for="service in services"
        :key="service.key"
        :title="t(`services.${service.key}.title`)"
        :description="t(`services.${service.key}.text`)"
        :image="service.image"
        :ui="{
          root: 'h-full',
          body: 'gap-2',
          image: 'aspect-video object-cover',
          title: 'text-base font-semibold',
          description: 'text-sm text-gray-600'
        }"
      />
    </UBlogPosts>
  </section>
</template>
