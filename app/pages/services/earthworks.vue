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
      "seo": {
        "title": "Земляные работы на Самуи | Выравнивание участка, дренаж, отсыпка и подготовка",
        "description": "Земляные работы на Самуи для строительства дома, виллы или дороги: расчистка участка, выравнивание, экскавация, дренаж, отсыпка, доставка грунта и подготовка площадки. Свои экскаваторы и самосвалы, понятная смета до начала работ.",
        "keywords": "земляные работы самуи, выравнивание участка самуи, экскавация самуи, дренаж самуи, отсыпка участка самуи, подготовка участка под строительство самуи, расчистка участка самуи, доставка грунта самуи, самосвал самуи, экскаватор самуи"
      },
      "hero": {
        "title": "Земляные работы и подготовка участка на Самуи",
        "description": "Расчищаем участки, выравниваем землю, делаем дренаж, отсыпку и подготавливаем площадки под строительство на Самуи."
      },
      "intro": "Если вам нужно подготовить участок под дом, виллу, дорогу, дренаж или благоустройство, мы можем взять всю работу на себя. Делаем земляные работы на Самуи под ключ: расчищаем территорию, выравниваем участок, завозим и вывозим грунт, формируем уклоны, прокапываем дренаж и подготавливаем площадку под строительство. Работаем своей техникой - экскаваторами и самосвалами, поэтому быстрее выходим на объект, проще решаем логистику и ведём весь процесс одной командой.",
      "tasks": {
        "title": "Что мы делаем",
        "t1": {
          "title": "Расчистка участка",
          "description": "Убираем кусты, деревья, корни, мусор и старые конструкции, чтобы подготовить участок к следующим работам."
        },
        "t2": {
          "title": "Планировка и выравнивание",
          "description": "Делаем участок ровным, задаём уровни, уклоны и террасы под дом, сад, парковку, дорогу или стройплощадку."
        },
        "t3": {
          "title": "Отсыпка и поднятие уровня",
          "description": "Завозим грунт, песок и другие материалы, поднимаем низкие места и выравниваем перепады по высоте."
        },
        "t4": {
          "title": "Подготовка под строительство",
          "description": "Готовим площадку под фундамент, плиту, подъезд, подпорные зоны и дальнейшие строительные работы."
        },
        "t5": {
          "title": "Дренаж и отвод воды",
          "description": "Делаем канавы, траншеи и уклоны так, чтобы вода уходила с участка и не размывала грунт."
        },
        "t6": {
          "title": "Вывоз грунта и мусора",
          "description": "Вывозим лишнюю землю, глину, камни, корни и строительный мусор самосвалами."
        }
      },
      "pricing": {
        "title": "Быстрый расчёт по вашему участку",
        "text": "Стоимость зависит от рельефа, типа грунта, доступа для техники, объёма завоза или вывоза, необходимости дренажа и общей логистики по острову. Поэтому мы не называем цену наугад, а считаем по вашей конкретной задаче. Чтобы быстро получить расчёт, отправьте точку на карте, 3–5 фото участка и подъезда, а также короткое описание того, что нужно сделать."
      },
      "beforeAfter": {
        "title": "Примеры наших работ до и после на Самуи",
        "items": {
          "lipanoi": {
            "title": "Снос дома и выравнивание участка в Липаное, Самуи",
            "description": "На этом участке мы снесли старый дом, убрали деревья и пальмы, вывезли мусор, завезли грунт и подняли уровень участка примерно на 40 см. В итоге получилась ровная площадка, готовая под строительство.",
            "meta": {
              "service": "Земляные работы и выравнивание",
              "area": "~400 м²",
              "duration": "5 дней",
              "equipment": "Экскаватор + самосвал",
              "soil": "20 рейсов (≈100 м³)",
              "level": "+40 см"
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
            "description": "Здесь был болотистый участок с лишней водой и сложным рельефом. Мы открыли дренаж, расчистили русло, уложили трубу под дорогой, убрали растительность и сделали отсыпку. В итоге участок стал сухим, ровным и пригодным для дальнейшего строительства.",
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
        "title": "Почему с нами удобно работать",
        "fixed": {
          "title": "Понятная стоимость до начала работ",
          "description": "Считаем по смене, по объёму или под ключ и заранее согласовываем цену."
        },
        "report": {
          "title": "Фото и видео по ходу работ",
          "description": "Если вас нет на объекте, можем присылать обновления по основным этапам."
        },
        "safety": {
          "title": "Аккуратная работа на участке",
          "description": "Работаем рядом с домами, заборами, коммуникациями и в местах с ограниченным подъездом без лишнего беспорядка."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "Вы делаете земляные работы под ключ?",
          "answer": "Да, можем взять весь цикл: расчистку, выравнивание, дренаж, отсыпку, доставку материалов и вывоз грунта или мусора."
        },
        "q2": {
          "question": "Как вы считаете стоимость?",
          "answer": "Всё зависит от задачи: считаем по сменам, по объёму работ и материалов или как фиксированный проект под ключ. До старта даём понятный расчёт."
        },
        "q3": {
          "question": "Что нужно, чтобы быстро получить смету?",
          "answer": "Отправьте точку на карте, 3–5 фото участка и подъезда, а также короткое описание задачи и желаемые сроки."
        },
        "q4": {
          "question": "Работаете ли вы на сложных участках, склонах и узких дорогах?",
          "answer": "Да. Подбираем технику и план работ под реальные условия участка и подъезда."
        },
        "q5": {
          "question": "Можно ли сделать правильные уклоны и дренаж?",
          "answer": "Да. Мы планируем уровни, уклоны и канавы так, чтобы вода уходила с участка и не создавала проблем у дома."
        },
        "q6": {
          "question": "Вы можете привезти грунт, песок и щебень?",
          "answer": "Да, организуем доставку материалов и распределение по участку самосвалами и экскаватором."
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
        "title": "Earthworks and site preparation on Koh Samui",
        "description": "We clear land, level plots, install drainage, deliver fill soil and prepare sites for construction on Koh Samui."
      },
      "intro": "If you need to prepare land for a house, villa, access road, drainage or landscaping, we can take care of the whole job. We handle practical earthworks on Koh Samui from start to finish: land clearing, excavation, grading, land leveling, backfilling, soil removal, drainage shaping and site preparation. We work with our own excavators and dump trucks, so scheduling is faster, logistics are simpler, and the whole process stays in one team.",
      "tasks": {
        "title": "What we do",
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
          "description": "We deliver and spread soil, sand and other materials to raise low areas and level the land properly."
        },
        "t4": {
          "title": "Site preparation for construction",
          "description": "We prepare the ground for foundations, slabs, driveways, retaining areas and further construction work."
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
        "title": "Fast quote for your site",
        "text": "The cost depends on the terrain, soil condition, access for machinery, the amount of material to remove or deliver, drainage needs and overall logistics on the island. That is why we do not guess the price - we estimate your actual job. To get a fast quote, send a location pin, 3–5 photos of the land and access road, and a short description of what needs to be done."
      },
      "beforeAfter": {
        "title": "Before & after examples of our work on Koh Samui",
        "items": {
          "lipanoi": {
            "title": "House demolition & land leveling in Lipanoi, Koh Samui",
            "description": "On this site we demolished the old house, removed trees and palms, cleared the debris, brought in fill soil and raised the land by about 40 cm. The result was a clean, level plot ready for construction.",
            "meta": {
              "service": "Earthworks & land leveling",
              "area": "~400 m²",
              "duration": "5 days",
              "equipment": "Excavator + dump truck",
              "soil": "20 loads (≈100 m³)",
              "level": "+40 cm"
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
            "description": "This site was swampy, uneven and full of excess water. We opened the drainage, cleared the water line, installed a pipe under the road, removed the vegetation and backfilled the area. In the end, the land became dry, level and suitable for future construction.",
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
        "title": "Why clients find it easy to work with us",
        "fixed": {
          "title": "Clear cost before we start",
          "description": "We price by day, by scope or as a turnkey job and agree on the cost in advance."
        },
        "report": {
          "title": "Photo & video updates",
          "description": "If you are not on site, we can send updates at the key stages of the work."
        },
        "safety": {
          "title": "Careful work on site",
          "description": "We work carefully around houses, fences, utilities and tight-access areas without unnecessary mess."
        }
      },
      "faq": {
        "title": "Frequently asked questions",
        "q1": {
          "question": "Do you provide turnkey earthworks?",
          "answer": "Yes. We can handle the full cycle: clearing, leveling, drainage, backfilling, material delivery and soil or waste removal."
        },
        "q2": {
          "question": "How do you calculate the price?",
          "answer": "It depends on the job. We can price by day, by work volume and materials, or as a fixed turnkey project. We give a clear estimate before the start."
        },
        "q3": {
          "question": "What do you need to give a fast quote?",
          "answer": "Send a location pin, 3–5 photos of the site and access road, plus a short description of the task and your timeline."
        },
        "q4": {
          "question": "Can you work on difficult plots, slopes and narrow roads?",
          "answer": "Yes. We choose the right equipment and work plan based on the real access and site conditions."
        },
        "q5": {
          "question": "Can you make proper drainage slopes?",
          "answer": "Yes. We plan levels, trenches and slopes so water drains away correctly and does not cause problems near the house or on the plot."
        },
        "q6": {
          "question": "Can you deliver soil, sand and gravel?",
          "answer": "Yes. We can arrange delivery and spreading of materials with our dump trucks and excavator."
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
        "title": "งานดินและเตรียมพื้นที่บนเกาะสมุย",
        "description": "เราเคลียร์ที่ดิน ปรับระดับ ทำระบบระบายน้ำ ถมดิน และเตรียมพื้นที่สำหรับการก่อสร้างบนเกาะสมุย"
      },
      "intro": "หากคุณต้องการเตรียมที่ดินสำหรับสร้างบ้าน วิลล่า ถนนทางเข้า ระบบระบายน้ำ หรือจัดภูมิทัศน์ เราสามารถดูแลงานทั้งหมดให้ได้ เรารับงานดินบนเกาะสมุยแบบครบวงจร ตั้งแต่เคลียร์พื้นที่ ขุดดิน ปรับระดับ ถมดิน ขนดินออก ทำสโลปและระบบระบายน้ำ ไปจนถึงเตรียมพื้นที่ก่อสร้าง เราใช้รถขุดและรถดั๊มพ์ของเราเอง จึงจัดคิวงานได้เร็วขึ้น โลจิสติกส์ง่ายขึ้น และควบคุมงานได้ในทีมเดียวตั้งแต่ต้นจนจบ",
      "tasks": {
        "title": "งานที่เราทำ",
        "t1": {
          "title": "เคลียร์พื้นที่",
          "description": "กำจัดพืชรก ต้นไม้ รากไม้ เศษวัสดุ และโครงสร้างเก่า เพื่อเตรียมพื้นที่สำหรับขั้นตอนถัดไป"
        },
        "t2": {
          "title": "ปรับระดับและเกลี่ยพื้นที่",
          "description": "ปรับพื้นที่ให้เรียบ จัดระดับ ทำเทอเรซ และกำหนดความลาดเอียงสำหรับบ้าน สวน ที่จอดรถ และทางเข้า"
        },
        "t3": {
          "title": "ถมดินและยกระดับพื้นที่",
          "description": "นำดิน ทราย และวัสดุอื่นเข้าพื้นที่เพื่อยกระดับจุดที่ต่ำและปรับพื้นที่ให้เรียบเหมาะกับการใช้งาน"
        },
        "t4": {
          "title": "เตรียมพื้นที่สำหรับก่อสร้าง",
          "description": "เตรียมพื้นสำหรับฐานราก แผ่นพื้น ทางรถเข้า กำแพงกันดิน และงานก่อสร้างต่อไป"
        },
        "t5": {
          "title": "ระบบระบายน้ำและทางน้ำ",
          "description": "ทำสโลป ร่องน้ำ และแนวระบายน้ำ เพื่อให้น้ำไหลออกได้ถูกต้องและไม่ทำลายพื้นที่"
        },
        "t6": {
          "title": "ขนดินและเศษวัสดุออก",
          "description": "ขนดินส่วนเกิน ดินเหนียว หิน รากไม้ และเศษวัสดุก่อสร้างออกด้วยรถดั๊มพ์"
        }
      },
      "pricing": {
        "title": "ประเมินราคาเร็วสำหรับพื้นที่ของคุณ",
        "text": "ราคาขึ้นอยู่กับลักษณะพื้นที่ สภาพดิน ทางเข้าออกสำหรับเครื่องจักร ปริมาณดินที่ต้องขนออกหรือถมเพิ่ม ความจำเป็นของระบบระบายน้ำ และโลจิสติกส์บนเกาะ เราจึงไม่เดาราคา แต่ประเมินจากงานจริงของคุณ หากต้องการขอราคาเร็ว ส่งโลเคชัน รูปพื้นที่และทางเข้า 3–5 รูป พร้อมรายละเอียดงานสั้น ๆ ได้เลย"
      },
      "beforeAfter": {
        "title": "ตัวอย่างงานก่อนและหลังของเราบนเกาะสมุย",
        "items": {
          "lipanoi": {
            "title": "รื้อถอนบ้านและปรับระดับที่ดินที่ลิปะน้อย เกาะสมุย",
            "description": "หน้างานนี้เราได้รื้อบ้านเก่า ตัดต้นไม้และต้นปาล์ม ขนเศษวัสดุออก ถมดิน และยกระดับพื้นที่ประมาณ 40 ซม. ผลลัพธ์คือได้พื้นที่เรียบ สะอาด และพร้อมสำหรับการก่อสร้าง",
            "meta": {
              "service": "งานดินและปรับระดับพื้นที่",
              "area": "~400 ตร.ม.",
              "duration": "5 วัน",
              "equipment": "รถขุด + รถดั๊มพ์",
              "soil": "20 เที่ยว (≈100 ลบ.ม.)",
              "level": "+40 ซม."
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
            "description": "พื้นที่นี้เดิมเป็นที่ลุ่มแฉะ มีน้ำขังและระดับพื้นที่ไม่สม่ำเสมอ เราเปิดทางระบายน้ำ เคลียร์แนวทางน้ำ วางท่อใต้ถนน กำจัดพืชรก และถมดิน สุดท้ายพื้นที่กลายเป็นที่ดินแห้ง เรียบ และพร้อมสำหรับการก่อสร้างต่อไป",
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
        "title": "ทำงานกับเราได้ง่ายเพราะอะไร",
        "fixed": {
          "title": "รู้ราคาก่อนเริ่มงาน",
          "description": "เราคิดราคาตามวัน ตามขอบเขตงาน หรือแบบเหมาจบ และตกลงราคาให้ชัดเจนก่อนเริ่ม"
        },
        "report": {
          "title": "มีรูปและวิดีโออัปเดต",
          "description": "ถ้าคุณไม่ได้อยู่หน้างาน เราส่งอัปเดตในช่วงสำคัญของงานให้ได้"
        },
        "safety": {
          "title": "ทำงานอย่างระมัดระวัง",
          "description": "เราทำงานใกล้บ้าน รั้ว สาธารณูปโภค และพื้นที่ทางเข้าแคบอย่างรอบคอบและเป็นระเบียบ"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "รับงานดินแบบครบวงจรไหม?",
          "answer": "รับครับ เราสามารถดูแลงานทั้งหมดได้ ตั้งแต่เคลียร์พื้นที่ ปรับระดับ ทำระบบระบายน้ำ ถมดิน ส่งวัสดุ และขนดินหรือเศษวัสดุออก"
        },
        "q2": {
          "question": "คิดราคายังไง?",
          "answer": "ขึ้นอยู่กับลักษณะงาน เราอาจคิดตามวัน ตามปริมาณงานและวัสดุ หรือเหมาจบเป็นโปรเจกต์ พร้อมแจ้งประเมินให้ชัดเจนก่อนเริ่ม"
        },
        "q3": {
          "question": "ต้องส่งอะไรเพื่อขอราคาเร็ว?",
          "answer": "ส่งโลเคชัน รูปพื้นที่และทางเข้า 3–5 รูป พร้อมอธิบายงานคร่าว ๆ และเวลาที่ต้องการ"
        },
        "q4": {
          "question": "ทำงานบนพื้นที่ยาก พื้นที่ลาดชัน หรือถนนแคบได้ไหม?",
          "answer": "ได้ครับ เราเลือกเครื่องจักรและวางแผนงานให้เหมาะกับสภาพหน้างานและทางเข้าจริง"
        },
        "q5": {
          "question": "ช่วยทำสโลปและระบบระบายน้ำได้ไหม?",
          "answer": "ได้ครับ เราช่วยวางระดับ ร่องน้ำ และความลาดเอียงเพื่อให้น้ำไหลออกได้ถูกต้องและไม่สร้างปัญหาใกล้บ้านหรือในพื้นที่"
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
