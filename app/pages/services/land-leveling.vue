<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const heroTitle = computed(() => t('landLeveling.hero.title'));
const heroDescription = computed(() => t('landLeveling.hero.description'));

const tasksItems = computed(() => [
  {
    icon: 'i-lucide-ruler',
    title: t('landLeveling.tasks.t1.title'),
    description: t('landLeveling.tasks.t1.description'),
  },
  {
    icon: 'i-lucide-mountain',
    title: t('landLeveling.tasks.t2.title'),
    description: t('landLeveling.tasks.t2.description'),
  },
  {
    icon: 'i-lucide-arrow-down-up',
    title: t('landLeveling.tasks.t3.title'),
    description: t('landLeveling.tasks.t3.description'),
  },
  {
    icon: 'i-lucide-home',
    title: t('landLeveling.tasks.t4.title'),
    description: t('landLeveling.tasks.t4.description'),
  },
  {
    icon: 'i-lucide-route',
    title: t('landLeveling.tasks.t5.title'),
    description: t('landLeveling.tasks.t5.description'),
  },
  {
    icon: 'i-lucide-shovel',
    title: t('landLeveling.tasks.t6.title'),
    description: t('landLeveling.tasks.t6.description'),
  },
]);

const includedItems = computed(() => [
  {
    icon: 'i-heroicons-adjustments-horizontal',
    title: t('landLeveling.included.levels.title'),
    description: t('landLeveling.included.levels.description'),
  },
  {
    icon: 'i-heroicons-arrow-trending-down',
    title: t('landLeveling.included.slope.title'),
    description: t('landLeveling.included.slope.description'),
  },
  {
    icon: 'i-heroicons-truck',
    title: t('landLeveling.included.material.title'),
    description: t('landLeveling.included.material.description'),
  },
]);

const processItems = computed(() => [
  {
    icon: 'i-lucide-map-pin',
    title: t('landLeveling.process.p1.title'),
    description: t('landLeveling.process.p1.description'),
  },
  {
    icon: 'i-lucide-ruler',
    title: t('landLeveling.process.p2.title'),
    description: t('landLeveling.process.p2.description'),
  },
  {
    icon: 'i-lucide-shovel',
    title: t('landLeveling.process.p3.title'),
    description: t('landLeveling.process.p3.description'),
  },
  {
    icon: 'i-lucide-check-circle',
    title: t('landLeveling.process.p4.title'),
    description: t('landLeveling.process.p4.description'),
  },
]);

const relatedServices = computed(() => [
  {
    icon: 'i-lucide-land-plot',
    title: t('landLeveling.related.earthworks.title'),
    description: t('landLeveling.related.earthworks.description'),
    to: localePath({ name: 'services-earthworks' }),
  },
  {
    icon: 'i-lucide-droplets',
    title: t('landLeveling.related.drainage.title'),
    description: t('landLeveling.related.drainage.description'),
    to: localePath({ name: 'services-drainage' }),
  },
  {
    icon: 'i-lucide-truck',
    title: t('landLeveling.related.truck.title'),
    description: t('landLeveling.related.truck.description'),
    to: localePath({ name: 'services-truck' }),
  },
]);

const faqItems = computed(() => [
  { question: t('landLeveling.faq.q1.question'), answer: t('landLeveling.faq.q1.answer') },
  { question: t('landLeveling.faq.q2.question'), answer: t('landLeveling.faq.q2.answer') },
  { question: t('landLeveling.faq.q3.question'), answer: t('landLeveling.faq.q3.answer') },
  { question: t('landLeveling.faq.q4.question'), answer: t('landLeveling.faq.q4.answer') },
  { question: t('landLeveling.faq.q5.question'), answer: t('landLeveling.faq.q5.answer') },
  { question: t('landLeveling.faq.q6.question'), answer: t('landLeveling.faq.q6.answer') },
]);

