<script setup lang="ts">
import { PRICING } from '~/constants/pricing';


const { t } = useI18n();

const heroTitle = computed(() => t('excavator.hero.title'));
const heroDescription = computed(() => t('excavator.hero.description'));

const tasksItems = computed(() => [
  {
    icon: 'i-lucide-pickaxe',
    title: t('excavator.tasks.t1.title'),
    description: t('excavator.tasks.t1.description'),
  },
  {
    icon: 'i-lucide-rows-3',
    title: t('excavator.tasks.t2.title'),
    description: t('excavator.tasks.t2.description'),
  },
  {
    icon: 'i-lucide-hammer',
    title: t('excavator.tasks.t3.title'),
    description: t('excavator.tasks.t3.description'),
  },
  {
    icon: 'i-lucide-truck',
    title: t('excavator.tasks.t4.title'),
    description: t('excavator.tasks.t4.description'),
  },
  {
    icon: 'i-lucide-route',
    title: t('excavator.tasks.t5.title'),
    description: t('excavator.tasks.t5.description'),
  },
  {
    icon: 'i-lucide-hard-hat',
    title: t('excavator.tasks.t6.title'),
    description: t('excavator.tasks.t6.description'),
  },
]);

const formatPrice = (value: number) => t('excavator.equipment.prices.thb', { price: value });

const equipmentItems = computed(() => [
  {
    title: 'Komatsu PC30-7',
    image: '/images/equipment/excavators/komatsu-pc30-7.webp',
    subtitle: t('excavator.equipment.items.pc30.type'),
    description: t('excavator.equipment.items.pc30.description'),
    prices: [
      { label: t('excavator.equipment.prices.hour'), value: formatPrice(PRICING.excavators.pc30.hour) },
      { label: t('excavator.equipment.prices.day'), value: formatPrice(PRICING.excavators.pc30.shift) },
    ],
  },
  {
    title: 'Yanmar B32',
    image: '/images/equipment/excavators/yanmar-b32.webp',
    subtitle: t('excavator.equipment.items.b32.type'),
    description: t('excavator.equipment.items.b32.description'),
    prices: [
      { label: t('excavator.equipment.prices.hour'), value: formatPrice(PRICING.excavators.b32.hour) },
      { label: t('excavator.equipment.prices.day'), value: formatPrice(PRICING.excavators.b32.shift) },
    ],
  },
  {
    title: 'Caterpillar 305CR',
    image: '/images/equipment/excavators/cat-305cr.webp',
    subtitle: t('excavator.equipment.items.cat305.type'),
    description: t('excavator.equipment.items.cat305.description'),
    prices: [
      { label: t('excavator.equipment.prices.hour'), value: formatPrice(PRICING.excavators.cat305cr.hour) },
      { label: t('excavator.equipment.prices.day'), value: formatPrice(PRICING.excavators.cat305cr.shift) },
    ],
  },
  {
    title: 'Yanmar ViO70',
    image: '/images/equipment/excavators/yanmar-vio70.webp',
    subtitle: t('excavator.equipment.items.vio70.type'),
    description: t('excavator.equipment.items.vio70.description'),
    prices: [
      { label: t('excavator.equipment.prices.hour'), value: formatPrice(PRICING.excavators.vio70.hour) },
      { label: t('excavator.equipment.prices.day'), value: formatPrice(PRICING.excavators.vio70.shift) },
    ],
  },
  {
    title: 'Komatsu PC128US',
    image: '/images/equipment/excavators/komatsu-pc128us.webp',
    subtitle: t('excavator.equipment.items.pc128.type'),
    description: t('excavator.equipment.items.pc128.description'),
    prices: [
      { label: t('excavator.equipment.prices.hour'), value: formatPrice(PRICING.excavators.pc128.hour) },
      { label: t('excavator.equipment.prices.day'), value: formatPrice(PRICING.excavators.pc128.shift) },
    ],
  },
]);

const includedItems = computed(() => [
  {
    icon: 'i-heroicons-clock',
    title: t('excavator.included.flexible.title'),
    description: t('excavator.included.flexible.description'),
  },
  {
    icon: 'i-heroicons-map',
    title: t('excavator.included.machine.title'),
    description: t('excavator.included.machine.description'),
  },
  {
    icon: 'i-heroicons-camera',
    title: t('excavator.included.report.title'),
    description: t('excavator.included.report.description'),
  },
]);


const localeRoute = useLocaleRoute();

