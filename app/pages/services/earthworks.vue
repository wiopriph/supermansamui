<script setup lang="ts">
const { t } = useI18n();

const heroTitle = computed(() => t('earthworks.hero.title'));
const heroDescription = computed(() => t('earthworks.hero.description'));

const tasksTitle = computed(() => t('earthworks.tasks.title'));
const tasksItems = computed(() => [
  {
    icon: 'i-lucide-shovel',
    title: t('earthworks.tasks.t1.title'),
    description: t('earthworks.tasks.t1.description'),
  },
  {
    icon: 'i-lucide-ruler',
    title: t('earthworks.tasks.t2.title'),
    description: t('earthworks.tasks.t2.description'),
  },
  {
    icon: 'i-lucide-layers',
    title: t('earthworks.tasks.t3.title'),
    description: t('earthworks.tasks.t3.description'),
  },
  {
    icon: 'i-lucide-hard-hat',
    title: t('earthworks.tasks.t4.title'),
    description: t('earthworks.tasks.t4.description'),
  },
  {
    icon: 'i-lucide-droplets',
    title: t('earthworks.tasks.t5.title'),
    description: t('earthworks.tasks.t5.description'),
  },
  {
    icon: 'i-lucide-truck',
    title: t('earthworks.tasks.t6.title'),
    description: t('earthworks.tasks.t6.description'),
  },
]);

const pricingTitle = computed(() => t('earthworks.pricing.title'));
const pricingText = computed(() => t('earthworks.pricing.text'));

const includedTitle = computed(() => t('earthworks.included.title'));
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

const faqTitle = computed(() => t('earthworks.faq.title'));
const faqItems = computed(() => [
  { question: t('earthworks.faq.q1.question'), answer: t('earthworks.faq.q1.answer') },
  { question: t('earthworks.faq.q2.question'), answer: t('earthworks.faq.q2.answer') },
  { question: t('earthworks.faq.q3.question'), answer: t('earthworks.faq.q3.answer') },
  { question: t('earthworks.faq.q4.question'), answer: t('earthworks.faq.q4.answer') },
  { question: t('earthworks.faq.q5.question'), answer: t('earthworks.faq.q5.answer') },
  { question: t('earthworks.faq.q6.question'), answer: t('earthworks.faq.q6.answer') },
]);

const photos = computed(() => {
  const order = [
    'digging-the-foundation',
    'leveling-construction-site',
    'bulldozer-work',
    'root-removal',
    'house-demolition',
    'digging-holes-for-the-foundation',
    'mini-excavation-work',
    'preparing-the-access-road',
    'removal-of-construction-waste',
    'site-preparation-for-construction',
    'house-construction',
    'tree-removal',
  ];

  return order.map((key) => ({
    title: t(`earthworks.photos.${key}.title`),
    alt: t(`earthworks.photos.${key}.alt`),
    src: `/images/services/earthworks/photos/${key}.webp`,
  }));
});


