<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const heroTitle = computed(() => t('drainage.hero.title'));
const heroDescription = computed(() => t('drainage.hero.description'));

const tasksItems = computed(() => [
  {
    icon: 'i-lucide-waves',
    title: t('drainage.tasks.t1.title'),
    description: t('drainage.tasks.t1.description'),
  },
  {
    icon: 'i-lucide-shovel',
    title: t('drainage.tasks.t2.title'),
    description: t('drainage.tasks.t2.description'),
  },
  {
    icon: 'i-lucide-droplet',
    title: t('drainage.tasks.t3.title'),
    description: t('drainage.tasks.t3.description'),
  },
  {
    icon: 'i-lucide-arrow-down-up',
    title: t('drainage.tasks.t4.title'),
    description: t('drainage.tasks.t4.description'),
  },
  {
    icon: 'i-lucide-mountain',
    title: t('drainage.tasks.t5.title'),
    description: t('drainage.tasks.t5.description'),
  },
  {
    icon: 'i-lucide-hard-hat',
    title: t('drainage.tasks.t6.title'),
    description: t('drainage.tasks.t6.description'),
  },
]);

const includedItems = computed(() => [
  {
    icon: 'i-heroicons-cloud',
    title: t('drainage.included.rain.title'),
    description: t('drainage.included.rain.description'),
  },
  {
    icon: 'i-heroicons-home',
    title: t('drainage.included.foundation.title'),
    description: t('drainage.included.foundation.description'),
  },
  {
    icon: 'i-heroicons-map',
    title: t('drainage.included.levels.title'),
    description: t('drainage.included.levels.description'),
  },
]);

const processItems = computed(() => [
  {
    icon: 'i-lucide-map-pin',
    title: t('drainage.process.p1.title'),
    description: t('drainage.process.p1.description'),
  },
  {
    icon: 'i-lucide-ruler',
    title: t('drainage.process.p2.title'),
    description: t('drainage.process.p2.description'),
  },
  {
    icon: 'i-lucide-shovel',
    title: t('drainage.process.p3.title'),
    description: t('drainage.process.p3.description'),
  },
  {
    icon: 'i-lucide-check-circle',
    title: t('drainage.process.p4.title'),
    description: t('drainage.process.p4.description'),
  },
]);

const relatedServices = computed(() => [
  {
    icon: 'i-lucide-land-plot',
    title: t('drainage.related.earthworks.title'),
    description: t('drainage.related.earthworks.description'),
    to: localePath({ name: 'services-earthworks' }),
  },
  {
    icon: 'i-lucide-ruler',
    title: t('drainage.related.leveling.title'),
    description: t('drainage.related.leveling.description'),
    to: localePath({ name: 'services-land-leveling' }),
  },
  {
    icon: 'i-lucide-truck',
    title: t('drainage.related.truck.title'),
    description: t('drainage.related.truck.description'),
    to: localePath({ name: 'services-truck' }),
  },
]);

const faqItems = computed(() => [
  { question: t('drainage.faq.q1.question'), answer: t('drainage.faq.q1.answer') },
  { question: t('drainage.faq.q2.question'), answer: t('drainage.faq.q2.answer') },
  { question: t('drainage.faq.q3.question'), answer: t('drainage.faq.q3.answer') },
  { question: t('drainage.faq.q4.question'), answer: t('drainage.faq.q4.answer') },
  { question: t('drainage.faq.q5.question'), answer: t('drainage.faq.q5.answer') },
  { question: t('drainage.faq.q6.question'), answer: t('drainage.faq.q6.answer') },
]);

const photos = computed(() => {
  const order = [
    'water-runoff-channel',
    'drainage-trench-excavation',
    'drainage-after-backfilling',
    'pipe-under-access-road',
    'wet-land-drainage',
    'preparing-the-access-road',
  ];

  return order.map((key) => ({
    title: t(`drainage.photos.${key}.title`),
    alt: t(`drainage.photos.${key}.alt`),
    src: `/images/services/drainage/photos/${key}.webp`,
  }));
});