const relatedServices = computed(() => [
  {
    icon: 'i-lucide-land-plot',
    title: t('excavator.related.earthworks.title'),
    description: t('excavator.related.earthworks.description'),
    to: localeRoute({ name: 'services-earthworks' }),
  },
  {
    icon: 'i-lucide-truck',
    title: t('excavator.related.truck.title'),
    description: t('excavator.related.truck.description'),
    to: localeRoute({ name: 'services-truck' }),
  },
]);

const faqItems = computed(() => [
  { question: t('excavator.faq.q1.question'), answer: t('excavator.faq.q1.answer') },
  { question: t('excavator.faq.q2.question'), answer: t('excavator.faq.q2.answer') },
  { question: t('excavator.faq.q3.question'), answer: t('excavator.faq.q3.answer') },
  { question: t('excavator.faq.q4.question'), answer: t('excavator.faq.q4.answer') },
  { question: t('excavator.faq.q5.question'), answer: t('excavator.faq.q5.answer') },
  { question: t('excavator.faq.q6.question'), answer: t('excavator.faq.q6.answer') },
  { question: t('excavator.faq.q7.question'), answer: t('excavator.faq.q7.answer') },
]);

const photos = computed(() => {
  const order = [
    'construction-foundation',
    'sewerage-installation',
    'loading-excavator-onto-truck',
    'delivery-of-an-excavator',
    'transporting-excavator',
    'refueling-excavator',
    'night-work',
  ];

  return order.map((key) => ({
    title: t(`excavator.photos.${key}.title`),
    alt: t(`excavator.photos.${key}.alt`),
    src: `/images/services/excavators/photos/${key}.webp`,
  }));
});

const seoBlock = computed(() => ({
  title: t('excavator.seoBlock.title'),
  paragraphs: [
    t('excavator.seoBlock.p1'),
    t('excavator.seoBlock.p2'),
    t('excavator.seoBlock.p3'),
  ],
}));

