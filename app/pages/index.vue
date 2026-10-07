<script setup lang="ts">
import { PRICING } from '~/constants/pricing';


const { t } = useI18n();
const localeRoute = useLocaleRoute();

const servicesItems = computed(() => [
  {
    key: 'earthworks',
    title: t('services.earthworks.title'),
    text: t('services.earthworks.text'),
    image: '/images/services/earthworks/hero.webp',
    to: localeRoute({ name: 'services-earthworks' }),
  },
  {
    key: 'excavator',
    title: t('services.excavator.title'),
    text: t('services.excavator.text'),
    image: '/images/services/excavators/hero.webp',
    to: localeRoute({ name: 'services-excavator' }),
  },
  {
    key: 'truck',
    title: t('services.truck.title'),
    text: t('services.truck.text'),
    image: '/images/services/trucks/hero.webp',
    to: localeRoute({ name: 'services-truck' }),
  },
  {
    key: 'landClearing',
    title: t('services.landClearing.title'),
    text: t('services.landClearing.text'),
    image: '/images/services/land-clearing/hero.webp',
    to: localeRoute({ name: 'services-land-clearing' }),
  },
  {
    key: 'landLeveling',
    title: t('services.landLeveling.title'),
    text: t('services.landLeveling.text'),
    image: '/images/services/land-leveling/hero.webp',
    to: localeRoute({ name: 'services-land-leveling' }),
  },
  {
    key: 'drainage',
    title: t('services.drainage.title'),
    text: t('services.drainage.text'),
    image: '/images/services/drainage/hero.webp',
    to: localeRoute({ name: 'services-drainage' }),
  },
]);

const serviceTypes = computed(() => servicesItems.value.map((item) => item.title));

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://supermansamui.com#service',
      name: t('seo.title'),
      description: t('seo.desc'),
      provider: {
        '@id': 'https://supermansamui.com#business',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Koh Samui, Surat Thani, Thailand',
      },
      serviceType: serviceTypes.value,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t('services.title'),
        itemListElement: servicesItems.value.map((item) => ({
          '@type': 'Offer',
          name: item.title,
          description: item.text,
          url: item.to?.fullPath ?
            `https://supermansamui.com${item.to.fullPath}` :
            undefined,
          itemOffered: {
            '@type': 'Service',
            name: item.title,
            description: item.text,
            areaServed: 'Koh Samui',
          },
        })),
      },
    },
  ],
}));

useHead(() => {
  const title = t('seo.title');
  const description = t('seo.desc');
  const keywords = t('seo.keywords');
  const image = 'https://supermansamui.com/images/services/excavators/hero.webp';

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },

      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '720' },
      { property: 'og:image:height', content: '540' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(jsonLd.value),
      },
    ],
  };
});

const benefitsItems = computed(() => [
  {
    icon: 'i-lucide-badge-dollar-sign',
    title: t('benefits.items.clearPrice.title'),
    description: t('benefits.items.clearPrice.description'),
  },
  {
    icon: 'i-lucide-hard-hat',
    title: t('benefits.items.ownMachines.title'),
    description: t('benefits.items.ownMachines.description'),
  },
  {
    icon: 'i-lucide-map',
    title: t('benefits.items.localTeam.title'),
    description: t('benefits.items.localTeam.description'),
  },
]);

const formatPrice = (key: 'hour' | 'trip' | 'shift', value: number) =>
  t(`pricing.units.${key}`, { price: value });

const pricingGroups = computed(() => [
  {
    title: t('pricing.excavators.title'),
    items: [
      {
        label: t('pricing.excavators.small'),
        prices: [
          formatPrice('hour', PRICING.excavators.pc30.hour),
          formatPrice('shift', PRICING.excavators.pc30.shift),
        ],
      },
      {
        label: t('pricing.excavators.medium'),
        prices: [
          formatPrice('hour', PRICING.excavators.cat305cr.hour),
          formatPrice('shift', PRICING.excavators.cat305cr.shift),
        ],
      },
      {
        label: t('pricing.excavators.mediumLarge'),
        prices: [
          formatPrice('hour', PRICING.excavators.vio70.hour),
          formatPrice('shift', PRICING.excavators.vio70.shift),
        ],
      },
      {
        label: t('pricing.excavators.large'),
        prices: [
          formatPrice('hour', PRICING.excavators.pc128.hour),
          formatPrice('shift', PRICING.excavators.pc128.shift),
        ],
      },
    ],
  },
  {
    title: t('pricing.trucks.title'),
    items: [
      {
        label: t('pricing.trucks.elf'),
        prices: [
          formatPrice('trip', PRICING.trucks.elf.trip),
          formatPrice('shift', PRICING.trucks.elf.shift),
        ],
      },
      {
        label: t('pricing.trucks.hino300'),
        prices: [
          formatPrice('trip', PRICING.trucks.hino300.trip),
          formatPrice('shift', PRICING.trucks.hino300.shift),
        ],
      },
      {
        label: t('pricing.trucks.fm18'),
        prices: [
          formatPrice('trip', PRICING.trucks.fm18.trip),
          formatPrice('shift', PRICING.trucks.fm18.shift),
        ],
      },
    ],
  },
]);

