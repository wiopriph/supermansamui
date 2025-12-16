<script setup lang="ts">
import { CONTACT_PHONE } from '~/constants/contacts';


const { t } = useI18n();

const heroTitle = computed(() => t('trucks.hero.title'));
const heroDescription = computed(() => t('trucks.hero.description'));

const tasksTitle = computed(() => t('trucks.tasks.title'));
const tasksItems = computed(() => [
  {
    icon: 'i-lucide-truck',
    title: t('trucks.tasks.t1.title'),
    description: t('trucks.tasks.t1.description'),
  },
  {
    icon: 'i-lucide-boxes',
    title: t('trucks.tasks.t2.title'),
    description: t('trucks.tasks.t2.description'),
  },
  {
    icon: 'i-lucide-tractor',
    title: t('trucks.tasks.t3.title'),
    description: t('trucks.tasks.t3.description'),
  },
  {
    icon: 'i-lucide-mountain',
    title: t('trucks.tasks.t4.title'),
    description: t('trucks.tasks.t4.description'),
  },
  {
    icon: 'i-lucide-repeat',
    title: t('trucks.tasks.t5.title'),
    description: t('trucks.tasks.t5.description'),
  },
  {
    icon: 'i-lucide-users',
    title: t('trucks.tasks.t6.title'),
    description: t('trucks.tasks.t6.description'),
  },
]);

const equipmentTitle = computed(() => t('trucks.equipment.title'));
const equipmentNote = computed(() => t('trucks.equipment.note'));
const equipmentItems = computed(() => ([
  {
    title: 'Isuzu ELF',
    image: '/images/equipment/trucks/isuzu_elf.webp',
    subtitle: t('trucks.equipment.items.elf.type'),
    description: t('trucks.equipment.items.elf.description'),
    prices: [
      {
        label: t('trucks.equipment.prices.trip'),
        value: 'от 800 THB',
      },
      {
        label: t('trucks.equipment.prices.day'),
        value: 'от 3 500 THB',
      },
    ],
  },
  {
    title: 'DEVA Hercules',
    image: '/images/equipment/trucks/deva_hercules.webp',
    subtitle: t('trucks.equipment.items.deva.type'),
    description: t('trucks.equipment.items.deva.description'),
    prices: [
      {
        label: t('trucks.equipment.prices.trip'),
        value: 'от 700 THB',
      },
      {
        label: t('trucks.equipment.prices.day'),
        value: 'от 3 000 THB',
      },
    ],
  },
  {
    title: 'Hino Ranger 4D',
    image: '/images/equipment/trucks/hino_ranger_4d.webp',
    subtitle: t('trucks.equipment.items.ranger.type'),
    description: t('trucks.equipment.items.ranger.description'),
    prices: [
      {
        label: t('trucks.equipment.prices.trip'),
        value: 'от 1 800 THB',
      },
      {
        label: t('trucks.equipment.prices.day'),
        value: 'от 6 500 THB',
      },
    ],
  },
  {
    title: 'Hino 300',
    image: '/images/equipment/trucks/hino_300.webp',
    subtitle: t('trucks.equipment.items.hino300.type'),
    description: t('trucks.equipment.items.hino300.description'),
    prices: [
      {
        label: t('trucks.equipment.prices.trip'),
        value: 'от 1 500 THB',
      },
      {
        label: t('trucks.equipment.prices.day'),
        value: 'от 5 500 THB',
      },
    ],
  },
  {
    title: 'Nissan CWA12M',
    image: '/images/equipment/trucks/nissan_cwa12m.webp',
    subtitle: t('trucks.equipment.items.nissan.type'),
    description: t('trucks.equipment.items.nissan.description'),
    prices: [
      {
        label: t('trucks.equipment.prices.trip'),
        value: 'от 2 500 THB',
      },
      {
        label: t('trucks.equipment.prices.day'),
        value: 'от 8 000 THB',
      },
    ],
  },
]));

