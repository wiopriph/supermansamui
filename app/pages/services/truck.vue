<script setup lang="ts">
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
        value: '800 THB',
      },
      {
        label: t('trucks.equipment.prices.day'),
        value: '3 500 THB',
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
        value: '1 500 THB',
      },
      {
        label: t('trucks.equipment.prices.day'),
        value: '5 500 THB',
      },
    ],
  },
  {
    title: 'Hino Super FM18',
    image: '/images/equipment/trucks/hino_super_fm18.webp',
    subtitle: t('trucks.equipment.items.fm18.type'),
    description: t('trucks.equipment.items.fm18.description'),
    prices: [
      {
        label: t('trucks.equipment.prices.trip'),
        value: '3 000 THB',
      },
      {
        label: t('trucks.equipment.prices.day'),
        value: '10 000 THB',
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
        value: '2 500 THB',
      },
      {
        label: t('trucks.equipment.prices.day'),
        value: '8 000 THB',
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
        value: '1 800 THB',
      },
      {
        label: t('trucks.equipment.prices.day'),
        value: '6 500 THB',
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
        value: '700 THB',
      },
      {
        label: t('trucks.equipment.prices.day'),
        value: '3 000 THB',
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
    icon: 'i-heroicons-map',
    title: t('trucks.included.routing.title'),
    description: t('trucks.included.routing.description'),
  },
  {
    icon: 'i-heroicons-clock',
    title: t('trucks.included.flexible.title'),
    description: t('trucks.included.flexible.description'),
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

const photos = computed(() => {
  const order = [
    'our-vintage-big-truck',
    'transportation-of-generator',
    'loading-of-soil',
    'delivery-of-charcoal',
    'loading-tuktuk-with-crane',
    'scooter-transportation',
    'soil-delivery',
    'transportation-of-excavator',
    'transportation-of-household-appliances',
    'transportation-of-special-equipment',
  ];

  return order.map((key) => ({
    title: t(`trucks.photos.${key}.title`),
    alt: t(`trucks.photos.${key}.alt`),
    src: `/images/services/trucks/photos/${key}.webp`,
  }));
});

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
  const image = 'https://supermansamui.com/images/services/trucks/hero.webp';

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
        "title": "Грузовики и самосвалы на Самуи для стройки и доставки",
        "description": "Вывозим грунт и мусор, привозим материалы и перевозим технику. Приезжаем вовремя и заранее говорим точную цену."
      },
      "intro": "Нужно вывезти грунт, привезти материалы или перевезти технику на Самуи? Сделаем быстро и без сюрпризов. Вы отправляете локацию и фото подъезда - мы подбираем грузовик, оцениваем объем и количество рейсов и даем понятную цену до выезда.",
      "tasks": {
        "title": "Что мы делаем",
        "t1": {
          "title": "Вывоз грунта и мусора",
          "description": "Вывозим землю после работ, глину, камни и строительный мусор с участка."
        },
        "t2": {
          "title": "Доставка материалов",
          "description": "Привозим песок, щебень, грунт и другие материалы прямо на объект."
        },
        "t3": {
          "title": "Перевозка техники",
          "description": "Перевозим экскаваторы и оборудование, при необходимости используем кран."
        }
      },
      "equipment": {
        "title": "Техника в наличии",
        "note": "Не знаете, что выбрать? Пришлите точку на карте и фото подъезда - подскажем оптимальный вариант и не дадим переплатить.",
        "prices": {
          "trip": "За рейс",
          "day": "За смену"
        },
        "items": {
          "elf": {
            "type": "Легкий самосвал 4×2",
            "description": "Для узких подъездов и небольших объемов. Подходит для вывоза грунта, доставки песка и щебня, а также для переездов - перевозка мебели, техники и вещей."
          },
          "deva": {
            "type": "Грузовик для бригады и инструмента",
            "description": "Перевозка рабочих, инструмента и легких материалов. Удобно для коротких задач и выездных работ."
          },
          "ranger": {
            "type": "Грузовик с краном-манипулятором",
            "description": "Для тяжелых материалов и оборудования. Кран позволяет загружать и устанавливать без погрузчика."
          },
          "hino300": {
            "type": "6-колесный самосвал",
            "description": "Основная машина для стройки: грунт, глина, камни и мусор. Оптимален для работы с экскаватором."
          },
          "nissan": {
            "type": "Трал с краном",
            "description": "Перевозка экскаваторов и крупной техники. Кран - для погрузки и установки тяжелых объектов."
          },
          "fm18": {
            "type": "10-колёсный самосвал",
            "description": "Для больших объемов и тяжелых материалов. Делает работу быстрее за счёт меньшего количества рейсов."
          }
        }
      },
      "packages": {
        "title": "Нужен экскаватор вместе с грузовиками?",
        "text": "Соберём технику под задачу: экскаватор, самосвалы и логистика. Один подрядчик - один понятный расчёт."
      },
      "included": {
        "title": "Почему с нами удобно работать",
        "driver": {
          "title": "Местные водители с опытом",
          "description": "Хорошо знают дороги Самуи, уклоны и сложные подъезды. Заезжают туда, где другие разворачиваются."
        },
        "routing": {
          "title": "Помогаем рассчитать объем",
          "description": "Подскажем, какая техника подойдёт и сколько рейсов реально потребуется."
        },
        "flexible": {
          "title": "Гибкая оплата",
          "description": "Можно за рейс, за смену или за весь объем - подберём удобный вариант."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "Как рассчитывается стоимость?",
          "answer": "Обычно считаем за рейс с фиксированной ценой. Для больших объёмов - за смену или под ключ."
        },
        "q2": {
          "question": "Нужно ли присутствовать на объекте?",
          "answer": "Желательно на первом рейсе, чтобы показать подъезд и задачу. Дальше можем работать самостоятельно."
        },
        "q3": {
          "question": "Работаете на сложных участках и узких дорогах?",
          "answer": "Да. Сначала оцениваем подъезд и подбираем подходящую технику под реальные условия."
        },
        "q4": {
          "question": "Можно заказать срочно?",
          "answer": "Да, если техника свободна. Лучше написать заранее, чтобы зафиксировать время."
        },
        "q5": {
          "question": "Что нужно для расчёта?",
          "answer": "Локация на карте, фото подъезда и короткое описание задачи и объёма."
        },
        "q6": {
          "question": "С кем вы работаете?",
          "answer": "С частными клиентами, подрядчиками и застройщиками."
        }
      },
      "photos": {
        "title": "Галерея",
        "delivery-of-charcoal": {
          "title": "Доставка древесного угля",
          "alt": "Доставка древесного угля грузовиком на склад"
        },
        "loading-of-soil": {
          "title": "Погрузка грунта в грузовик",
          "alt": "Погрузка грунта и сыпучих материалов в грузовик для вывоза"
        },
        "loading-tuktuk-with-crane": {
          "title": "Погрузка тук-тука краном на грузовик",
          "alt": "Погрузка тук-тука с помощью крана на грузовик для безопасной перевозки"
        },
        "our-vintage-big-truck": {
          "title": "Наш большой грузовик для перевозки грузов",
          "alt": "Большой грузовик для перевозки строительных материалов, техники и различных грузов"
        },
        "scooter-transportation": {
          "title": "Перевозка скутера на грузовике",
          "alt": "Перевозка скутера грузовиком по острову с аккуратной погрузкой и доставкой"
        },
        "soil-delivery": {
          "title": "Доставка грунта и сыпучих материалов",
          "alt": "Доставка грунта, земли и других сыпучих материалов грузовиком на строительный участок"
        },
        "transportation-of-excavator": {
          "title": "Перевозка экскаватора на трале",
          "alt": "Перевозка экскаватора на трале между строительными объектами"
        },
        "transportation-of-generator": {
          "title": "Перевозка генератора на стройплощадку",
          "alt": "Транспортировка генератора грузовиком на временную рабочую площадку"
        },
        "transportation-of-household-appliances": {
          "title": "Перевозка бытовой техники и крупногабаритных вещей",
          "alt": "Перевозка холодильников, стиральных машин и другой бытовой техники грузовиком"
        },
        "transportation-of-special-equipment": {
          "title": "Перевозка спецтехники",
          "alt": "Транспортировка спецтехники, строительного оборудования и тяжёлых грузов на объект"
        }
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
        "title": "Truck & dump truck services on Koh Samui",
        "description": "Soil and waste removal, material delivery and equipment transport. On time arrival and clear pricing before the job."
      },
      "intro": "Need to remove soil, deliver materials or move equipment on Koh Samui? We handle it fast and clearly. Send your location and access photos - we choose the right truck, estimate volume and trips, and give you a fixed price before the job.",
      "tasks": {
        "title": "What we do",
        "t1": {
          "title": "Soil & waste removal",
          "description": "We remove excess soil, clay, rocks and construction waste from your site quickly and cleanly."
        },
        "t2": {
          "title": "Material delivery",
          "description": "We deliver sand, gravel, soil and other building materials directly to your site."
        },
        "t3": {
          "title": "Equipment transport",
          "description": "We transport excavators and heavy equipment safely, with crane support when needed."
        }
      },
      "equipment": {
        "title": "Available trucks",
        "note": "Not sure what you need? Send your location and access photos - we’ll recommend the best option and help you avoid overpaying.",
        "prices": {
          "trip": "Per trip",
          "day": "Per day"
        },
        "items": {
          "elf": {
            "type": "Light dump truck 4×2",
            "description": "Best for tight access and small jobs. Suitable for soil removal, sand/gravel delivery, and also for moving - furniture, appliances and personal items."
          },
          "deva": {
            "type": "Crew & utility truck",
            "description": "Transport for workers, tools and light materials. Good for small jobs and short-distance tasks."
          },
          "ranger": {
            "type": "Crane truck",
            "description": "For heavy materials and equipment. The crane allows loading and placement without a forklift."
          },
          "hino300": {
            "type": "6-wheel dump truck",
            "description": "Main workhorse for construction: soil, rocks and debris. Works best with excavators."
          },
          "nissan": {
            "type": "Lowbed with crane",
            "description": "For transporting excavators and large equipment with crane loading support."
          },
          "fm18": {
            "type": "10-wheel dump truck",
            "description": "For large volumes and heavy loads. Fewer trips, faster results."
          }
        }
      },
      "packages": {
        "title": "Need a full package with an excavator?",
        "text": "We can provide excavator + dump trucks + soil removal or delivery. One task - one clear quote."
      },
      "included": {
        "title": "Why it’s easy to work with us",
        "driver": {
          "title": "Experienced local drivers",
          "description": "They know Samui roads, slopes and tight access points. They can get where others can’t."
        },
        "routing": {
          "title": "We help calculate the job",
          "description": "We advise the right truck and estimate the number of trips for your task."
        },
        "flexible": {
          "title": "Flexible pricing",
          "description": "Per trip, per day or full job - we choose what works best for you."
        }
      },
      "faq": {
        "title": "Frequently asked questions",
        "q1": {
          "question": "How is the price calculated?",
          "answer": "Usually per trip with a fixed price. For larger jobs - daily rate or full project."
        },
        "q2": {
          "question": "Do I need to be on site?",
          "answer": "Recommended for the first trip to show access and details. After that we can work independently."
        },
        "q3": {
          "question": "Can you work on difficult or narrow access?",
          "answer": "Yes. We check access first and choose the right truck for the conditions."
        },
        "q4": {
          "question": "Can I book urgently?",
          "answer": "Yes, if trucks are available. Better to contact us in advance."
        },
        "q5": {
          "question": "What do you need for a quote?",
          "answer": "Location pin, access photos and a short description of the job and volume."
        },
        "q6": {
          "question": "Who do you work with?",
          "answer": "Homeowners, contractors and developers."
        }
      },
      "photos": {
        "title": "Gallery",
        "delivery-of-charcoal": {
          "title": "Charcoal delivery",
          "alt": "Truck delivery of charcoal to warehouse"
        },
        "loading-of-soil": {
          "title": "Loading soil into truck",
          "alt": "Loading soil and bulk materials into a truck for removal"
        },
        "loading-tuktuk-with-crane": {
          "title": "Loading a tuk tuk onto a truck with crane",
          "alt": "Using a crane to load a tuk tuk onto a truck for safe transport"
        },
        "our-vintage-big-truck": {
          "title": "Our large truck for cargo transportation",
          "alt": "Large truck for transporting construction materials, equipment, and various cargo"
        },
        "scooter-transportation": {
          "title": "Scooter transportation by truck",
          "alt": "Transporting a scooter by truck with careful loading and delivery"
        },
        "soil-delivery": {
          "title": "Soil and bulk material delivery",
          "alt": "Truck delivery of soil, dirt, and other bulk materials to construction site"
        },
        "transportation-of-excavator": {
          "title": "Excavator transportation by trailer",
          "alt": "Transporting an excavator by trailer between construction sites"
        },
        "transportation-of-generator": {
          "title": "Generator transportation to construction site",
          "alt": "Transporting a generator by truck to a temporary work site"
        },
        "transportation-of-household-appliances": {
          "title": "Transportation of household appliances and large items",
          "alt": "Truck transportation of refrigerators, washing machines, and other appliances"
        },
        "transportation-of-special-equipment": {
          "title": "Transportation of special equipment",
          "alt": "Transporting special equipment, construction machinery, and heavy cargo to site"
        }
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
        "title": "บริการรถบรรทุกและรถดั๊มบนเกาะสมุย",
        "description": "ขนดิน ขยะก่อสร้าง ส่งวัสดุ และขนย้ายเครื่องจักร ตรงเวลา และแจ้งราคาชัดเจนก่อนเริ่มงาน"
      },
      "intro": "ต้องการขนดิน ส่งวัสดุ หรือย้ายเครื่องจักรบนเกาะสมุย? เราจัดการให้จบง่ายและชัดเจน ส่งโลเคชันและรูปทางเข้า เราจะเลือกประเภทรถ ประเมินจำนวนเที่ยว และแจ้งราคาก่อนเริ่มงาน",
      "tasks": {
        "title": "บริการของเรา",
        "t1": {
          "title": "ขนดินและขยะออกจากพื้นที่",
          "description": "ขนดินส่วนเกิน ดินเหนียว หิน และเศษวัสดุก่อสร้างออกจากพื้นที่อย่างรวดเร็วและเรียบร้อย"
        },
        "t2": {
          "title": "ส่งวัสดุก่อสร้าง",
          "description": "จัดส่งทราย หิน ดิน และวัสดุก่อสร้างอื่น ๆ ถึงหน้างานโดยตรง"
        },
        "t3": {
          "title": "ขนย้ายเครื่องจักร",
          "description": "ขนย้ายรถขุดและเครื่องจักรหนักอย่างปลอดภัย พร้อมเครนช่วยยกเมื่อจำเป็น"
        }
      },
      "equipment": {
        "title": "รถที่มีให้บริการ",
        "note": "ไม่แน่ใจว่าใช้รถแบบไหน? ส่งโลเคชันและรูปทางเข้า เราช่วยแนะนำให้และช่วยประหยัดค่าใช้จ่าย",
        "prices": {
          "trip": "ต่อเที่ยว",
          "day": "ต่อวัน"
        },
        "items": {
          "elf": {
            "type": "รถดั๊มเล็ก 4×2",
            "description": "เหมาะกับทางแคบและงานปริมาณน้อย ใช้ขนดิน ส่งทราย/หิน และยังเหมาะสำหรับย้ายบ้าน เช่น ขนเฟอร์นิเจอร์และของใช้"
          },
          "deva": {
            "type": "รถขนคนและของเบา",
            "description": "ใช้ขนแรงงาน เครื่องมือ และวัสดุเบา เหมาะกับงานเล็กและระยะใกล้"
          },
          "ranger": {
            "type": "รถบรรทุกพร้อมเครน",
            "description": "สำหรับยกและขนของหนัก โดยไม่ต้องใช้รถยกเพิ่มเติม"
          },
          "hino300": {
            "type": "รถดั๊ม 6 ล้อ",
            "description": "รถหลักสำหรับงานก่อสร้าง ขนดิน หิน และเศษวัสดุ ทำงานร่วมกับรถขุดได้ดี"
          },
          "nissan": {
            "type": "รถเทรลเลอร์พร้อมเครน",
            "description": "ใช้ขนรถขุดและเครื่องจักรขนาดใหญ่ พร้อมเครนช่วยยก"
          },
          "fm18": {
            "type": "รถดั๊ม 10 ล้อ",
            "description": "สำหรับงานปริมาณมาก ขนของหนักได้เร็วขึ้นด้วยจำนวนเที่ยวที่น้อยลง"
          }
        }
      },
      "packages": {
        "title": "ต้องการแพ็กเกจพร้อมรถขุดไหม?",
        "text": "เราจัดให้ครบทั้งรถขุด รถดั๊ม และงานขนดิน แจ้งงานครั้งเดียว ได้ราคาก้อนเดียว"
      },
      "included": {
        "title": "ทำไมลูกค้าถึงเลือกเรา",
        "driver": {
          "title": "คนขับท้องถิ่นมีประสบการณ์",
          "description": "รู้จักเส้นทาง ทางชัน และทางแคบในสมุย เข้าได้ในจุดที่หลายคนเข้าไม่ได้"
        },
        "routing": {
          "title": "ช่วยคำนวณงานให้",
          "description": "แนะนำประเภทรถและจำนวนเที่ยวที่เหมาะกับงานของคุณ"
        },
        "flexible": {
          "title": "รูปแบบราคายืดหยุ่น",
          "description": "คิดราคาต่อเที่ยว ต่อวัน หรือเหมางานตามความเหมาะสม"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "คิดราคายังไง?",
          "answer": "ส่วนใหญ่คิดเป็นต่อเที่ยว ราคาชัดเจน งานใหญ่สามารถคิดเป็นรายวันหรือเหมางานได้"
        },
        "q2": {
          "question": "ต้องอยู่หน้างานไหม?",
          "answer": "แนะนำให้มีในเที่ยวแรก หลังจากนั้นเราทำงานต่อได้เอง"
        },
        "q3": {
          "question": "ทำงานในพื้นที่ยากหรือทางแคบได้ไหม?",
          "answer": "ได้ เราดูทางเข้าและเลือกใช้รถให้เหมาะกับหน้างาน"
        },
        "q4": {
          "question": "สั่งงานด่วนได้ไหม?",
          "answer": "ได้ ถ้ามีรถว่าง แนะนำให้ติดต่อก่อนล่วงหน้า"
        },
        "q5": {
          "question": "ต้องส่งอะไรเพื่อขอราคา?",
          "answer": "โลเคชัน รูปทางเข้า และรายละเอียดงานคร่าว ๆ"
        },
        "q6": {
          "question": "รับงานลูกค้ากลุ่มไหน?",
          "answer": "ทั้งเจ้าของบ้าน ผู้รับเหมา และโครงการ"
        }
      },
      "photos": {
        "title": "แกลเลอรี",
        "delivery-of-charcoal": {
          "title": "บริการขนส่งถ่าน",
          "alt": "ขนส่งถ่านด้วยรถบรรทุกไปยังคลังสินค้า"
        },
        "loading-of-soil": {
          "title": "ตักดินขึ้นรถบรรทุก",
          "alt": "ตักดินและวัสดุเทกองขึ้นรถบรรทุกเพื่อขนย้าย"
        },
        "loading-tuktuk-with-crane": {
          "title": "ยกรถตุ๊กตุ๊กขึ้นรถบรรทุกด้วยเครน",
          "alt": "ใช้เครนยกรถตุ๊กตุ๊กขึ้นรถบรรทุกเพื่อการขนส่งอย่างปลอดภัย"
        },
        "our-vintage-big-truck": {
          "title": "รถบรรทุกขนาดใหญ่ของเราสำหรับขนส่ง",
          "alt": "รถบรรทุกขนาดใหญ่สำหรับขนส่งวัสดุก่อสร้าง เครื่องจักร และสินค้าต่าง ๆ"
        },
        "scooter-transportation": {
          "title": "บริการขนส่งสกู๊ตเตอร์ด้วยรถบรรทุก",
          "alt": "ขนส่งสกู๊ตเตอร์ด้วยรถบรรทุก พร้อมการยกและส่งมอบอย่างระมัดระวัง"
        },
        "soil-delivery": {
          "title": "บริการส่งดินและวัสดุเทกอง",
          "alt": "ขนส่งดิน ดินถม และวัสดุเทกองอื่น ๆ ไปยังหน้างานก่อสร้าง"
        },
        "transportation-of-excavator": {
          "title": "ขนย้ายรถขุดด้วยเทรลเลอร์",
          "alt": "ขนส่งรถขุดด้วยเทรลเลอร์ระหว่างหน้างานก่อสร้าง"
        },
        "transportation-of-generator": {
          "title": "ขนส่งเครื่องปั่นไฟไปยังหน้างาน",
          "alt": "ขนย้ายเครื่องปั่นไฟด้วยรถบรรทุกไปยังไซต์งานชั่วคราว"
        },
        "transportation-of-household-appliances": {
          "title": "ขนส่งเครื่องใช้ไฟฟ้าและของชิ้นใหญ่",
          "alt": "ขนส่งตู้เย็น เครื่องซักผ้า และเครื่องใช้ไฟฟ้าอื่น ๆ ด้วยรถบรรทุก"
        },
        "transportation-of-special-equipment": {
          "title": "ขนส่งเครื่องจักรและอุปกรณ์พิเศษ",
          "alt": "ขนย้ายเครื่องจักร อุปกรณ์ก่อสร้าง และของหนักไปยังหน้างาน"
        }
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
      imageSrc="/images/services/trucks/hero.webp"
      page="services/truck"
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
      page="services/truck"
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

    <CoreContactsMini
      page="services/truck"
      location="content"
    />

    <ServiceGallery
      :title="t('trucks.photos.title')"
      :items="photos"
    />

    <CoreFAQ
      :title="faqTitle"
      :items="faqItems"
    />

    <CoreContacts
      page="services/truck"
      location="bottom"
    />
  </UPage>
</template>
