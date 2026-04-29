<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();


const heroTitle = computed(() => t('earthworks.hero.title'));
const heroDescription = computed(() => t('earthworks.hero.description'));

const serviceHubItems = computed(() => [
  {
    icon: 'i-lucide-tree-pine',
    title: t('earthworks.services.landClearing.title'),
    description: t('earthworks.services.landClearing.description'),
    to: localePath({ name: 'services-land-clearing' }),
  },
  {
    icon: 'i-lucide-ruler',
    title: t('earthworks.services.landLeveling.title'),
    description: t('earthworks.services.landLeveling.description'),
    to: localePath({ name: 'services-land-leveling' }),
  },
  {
    icon: 'i-lucide-droplets',
    title: t('earthworks.services.drainage.title'),
    description: t('earthworks.services.drainage.description'),
    to: localePath({ name: 'services-drainage' }),
  },
  {
    icon: 'i-lucide-hard-hat',
    title: t('earthworks.services.sitePreparation.title'),
    description: t('earthworks.services.sitePreparation.description'),
    to: localePath({ name: 'services-site-preparation' }),
  },
  {
    icon: 'i-lucide-shovel',
    title: t('earthworks.services.excavator.title'),
    description: t('earthworks.services.excavator.description'),
    to: localePath({ name: 'services-excavator' }),
  },
  {
    icon: 'i-lucide-truck',
    title: t('earthworks.services.truck.title'),
    description: t('earthworks.services.truck.description'),
    to: localePath({ name: 'services-truck' }),
  },
]);

const processItems = computed(() => [
  {
    icon: 'i-lucide-map-pin',
    title: t('earthworks.process.p1.title'),
    description: t('earthworks.process.p1.description'),
  },
  {
    icon: 'i-lucide-calculator',
    title: t('earthworks.process.p2.title'),
    description: t('earthworks.process.p2.description'),
  },
  {
    icon: 'i-lucide-hard-hat',
    title: t('earthworks.process.p3.title'),
    description: t('earthworks.process.p3.description'),
  },
]);

const includedItems = computed(() => [
  {
    icon: 'i-heroicons-currency-dollar',
    title: t('earthworks.included.fixed.title'),
    description: t('earthworks.included.fixed.description'),
  },
  {
    icon: 'i-heroicons-camera',
    title: t('earthworks.included.report.title'),
    description: t('earthworks.included.report.description'),
  },
  {
    icon: 'i-heroicons-shield-check',
    title: t('earthworks.included.safety.title'),
    description: t('earthworks.included.safety.description'),
  },
]);

const faqItems = computed(() => [
  { question: t('earthworks.faq.q1.question'), answer: t('earthworks.faq.q1.answer') },
  { question: t('earthworks.faq.q2.question'), answer: t('earthworks.faq.q2.answer') },
  { question: t('earthworks.faq.q3.question'), answer: t('earthworks.faq.q3.answer') },
  { question: t('earthworks.faq.q4.question'), answer: t('earthworks.faq.q4.answer') },
  { question: t('earthworks.faq.q5.question'), answer: t('earthworks.faq.q5.answer') },
  { question: t('earthworks.faq.q6.question'), answer: t('earthworks.faq.q6.answer') },
  { question: t('earthworks.faq.q7.question'), answer: t('earthworks.faq.q7.answer') },
]);

const photos = computed(() => {
  const order = [
    'house-construction',
    'leveling-construction-site',
    'site-preparation-for-construction',
    'bulldozer-work',
    'preparing-the-access-road',
    'removal-of-construction-waste',
  ];

  return order.map((key) => ({
    title: t(`earthworks.photos.${key}.title`),
    alt: t(`earthworks.photos.${key}.alt`),
    src: `/images/services/earthworks/photos/${key}.webp`,
  }));
});

