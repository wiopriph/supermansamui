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
      "schemaDescription": "Экскаваторы, самосвалы, грузовики, краны, переезды, доставка материалов и вывоз мусора на острове Самуи.",
      "title": "Наши услуги",
      "subtitle": "Выполняем работы любой сложности: от копки и подъёма тяжёлых грузов до перевозок, доставки и вывоза мусора. Работаем по всей территории Самуи, надёжно и в оговорённые сроки.",

      "earthworks": {
        "title": "Земляные работы",
        "text": "Копка котлованов и траншей, формирование рельефа, подготовка площадок под строительство, бассейны и другие проекты."
      },

      "excavators": {
        "title": "Услуги экскаватора",
        "text": "Экскаваторы разных размеров для аккуратной и точной работы рядом с домами, дорогами и коммуникациями. Копка, расчистка и подготовка территорий."
      },

      "moving": {
        "title": "Переезды и грузоперевозки",
        "text": "Перевозим мебель, имущество, технику, стройматериалы и оборудование. Осторожная погрузка, безопасная транспортировка и доставка в нужное время."
      },

      "soilRemoval": {
        "title": "Вывоз грунта и мусора",
        "text": "Самосвалы для вывоза грунта, строительного мусора, бетона, камней и тяжёлых отходов. Быстро очищаем территорию после работ."
      },

      "materials": {
        "title": "Доставка материалов",
        "text": "Привоз песка, щебня, камня, инертных и строительных материалов. Доставляем точно к месту разгрузки."
      },

      "cranes": {
        "title": "Крановые работы",
        "text": "Подъём и перемещение тяжёлых конструкций, оборудования, контейнеров и грузов. Работы в ограниченных условиях с высокой точностью."
      }
    }
  },
  "en": {
    "services": {
      "schemaTitle": "Heavy equipment & transport services on Koh Samui",
      "schemaDescription": "Excavators, dump trucks, transport, cranes, moving services, material delivery and waste removal on Koh Samui.",
      "title": "Our services",
      "subtitle": "We handle a wide range of tasks: digging, lifting, transport, delivery and debris removal. Reliable work across the entire island with on-time arrival.",

      "earthworks": {
        "title": "Earthworks",
        "text": "Excavation of foundations and trenches, terrain shaping and site preparation for construction, pools and other projects."
      },

      "excavators": {
        "title": "Excavator services",
        "text": "Mini and large excavators for precise work near buildings, roads and utilities. Digging, clearing and preparing various types of sites."
      },

      "moving": {
        "title": "Moving & cargo transport",
        "text": "Safe transport of furniture, belongings, materials and heavy equipment. Careful loading and reliable delivery anywhere on Koh Samui."
      },

      "soilRemoval": {
        "title": "Soil & debris removal",
        "text": "Dump trucks for removing soil, construction waste, concrete, rocks and heavy debris. Fast cleanup after construction or excavation."
      },

      "materials": {
        "title": "Material delivery",
        "text": "Delivery of sand, gravel, stone and construction materials. Unloading exactly where you need it."
      },

      "cranes": {
        "title": "Crane services",
        "text": "Lifting and positioning heavy structures, tanks, containers and equipment. Accurate operation in tight or complex spaces."
      }
    }
  },
  "th": {
    "services": {
      "schemaTitle": "บริการเครื่องจักรหนักและขนส่งบนเกาะสมุย",
      "schemaDescription": "รถขุด รถดั๊มพ์ รถบรรทุก เครน บริการขนย้ายบ้าน ส่งวัสดุ และขนเศษวัสดุบนเกาะสมุย.",
      "title": "บริการของเรา",
      "subtitle": "รับงานหลากหลาย ตั้งแต่งานขุด ยกของหนัก ขนส่ง ส่งวัสดุ ไปจนถึงเคลียร์พื้นที่ ทำงานทั่วเกาะสมุย ตรงเวลา และเชื่อถือได้.",

      "earthworks": {
        "title": "งานดิน",
        "text": "ขุดฟุตติ้ง ทำร่อง ขุดบ่อ ปรับระดับพื้นที่ และเตรียมไซต์สำหรับงานก่อสร้างหรือโครงการต่าง ๆ."
      },

      "excavators": {
        "title": "บริการรถขุด",
        "text": "รถขุดหลายขนาดสำหรับงานที่ต้องการความละเอียด ใกล้บ้าน ถนน หรือท่อสาธารณูปโภค พร้อมงานเคลียร์พื้นที่."
      },

      "moving": {
        "title": "ขนย้ายบ้าน & ขนส่งสินค้า",
        "text": "ขนย้ายเฟอร์นิเจอร์ ของใช้ วัสดุก่อสร้าง และอุปกรณ์ต่าง ๆ พร้อมบริการยกและจัดวาง ส่งตรงเวลาและปลอดภัย."
      },

      "soilRemoval": {
        "title": "ขนย้ายดินและเศษวัสดุ",
        "text": "รถดั๊มพ์สำหรับขนดิน เศษวัสดุก่อสร้าง ปูนแตก หิน และของหนัก เคลียร์พื้นที่หลังทำงาน."
      },

      "materials": {
        "title": "ส่งวัสดุก่อสร้าง",
        "text": "บริการส่งทราย หิน หินคลุก และวัสดุก่อสร้างต่าง ๆ พร้อมเทลงจุดที่ลูกค้าต้องการ."
      },

      "cranes": {
        "title": "งานเครน",
        "text": "ยกและเคลื่อนย้ายโครงสร้าง ถังบำบัด คอนเทนเนอร์ และเครื่องจักรหนัก ทำงานแม่นยำในพื้นที่แคบ."
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