const pricingExtraItems = computed(() => [
  t('pricing.extra.crane', { price: PRICING.crane.hour }),
  t('pricing.extra.delivery', { price: PRICING.delivery.excavator }),
]);

const seoBlock = computed(() => ({
  title: t('seoBlock.title'),
  paragraphs: [
    t('seoBlock.p1'),
    t('seoBlock.p2'),
    t('seoBlock.p3'),
  ],
}));
</script>

<i18n lang="json">
{
  "ru": {
    "seo": {
      "title": "Спецтехника и земляные работы на Самуи",
      "desc": "Superman Samui: земляные работы, экскаваторы с оператором, самосвалы и перевозки на Самуи. Выберите услугу или расскажите о задаче — поможем с решением.",
      "keywords": "земляные работы самуи, аренда спецтехники самуи, экскаватор с оператором самуи, самосвал самуи, расчистка участка самуи"
    },
    "hero": {
      "title": "Спецтехника, земляные работы и перевозки на Самуи",
      "description": "Экскаваторы с оператором, самосвалы и команда для работ на вашем участке. Закажите нужную услугу или расскажите о проекте — мы предложим решение и рассчитаем стоимость.",
      "eyebrow": "Самуи · техника с оператором и земляные работы"
    },
    "seoBlock": {
      "title": "Superman Samui — техника и команда на острове",
      "p1": "Работаем с частными заказчиками, застройщиками и подрядчиками на Самуи. В нашем парке — экскаваторы Komatsu, Caterpillar и Yanmar, самосвалы Hino и трактор Kubota. Вся техника наша и стоит на острове, ничего не нужно везти с материка.",
      "p2": "Можно заказать отдельную машину с оператором или поручить нам несколько видов работ сразу: от небольшого котлована до многомесячных проектов с сотнями рейсов. Работаем напрямую, без посредников.",
      "p3": "Не знаете, с чего начать? Пришлите локацию, фото и описание задачи. Дадим рекомендации и обсудим стоимость и условия до начала работ."
    },
    "services": {
      "title": "Чем мы можем помочь",
      "subtitle": "Выберите направление работ или отдельную услугу для вашего участка.",
      "details": "Подробнее",
      "earthworks": {
        "title": "Земляные работы",
        "text": "Работы с грунтом и участком: от котлована и отсыпки до расчистки, выравнивания и дренажа."
      },
      "excavator": {
        "title": "Аренда экскаватора",
        "text": "Экскаваторы с оператором для копки, погрузки и демонтажа. Подберём машину под объём работ и подъезд к участку."
      },
      "truck": {
        "title": "Самосвалы и перевозки",
        "text": "Вывозим грунт и строительный мусор, доставляем песок, щебень и другие материалы, перевозим технику."
      },
      "landClearing": {
        "title": "Расчистка участка",
        "text": "Убираем заросли, деревья, пни и мусор. Освобождаем участок для строительства и подъезда техники."
      },
      "landLeveling": {
        "title": "Выравнивание участка",
        "text": "Срезаем возвышенности, засыпаем низины и формируем нужные уклоны. Готовим площадки под дом, двор или дорогу."
      },
      "drainage": {
        "title": "Дренаж участка",
        "text": "Организуем отвод дождевой воды: копаем канавы и траншеи, укладываем трубы с учётом рельефа участка."
      }
    },
    "benefits": {
      "title": "Почему с нами удобно работать",
      "items": {
        "clearPrice": {
          "title": "Понятная стоимость",
          "description": "Оценим проект, дадим рекомендации и согласуем цены и условия до начала работ. Дополнительные работы обсудим с вами заранее."
        },
        "ownMachines": {
          "title": "Своя техника и команда",
          "description": "Подберём машины и организуем их работу на участке. Экскаваторы, самосвалы и операторы — через одного подрядчика."
        },
        "localTeam": {
          "title": "Знаем особенности Самуи",
          "description": "Учитываем узкие подъезды, крутые склоны, грунт и сезон дождей. Планируем работы с учётом условий вашего участка."
        }
      }
    },
    "pricing": {
      "title": "Цены на аренду техники",
      "description": "Ниже — стартовые тарифы. Стоимость вашего заказа рассчитаем с учётом техники, объёма работ, доставки и условий участка.",
      "units": {
        "hour": "от {price} бат/час",
        "trip": "от {price} бат/рейс",
        "shift": "от {price} бат/смену"
      },
      "excavators": {
        "title": "Экскаваторы",
        "small": "Малый экскаватор (3 т)",
        "medium": "Средний экскаватор (5 т)",
        "mediumLarge": "Экскаватор (8 т)",
        "large": "Большой экскаватор (13 т)"
      },
      "trucks": {
        "title": "Самосвалы",
        "elf": "Компактный самосвал",
        "hino300": "6-колёсный самосвал",
        "fm18": "10-колёсный самосвал"
      },
      "extra": {
        "title": "Дополнительно",
        "crane": "Кран — от {price} бат/час",
        "delivery": "Доставка экскаватора — {price} бат. При заказе от 3 часов работы — бесплатно."
      },
      "note": "Чтобы узнать стоимость работ, пришлите локацию, фото участка и подъезда, а также короткое описание задачи.",
      "equipment": "Посмотреть всю технику и цены"
    }
  },
  "en": {
    "seo": {
      "title": "Equipment Rental & Earthworks on Koh Samui",
      "desc": "Superman Samui: earthworks, excavators with operators, dump trucks and transport on Koh Samui. Choose a service or tell us about your project for a quote.",
      "keywords": "earthworks koh samui, excavator rental koh samui, excavator with operator samui, dump truck samui, land clearing samui"
    },
    "hero": {
      "title": "Equipment Rental, Earthworks & Transport on Koh Samui",
      "description": "Excavators with operators, dump trucks and a team for your site. Choose a service or tell us about your project — we’ll recommend an approach and prepare a quote.",
      "eyebrow": "Koh Samui · machinery with operators and earthworks"
    },
    "seoBlock": {
      "title": "Superman Samui — Local Equipment & Team",
      "p1": "We work with private clients, developers and contractors on Koh Samui. Our own fleet is based on the island: Komatsu, Caterpillar and Yanmar excavators, Hino dump trucks and a Kubota tractor, with no mainland logistics.",
      "p2": "Book a single machine with an operator or hand us several types of work at once: from a single excavation to months-long projects with hundreds of truck runs. We work directly, without middlemen.",
      "p3": "Not sure where to start? Send your location, photos and a short description. We’ll offer practical advice and discuss costs and terms before work begins."
    },
    "services": {
      "title": "How We Can Help",
      "subtitle": "Explore our main services or choose a specific job for your site.",
      "details": "Learn more",
      "earthworks": {
        "title": "Earthworks",
        "text": "Excavation and backfilling, land clearing, grading and drainage for your site."
      },
      "excavator": {
        "title": "Excavator Rental",
        "text": "Excavators with operators for digging, loading and demolition. We select the right machine for your workload and site access."
      },
      "truck": {
        "title": "Dump Trucks & Transport",
        "text": "Soil and construction waste removal, sand and aggregate delivery, and equipment transport."
      },
      "landClearing": {
        "title": "Land Clearing",
        "text": "We remove overgrowth, trees, stumps and debris to clear space for construction and equipment access."
      },
      "landLeveling": {
        "title": "Land Leveling & Grading",
        "text": "We cut high spots, fill low areas and shape slopes to prepare sites for houses, yards and roads."
      },
      "drainage": {
        "title": "Land Drainage",
        "text": "Drainage channels, trenches and pipes planned around your land’s contours to carry rainwater away."
      }
    },
    "benefits": {
      "title": "Why Work With Us",
      "items": {
        "clearPrice": {
          "title": "Clear Costs",
          "description": "We assess your project, offer practical advice and agree on prices and terms before starting. Any additional work is discussed with you in advance."
        },
        "ownMachines": {
          "title": "Our Own Equipment & Team",
          "description": "We select the machines and coordinate work on site. Excavators, dump trucks and operators through one contractor."
        },
        "localTeam": {
          "title": "Local Knowledge",
          "description": "Narrow access, steep slopes, soil conditions and the rainy season all shape how we plan your work."
        }
      }
    },
    "pricing": {
      "title": "Equipment Rental Rates",
      "description": "Starting rates are listed below. Your quote will account for the equipment, scope of work, delivery and site conditions.",
      "units": {
        "hour": "from {price} THB/hour",
        "trip": "from {price} THB/trip",
        "shift": "from {price} THB/day"
      },
      "excavators": {
        "title": "Excavators",
        "small": "Small excavator (3 ton)",
        "medium": "Medium excavator (5 ton)",
        "mediumLarge": "Excavator (8 ton)",
        "large": "Large excavator (13 ton)"
      },
      "trucks": {
        "title": "Dump trucks",
        "elf": "Compact dump truck",
        "hino300": "6-wheel dump truck",
        "fm18": "10-wheel dump truck"
      },
      "extra": {
        "title": "Additional Services",
        "crane": "Crane — from {price} THB/hour",
        "delivery": "Excavator delivery — {price} THB. Free when you book at least 3 hours of work."
      },
      "note": "For a quote, send your location, photos of the site and access road, and a short description of the job.",
      "equipment": "View All Equipment & Rates"
    }
  },
  "th": {
    "seo": {
      "title": "เครื่องจักร งานดินและขนส่งบนเกาะสมุย",
      "desc": "Superman Samui รับงานดิน บริการรถขุดพร้อมคนขับ รถดั๊มและขนส่งบนเกาะสมุย เลือกบริการที่ต้องการหรือแจ้งรายละเอียดโครงการ เพื่อรับคำแนะนำและประเมินราคา",
      "keywords": "งานดิน สมุย, เช่ารถขุด สมุย, รถขุดพร้อมคนขับ สมุย, รถดั๊ม สมุย, เคลียร์ที่ดิน สมุย"
    },
    "hero": {
      "title": "บริการเครื่องจักร งานดิน และขนส่งบนเกาะสมุย",
      "description": "รถขุดพร้อมคนขับ รถดั๊ม และทีมงานสำหรับพื้นที่ของคุณ เลือกบริการที่ต้องการหรือบอกรายละเอียดโครงการ เราจะแนะนำวิธีทำงานและประเมินราคาให้",
      "eyebrow": "เกาะสมุย · เครื่องจักรพร้อมคนขับและงานดิน"
    },
    "seoBlock": {
      "title": "Superman Samui — เครื่องจักรและทีมงานบนเกาะ",
      "p1": "ให้บริการลูกค้าทั่วไป ผู้พัฒนาโครงการ และผู้รับเหมาบนเกาะสมุย เครื่องจักรเป็นของเราเองและประจำอยู่บนเกาะ ทั้งรถขุด Komatsu, Caterpillar และ Yanmar รถดั๊ม Hino และแทรกเตอร์ Kubota ไม่ต้องรอขนจากแผ่นดินใหญ่",
      "p2": "เลือกใช้เครื่องจักรพร้อมคนขับเพียงคันเดียว หรือให้เรารับงานหลายประเภทพร้อมกัน ตั้งแต่ขุดบ่อเล็ก ๆ จนถึงโครงการหลายเดือนที่ขนส่งหลายร้อยเที่ยว ทำงานโดยตรงไม่ผ่านคนกลาง",
      "p3": "ยังไม่รู้จะเริ่มตรงไหน? ส่งโลเคชัน รูปถ่าย และรายละเอียดงานมาให้เรา เราจะให้คำแนะนำ พร้อมคุยเรื่องราคาและเงื่อนไขก่อนเริ่มงาน"
    },
    "services": {
      "title": "เราช่วยคุณได้อย่างไร",
      "subtitle": "เลือกประเภทงานหลักหรือบริการเฉพาะที่เหมาะกับพื้นที่ของคุณ",
      "details": "ดูเพิ่มเติม",
      "earthworks": {
        "title": "งานดิน",
        "text": "ขุดดิน ถมดิน เคลียร์ที่ดิน ปรับระดับ และทำระบบระบายน้ำตามความต้องการของพื้นที่"
      },
      "excavator": {
        "title": "เช่ารถขุดพร้อมคนขับ",
        "text": "สำหรับขุดดิน ตักดิน และรื้อถอน เลือกขนาดรถให้เหมาะกับปริมาณงานและทางเข้าพื้นที่"
      },
      "truck": {
        "title": "รถดั๊มและบริการขนส่ง",
        "text": "ขนดินและเศษวัสดุก่อสร้างออก ส่งทราย หิน และวัสดุอื่น ๆ พร้อมบริการขนย้ายเครื่องจักร"
      },
      "landClearing": {
        "title": "เคลียร์ที่ดิน",
        "text": "กำจัดวัชพืช ต้นไม้ ตอไม้ และขยะ เพื่อเตรียมพื้นที่ก่อสร้างและเปิดทางเข้าให้เครื่องจักร"
      },
      "landLeveling": {
        "title": "ปรับระดับที่ดิน",
        "text": "ตัดดินส่วนสูง ถมพื้นที่ต่ำ และปรับความลาดเอียง เตรียมพื้นที่สำหรับบ้าน ลาน และถนน"
      },
      "drainage": {
        "title": "ระบบระบายน้ำ",
        "text": "ขุดคู ขุดร่อง และวางท่อระบายน้ำฝน โดยคำนึงถึงระดับและความลาดเอียงของพื้นที่"
      }
    },
    "benefits": {
      "title": "ทำไมลูกค้าเลือกเรา",
      "items": {
        "clearPrice": {
          "title": "ราคาชัดเจน",
          "description": "ประเมินงาน ให้คำแนะนำ และตกลงราคาและเงื่อนไขก่อนเริ่ม หากมีงานเพิ่มเติม เราจะคุยกับคุณล่วงหน้า"
        },
        "ownMachines": {
          "title": "เครื่องจักรและทีมงานของเราเอง",
          "description": "เลือกเครื่องจักรและประสานงานหน้างานให้ ทั้งรถขุด รถดั๊ม และคนขับ ติดต่อผ่านผู้รับเหมารายเดียว"
        },
        "localTeam": {
          "title": "รู้จักพื้นที่สมุย",
          "description": "วางแผนตามสภาพพื้นที่จริง ทั้งทางเข้าแคบ พื้นที่ลาดชัน สภาพดิน และฤดูฝน"
        }
      }
    },
    "pricing": {
      "title": "อัตราค่าบริการเครื่องจักร",
      "description": "ด้านล่างคือราคาเริ่มต้น ราคาสำหรับงานของคุณจะคำนวณตามเครื่องจักร ปริมาณงาน ค่าขนส่ง และสภาพพื้นที่",
      "units": {
        "hour": "เริ่มต้น {price} บาท/ชั่วโมง",
        "trip": "เริ่มต้น {price} บาท/เที่ยว",
        "shift": "เริ่มต้น {price} บาท/วัน"
      },
      "excavators": {
        "title": "รถขุด",
        "small": "รถขุดขนาดเล็ก (3 ตัน)",
        "medium": "รถขุดขนาดกลาง (5 ตัน)",
        "mediumLarge": "รถขุด (8 ตัน)",
        "large": "รถขุดขนาดใหญ่ (13 ตัน)"
      },
      "trucks": {
        "title": "รถดั๊ม",
        "elf": "รถดั๊มขนาดเล็ก",
        "hino300": "รถดั๊ม 6 ล้อ",
        "fm18": "รถดั๊ม 10 ล้อ"
      },
      "extra": {
        "title": "บริการเพิ่มเติม",
        "crane": "เครน — เริ่มต้น {price} บาท/ชั่วโมง",
        "delivery": "ค่าขนส่งรถขุด — {price} บาท ฟรีเมื่อจองงานตั้งแต่ 3 ชั่วโมงขึ้นไป"
      },
      "note": "หากต้องการทราบราคา ส่งโลเคชัน รูปพื้นที่และทางเข้า พร้อมรายละเอียดงานสั้น ๆ มาให้เรา",
      "equipment": "ดูเครื่องจักรและราคาทั้งหมด"
    }
  }
}
</i18n>

<template>
  <UPage>
    <ServiceHero
      :title="t('hero.title')"
      :description="t('hero.description')"
      :eyebrow="t('hero.eyebrow')"
      imageSrc="/images/services/excavators/hero.webp"
      page="/"
    />

    <HomeServices
      :title="t('services.title')"
      :subtitle="t('services.subtitle')"
      :details="t('services.details')"
      :items="servicesItems"
    />

    <ServiceProjects />

    <ServiceIncluded
      :title="t('benefits.title')"
      :items="benefitsItems"
    />

    <HomePricing
      :title="t('pricing.title')"
      :description="t('pricing.description')"
      :groups="pricingGroups"
      :extraTitle="t('pricing.extra.title')"
      :extraItems="pricingExtraItems"
      :note="t('pricing.note')"
      :equipmentLabel="t('pricing.equipment')"
    />

    <ServiceSeoBlock
      :title="seoBlock.title"
      :paragraphs="seoBlock.paragraphs"
    />

    <CoreContacts
      page="/"
      location="content"
    />
  </UPage>
</template>