const beforeAfterItems = computed(() => [
  {
    title: t('earthworks.beforeAfter.items.lipanoi.title'),
    description: t('earthworks.beforeAfter.items.lipanoi.description'),
    meta: [
      { value: t('earthworks.beforeAfter.items.lipanoi.meta.service'), icon: 'i-lucide-shovel' },
      { value: t('earthworks.beforeAfter.items.lipanoi.meta.area'), icon: 'i-lucide-ruler' },
      { value: t('earthworks.beforeAfter.items.lipanoi.meta.duration'), icon: 'i-lucide-clock' },
      { value: t('earthworks.beforeAfter.items.lipanoi.meta.equipment'), icon: 'i-lucide-truck' },
      { value: t('earthworks.beforeAfter.items.lipanoi.meta.soil'), icon: 'i-lucide-mountain' },
      { value: t('earthworks.beforeAfter.items.lipanoi.meta.level'), icon: 'i-lucide-arrow-up' },
    ],
    pairs: [
      {
        beforeImage: '/images/services/earthworks/examples/lipa-noi/before-1.webp',
        afterImage: '/images/services/earthworks/examples/lipa-noi/after-1.webp',
        beforeAlt: t('earthworks.beforeAfter.items.lipanoi.pairs.p1.beforeAlt'),
        afterAlt: t('earthworks.beforeAfter.items.lipanoi.pairs.p1.afterAlt'),
      },
    ],
  },
  {
    title: t('earthworks.beforeAfter.items.maenam.title'),
    description: t('earthworks.beforeAfter.items.maenam.description'),
    meta: [
      { value: t('earthworks.beforeAfter.items.maenam.meta.service'), icon: 'i-lucide-shovel' },
      { value: t('earthworks.beforeAfter.items.maenam.meta.area'), icon: 'i-lucide-ruler' },
      { value: t('earthworks.beforeAfter.items.maenam.meta.duration'), icon: 'i-lucide-clock' },
      { value: t('earthworks.beforeAfter.items.maenam.meta.soil'), icon: 'i-lucide-mountain' },
      { value: t('earthworks.beforeAfter.items.maenam.meta.equipment'), icon: 'i-lucide-truck' },
      { value: t('earthworks.beforeAfter.items.maenam.meta.drainage'), icon: 'i-lucide-waves' },
    ],
    pairs: [
      {
        beforeImage: '/images/services/earthworks/examples/maenam/before-1.webp',
        afterImage: '/images/services/earthworks/examples/maenam/after-1.webp',
        beforeAlt: t('earthworks.beforeAfter.items.maenam.pairs.p1.beforeAlt'),
        afterAlt: t('earthworks.beforeAfter.items.maenam.pairs.p1.afterAlt'),
      },
      {
        beforeImage: '/images/services/earthworks/examples/maenam/before-2.webp',
        afterImage: '/images/services/earthworks/examples/maenam/after-2.webp',
        beforeAlt: t('earthworks.beforeAfter.items.maenam.pairs.p2.beforeAlt'),
        afterAlt: t('earthworks.beforeAfter.items.maenam.pairs.p2.afterAlt'),
      },
    ],
  },
]);

const serviceTypes = computed(() => [
  t('earthworks.schema.serviceTypes.earthworks'),
  t('earthworks.schema.serviceTypes.landClearing'),
  t('earthworks.schema.serviceTypes.landLeveling'),
  t('earthworks.schema.serviceTypes.drainage'),
  t('earthworks.schema.serviceTypes.backfilling'),
  t('earthworks.schema.serviceTypes.sitePreparation'),
  t('earthworks.schema.serviceTypes.soilRemoval'),
]);

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://supermansamui.com/services/earthworks#service',
      name: t('earthworks.schema.name'),
      description: t('earthworks.seo.description'),
      provider: { '@id': 'https://supermansamui.com#business' },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Koh Samui, Surat Thani, Thailand',
      },
      serviceType: serviceTypes.value,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t('earthworks.services.title'),
        itemListElement: serviceHubItems.value.map((item) => ({
          '@type': 'Offer',
          name: item.title,
          description: item.description,
          itemOffered: {
            '@type': 'Service',
            name: item.title,
            description: item.description,
            areaServed: {
              '@type': 'AdministrativeArea',
              name: 'Koh Samui, Surat Thani, Thailand',
            },
          },
        })),
      },
    },
  ],
}));

