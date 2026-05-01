<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const heroTitle = computed(() => t('earthworks.hero.title'));
const heroDescription = computed(() => t('earthworks.hero.description'));

const valueItems = computed(() => [
  {
    icon: 'i-lucide-land-plot',
    title: t('earthworks.value.v1.title'),
    description: t('earthworks.value.v1.description'),
  },
  {
    icon: 'i-lucide-droplets',
    title: t('earthworks.value.v2.title'),
    description: t('earthworks.value.v2.description'),
  },
  {
    icon: 'i-lucide-truck',
    title: t('earthworks.value.v3.title'),
    description: t('earthworks.value.v3.description'),
  },
]);

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
    icon: 'i-lucide-clipboard-list',
    title: t('earthworks.process.p2.title'),
    description: t('earthworks.process.p2.description'),
  },
  {
    icon: 'i-lucide-calculator',
    title: t('earthworks.process.p3.title'),
    description: t('earthworks.process.p3.description'),
  },
  {
    icon: 'i-lucide-hard-hat',
    title: t('earthworks.process.p4.title'),
    description: t('earthworks.process.p4.description'),
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

const seoBlock = computed(() => ({
  title: t('earthworks.seoBlock.title'),
  paragraphs: [
    t('earthworks.seoBlock.p1'),
    t('earthworks.seoBlock.p2'),
    t('earthworks.seoBlock.p3'),
  ],
}));

const areas = computed(() => [
  t('earthworks.areas.items.chaweng'),
  t('earthworks.areas.items.lamai'),
  t('earthworks.areas.items.maenam'),
  t('earthworks.areas.items.bophut'),
  t('earthworks.areas.items.bangrak'),
  t('earthworks.areas.items.choengmon'),
  t('earthworks.areas.items.plailaem'),
  t('earthworks.areas.items.lipanoi'),
  t('earthworks.areas.items.nathon'),
  t('earthworks.areas.items.talingngam'),
]);

const areasBlock = computed(() => ({
  title: t('earthworks.areas.title'),
  description: [t('earthworks.areas.description')],
  items: areas.value,
}));

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://supermansamui.com/services/earthworks#service',
      name: t('earthworks.schema.name'),
      description: t('earthworks.seo.description'),
      provider: { '@id': 'https://supermansamui.com#business' },
      areaServed: areas.value.map((area) => ({
        '@type': 'Place',
        name: `${area}, Koh Samui`,
      })),
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
            areaServed: 'Koh Samui',
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
        "title": "Земляные работы на Самуи",
        "description": "Подготовка участков под строительство: расчистка, выравнивание, дренаж, отсыпка, экскаваторы, самосвалы и вывоз грунта."
      },
      "intro": "Готовим участки под дома, виллы, дороги и строительные проекты на Самуи. Расчищаем землю, выравниваем площадки, делаем дренаж, завозим грунт, вывозим лишний материал и организуем работу техники. Подбираем экскаваторы, самосвалы и план работ под реальный участок, подъезд, грунт и объём.",
      "value": {
        "title": "Что вы получаете",
        "v1": {
          "title": "Участок готов к следующему этапу",
          "description": "Подготавливаем землю так, чтобы можно было начинать строительство, дорогу, парковку или благоустройство."
        },
        "v2": {
          "title": "Меньше проблем с водой",
          "description": "Продумываем уклоны, дренаж и отвод воды, особенно на низких и влажных участках."
        },
        "v3": {
          "title": "Техника и логистика в одной команде",
          "description": "Экскаваторы, самосвалы, доставка материалов и вывоз грунта работают согласованно."
        }
      },
      "services": {
        "title": "Основные виды земляных работ",
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
          "title": "Подготовка под строительство",
          "description": "Готовим участок под дом, виллу, фундамент, подъездную дорогу или стройплощадку."
        },
        "excavator": {
          "title": "Экскаватор с оператором",
          "description": "Копка, траншеи, погрузка грунта, демонтаж, гидромолот и работа на объекте."
        },
        "truck": {
          "title": "Самосвалы и вывоз грунта",
          "description": "Вывоз земли, камней и мусора, доставка песка, щебня, грунта и перевозка техники."
        },
        "linksText": {
          "prefix": "Мы выполняем",
          "landClearing": "расчистку участка",
          "landLeveling": "выравнивание земли",
          "drainage": "дренажные работы",
          "sitePreparation": "подготовку под строительство",
          "suffix": "и можем подключить экскаваторы и самосвалы под одну задачу."
        }
      },
      "seoBlock": {
        "title": "Подготовка участка под строительство на Самуи",
        "p1": "Земляные работы на Самуи часто требуют не одной машины, а нормального плана: где снимать грунт, куда отводить воду, чем поднимать уровень, сколько рейсов нужно для завоза или вывоза материала и какая техника сможет заехать на участок.",
        "p2": "Мы работаем с участками под дома, виллы, подъездные дороги, парковки, сады и строительные площадки. Можем расчистить землю, убрать корни и мусор, выровнять площадку, сделать отсыпку, организовать дренаж, доставить грунт, песок или щебень и вывезти лишний материал.",
        "p3": "Перед расчётом смотрим подъезд, уклон, тип грунта, воду на участке и объём работ. Это помогает выбрать правильный экскаватор, количество самосвалов и избежать лишних затрат."
      },
      "process": {
        "title": "Как мы работаем",
        "p1": {
          "title": "Оцениваем участок",
          "description": "Смотрим доступ, уклон, воду, грунт, объём работ и подходящую технику."
        },
        "p2": {
          "title": "Составляем план",
          "description": "Определяем порядок работ: расчистка, дренаж, отсыпка, выравнивание, завоз или вывоз."
        },
        "p3": {
          "title": "Считаем стоимость",
          "description": "Даём понятный расчёт по сменам, рейсам, объёму или фиксированной цене."
        },
        "p4": {
          "title": "Выполняем работу",
          "description": "Организуем технику, материалы, вывоз и можем присылать фото/видео прогресса."
        }
      },
      "areas": {
        "title": "Районы работы на Самуи",
        "description": "Работаем по всему острову: частные участки, виллы, стройплощадки, дороги и коммерческие объекты.",
        "items": {
          "chaweng": "Чавенг",
          "lamai": "Ламай",
          "maenam": "Маенам",
          "bophut": "Бопхут",
          "bangrak": "Банграк",
          "choengmon": "Чонг Мон",
          "plailaem": "Плай Лаем",
          "lipanoi": "Липа Ной",
          "nathon": "Натон",
          "talingngam": "Талинг Нгам"
        }
      },
      "pricing": {
        "title": "Быстрый расчёт по участку",
        "text": "Цена зависит от подъезда, рельефа, грунта, объёма работ, количества рейсов, материалов и дренажа. Для расчёта отправьте точку на карте, 3–5 фото участка и короткое описание задачи."
      },
      "cta": {
        "title": "Отправьте фото участка - скажем, с чего начать",
        "text": "Пришлите локацию, 3–5 фото и короткое описание задачи. Мы подскажем, какая техника нужна и какой формат работ будет разумнее."
      },
      "beforeAfter": {
        "title": "Примеры работ до и после",
        "items": {
          "lipanoi": {
            "title": "Снос, отсыпка и выравнивание в Липа Ной",
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
            "title": "Дренаж, отсыпка и выравнивание в Маенаме",
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
          "answer": "Экскаватор - это отдельная техника. Земляные работы - это комплексная подготовка участка с техникой, самосвалами, материалами и вывозом."
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
          "answer": "Да. Отправьте фото и локацию - подскажем, с чего начать и какая техника нужна."
        }
      },
      "photos": {
        "title": "Примеры земляных работ",

        "removal-of-construction-waste": {
          "title": "Вывоз строительного мусора",
          "alt": "Вывоз строительных отходов и лишнего грунта с участка"
        }
      }
    }
  },
  "en": {
    "earthworks": {
      "schema": {
        "name": "Earthworks and site preparation on Koh Samui",
        "serviceTypes": {
          "earthworks": "Earthworks",
          "landClearing": "Land clearing",
          "landLeveling": "Land leveling",
          "drainage": "Drainage works",
          "backfilling": "Backfilling",
          "sitePreparation": "Site preparation",
          "soilRemoval": "Soil and debris removal"
        }
      },
      "seo": {
        "title": "Earthworks on Koh Samui | Site preparation, drainage & land leveling",
        "description": "Earthworks on Koh Samui: land clearing, leveling, drainage, backfilling, site preparation, soil delivery and removal. Excavators and dump trucks.",
        "keywords": "earthworks koh samui, site preparation koh samui, land leveling samui, drainage samui, backfilling samui, land clearing samui, soil delivery samui, soil removal samui, excavator samui, dump truck samui"
      },
      "hero": {
        "title": "Earthworks on Koh Samui",
        "description": "Site preparation for construction: land clearing, leveling, drainage, backfilling, excavators, dump trucks and soil removal."
      },
      "intro": "We prepare land for houses, villas, roads and construction projects on Koh Samui. We clear sites, level ground, install drainage, deliver fill material, remove excess soil and organize machinery work. We choose the right excavators, dump trucks and work plan based on real site conditions, access, soil and project size.",

      "value": {
        "title": "What you get",
        "v1": {
          "title": "Site ready for construction",
          "description": "We prepare the land so you can start building, landscaping, roads or parking without delays."
        },
        "v2": {
          "title": "Less water problems",
          "description": "We plan slopes and drainage properly, especially for low or wet land."
        },
        "v3": {
          "title": "Machines and logistics in one team",
          "description": "Excavators, dump trucks, material delivery and removal are organized together."
        }
      },

      "services": {
        "title": "Main types of earthworks",
        "description": "You can order a specific task or full site preparation.",
        "landClearing": {
          "title": "Land clearing",
          "description": "Removing trees, roots, bushes, debris and old structures."
        },
        "landLeveling": {
          "title": "Land leveling",
          "description": "Creating flat surfaces, slopes and levels for construction."
        },
        "drainage": {
          "title": "Drainage works",
          "description": "Installing trenches, pipes and slopes for water flow."
        },
        "sitePreparation": {
          "title": "Site preparation",
          "description": "Preparing land for houses, villas, roads and foundations."
        },
        "excavator": {
          "title": "Excavator with operator",
          "description": "Digging, trenching, loading, demolition and site work."
        },
        "truck": {
          "title": "Dump trucks & hauling",
          "description": "Soil removal, debris hauling and material delivery."
        },
        "linksText": {
          "prefix": "We handle",
          "landClearing": "land clearing",
          "landLeveling": "land leveling",
          "drainage": "drainage works",
          "sitePreparation": "site preparation",
          "suffix": "and can combine excavators and dump trucks into one workflow."
        }
      },

      "seoBlock": {
        "title": "Site preparation and earthworks on Koh Samui",
        "p1": "Earthworks on Koh Samui usually require more than just a machine. You need a proper plan: where to remove soil, how to manage water, how to raise levels, how many truck loads are needed and what machinery can access the site.",
        "p2": "We work with land for houses, villas, access roads, parking areas, gardens and construction sites. We can clear the land, remove roots and debris, level the ground, do backfilling, organize drainage, deliver soil, sand or gravel and remove excess material.",
        "p3": "Before giving a quote, we check access, slope, soil type, water conditions and work volume. This helps choose the right excavator, number of trucks and avoid unnecessary costs."
      },

      "process": {
        "title": "How we work",
        "p1": {
          "title": "Site evaluation",
          "description": "We check access, slope, soil, water and required machinery."
        },
        "p2": {
          "title": "Work planning",
          "description": "We define the sequence: clearing, drainage, leveling, backfilling and hauling."
        },
        "p3": {
          "title": "Cost estimation",
          "description": "We provide a clear quote based on time, volume or fixed scope."
        },
        "p4": {
          "title": "Execution",
          "description": "We organize machinery, materials and can provide progress updates."
        }
      },

      "areas": {
        "title": "Service areas on Koh Samui",
        "description": "We work across the island: private land, villas, construction sites, roads and commercial projects.",
        "items": {
          "chaweng": "Chaweng",
          "lamai": "Lamai",
          "maenam": "Maenam",
          "bophut": "Bophut",
          "bangrak": "Bangrak",
          "choengmon": "Choeng Mon",
          "plailaem": "Plai Laem",
          "lipanoi": "Lipa Noi",
          "nathon": "Nathon",
          "talingngam": "Taling Ngam"
        }
      },

      "pricing": {
        "title": "Get a quick estimate",
        "text": "The price depends on access, terrain, soil type, work volume, number of truck loads, materials and drainage. Send location, 3–5 photos and a short description."
      },

      "cta": {
        "title": "Send photos of your land - we’ll guide you",
        "text": "Share location, 3–5 photos and a short description. We’ll explain what machinery is needed and how to approach the work."
      },

      "beforeAfter": {
        "title": "Before & after earthworks on Koh Samui",
        "items": {
          "lipanoi": {
            "title": "House demolition and land leveling in Lipa Noi",
            "description": "We demolished an old house, removed trees and palms, cleared debris, delivered fill soil and raised the land level by about 40 cm. The result is a clean and level plot ready for construction.",
            "meta": {
              "service": "Demolition, backfilling, leveling",
              "area": "~400 m²",
              "duration": "5 days",
              "equipment": "Excavator + dump truck",
              "soil": "20 truck loads (~100 m³)",
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
            "description": "The site was wet and uneven. We opened drainage lines, cleared the water path, installed a pipe, removed vegetation and backfilled the area. The land became dry and ready for construction.",
            "meta": {
              "service": "Drainage and earthworks",
              "area": "2 rai (~3200 m²)",
              "duration": "~2 weeks",
              "soil": "200 truck loads (~1000 m³)",
              "equipment": "Excavator + 2 dump trucks + tractor",
              "drainage": "Drainage system installed"
            },
            "pairs": {
              "p1": {
                "beforeAlt": "Wet land before drainage and leveling in Maenam Koh Samui",
                "afterAlt": "Dry and leveled land ready for construction in Maenam Koh Samui"
              },
              "p2": {
                "beforeAlt": "Overgrown and wet area before excavation in Maenam Koh Samui",
                "afterAlt": "Prepared land with drainage and backfilling in Maenam Koh Samui"
              }
            }
          }
        }
      },

      "included": {
        "title": "Why work with us",
        "fixed": {
          "title": "Clear pricing",
          "description": "We agree on format and price before starting."
        },
        "report": {
          "title": "Photo & video updates",
          "description": "We can send progress updates if you’re not on site."
        },
        "safety": {
          "title": "One coordinated team",
          "description": "Excavators, trucks, materials and hauling are handled together."
        }
      },

      "faq": {
        "title": "Frequently asked questions",
        "q1": {
          "question": "Do you provide full earthworks service?",
          "answer": "Yes. We can handle clearing, leveling, drainage, backfilling, material delivery and soil removal."
        },
        "q2": {
          "question": "What is the difference between earthworks and excavator rental?",
          "answer": "Excavator rental is just machinery. Earthworks is a full process including planning, logistics and execution."
        },
        "q3": {
          "question": "What do you need for a quote?",
          "answer": "Location, 3–5 photos, short description, approximate volume and timeline."
        },
        "q4": {
          "question": "Can you install drainage?",
          "answer": "Yes. We create slopes, trenches, pipes and water flow systems when needed."
        },
        "q5": {
          "question": "Do you deliver materials?",
          "answer": "Yes. We can deliver soil, sand and gravel and distribute them on site."
        },
        "q6": {
          "question": "Can you work on difficult land?",
          "answer": "Yes. We evaluate access, slope and conditions and choose the right equipment."
        },
        "q7": {
          "question": "Can I get advice first?",
          "answer": "Yes. Send photos and location - we’ll suggest the best approach."
        }
      },

      "photos": {
        "title": "Earthworks examples",

        "removal-of-construction-waste": {
          "title": "Waste removal",
          "alt": "Removing construction debris and soil"
        }
      }
    }
  },
  "th": {
    "earthworks": {
      "schema": {
        "name": "งานดินและเตรียมพื้นที่บนเกาะสมุย",
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
        "title": "งานดิน เกาะสมุย | ปรับระดับ ถมดิน ระบบระบายน้ำ และเตรียมพื้นที่",
        "description": "บริการงานดินบนเกาะสมุย: เคลียร์พื้นที่ ปรับระดับ ถมดิน ทำระบบระบายน้ำ ขนดินเข้าออก พร้อมรถขุดและรถดั๊มพ์",
        "keywords": "งานดิน สมุย, ปรับระดับที่ดิน สมุย, ถมดิน สมุย, ระบบระบายน้ำ สมุย, เคลียร์ที่ดิน สมุย, รถขุด สมุย, รถดั๊มพ์ สมุย"
      },

      "hero": {
        "title": "งานดินบนเกาะสมุย",
        "description": "เตรียมพื้นที่สำหรับก่อสร้าง: เคลียร์ที่ดิน ปรับระดับ ถมดิน ทำระบายน้ำ พร้อมรถขุดและรถดั๊มพ์"
      },

      "intro": "เรารับงานเตรียมที่ดินสำหรับสร้างบ้าน วิลล่า ถนน และโครงการก่อสร้างบนเกาะสมุย ตั้งแต่เคลียร์พื้นที่ ปรับระดับ ทำระบบระบายน้ำ ถมดิน ขนดินเข้าออก และจัดการเครื่องจักรให้เหมาะกับหน้างานจริง ทั้งทางเข้า ลักษณะดิน และขนาดงาน",

      "value": {
        "title": "สิ่งที่คุณจะได้รับ",
        "v1": {
          "title": "พื้นที่พร้อมเริ่มงานต่อ",
          "description": "เตรียมที่ดินให้พร้อมสำหรับการก่อสร้างหรือใช้งานต่อทันที"
        },
        "v2": {
          "title": "ลดปัญหาน้ำขัง",
          "description": "ออกแบบสโลปและระบบระบายน้ำให้เหมาะกับพื้นที่"
        },
        "v3": {
          "title": "ทำงานเป็นทีมเดียว",
          "description": "รถขุด รถดั๊มพ์ การขนส่ง และการจัดการหน้างานครบในทีมเดียว"
        }
      },

      "services": {
        "title": "ประเภทงานดินหลัก",
        "description": "เลือกทำเป็นงานย่อย หรือทำแบบครบวงจรก็ได้",
        "landClearing": {
          "title": "เคลียร์พื้นที่",
          "description": "กำจัดต้นไม้ รากไม้ วัชพืช และสิ่งก่อสร้างเก่า"
        },
        "landLeveling": {
          "title": "ปรับระดับที่ดิน",
          "description": "ทำพื้นที่ให้เรียบ กำหนดระดับและความลาดเอียง"
        },
        "drainage": {
          "title": "ระบบระบายน้ำ",
          "description": "ขุดร่อง วางท่อ และทำทางน้ำไหล"
        },
        "sitePreparation": {
          "title": "เตรียมพื้นที่ก่อสร้าง",
          "description": "เตรียมพื้นฐานสำหรับบ้าน วิลล่า หรือโครงการ"
        },
        "excavator": {
          "title": "รถขุดพร้อมคนขับ",
          "description": "ขุดดิน ขุดร่อง ทุบรื้อ และงานก่อสร้าง"
        },
        "truck": {
          "title": "รถดั๊มพ์",
          "description": "ขนดิน ขนหิน และขนวัสดุก่อสร้าง"
        },
        "linksText": {
          "prefix": "เรารับงาน",
          "landClearing": "เคลียร์พื้นที่",
          "landLeveling": "ปรับระดับที่ดิน",
          "drainage": "ระบบระบายน้ำ",
          "sitePreparation": "เตรียมพื้นที่ก่อสร้าง",
          "suffix": "และสามารถจัดรถขุดและรถดั๊มพ์ให้ทำงานร่วมกันได้"
        }
      },

      "seoBlock": {
        "title": "งานเตรียมพื้นที่ก่อสร้างบนเกาะสมุย",
        "p1": "งานดินในสมุยต้องมีการวางแผน ไม่ใช่แค่ใช้เครื่องจักร ต้องดูว่าขุดตรงไหน น้ำจะไหลไปทางไหน ต้องถมเท่าไร และใช้รถกี่เที่ยว",
        "p2": "เราทำงานกับที่ดินสำหรับบ้าน วิลล่า ถนน และโครงการก่อสร้าง สามารถเคลียร์พื้นที่ ปรับระดับ ถมดิน ทำระบายน้ำ และขนวัสดุเข้าออกได้",
        "p3": "ก่อนประเมินราคา เราจะดูทางเข้า ลักษณะดิน ความชื้น และปริมาณงาน เพื่อเลือกเครื่องจักรและลดค่าใช้จ่ายที่ไม่จำเป็น"
      },

      "process": {
        "title": "ขั้นตอนการทำงาน",
        "p1": {
          "title": "ดูหน้างาน",
          "description": "ตรวจสอบพื้นที่ ทางเข้า ดิน และน้ำ"
        },
        "p2": {
          "title": "วางแผนงาน",
          "description": "กำหนดลำดับงาน เช่น เคลียร์ ปรับระดับ และระบายน้ำ"
        },
        "p3": {
          "title": "ประเมินราคา",
          "description": "แจ้งราคาชัดเจนตามงานจริง"
        },
        "p4": {
          "title": "เริ่มงาน",
          "description": "จัดเครื่องจักรและเริ่มทำงานตามแผน"
        }
      },

      "areas": {
        "title": "พื้นที่ให้บริการ",
        "description": "ให้บริการทั่วเกาะสมุย",
        "items": {
          "chaweng": "เฉวง",
          "lamai": "ละไม",
          "maenam": "แม่น้ำ",
          "bophut": "บ่อผุด",
          "bangrak": "บางรัก",
          "choengmon": "เชิงมน",
          "plailaem": "ปลายแหลม",
          "lipanoi": "ลิปะน้อย",
          "nathon": "หน้าทอน",
          "talingngam": "ตลิ่งงาม"
        }
      },

      "pricing": {
        "title": "ประเมินราคางาน",
        "text": "ราคาขึ้นอยู่กับพื้นที่ ทางเข้า ปริมาณงาน และวัสดุ ส่งโลเคชันและรูป 3–5 รูป เพื่อประเมินราคา"
      },

      "cta": {
        "title": "ส่งรูปพื้นที่มาให้เราดู",
        "text": "ส่งโลเคชันและรูปหน้างาน เราจะช่วยแนะนำแนวทางและเครื่องจักรที่เหมาะสม"
      },

      "beforeAfter": {
        "title": "ตัวอย่างงานก่อนและหลัง",
        "items": {
          "lipanoi": {
            "title": "รื้อบ้านเก่าและปรับระดับที่ดิน ลิปะน้อย",
            "description": "หน้างานนี้เรารื้อบ้านเก่า ตัดต้นไม้ ขนเศษวัสดุออก ถมดิน และยกระดับพื้นที่ประมาณ 40 ซม. ทำให้พื้นที่พร้อมสำหรับก่อสร้าง",
            "meta": {
              "service": "รื้อถอน ถมดิน ปรับระดับ",
              "area": "~400 ตร.ม.",
              "duration": "5 วัน",
              "equipment": "รถขุด + รถดั๊มพ์",
              "soil": "20 เที่ยว (~100 ลบ.ม.)",
              "level": "+40 ซม."
            },
            "pairs": {
              "p1": {
                "beforeAlt": "บ้านเก่าและพื้นที่รกก่อนทำงาน ลิปะน้อย สมุย",
                "afterAlt": "พื้นที่ที่เคลียร์และปรับเรียบแล้ว ลิปะน้อย สมุย"
              }
            }
          },
          "maenam": {
            "title": "งานระบายน้ำและปรับพื้นที่ แม่น้ำ",
            "description": "พื้นที่เดิมมีน้ำขังและไม่เรียบ เราทำทางระบายน้ำ วางท่อ เคลียร์พื้นที่ และถมดิน ทำให้พื้นที่แห้งและพร้อมใช้งาน",
            "meta": {
              "service": "งานดินและระบบระบายน้ำ",
              "area": "2 ไร่ (~3200 ตร.ม.)",
              "duration": "~2 สัปดาห์",
              "soil": "200 เที่ยว (~1000 ลบ.ม.)",
              "equipment": "รถขุด + รถดั๊มพ์ + รถแทรกเตอร์",
              "drainage": "ระบบระบายน้ำ"
            },
            "pairs": {
              "p1": {
                "beforeAlt": "พื้นที่เปียกก่อนทำระบายน้ำ แม่น้ำ สมุย",
                "afterAlt": "พื้นที่แห้งและเรียบพร้อมใช้งาน แม่น้ำ สมุย"
              },
              "p2": {
                "beforeAlt": "พื้นที่รกก่อนเคลียร์และขุด แม่น้ำ สมุย",
                "afterAlt": "พื้นที่ที่เตรียมเรียบร้อยหลังถมดิน แม่น้ำ สมุย"
              }
            }
          }
        }
      },

      "included": {
        "title": "ทำไมลูกค้าเลือกเรา",
        "fixed": {
          "title": "ราคาชัดเจน",
          "description": "ตกลงราคาก่อนเริ่มงาน"
        },
        "report": {
          "title": "อัปเดตหน้างาน",
          "description": "ส่งรูปและวิดีโอความคืบหน้าได้"
        },
        "safety": {
          "title": "ทีมเดียวจบ",
          "description": "ดูแลตั้งแต่ต้นจนจบในทีมเดียว"
        }
      },

      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "รับงานครบวงจรไหม?",
          "answer": "รับครับ ตั้งแต่เคลียร์ ปรับระดับ ถมดิน และขนดิน"
        },
        "q2": {
          "question": "ต้องส่งอะไรเพื่อประเมินราคา?",
          "answer": "โลเคชัน รูป และรายละเอียดงาน"
        },
        "q3": {
          "question": "ทำระบายน้ำได้ไหม?",
          "answer": "ได้ครับ สามารถออกแบบระบบน้ำได้"
        },
        "q4": {
          "question": "ขนวัสดุได้ไหม?",
          "answer": "ได้ครับ มีรถดั๊มพ์"
        },
        "q5": {
          "question": "ทำงานพื้นที่ยากได้ไหม?",
          "answer": "ได้ครับ ประเมินหน้างานก่อน"
        },
        "q6": {
          "question": "ปรึกษาก่อนได้ไหม?",
          "answer": "ได้ครับ ส่งรูปมาได้เลย"
        },
        "q7": {
          "question": "ใช้เวลากี่วัน?",
          "answer": "ขึ้นอยู่กับขนาดงานและพื้นที่"
        }
      },

      "photos": {
        "title": "ตัวอย่างงาน",

        "removal-of-construction-waste": {
          "title": "ขนเศษวัสดุ",
          "alt": "ขนของออกจากไซต์"
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

    <ServiceIncluded
      :title="t('earthworks.value.title')"
      :items="valueItems"
    />

    <ServiceRelated
      :title="t('earthworks.services.title')"
      :description="t('earthworks.services.description')"
      :items="serviceHubItems"
    />

    <section class="py-10 space-y-6 border-b border-gray-50">
      <p class="text-base leading-7 text-gray-700 dark:text-gray-300">
        {{ t('earthworks.services.linksText.prefix') }}
        <NuxtLink
          :to="localePath({ name: 'services-land-clearing' })"
          class="font-medium text-primary hover:underline"
        >
          {{ t('earthworks.services.linksText.landClearing') }}
        </NuxtLink>
        ,
        <NuxtLink
          :to="localePath({ name: 'services-land-leveling' })"
          class="font-medium text-primary hover:underline"
        >
          {{ t('earthworks.services.linksText.landLeveling') }}
        </NuxtLink>
        ,
        <NuxtLink
          :to="localePath({ name: 'services-drainage' })"
          class="font-medium text-primary hover:underline"
        >
          {{ t('earthworks.services.linksText.drainage') }}
        </NuxtLink>
        ,
        <NuxtLink
          :to="localePath({ name: 'services-site-preparation' })"
          class="font-medium text-primary hover:underline"
        >
          {{ t('earthworks.services.linksText.sitePreparation') }}
        </NuxtLink>
        {{ t('earthworks.services.linksText.suffix') }}
      </p>
    </section>

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

    <UAlert
      :title="t('earthworks.cta.title')"
      :description="t('earthworks.cta.text')"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-camera"
    />

    <ServiceGallery
      :title="t('earthworks.photos.title')"
      :items="photos"
    />

    <ServiceSeoBlock
      :title="areasBlock.title"
      :paragraphs="areasBlock.description"
      :tags="areasBlock.items"
    />


    <ServiceSeoBlock
      :title="seoBlock.title"
      :paragraphs="seoBlock.paragraphs"
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