const photos = computed(() => {
  const order = [
    'slope-shaping',
    'level-plot-ready-for-house',
    'land-leveling-before-construction',
    'leveling-construction-site',
    'bulldozer-work',
    'access-road-leveling',

  ];

  return order.map((key) => ({
    title: t(`landLeveling.photos.${key}.title`),
    alt: t(`landLeveling.photos.${key}.alt`),
    src: `/images/services/land-leveling/photos/${key}.webp`,
  }));
});

const seoBlock = computed(() => ({
  title: t('landLeveling.seoBlock.title'),
  paragraphs: [
    t('landLeveling.seoBlock.p1'),
    t('landLeveling.seoBlock.p2'),
    t('landLeveling.seoBlock.p3'),
  ],
}));

const serviceTypes = computed(() => [
  t('landLeveling.schema.serviceTypes.landLeveling'),
  t('landLeveling.schema.serviceTypes.grading'),
  t('landLeveling.schema.serviceTypes.slopeShaping'),
  t('landLeveling.schema.serviceTypes.siteGrading'),
  t('landLeveling.schema.serviceTypes.terracing'),
]);

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://supermansamui.com/services/land-leveling#service',
      name: t('landLeveling.schema.name'),
      description: t('landLeveling.seo.description'),
      provider: { '@id': 'https://supermansamui.com#business' },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Koh Samui, Surat Thani, Thailand',
      },
      serviceType: serviceTypes.value,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t('landLeveling.tasks.title'),
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
  const title = t('landLeveling.seo.title');
  const description = t('landLeveling.seo.description');
  const keywords = t('landLeveling.seo.keywords');
  const image = 'https://supermansamui.com/images/services/land-leveling/hero.webp';

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
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
    "landLeveling": {
      "schema": {
        "name": "Выравнивание участка на Самуи",
        "serviceTypes": {
          "landLeveling": "Выравнивание участка",
          "grading": "Планировка земли",
          "slopeShaping": "Формирование уклонов",
          "siteGrading": "Выравнивание строительной площадки",
          "terracing": "Формирование террас"
        }
      },
      "seo": {
        "title": "Выравнивание участка на Самуи - Планировка земли и подготовка площадки",
        "description": "Выравнивание участка на Самуи под дом, виллу, дорогу или стройку: планировка земли, формирование уровней, уклонов, террас и ровных площадок.",
        "keywords": "выравнивание участка самуи, планировка земли самуи, выравнивание земли самуи, grading koh samui, land leveling koh samui, подготовка участка самуи, экскаватор самуи"
      },
      "hero": {
        "title": "Выравнивание участка на Самуи",
        "description": "Планировка земли, формирование уровней, уклонов и ровных площадок под строительство."
      },
      "intro": "Выравниваем участки под дома, виллы, дороги, парковки, сады и строительные площадки на Самуи. Формируем уровни, уклоны, террасы и рабочие зоны так, чтобы участок был удобен для следующего этапа: строительства, отсыпки, дренажа или благоустройства. Работаем экскаваторами, самосвалами и трактором, подбирая технику под реальный рельеф, грунт и подъезд.",
      "tasks": {
        "title": "Что входит в выравнивание участка",
        "t1": {
          "title": "Планировка уровней",
          "description": "Формируем высоты и рабочие зоны под дом, виллу, парковку, сад или дорогу."
        },
        "t2": {
          "title": "Срезка высоких мест",
          "description": "Снимаем лишний грунт, бугры и перепады, которые мешают строительству или подъезду."
        },
        "t3": {
          "title": "Подсыпка низких мест",
          "description": "Добавляем грунт или материал там, где нужно поднять уровень участка."
        },
        "t4": {
          "title": "Площадка под дом",
          "description": "Готовим ровную зону под фундамент, плиту, дом, виллу или технические постройки."
        },
        "t5": {
          "title": "Подъезд и парковка",
          "description": "Выравниваем зоны под дорогу, въезд, парковку и движение строительной техники."
        },
        "t6": {
          "title": "Подготовка к дренажу",
          "description": "Формируем базовые уклоны, чтобы вода не стояла на участке и могла уходить дальше."
        }
      },
      "included": {
        "title": "Почему правильные уровни важны",
        "levels": {
          "title": "Меньше переделок",
          "description": "Правильная планировка снижает риск, что участок придётся переделывать после отсыпки или дождей."
        },
        "slope": {
          "title": "Контроль воды",
          "description": "Уклоны помогают воде уходить с участка, а не собираться возле дома или дороги."
        },
        "material": {
          "title": "Оптимизация материалов",
          "description": "Понимаем, где можно перераспределить грунт, а где нужен завоз или вывоз."
        }
      },
      "seoBlock": {
        "title": "Планировка земли перед строительством",
        "p1": "На Самуи участки часто имеют уклон, мягкий грунт, перепады высот или проблемы с водой. Если начать строительство без нормального выравнивания, позже могут появиться лужи, размывы, неудобный подъезд и лишние расходы на переделки.",
        "p2": "Выравнивание участка помогает заранее понять уровни: где будет дом, где дорога, куда должна уходить вода, где нужно поднять землю, а где снять лишний грунт. Это особенно важно перед фундаментом, отсыпкой, дренажом и благоустройством.",
        "p3": "Мы оцениваем рельеф, подъезд, тип грунта и объём материала. После этого подбираем технику и предлагаем понятный план работ."
      },
      "process": {
        "title": "Как проходит работа",
        "p1": {
          "title": "Оцениваем рельеф",
          "description": "Смотрим локацию, фото, подъезд, уклон, воду, грунт и перепады высот."
        },
        "p2": {
          "title": "Планируем уровни",
          "description": "Определяем, где снимать грунт, где подсыпать, где оставить уклон или террасу."
        },
        "p3": {
          "title": "Выравниваем участок",
          "description": "Работаем техникой, перемещаем грунт, формируем площадки и рабочие зоны."
        },
        "p4": {
          "title": "Готовим к следующему этапу",
          "description": "Оставляем участок готовым для строительства, отсыпки, дренажа или благоустройства."
        }
      },
      "pricing": {
        "title": "Быстрый расчёт по выравниванию",
        "text": "Цена зависит от площади, перепадов высот, грунта, доступа техники, объёма перемещения земли и необходимости завоза или вывоза материала. Для расчёта отправьте локацию, фото участка и короткое описание задачи."
      },
      "cta": {
        "title": "Отправьте фото участка - оценим уровни",
        "text": "Пришлите локацию, фото подъезда и участка. Мы подскажем, какая техника нужна и как лучше выровнять землю."
      },
      "related": {
        "title": "Связанные услуги",
        "earthworks": {
          "title": "Земляные работы",
          "description": "Если нужно комплексно подготовить участок: расчистка, дренаж, отсыпка, вывоз и техника."
        },
        "drainage": {
          "title": "Дренаж участка",
          "description": "Если на участке стоит вода или нужно правильно организовать отвод после выравнивания."
        },
        "truck": {
          "title": "Самосвалы и доставка грунта",
          "description": "Если для выравнивания нужно привезти грунт, песок, щебень или вывезти лишний материал."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "Вы просто делаете участок ровным?",
          "answer": "Не всегда идеально плоским. Часто правильнее сделать нужные уровни и уклоны, чтобы участок был удобен и вода уходила."
        },
        "q2": {
          "question": "Можно ли выровнять участок после расчистки?",
          "answer": "Да. Обычно после расчистки участка следующий этап - выравнивание, отсыпка или дренаж."
        },
        "q3": {
          "question": "Нужно ли завозить грунт?",
          "answer": "Зависит от перепадов высот и нужного результата. Иногда можно перераспределить грунт на участке, иногда нужен завоз."
        },
        "q4": {
          "question": "Можно сделать уклон для отвода воды?",
          "answer": "Да. Мы можем сформировать уклоны, чтобы вода не собиралась возле дома, дороги или рабочей зоны."
        },
        "q5": {
          "question": "Что нужно для расчёта?",
          "answer": "Локация, фото участка, фото подъезда, примерная площадь и описание того, какой результат нужен."
        },
        "q6": {
          "question": "Можно после выравнивания сделать дренаж?",
          "answer": "Да. Если участок влажный или низкий, дренаж лучше планировать вместе с уровнями."
        }
      },
      "photos": {
        "title": "Примеры выравнивания участков",
        "bulldozer-work": {
          "title": "Планировка участка техникой",
          "alt": "Земляные работы и перемещение грунта на участке на Самуи"
        },
        "leveling-construction-site": {
          "title": "Выравнивание строительной площадки",
          "alt": "Планировка и выравнивание участка перед началом строительства"
        },
        "access-road-leveling": {
          "title": "Выравнивание подъездной дороги",
          "alt": "Планировка и выравнивание подъездной дороги на участке"
        },
        "land-leveling-before-construction": {
          "title": "Выравнивание перед строительством",
          "alt": "Выравнивание участка перед строительством дома на Самуи"
        },
        "slope-shaping": {
          "title": "Формирование уклонов",
          "alt": "Формирование уклонов для отвода воды на участке"
        },
        "level-plot-ready-for-house": {
          "title": "Ровная площадка под дом",
          "alt": "Выровненный участок готов под строительство дома или виллы"
        }
      }
    }
  },
  "en": {
    "landLeveling": {
      "schema": {
        "name": "Land leveling on Koh Samui",
        "serviceTypes": {
          "landLeveling": "Land leveling",
          "grading": "Land grading",
          "slopeShaping": "Slope shaping",
          "siteGrading": "Construction site grading",
          "terracing": "Terrace shaping"
        }
      },
      "seo": {
        "title": "Land Leveling on Koh Samui - Grading & Site Preparation",
        "description": "Land leveling on Koh Samui for houses, villas, roads and construction sites: grading, slopes, terraces, flat work areas and site preparation.",
        "keywords": "land leveling koh samui, land grading koh samui, grading samui, site grading koh samui, slope shaping samui, level land samui, excavator samui"
      },
      "hero": {
        "title": "Land leveling on Koh Samui",
        "description": "Land grading, slope shaping and flat site preparation for construction."
      },
      "intro": "We level land for houses, villas, roads, parking areas, gardens and construction sites on Koh Samui. We shape levels, slopes, terraces and working areas so the land is ready for the next stage: construction, backfilling, drainage or landscaping. We use excavators, dump trucks and tractor work based on real site access, terrain and soil condition.",
      "tasks": {
        "title": "What land leveling includes",
        "t1": {
          "title": "Level planning",
          "description": "Creating working levels and zones for houses, villas, parking areas, gardens or access roads."
        },
        "t2": {
          "title": "Cutting high areas",
          "description": "Removing excess soil, bumps and height differences that block construction or access."
        },
        "t3": {
          "title": "Filling low areas",
          "description": "Adding soil or material where the land level needs to be raised."
        },
        "t4": {
          "title": "House platform preparation",
          "description": "Preparing a level area for a foundation, slab, house, villa or technical structure."
        },
        "t5": {
          "title": "Access road and parking",
          "description": "Leveling areas for access roads, entrances, parking and construction traffic."
        },
        "t6": {
          "title": "Drainage-ready slopes",
          "description": "Creating basic slopes so water does not stay on the land and can move away."
        }
      },
      "included": {
        "title": "Why proper levels matter",
        "levels": {
          "title": "Less rework",
          "description": "Proper grading reduces the risk of fixing the site again after filling or heavy rain."
        },
        "slope": {
          "title": "Water control",
          "description": "Slopes help water move away instead of collecting near the house or road."
        },
        "material": {
          "title": "Better material use",
          "description": "We check where soil can be moved on site and where delivery or removal is needed."
        }
      },
      "seoBlock": {
        "title": "Land grading before construction",
        "p1": "Land on Koh Samui often has slopes, soft soil, uneven levels or water problems. Starting construction without proper leveling can lead to puddles, erosion, difficult access and extra repair costs later.",
        "p2": "Land leveling helps define where the house, road, parking and work areas will be, where water should go, which areas need to be raised and where excess soil should be removed. This is important before foundations, backfilling, drainage and landscaping.",
        "p3": "We assess the land shape, access, soil type and material volume before choosing machinery and proposing a clear work plan."
      },
      "process": {
        "title": "How the work is done",
        "p1": {
          "title": "Site assessment",
          "description": "We check location, photos, access, slope, water, soil and height differences."
        },
        "p2": {
          "title": "Level planning",
          "description": "We decide where to cut, where to fill and where to keep a slope or terrace."
        },
        "p3": {
          "title": "Land leveling",
          "description": "We work with machinery, move soil and shape flat areas and work zones."
        },
        "p4": {
          "title": "Ready for the next stage",
          "description": "We leave the site ready for construction, backfilling, drainage or landscaping."
        }
      },
      "pricing": {
        "title": "Fast quote for land leveling",
        "text": "The price depends on land size, height differences, soil type, machine access, soil movement volume and whether material delivery or removal is needed. Send location, site photos and a short task description."
      },
      "cta": {
        "title": "Send photos of your land - we’ll estimate the levels",
        "text": "Share location, access photos and site photos. We’ll suggest the right machinery and the best way to level the land."
      },
      "related": {
        "title": "Related services",
        "earthworks": {
          "title": "Earthworks",
          "description": "For full site preparation: clearing, drainage, backfilling, hauling and machinery."
        },
        "drainage": {
          "title": "Drainage work",
          "description": "If water stays on the land or water runoff needs to be planned after leveling."
        },
        "truck": {
          "title": "Dump trucks and soil delivery",
          "description": "If leveling requires soil, sand, gravel delivery or removal of excess material."
        }
      },
      "faq": {
        "title": "Frequently asked questions",
        "q1": {
          "question": "Do you make the land completely flat?",
          "answer": "Not always. Often the right solution is to create correct levels and slopes so the land works properly and water drains away."
        },
        "q2": {
          "question": "Can you level land after clearing?",
          "answer": "Yes. After land clearing, leveling, backfilling or drainage is usually the next step."
        },
        "q3": {
          "question": "Do I need to bring in fill soil?",
          "answer": "It depends on height differences and the result you need. Sometimes soil can be moved on site, sometimes material delivery is needed."
        },
        "q4": {
          "question": "Can you create a slope for water runoff?",
          "answer": "Yes. We can shape slopes so water does not collect near the house, road or work area."
        },
        "q5": {
          "question": "What do you need for a quote?",
          "answer": "Location, site photos, access photos, approximate area and a short description of the desired result."
        },
        "q6": {
          "question": "Can drainage be done after leveling?",
          "answer": "Yes. For wet or low land, drainage should be planned together with the levels."
        }
      },
      "photos": {
        "title": "Land leveling examples",
        "bulldozer-work": {
          "title": "Site grading",
          "alt": "Earthworks and soil movement on Koh Samui"
        },
        "leveling-construction-site": {
          "title": "Land leveling",
          "alt": "Leveling land before construction"
        },
        "access-road-leveling": {
          "title": "Access road leveling",
          "alt": "Grading and leveling an access road on a land plot"
        },
        "land-leveling-before-construction": {
          "title": "Leveling before construction",
          "alt": "Land leveling before house construction on Koh Samui"
        },
        "slope-shaping": {
          "title": "Slope shaping",
          "alt": "Shaping land slopes for water runoff"
        },
        "level-plot-ready-for-house": {
          "title": "Level plot for a house",
          "alt": "Leveled land ready for house or villa construction"
        }
      }
    }
  },
  "th": {
    "landLeveling": {
      "schema": {
        "name": "ปรับระดับที่ดินบนเกาะสมุย",
        "serviceTypes": {
          "landLeveling": "ปรับระดับที่ดิน",
          "grading": "ปรับพื้นที่",
          "slopeShaping": "ทำสโลป",
          "siteGrading": "ปรับพื้นที่ก่อสร้าง",
          "terracing": "ทำขั้นพื้นที่"
        }
      },
      "seo": {
        "title": "ปรับระดับที่ดิน เกาะสมุย {'|'} ปรับพื้นที่ ทำสโลป และเตรียมก่อสร้าง",
        "description": "บริการปรับระดับที่ดินบนเกาะสมุย สำหรับบ้าน วิลล่า ถนน และไซต์ก่อสร้าง ทำระดับ ทำสโลป ปรับพื้นที่ และเตรียมพื้นที่ให้พร้อมใช้งาน",
        "keywords": "ปรับระดับที่ดิน สมุย, ปรับพื้นที่ สมุย, งานดิน สมุย, ทำสโลป สมุย, เตรียมพื้นที่ก่อสร้าง สมุย, รถขุด สมุย"
      },
      "hero": {
        "title": "ปรับระดับที่ดินบนเกาะสมุย",
        "description": "ปรับพื้นที่ ทำระดับ ทำสโลป และเตรียมพื้นที่สำหรับก่อสร้าง"
      },
      "intro": "เรารับปรับระดับที่ดินสำหรับบ้าน วิลล่า ถนน ที่จอดรถ สวน และไซต์ก่อสร้างบนเกาะสมุย ทำระดับพื้นที่ ทำสโลป แบ่งพื้นที่ใช้งาน และเตรียมหน้างานให้พร้อมสำหรับขั้นตอนต่อไป เช่น ก่อสร้าง ถมดิน ทำระบายน้ำ หรือจัดสวน เลือกเครื่องจักรตามสภาพพื้นที่ ทางเข้า และลักษณะดินจริง",
      "tasks": {
        "title": "งานปรับระดับรวมอะไรบ้าง",
        "t1": {
          "title": "วางระดับพื้นที่",
          "description": "กำหนดพื้นที่ใช้งานสำหรับบ้าน วิลล่า ที่จอดรถ สวน หรือถนนทางเข้า"
        },
        "t2": {
          "title": "ตัดพื้นที่สูง",
          "description": "ตักดินส่วนเกิน เนิน และจุดที่สูงเกินไปออกเพื่อให้พื้นที่ใช้งานได้ดีขึ้น"
        },
        "t3": {
          "title": "ถมจุดต่ำ",
          "description": "เติมดินหรือวัสดุในจุดที่ต่ำเพื่อยกระดับพื้นที่"
        },
        "t4": {
          "title": "เตรียมพื้นที่บ้าน",
          "description": "เตรียมพื้นที่เรียบสำหรับฐานราก พื้นบ้าน วิลล่า หรืออาคารเล็ก"
        },
        "t5": {
          "title": "ทางเข้าและที่จอดรถ",
          "description": "ปรับระดับพื้นที่สำหรับทางเข้า ที่จอดรถ และการเข้าออกของเครื่องจักร"
        },
        "t6": {
          "title": "ทำสโลปเบื้องต้น",
          "description": "ทำความลาดเอียงพื้นฐานเพื่อให้น้ำไม่ขังในพื้นที่"
        }
      },
      "included": {
        "title": "ทำไมระดับพื้นที่ถึงสำคัญ",
        "levels": {
          "title": "ลดการแก้งาน",
          "description": "วางระดับดีตั้งแต่แรก ช่วยลดปัญหาต้องแก้พื้นที่หลังถมดินหรือหลังฝนตก"
        },
        "slope": {
          "title": "ช่วยเรื่องน้ำ",
          "description": "สโลปที่ดีช่วยให้น้ำไหลออก ไม่ขังใกล้บ้านหรือถนน"
        },
        "material": {
          "title": "ใช้วัสดุคุ้มขึ้น",
          "description": "ดูว่าดินในพื้นที่ย้ายใช้ได้ตรงไหน และตรงไหนต้องถมหรือขนออก"
        }
      },
      "seoBlock": {
        "title": "ปรับพื้นที่ก่อนเริ่มก่อสร้าง",
        "p1": "ที่ดินบนสมุยมักมีความลาดเอียง ดินนิ่ม ระดับไม่เท่ากัน หรือมีปัญหาน้ำขัง ถ้าเริ่มก่อสร้างโดยไม่ปรับระดับให้ดี อาจเกิดน้ำขัง ดินไหล ทางเข้าใช้งานยาก และต้องเสียค่าแก้งานภายหลัง",
        "p2": "การปรับระดับช่วยกำหนดว่าบ้าน ถนน ที่จอดรถ และพื้นที่ทำงานควรอยู่ตรงไหน น้ำควรไหลไปทางไหน จุดไหนต้องถม และจุดไหนต้องตักดินออก",
        "p3": "เราดูสภาพพื้นที่ ทางเข้า ลักษณะดิน และปริมาณดินก่อนเลือกเครื่องจักรและเสนอแผนงาน"
      },
      "process": {
        "title": "ขั้นตอนการทำงาน",
        "p1": {
          "title": "ดูพื้นที่",
          "description": "ดูโลเคชัน รูป ทางเข้า ความลาดเอียง น้ำ ดิน และระดับพื้นที่"
        },
        "p2": {
          "title": "วางระดับ",
          "description": "กำหนดจุดที่ต้องตัก จุดที่ต้องถม และจุดที่ต้องทำสโลป"
        },
        "p3": {
          "title": "ปรับพื้นที่",
          "description": "ใช้เครื่องจักรย้ายดิน ปรับระดับ และทำพื้นที่ใช้งาน"
        },
        "p4": {
          "title": "พร้อมทำงานต่อ",
          "description": "เตรียมพื้นที่สำหรับก่อสร้าง ถมดิน ทำระบายน้ำ หรือจัดสวน"
        }
      },
      "pricing": {
        "title": "ประเมินราคาปรับระดับ",
        "text": "ราคาขึ้นอยู่กับขนาดพื้นที่ ระดับที่ต่างกัน ลักษณะดิน ทางเข้าเครื่องจักร ปริมาณดินที่ต้องย้าย และต้องถมหรือขนออกหรือไม่ ส่งโลเคชัน รูปพื้นที่ และรายละเอียดงานเพื่อประเมินราคา"
      },
      "cta": {
        "title": "ส่งรูปพื้นที่มาให้เราดู",
        "text": "ส่งโลเคชัน รูปทางเข้า และรูปพื้นที่ เราจะแนะนำเครื่องจักรและแนวทางปรับระดับที่เหมาะสม"
      },
      "related": {
        "title": "บริการที่เกี่ยวข้อง",
        "earthworks": {
          "title": "งานดิน",
          "description": "สำหรับเตรียมพื้นที่แบบครบชุด เช่น เคลียร์ ระบายน้ำ ถมดิน ขนดินออก และเครื่องจักร"
        },
        "drainage": {
          "title": "ระบบระบายน้ำ",
          "description": "ถ้าพื้นที่มีน้ำขัง หรือจำเป็นต้องวางทางน้ำหลังปรับระดับ"
        },
        "truck": {
          "title": "รถดั๊มพ์และส่งดิน",
          "description": "ถ้าต้องใช้ดิน ทราย หิน หรือขนดินส่วนเกินออกจากพื้นที่"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "ปรับให้พื้นที่เรียบทั้งหมดใช่ไหม?",
          "answer": "ไม่เสมอไป บางพื้นที่ควรมีสโลปหรือระดับต่างกันเพื่อให้น้ำไหลและใช้งานได้ดี"
        },
        "q2": {
          "question": "หลังเคลียร์ที่ดินแล้วปรับระดับต่อได้ไหม?",
          "answer": "ได้ครับ หลังเคลียร์พื้นที่ มักจะต่อด้วยปรับระดับ ถมดิน หรือทำระบายน้ำ"
        },
        "q3": {
          "question": "ต้องถมดินเพิ่มไหม?",
          "answer": "ขึ้นอยู่กับระดับพื้นที่และผลลัพธ์ที่ต้องการ บางงานใช้ดินเดิมย้ายในพื้นที่ได้ บางงานต้องถมเพิ่ม"
        },
        "q4": {
          "question": "ทำสโลปให้น้ำไหลได้ไหม?",
          "answer": "ได้ครับ สามารถทำสโลปเพื่อให้น้ำไม่ขังใกล้บ้าน ถนน หรือพื้นที่ใช้งาน"
        },
        "q5": {
          "question": "ต้องส่งอะไรเพื่อประเมินราคา?",
          "answer": "ส่งโลเคชัน รูปพื้นที่ รูปทางเข้า ขนาดโดยประมาณ และบอกผลลัพธ์ที่ต้องการ"
        },
        "q6": {
          "question": "ทำระบายน้ำหลังปรับระดับได้ไหม?",
          "answer": "ได้ครับ ถ้าที่ดินต่ำหรือมีน้ำขัง ควรวางแผนระดับและระบายน้ำไปพร้อมกัน"
        }
      },
      "photos": {
        "title": "ตัวอย่างงานปรับระดับ",
        "bulldozer-work": {
          "title": "ปรับพื้นที่",
          "alt": "งานปรับดินบนเกาะสมุย"
        },
        "leveling-construction-site": {
          "title": "ปรับระดับ",
          "alt": "ปรับระดับก่อนก่อสร้าง"
        },
        "access-road-leveling": {
          "title": "ปรับระดับถนนทางเข้า",
          "alt": "ปรับระดับถนนทางเข้าในพื้นที่"
        },
        "land-leveling-before-construction": {
          "title": "ปรับระดับก่อนก่อสร้าง",
          "alt": "ปรับระดับที่ดินก่อนสร้างบ้านบนเกาะสมุย"
        },
        "slope-shaping": {
          "title": "ทำสโลป",
          "alt": "ทำความลาดเอียงเพื่อให้น้ำไหล"
        },
        "level-plot-ready-for-house": {
          "title": "พื้นที่พร้อมสร้างบ้าน",
          "alt": "พื้นที่ที่ปรับระดับแล้วพร้อมสร้างบ้านหรือวิลล่า"
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
      imageSrc="/images/services/land-leveling/hero.webp"
      page="services/land-leveling"
    />

    <ServiceIntro :text="t('landLeveling.intro')" />

    <ServiceIncluded
      :title="t('landLeveling.tasks.title')"
      :items="tasksItems"
    />

    <ServiceIncluded
      :title="t('landLeveling.included.title')"
      :items="includedItems"
    />

    <CoreContactsMini
      page="services/land-leveling"
      location="content"
    />

    <ServiceProjects service="land-leveling" />

    <ServiceGallery
      :title="t('landLeveling.photos.title')"
      :items="photos"
    />

    <ServiceIncluded
      :title="t('landLeveling.process.title')"
      :items="processItems"
    />

    <UAlert
      :title="t('landLeveling.pricing.title')"
      :description="t('landLeveling.pricing.text')"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-calculator"
    />

    <UAlert
      :title="t('landLeveling.cta.title')"
      :description="t('landLeveling.cta.text')"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-camera"
    />

    <ServiceRelated
      :title="t('landLeveling.related.title')"
      :items="relatedServices"
    />

    <ServiceSeoBlock
      :title="seoBlock.title"
      :paragraphs="seoBlock.paragraphs"
    />

    <CoreFAQ
      :title="t('landLeveling.faq.title')"
      :items="faqItems"
    />

    <CoreContacts
      page="services/land-leveling"
      location="bottom"
    />
  </UPage>
</template>
