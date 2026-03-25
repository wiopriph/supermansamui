<script setup lang="ts">
const { t } = useI18n();

const heroTitle = computed(() => t('excavator.hero.title'));
const heroDescription = computed(() => t('excavator.hero.description'));

const tasksTitle = computed(() => t('excavator.tasks.title'));
const tasksItems = computed(() => [
  {
    icon: 'i-lucide-axe',
    title: t('excavator.tasks.t1.title'),
    description: t('excavator.tasks.t1.description'),
  },
  {
    icon: 'i-lucide-rows',
    title: t('excavator.tasks.t2.title'),
    description: t('excavator.tasks.t2.description'),
  },
  {
    icon: 'i-lucide-tree-pine',
    title: t('excavator.tasks.t3.title'),
    description: t('excavator.tasks.t3.description'),
  },
  {
    icon: 'i-lucide-truck',
    title: t('excavator.tasks.t4.title'),
    description: t('excavator.tasks.t4.description'),
  },
  {
    icon: 'i-lucide-house',
    title: t('excavator.tasks.t5.title'),
    description: t('excavator.tasks.t5.description'),
  },
  {
    icon: 'i-lucide-mountain',
    title: t('excavator.tasks.t6.title'),
    description: t('excavator.tasks.t6.description'),
  },
]);

const equipmentTitle = computed(() => t('excavator.equipment.title'));
const equipmentNote = computed(() => t('excavator.equipment.note'));
const equipmentItems = computed(() => ([
  {
    title: 'Komatsu PC30-7',
    image: '/images/equipment/excavators/komatsu-pc30-7.webp',
    subtitle: t('excavator.equipment.items.pc30.type'),
    description: t('excavator.equipment.items.pc30.description'),
    prices: [
      {
        label: t('excavator.equipment.prices.hour'),
        value: '800 THB',
      },
      {
        label: t('excavator.equipment.prices.day'),
        value: '6 000 THB',
      },
    ],
  },
  {
    title: 'Caterpillar 305CR',
    image: '/images/equipment/excavators/cat-305cr.webp',
    subtitle: t('excavator.equipment.items.cat305.type'),
    description: t('excavator.equipment.items.cat305.description'),
    prices: [
      {
        label: t('excavator.equipment.prices.hour'),
        value: '1 000 THB',
      },
      {
        label: t('excavator.equipment.prices.day'),
        value: '7 500 THB',
      },
    ],
  },
  {
    title: 'Komatsu PC128US',
    image: '/images/equipment/excavators/komatsu-pc128us.webp',
    subtitle: t('excavator.equipment.items.pc128.type'),
    description: t('excavator.equipment.items.pc128.description'),
    prices: [
      {
        label: t('excavator.equipment.prices.hour'),
        value: '2 000 THB',
      },
      {
        label: t('excavator.equipment.prices.day'),
        value: '15 000 THB',
      },
    ],
  },
]));


const includedTitle = computed(() => t('excavator.included.title'));
const includedItems = computed(() => ([
  {
    icon: 'i-heroicons-user',
    title: t('excavator.included.operator.title'),
    description: t('excavator.included.operator.description'),
  },
  {
    icon: 'i-heroicons-wrench-screwdriver',
    title: t('excavator.included.inspection.title'),
    description: t('excavator.included.inspection.description'),
  },
  {
    icon: 'i-heroicons-clock',
    title: t('excavator.included.flexible.title'),
    description: t('excavator.included.flexible.description'),
  },
  {
    icon: 'i-heroicons-map',
    title: t('excavator.included.planning.title'),
    description: t('excavator.included.planning.description'),
  },
  {
    icon: 'i-heroicons-camera',
    title: t('excavator.included.report.title'),
    description: t('excavator.included.report.description'),
  },
  {
    icon: 'i-heroicons-shield-check',
    title: t('excavator.included.safety.title'),
    description: t('excavator.included.safety.description'),
  },
]));

const faqTitle = computed(() => t('excavator.faq.title'));
const faqItems = computed(() => ([
  {
    question: t('excavator.faq.q1.question'),
    answer: t('excavator.faq.q1.answer'),
  },
  {
    question: t('excavator.faq.q2.question'),
    answer: t('excavator.faq.q2.answer'),
  },
  {
    question: t('excavator.faq.q3.question'),
    answer: t('excavator.faq.q3.answer'),
  },
  {
    question: t('excavator.faq.q4.question'),
    answer: t('excavator.faq.q4.answer'),
  },
  {
    question: t('excavator.faq.q5.question'),
    answer: t('excavator.faq.q5.answer'),
  },
  {
    question: t('excavator.faq.q6.question'),
    answer: t('excavator.faq.q6.answer'),
  },
]));