const includedTitle = computed(() => t('trucks.included.title'));
const includedItems = computed(() => ([
  {
    icon: 'i-heroicons-user',
    title: t('trucks.included.driver.title'),
    description: t('trucks.included.driver.description'),
  },
  {
    icon: 'i-heroicons-wrench-screwdriver',
    title: t('trucks.included.maintenance.title'),
    description: t('trucks.included.maintenance.description'),
  },
  {
    icon: 'i-heroicons-map',
    title: t('trucks.included.routing.title'),
    description: t('trucks.included.routing.description'),
  },
  {
    icon: 'i-heroicons-clock',
    title: t('trucks.included.flexible.title'),
    description: t('trucks.included.flexible.description'),
  },
  {
    icon: 'i-heroicons-truck',
    title: t('trucks.included.combo.title'),
    description: t('trucks.included.combo.description'),
  },
  {
    icon: 'i-heroicons-shield-check',
    title: t('trucks.included.safety.title'),
    description: t('trucks.included.safety.description'),
  },
]));

const faqTitle = computed(() => t('trucks.faq.title'));
const faqItems = computed(() => ([
  {
    question: t('trucks.faq.q1.question'),
    answer: t('trucks.faq.q1.answer'),
  },
  {
    question: t('trucks.faq.q2.question'),
    answer: t('trucks.faq.q2.answer'),
  },
  {
    question: t('trucks.faq.q3.question'),
    answer: t('trucks.faq.q3.answer'),
  },
  {
    question: t('trucks.faq.q4.question'),
    answer: t('trucks.faq.q4.answer'),
  },
  {
    question: t('trucks.faq.q5.question'),
    answer: t('trucks.faq.q5.answer'),
  },
  {
    question: t('trucks.faq.q6.question'),
    answer: t('trucks.faq.q6.answer'),
  },
]));

const examples = computed(() => [
  {
    alt: t('trucks.examples.1'),
    src: '/images/examples/trucks/1.webp',
  },
  {
    alt: t('trucks.examples.2'),
    src: '/images/examples/trucks/2.webp',
  },
  {
    alt: t('trucks.examples.3'),
    src: '/images/examples/trucks/3.webp',
  },
  {
    alt: t('trucks.examples.4'),
    src: '/images/examples/trucks/4.webp',
  },
  {
    alt: t('trucks.examples.5'),
    src: '/images/examples/trucks/5.webp',
  },
  {
    alt: t('trucks.examples.6'),
    src: '/images/examples/trucks/6.webp',
  },
  {
    alt: t('trucks.examples.7'),
    src: '/images/examples/trucks/7.webp',
  },
  {
    alt: t('trucks.examples.8'),
    src: '/images/examples/trucks/8.webp',
  },
]);

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://supermansamui.com/services/trucks#service',
      name: t('trucks.seo.title'),
      description: t('trucks.seo.description'),
      provider: {
        '@id': 'https://supermansamui.com#business',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Ko Samui, Surat Thani, Thailand',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t('trucks.tasks.title'),
        itemListElement: tasksItems.value.map((item) => ({
          '@type': 'Offer',
          name: item.title,
          description: item.description,
          itemOffered: {
            '@type': 'Service',
            name: item.title,
            description: item.description,
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Ko Samui, Surat Thani, Thailand',
            },
          },
        })),
      },
    },
  ],
}));

useHead(() => {
  const title = t('trucks.seo.title');
  const description = t('trucks.seo.description');
  const keywords = t('trucks.seo.keywords');
  const image = 'https://supermansamui.com/uten-truck.webp';

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },

      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },

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
</script>