const serviceTypes = computed(() => [
  t('excavator.schema.serviceTypes.rental'),
  t('excavator.schema.serviceTypes.operator'),
  t('excavator.schema.serviceTypes.foundation'),
  t('excavator.schema.serviceTypes.trenching'),
  t('excavator.schema.serviceTypes.demolition'),
  t('excavator.schema.serviceTypes.loading'),
]);


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
        name: 'Koh Samui, Surat Thani, Thailand',
      },
      serviceType: serviceTypes.value,
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
            areaServed: 'Koh Samui',
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
      { name: 'robots', content: 'index, follow, max-image-preview:large' },

      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '960' },
      { property: 'og:image:height', content: '466' },

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
      "schema": {
        "serviceTypes": {
          "rental": "Аренда экскаватора",
          "operator": "Экскаватор с оператором",
          "foundation": "Копка под фундамент",
          "trenching": "Копка траншей",
          "demolition": "Демонтаж экскаватором",
          "loading": "Погрузка грунта"
        }
      },
      "seo": {
        "title": "Аренда экскаватора на Самуи - Экскаватор с оператором",
        "description": "Аренда экскаватора на Самуи с оператором: копка под фундамент, траншеи, демонтаж, гидромолот, погрузка грунта и работа на стройке. Малые, средние и большие экскаваторы.",
        "keywords": "аренда экскаватора самуи, экскаватор самуи, экскаватор с оператором самуи, мини экскаватор самуи, копка фундамента самуи, копка траншей самуи, гидромолот самуи, демонтаж экскаватором самуи"
      },
      "seoBlock": {
        "title": "Аренда экскаватора на Самуи",
        "p1": "Предоставляем экскаваторы с оператором на Самуи для копки под фундамент, траншей, демонтажа, погрузки грунта и строительных работ. В наличии малые, средние и большие экскаваторы для разных задач.",
        "p2": "Подбираем технику под условия участка: узкий подъезд, плотный грунт, уклон, глубина копки и объём работ. Работаем как на частных участках, так и на строительных объектах.",
        "p3": "Можно заказать экскаватор почасово, на смену или под конкретную задачу. При необходимости добавляем самосвалы для вывоза грунта и доставки материалов."
      },
      "hero": {
        "title": "Аренда экскаватора на Самуи",
        "description": "Экскаваторы с оператором для копки, траншей, демонтажа, гидромолота, погрузки грунта и строительных задач."
      },
      "intro": "Нужен экскаватор на объект? Мы подберём подходящую машину под задачу, подъезд и объём работ. Работаем с котлованами, траншеями, демонтажом, погрузкой грунта, гидромолотом, узкими участками и ежедневными задачами на стройке. Отправьте точку на карте, фото участка и короткое описание - мы быстро скажем, какая техника нужна, сколько это может занять и какой формат выгоднее: почасово, сменой или под задачу.",
      "tasks": {
        "title": "Для каких задач нужен экскаватор",
        "t1": {
          "title": "Копка под фундамент",
          "description": "Копаем котлованы, ямы под опоры, бассейны, технические зоны и другие строительные задачи."
        },
        "t2": {
          "title": "Траншеи",
          "description": "Делаем траншеи под воду, электричество, канализацию, трубы, кабели и дренажные линии."
        },
        "t3": {
          "title": "Демонтаж и гидромолот",
          "description": "Помогаем ломать бетон, старые конструкции, плиты и твёрдые участки, когда нужна техника с гидромолотом."
        },
        "t4": {
          "title": "Погрузка грунта",
          "description": "Загружаем землю, камни, корни, мусор и строительные отходы в самосвалы."
        },
        "t5": {
          "title": "Работа в узких местах",
          "description": "Используем компактные экскаваторы там, где большая техника не проходит или не может развернуться."
        },
        "t6": {
          "title": "Поддержка стройки",
          "description": "Экскаватор для текущих задач на объекте: копка, перемещение материала, погрузка и помощь строителям."
        }
      },
      "equipment": {
        "title": "Наши экскаваторы",
        "note": "Не знаете, какой экскаватор нужен? Отправьте фото участка и задачу - подскажем.",
        "prices": {
          "thb": "{price} бат",
          "hour": "За час",
          "day": "За смену"
        },
        "items": {
          "pc30": {
            "type": "Малый экскаватор",
            "description": "Komatsu PC30 - компактный экскаватор для узких участков, траншей и работы рядом с домами, заборами или коммуникациями."
          },
          "b32": {
            "type": "Малый экскаватор",
            "description": "Yanmar B32 подходит для траншей, дворов, работы возле стен, заборов и участков с ограниченным подъездом."
          },
          "cat305": {
            "type": "Средний экскаватор",
            "description": "Caterpillar 305CR - универсальная машина для копки, траншей, погрузки грунта, небольшого демонтажа и стройки."
          },
          "vio70": {
            "type": "Средне-большой экскаватор",
            "description": "Yanmar ViO70 подходит для глубокой копки, тяжёлого грунта, крупных траншей, погрузки и работы с гидромолотом."
          },
          "pc128": {
            "type": "Большой экскаватор",
            "description": "Komatsu PC128US - мощный экскаватор для больших объёмов, тяжёлой копки и крупных строительных объектов."
          }
        }
      },
      "related": {
        "title": "Может понадобиться дополнительно",
        "earthworks": {
          "title": "Земляные работы под ключ",
          "description": "Если нужно не просто заказать экскаватор, а подготовить участок полностью: расчистка, уровни, дренаж, отсыпка и вывоз."
        },
        "truck": {
          "title": "Самосвалы и вывоз грунта",
          "description": "Если после копки нужно вывезти землю, мусор, камни или привезти грунт, песок и другие материалы."
        }
      },
      "packages": {
        "title": "Нужен самосвал вместе с экскаватором?",
        "text": "Если после копки нужно вывезти грунт, мусор или привезти материалы, мы можем сразу добавить самосвал. Экскаватор и грузовик работают одной командой - быстрее, проще и без лишней координации."
      },
      "included": {
        "title": "Почему с нами удобно",
        "flexible": {
          "title": "Почасово, сменой или под задачу",
          "description": "Подбираем формат под реальную работу, чтобы вы не переплачивали за лишнее время."
        },
        "machine": {
          "title": "Подбираем правильную технику",
          "description": "Не отправляем большой экскаватор туда, где нужен маленький, и не ставим слабую машину на тяжёлую задачу."
        },
        "report": {
          "title": "Понятная коммуникация",
          "description": "Согласовываем объём заранее, объясняем ограничения и можем присылать фото или видео по ходу работ."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "Оператор входит в стоимость?",
          "answer": "Да. Экскаваторы работают только с нашим оператором."
        },
        "q2": {
          "question": "Какой экскаватор мне нужен?",
          "answer": "Зависит от задачи, подъезда, глубины копки, грунта и свободного места на участке. Отправьте фото и описание - подскажем."
        },
        "q3": {
          "question": "Можно заказать экскаватор на несколько часов?",
          "answer": "Да, можно. Минимальные условия зависят от техники, локации и доставки."
        },
        "q4": {
          "question": "Сколько стоит доставка техники?",
          "answer": "Обычно доставка бесплатна от 3 часов работы. Если задача короткая, доставка считается отдельно."
        },
        "q5": {
          "question": "Вы можете вывезти грунт после копки?",
          "answer": "Да. Можем добавить самосвал и организовать вывоз грунта, камней, корней или строительного мусора."
        },
        "q6": {
          "question": "У вас есть экскаватор с гидромолотом?",
          "answer": "Да. Для демонтажа бетона и твёрдых оснований можем использовать Yanmar ViO70 с гидромолотом."
        },
        "q7": {
          "question": "Что нужно для расчёта?",
          "answer": "Точка на карте, 3–5 фото участка и подъезда, короткое описание задачи и желаемые сроки."
        }
      },
      "photos": {
        "title": "Примеры работ экскаватором",
        "construction-foundation": {
          "title": "Копка под фундамент",
          "alt": "Экскаватор копает участок под фундамент на Самуи"
        },
        "sewerage-installation": {
          "title": "Траншеи под коммуникации",
          "alt": "Копка траншеи экскаватором под трубы и коммуникации на Самуи"
        },
        "earthworks": {
          "title": "Работа экскаватора на объекте",
          "alt": "Экскаватор выполняет копку и перемещение грунта на строительном объекте"
        },
        "loading-excavator-onto-truck": {
          "title": "Погрузка грунта",
          "alt": "Экскаватор загружает грунт в самосвал для вывоза"
        },
        "delivery-of-an-excavator": {
          "title": "Доставка экскаватора",
          "alt": "Доставка экскаватора на строительный объект на Самуи"
        },
        "transporting-excavator": {
          "title": "Перевозка техники",
          "alt": "Перевозка экскаватора на трале между объектами"
        },
        "refueling-excavator": {
          "title": "Подготовка техники",
          "alt": "Заправка и подготовка экскаватора перед работой"
        },
        "night-work": {
          "title": "Работа в вечернее время",
          "alt": "Экскаватор работает на объекте в вечернее время"
        }
      }
    }
  },
  "en": {
    "excavator": {
      "schema": {
        "serviceTypes": {
          "rental": "Excavator rental",
          "operator": "Excavator with operator",
          "foundation": "Foundation digging",
          "trenching": "Trenching",
          "demolition": "Excavator demolition",
          "loading": "Soil loading"
        }
      },
      "seo": {
        "title": "Excavator Rental on Koh Samui - Excavator with Operator",
        "description": "Excavator rental on Koh Samui with operator: foundation digging, trenching, demolition, hydraulic breaker work, soil loading and construction site support. Small, medium and large excavators.",
        "keywords": "excavator rental koh samui, excavator koh samui, excavator with operator samui, mini excavator samui, foundation digging samui, trench digging samui, hydraulic breaker samui, excavator demolition samui"
      },
      "seoBlock": {
        "title": "Excavator rental on Koh Samui",
        "p1": "We provide excavator rental on Koh Samui with operator for foundation digging, trenching, demolition, soil loading and construction site work. Available in small, medium and large sizes.",
        "p2": "We choose the right excavator based on site conditions: access, soil type, slope, digging depth and work volume. Suitable for private land and construction projects.",
        "p3": "You can book an excavator hourly, daily or for a specific job. Dump trucks can be added for soil removal and material delivery."
      },
      "hero": {
        "title": "Excavator rental on Koh Samui",
        "description": "Excavators with operator for digging, trenching, demolition, hydraulic breaker work, soil loading and construction site tasks."
      },
      "intro": "Need an excavator on your site? We help choose the right machine for the task, access and work volume. We handle foundation digging, trenching, demolition, soil loading, hydraulic breaker work, tight-access jobs and daily construction site tasks. Send us a map pin, site photos and a short task description - we will recommend the right excavator, estimate the work and suggest the best format: hourly, daily or task-based.",
      "tasks": {
        "title": "What excavators are used for",
        "t1": {
          "title": "Foundation digging",
          "description": "Digging for foundations, pools, technical areas, posts and other construction needs."
        },
        "t2": {
          "title": "Trenching",
          "description": "Trenches for water, electricity, sewer lines, pipes, cables and drainage lines."
        },
        "t3": {
          "title": "Demolition & hydraulic breaker",
          "description": "Breaking concrete, old structures, slabs and hard surfaces when a hydraulic breaker is needed."
        },
        "t4": {
          "title": "Soil loading",
          "description": "Loading soil, rocks, roots, debris and construction waste into dump trucks."
        },
        "t5": {
          "title": "Tight access work",
          "description": "Using compact excavators where large machines cannot enter or turn around."
        },
        "t6": {
          "title": "Construction site support",
          "description": "Excavator work for daily site tasks: digging, moving material, loading and helping the construction team."
        }
      },
      "equipment": {
        "title": "Our excavators",
        "note": "Not sure which excavator you need? Send site photos and task details - we will recommend the right size.",
        "prices": {
          "thb": "{price} THB",
          "hour": "Per hour",
          "day": "Per day"
        },
        "items": {
          "pc30": {
            "type": "Small excavator",
            "description": "Komatsu PC30 is a compact excavator for tight spaces, trenches and work near houses, fences or utilities."
          },
          "b32": {
            "type": "Small excavator",
            "description": "Yanmar B32 is good for trenches, yard work, digging near walls or fences, and sites with limited access."
          },
          "cat305": {
            "type": "Medium excavator",
            "description": "Caterpillar 305CR is a versatile machine for digging, trenching, soil loading, small demolition and site work."
          },
          "vio70": {
            "type": "Medium-large excavator",
            "description": "Yanmar ViO70 is suitable for deeper digging, heavy soil, larger trenches, loading and hydraulic breaker work."
          },
          "pc128": {
            "type": "Large excavator",
            "description": "Komatsu PC128US is a powerful excavator for large volumes, heavy digging and bigger construction sites."
          }
        }
      },
      "related": {
        "title": "You may also need",
        "earthworks": {
          "title": "Full earthworks services",
          "description": "If you need more than an excavator: land clearing, levels, drainage, backfilling and soil removal."
        },
        "truck": {
          "title": "Dump trucks and soil removal",
          "description": "If digging also requires soil removal, debris removal, rock hauling or material delivery."
        }
      },
      "packages": {
        "title": "Need a dump truck with the excavator?",
        "text": "If the job requires soil removal, debris removal or material delivery, we can add a dump truck right away. Excavator and truck work as one team - faster, easier and with less coordination."
      },
      "included": {
        "title": "Why clients work with us",
        "flexible": {
          "title": "Hourly, daily or task-based",
          "description": "We choose the work format based on the real task so you do not overpay for unnecessary time."
        },
        "machine": {
          "title": "Right machine for the job",
          "description": "We do not send a large excavator where a small one is needed, or a weak machine for heavy work."
        },
        "report": {
          "title": "Clear communication",
          "description": "We confirm the scope in advance, explain limitations and can send photo or video updates during the work."
        }
      },
      "faq": {
        "title": "Frequently asked questions",
        "q1": {
          "question": "Is the operator included?",
          "answer": "Yes. All excavators come with our operator."
        },
        "q2": {
          "question": "Which excavator size do I need?",
          "answer": "It depends on the task, access, digging depth, soil condition and available space. Send photos and details - we will advise."
        },
        "q3": {
          "question": "Can I book an excavator for a few hours?",
          "answer": "Yes. Hourly work is possible. Minimum conditions depend on the machine, location and delivery."
        },
        "q4": {
          "question": "How much is machine delivery?",
          "answer": "Delivery is usually free from 3 hours of work. For short jobs, delivery is calculated separately."
        },
        "q5": {
          "question": "Can you remove soil after digging?",
          "answer": "Yes. We can add a dump truck and arrange soil, rocks, roots or construction waste removal."
        },
        "q6": {
          "question": "Do you have an excavator with hydraulic breaker?",
          "answer": "Yes. For concrete demolition and hard surfaces, we can use the Yanmar ViO70 with a hydraulic breaker."
        },
        "q7": {
          "question": "What do you need for a quote?",
          "answer": "A location pin, 3–5 photos of the site and access road, a short task description and your preferred timing."
        }
      },
      "photos": {
        "title": "Excavator work examples",
        "construction-foundation": {
          "title": "Foundation digging",
          "alt": "Excavator digging for foundation work on Koh Samui"
        },
        "sewerage-installation": {
          "title": "Utility trenching",
          "alt": "Excavator digging trench for pipes and utilities on Koh Samui"
        },
        "earthworks": {
          "title": "Excavator working on site",
          "alt": "Excavator digging and moving soil on a construction site"
        },
        "loading-excavator-onto-truck": {
          "title": "Soil loading",
          "alt": "Excavator loading soil into dump truck for removal"
        },
        "delivery-of-an-excavator": {
          "title": "Excavator delivery",
          "alt": "Excavator delivery to construction site on Koh Samui"
        },
        "transporting-excavator": {
          "title": "Machine transport",
          "alt": "Transporting excavator on lowbed trailer between job sites"
        },
        "refueling-excavator": {
          "title": "Machine preparation",
          "alt": "Refueling and preparing excavator before work"
        },
        "night-work": {
          "title": "Evening work",
          "alt": "Excavator working on site in the evening"
        }
      }
    }
  },
  "th": {
    "excavator": {
      "schema": {
        "serviceTypes": {
          "rental": "เช่ารถขุด",
          "operator": "รถขุดพร้อมคนขับ",
          "foundation": "ขุดฐานราก",
          "trenching": "ขุดร่อง",
          "demolition": "งานทุบรื้อด้วยรถขุด",
          "loading": "ตักดินขึ้นรถ"
        }
      },
      "seo": {
        "title": "บริการรถขุดพร้อมคนขับ เกาะสมุย {'|'} ขุดดิน ขุดร่อง ทุบรื้อ",
        "description": "บริการรถขุดพร้อมคนขับบนเกาะสมุย ขุดฐานราก ขุดร่อง ทุบรื้อ ใช้หัวเจาะ ตักดินขึ้นรถ และช่วยงานก่อสร้าง มีรถขุดหลายขนาด",
        "keywords": "เช่ารถขุด สมุย, รถขุด สมุย, รถขุดพร้อมคนขับ สมุย, ขุดดิน สมุย, ขุดฐานราก สมุย, ขุดร่อง สมุย, หัวเจาะ รถขุด สมุย, ทุบคอนกรีต สมุย"
      },
      "seoBlock": {
        "title": "บริการรถขุดพร้อมคนขับ เกาะสมุย",
        "p1":  "ให้บริการรถขุดพร้อมคนขับบนเกาะสมุย สำหรับขุดฐานราก ขุดร่อง ทุบรื้อ ตักดิน และงานก่อสร้าง มีรถขุดหลายขนาดให้เลือกตามลักษณะงาน",
        "p2": "เราช่วยเลือกขนาดรถให้เหมาะกับหน้างาน เช่น ทางเข้าพื้นที่ ดินแข็ง ความลึก และปริมาณงาน เหมาะทั้งบ้านพักอาศัยและโครงการก่อสร้าง",
        "p3": "สามารถเช่าได้ทั้งรายชั่วโมง รายวัน หรือเหมางาน และสามารถเพิ่มรถดั๊มพ์สำหรับขนดินหรือส่งวัสดุได้"
      },
      "hero": {
        "title": "เช่ารถขุดบนเกาะสมุย",
        "description": "รถขุดพร้อมคนขับ สำหรับขุดดิน ขุดร่อง ทุบรื้อ ใช้หัวเจาะ ตักดินขึ้นรถ และช่วยงานก่อสร้าง"
      },
      "intro": "ถ้าคุณต้องการรถขุดสำหรับงานที่ดินหรือหน้างานก่อสร้าง เราช่วยเลือกขนาดรถให้เหมาะกับงานได้ เรารับงานขุดฐานราก ขุดร่อง ทุบรื้อ ตักดินขึ้นรถ งานพื้นที่แคบ งานใช้หัวเจาะ และงานทั่วไปในไซต์ก่อสร้าง ส่งโลเคชัน รูปหน้างาน รูปทางเข้า และรายละเอียดงานสั้น ๆ มาให้เรา เราจะช่วยประเมินว่าควรใช้รถขุดขนาดไหน ใช้เวลากี่ชั่วโมงหรือกี่วัน และควรคิดราคาแบบรายชั่วโมง รายวัน หรือเหมางาน",
      "tasks": {
        "title": "รถขุดของเราใช้ทำงานอะไรได้บ้าง",
        "t1": {
          "title": "ขุดฐานราก",
          "description": "ขุดสำหรับฐานรากบ้าน สระว่ายน้ำ เสา พื้นที่เทคนิค และงานก่อสร้างอื่น ๆ"
        },
        "t2": {
          "title": "ขุดร่อง",
          "description": "ขุดร่องสำหรับท่อน้ำ ไฟฟ้า ท่อน้ำเสีย สายเคเบิล และร่องระบายน้ำ"
        },
        "t3": {
          "title": "ทุบรื้อและหัวเจาะ",
          "description": "ช่วยทุบคอนกรีต พื้นเก่า โครงสร้างเก่า และพื้นที่แข็งที่ต้องใช้หัวเจาะ"
        },
        "t4": {
          "title": "ตักดินขึ้นรถ",
          "description": "ตักดิน หิน รากไม้ เศษวัสดุ และขยะก่อสร้างขึ้นรถดั๊มพ์"
        },
        "t5": {
          "title": "งานพื้นที่แคบ",
          "description": "ใช้รถขุดขนาดเล็กในพื้นที่ที่รถใหญ่เข้าไม่ได้ หรือไม่มีที่ให้กลับตัว"
        },
        "t6": {
          "title": "ช่วยงานก่อสร้าง",
          "description": "ใช้รถขุดช่วยงานประจำในไซต์ เช่น ขุด ย้ายวัสดุ ตักดิน และช่วยทีมช่าง"
        }
      },
      "equipment": {
        "title": "รถขุดของเรา",
        "note": "ไม่แน่ใจว่าต้องใช้รถขุดขนาดไหน? ส่งรูปหน้างานมา เราช่วยแนะนำให้ได้",
        "prices": {
          "thb": "{price} บาท",
          "hour": "ต่อชั่วโมง",
          "day": "ต่อวัน"
        },
        "items": {
          "pc30": {
            "type": "รถขุดขนาดเล็ก",
            "description": "Komatsu PC30 เหมาะกับพื้นที่แคบ ขุดร่อง และงานใกล้บ้าน รั้ว หรือท่อ"
          },
          "b32": {
            "type": "รถขุดขนาดเล็ก",
            "description": "Yanmar B32 เหมาะกับงานขุดร่อง งานในสวน งานใกล้กำแพง รั้ว และพื้นที่ทางเข้าแคบ"
          },
          "cat305": {
            "type": "รถขุดขนาดกลาง",
            "description": "Caterpillar 305CR ใช้ได้กับงานทั่วไป เช่น ขุดดิน ขุดร่อง ตักดิน ทุบรื้อเล็ก และงานก่อสร้าง"
          },
          "vio70": {
            "type": "รถขุดขนาดกลาง-ใหญ่",
            "description": "Yanmar ViO70 เหมาะกับขุดลึก ดินแข็ง ร่องใหญ่ ตักดิน และใช้งานหัวเจาะ"
          },
          "pc128": {
            "type": "รถขุดขนาดใหญ่",
            "description": "Komatsu PC128US เหมาะกับงานปริมาณมาก งานขุดหนัก และไซต์ก่อสร้างขนาดใหญ่"
          }
        }
      },
      "related": {
        "title": "บริการที่อาจต้องใช้เพิ่ม",
        "earthworks": {
          "title": "งานดินแบบครบวงจร",
          "description": "ถ้าต้องการมากกว่ารถขุด เช่น เคลียร์พื้นที่ ปรับระดับ ทำระบายน้ำ ถมดิน และขนดินออก"
        },
        "truck": {
          "title": "รถดั๊มพ์และขนดินออก",
          "description": "ถ้างานขุดต้องขนดิน หิน เศษวัสดุ หรือส่งวัสดุเข้าหน้างาน"
        }
      },
      "packages": {
        "title": "ต้องการรถดั๊มพ์พร้อมรถขุดไหม?",
        "text": "ถ้าขุดแล้วต้องขนดิน เศษวัสดุ หรือส่งวัสดุเข้าหน้างาน เราจัดรถดั๊มพ์ให้พร้อมได้ รถขุดและรถดั๊มพ์ทำงานเป็นทีมเดียวกัน ทำให้งานเร็วขึ้นและประสานงานง่ายขึ้น"
      },
      "included": {
        "title": "ทำไมลูกค้าเลือกเรา",
        "flexible": {
          "title": "คิดราคาได้หลายแบบ",
          "description": "เลือกได้ทั้งรายชั่วโมง รายวัน หรือเหมางาน ตามลักษณะงานจริง"
        },
        "machine": {
          "title": "เลือกขนาดรถให้เหมาะกับงาน",
          "description": "ไม่ใช้รถใหญ่เกินจำเป็น และไม่ใช้รถเล็กกับงานที่หนักเกินไป"
        },
        "report": {
          "title": "คุยงานชัดเจน",
          "description": "ตกลงงานก่อนเริ่ม อธิบายข้อจำกัด และส่งรูปหรือวิดีโอระหว่างงานได้"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "รวมคนขับไหม?",
          "answer": "รวมครับ รถขุดทุกคันมาพร้อมคนขับของเรา"
        },
        "q2": {
          "question": "ต้องใช้รถขุดขนาดไหน?",
          "answer": "ขึ้นอยู่กับงาน ทางเข้า ความลึก ดิน และพื้นที่หน้างาน ส่งรูปกับรายละเอียดมา เราช่วยแนะนำได้"
        },
        "q3": {
          "question": "เช่าแค่ไม่กี่ชั่วโมงได้ไหม?",
          "answer": "ได้ครับ งานรายชั่วโมงทำได้ เงื่อนไขขั้นต่ำขึ้นอยู่กับขนาดรถ พื้นที่ และค่าขนส่ง"
        },
        "q4": {
          "question": "ค่าขนส่งรถเท่าไหร่?",
          "answer": "โดยทั่วไปฟรีเมื่อใช้งานตั้งแต่ 3 ชั่วโมงขึ้นไป ถ้างานสั้น ค่าขนส่งคิดแยก"
        },
        "q5": {
          "question": "ขนดินออกหลังขุดได้ไหม?",
          "answer": "ได้ครับ เราจัดรถดั๊มพ์เพื่อขนดิน หิน รากไม้ หรือเศษวัสดุก่อสร้างออกได้"
        },
        "q6": {
          "question": "มีรถขุดพร้อมหัวเจาะไหม?",
          "answer": "มีครับ สำหรับทุบคอนกรีตหรือพื้นที่แข็ง สามารถใช้ Yanmar ViO70 พร้อมหัวเจาะได้"
        },
        "q7": {
          "question": "ต้องส่งอะไรเพื่อประเมินราคา?",
          "answer": "ส่งโลเคชัน รูปหน้างานและทางเข้า 3–5 รูป รายละเอียดงานสั้น ๆ และช่วงเวลาที่ต้องการ"
        }
      },
      "photos": {
        "title": "ตัวอย่างงานรถขุด",
        "construction-foundation": {
          "title": "ขุดฐานราก",
          "alt": "รถขุดกำลังขุดพื้นที่สำหรับงานฐานรากบนเกาะสมุย"
        },
        "sewerage-installation": {
          "title": "ขุดร่องสำหรับท่อ",
          "alt": "รถขุดกำลังขุดร่องสำหรับท่อและระบบสาธารณูปโภคบนเกาะสมุย"
        },
        "earthworks": {
          "title": "รถขุดทำงานในไซต์",
          "alt": "รถขุดกำลังขุดและเคลื่อนย้ายดินในไซต์ก่อสร้าง"
        },
        "loading-excavator-onto-truck": {
          "title": "ตักดินขึ้นรถ",
          "alt": "รถขุดตักดินขึ้นรถดั๊มพ์เพื่อขนออก"
        },
        "delivery-of-an-excavator": {
          "title": "ส่งรถขุดเข้าหน้างาน",
          "alt": "ขนส่งรถขุดไปยังไซต์งานบนเกาะสมุย"
        },
        "transporting-excavator": {
          "title": "ขนย้ายเครื่องจักร",
          "alt": "ขนย้ายรถขุดด้วยรถเทรลเลอร์ระหว่างหน้างาน"
        },
        "refueling-excavator": {
          "title": "เตรียมเครื่องจักร",
          "alt": "เติมน้ำมันและเตรียมรถขุดก่อนเริ่มงาน"
        },
        "night-work": {
          "title": "งานช่วงเย็น",
          "alt": "รถขุดทำงานในไซต์ช่วงเย็น"
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
      :title="t('excavator.tasks.title')"
      :items="tasksItems"
    />

    <ServiceIncluded
      :title="t('excavator.included.title')"
      :items="includedItems"
    />

    <CoreContactsMini
      page="services/excavator"
      location="content"
    />

    <ServiceEquipment
      :title="t('excavator.equipment.title')"
      :note="t('excavator.equipment.note')"
      :items="equipmentItems"
      page="services/excavator"
    />

    <UAlert
      :title="t('excavator.packages.title')"
      :description="t('excavator.packages.text')"
      variant="soft"
      color="primary"
      icon="i-lucide-truck"
    />

    <ServiceGallery
      :title="t('excavator.photos.title')"
      :items="photos"
    />

    <ServiceRelated
      :title="t('excavator.related.title')"
      :items="relatedServices"
    />

    <ServiceSeoBlock
      :title="seoBlock.title"
      :paragraphs="seoBlock.paragraphs"
    />

    <CoreFAQ
      :title="t('excavator.faq.title')"
      :items="faqItems"
    />

    <CoreContacts
      page="services/excavator"
      location="bottom"
    />
  </UPage>
</template>