const beforeAfterTitle = computed(() => t('earthworks.beforeAfter.title'));

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

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://supermansamui.com/services/earthworks#service',
      name: t('earthworks.seo.title'),
      description: t('earthworks.seo.description'),
      provider: { '@id': 'https://supermansamui.com#business' },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Ko Samui, Surat Thani, Thailand',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t('earthworks.tasks.title'),
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
      "seo": {
        "title": "Земляные работы на Самуи | Выравнивание участка, дренаж, отсыпка и подготовка",
        "description": "Земляные работы на Самуи для строительства дома, виллы или дороги: расчистка участка, выравнивание, экскавация, дренаж, отсыпка, доставка грунта и подготовка площадки. Свои экскаваторы и самосвалы, понятная смета до начала работ.",
        "keywords": "земляные работы самуи, выравнивание участка самуи, экскавация самуи, дренаж самуи, отсыпка участка самуи, подготовка участка под строительство самуи, расчистка участка самуи, доставка грунта самуи, самосвал самуи, экскаватор самуи"
      },
      "hero": {
        "title": "Земляные работы, выравнивание и подготовка участка на Самуи",
        "description": "Расчистка участка, экскавация, выравнивание, дренаж, отсыпка, вывоз грунта и подготовка площадки под строительство на Самуи."
      },
      "intro": "Нужно подготовить участок под дом, виллу, подъездную дорогу, дренаж или благоустройство? Мы выполняем земляные работы на Самуи под ключ: расчистка территории, экскавация, планировка, выравнивание, отсыпка, вывоз грунта, устройство уклонов и дренажа, подготовка площадки под строительство. Работаем своей техникой — экскаваторами и самосвалами, поэтому быстрее выходим на объект, проще решаем логистику и даём один понятный результат от осмотра участка до финальной планировки.",
      "tasks": {
        "title": "Какие земляные работы мы выполняем на Самуи",
        "t1": {
          "title": "Расчистка участка",
          "description": "Убираем кусты, деревья, корни, мусор, старые конструкции и подготавливаем участок к следующим этапам работ."
        },
        "t2": {
          "title": "Планировка и выравнивание участка",
          "description": "Делаем ровную площадку, формируем уровни, уклоны и террасы под дом, сад, парковку, дорогу или строительную площадку."
        },
        "t3": {
          "title": "Отсыпка и поднятие уровня участка",
          "description": "Завозим грунт, песок и другие материалы, поднимаем низкие зоны, укрепляем основание и выравниваем перепады."
        },
        "t4": {
          "title": "Подготовка основания под строительство",
          "description": "Готовим площадку под фундамент, плиту, driveway, подъездные пути, подпорные зоны и технику."
        },
        "t5": {
          "title": "Дренаж и водоотвод",
          "description": "Формируем правильные уклоны, канавы и траншеи, чтобы вода уходила с участка и не размывала грунт."
        },
        "t6": {
          "title": "Вывоз грунта и строительного мусора",
          "description": "Загружаем и вывозим лишнюю землю, глину, камни, корни и строительные отходы самосвалами."
        }
      },
      "pricing": {
        "title": "Быстрый расчёт по реальным условиям участка",
        "text": "Стоимость земляных работ на Самуи зависит от рельефа, типа грунта, доступа для техники, объёма вывоза или завоза, необходимости дренажа и логистики по острову. Поэтому мы считаем не “примерно”, а по вашей задаче и фиксируем стоимость до начала работ. Чтобы быстро получить расчёт, отправьте точку на карте, 3–5 фото участка и подъезда, а также короткое описание задачи."
      },
      "beforeAfter": {
        "title": "Примеры земляных работ до и после на Самуи",
        "items": {
          "lipanoi": {
            "title": "Снос дома и выравнивание участка в Липаное, Самуи",
            "description": "Снос дома, расчистка участка и выравнивание в Липаное, Самуи. Мы снесли старый дом, убрали деревья и пальмы, вывезли мусор, завезли грунт и подняли участок примерно на 40 см, чтобы подготовить ровную площадку под строительство.",
            "meta": {
              "service": "Земляные работы и выравнивание",
              "area": "~400 м²",
              "duration": "5 дней",
              "equipment": "Экскаватор + самосвал",
              "soil": "20 рейсов (≈100 м³)",
              "level": "+40 см поднятие"
            },
            "pairs": {
              "p1": {
                "beforeAlt": "Старый дом и заросший участок до сноса в Липаное Самуи",
                "afterAlt": "Расчищенный и выровненный участок под строительство в Липаное Самуи"
              }
            }
          },
          "maenam": {
            "title": "Дренаж, экскавация и выравнивание участка в Маенаме, Самуи",
            "description": "Устройство дренажа, экскавация и выравнивание болотистого участка в Маенаме, Самуи. Мы превратили мокрую территорию в сухой и стабильный участок под строительство: открыли дренаж, расчистили русло, уложили трубу под дорогой, убрали растительность и выполнили отсыпку грунтом.",
            "meta": {
              "service": "Дренаж и земляные работы",
              "area": "2 рай (≈3200 м²)",
              "duration": "~2 недели",
              "soil": "200 рейсов (1000 м³ грунта)",
              "equipment": "Экскаватор + 2 самосвала + трактор",
              "drainage": "Полноценная дренажная система"
            },
            "pairs": {
              "p1": {
                "beforeAlt": "Болотистый участок до дренажа и выравнивания в Маенаме Самуи",
                "afterAlt": "Сухой и выровненный участок под строительство в Маенаме Самуи"
              },
              "p2": {
                "beforeAlt": "Мокрая заросшая территория до экскавации и расчистки в Маенаме Самуи",
                "afterAlt": "Подготовленный участок с дренажной системой и отсыпкой грунтом в Маенаме Самуи"
              }
            }
          }
        }
      },
      "included": {
        "title": "Почему клиенты выбирают нас",
        "fixed": {
          "title": "Понятная смета до старта",
          "description": "Считаем по смене, по объёму или под ключ и согласовываем стоимость до начала работ."
        },
        "report": {
          "title": "Фото и видео по ходу работ",
          "description": "Если вас нет на участке, присылаем обновления по ключевым этапам проекта."
        },
        "safety": {
          "title": "Аккуратная работа на объекте",
          "description": "Работаем рядом с домами, заборами, коммуникациями и ограниченными подъездами без лишнего хаоса."
        }
      },
      "faq": {
        "title": "Частые вопросы про земляные работы на Самуи",
        "q1": {
          "question": "Вы делаете земляные работы под ключ?",
          "answer": "Да. Можем взять весь цикл: расчистка, выравнивание, дренаж, отсыпка, доставка материалов, вывоз грунта и строительного мусора."
        },
        "q2": {
          "question": "Как считается стоимость работ?",
          "answer": "По задаче: по сменам, по объёму работ и материалов или как фиксированный пакет под ключ. До старта даём понятный расчёт."
        },
        "q3": {
          "question": "Что нужно, чтобы быстро получить смету?",
          "answer": "Точка на карте, 3–5 фото участка и подъезда, плюс короткое описание задачи и желаемые сроки."
        },
        "q4": {
          "question": "Работаете ли вы на сложных участках, склонах и узких дорогах?",
          "answer": "Да. Подбираем технику и план работ под реальные условия участка и подъезда."
        },
        "q5": {
          "question": "Можно ли сделать правильные уклоны и дренаж под воду?",
          "answer": "Да. Мы планируем уровни, уклоны и канавы так, чтобы вода уходила от дома и не размывала участок."
        },
        "q6": {
          "question": "Вы можете привезти грунт, песок и щебень?",
          "answer": "Да. Организуем доставку материалов и распределение по участку самосвалами и экскаватором."
        }
      },
      "photos": {
        "title": "Примеры наших работ",
        "bulldozer-work": {
          "title": "Планировка участка техникой",
          "alt": "Земляные работы и перемещение грунта на участке на Самуи"
        },
        "digging-holes-for-the-foundation": {
          "title": "Копка ям под фундамент",
          "alt": "Подготовка ям под фундамент для строительства дома на Самуи"
        },
        "digging-the-foundation": {
          "title": "Разработка котлована под фундамент",
          "alt": "Экскавация и подготовка основания под фундамент здания"
        },
        "house-construction": {
          "title": "Подготовка участка под строительство дома",
          "alt": "Земляные работы под строительство дома или виллы на Самуи"
        },
        "house-demolition": {
          "title": "Снос старого дома",
          "alt": "Демонтаж здания и расчистка участка под новое строительство"
        },
        "leveling-construction-site": {
          "title": "Выравнивание строительной площадки",
          "alt": "Планировка и выравнивание участка перед началом строительства"
        },
        "mini-excavation-work": {
          "title": "Работы мини-экскаватором",
          "alt": "Земляные работы мини-экскаватором в условиях ограниченного доступа"
        },
        "preparing-the-access-road": {
          "title": "Подготовка подъездной дороги",
          "alt": "Отсыпка и выравнивание подъездной дороги для техники и транспорта"
        },
        "removal-of-construction-waste": {
          "title": "Вывоз строительного мусора",
          "alt": "Сбор и вывоз строительных отходов и лишнего грунта с участка"
        },
        "root-removal": {
          "title": "Удаление корней и расчистка",
          "alt": "Удаление корней деревьев и подготовка участка под земляные работы"
        },
        "site-preparation-for-construction": {
          "title": "Подготовка участка под стройку",
          "alt": "Комплексная подготовка участка: расчистка, выравнивание и земляные работы"
        },
        "tree-removal": {
          "title": "Удаление деревьев",
          "alt": "Спил и удаление деревьев перед строительством или расчисткой участка"
        }
      }
    }
  },
  "en": {
    "earthworks": {
      "seo": {
        "title": "Earthworks on Koh Samui | Land leveling, drainage, backfilling & site preparation",
        "description": "Earthworks on Koh Samui for house, villa and road construction: land clearing, land leveling, excavation, drainage, backfilling, soil delivery and site preparation. Own excavators and dump trucks, clear quote before start.",
        "keywords": "earthworks koh samui, land leveling koh samui, excavation koh samui, drainage koh samui, backfilling koh samui, site preparation koh samui, land clearing koh samui, soil delivery samui, dump truck samui, excavator samui"
      },
      "hero": {
        "title": "Earthworks, land leveling & site preparation on Koh Samui",
        "description": "Land clearing, excavation, grading, drainage, backfilling, soil removal and site preparation for construction on Koh Samui."
      },
      "intro": "Need to prepare land for a house, villa, access road, drainage or landscaping? We provide practical, turnkey earthworks on Koh Samui: land clearing, excavation, grading, land leveling, backfilling, soil removal, drainage shaping and site preparation. We work with our own excavators and dump trucks, so scheduling is faster, logistics are simpler, and you get one responsible team from first inspection to final grading.",
      "tasks": {
        "title": "Earthworks services we provide on Koh Samui",
        "t1": {
          "title": "Land clearing",
          "description": "We remove vegetation, trees, roots, debris and old structures to prepare the site for the next stage."
        },
        "t2": {
          "title": "Grading & land leveling",
          "description": "We create flat areas and shape levels, terraces and slopes for houses, gardens, parking areas and access roads."
        },
        "t3": {
          "title": "Backfilling & raising ground level",
          "description": "We deliver and spread soil, sand and other materials to raise low areas, strengthen the base and level the land."
        },
        "t4": {
          "title": "Site preparation for construction",
          "description": "Ground preparation for foundations, slabs, driveways, retaining areas and construction access."
        },
        "t5": {
          "title": "Drainage & water runoff",
          "description": "We shape slopes, trenches and drainage lines so water flows away correctly and does not damage the site."
        },
        "t6": {
          "title": "Soil & construction waste removal",
          "description": "We load and remove excess soil, clay, rocks, roots and construction waste with dump trucks."
        }
      },
      "pricing": {
        "title": "Fast quote based on real site conditions",
        "text": "Earthworks pricing on Koh Samui depends on terrain, soil condition, access for machinery, drainage needs, the amount of material to remove or deliver, and island logistics. We assess your actual job and confirm the cost before work starts. To get a fast quote, send a location pin, 3–5 photos of the land and access road, and a short task description."
      },
      "beforeAfter": {
        "title": "Before & after earthworks projects on Koh Samui",
        "items": {
          "lipanoi": {
            "title": "House demolition & land leveling in Lipanoi, Koh Samui",
            "description": "House demolition, land clearing and land leveling in Lipanoi, Koh Samui. We demolished the old house, removed trees and palms, cleared debris, delivered fill soil and raised the plot by about 40 cm to create a clean, level area ready for construction.",
            "meta": {
              "service": "Earthworks & land leveling",
              "area": "~400 m²",
              "duration": "5 days",
              "equipment": "Excavator + dump truck",
              "soil": "20 loads (≈100 m³)",
              "level": "+40 cm raised"
            },
            "pairs": {
              "p1": {
                "beforeAlt": "Old house and overgrown land before demolition in Lipanoi Koh Samui",
                "afterAlt": "Cleared and leveled land ready for construction in Lipanoi Koh Samui"
              }
            }
          },
          "maenam": {
            "title": "Drainage, excavation & land leveling in Maenam, Koh Samui",
            "description": "Drainage installation, excavation and land leveling in Maenam, Koh Samui. We turned swampy land into dry, stable ground ready for construction by opening drainage, clearing the water line, installing a pipe under the road and backfilling the site with soil.",
            "meta": {
              "service": "Drainage & earthworks",
              "area": "2 rai (≈3200 m²)",
              "duration": "~2 weeks",
              "soil": "200 truck loads (1000 m³ soil)",
              "equipment": "Excavator + 2 dump trucks + tractor",
              "drainage": "Full drainage system"
            },
            "pairs": {
              "p1": {
                "beforeAlt": "Swampy land before drainage and leveling in Maenam Koh Samui",
                "afterAlt": "Dry and leveled land ready for construction in Maenam Koh Samui"
              },
              "p2": {
                "beforeAlt": "Wet overgrown terrain before excavation and clearing in Maenam Samui",
                "afterAlt": "Prepared land with drainage system and soil filling in Maenam Samui"
              }
            }
          }
        }
      },
      "included": {
        "title": "Why clients choose us",
        "fixed": {
          "title": "Clear quote before start",
          "description": "We price by day, by scope or as a turnkey package and confirm the cost before work begins."
        },
        "report": {
          "title": "Photo & video updates",
          "description": "If you are not on site, we can send progress updates during the project."
        },
        "safety": {
          "title": "Careful work on site",
          "description": "We work carefully around houses, fences, utilities and tight access areas."
        }
      },
      "faq": {
        "title": "Earthworks FAQ",
        "q1": {
          "question": "Do you provide turnkey earthworks?",
          "answer": "Yes. We can handle the full cycle: clearing, leveling, drainage, backfilling, material delivery and soil or waste removal."
        },
        "q2": {
          "question": "How do you price the work?",
          "answer": "By scope, by volume, per day or as a fixed turnkey package. We confirm the cost before the project starts."
        },
        "q3": {
          "question": "What do you need to give a fast quote?",
          "answer": "A location pin, 3–5 photos of the site and access road, plus a short description of the task and target timing."
        },
        "q4": {
          "question": "Can you work on slopes and narrow roads?",
          "answer": "Yes. We choose the right equipment and work plan based on the real access conditions."
        },
        "q5": {
          "question": "Can you shape proper drainage slopes?",
          "answer": "Yes. We plan levels, trenches and slopes so water drains away correctly from the site and structures."
        },
        "q6": {
          "question": "Can you deliver soil, sand and gravel?",
          "answer": "Yes. We arrange delivery and spreading of materials with our dump trucks and excavator."
        }
      },
      "photos": {
        "title": "Examples of our work",
        "bulldozer-work": {
          "title": "Site grading with machinery",
          "alt": "Earthworks and soil movement on a site in Koh Samui"
        },
        "digging-holes-for-the-foundation": {
          "title": "Digging foundation holes",
          "alt": "Preparing foundation holes for house construction in Koh Samui"
        },
        "digging-the-foundation": {
          "title": "Foundation pit excavation",
          "alt": "Excavation and base preparation for a building foundation"
        },
        "house-construction": {
          "title": "Site preparation for house construction",
          "alt": "Earthworks for house or villa construction in Koh Samui"
        },
        "house-demolition": {
          "title": "Old house demolition",
          "alt": "Building demolition and site clearing for new construction"
        },
        "leveling-construction-site": {
          "title": "Construction site leveling",
          "alt": "Land grading and leveling before starting construction"
        },
        "mini-excavation-work": {
          "title": "Mini excavator work",
          "alt": "Earthworks with a mini excavator in limited-access areas"
        },
        "preparing-the-access-road": {
          "title": "Access road preparation",
          "alt": "Building and leveling an access road for vehicles and machinery"
        },
        "removal-of-construction-waste": {
          "title": "Construction waste removal",
          "alt": "Removal of construction debris and excess soil from a site"
        },
        "root-removal": {
          "title": "Root removal and clearing",
          "alt": "Removing tree roots and preparing land for earthworks"
        },
        "site-preparation-for-construction": {
          "title": "Site preparation for construction",
          "alt": "Full site preparation including clearing, leveling and earthworks"
        },
        "tree-removal": {
          "title": "Tree removal",
          "alt": "Cutting and removing trees before construction or land clearing"
        }
      }
    }
  },
  "th": {
    "earthworks": {
      "seo": {
        "title": "งานดินบนเกาะสมุย | ปรับระดับที่ดิน ระบบระบายน้ำ ถมดิน และเตรียมพื้นที่",
        "description": "งานดินบนเกาะสมุยสำหรับสร้างบ้าน วิลล่า หรือถนนทางเข้า: เคลียร์พื้นที่ ปรับระดับ ขุดดิน ทำระบบระบายน้ำ ถมดิน ส่งดิน และเตรียมพื้นที่ก่อสร้าง มีรถขุดและรถดั๊มพ์ของตัวเอง พร้อมประเมินราคาชัดเจนก่อนเริ่มงาน",
        "keywords": "งานดิน สมุย, ปรับระดับที่ดิน สมุย, ขุดดิน สมุย, ระบบระบายน้ำ สมุย, ถมดิน สมุย, เตรียมพื้นที่ก่อสร้าง สมุย, เคลียร์ที่ดิน สมุย, ส่งดิน สมุย, รถดั๊มพ์ สมุย, รถขุด สมุย"
      },
      "hero": {
        "title": "งานดิน ปรับระดับที่ดิน และเตรียมพื้นที่บนเกาะสมุย",
        "description": "เคลียร์ที่ดิน ขุดดิน ปรับระดับ ทำระบบระบายน้ำ ถมดิน ขนดินออก และเตรียมพื้นที่สำหรับการก่อสร้างบนเกาะสมุย"
      },
      "intro": "หากคุณต้องการเตรียมที่ดินสำหรับสร้างบ้าน วิลล่า ถนนทางเข้า ระบบระบายน้ำ หรือจัดภูมิทัศน์ เรารับงานดินแบบครบวงจรบนเกาะสมุย: เคลียร์พื้นที่ ขุดดิน ปรับระดับ ถมดิน ขนดินออก จัดทำสโลปและระบบระบายน้ำ และเตรียมพื้นที่ก่อสร้าง เราใช้รถขุดและรถดั๊มพ์ของเราเอง ทำให้วางแผนงานได้เร็วขึ้น โลจิสติกส์ง่ายขึ้น และลูกค้าได้ทีมเดียวที่รับผิดชอบงานตั้งแต่ดูหน้างานจนถึงปรับพื้นที่เสร็จ",
      "tasks": {
        "title": "บริการงานดินที่เราทำบนเกาะสมุย",
        "t1": {
          "title": "เคลียร์พื้นที่",
          "description": "กำจัดพืชรก ต้นไม้ รากไม้ เศษวัสดุ และโครงสร้างเก่า เพื่อเตรียมพื้นที่สำหรับขั้นตอนถัดไป"
        },
        "t2": {
          "title": "ปรับระดับและเกลี่ยพื้นที่",
          "description": "ปรับพื้นที่ให้เรียบ จัดระดับ ทำเทอเรซ และความลาดเอียงสำหรับบ้าน สวน ที่จอดรถ และทางเข้า"
        },
        "t3": {
          "title": "ถมดินและยกระดับพื้นที่",
          "description": "นำดิน ทราย และวัสดุอื่นเข้าพื้นที่เพื่อยกระดับ เสริมฐาน และปรับพื้นที่ให้เรียบ"
        },
        "t4": {
          "title": "เตรียมพื้นที่สำหรับก่อสร้าง",
          "description": "เตรียมพื้นสำหรับฐานราก แผ่นพื้น ทางรถเข้า กำแพงกันดิน และพื้นที่ก่อสร้าง"
        },
        "t5": {
          "title": "ระบบระบายน้ำและทางน้ำ",
          "description": "ทำสโลป ร่องน้ำ และแนวระบายน้ำ เพื่อให้น้ำไหลออกได้ถูกต้องและไม่ทำลายพื้นที่"
        },
        "t6": {
          "title": "ขนดินและเศษวัสดุก่อสร้างออก",
          "description": "โหลดและขนดินส่วนเกิน ดินเหนียว หิน รากไม้ และเศษวัสดุก่อสร้างออกด้วยรถดั๊มพ์"
        }
      },
      "pricing": {
        "title": "ประเมินราคาเร็วจากสภาพพื้นที่จริง",
        "text": "ราคางานดินบนเกาะสมุยขึ้นอยู่กับความลาดชัน สภาพดิน ทางเข้าออกสำหรับเครื่องจักร ความจำเป็นของระบบระบายน้ำ ปริมาณดินที่ต้องขนออกหรือถมเพิ่ม และโลจิสติกส์บนเกาะ เราประเมินตามงานจริงและยืนยันราคาก่อนเริ่มงาน หากต้องการขอราคาเร็ว ส่งโลเคชัน รูปพื้นที่และทางเข้า 3–5 รูป พร้อมรายละเอียดงานสั้น ๆ"
      },
      "beforeAfter": {
        "title": "ตัวอย่างงานดินก่อนและหลังบนเกาะสมุย",
        "items": {
          "lipanoi": {
            "title": "รื้อถอนบ้านและปรับระดับที่ดินที่ลิปะน้อย เกาะสมุย",
            "description": "งานรื้อถอนบ้าน เคลียร์พื้นที่ และปรับระดับที่ดินที่ลิปะน้อย เกาะสมุย เรารื้อบ้านเก่า ตัดต้นไม้และต้นปาล์ม ขนเศษวัสดุออก ถมดิน และยกระดับพื้นที่ประมาณ 40 ซม. เพื่อให้ได้พื้นที่เรียบและพร้อมสำหรับการก่อสร้าง",
            "meta": {
              "service": "งานดินและปรับระดับพื้นที่",
              "area": "~400 ตร.ม.",
              "duration": "5 วัน",
              "equipment": "รถขุด + รถดั๊มพ์",
              "soil": "20 เที่ยว (≈100 ลบ.ม.)",
              "level": "ยกระดับ +40 ซม."
            },
            "pairs": {
              "p1": {
                "beforeAlt": "บ้านเก่าและพื้นที่รกก่อนรื้อถอนที่ลิปะน้อย เกาะสมุย",
                "afterAlt": "พื้นที่ที่เคลียร์และปรับเรียบแล้ว พร้อมสำหรับการก่อสร้างที่ลิปะน้อย เกาะสมุย"
              }
            }
          },
          "maenam": {
            "title": "งานระบายน้ำ ขุดดิน และปรับระดับที่ดินที่แม่น้ำ เกาะสมุย",
            "description": "งานติดตั้งระบบระบายน้ำ ขุดดิน และปรับระดับพื้นที่ชุ่มน้ำที่แม่น้ำ เกาะสมุย เราเปลี่ยนพื้นที่เปียกให้เป็นพื้นที่แห้งและมั่นคงพร้อมสำหรับการก่อสร้าง โดยเปิดทางระบายน้ำ เคลียร์แนวทางน้ำ วางท่อใต้ถนน และถมดินในพื้นที่",
            "meta": {
              "service": "ระบบระบายน้ำและงานดิน",
              "area": "2 ไร่ (≈3200 ตร.ม.)",
              "duration": "~2 สัปดาห์",
              "soil": "200 เที่ยวรถ (ดิน 1000 ลบ.ม.)",
              "equipment": "รถขุด + รถดั๊มพ์ 2 คัน + รถแทรกเตอร์",
              "drainage": "ระบบระบายน้ำครบชุด"
            },
            "pairs": {
              "p1": {
                "beforeAlt": "พื้นที่ชุ่มน้ำก่อนทำระบบระบายน้ำและปรับระดับที่แม่น้ำ เกาะสมุย",
                "afterAlt": "พื้นที่แห้งและปรับเรียบแล้ว พร้อมสำหรับการก่อสร้างที่แม่น้ำ เกาะสมุย"
              },
              "p2": {
                "beforeAlt": "พื้นที่เปียกและรกก่อนขุดดินและเคลียร์พื้นที่ที่แม่น้ำ สมุย",
                "afterAlt": "พื้นที่ที่เตรียมเรียบร้อยพร้อมระบบระบายน้ำและการถมดินที่แม่น้ำ สมุย"
              }
            }
          }
        }
      },
      "included": {
        "title": "ทำไมลูกค้าถึงเลือกเรา",
        "fixed": {
          "title": "ประเมินราคาชัดเจนก่อนเริ่ม",
          "description": "คิดราคาแบบรายวัน ตามขอบเขตงาน หรือเหมาจบ พร้อมยืนยันราคาก่อนเริ่มงาน"
        },
        "report": {
          "title": "อัปเดตรูปและวิดีโอ",
          "description": "ถ้าคุณไม่ได้อยู่หน้างาน เราส่งความคืบหน้าระหว่างโครงการให้ได้"
        },
        "safety": {
          "title": "ทำงานอย่างระมัดระวัง",
          "description": "ทำงานใกล้บ้าน รั้ว สาธารณูปโภค และทางเข้าที่แคบอย่างรอบคอบ"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อยเกี่ยวกับงานดิน",
        "q1": {
          "question": "รับเหมางานดินแบบครบวงจรไหม?",
          "answer": "รับครับ เราทำได้ทั้งเคลียร์พื้นที่ ปรับระดับ ทำระบบระบายน้ำ ถมดิน ส่งวัสดุ และขนดินหรือขยะออก"
        },
        "q2": {
          "question": "คิดราคางานอย่างไร?",
          "answer": "คิดตามขอบเขตงาน ปริมาณงาน รายวัน หรือแบบเหมาจบ และยืนยันราคาก่อนเริ่มงาน"
        },
        "q3": {
          "question": "ถ้าต้องการขอราคาเร็ว ต้องส่งอะไร?",
          "answer": "ส่งโลเคชัน รูปพื้นที่และทางเข้า 3–5 รูป พร้อมอธิบายงานคร่าว ๆ และเวลาที่ต้องการ"
        },
        "q4": {
          "question": "ทำงานบนพื้นที่ลาดชันหรือถนนแคบได้ไหม?",
          "answer": "ได้ครับ เราเลือกเครื่องจักรและแผนงานให้เหมาะกับสภาพทางเข้าและพื้นที่จริง"
        },
        "q5": {
          "question": "ช่วยทำสโลปและระบบระบายน้ำได้ไหม?",
          "answer": "ได้ครับ เราช่วยวางระดับ ร่องน้ำ และความลาดเอียงเพื่อให้น้ำไหลออกได้ถูกต้อง"
        },
        "q6": {
          "question": "มีบริการส่งดิน ทราย และหินไหม?",
          "answer": "มีครับ เราจัดส่งและเกลี่ยวัสดุในพื้นที่ด้วยรถดั๊มพ์และรถขุด"
        }
      },
      "photos": {
        "title": "ตัวอย่างผลงานของเรา",
        "bulldozer-work": {
          "title": "งานเกลี่ยพื้นที่ด้วยเครื่องจักร",
          "alt": "งานดินและการเคลื่อนย้ายดินในพื้นที่บนเกาะสมุย"
        },
        "digging-holes-for-the-foundation": {
          "title": "ขุดหลุมสำหรับฐานราก",
          "alt": "เตรียมหลุมฐานรากสำหรับการสร้างบ้านบนเกาะสมุย"
        },
        "digging-the-foundation": {
          "title": "ขุดหลุมฐานราก",
          "alt": "งานขุดดินและเตรียมฐานสำหรับฐานรากอาคาร"
        },
        "house-construction": {
          "title": "เตรียมพื้นที่สำหรับสร้างบ้าน",
          "alt": "งานดินสำหรับการสร้างบ้านหรือวิลล่าบนเกาะสมุย"
        },
        "house-demolition": {
          "title": "รื้อถอนบ้านเก่า",
          "alt": "รื้อถอนอาคารและเคลียร์พื้นที่เพื่อการก่อสร้างใหม่"
        },
        "leveling-construction-site": {
          "title": "ปรับระดับพื้นที่ก่อสร้าง",
          "alt": "เกลี่ยและปรับระดับพื้นที่ก่อนเริ่มงานก่อสร้าง"
        },
        "mini-excavation-work": {
          "title": "งานรถขุดขนาดเล็ก",
          "alt": "งานดินด้วยรถขุดขนาดเล็กในพื้นที่ทางเข้าแคบ"
        },
        "preparing-the-access-road": {
          "title": "เตรียมถนนทางเข้า",
          "alt": "ทำถนนทางเข้าและปรับระดับสำหรับรถและเครื่องจักร"
        },
        "removal-of-construction-waste": {
          "title": "ขนเศษวัสดุก่อสร้างออก",
          "alt": "ขนเศษวัสดุก่อสร้างและดินส่วนเกินออกจากพื้นที่"
        },
        "root-removal": {
          "title": "กำจัดรากไม้และเคลียร์พื้นที่",
          "alt": "กำจัดรากไม้และเตรียมพื้นที่สำหรับงานดิน"
        },
        "site-preparation-for-construction": {
          "title": "เตรียมพื้นที่ก่อนก่อสร้าง",
          "alt": "การเตรียมพื้นที่ครบวงจร ทั้งเคลียร์ ปรับระดับ และงานดิน"
        },
        "tree-removal": {
          "title": "ตัดและกำจัดต้นไม้",
          "alt": "ตัดและนำต้นไม้ออกจากพื้นที่ก่อนก่อสร้างหรือเคลียร์ที่ดิน"
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
      :title="tasksTitle"
      :items="tasksItems"
    />

    <CoreContactsMini
      page="services/earthworks"
      location="content"
    />

    <ServiceBeforeAfter
      :title="beforeAfterTitle"
      :items="beforeAfterItems"
    />

    <ServiceIncluded
      :title="includedTitle"
      :items="includedItems"
    />

    <UAlert
      :title="pricingTitle"
      :description="pricingText"
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
      :title="faqTitle"
      :items="faqItems"
    />

    <CoreContacts
      page="services/earthworks"
      location="bottom"
    />
  </UPage>
</template>