const photos = computed(() => {
  const order = [
    'earthworks',
    'construction-foundation',
    'leveling-construction-site',
    'root-removal',
    'bush-removal',
    'sewerage-installation',
    'delivery-of-an-excavator',
    'drainage-installation',
    'garbage-collection',
    'loading-excavator-onto-truck',
    'refueling-excavator',
    'road-construction',
    'scavengery',
    'night-work',
    'transporting-excavator',
  ];

  return order.map((key) => ({
    title: t(`excavator.photos.${key}.title`),
    alt: t(`excavator.photos.${key}.alt`),
    src: `/images/services/excavators/photos/${key}.webp`,
  }));
});


const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://supermansamui.com/services/excavator#service',
      name: t('excavator.seo.title'),
      description: t('excavator.seo.description'),
      provider: {
        '@id': 'https://supermansamui.com#business',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Ko Samui, Surat Thani, Thailand',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t('excavator.tasks.title'),
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
  const title = t('excavator.seo.title');
  const description = t('excavator.seo.description');
  const keywords = t('excavator.seo.keywords');
  const image = 'https://supermansamui.com/images/services/excavators/hero.webp';

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
    "excavator": {
      "seo": {
        "title": "Аренда экскаватора на Самуи | Земляные работы, вывоз грунта и подготовка участка",
        "description": "Аренда экскаватора на Самуи. Помогаем выкопать котлован, траншею или септик, расчистить и выровнять участок, вывезти лишний грунт и подготовить землю под строительство или благоустройство. Быстрый выезд, понятные цены, своя техника и местные операторы.",
        "keywords": "аренда экскаватора самуи, услуги экскаватора самуи, земляные работы самуи, мини-экскаватор самуи, подготовка участка самуи, вывоз грунта самуи, планировка участка, спецтехника самуи"
      },
      "hero": {
        "title": "Аренда экскаватора на Самуи",
        "description": "Копаем, вывозим и готовим участок под дом, септик, бассейн, дорогу или дренаж."
      },
      "intro": "Мы помогаем решать любые земляные задачи на Самуи: выкопать котлован или септик, сделать траншеи под воду и электричество, расчистить и выровнять участок, вывезти лишний грунт или завезти новый. Работаем со своими экскаваторами и грузовиками, с местными операторами, которые знают рельеф острова и особенности грунта. Вы присылаете фото и задачу - мы подбираем технику, называем честный бюджет и в оговорённый день выполняем работу.",
      "tasks": {
        "title": "Какие задачи мы решаем",
        "t1": {
          "title": "Котлованы",
          "description": "Выкапываем котлованы под дом, фундамент, бассейн или хозяйственные постройки."
        },
        "t2": {
          "title": "Траншеи под коммуникации",
          "description": "Роем траншеи под воду, электричество, дренаж и канализацию."
        },
        "t3": {
          "title": "Расчистка участка",
          "description": "Удаляем кусты, мусор, рыхлый слой и подготавливаем землю под работы."
        },
        "t4": {
          "title": "Вывоз грунта",
          "description": "Загружаем и вывозим лишний грунт, строительный мусор и камни."
        },
        "t5": {
          "title": "Подготовка под фундамент",
          "description": "Выравниваем площадку, формируем уровни и подготавливаем основание."
        },
        "t6": {
          "title": "Подсыпка и планировка",
          "description": "Привозим грунт, песок, щебень и распределяем по участку."
        }
      },
      "equipment": {
        "title": "Наши экскаваторы",
        "note": "Если не уверены, какой экскаватор подойдёт - просто отправьте фото участка, и мы подскажем.",
        "prices": {
          "hour": "За час",
          "day": "За смену"
        },
        "items": {
          "pc30": {
            "type": "Малый экскаватор 3 т",
            "description": "Подходит для работ у дома, траншей под коммуникации, небольших ям под септик и лёгкой планировки участка. Заезжает в проёмы и дворы, где крупная техника не пройдёт."
          },
          "cat305": {
            "type": "Средний экскаватор 5,5 т",
            "description": "Оптимален для расчистки участка, котлованов под дом и бассейн, вывоза грунта и подготовки основания под фундамент. Подходит для большинства частных и небольших коммерческих объектов."
          },
          "pc128": {
            "type": "Большой экскаватор 12,8 т",
            "description": "Для крупных земляных работ, формирования откосов, дорожных работ и подготовки площадок под застройку. Требует хорошего подъезда и достаточно места для манёвров."
          }
        }
      },
      "packages": {
        "title": "Нужен самосвал или грунт?",
        "text": "Помимо экскаватора можем сразу привезти грунт, песок, щебень и вывезти лишний. Сделаем работу под ключ: экскаватор + самосвал + доставка материалов."
      },
      "included": {
        "title": "Что входит в аренду",
        "operator": {
          "title": "Опытный оператор",
          "description": "Местный специалист, который знает рельеф Самуи, особенности грунта и безопасные методы работы."
        },
        "inspection": {
          "title": "Полная проверка техники",
          "description": "Перед выездом осматриваем оборудование, смазываем узлы и проверяем исправность всех систем."
        },
        "flexible": {
          "title": "Удобный формат аренды",
          "description": "Вы сами выбираете: почасовая аренда, смена или работа по фиксированному объёму."
        },
        "planning": {
          "title": "Базовое планирование участка",
          "description": "Помогаем определить уровни, уклоны, дренаж и оптимальный порядок выполнения работ."
        },
        "report": {
          "title": "Фото и видеоотчёты",
          "description": "Присылаем отчёт в процессе работы, если вы находитесь не на объекте."
        },
        "safety": {
          "title": "Безопасная работа на объекте",
          "description": "Работаем аккуратно рядом с постройками, коммуникациями и ограждениями, соблюдаем технику безопасности."
        }
      },
      "faq": {
        "title": "Частые вопросы об аренде экскаватора на Самуи",
        "q1": {
          "question": "Входит ли оператор в стоимость аренды?",
          "answer": "Да. Экскаватор сдаётся только с нашим оператором - это гарантирует безопасность, точность и качество работ."
        },
        "q2": {
          "question": "Топливо включено в стоимость?",
          "answer": "Да, всё топливо включено. Никаких скрытых доплат."
        },
        "q3": {
          "question": "Как проходит оценка и организация работ?",
          "answer": "Вы отправляете фото и описание задачи или мы выезжаем на ваш участок. Смотрим доступ, уточняем объёмы и бесплатно рассчитываем стоимость. Определяем, сколько грунта нужно вывезти или привезти, согласуем сроки и формат аренды. В оговорённый день приезжаем вовремя и выполняем работу."
        },
        "q4": {
          "question": "Какой формат оплаты и работ вы предлагаете?",
          "answer": "Почасовая аренда, смена или договорная цена за весь объём. Подберём формат под вашу задачу и бюджет."
        },
        "q5": {
          "question": "Сколько стоит доставка экскаватора?",
          "answer": "При заказе от 3 часов доставка бесплатная. Если меньше - фиксированная стоимость 1 000 бат."
        },
        "q6": {
          "question": "Какая техника есть помимо экскаваторов?",
          "answer": "В нашем автопарке есть 4-, 6- и 10-колёсные грузовики для вывоза мусора, доставки грунта, песка и щебня. Также выполняем расчистку, планировку, выравнивание и полную подготовку участка под строительство."
        }
      },
      "photos": {
        "title": "Галерея",
        "bush-removal": {
          "title": "Очистка участка от кустарника и подготовка земли",
          "alt": "Очистка участка от кустарника и растительности, подготовка земли под строительство"
        },
        "construction-foundation": {
          "title": "Подготовка основания и земляные работы под фундамент",
          "alt": "Земляные работы и подготовка основания под фундамент здания"
        },
        "delivery-of-an-excavator": {
          "title": "Доставка экскаватора на строительный объект заказчика",
          "alt": "Доставка экскаватора на объект и транспортировка строительной техники"
        },
        "drainage-installation": {
          "title": "Устройство дренажной системы и водоотведения на участке",
          "alt": "Монтаж дренажной системы и организация водоотведения на участке"
        },
        "earthworks": {
          "title": "Земляные работы экскаватором на строительном участке",
          "alt": "Земляные работы экскаватором, копка и перемещение грунта"
        },
        "garbage-collection": {
          "title": "Сбор и вывоз строительного мусора с участка",
          "alt": "Сбор и вывоз строительного мусора и отходов с территории"
        },
        "leveling-construction-site": {
          "title": "Выравнивание и планировка строительного участка под застройку",
          "alt": "Планировка и выравнивание участка перед строительными работами"
        },
        "loading-excavator-onto-truck": {
          "title": "Погрузка грунта экскаватором в самосвал на объекте",
          "alt": "Погрузка грунта экскаватором в самосвал для вывоза"
        },
        "night-work": {
          "title": "Ночные строительные и земляные работы на объекте",
          "alt": "Выполнение строительных и земляных работ в ночное время"
        },
        "refueling-excavator": {
          "title": "Заправка экскаватора и подготовка техники к работе",
          "alt": "Заправка экскаватора топливом и подготовка техники к работе"
        },
        "road-construction": {
          "title": "Строительство и отсыпка подъездной дороги к участку",
          "alt": "Строительство подъездной дороги и отсыпка грунта для проезда"
        },
        "root-removal": {
          "title": "Удаление корней деревьев и расчистка строительного участка",
          "alt": "Удаление корней деревьев и очистка участка под строительство"
        },
        "scavengery": {
          "title": "Комплексная расчистка участка и вывоз строительного мусора",
          "alt": "Полная расчистка участка и вывоз мусора после работ"
        },
        "sewerage-installation": {
          "title": "Прокладка канализации и подготовка траншей под коммуникации",
          "alt": "Прокладка канализации и рытьё траншей под инженерные сети"
        },
        "transporting-excavator": {
          "title": "Перевозка экскаватора на трале между строительными объектами",
          "alt": "Перевозка экскаватора на трале и доставка техники на объект"
        }
      }
    }
  },
  "en": {
    "excavator": {
      "seo": {
        "title": "Excavator Rental on Koh Samui | Earthworks, Soil Removal & Land Preparation",
        "description": "Excavator rental on Koh Samui. We help you dig pits and trenches, clear and level land, remove soil and prepare your plot for construction or landscaping. Fast response, clear pricing, our own machines and local operators.",
        "keywords": "excavator rental koh samui, excavator services samui, earthworks samui, mini excavator koh samui, land preparation samui, soil removal koh samui, land grading, construction machinery samui"
      },
      "hero": {
        "title": "Excavator rental on Koh Samui",
        "description": "We dig, clear and prepare your land for a house, septic tank, pool, road or drainage. Clear fixed pricing per job instead of endless hourly billing."
      },
      "intro": "We handle all types of earthworks on Koh Samui: pits for houses and septic tanks, trenches for utilities, site clearing, levelling, soil removal and delivery. We work with our own excavators and trucks, and local operators who know Samui’s terrain and soil. You send us photos and a short description - we choose the right machine, give you a fair budget and get the job done on the agreed day without price surprises.",
      "tasks": {
        "title": "What we can do for you",
        "t1": {
          "title": "Foundation pits",
          "description": "Excavating pits for houses, footings, pools and small structures."
        },
        "t2": {
          "title": "Utility trenches",
          "description": "Digging trenches for water, electricity, drainage and sewage lines."
        },
        "t3": {
          "title": "Site clearing",
          "description": "Removing vegetation, debris and preparing the soil for further work."
        },
        "t4": {
          "title": "Soil removal",
          "description": "Loading and removing excess soil, rocks or construction waste."
        },
        "t5": {
          "title": "Foundation preparation",
          "description": "Levelling the site, shaping slopes and preparing ground for construction."
        },
        "t6": {
          "title": "Backfilling & levelling",
          "description": "Delivering soil, sand or gravel and spreading it across the site."
        }
      },
      "equipment": {
        "title": "Our Excavators",
        "note": "Not sure which machine you need? Send us a photo of your site and we’ll advise you.",
        "prices": {
          "hour": "Per hour",
          "day": "Per day"
        },
        "items": {
          "pc30": {
            "type": "Small excavator 3 t",
            "description": "Best for residential jobs, utility trenches, small septic pits and light levelling. Can access narrow driveways and inner yards where larger machines can’t fit."
          },
          "cat305": {
            "type": "Medium excavator 5.5 t",
            "description": "Ideal for site clearing, house and pool foundations, soil removal and land preparation. Fits most standard access roads and typical construction sites."
          },
          "pc128": {
            "type": "Large excavator 12.8 t",
            "description": "For heavy earthworks, road building, big cuts and full site preparation before large projects. Requires good access and enough space to manoeuvre."
          }
        }
      },
      "packages": {
        "title": "Need a dump truck or soil as well?",
        "text": "Along with the excavator we can supply soil, sand and gravel and take away waste. Full package: excavator + dump truck + material delivery."
      },
      "included": {
        "title": "What’s included",
        "operator": {
          "title": "Experienced operator",
          "description": "A local professional familiar with Samui’s terrain, soil conditions and safe operating methods."
        },
        "inspection": {
          "title": "Equipment inspection",
          "description": "We fully check and service the machine before sending it to your site."
        },
        "flexible": {
          "title": "Flexible rental format",
          "description": "Choose hourly rental, a full-day shift or a fixed-price contract for larger jobs."
        },
        "planning": {
          "title": "Basic site planning",
          "description": "We help determine levels, slopes, drainage and the most efficient workflow."
        },
        "report": {
          "title": "Photo & video updates",
          "description": "We provide progress photos or videos if you are not on site."
        },
        "safety": {
          "title": "Safe work practices",
          "description": "We work carefully around buildings, utilities and landscaping while following safety standards."
        }
      },
      "faq": {
        "title": "Excavator Rental FAQ",
        "q1": {
          "question": "Is the operator included?",
          "answer": "Yes. All excavators are rented only with our operator to ensure safety and quality."
        },
        "q2": {
          "question": "Is fuel included?",
          "answer": "Yes, all fuel is included in the rental price."
        },
        "q3": {
          "question": "How do you assess and organize the work?",
          "answer": "You send us photos and a short description or we visit your site. We check access, clarify the scope and provide a free estimate. We calculate how much soil needs to be removed or delivered, agree on timing and arrive exactly as scheduled."
        },
        "q4": {
          "question": "What rental options do you offer?",
          "answer": "Hourly rental, full-day shifts or fixed-price contracts depending on your project."
        },
        "q5": {
          "question": "How much is transport for the excavator?",
          "answer": "Delivery is free for bookings of 3 hours or more. Otherwise, the fee is 1,000 THB."
        },
        "q6": {
          "question": "What other equipment do you provide?",
          "answer": "We also offer 4-, 6- and 10-wheel trucks for soil delivery, sand, gravel and construction waste removal. We handle land clearing, leveling, grading and full site preparation."
        }
      },
      "photos": {
        "title": "Gallery",
        "bush-removal": {
          "title": "Site clearing and bush removal for land preparation",
          "alt": "Clearing bushes and vegetation, preparing land for construction"
        },
        "construction-foundation": {
          "title": "Foundation preparation and excavation works on site",
          "alt": "Excavation and ground preparation for building foundation"
        },
        "delivery-of-an-excavator": {
          "title": "Excavator delivery to construction site location",
          "alt": "Transport and delivery of excavator to job site"
        },
        "drainage-installation": {
          "title": "Drainage system installation and water management works",
          "alt": "Installing drainage system and managing water flow on site"
        },
        "earthworks": {
          "title": "Excavation and earthworks on construction site",
          "alt": "Excavation works, digging and moving soil with excavator"
        },
        "garbage-collection": {
          "title": "Construction waste collection and debris removal",
          "alt": "Collecting and removing construction waste from site"
        },
        "leveling-construction-site": {
          "title": "Site leveling and grading for construction preparation",
          "alt": "Leveling and grading land before construction works"
        },
        "loading-excavator-onto-truck": {
          "title": "Loading soil into dump truck using excavator",
          "alt": "Excavator loading soil into dump truck for transport"
        },
        "night-work": {
          "title": "Night construction and excavation works on site",
          "alt": "Performing construction and excavation works at night"
        },
        "refueling-excavator": {
          "title": "Refueling excavator and preparing equipment for work",
          "alt": "Refueling construction equipment before starting work"
        },
        "road-construction": {
          "title": "Access road construction and soil filling works",
          "alt": "Building access road and preparing surface for transport"
        },
        "root-removal": {
          "title": "Tree root removal and land clearing works",
          "alt": "Removing tree roots and clearing land for construction"
        },
        "scavengery": {
          "title": "Full site clearing and construction debris removal",
          "alt": "Complete site clearing and waste removal services"
        },
        "sewerage-installation": {
          "title": "Sewer system installation and trenching works",
          "alt": "Installing sewer lines and digging trenches for utilities"
        },
        "transporting-excavator": {
          "title": "Transporting excavator on lowbed trailer between sites",
          "alt": "Heavy equipment transport using trailer to job site"
        }
      }
    }
  },
  "th": {
    "excavator": {
      "seo": {
        "title": "บริการเช่ารถขุด เกาะสมุย | งานดิน ขนดิน และเตรียมพื้นที่",
        "description": "เช่ารถขุดบนเกาะสมุย แบบไม่ฟันราคา ช่วยขุดบ่อ ฟุตติ้ง ร่องวางท่อ เคลียร์พื้นที่ ปรับระดับ ขนดินออก–เอาดินเข้า เตรียมพื้นที่ก่อนสร้างบ้านหรือจัดสวน ทำงานเร็ว ราคาเคลียร์ มีรถและทีมงานของเราเอง",
        "keywords": "เช่ารถขุด เกาะสมุย, งานดิน สมุย, ถมที่ ปรับพื้นที่, ขนดิน เกาะสมุย, รถขุดขนาดเล็ก เกาะสมุย, เตรียมพื้นที่ก่อสร้าง, บริการรถขุด สมุย"
      },
      "hero": {
        "title": "เช่ารถขุดบนเกาะสมุย พร้อมทีมงานมืออาชีพ",
        "description": "รับงานขุด เคลียร์พื้นที่ และขนดินสำหรับบ้าน ถนน ระบบท่อ และงานก่อสร้าง"
      },
      "intro": "เรารับงานดินทุกประเภทบนเกาะสมุย: ขุดบ่อฟุตติ้ง ขุดบ่อบำบัด ขุดร่องวางท่อ เคลียร์พื้นที่ ปรับระดับ ขนดินออก–เอาดินเข้า เตรียมพื้นที่ก่อนก่อสร้างหรือจัดสวน ใช้รถขุดและรถบรรทุกของเราเอง พร้อมคนขับท้องถิ่นที่รู้สภาพพื้นที่และลักษณะดินบนสมุย แค่ส่งรูปและอธิบายงานคร่าว ๆ เราช่วยเลือกขนาดรถ คุยงบให้ชัด และเข้าไปทำงานตามวันที่นัด โดยไม่บานปลายงบกลางทาง",
      "tasks": {
        "title": "งานที่เราทำได้",
        "t1": {
          "title": "ขุดบ่อฟุตติ้ง / ฐานราก",
          "description": "ขุดบ่อฐานราก บ้าน อาคาร สระว่ายน้ำ หรือสิ่งปลูกสร้างอื่น ๆ"
        },
        "t2": {
          "title": "ขุดร่องวางท่อ",
          "description": "ขุดร่องสำหรับท่อน้ำ ไฟฟ้า ระบบระบายน้ำ และท่อบำบัด"
        },
        "t3": {
          "title": "เคลียร์พื้นที่",
          "description": "กำจัดต้นไม้เล็ก ๆ เศษวัสดุ และเตรียมผิวดินก่อนทำงาน"
        },
        "t4": {
          "title": "ขนดินออก",
          "description": "โหลดดิน เศษหิน หรือวัสดุก่อสร้างขึ้นรถและขนออกจากพื้นที่"
        },
        "t5": {
          "title": "เตรียมพื้นที่ฐานราก",
          "description": "ปรับระดับ ทำความลาด และเตรียมพื้นดินก่อนเริ่มสร้างบ้านหรืออาคาร"
        },
        "t6": {
          "title": "ถมดินและปรับระดับ",
          "description": "นำดิน ทราย หินเข้าพื้นที่ และเกลี่ยให้เรียบ"
        }
      },
      "equipment": {
        "title": "รถขุดของเรา",
        "note": "หากยังไม่แน่ใจว่าต้องใช้รถขนาดไหน ส่งรูปพื้นที่มาให้เราช่วยแนะนำได้เลย",
        "prices": {
          "hour": "ประมาณต่อชั่วโมง",
          "day": "ประมาณต่อวัน"
        },
        "items": {
          "pc30": {
            "type": "รถขุดเล็ก 3 ตัน",
            "description": "เหมาะสำหรับงานรอบบ้าน ร่องวางท่อ บ่อบำบัดขนาดเล็ก และปรับระดับพื้นที่เล็ก ๆ เข้าได้ในทางแคบหรือในบ้านที่รถใหญ่เข้าไม่ถึง"
          },
          "cat305": {
            "type": "รถขุดกลาง 5.5 ตัน",
            "description": "เหมาะกับงานเคลียร์พื้นที่ ขุดฟุตติ้ง ขุดสระ ขนดินออก และเตรียมพื้นที่ก่อนสร้างบ้าน ต้องมีทางเข้าหน้างานปกติ เหมาะกับงานส่วนใหญ่บนไซต์ก่อสร้าง"
          },
          "pc128": {
            "type": "รถขุดใหญ่ 12.8 ตัน",
            "description": "สำหรับงานดินปริมาณมาก งานถนน หรือเตรียมพื้นที่โครงการใหญ่ ต้องมีทางเข้าดีและพื้นที่ให้รถหมุนตัว เหมาะกับโปรเจกต์ขนาดใหญ่"
          }
        }
      },
      "packages": {
        "title": "ต้องการรถดั๊มหรือดินทรายเพิ่มไหม?",
        "text": "นอกจากรถขุด เรายังมีรถบรรทุกดั๊ม ขนดิน ทราย หิน และขนเศษวัสดุก่อสร้างให้ครบ จบงานดินแบบครบวงจรในที่เดียว"
      },
      "included": {
        "title": "บริการที่รวมให้แล้ว",
        "operator": {
          "title": "คนขับมืออาชีพ",
          "description": "รู้พื้นที่สมุยดี เข้าใจลักษณะดิน และวิธีทำงานที่ปลอดภัย"
        },
        "inspection": {
          "title": "ตรวจเช็คสภาพรถก่อนเข้าพื้นที่",
          "description": "ตรวจระบบ จุดหล่อลื่น และส่วนสำคัญต่าง ๆ ให้พร้อมใช้งาน"
        },
        "flexible": {
          "title": "เลือกรูปแบบการเช่าได้",
          "description": "มีทั้งรายชั่วโมง รายวัน หรือเหมางานตามลักษณะงานของลูกค้า"
        },
        "planning": {
          "title": "ให้คำแนะนำหน้างานเบื้องต้น",
          "description": "ช่วยดูระดับดิน ความลาดเอียง การระบายน้ำ และลำดับการทำงานที่เหมาะสม"
        },
        "report": {
          "title": "อัปเดตภาพและวิดีโอระหว่างทำงาน",
          "description": "ลูกค้าดูความคืบหน้าได้ แม้ไม่ได้อยู่ในพื้นที่"
        },
        "safety": {
          "title": "ปลอดภัยในไซต์งาน",
          "description": "ทำงานอย่างระมัดระวังใกล้อาคาร ระบบท่อ และสาธารณูปโภค"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อยเกี่ยวกับการเช่ารถขุด",
        "q1": {
          "question": "ราคารวมคนขับหรือไม่?",
          "answer": "รวมแล้ว รถขุดของเราทุกคันให้บริการพร้อมคนขับเท่านั้น เพื่อความปลอดภัยและคุณภาพงาน"
        },
        "q2": {
          "question": "รวมค่าน้ำมันหรือไม่?",
          "answer": "รวมแล้ว ไม่มีค่าใช้จ่ายเพิ่มเติม"
        },
        "q3": {
          "question": "ขั้นตอนการประเมินงานทำอย่างไร?",
          "answer": "ส่งรูปและรายละเอียดงาน หรือให้เราเข้าไปดูพื้นที่ ตรวจทางเข้า อธิบายขั้นตอน และประเมินปริมาณงานให้ฟรี พร้อมคำนวณดินที่ต้องขนเข้า–ออก และนัดวันทำงานตามเวลาที่ลูกค้าสะดวก"
        },
        "q4": {
          "question": "มีรูปแบบคิดราคาแบบไหนบ้าง?",
          "answer": "คิดรายชั่วโมง รายวัน หรือแบบเหมางาน ขึ้นอยู่กับงานของลูกค้า"
        },
        "q5": {
          "question": "ค่าขนส่งรถขุดเท่าไหร่?",
          "answer": "ฟรีเมื่อเช่า 3 ชั่วโมงขึ้นไป น้อยกว่านั้นคิด 1,000 บาท"
        },
        "q6": {
          "question": "มีบริการอื่นนอกจากรถขุดหรือไม่?",
          "answer": "มีบริการรถบรรทุก 4, 6 และ 10 ล้อ สำหรับขนดิน ส่งดิน ทราย หิน และขนเศษวัสดุก่อสร้าง รวมถึงเคลียร์พื้นที่ ปรับระดับ และเตรียมไซต์งานก่อนก่อสร้าง"
        }
      },
      "photos": {
        "title": "แกลเลอรี",
        "bush-removal": {
          "title": "เคลียร์พื้นที่ ตัดพุ่มไม้ และเตรียมที่ดินก่อนก่อสร้าง",
          "alt": "กำจัดพุ่มไม้และวัชพืช พร้อมเตรียมพื้นที่สำหรับงานก่อสร้าง"
        },
        "construction-foundation": {
          "title": "เตรียมฐานรากและงานขุดดินสำหรับงานก่อสร้าง",
          "alt": "งานขุดดินและเตรียมพื้นที่สำหรับฐานรากอาคาร"
        },
        "delivery-of-an-excavator": {
          "title": "ขนส่งรถขุดไปยังหน้างานก่อสร้าง",
          "alt": "บริการขนส่งและส่งมอบรถขุดไปยังไซต์งาน"
        },
        "drainage-installation": {
          "title": "ติดตั้งระบบระบายน้ำและจัดการน้ำในพื้นที่",
          "alt": "ติดตั้งระบบระบายน้ำและควบคุมการไหลของน้ำ"
        },
        "earthworks": {
          "title": "งานขุดดินและปรับพื้นที่ด้วยรถขุด",
          "alt": "งานขุด เคลื่อนย้ายดิน และปรับพื้นที่ด้วยรถขุด"
        },
        "garbage-collection": {
          "title": "เก็บและขนย้ายเศษวัสดุก่อสร้างออกจากพื้นที่",
          "alt": "เก็บและขนย้ายขยะและเศษวัสดุก่อสร้าง"
        },
        "leveling-construction-site": {
          "title": "ปรับระดับพื้นที่และเตรียมไซต์สำหรับการก่อสร้าง",
          "alt": "ปรับระดับดินและเตรียมพื้นที่ก่อนเริ่มงานก่อสร้าง"
        },
        "loading-excavator-onto-truck": {
          "title": "ตักดินขึ้นรถบรรทุกด้วยรถขุด",
          "alt": "ใช้รถขุดตักดินขึ้นรถบรรทุกเพื่อขนย้าย"
        },
        "night-work": {
          "title": "งานก่อสร้างและขุดดินในช่วงเวลากลางคืน",
          "alt": "ดำเนินงานก่อสร้างและขุดดินในเวลากลางคืน"
        },
        "refueling-excavator": {
          "title": "เติมน้ำมันรถขุดและเตรียมเครื่องจักรก่อนทำงาน",
          "alt": "เติมน้ำมันและเตรียมอุปกรณ์ก่อนเริ่มงาน"
        },
        "road-construction": {
          "title": "ก่อสร้างถนนทางเข้าและถมดินปรับพื้น",
          "alt": "สร้างถนนทางเข้าและเตรียมพื้นผิวสำหรับการใช้งาน"
        },
        "root-removal": {
          "title": "ขุดและกำจัดรากไม้ พร้อมเคลียร์พื้นที่",
          "alt": "กำจัดรากไม้และเคลียร์พื้นที่เพื่อเตรียมก่อสร้าง"
        },
        "scavengery": {
          "title": "เคลียร์พื้นที่ทั้งหมดและขนย้ายขยะออกจากไซต์",
          "alt": "บริการเคลียร์พื้นที่และขนย้ายเศษวัสดุ"
        },
        "sewerage-installation": {
          "title": "ติดตั้งระบบท่อระบายน้ำและขุดร่องสำหรับสาธารณูปโภค",
          "alt": "วางท่อระบายน้ำและขุดร่องสำหรับระบบสาธารณูปโภค"
        },
        "transporting-excavator": {
          "title": "ขนย้ายรถขุดด้วยรถเทรลเลอร์ระหว่างไซต์งาน",
          "alt": "ขนส่งเครื่องจักรหนักไปยังหน้างานด้วยรถเทรลเลอร์"
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
      imageSrc="/images/services/excavators/hero.webp"
      page="services/excavator"
    />

    <ServiceIntro :text="t('excavator.intro')" />

    <ServiceIncluded
      :title="tasksTitle"
      :items="tasksItems"
    />

    <ServiceEquipment
      :title="equipmentTitle"
      :note="equipmentNote"
      :items="equipmentItems"
      page="services/excavator"
    />

    <UAlert
      :title="t('excavator.packages.title')"
      :description=" t('excavator.packages.text')"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-truck"
    />

    <ServiceIncluded
      :title="includedTitle"
      :items="includedItems"
    />

    <CoreContactsMini
      page="services/excavator"
      location="content"
    />

    <ServiceGallery
      :title="t('excavator.photos.title')"
      :items="photos"
    />

    <CoreFAQ
      :title="faqTitle"
      :items="faqItems"
    />

    <CoreContacts
      page="services/excavator"
      location="bottom"
    />
  </UPage>
</template>