useHead(() => {
  const title = t('earthworks.seo.title');
  const description = t('earthworks.seo.description');
  const keywords = t('earthworks.seo.keywords');
  const image = 'https://supermansamui.com/images/services/earthworks/hero.webp';

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },

      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '960' },
      { property: 'og:image:height', content: '492' },

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
    "earthworks": {
      "schema": {
        "name": "Земляные работы и подготовка участка на Самуи",
        "serviceTypes": {
          "earthworks": "Земляные работы",
          "landClearing": "Расчистка участка",
          "landLeveling": "Выравнивание участка",
          "drainage": "Дренажные работы",
          "backfilling": "Отсыпка участка",
          "sitePreparation": "Подготовка участка под строительство",
          "soilRemoval": "Вывоз грунта и мусора"
        }
      },
      "seo": {
        "title": "Земляные работы на Самуи | Подготовка участка, дренаж и отсыпка",
        "description": "Земляные работы на Самуи: расчистка участка, выравнивание, дренаж, отсыпка, подготовка под строительство, доставка и вывоз грунта. Экскаваторы и самосвалы.",
        "keywords": "земляные работы самуи, подготовка участка самуи, выравнивание участка самуи, дренаж самуи, отсыпка участка самуи, расчистка участка самуи, доставка грунта самуи, вывоз грунта самуи, экскаватор самуи, самосвал самуи"
      },
      "hero": {
        "title": "Земляные работы на Самуи",
        "description": "Подготовка участков под строительство: расчистка, выравнивание, дренаж, отсыпка, экскаваторы, самосвалы и вывоз грунта."
      },
      "intro": "Готовим участки под дома, виллы, дороги и строительные проекты на Самуи. Расчищаем землю, выравниваем площадки, делаем дренаж, завозим грунт, вывозим лишний материал и организуем работу техники. Подбираем экскаваторы, самосвалы и план работ под реальный участок, подъезд, грунт и объём.",
      "services": {
        "title": "Основные виды земляных работ",
        "description": "Можно заказать отдельную задачу или комплексную подготовку участка под строительство.",
        "landClearing": {
          "title": "Расчистка участка",
          "description": "Убираем кусты, деревья, корни, мусор и старые конструкции перед началом работ."
        },
        "landLeveling": {
          "title": "Выравнивание участка",
          "description": "Формируем уровни, уклоны и ровные площадки под дом, дорогу, парковку или сад."
        },
        "drainage": {
          "title": "Дренаж и отвод воды",
          "description": "Делаем канавы, траншеи, трубы и уклоны, чтобы вода уходила с участка."
        },
        "sitePreparation": {
          "title": "Подготовка под строительство",
          "description": "Готовим участок под дом, виллу, фундамент, подъездную дорогу или стройплощадку."
        },
        "excavator": {
          "title": "Экскаватор с оператором",
          "description": "Копка, траншеи, погрузка грунта, демонтаж, гидромолот и работа на объекте."
        },
        "truck": {
          "title": "Самосвалы и вывоз грунта",
          "description": "Вывоз земли, камней и мусора, доставка песка, щебня, грунта и перевозка техники."
        }
      },
      "process": {
        "title": "Как мы работаем",
        "p1": {
          "title": "Оцениваем участок",
          "description": "Смотрим доступ, уклон, воду, грунт, объём работ и подходящую технику."
        },
        "p2": {
          "title": "Считаем стоимость",
          "description": "Даём понятный расчёт по сменам, рейсам, объёму или фиксированной цене."
        },
        "p3": {
          "title": "Выполняем работу",
          "description": "Организуем технику, материалы, вывоз и можем присылать фото/видео прогресса."
        }
      },
      "pricing": {
        "title": "Быстрый расчёт по участку",
        "text": "Цена зависит от подъезда, рельефа, грунта, объёма работ, количества рейсов, материалов и дренажа. Для расчёта отправьте точку на карте, 3–5 фото участка и короткое описание задачи."
      },
      "beforeAfter": {
        "title": "Примеры работ до и после",
        "items": {
          "lipanoi": {
            "title": "Снос, отсыпка и выравнивание в Липа Ной",
            "description": "Снесли старый дом, убрали деревья и пальмы, вывезли мусор, завезли грунт и подняли уровень участка примерно на 40 см.",
            "meta": {
              "service": "Демонтаж, отсыпка, выравнивание",
              "area": "~400 м²",
              "duration": "5 дней",
              "equipment": "Экскаватор + самосвал",
              "soil": "20 рейсов, около 100 м³",
              "level": "+40 см"
            },
            "pairs": {
              "p1": {
                "beforeAlt": "Старый дом и заросший участок до земляных работ в Липа Ной Самуи",
                "afterAlt": "Расчищенный и выровненный участок после отсыпки в Липа Ной Самуи"
              }
            }
          },
          "maenam": {
            "title": "Дренаж, отсыпка и выравнивание в Маенаме",
            "description": "На влажном участке открыли дренаж, расчистили русло, уложили трубу, убрали растительность и сделали отсыпку.",
            "meta": {
              "service": "Дренаж и земляные работы",
              "area": "2 рай, около 3200 м²",
              "duration": "~2 недели",
              "soil": "200 рейсов, около 1000 м³",
              "equipment": "Экскаватор + 2 самосвала + трактор",
              "drainage": "Дренажная система"
            },
            "pairs": {
              "p1": {
                "beforeAlt": "Влажный участок до дренажа и выравнивания в Маенаме Самуи",
                "afterAlt": "Сухой и выровненный участок под строительство в Маенаме Самуи"
              },
              "p2": {
                "beforeAlt": "Заросший участок до экскавации и расчистки в Маенаме Самуи",
                "afterAlt": "Подготовленный участок с дренажом и отсыпкой в Маенаме Самуи"
              }
            }
          }
        }
      },
      "included": {
        "title": "Почему с нами удобно",
        "fixed": {
          "title": "Понятная стоимость",
          "description": "Согласовываем формат и цену до начала работ: по смене, объёму или под ключ."
        },
        "report": {
          "title": "Фото и видео отчёты",
          "description": "Можем присылать обновления по этапам, если вы не находитесь на объекте."
        },
        "safety": {
          "title": "Одна команда",
          "description": "Экскаваторы, самосвалы, материалы и вывоз можно организовать вместе."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "Вы делаете земляные работы под ключ?",
          "answer": "Да. Можем взять расчистку, выравнивание, дренаж, отсыпку, доставку материалов и вывоз грунта."
        },
        "q2": {
          "question": "Чем земляные работы отличаются от аренды экскаватора?",
          "answer": "Экскаватор — это отдельная техника. Земляные работы — это комплексная подготовка участка с техникой, самосвалами, материалами и вывозом."
        },
        "q3": {
          "question": "Что нужно для расчёта?",
          "answer": "Локация, 3–5 фото участка и подъезда, описание задачи, примерный объём и сроки."
        },
        "q4": {
          "question": "Можно сделать дренаж?",
          "answer": "Да. Делаем уклоны, канавы, траншеи, трубы и линии отвода воды, если это подходит участку."
        },
        "q5": {
          "question": "Вы привозите грунт, песок и щебень?",
          "answer": "Да. Организуем доставку материалов и распределение по участку."
        },
        "q6": {
          "question": "Работаете на сложных участках?",
          "answer": "Да. Сначала оцениваем подъезд, уклон, грунт и подбираем подходящую технику."
        },
        "q7": {
          "question": "Можно сначала просто получить консультацию?",
          "answer": "Да. Отправьте фото и локацию — подскажем, с чего начать и какая техника нужна."
        }
      },
      "photos": {
        "title": "Примеры земляных работ",
        "bulldozer-work": {
          "title": "Планировка участка техникой",
          "alt": "Земляные работы и перемещение грунта на участке на Самуи"
        },
        "leveling-construction-site": {
          "title": "Выравнивание строительной площадки",
          "alt": "Планировка и выравнивание участка перед началом строительства"
        },
        "preparing-the-access-road": {
          "title": "Подготовка подъездной дороги",
          "alt": "Отсыпка и выравнивание подъездной дороги для техники и транспорта"
        },
        "removal-of-construction-waste": {
          "title": "Вывоз строительного мусора",
          "alt": "Вывоз строительных отходов и лишнего грунта с участка"
        },
        "site-preparation-for-construction": {
          "title": "Подготовка участка под стройку",
          "alt": "Комплексная подготовка участка под строительство на Самуи"
        },
        "house-construction": {
          "title": "Подготовка под строительство дома",
          "alt": "Земляные работы под строительство дома или виллы на Самуи"
        }
      }
    }
  },
  "en": {
    "earthworks": {
      "schema": {
        "name": "Earthworks and Site Preparation on Koh Samui",
        "serviceTypes": {
          "earthworks": "Earthworks",
          "landClearing": "Land clearing",
          "landLeveling": "Land leveling",
          "drainage": "Drainage work",
          "backfilling": "Backfilling",
          "sitePreparation": "Site preparation for construction",
          "soilRemoval": "Soil and construction waste removal"
        }
      },
      "seo": {
        "title": "Earthworks on Koh Samui | Site Preparation, Drainage & Backfilling",
        "description": "Earthworks on Koh Samui: land clearing, land leveling, drainage, backfilling, site preparation, soil delivery and soil removal. Excavators and dump trucks available.",
        "keywords": "earthworks koh samui, site preparation koh samui, land leveling koh samui, drainage koh samui, backfilling koh samui, land clearing koh samui, soil delivery samui, soil removal samui, excavator samui, dump truck samui"
      },
      "hero": {
        "title": "Earthworks on Koh Samui",
        "description": "Site preparation for construction: land clearing, leveling, drainage, backfilling, excavators, dump trucks and soil removal."
      },
      "intro": "We prepare land for houses, villas, roads and construction projects on Koh Samui. We clear land, level sites, build drainage, deliver fill soil, remove excess material and organize machinery for the job. We choose excavators, dump trucks and the work plan based on real site access, soil condition, slope and volume.",
      "services": {
        "title": "Main earthworks services",
        "description": "Order one specific task or full land preparation for construction.",
        "landClearing": {
          "title": "Land clearing",
          "description": "Removing vegetation, trees, roots, debris and old structures before work begins."
        },
        "landLeveling": {
          "title": "Land leveling",
          "description": "Shaping levels, slopes and flat areas for a house, road, parking area or garden."
        },
        "drainage": {
          "title": "Drainage and water runoff",
          "description": "Trenches, pipes and slopes to move water away from the land."
        },
        "sitePreparation": {
          "title": "Site preparation",
          "description": "Preparing land for a house, villa, foundation, access road or construction site."
        },
        "excavator": {
          "title": "Excavator with operator",
          "description": "Digging, trenching, soil loading, demolition, hydraulic breaker work and site support."
        },
        "truck": {
          "title": "Dump trucks and soil removal",
          "description": "Soil, rock and waste removal, sand, gravel and fill soil delivery, and equipment transport."
        }
      },
      "process": {
        "title": "How we work",
        "p1": {
          "title": "We check the site",
          "description": "We assess access, slope, water, soil condition, work volume and suitable equipment."
        },
        "p2": {
          "title": "We estimate the cost",
          "description": "We calculate by day, truck trip, work volume or fixed project price."
        },
        "p3": {
          "title": "We do the work",
          "description": "We organize machinery, materials, removal and can send photo or video updates."
        }
      },
      "pricing": {
        "title": "Fast quote for your land",
        "text": "The price depends on access, terrain, soil condition, work volume, truck trips, materials and drainage needs. For a quote, send a map pin, 3–5 photos of the land and a short task description."
      },
      "beforeAfter": {
        "title": "Before and after examples",
        "items": {
          "lipanoi": {
            "title": "Demolition, backfilling and leveling in Lipa Noi",
            "description": "We demolished the old house, removed trees and palms, hauled away debris, brought in fill soil and raised the land by about 40 cm.",
            "meta": {
              "service": "Demolition, backfilling, leveling",
              "area": "~400 m²",
              "duration": "5 days",
              "equipment": "Excavator + dump truck",
              "soil": "20 loads, about 100 m³",
              "level": "+40 cm"
            },
            "pairs": {
              "p1": {
                "beforeAlt": "Old house and overgrown land before earthworks in Lipa Noi Koh Samui",
                "afterAlt": "Cleared and leveled land after backfilling in Lipa Noi Koh Samui"
              }
            }
          },
          "maenam": {
            "title": "Drainage, backfilling and leveling in Maenam",
            "description": "On a wet site, we opened drainage, cleared the water line, installed a pipe, removed vegetation and backfilled the land.",
            "meta": {
              "service": "Drainage and earthworks",
              "area": "2 rai, about 3200 m²",
              "duration": "~2 weeks",
              "soil": "200 loads, about 1000 m³",
              "equipment": "Excavator + 2 dump trucks + tractor",
              "drainage": "Drainage system"
            },
            "pairs": {
              "p1": {
                "beforeAlt": "Wet land before drainage and leveling in Maenam Koh Samui",
                "afterAlt": "Dry and leveled land ready for construction in Maenam Koh Samui"
              },
              "p2": {
                "beforeAlt": "Overgrown land before excavation and clearing in Maenam Koh Samui",
                "afterAlt": "Prepared land with drainage and backfilling in Maenam Koh Samui"
              }
            }
          }
        }
      },
      "included": {
        "title": "Why clients work with us",
        "fixed": {
          "title": "Clear pricing",
          "description": "We agree on the work format and price before starting: by day, volume or full job."
        },
        "report": {
          "title": "Photo and video updates",
          "description": "We can send progress updates if you are not on site."
        },
        "safety": {
          "title": "One team",
          "description": "Excavators, dump trucks, materials and removal can be organized together."
        }
      },
      "faq": {
        "title": "Frequently asked questions",
        "q1": {
          "question": "Do you provide full earthworks?",
          "answer": "Yes. We can handle land clearing, leveling, drainage, backfilling, material delivery and soil removal."
        },
        "q2": {
          "question": "How are earthworks different from excavator rental?",
          "answer": "An excavator is one machine. Earthworks are full land preparation with machinery, dump trucks, materials and removal when needed."
        },
        "q3": {
          "question": "What do you need for a quote?",
          "answer": "Location, 3–5 photos of the land and access road, task description, estimated volume and preferred timing."
        },
        "q4": {
          "question": "Can you build drainage?",
          "answer": "Yes. We can create slopes, ditches, trenches, pipes and water runoff lines when suitable for the site."
        },
        "q5": {
          "question": "Do you deliver soil, sand and gravel?",
          "answer": "Yes. We can organize material delivery and spreading on site."
        },
        "q6": {
          "question": "Can you work on difficult sites?",
          "answer": "Yes. We check access, slope and soil condition first, then choose suitable equipment."
        },
        "q7": {
          "question": "Can I start with a consultation?",
          "answer": "Yes. Send photos and location — we will suggest where to start and what equipment is needed."
        }
      },
      "photos": {
        "title": "Earthworks examples",
        "bulldozer-work": {
          "title": "Site grading with machinery",
          "alt": "Earthworks and soil movement on a land plot in Koh Samui"
        },
        "leveling-construction-site": {
          "title": "Construction site leveling",
          "alt": "Land leveling and grading before construction"
        },
        "preparing-the-access-road": {
          "title": "Access road preparation",
          "alt": "Backfilling and leveling an access road for machinery and vehicles"
        },
        "removal-of-construction-waste": {
          "title": "Construction waste removal",
          "alt": "Construction waste and excess soil removal from a site"
        },
        "site-preparation-for-construction": {
          "title": "Site preparation for construction",
          "alt": "Full site preparation for construction on Koh Samui"
        },
        "house-construction": {
          "title": "Land preparation for house construction",
          "alt": "Earthworks for house or villa construction on Koh Samui"
        }
      }
    }
  },
  "th": {
    "earthworks": {
      "schema": {
        "name": "งานดินและเตรียมพื้นที่ก่อสร้าง เกาะสมุย",
        "serviceTypes": {
          "earthworks": "งานดิน",
          "landClearing": "เคลียร์พื้นที่",
          "landLeveling": "ปรับระดับที่ดิน",
          "drainage": "ระบบระบายน้ำ",
          "backfilling": "ถมดิน",
          "sitePreparation": "เตรียมพื้นที่ก่อสร้าง",
          "soilRemoval": "ขนดินและเศษวัสดุออก"
        }
      },
      "seo": {
        "title": "งานดิน เกาะสมุย | ปรับระดับที่ดิน ถมดิน และระบบระบายน้ำ",
        "description": "บริการงานดินบนเกาะสมุย เคลียร์พื้นที่ ปรับระดับ ถมดิน ทำระบบระบายน้ำ เตรียมพื้นที่ก่อสร้าง ขนดินออก และจัดหาวัสดุ มีรถขุดและรถดั๊มพ์",
        "keywords": "งานดิน สมุย, ปรับระดับที่ดิน สมุย, ถมดิน สมุย, ระบบระบายน้ำ สมุย, เตรียมพื้นที่ก่อสร้าง สมุย, เคลียร์ที่ดิน สมุย, ขนดินออก สมุย, รถขุด สมุย, รถดั๊มพ์ สมุย"
      },
      "hero": {
        "title": "งานดินบนเกาะสมุย",
        "description": "เตรียมพื้นที่สำหรับก่อสร้าง เคลียร์พื้นที่ ปรับระดับ ถมดิน ทำระบบระบายน้ำ พร้อมรถขุดและรถดั๊มพ์"
      },
      "intro": "เรารับงานเตรียมพื้นที่สำหรับสร้างบ้าน วิลล่า ถนน และงานก่อสร้างบนเกาะสมุย เคลียร์ที่ดิน ปรับระดับ ทำสโลป ถมดิน ขนดินออก และจัดการเครื่องจักรให้เหมาะกับหน้างาน เราเลือกขนาดรถขุด จำนวนรถดั๊มพ์ และแผนการทำงานตามสภาพพื้นที่จริง เช่น ทางเข้าหน้างาน ระดับความลาดชัน และสภาพดิน",
      "services": {
        "title": "บริการงานดินหลัก",
        "description": "เลือกทำเฉพาะงาน หรือทำทั้งระบบตั้งแต่ต้นจนจบได้",
        "landClearing": {
          "title": "เคลียร์พื้นที่",
          "description": "ตัดต้นไม้ กำจัดรากไม้ พืชรก สิ่งปลูกสร้างเก่า และเศษวัสดุ"
        },
        "landLeveling": {
          "title": "ปรับระดับที่ดิน",
          "description": "ปรับพื้นที่ให้เรียบ ทำระดับ สโลป และพื้นที่สำหรับบ้าน ถนน หรือสวน"
        },
        "drainage": {
          "title": "ระบบระบายน้ำ",
          "description": "ทำร่องน้ำ ท่อ และสโลปเพื่อให้น้ำไหลออกจากพื้นที่ได้ดี"
        },
        "sitePreparation": {
          "title": "เตรียมพื้นที่ก่อสร้าง",
          "description": "เตรียมที่ดินสำหรับบ้าน วิลล่า ถนน หรือหน้างานก่อสร้าง"
        },
        "excavator": {
          "title": "รถขุดพร้อมคนขับ",
          "description": "ขุดดิน ขุดร่อง ทุบรื้อ ตักดิน และช่วยงานในไซต์"
        },
        "truck": {
          "title": "รถดั๊มพ์และขนดินออก",
          "description": "ขนดิน หิน เศษวัสดุ และส่งทราย หิน ดินถมเข้าหน้างาน"
        }
      },
      "process": {
        "title": "ขั้นตอนการทำงาน",
        "p1": {
          "title": "ประเมินหน้างาน",
          "description": "ดูทางเข้า ระดับพื้นที่ น้ำ ดิน และปริมาณงาน"
        },
        "p2": {
          "title": "เสนอราคา",
          "description": "คำนวณตามวัน ปริมาณงาน หรือเหมารวม"
        },
        "p3": {
          "title": "เริ่มงาน",
          "description": "จัดเครื่องจักร วัสดุ และสามารถส่งรูปอัปเดตระหว่างงานได้"
        }
      },
      "pricing": {
        "title": "ประเมินราคางานดิน",
        "text": "ราคาขึ้นอยู่กับทางเข้า สภาพพื้นที่ ดิน ปริมาณงาน จำนวนเที่ยวรถ และความจำเป็นของระบบระบายน้ำ หากต้องการราคา ส่งโลเคชันและรูปพื้นที่มาให้เราประเมินได้"
      },
      "beforeAfter": {
        "title": "ตัวอย่างงานก่อนและหลัง",
        "items": {
          "lipanoi": {
            "title": "รื้อบ้าน ถมดิน และปรับระดับที่ลิปะน้อย",
            "description": "รื้อบ้านเก่า ตัดต้นไม้ ขนเศษวัสดุออก ถมดิน และยกระดับพื้นที่ประมาณ 40 ซม.",
            "meta": {
              "service": "รื้อถอน ถมดิน ปรับระดับ",
              "area": "~400 ตร.ม.",
              "duration": "5 วัน",
              "equipment": "รถขุด + รถดั๊มพ์",
              "soil": "20 เที่ยว ประมาณ 100 ลบ.ม.",
              "level": "+40 ซม."
            },
            "pairs": {
              "p1": {
                "beforeAlt": "พื้นที่ก่อนทำงานที่ลิปะน้อย เกาะสมุย",
                "afterAlt": "พื้นที่หลังปรับระดับและถมดินที่ลิปะน้อย เกาะสมุย"
              }
            }
          },
          "maenam": {
            "title": "ระบบระบายน้ำและปรับพื้นที่ที่แม่น้ำ",
            "description": "พื้นที่มีน้ำขัง เราทำระบบระบายน้ำ เคลียร์พื้นที่ และถมดินให้พร้อมก่อสร้าง",
            "meta": {
              "service": "งานดินและระบบระบายน้ำ",
              "area": "2 ไร่",
              "duration": "~2 สัปดาห์",
              "soil": "200 เที่ยว ประมาณ 1000 ลบ.ม.",
              "equipment": "รถขุด + รถดั๊มพ์ + แทรกเตอร์",
              "drainage": "ระบบระบายน้ำ"
            },
            "pairs": {
              "p1": {
                "beforeAlt": "พื้นที่มีน้ำขังก่อนทำงานที่แม่น้ำ สมุย",
                "afterAlt": "พื้นที่แห้งและปรับระดับแล้วที่แม่น้ำ สมุย"
              },
              "p2": {
                "beforeAlt": "พื้นที่รกก่อนเคลียร์และขุดดิน",
                "afterAlt": "พื้นที่พร้อมก่อสร้างหลังทำงานดิน"
              }
            }
          }
        }
      },
      "included": {
        "title": "ข้อดีของเรา",
        "fixed": {
          "title": "ราคาเข้าใจง่าย",
          "description": "ตกลงราคาก่อนเริ่มงาน ไม่มีค่าใช้จ่ายแฝง"
        },
        "report": {
          "title": "อัปเดตงานได้",
          "description": "สามารถส่งรูปหรือวิดีโอระหว่างทำงานได้"
        },
        "safety": {
          "title": "จัดการครบ",
          "description": "รวมรถขุด รถดั๊มพ์ วัสดุ และการขนออกในทีมเดียว"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "รับงานดินครบวงจรไหม?",
          "answer": "รับครับ ตั้งแต่เคลียร์พื้นที่ ปรับระดับ ทำระบายน้ำ ถมดิน และขนดินออก"
        },
        "q2": {
          "question": "ต่างจากเช่ารถขุดยังไง?",
          "answer": "งานดินคือทำทั้งระบบ ไม่ใช่แค่เช่ารถขุด แต่รวมเครื่องจักร รถดั๊มพ์ และวัสดุ"
        },
        "q3": {
          "question": "ต้องส่งอะไรเพื่อประเมินราคา?",
          "answer": "ส่งโลเคชัน รูปพื้นที่ และรายละเอียดงานคร่าว ๆ"
        },
        "q4": {
          "question": "ทำระบบระบายน้ำได้ไหม?",
          "answer": "ได้ เราทำสโลป ร่องน้ำ และท่อระบายน้ำตามความเหมาะสมของพื้นที่"
        },
        "q5": {
          "question": "มีวัสดุขายไหม?",
          "answer": "มี เราจัดส่งดิน ทราย และหิน พร้อมเกลี่ยในพื้นที่"
        },
        "q6": {
          "question": "ทำงานในพื้นที่ยากได้ไหม?",
          "answer": "ได้ เราประเมินก่อนและเลือกเครื่องจักรให้เหมาะสม"
        },
        "q7": {
          "question": "ปรึกษาก่อนได้ไหม?",
          "answer": "ได้ ส่งรูปและโลเคชันมา เราช่วยแนะนำได้"
        }
      },
      "photos": {
        "title": "ตัวอย่างงาน",
        "bulldozer-work": {
          "title": "งานปรับพื้นที่",
          "alt": "งานดินและเคลื่อนย้ายดินบนเกาะสมุย"
        },
        "leveling-construction-site": {
          "title": "ปรับระดับก่อนก่อสร้าง",
          "alt": "ปรับระดับพื้นที่ก่อนเริ่มก่อสร้าง"
        },
        "preparing-the-access-road": {
          "title": "ทำถนนทางเข้า",
          "alt": "ถมดินและปรับระดับถนนทางเข้า"
        },
        "removal-of-construction-waste": {
          "title": "ขนเศษวัสดุออก",
          "alt": "ขนเศษวัสดุและดินออกจากพื้นที่"
        },
        "site-preparation-for-construction": {
          "title": "เตรียมพื้นที่ก่อสร้าง",
          "alt": "เตรียมพื้นที่สำหรับก่อสร้างบ้านหรือวิลล่า"
        },
        "house-construction": {
          "title": "เตรียมพื้นที่สร้างบ้าน",
          "alt": "งานดินสำหรับการสร้างบ้านบนเกาะสมุย"
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
      imageSrc="/images/services/earthworks/hero.webp"
      page="services/earthworks"
    />

    <ServiceIntro :text="t('earthworks.intro')" />

    <ServiceRelated
      :title="t('earthworks.services.title')"
      :description="t('earthworks.services.description')"
      :items="serviceHubItems"
    />

    <CoreContactsMini
      page="services/earthworks"
      location="content"
    />

    <ServiceBeforeAfter
      :title="t('earthworks.beforeAfter.title')"
      :items="beforeAfterItems"
    />

    <ServiceIncluded
      :title="t('earthworks.process.title')"
      :items="processItems"
    />

    <ServiceIncluded
      :title="t('earthworks.included.title')"
      :items="includedItems"
    />

    <UAlert
      :title="t('earthworks.pricing.title')"
      :description="t('earthworks.pricing.text')"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-calculator"
    />

    <ServiceGallery
      :title="t('earthworks.photos.title')"
      :items="photos"
    />

    <CoreFAQ
      :title="t('earthworks.faq.title')"
      :items="faqItems"
    />

    <CoreContacts
      page="services/earthworks"
      location="bottom"
    />
  </UPage>
</template>
