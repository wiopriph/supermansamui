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
  const image = 'https://supermansamui.com/images/services/excavators.webp';

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

const scenariosItems = computed(() => [
  {
    title: t('scenarios.s1.title'),
    description: t('scenarios.s1.description'),
  },
  {
    title: t('scenarios.s2.title'),
    description: t('scenarios.s2.description'),
  },
  {
    title: t('scenarios.s3.title'),
    description: t('scenarios.s3.description'),
  },
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
      "title": "Superman Samui - спецтехника и земляные работы на Самуи",
      "desc": "Аренда экскаваторов, самосвалов и грузовиков на Самуи. Земляные работы, планировка участка, вывоз грунта, подготовка под строительство. Быстрый выезд, честные цены, местные операторы.",
      "keywords": "спецтехника самуи, аренда экскаватора самуи, земляные работы самуи, вывоз грунта самуи, аренда самосвала самуи, excavation samui"
    },
    "hero": {
      "title": "Экскаваторы и земляные работы на Самуи",
      "description": "Расчистка участков, выравнивание, дренаж, вывоз грунта и доставка материалов. Своя техника, местные операторы и понятная цена до начала работ.",
      "primary": "Позвонить"
    },
    "scenarios": {
      "title": "Какие задачи мы решаем",
      "s1": {
        "title": "Нужно расчистить участок перед строительством",
        "description": "Удаляем деревья, корни, мусор и старые постройки. Подготавливаем участок под дальнейшие работы."
      },
      "s2": {
        "title": "Нужен экскаватор для копки или траншей",
        "description": "Экскаваторы с оператором для фундамента, траншей, демонтажа и работы на стройке."
      },
      "s3": {
        "title": "Нужно вывезти грунт или привезти материалы",
        "description": "Самосвалы для вывоза земли, мусора, камней и доставки песка, щебня и других материалов."
      }
    },
    "seoBlock": {
      "title": "Земляные работы и техника на Самуи",
      "p1": "Мы выполняем земляные работы на Самуи: расчистка участков, выравнивание, дренаж, вывоз грунта и подготовка под строительство. Работаем с частными клиентами и застройщиками.",
      "p2": "В наличии собственные экскаваторы, самосвалы и грузовики. Подбираем технику под задачу, учитываем подъезд, грунт и условия участка.",
      "p3": "Отправьте локацию и фото участка - быстро оценим объём работ, подберём технику и предложим оптимальный формат: почасово, сменой или под задачу."
    },
    "services": {
      "title": "Основные услуги",
      "subtitle": "Земляные работы, экскаваторы, самосвалы и подготовка участков под строительство на Самуи.",
      "details": "Подробнее",
      "earthworks": {
        "title": "Земляные работы",
        "text": "Комплексная подготовка участка: расчистка, выравнивание, дренаж, отсыпка и вывоз грунта."
      },
      "excavator": {
        "title": "Аренда экскаватора",
        "text": "Экскаваторы с оператором для копки, траншей, демонтажа, погрузки грунта и строительных задач."
      },
      "truck": {
        "title": "Самосвалы и грузовики",
        "text": "Вывоз грунта и мусора, доставка материалов, перевозка техники и работа на строительных объектах."
      },
      "landClearing": {
        "title": "Расчистка участка",
        "text": "Удаление деревьев, корней, зарослей, мусора и старых строений перед строительством."
      },
      "landLeveling": {
        "title": "Выравнивание участка",
        "text": "Планировка земли, формирование уровней, уклонов и ровных площадок под дом или дорогу."
      },
      "drainage": {
        "title": "Дренаж участка",
        "text": "Отвод воды, траншеи, трубы и уклоны для влажных и низких участков."
      }
    },
    "benefits": {
      "title": "Почему с нами удобно работать",
      "items": {
        "clearPrice": {
          "title": "Понятный расчёт до начала работ",
          "description": "Сначала оцениваем задачу, подъезд, объём и технику. Потом называем цену и формат работы."
        },
        "ownMachines": {
          "title": "Своя техника для разных задач",
          "description": "Экскаваторы, самосвалы и грузовики можно собрать в одну рабочую связку под участок."
        },
        "localTeam": {
          "title": "Знаем Самуи и местные условия",
          "description": "Учитываем дороги, подъезды, дождь, грунт, уклоны и реальные ограничения на острове."
        }
      }
    },
    "pricing": {
      "title": "Базовые цены",
      "description": "Ориентиры по популярной технике. Точная стоимость зависит от локации, подъезда, объёма работ и условий участка.",
      "units": {
        "hour": "от {price} бат/час",
        "trip": "от {price} бат/рейс",
        "shift": "от {price} бат/смена"
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
        "crane": "Кран - от {price} бат/час",
        "delivery": "Доставка экскаватора - {price} бат. Бесплатно от 3 часов работы."
      },
      "note": "Для точного расчёта отправьте локацию, фото подъезда и короткое описание задачи."
    }
  },
  "en": {
    "seo": {
      "title": "Superman Samui - heavy equipment & earthworks on Koh Samui",
      "desc": "Excavators, dump trucks and heavy machinery for earthworks on Koh Samui. Land clearing, grading, soil removal and full site preparation. Fast response, fair pricing, professional local operators.",
      "keywords": "excavator rental koh samui, earthworks samui, dump truck samui, land clearing samui, construction services samui"
    },
    "hero": {
      "title": "Excavators and earthworks on Koh Samui",
      "description": "Land clearing, leveling, drainage, soil removal and material delivery. Own machines, local operators and clear pricing before the job starts.",
      "primary": "Call now"
    },
    "scenarios": {
      "title": "What we help with",
      "s1": {
        "title": "Need to clear land before building",
        "description": "We remove trees, roots, debris and old structures to prepare your land for construction."
      },
      "s2": {
        "title": "Need an excavator for digging or trenching",
        "description": "Excavators with operator for foundations, trenches, demolition and construction work."
      },
      "s3": {
        "title": "Need to remove soil or deliver materials",
        "description": "Dump trucks for soil removal, debris hauling and delivery of sand, gravel and other materials."
      }
    },
    "seoBlock": {
      "title": "Earthworks and heavy equipment on Koh Samui",
      "p1": "We provide earthworks services on Koh Samui including land clearing, leveling, drainage, soil removal and full site preparation for construction.",
      "p2": "Our own fleet of excavators, dump trucks and transport vehicles allows us to handle projects of different size and complexity.",
      "p3": "Send us your location and site photos - we will estimate the job, recommend the right equipment and suggest the best pricing format."
    },
    "services": {
      "title": "Main services",
      "subtitle": "Earthworks, excavators, dump trucks and site preparation for construction on Koh Samui.",
      "details": "Learn more",
      "earthworks": {
        "title": "Earthworks",
        "text": "Full land preparation: clearing, leveling, drainage, backfilling and soil removal."
      },
      "excavator": {
        "title": "Excavator rental",
        "text": "Excavators with operator for digging, trenching, demolition, soil loading and construction work."
      },
      "truck": {
        "title": "Dump trucks and transport",
        "text": "Soil and debris removal, material delivery, equipment transport and construction site support."
      },
      "landClearing": {
        "title": "Land clearing",
        "text": "Tree removal, root removal, vegetation clearing, debris removal and old structure demolition."
      },
      "landLeveling": {
        "title": "Land leveling",
        "text": "Land grading, slope shaping and flat area preparation for houses, roads and construction."
      },
      "drainage": {
        "title": "Drainage work",
        "text": "Water runoff, drainage trenches, pipes and slopes for wet or low land."
      }
    },
    "benefits": {
      "title": "Why clients work with us",
      "items": {
        "clearPrice": {
          "title": "Clear estimate before work starts",
          "description": "We check the task, access, volume and machinery first, then give a clear work format and price."
        },
        "ownMachines": {
          "title": "Own machines for different jobs",
          "description": "Excavators, dump trucks and trucks can work together as one team for your site."
        },
        "localTeam": {
          "title": "We know Samui conditions",
          "description": "We consider roads, access, rain, soil, slopes and real island limitations before the job."
        }
      }
    },
    "pricing": {
      "title": "Base pricing",
      "description": "Typical price ranges for common equipment. Final cost depends on location, access, work volume and site conditions.",
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
        "title": "Additional",
        "crane": "Crane - from {price} THB/hour",
        "delivery": "Excavator delivery - {price} THB. Free from 3 hours of work."
      },
      "note": "For an accurate quote, send your location, access photos and a short job description."
    }
  },
  "th": {
    "seo": {
      "title": "Superman Samui - บริการงานดินและเครื่องจักรหนักบนเกาะสมุย",
      "desc": "เช่ารถขุด รถดั๊มพ์ รถบรรทุก และงานดินทุกประเภทบนเกาะสมุย เคลียร์พื้นที่ ปรับระดับ ขนดิน ถมที่ และเตรียมไซต์งานก่อสร้าง บริการรวดเร็ว ราคายุติธรรม คนขับมืออาชีพ",
      "keywords": "เช่ารถขุด สมุย, งานดิน สมุย, รถดั๊มพ์ สมุย, เคลียร์พื้นที่ สมุย, ปรับระดับ สมุย, บริการเครื่องจักรหนัก สมุย"
    },
    "hero": {
      "title": "งานดินและรถขุดบนเกาะสมุย",
      "description": "เคลียร์พื้นที่ ปรับระดับ ทำระบายน้ำ ขนดิน และส่งวัสดุก่อสร้าง มีเครื่องจักรของเราเอง คนขับท้องถิ่น และแจ้งราคาชัดเจนก่อนเริ่มงาน",
      "primary": "โทรเลย"
    },
    "scenarios": {
      "title": "เราช่วยอะไรได้บ้าง",
      "s1": {
        "title": "ต้องการเคลียร์พื้นที่ก่อนสร้างบ้าน",
        "description": "ตัดต้นไม้ ขุดราก เคลียร์เศษวัสดุ และรื้อสิ่งปลูกสร้างเก่า เพื่อเตรียมพื้นที่สำหรับก่อสร้าง"
      },
      "s2": {
        "title": "ต้องการรถขุดสำหรับขุดหรือทำร่อง",
        "description": "รถขุดพร้อมคนขับ สำหรับฐานราก ร่องน้ำ งานทุบรื้อ และงานก่อสร้างทั่วไป"
      },
      "s3": {
        "title": "ต้องการขนดินหรือส่งวัสดุ",
        "description": "รถดั๊มสำหรับขนดิน เศษวัสดุ และส่งทราย หิน และวัสดุก่อสร้าง"
      }
    },
    "seoBlock": {
      "title": "บริการงานดินบนเกาะสมุย",
      "p1": "เรารับงานดินทุกประเภทบนเกาะสมุย เช่น เคลียร์พื้นที่ ปรับระดับ ทำระบบระบายน้ำ ขนดิน และเตรียมพื้นที่สำหรับก่อสร้าง",
      "p2": "เรามีรถขุด รถดั๊ม และรถบรรทุกของเราเอง สามารถเลือกใช้ให้เหมาะกับงานและสภาพพื้นที่",
      "p3": "ส่งโลเคชันและรูปหน้างานมา เราจะช่วยประเมินงาน เลือกเครื่องจักร และแนะนำรูปแบบราคาที่เหมาะสม"
    },
    "services": {
      "title": "บริการหลัก",
      "subtitle": "งานดิน รถขุด รถดั๊มพ์ และเตรียมพื้นที่ก่อสร้างบนเกาะสมุย",
      "details": "ดูเพิ่มเติม",
      "earthworks": {
        "title": "งานดิน",
        "text": "เตรียมพื้นที่แบบครบวงจร เคลียร์พื้นที่ ปรับระดับ ระบายน้ำ ถมดิน และขนดินออก"
      },
      "excavator": {
        "title": "บริการรถขุด",
        "text": "รถขุดพร้อมคนขับ สำหรับขุดดิน ขุดร่อง ทุบรื้อ ตักดิน และงานก่อสร้าง"
      },
      "truck": {
        "title": "รถดั๊มพ์และขนส่ง",
        "text": "ขนดิน เศษวัสดุ ส่งวัสดุก่อสร้าง ขนย้ายเครื่องจักร และช่วยงานไซต์ก่อสร้าง"
      },
      "landClearing": {
        "title": "เคลียร์ที่ดิน",
        "text": "ตัดต้นไม้ ขุดรากไม้ เคลียร์พืชรก ขนเศษวัสดุ และรื้อถอนสิ่งปลูกสร้างเก่า"
      },
      "landLeveling": {
        "title": "ปรับระดับที่ดิน",
        "text": "ปรับพื้นที่ ทำระดับ ทำสโลป และเตรียมพื้นที่เรียบสำหรับบ้าน ถนน และงานก่อสร้าง"
      },
      "drainage": {
        "title": "ระบบระบายน้ำ",
        "text": "แก้น้ำขัง ขุดร่อง วางท่อ และทำสโลปสำหรับพื้นที่เปียกหรือพื้นที่ต่ำ"
      }
    },
    "benefits": {
      "title": "ทำไมลูกค้าเลือกเรา",
      "items": {
        "clearPrice": {
          "title": "ประเมินราคาชัดเจนก่อนเริ่มงาน",
          "description": "ดูงาน ทางเข้า ปริมาณงาน และเครื่องจักรก่อน แล้วแจ้งรูปแบบงานและราคาให้ชัดเจน"
        },
        "ownMachines": {
          "title": "มีเครื่องจักรสำหรับหลายประเภทงาน",
          "description": "รถขุด รถดั๊มพ์ และรถบรรทุกสามารถทำงานร่วมกันในทีมเดียวได้"
        },
        "localTeam": {
          "title": "เข้าใจพื้นที่บนเกาะสมุย",
          "description": "คำนึงถึงถนน ทางเข้า ฝน ดิน ความลาดเอียง และข้อจำกัดจริงของพื้นที่"
        }
      }
    },
    "pricing": {
      "title": "ราคาเบื้องต้น",
      "description": "ตัวอย่างราคาสำหรับเครื่องจักรที่ใช้บ่อย ราคาจริงขึ้นอยู่กับหน้างาน ทางเข้า ปริมาณงาน และสภาพพื้นที่",
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
        "crane": "เครน - เริ่มต้น {price} บาท/ชั่วโมง",
        "delivery": "ค่าขนส่งรถขุด - {price} บาท ฟรีเมื่อใช้งานตั้งแต่ 3 ชั่วโมงขึ้นไป"
      },
      "note": "ส่งโลเคชัน รูปทางเข้า และรายละเอียดงาน เพื่อประเมินราคาที่แม่นยำ"
    }
  }
}
</i18n>

<template>
  <UPage>
    <HomeHero
      :title="t('hero.title')"
      :description="t('hero.description')"
      :primaryLabel="t('hero.primary')"
    />

    <HomeServices
      :title="t('services.title')"
      :subtitle="t('services.subtitle')"
      :details="t('services.details')"
      :items="servicesItems"
    />

    <ServiceIncluded
      :title="t('scenarios.title')"
      :items="scenariosItems"
    />

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