<i18n lang="json">
{
  "ru": {
    "trucks": {
      "seo": {
        "title": "Аренда грузовиков и самосвалов на Самуи | Вывоз грунта, доставка материалов, перевозка техники",
        "description": "Грузовики и самосвалы на Самуи: вывоз грунта и строительного мусора, доставка песка/щебня/земли, перевозка экскаваторов и оборудования. Свой парк, местные водители, расчет по рейсу или за смену. Быстрый выезд и понятная цена.",
        "keywords": "аренда самосвала самуи, аренда грузовика самуи, вывоз грунта самуи, вывоз строительного мусора самуи, доставка песка самуи, доставка щебня самуи, доставка материалов самуи, перевозка экскаватора самуи, перевозка техники самуи, грузовик с краном самуи"
      },
      "hero": {
        "title": "Грузовики и самосвалы на Самуи",
        "description": "Вывоз грунта и мусора, доставка песка и щебня, перевозка техники.",
        "primary": "Позвонить и получить расчет"
      },
      "intro": "Нужно вывезти грунт, привезти материалы или перевезти технику на Самуи? Сделаем быстро и без сюрпризов. Вы отправляете локацию и фото подъезда - мы подбираем грузовик, оцениваем объем и количество рейсов и даем понятную цену до выезда.",
      "tasks": {
        "title": "Что мы делаем",
        "t1": {
          "title": "Вывоз грунта и строительного мусора",
          "description": "Забираем лишнюю землю после работ, глину, камни и мусор с участка."
        },
        "t2": {
          "title": "Доставка песка, щебня и материалов",
          "description": "Привозим песок, щебень, землю, блоки и материалы на объект или к дому."
        },
        "t3": {
          "title": "Перевозка техники и тяжелых грузов",
          "description": "Перевозим экскаваторы и оборудование на платформе, при необходимости помогаем краном."
        },
        "t4": {
          "title": "Доступ в горы и на узкие дороги",
          "description": "Выбираем машину, которая реально заедет: от компактной до 6-колесной."
        },
        "t5": {
          "title": "Регулярные рейсы склад–объект",
          "description": "Организуем доставку и вывоз по кругу: несколько рейсов или работа сменой."
        },
        "t6": {
          "title": "Перевозка бригады и инструмента",
          "description": "Привозим людей, инструмент и легкие материалы одним рейсом."
        }
      },
      "equipment": {
        "title": "Техника в наличии",
        "note": "Не знаете, что выбрать? Пришлите точку на карте и фото подъезда - подскажем оптимальный вариант.",
        "prices": {
          "trip": "За рейс",
          "day": "За смену"
        },
        "items": {
          "elf": {
            "type": "Легкий самосвал 4×2",
            "description": "Для узких подъездов и небольших объемов. Подходит для вывоза земли и доставки песка/щебня к дому."
          },
          "deva": {
            "type": "Грузовик для бригады и инструмента",
            "description": "Перевозка рабочих, инструмента и легких материалов. Удобно для коротких задач и выездов."
          },
          "ranger": {
            "type": "Грузовик с краном-манипулятором",
            "description": "Доставка тяжелых материалов и оборудования. Кран помогает там, где нет погрузчика."
          },
          "hino300": {
            "type": "6-колесный самосвал",
            "description": "Для стройки и земляных работ: грунт, глина, камни, мусор. Хорошо работает в связке с экскаватором."
          },
          "nissan": {
            "type": "Трал с краном",
            "description": "Перевозка экскаваторов и крупногабарита. Кран - для погрузки и установки тяжелых предметов."
          }
        }
      },
      "packages": {
        "title": "Нужна работа «под ключ» вместе с экскаватором?",
        "text": "Соберем комплект техники под вашу задачу: экскаватор + самосвал + вывоз/завоз. Дадим общий расчет и план работ."
      },
      "included": {
        "title": "Что входит в заказ",
        "driver": {
          "title": "Местный водитель",
          "description": "Знает дороги, подъемы и узкие места Самуи. Аккуратно работает на участке."
        },
        "maintenance": {
          "title": "Готовая техника",
          "description": "Перед выездом проверяем ключевые узлы, чтобы снизить риск простоев."
        },
        "routing": {
          "title": "Помогаем посчитать объем",
          "description": "Подскажем, какая машина нужна и сколько рейсов будет по вашему объему и маршруту."
        },
        "flexible": {
          "title": "Оплата как удобно",
          "description": "Один рейс, несколько рейсов или смена - подберем формат под задачу."
        },
        "combo": {
          "title": "Можно усилить парк",
          "description": "При больших объемах добавим самосвалы, кран или экскаватор, чтобы закончить быстрее."
        },
        "safety": {
          "title": "Аккуратно на объекте",
          "description": "Маневрируем бережно, учитываем стены, заборы и коммуникации."
        }
      },
      "faq": {
        "title": "Вопросы по грузовикам на Самуи",
        "q1": {
          "question": "Как вы считаете стоимость - по рейсу или за время?",
          "answer": "Чаще всего - по рейсу с фиксированной ценой. Для больших объемов предлагаем смену или пакет на весь объем."
        },
        "q2": {
          "question": "Мне нужно быть на месте?",
          "answer": "Желательно на первом рейсе показать подъезд и точку разгрузки. Дальше можем работать сами и присылать фото/видео."
        },
        "q3": {
          "question": "Вы работаете в горах и на узких дорогах?",
          "answer": "Да. Подбираем машину под реальный подъезд, заранее смотрим локацию и фото дороги."
        },
        "q4": {
          "question": "Можно заказать на сегодня или завтра?",
          "answer": "Да, если есть свободная техника. Лучше написать/позвонить заранее, чтобы забронировать время."
        },
        "q5": {
          "question": "Что нужно, чтобы посчитать цену?",
          "answer": "Локация на карте, 2–3 фото подъезда и коротко: что везем/вывозим, примерный объем и сроки."
        },
        "q6": {
          "question": "С кем вы работаете?",
          "answer": "С частными клиентами, подрядчиками и застройщиками. Подстраиваемся под формат объекта."
        }
      },
      "examples": {
        "title": "Галерея",
        "1": "Упаковка мебели и доставка на виллу",
        "2": "Доставка генератора на местное мероприятие",
        "3": "Доставка древесного угля по острову",
        "4": "Перевозка экскаватора на платформе",
        "5": "Переезд в новый дом",
        "6": "Погрузка и разгрузка краном-манипулятором",
        "7": "Экскаватор и самосвал на одном объекте",
        "8": "Перевозка мопедов и мотоциклов"
      }
    }
  },
  "en": {
    "trucks": {
      "seo": {
        "title": "Truck & Dump Truck Rental on Koh Samui | Soil Removal, Material Delivery, Equipment Transport",
        "description": "Truck and dump truck rental on Koh Samui. Soil and construction waste removal, sand and gravel delivery, excavator and equipment transport. Own fleet, local drivers, clear pricing per trip or per day.",
        "keywords": "dump truck rental koh samui, truck rental samui, soil removal samui, construction waste removal samui, sand delivery samui, gravel delivery samui, material delivery samui, excavator transport samui, equipment transport samui, crane truck samui"
      },
      "hero": {
        "title": "Truck & dump truck rental on Koh Samui",
        "description": "Soil and waste removal, material delivery, equipment transport. We select the right truck and quote the price in advance.",
        "primary": "Call for a quote"
      },
      "intro": "Need to remove soil, deliver materials or move equipment on Koh Samui? We handle it fast and clearly. Send your location and access photos - we choose the right truck, estimate volume and trips, and give you a fixed price before the job.",
      "tasks": {
        "title": "Our services",
        "t1": {
          "title": "Soil & construction waste removal",
          "description": "We remove excess soil, clay, rocks and construction debris from your site."
        },
        "t2": {
          "title": "Sand, gravel & material delivery",
          "description": "Delivery of sand, gravel, soil, blocks and building materials to your site or house."
        },
        "t3": {
          "title": "Equipment & heavy load transport",
          "description": "Excavator and machinery transport on flatbeds, with crane assistance if needed."
        },
        "t4": {
          "title": "Mountain & narrow road access",
          "description": "We select trucks that can actually reach your site, from compact to 6-wheel dump trucks."
        },
        "t5": {
          "title": "Regular site–yard trips",
          "description": "Multiple trips or full-day work for continuous delivery and waste removal."
        },
        "t6": {
          "title": "Crew & tool transport",
          "description": "Transport of workers, tools and light materials in one trip."
        }
      },
      "equipment": {
        "title": "Available trucks",
        "note": "Not sure which truck you need? Send us the location and access photos - we’ll advise.",
        "prices": {
          "trip": "Per trip",
          "day": "Per day"
        },
        "items": {
          "elf": {
            "type": "Light dump truck 4×2",
            "description": "For tight access and small volumes. Ideal for soil removal and sand/gravel delivery to houses."
          },
          "deva": {
            "type": "Crew & cargo truck",
            "description": "For transporting workers, tools and light materials."
          },
          "ranger": {
            "type": "Crane truck",
            "description": "For heavy materials and equipment where no forklift is available."
          },
          "hino300": {
            "type": "6-wheel dump truck",
            "description": "Main workhorse for earthworks, soil, rocks and construction waste."
          },
          "nissan": {
            "type": "Flatbed / lowbed with crane",
            "description": "Transport of excavators and oversized loads with crane loading support."
          }
        }
      },
      "packages": {
        "title": "Need a full package with an excavator?",
        "text": "We can provide excavator + dump trucks + soil removal or delivery. One task - one clear quote."
      },
      "included": {
        "title": "What’s included",
        "driver": {
          "title": "Local driver",
          "description": "Experienced with Samui roads, hills and tight access."
        },
        "maintenance": {
          "title": "Ready-to-work trucks",
          "description": "Equipment is checked before each job to avoid downtime."
        },
        "routing": {
          "title": "Volume & trip planning",
          "description": "We help calculate the right truck and number of trips."
        },
        "flexible": {
          "title": "Flexible pricing",
          "description": "Single trip, multiple trips or full-day rate."
        },
        "combo": {
          "title": "Fleet expansion if needed",
          "description": "Additional trucks, crane or excavator for large volumes."
        },
        "safety": {
          "title": "Careful on site",
          "description": "We work safely around buildings, fences and utilities."
        }
      },
      "faq": {
        "title": "Truck rental FAQ",
        "q1": {
          "question": "Do you charge per trip or per time?",
          "answer": "Usually per trip with a fixed price. For large volumes we offer daily or package rates."
        },
        "q2": {
          "question": "Do I need to be on site?",
          "answer": "It’s best for the first trip. After that we can work independently with photo/video updates."
        },
        "q3": {
          "question": "Can you access mountain or narrow roads?",
          "answer": "Yes. We choose the truck based on real access conditions."
        },
        "q4": {
          "question": "Can I book for today or tomorrow?",
          "answer": "Yes, if trucks are available. Contact us as early as possible."
        },
        "q5": {
          "question": "What do you need to give a quote?",
          "answer": "Location pin, access photos and a short job description with approximate volume."
        },
        "q6": {
          "question": "Do you work with private clients?",
          "answer": "Yes. We work with homeowners, contractors and developers."
        }
      },
      "examples": {
        "title": "Gallery",
        "1": "Furniture packing and delivery to a villa",
        "2": "Generator delivery to a local event",
        "3": "Charcoal delivery across the island",
        "4": "Excavator transport on a flatbed",
        "5": "Moving to a new home",
        "6": "Loading and unloading with a crane truck",
        "7": "Excavator and dump truck working on the same site",
        "8": "Motorbike and scooter transport"
      }
    }
  },
  "th": {
    "trucks": {
      "seo": {
        "title": "เช่ารถบรรทุกและรถดั๊มบนเกาะสมุย | ขนดิน ส่งวัสดุ ขนเครื่องจักร",
        "description": "บริการเช่ารถบรรทุกและรถดั๊มบนเกาะสมุย รับขนดินและเศษวัสดุก่อสร้าง ส่งทราย หิน และขนย้ายรถขุดหรือเครื่องจักร มีรถของเราเอง คนขับท้องถิ่น ราคาชัดเจนต่อเที่ยวหรือต่อวัน",
        "keywords": "เช่ารถดั๊ม สมุย, เช่ารถบรรทุก สมุย, ขนดิน สมุย, เก็บขยะก่อสร้าง สมุย, ส่งทราย สมุย, ส่งหิน สมุย, ขนวัสดุก่อสร้าง สมุย, ขนย้ายรถขุด สมุย, รถบรรทุกเครน สมุย"
      },
      "hero": {
        "title": "เช่ารถบรรทุกและรถดั๊มบนเกาะสมุย",
        "description": "ขนดิน ขยะก่อสร้าง ส่งวัสดุ และขนย้ายเครื่องจักร ประเมินงานและราคาให้ล่วงหน้า",
        "primary": "โทรขอราคา"
      },
      "intro": "ต้องการขนดิน ส่งวัสดุ หรือย้ายเครื่องจักรบนเกาะสมุย? เราจัดการให้จบง่ายและชัดเจน ส่งโลเคชันและรูปทางเข้า เราจะเลือกประเภทรถ ประเมินจำนวนเที่ยว และแจ้งราคาก่อนเริ่มงาน",
      "tasks": {
        "title": "บริการของเรา",
        "t1": {
          "title": "ขนดินและเศษวัสดุก่อสร้าง",
          "description": "ขนดินส่วนเกิน หิน และขยะก่อสร้างออกจากพื้นที่"
        },
        "t2": {
          "title": "ส่งทราย หิน และวัสดุก่อสร้าง",
          "description": "ส่งทราย หิน ดิน บล็อก และวัสดุก่อสร้างถึงหน้างานหรือบ้าน"
        },
        "t3": {
          "title": "ขนย้ายเครื่องจักรและของหนัก",
          "description": "ขนรถขุดและเครื่องจักร พร้อมเครนช่วยยกหากจำเป็น"
        },
        "t4": {
          "title": "เข้าพื้นที่แคบและทางเขา",
          "description": "เลือกใช้รถให้เหมาะกับสภาพทางจริง"
        },
        "t5": {
          "title": "วิ่งหลายเที่ยวหรือเหมาทั้งวัน",
          "description": "เหมาะสำหรับงานปริมาณมากหรือไซต์งานต่อเนื่อง"
        },
        "t6": {
          "title": "ขนแรงงานและอุปกรณ์",
          "description": "ขนคน เครื่องมือ และวัสดุเบา ๆ ในเที่ยวเดียว"
        }
      },
      "equipment": {
        "title": "รถที่มีให้บริการ",
        "note": "ไม่แน่ใจว่าต้องใช้รถแบบไหน ส่งโลเคชันและรูปทางเข้า เราช่วยแนะนำให้",
        "prices": {
          "trip": "ต่อเที่ยว",
          "day": "ต่อวัน"
        },
        "items": {
          "elf": {
            "type": "รถดั๊มเล็ก 4×2",
            "description": "เหมาะกับทางแคบและงานปริมาณไม่มาก"
          },
          "deva": {
            "type": "รถขนคนและของเบา",
            "description": "ใช้ขนแรงงาน เครื่องมือ และวัสดุเบา"
          },
          "ranger": {
            "type": "รถบรรทุกพร้อมเครน",
            "description": "ยกและขนของหนักในพื้นที่ไม่มีรถยก"
          },
          "hino300": {
            "type": "รถดั๊ม 6 ล้อ",
            "description": "สำหรับงานดิน หิน และขยะก่อสร้าง"
          },
          "nissan": {
            "type": "รถพื้นเรียบ/เทรลเลอร์พร้อมเครน",
            "description": "ขนย้ายรถขุดและของขนาดใหญ่"
          }
        }
      },
      "packages": {
        "title": "ต้องการแพ็กเกจพร้อมรถขุดไหม?",
        "text": "เราจัดให้ครบทั้งรถขุด รถดั๊ม และงานขนดิน แจ้งงานครั้งเดียว ได้ราคาก้อนเดียว"
      },
      "included": {
        "title": "สิ่งที่รวมอยู่ในบริการ",
        "driver": {
          "title": "คนขับท้องถิ่น",
          "description": "ชำนาญเส้นทาง ทางชัน และพื้นที่แคบของสมุย"
        },
        "maintenance": {
          "title": "รถพร้อมใช้งาน",
          "description": "ตรวจสภาพรถก่อนออกงานทุกครั้ง"
        },
        "routing": {
          "title": "ช่วยคำนวณปริมาณงาน",
          "description": "แนะนำประเภทรถและจำนวนเที่ยวที่เหมาะสม"
        },
        "flexible": {
          "title": "คิดราคาได้หลายแบบ",
          "description": "ต่อเที่ยว หลายเที่ยว หรือเหมาทั้งวัน"
        },
        "combo": {
          "title": "เพิ่มรถได้ตามงาน",
          "description": "เสริมรถ เครน หรือรถขุดสำหรับงานใหญ่"
        },
        "safety": {
          "title": "ทำงานอย่างระมัดระวัง",
          "description": "หลีกเลี่ยงการกระทบสิ่งปลูกสร้างและสาธารณูปโภค"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "คิดราคาอย่างไร?",
          "answer": "ส่วนใหญ่คิดเป็นเที่ยว ราคาชัดเจน งานใหญ่สามารถเหมาทั้งวันหรือเหมางานได้"
        },
        "q2": {
          "question": "ต้องอยู่หน้างานไหม?",
          "answer": "แนะนำให้อยู่เที่ยวแรก หลังจากนั้นเราส่งรูปและวิดีโออัปเดตได้"
        },
        "q3": {
          "question": "เข้าทางเขาและทางแคบได้ไหม?",
          "answer": "ได้ เราเลือกใช้รถตามสภาพทางจริง"
        },
        "q4": {
          "question": "เรียกรถด่วนได้ไหม?",
          "answer": "ได้หากมีรถว่าง แนะนำให้ติดต่อก่อนล่วงหน้า"
        },
        "q5": {
          "question": "ต้องส่งข้อมูลอะไรเพื่อขอราคา?",
          "answer": "โลเคชัน รูปทางเข้า และอธิบายงานคร่าว ๆ"
        },
        "q6": {
          "question": "รับงานลูกค้าทั่วไปไหม?",
          "answer": "รับทั้งเจ้าของบ้าน ผู้รับเหมา และโครงการ"
        }
      },
      "examples": {
        "title": "แกลเลอรี",
        "1": "แพ็กและขนย้ายเฟอร์นิเจอร์ไปยังวิลล่า",
        "2": "ส่งเครื่องปั่นไฟไปงานอีเวนต์ในพื้นที่",
        "3": "ขนถ่านไม้ทั่วเกาะ",
        "4": "ขนย้ายรถขุดบนรถพื้นเรียบ",
        "5": "ขนย้ายเข้าบ้านใหม่",
        "6": "ยกของขึ้น–ลงด้วยรถเครน",
        "7": "รถขุดและรถดั๊มทำงานในไซต์เดียวกัน",
        "8": "ขนย้ายมอเตอร์ไซค์และสกู๊ตเตอร์"
      }
    }
  }
}
</i18n>

<template>
  <UPage>
    <ServiceHero
      :title="heroTitle"
      :description="heroDescription"
      :phone="CONTACT_PHONE"
      :buttonLabel="t('trucks.hero.primary')"
      imageSrc="/truck.webp"
    />

    <ServiceIntro :text="t('trucks.intro')" />

    <ServiceIncluded
      :title="tasksTitle"
      :items="tasksItems"
    />

    <ServiceEquipment
      :title="equipmentTitle"
      :note="equipmentNote"
      :items="equipmentItems"
    />

    <UAlert
      :title="t('trucks.packages.title')"
      :description="t('trucks.packages.text')"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-hard-hat"
    />

    <ServiceIncluded
      :title="includedTitle"
      :items="includedItems"
    />

    <CoreFAQ
      :title="faqTitle"
      :items="faqItems"
    />

    <ServiceGallery
      :title="t('trucks.examples.title')"
      :items="examples"
    />

    <CoreContacts />
  </UPage>
</template>
