<script setup lang="ts">
const { t } = useI18n();
const localeRoute = useLocaleRoute();

const services = computed(() => [
  {
    to: localeRoute({ name: 'services-earthworks' }),
    key: 'earthworks',
    image: '/images/services/earthworks.webp',
  },
  {
    to: localeRoute({ name: 'services-excavator' }),
    key: 'excavators',
    image: '/images/services/excavators.webp',
  },
  {
    to: localeRoute({ name: 'services-truck' }),
    key: 'moving',
    image: '/images/services/moving.webp',
  },
  {
    key: 'soilRemoval',
    image: '/images/services/soil-removal.webp',
  },
  {
    key: 'materials',
    image: '/images/services/materials.webp',
  },
  {
    key: 'cranes',
    image: '/images/services/cranes.webp',
  },
]);


const baseUrl = 'https://supermansamui.com';

const offerList = computed(() =>
  services.value.map((s) => {
    const url = s.to ? `${baseUrl}${s.to.fullPath}` : undefined;

    return {
      '@type': 'Offer',
      '@id': url ? `${url}#offer` : `${baseUrl}#offer-${s.key}`,
      url,
      name: t(`services.${s.key}.title`),
      description: t(`services.${s.key}.text`),
      priceCurrency: 'THB',
    };
  }),
);


const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://supermansamui.com#service-heavy-equipment',
      name: t('services.schemaTitle'),
      description: t('services.schemaDescription'),
      provider: {
        '@id': 'https://supermansamui.com#business',
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
      "schemaDescription": "Экскаваторы, самосвалы и грузовики на Самуи: земляные работы, вывоз грунта, доставка материалов, перевозка техники и крановые работы.",

      "title": "Услуги на Самуи",
      "subtitle": "Экскаваторы, самосвалы и техника для стройки, вывоза и доставки. Помогаем выбрать, считаем заранее и выполняем без задержек.",
      "details": "Подробнее",

      "earthworks": {
        "title": "Земляные работы",
        "text": "Копка, выравнивание и подготовка участка под строительство. Помогаем оценить объем и сразу даём понятную цену."
      },
      "excavators": {
        "title": "Аренда экскаватора",
        "text": "Подбираем экскаватор под задачу: котлованы, траншеи, расчистка. Работаем аккуратно и без переделок."
      },
      "moving": {
        "title": "Грузовики и перевозки",
        "text": "Перевозка мебели, техники и материалов по Самуи. Подходит для переездов и стройки."
      },
      "soilRemoval": {
        "title": "Вывоз грунта и мусора",
        "text": "Вывозим землю и строительный мусор с участка. Считаем количество рейсов заранее."
      },
      "materials": {
        "title": "Доставка материалов",
        "text": "Песок, щебень, грунт и другие материалы с доставкой прямо на объект."
      },
      "cranes": {
        "title": "Крановые работы",
        "text": "Подъём и установка тяжёлых грузов там, где нет погрузчика."
      }
    }
  },

  "en": {
    "services": {
      "schemaTitle": "Heavy equipment & transport services on Koh Samui",
      "schemaDescription": "Excavators, dump trucks and trucks on Koh Samui: earthworks, soil removal, material delivery, equipment transport and crane services.",

      "title": "Services on Koh Samui",
      "subtitle": "Excavators, dump trucks and transport for construction, delivery and removal. We help you choose, estimate upfront and complete the job without delays.",
      "details": "Learn more",

      "earthworks": {
        "title": "Earthworks",
        "text": "Digging, leveling and site preparation for construction. We estimate the scope and provide a clear price upfront."
      },
      "excavators": {
        "title": "Excavator rental",
        "text": "We choose the right excavator for your job: foundations, trenches, land clearing. Clean and precise work."
      },
      "moving": {
        "title": "Trucks & transport",
        "text": "Transport of furniture, equipment and materials across Koh Samui. Ideal for moving and construction."
      },
      "soilRemoval": {
        "title": "Soil & debris removal",
        "text": "We remove soil and construction waste quickly. Trip count and price estimated in advance."
      },
      "materials": {
        "title": "Material delivery",
        "text": "Sand, gravel, soil and construction materials delivered directly to your site."
      },
      "cranes": {
        "title": "Crane services",
        "text": "Lifting and placing heavy loads where forklifts are not available."
      }
    }
  },

  "th": {
    "services": {
      "schemaTitle": "บริการเครื่องจักรและขนส่งบนเกาะสมุย",
      "schemaDescription": "รถขุด รถดั๊ม และรถบรรทุกบนเกาะสมุย งานดิน ขนดิน ส่งวัสดุ ขนย้ายเครื่องจักร และงานเครน.",

      "title": "บริการบนเกาะสมุย",
      "subtitle": "รถขุด รถดั๊ม และรถบรรทุกสำหรับงานก่อสร้าง ขนส่ง และเคลียร์พื้นที่ ช่วยประเมินงานล่วงหน้าและทำงานตรงเวลา.",
      "details": "ดูเพิ่มเติม",

      "earthworks": {
        "title": "งานดิน",
        "text": "ขุด ปรับระดับ และเตรียมพื้นที่สำหรับก่อสร้าง พร้อมประเมินงานและราคาให้ก่อนเริ่ม."
      },
      "excavators": {
        "title": "บริการรถขุด",
        "text": "เลือกขนาดรถขุดให้เหมาะกับงาน เช่น ขุดฐานราก ร่อง หรือเคลียร์พื้นที่ ทำงานแม่นยำ."
      },
      "moving": {
        "title": "รถบรรทุกและขนส่ง",
        "text": "ขนเฟอร์นิเจอร์ เครื่องจักร และวัสดุทั่วสมุย เหมาะสำหรับย้ายบ้านและงานก่อสร้าง."
      },
      "soilRemoval": {
        "title": "ขนดินและเศษวัสดุ",
        "text": "ขนดินและเศษวัสดุก่อสร้างออกจากพื้นที่ พร้อมคำนวณจำนวนเที่ยวล่วงหน้า."
      },
      "materials": {
        "title": "ส่งวัสดุ",
        "text": "ส่งทราย หิน ดิน และวัสดุก่อสร้างถึงหน้างาน."
      },
      "cranes": {
        "title": "งานเครน",
        "text": "ยกและติดตั้งของหนักในพื้นที่ที่ไม่มีรถยก."
      }
    }
  }
}
</i18n>