const seoBlock = computed(() => ({
  title: t('drainage.seoBlock.title'),
  paragraphs: [
    t('drainage.seoBlock.p1'),
    t('drainage.seoBlock.p2'),
    t('drainage.seoBlock.p3'),
  ],
}));

const serviceTypes = computed(() => [
  t('drainage.schema.serviceTypes.drainage'),
  t('drainage.schema.serviceTypes.trenches'),
  t('drainage.schema.serviceTypes.pipes'),
  t('drainage.schema.serviceTypes.runoff'),
  t('drainage.schema.serviceTypes.slopeCorrection'),
]);

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://supermansamui.com/services/drainage#service',
      name: t('drainage.schema.name'),
      description: t('drainage.seo.description'),
      provider: { '@id': 'https://supermansamui.com#business' },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Koh Samui, Surat Thani, Thailand',
      },
      serviceType: serviceTypes.value,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t('drainage.tasks.title'),
        itemListElement: tasksItems.value.map((item) => ({
          '@type': 'Offer',
          name: item.title,
          description: item.description,
          itemOffered: {
            '@type': 'Service',
            name: item.title,
            description: item.description,
            areaServed: 'Koh Samui',
          },
        })),
      },
    },
  ],
}));

useHead(() => {
  const title = t('drainage.seo.title');
  const description = t('drainage.seo.description');
  const keywords = t('drainage.seo.keywords');
  const image = 'https://supermansamui.com/images/services/drainage/hero.webp';

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
    "drainage": {
      "schema": {
        "name": "Дренаж участка на Самуи",
        "serviceTypes": {
          "drainage": "Дренаж участка",
          "trenches": "Дренажные траншеи",
          "pipes": "Укладка труб",
          "runoff": "Отвод воды",
          "slopeCorrection": "Коррекция уклонов"
        }
      },
      "seo": {
        "title": "Дренаж участка на Самуи | Отвод воды, траншеи и трубы",
        "description": "Дренаж участка на Самуи: отвод воды, дренажные канавы, траншеи, трубы, уклоны и подготовка влажных участков под строительство.",
        "keywords": "дренаж самуи, дренаж участка самуи, отвод воды самуи, дренажные работы самуи, траншеи самуи, трубы дренаж самуи, земляные работы самуи"
      },
      "hero": {
        "title": "Дренаж участка на Самуи",
        "description": "Отвод воды, дренажные траншеи, трубы и уклоны для влажных и низких участков."
      },
      "intro": "Делаем дренаж и отвод воды на участках под дома, виллы, дороги и строительные проекты на Самуи. Помогаем убрать стоячую воду, направить поток, сделать канавы, траншеи, трубы и правильные уклоны. Подбираем решение под реальный участок: рельеф, грунт, уровень воды, сезон дождей и место, куда можно безопасно отвести воду.",
      "tasks": {
        "title": "Что входит в дренажные работы",
        "t1": {
          "title": "Отвод стоячей воды",
          "description": "Помогаем убрать воду с низких и влажных участков, где после дождей образуются лужи."
        },
        "t2": {
          "title": "Дренажные траншеи",
          "description": "Копаем канавы и траншеи для направления воды в нужную сторону."
        },
        "t3": {
          "title": "Укладка труб",
          "description": "Устанавливаем трубы под дорогами, въездами и участками, где воду нужно провести скрыто."
        },
        "t4": {
          "title": "Формирование уклонов",
          "description": "Корректируем уклоны земли, чтобы вода не стояла возле дома, дороги или рабочей зоны."
        },
        "t5": {
          "title": "Подготовка влажных участков",
          "description": "Готовим низкие и мокрые участки к дальнейшей отсыпке, выравниванию или строительству."
        },
        "t6": {
          "title": "Дренаж перед строительством",
          "description": "Планируем отвод воды до начала стройки, чтобы избежать проблем с фундаментом и подъездом."
        }
      },
      "included": {
        "title": "Почему дренаж важен",
        "rain": {
          "title": "Самуи - остров с сильными дождями",
          "description": "Если воду не направить, она быстро размывает грунт, дорогу и рабочую площадку."
        },
        "foundation": {
          "title": "Защита будущего дома",
          "description": "Вода рядом с фундаментом может создавать просадки, влажность и проблемы со строительством."
        },
        "levels": {
          "title": "Дренаж связан с уровнями",
          "description": "Хороший дренаж работает вместе с уклонами, отсыпкой и выравниванием участка."
        }
      },
      "seoBlock": {
        "title": "Отвод воды перед строительством",
        "p1": "На Самуи вода - одна из главных проблем при подготовке участка. Во время дождей низкие места быстро заливает, грунт размывает, а подъездная дорога может стать непроходимой для техники.",
        "p2": "Дренажные работы помогают заранее направить воду: сделать канавы, траншеи, трубы под дорогой, правильные уклоны и линии отвода. Это особенно важно перед отсыпкой, выравниванием, строительством дома или виллы.",
        "p3": "Перед расчётом мы смотрим, откуда приходит вода, куда её можно отвести, какой грунт на участке и как техника сможет работать без риска застрять."
      },
      "process": {
        "title": "Как проходит работа",
        "p1": {
          "title": "Оцениваем воду и рельеф",
          "description": "Смотрим, где стоит вода, откуда она приходит, куда может уходить и какой доступ для техники."
        },
        "p2": {
          "title": "Планируем отвод",
          "description": "Определяем траншеи, канавы, трубы, уклоны и направление движения воды."
        },
        "p3": {
          "title": "Копаем и укладываем",
          "description": "Делаем траншеи, формируем канавы, укладываем трубы и корректируем уровни."
        },
        "p4": {
          "title": "Готовим участок дальше",
          "description": "После дренажа участок можно отсыпать, выравнивать или готовить под строительство."
        }
      },
      "pricing": {
        "title": "Быстрый расчёт по дренажу",
        "text": "Цена зависит от площади, объёма воды, глубины траншей, труб, доступа техники, грунта и необходимости отсыпки. Для расчёта отправьте локацию, фото участка после дождя и короткое описание проблемы."
      },
      "cta": {
        "title": "Отправьте фото участка после дождя",
        "text": "Лучше всего оценивать дренаж по реальной воде. Пришлите локацию, фото мокрых зон и место, куда потенциально можно отвести воду."
      },
      "related": {
        "title": "Связанные услуги",
        "earthworks": {
          "title": "Земляные работы",
          "description": "Если нужен полный комплекс: дренаж, отсыпка, выравнивание, техника и вывоз."
        },
        "leveling": {
          "title": "Выравнивание участка",
          "description": "Если нужно сформировать правильные уровни и уклоны после дренажа."
        },
        "truck": {
          "title": "Самосвалы и доставка материалов",
          "description": "Если для дренажа нужен грунт, песок, щебень, трубы или вывоз лишнего материала."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "Можно ли убрать воду с участка полностью?",
          "answer": "Зависит от рельефа, грунта и места для отвода воды. Часто можно значительно улучшить ситуацию, но сначала нужно оценить участок."
        },
        "q2": {
          "question": "Что лучше прислать для расчёта?",
          "answer": "Локацию, фото участка после дождя, фото мест где стоит вода, фото подъезда и короткое описание проблемы."
        },
        "q3": {
          "question": "Вы делаете трубы под дорогой?",
          "answer": "Да. Можем выкопать траншею и уложить трубу там, где воде нужно пройти под дорогой или въездом."
        },
        "q4": {
          "question": "Дренаж лучше делать до или после выравнивания?",
          "answer": "Лучше планировать вместе. Уровни и уклоны влияют на то, куда будет уходить вода."
        },
        "q5": {
          "question": "Нужен ли щебень или песок?",
          "answer": "Зависит от типа дренажа и участка. Если нужны материалы, можем организовать доставку."
        },
        "q6": {
          "question": "Можно ли делать дренаж на узком участке?",
          "answer": "Да, если есть доступ для подходящей техники. Иногда нужен небольшой экскаватор."
        }
      },
      "photos": {
        "title": "Примеры дренажных работ",
        "preparing-the-access-road": {
          "title": "Подготовка подъездной дороги",
          "alt": "Отсыпка и выравнивание подъездной дороги для техники и транспорта"
        },
        "pipe-under-access-road": {
          "title": "Труба под дорогой",
          "alt": "Укладка трубы под подъездной дорогой для отвода воды"
        },
        "water-runoff-channel": {
          "title": "Канал для отвода воды",
          "alt": "Дренажная канава для отвода воды с участка"
        },
        "drainage-trench-excavation": {
          "title": "Копка дренажной траншеи",
          "alt": "Экскаватор копает дренажную траншею на участке на Самуи"
        },
        "wet-land-drainage": {
          "title": "Дренаж влажного участка",
          "alt": "Подготовка влажного участка с водой к дальнейшим земляным работам"
        },
        "drainage-after-backfilling": {
          "title": "Участок после дренажа",
          "alt": "Участок после дренажных работ и подготовки к строительству"
        }
      }
    }
  },
  "en": {
    "drainage": {
      "schema": {
        "name": "Drainage work on Koh Samui",
        "serviceTypes": {
          "drainage": "Drainage work",
          "trenches": "Drainage trenches",
          "pipes": "Pipe installation",
          "runoff": "Water runoff",
          "slopeCorrection": "Slope correction"
        }
      },
      "seo": {
        "title": "Drainage Work on Koh Samui | Water Runoff, Trenches & Pipes",
        "description": "Drainage work on Koh Samui: water runoff, drainage trenches, pipe installation, slope correction and preparation of wet land for construction.",
        "keywords": "drainage koh samui, drainage work samui, water runoff samui, drainage trench samui, pipe drainage samui, wet land drainage samui, earthworks samui"
      },
      "hero": {
        "title": "Drainage work on Koh Samui",
        "description": "Water runoff, drainage trenches, pipes and slope correction for wet and low land."
      },
      "intro": "We build drainage and water runoff solutions for houses, villas, roads and construction sites on Koh Samui. We help move standing water, direct water flow, dig trenches, install pipes and shape slopes. The right solution depends on the real site: terrain, soil, water level, rainy season impact and where the water can safely go.",
      "tasks": {
        "title": "What drainage work includes",
        "t1": {
          "title": "Standing water removal",
          "description": "Helping low and wet areas drain after rain instead of holding water."
        },
        "t2": {
          "title": "Drainage trenches",
          "description": "Digging ditches and trenches to direct water in the right direction."
        },
        "t3": {
          "title": "Pipe installation",
          "description": "Installing pipes under roads, entrances or areas where water needs to pass underground."
        },
        "t4": {
          "title": "Slope correction",
          "description": "Adjusting land slopes so water does not collect near the house, road or work area."
        },
        "t5": {
          "title": "Wet land preparation",
          "description": "Preparing low and wet land for backfilling, leveling or future construction."
        },
        "t6": {
          "title": "Drainage before construction",
          "description": "Planning water runoff before building to prevent foundation and access problems."
        }
      },
      "included": {
        "title": "Why drainage matters",
        "rain": {
          "title": "Samui has heavy rain",
          "description": "If water is not directed, it quickly damages soil, access roads and work areas."
        },
        "foundation": {
          "title": "Protect the future building",
          "description": "Water near foundations can cause settling, moisture and construction problems."
        },
        "levels": {
          "title": "Drainage depends on levels",
          "description": "Good drainage works together with slopes, backfilling and land leveling."
        }
      },
      "seoBlock": {
        "title": "Water runoff before construction",
        "p1": "On Koh Samui, water is one of the main problems when preparing land. During heavy rain, low areas can flood quickly, soil can wash out and access roads can become difficult for machinery.",
        "p2": "Drainage work helps direct water before it becomes a problem: trenches, ditches, pipes under roads, correct slopes and runoff lines. This is important before backfilling, leveling, building a house or villa.",
        "p3": "Before giving a quote, we check where the water comes from, where it can go, what type of soil is on site and how machinery can work without getting stuck."
      },
      "process": {
        "title": "How the work is done",
        "p1": {
          "title": "Water and terrain check",
          "description": "We check where water stands, where it comes from, where it can go and machine access."
        },
        "p2": {
          "title": "Runoff planning",
          "description": "We define trenches, ditches, pipes, slopes and the water direction."
        },
        "p3": {
          "title": "Digging and installation",
          "description": "We dig trenches, shape channels, install pipes and adjust levels."
        },
        "p4": {
          "title": "Ready for the next stage",
          "description": "After drainage, the land can be backfilled, leveled or prepared for construction."
        }
      },
      "pricing": {
        "title": "Fast quote for drainage work",
        "text": "The price depends on land size, water volume, trench depth, pipe work, machine access, soil condition and backfilling needs. Send location, photos after rain and a short description of the problem."
      },
      "cta": {
        "title": "Send photos of the land after rain",
        "text": "Drainage is best estimated from real water conditions. Send the location, wet area photos and where water may be able to drain."
      },
      "related": {
        "title": "Related services",
        "earthworks": {
          "title": "Earthworks",
          "description": "For full site preparation: drainage, backfilling, leveling, machinery and removal."
        },
        "leveling": {
          "title": "Land leveling",
          "description": "If correct levels and slopes are needed after drainage."
        },
        "truck": {
          "title": "Dump trucks and material delivery",
          "description": "If drainage needs soil, sand, gravel, pipes or removal of excess material."
        }
      },
      "faq": {
        "title": "Frequently asked questions",
        "q1": {
          "question": "Can you remove all water from the land?",
          "answer": "It depends on terrain, soil and where water can drain. Often we can improve the situation significantly, but the site needs to be checked first."
        },
        "q2": {
          "question": "What should I send for a quote?",
          "answer": "Location, photos after rain, photos of standing water, access photos and a short description of the problem."
        },
        "q3": {
          "question": "Can you install pipes under a road?",
          "answer": "Yes. We can dig a trench and install a pipe where water needs to pass under a road or entrance."
        },
        "q4": {
          "question": "Should drainage be done before or after leveling?",
          "answer": "It is best to plan them together. Levels and slopes affect where the water will go."
        },
        "q5": {
          "question": "Do I need gravel or sand?",
          "answer": "It depends on the drainage type and site conditions. If materials are needed, we can organize delivery."
        },
        "q6": {
          "question": "Can drainage be done on narrow land?",
          "answer": "Yes, if there is access for the right machine. Sometimes a small excavator is needed."
        }
      },
      "photos": {
        "title": "Drainage work examples",
        "preparing-the-access-road": {
          "title": "Access road preparation",
          "alt": "Building and leveling access road"
        },
        "pipe-under-access-road": {
          "title": "Pipe under access road",
          "alt": "Installing drainage pipe under an access road"
        },
        "water-runoff-channel": {
          "title": "Water runoff channel",
          "alt": "Drainage channel for moving water away from land"
        },
        "drainage-trench-excavation": {
          "title": "Drainage trench excavation",
          "alt": "Excavator digging a drainage trench on Koh Samui land"
        },
        "wet-land-drainage": {
          "title": "Wet land drainage",
          "alt": "Preparing wet land with drainage before further earthworks"
        },
        "drainage-after-backfilling": {
          "title": "Land after drainage",
          "alt": "Land after drainage work and preparation for construction"
        }
      }
    }
  },
  "th": {
    "drainage": {
      "schema": {
        "name": "งานระบบระบายน้ำบนเกาะสมุย",
        "serviceTypes": {
          "drainage": "ระบบระบายน้ำ",
          "trenches": "ขุดร่องระบายน้ำ",
          "pipes": "วางท่อระบายน้ำ",
          "runoff": "ทางน้ำไหล",
          "slopeCorrection": "ปรับสโลปน้ำ"
        }
      },
      "seo": {
        "title": "ระบบระบายน้ำ เกาะสมุย | ขุดร่อง วางท่อ และแก้น้ำขัง",
        "description": "บริการทำระบบระบายน้ำบนเกาะสมุย แก้น้ำขัง ขุดร่อง วางท่อ ทำสโลป และเตรียมพื้นที่เปียกสำหรับก่อสร้าง",
        "keywords": "ระบบระบายน้ำ สมุย, แก้น้ำขัง สมุย, ขุดร่องน้ำ สมุย, วางท่อระบายน้ำ สมุย, งานดิน สมุย, รถขุด สมุย"
      },
      "hero": {
        "title": "ระบบระบายน้ำบนเกาะสมุย",
        "description": "แก้น้ำขัง ขุดร่อง วางท่อ และทำสโลปสำหรับพื้นที่เปียกหรือพื้นที่ต่ำ"
      },
      "intro": "เรารับทำระบบระบายน้ำสำหรับบ้าน วิลล่า ถนน และพื้นที่ก่อสร้างบนเกาะสมุย ช่วยระบายน้ำขัง ทำร่องน้ำ วางท่อ และปรับสโลปให้น้ำไหลออกจากพื้นที่ได้ดี วิธีทำต้องดูจากหน้างานจริง เช่น ระดับพื้นที่ ชนิดดิน ปริมาณน้ำ ช่วงฝน และจุดที่สามารถปล่อยน้ำออกได้",
      "tasks": {
        "title": "งานระบายน้ำรวมอะไรบ้าง",
        "t1": {
          "title": "แก้น้ำขัง",
          "description": "ช่วยระบายน้ำจากพื้นที่ต่ำหรือพื้นที่เปียกหลังฝนตก"
        },
        "t2": {
          "title": "ขุดร่องระบายน้ำ",
          "description": "ขุดร่องหรือคูน้ำเพื่อให้น้ำไหลไปในทิศทางที่ต้องการ"
        },
        "t3": {
          "title": "วางท่อระบายน้ำ",
          "description": "วางท่อใต้ถนน ทางเข้า หรือจุดที่ต้องให้น้ำไหลผ่านใต้ดิน"
        },
        "t4": {
          "title": "ปรับสโลปน้ำ",
          "description": "ปรับความลาดเอียงของพื้นที่เพื่อไม่ให้น้ำขังใกล้บ้านหรือถนน"
        },
        "t5": {
          "title": "เตรียมพื้นที่เปียก",
          "description": "เตรียมพื้นที่ต่ำหรือเปียกก่อนถมดิน ปรับระดับ หรือก่อสร้าง"
        },
        "t6": {
          "title": "ระบายน้ำก่อนก่อสร้าง",
          "description": "วางแผนทางน้ำก่อนเริ่มสร้าง เพื่อลดปัญหาฐานรากและทางเข้า"
        }
      },
      "included": {
        "title": "ทำไมระบบระบายน้ำถึงสำคัญ",
        "rain": {
          "title": "สมุยฝนตกหนัก",
          "description": "ถ้าไม่มีทางน้ำ ดิน ถนน และพื้นที่ทำงานเสียหายได้เร็ว"
        },
        "foundation": {
          "title": "ช่วยป้องกันปัญหาบ้าน",
          "description": "น้ำใกล้ฐานรากอาจทำให้ดินยุบ ชื้น และมีปัญหาตอนก่อสร้าง"
        },
        "levels": {
          "title": "ต้องทำคู่กับระดับพื้นที่",
          "description": "ระบบระบายน้ำที่ดีต้องสัมพันธ์กับสโลป การถมดิน และการปรับระดับ"
        }
      },
      "seoBlock": {
        "title": "แก้น้ำขังก่อนเริ่มก่อสร้าง",
        "p1": "บนเกาะสมุย ปัญหาน้ำเป็นเรื่องสำคัญมาก โดยเฉพาะช่วงฝนตก พื้นที่ต่ำอาจมีน้ำขัง ดินถูกน้ำกัดเซาะ และทางเข้าอาจใช้งานยากสำหรับเครื่องจักร",
        "p2": "งานระบายน้ำช่วยจัดทางน้ำก่อนเกิดปัญหา เช่น ขุดร่อง วางท่อใต้ถนน ทำสโลป และกำหนดทางน้ำไหล เหมาะก่อนถมดิน ปรับระดับ หรือสร้างบ้านและวิลล่า",
        "p3": "ก่อนประเมินราคา เราดูว่าน้ำมาจากไหน จะปล่อยไปทางไหน ลักษณะดินเป็นอย่างไร และเครื่องจักรเข้าทำงานได้หรือไม่"
      },
      "process": {
        "title": "ขั้นตอนการทำงาน",
        "p1": {
          "title": "ดูน้ำและพื้นที่",
          "description": "ดูจุดน้ำขัง ทิศทางน้ำ ทางเข้า และสภาพดิน"
        },
        "p2": {
          "title": "วางแผนทางน้ำ",
          "description": "กำหนดร่องน้ำ ท่อ สโลป และทิศทางน้ำไหล"
        },
        "p3": {
          "title": "ขุดและติดตั้ง",
          "description": "ขุดร่อง ทำคูน้ำ วางท่อ และปรับระดับตามแผน"
        },
        "p4": {
          "title": "พร้อมทำงานต่อ",
          "description": "หลังทำระบายน้ำ สามารถถมดิน ปรับระดับ หรือก่อสร้างต่อได้"
        }
      },
      "pricing": {
        "title": "ประเมินราคางานระบายน้ำ",
        "text": "ราคาขึ้นอยู่กับขนาดพื้นที่ ปริมาณน้ำ ความลึกร่อง ท่อ ทางเข้าเครื่องจักร ดิน และงานถมเพิ่มเติม ส่งโลเคชัน รูปหลังฝนตก และรายละเอียดปัญหาเพื่อประเมินราคา"
      },
      "cta": {
        "title": "ส่งรูปพื้นที่หลังฝนตก",
        "text": "งานระบายน้ำประเมินได้ดีที่สุดจากสภาพน้ำจริง ส่งโลเคชัน รูปจุดน้ำขัง และจุดที่อาจปล่อยน้ำออกได้"
      },
      "related": {
        "title": "บริการที่เกี่ยวข้อง",
        "earthworks": {
          "title": "งานดิน",
          "description": "สำหรับงานเตรียมพื้นที่แบบครบชุด เช่น ระบายน้ำ ถมดิน ปรับระดับ เครื่องจักร และขนดินออก"
        },
        "leveling": {
          "title": "ปรับระดับที่ดิน",
          "description": "ถ้าต้องปรับระดับและทำสโลปให้สัมพันธ์กับระบบระบายน้ำ"
        },
        "truck": {
          "title": "รถดั๊มพ์และส่งวัสดุ",
          "description": "ถ้าต้องใช้ดิน ทราย หิน ท่อ หรือขนวัสดุส่วนเกินออก"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "แก้น้ำขังได้หมดไหม?",
          "answer": "ขึ้นอยู่กับระดับพื้นที่ ดิน และจุดที่สามารถปล่อยน้ำออกได้ ส่วนมากช่วยให้ดีขึ้นมากได้ แต่ต้องดูหน้างานก่อน"
        },
        "q2": {
          "question": "ต้องส่งอะไรเพื่อประเมินราคา?",
          "answer": "ส่งโลเคชัน รูปหลังฝนตก รูปจุดที่น้ำขัง รูปทางเข้า และอธิบายปัญหาสั้น ๆ"
        },
        "q3": {
          "question": "วางท่อใต้ถนนได้ไหม?",
          "answer": "ได้ครับ สามารถขุดร่องและวางท่อในจุดที่น้ำต้องไหลผ่านใต้ถนนหรือทางเข้า"
        },
        "q4": {
          "question": "ควรทำระบายน้ำก่อนหรือหลังปรับระดับ?",
          "answer": "ควรวางแผนพร้อมกัน เพราะระดับและสโลปมีผลต่อทิศทางน้ำ"
        },
        "q5": {
          "question": "ต้องใช้หินหรือทรายไหม?",
          "answer": "ขึ้นอยู่กับรูปแบบระบายน้ำและสภาพพื้นที่ ถ้าต้องใช้วัสดุ เราจัดส่งให้ได้"
        },
        "q6": {
          "question": "พื้นที่แคบทำได้ไหม?",
          "answer": "ทำได้ถ้ามีทางเข้าเครื่องจักรที่เหมาะสม บางงานใช้รถขุดขนาดเล็ก"
        }
      },
      "photos": {
        "title": "ตัวอย่างงานระบายน้ำ",
        "preparing-the-access-road": {
          "title": "ทำทางเข้า",
          "alt": "เตรียมถนนเข้าไซต์"
        },
        "pipe-under-access-road": {
          "title": "วางท่อใต้ถนน",
          "alt": "วางท่อระบายน้ำใต้ถนนทางเข้า"
        },
        "water-runoff-channel": {
          "title": "คูน้ำไหล",
          "alt": "คูระบายน้ำเพื่อพาน้ำออกจากพื้นที่"
        },
        "drainage-trench-excavation": {
          "title": "ขุดร่องระบายน้ำ",
          "alt": "รถขุดกำลังขุดร่องระบายน้ำบนเกาะสมุย"
        },
        "wet-land-drainage": {
          "title": "ระบายน้ำพื้นที่เปียก",
          "alt": "เตรียมพื้นที่เปียกด้วยระบบระบายน้ำก่อนงานดิน"
        },
        "drainage-after-backfilling": {
          "title": "พื้นที่หลังทำระบายน้ำ",
          "alt": "พื้นที่หลังทำระบบระบายน้ำและเตรียมก่อสร้าง"
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
      imageSrc="/images/services/drainage/hero.webp"
      page="services/drainage"
    />

    <ServiceIntro :text="t('drainage.intro')" />

    <ServiceIncluded
      :title="t('drainage.tasks.title')"
      :items="tasksItems"
    />

    <ServiceIncluded
      :title="t('drainage.included.title')"
      :items="includedItems"
    />

    <CoreContactsMini
      page="services/drainage"
      location="content"
    />

    <ServiceGallery
      :title="t('drainage.photos.title')"
      :items="photos"
    />

    <ServiceIncluded
      :title="t('drainage.process.title')"
      :items="processItems"
    />

    <UAlert
      :title="t('drainage.pricing.title')"
      :description="t('drainage.pricing.text')"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-calculator"
    />

    <UAlert
      :title="t('drainage.cta.title')"
      :description="t('drainage.cta.text')"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-camera"
    />

    <ServiceRelated
      :title="t('drainage.related.title')"
      :items="relatedServices"
    />

    <ServiceSeoBlock
      :title="seoBlock.title"
      :paragraphs="seoBlock.paragraphs"
    />

    <CoreFAQ
      :title="t('drainage.faq.title')"
      :items="faqItems"
    />

    <CoreContacts
      page="services/drainage"
      location="bottom"
    />
  </UPage>
</template>