<template>
  <section class="py-10 space-y-6">
    <div class="space-y-2 text-center">
      <h2
        class="text-2xl sm:text-3xl font-semibold"
        v-text="t('services.title')"
      />

      <p
        class="text-sm text-gray-600 max-w-2xl mx-auto"
        v-text="t('services.subtitle')"
      />
    </div>

    <UBlogPosts orientation="horizontal">
      <UBlogPost
        v-for="service in services"
        :key="service.key"
        :title="t(`services.${service.key}.title`)"
        :description="t(`services.${service.key}.text`)"
        :image="service.image"
        :to="service.to"
        :ui="{
          root: 'h-full',
          body: 'gap-2',
          image: 'aspect-video object-cover',
          title: 'text-base font-semibold text-gray-900',
          description: 'text-sm leading-6 text-gray-600',
        }"
      >
        <template
          v-if="service.to"
          #title
        >
          <div class="flex items-center justify-between gap-3">
            <span>{{ t(`services.${service.key}.title`) }}</span>

            <div class="flex items-center gap-1 text-sm text-primary shrink-0 opacity-80 transition-transform duration-200 group-hover:translate-x-1">
              <span>{{ t('services.details') }}</span>

              <UIcon
                name="i-lucide-arrow-right"
                class="w-4 h-4"
              />
            </div>
          </div>
        </template>
      </UBlogPost>
    </UBlogPosts>
  </section>
</template>
