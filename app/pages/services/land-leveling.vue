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

useServiceSeo({
  t,
  path: '/services/land-leveling',
  prefix: 'landLeveling',
  image: {
    url: 'https://supermansamui.com/images/services/land-leveling/hero.webp',
    width: '1200',
    height: '630',
  },
  serviceTypes,
  catalogItems: tasksItems,
});
</script>

<i18n lang="json">
{
  "ru": {
    "landLeveling": {
      "schema": {
        "name": "Выравнивание и планировка участка на Самуи",
        "serviceTypes": {
          "landLeveling": "Выравнивание участка",
          "grading": "Планировка земли",
          "slopeShaping": "Формирование уклонов",
          "siteGrading": "Выравнивание строительной площадки",
          "terracing": "Формирование террас"
        }
      },
      "seo": {
        "title": "Выравнивание участка на Самуи — планировка",
        "description": "Выравнивание участков на Самуи: срезка возвышенностей, подсыпка низин, формирование площадок и уклонов. Оценим объём грунта и согласуем стоимость до начала работ.",
        "keywords": "выравнивание участка самуи, планировка земли самуи, планировка участка самуи, формирование уклонов самуи, выравнивание площадки самуи"
      },
      "hero": {
        "title": "Выравнивание участка на Самуи",
        "description": "Срезаем возвышенности, подсыпаем низины и формируем площадки с нужными уровнями и уклонами. Планируем рельеф под дом, дорогу, парковку или сад."
      },
      "intro": "Работаем по согласованным высотам и границам. До начала определим, где снять или добавить грунт, можно ли использовать его на участке и нужны ли завоз и вывоз. На Самуи почти все участки с уклоном, поэтому обычно речь о террасах и переходах между ними, а не об одной плоскости.",
      "tasks": {
        "title": "Какие работы выполняем",
        "t1": {
          "title": "Планировка рельефа",
          "description": "Формируем рабочие зоны на согласованных высотах, переходы между ними и отдельные площадки на склоне."
        },
        "t2": {
          "title": "Срезка возвышенностей",
          "description": "Снимаем лишний грунт в высоких местах. Перемещаем его в нужные зоны или организуем вывоз."
        },
        "t3": {
          "title": "Подсыпка низин",
          "description": "Заполняем понижения и поднимаем уровень земли. Используем подходящий грунт с участка или завозим материал."
        },
        "t4": {
          "title": "Площадка под строительство",
          "description": "Выравниваем зону будущего дома, виллы или постройки по согласованному плану и высотным отметкам."
        },
        "t5": {
          "title": "Подъезд и парковка",
          "description": "Планируем поверхность проезда, въезда и парковочной зоны с учётом нужных высот и уклонов."
        },
        "t6": {
          "title": "Формирование уклонов",
          "description": "Придаём поверхности уклон в нужном направлении, чтобы дождевая вода уходила к канавам, а не к дому."
        }
      },
      "included": {
        "title": "Что учитываем при планировке",
        "levels": {
          "title": "Связь между уровнями",
          "description": "Связываем высоты площадки, подъезда и соседних зон, чтобы они соответствовали дальнейшим планам на участок."
        },
        "slope": {
          "title": "Направление стока воды",
          "description": "Учитываем, куда уходит дождевой сток и как новые уровни повлияют на его движение. При необходимости обсудим дренаж."
        },
        "material": {
          "title": "Использование грунта",
          "description": "Оценим, какой грунт можно переместить внутри участка и сколько потребуется завезти или вывезти."
        }
      },
      "seoBlock": {
        "title": "Как определить нужные уровни участка",
        "p1": "Начинаем с назначения каждой зоны: дом, въезд, парковка или сад. Определяем её высоту относительно дороги, существующих построек и остальной территории. Если у вас есть план с высотными отметками, используем его при оценке и выполнении работ.",
        "p2": "На участке с перепадом высот можно сделать несколько площадок и переходы между ними. Объём срезки и подсыпки зависит от исходного рельефа и выбранных уровней: одинаковые по площади участки могут требовать разного количества работы.",
        "p3": "Отдельно определяем, куда перемещать вынутый грунт и какой материал нужен для подсыпки. Подъезд и место для работы техники влияют на выбор машин и число рейсов. Порядок планировки и дренажных работ планируем вместе, если нужны обе услуги."
      },
      "process": {
        "title": "Как проходит выравнивание",
        "p1": {
          "title": "Изучаем участок",
          "description": "Смотрим фото, подъезд и план, уточняем перепады высот и желаемый результат. При необходимости договариваемся об осмотре."
        },
        "p2": {
          "title": "Согласуем уровни и стоимость",
          "description": "Определяем зоны срезки и подсыпки, нужные высоты и уклоны. Согласуем объём, материалы, сроки и условия оплаты."
        },
        "p3": {
          "title": "Перемещаем и распределяем грунт",
          "description": "Выполняем срезку, подсыпку и планировку техникой. Организуем завоз или вывоз, если они входят в заказ."
        },
        "p4": {
          "title": "Проверяем результат",
          "description": "Сверяем выполненные площадки, уровни и уклоны с согласованной задачей. Обсуждаем дальнейшие этапы, если они запланированы."
        }
      },
      "pricing": {
        "title": "Сколько стоит выравнивание участка",
        "text": "Цена зависит от площади и перепада высот, объёма перемещаемого грунта, его типа и подъезда. В расчёте учитываем работу машин, материал для подсыпки и перевозки. Тарифы на технику есть на странице каждой машины."
      },
      "cta": {
        "title": "Расскажите, как хотите изменить участок",
        "text": "Пришлите локацию, примерную площадь, фото рельефа и подъезда. Укажите, где нужно поднять или понизить землю. Если есть план с высотами — приложите его. Подготовим предварительный расчёт и уточним, нужен ли осмотр."
      },
      "related": {
        "title": "Другие работы на участке",
        "earthworks": {
          "title": "Земляные работы",
          "description": "Если нужны несколько этапов: расчистка, копка, отсыпка и другие работы под управлением одной команды."
        },
        "drainage": {
          "title": "Дренаж участка",
          "description": "Если для отвода воды нужны канавы, траншеи или трубы. Уровни земли и систему водоотведения планируем совместно."
        },
        "truck": {
          "title": "Самосвалы и доставка грунта",
          "description": "Для завоза материала на подсыпку или вывоза лишнего грунта. Подберём машину и рассчитаем перевозку."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "Участок обязательно делать полностью горизонтальным?",
          "answer": "Нет. Для разных зон могут понадобиться свои высоты и уклоны. Подбираем их под назначение участка, подъезд и направление стока воды."
        },
        "q2": {
          "question": "Нужно ли сначала расчистить участок?",
          "answer": "Если в рабочей зоне есть заросли, пни, корни или мусор, убираем их до планировки. Можно заказать расчистку и выравнивание вместе, с отдельным объёмом и стоимостью каждого этапа."
        },
        "q3": {
          "question": "Всегда ли нужно завозить грунт?",
          "answer": "Не всегда. Если имеющийся грунт подходит и его достаточно, можно переместить его из высоких зон в низкие. Необходимость завоза или вывоза определяем по выбранным уровням, объёму и свойствам материала."
        },
        "q4": {
          "question": "Можно сформировать уклон для дождевой воды?",
          "answer": "Да, можем придать поверхности нужный уклон. Заранее определим, куда будет уходить сток и как связать его с существующим водоотведением. Если нужны канавы или трубы, обсудим их как отдельные работы."
        },
        "q5": {
          "question": "Сколько времени занимает выравнивание?",
          "answer": "Участок под один дом обычно выравниваем за день-два. Площадку под несколько вилл в Бо Пут сделали за несколько дней бригадой из экскаватора, самосвала и трактора, хотя клиент планировал арендовать один экскаватор на две недели: связка машин работает быстрее и выходит дешевле."
        },
        "q6": {
          "question": "Когда планировать дренаж — до или после выравнивания?",
          "answer": "Уровни земли и отвод воды лучше согласовать до начала работ. Последовательность выполнения зависит от участка и выбранной системы. Так можно заранее определить места канав, труб и нужные уклоны."
        }
      },
      "photos": {
        "title": "Примеры выравнивания участков",
        "bulldozer-work": {
          "title": "Планировка участка техникой",
          "alt": "Земляные работы и перемещение грунта на участке на Самуи"
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
          "alt": "Выравнивание участка перед строительством дома на Самуи"
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
        "name": "Land Leveling & Grading on Koh Samui",
        "serviceTypes": {
          "landLeveling": "Land leveling",
          "grading": "Land grading",
          "slopeShaping": "Slope shaping",
          "siteGrading": "Construction site grading",
          "terracing": "Terrace shaping"
        }
      },
      "seo": {
        "title": "Land Leveling & Grading on Koh Samui",
        "description": "Land leveling on Koh Samui: cutting high spots, filling low areas, shaping platforms and slopes. Soil volumes assessed and costs agreed before work begins.",
        "keywords": "land leveling koh samui, land grading koh samui, site grading samui, slope shaping samui, platform grading samui"
      },
      "hero": {
        "title": "Land Leveling & Grading on Koh Samui",
        "description": "We cut high spots, fill low areas and shape platforms to the required levels and slopes. Grading for houses, roads, parking areas and gardens."
      },
      "intro": "We work to agreed elevations and boundaries. Before starting, we identify where to cut or fill, whether soil can be reused on site and what needs bringing in or hauling away. Almost every plot on Samui slopes, so the job is usually terraces and transitions between them rather than one flat plane.",
      "tasks": {
        "title": "Grading Work We Carry Out",
        "t1": {
          "title": "Land Grading",
          "description": "Shaping work areas at the set elevations, transitions between them and separate platforms on sloping land."
        },
        "t2": {
          "title": "Cutting High Spots",
          "description": "Removing surplus soil from high areas and moving it where needed on site or arranging removal."
        },
        "t3": {
          "title": "Filling Low Areas",
          "description": "Filling depressions and raising ground levels with suitable soil from the site or imported material."
        },
        "t4": {
          "title": "Building Platforms",
          "description": "Grading the area for a future house, villa or other structure to the plan and elevations."
        },
        "t5": {
          "title": "Access & Parking Areas",
          "description": "Grading driveways, entrances and parking areas to the required heights and slopes."
        },
        "t6": {
          "title": "Slope Shaping",
          "description": "Shaping surface slopes in the required direction, taking existing water runoff routes into account."
        }
      },
      "included": {
        "title": "What we consider when grading",
        "levels": {
          "title": "How levels connect",
          "description": "We match platform, access and adjacent ground levels so they fit your plans for the land."
        },
        "slope": {
          "title": "Water runoff routes",
          "description": "We consider where rainwater flows and how new levels will affect it, discussing drainage work where needed."
        },
        "material": {
          "title": "Use of existing soil",
          "description": "We assess which soil can be moved within the site and how much material needs bringing in or hauling away."
        }
      },
      "seoBlock": {
        "title": "How to set the right ground levels",
        "p1": "Start with the purpose of each area: house, entrance, parking or garden. We set its elevation relative to the road, existing buildings and surrounding ground. If you have a plan with levels, we use it when assessing and carrying out the work.",
        "p2": "Sloping land can be shaped into several platforms with transitions between them. Cut and fill volumes depend on the existing terrain and chosen elevations, so plots of the same size can require very different amounts of work.",
        "p3": "We also identify where excavated soil can go and what material is needed for filling. Access and machine working space affect equipment choice and truck trips. When drainage is part of the job, we coordinate its sequence with grading."
      },
      "process": {
        "title": "How land leveling works",
        "p1": {
          "title": "Review the site",
          "description": "We review photos, access and any plans, discussing height differences and your intended result. A site visit is arranged if needed."
        },
        "p2": {
          "title": "Agree on levels and costs",
          "description": "We define cut and fill areas, elevations and slopes, then agree on scope, materials, timing and payment terms."
        },
        "p3": {
          "title": "Move and spread soil",
          "description": "We carry out cutting, filling and grading with machinery, arranging material delivery or removal when included in the order."
        },
        "p4": {
          "title": "Check the result",
          "description": "We check the completed platforms, levels and slopes against the brief and discuss any planned next stages."
        }
      },
      "pricing": {
        "title": "How much does land leveling cost?",
        "text": "Costs depend on area, height differences, soil volume and type, and machine access. The estimate accounts for machine work, fill material and hauling. Machine rates are listed on each equipment page."
      },
      "cta": {
        "title": "Tell us how you want to change your land",
        "text": "Send a map pin, approximate area, and photos of the terrain and access. Tell us where the ground needs raising or lowering, and attach any plan with levels. We’ll prepare an initial estimate and confirm whether a site visit is needed."
      },
      "related": {
        "title": "Other work for your land",
        "earthworks": {
          "title": "Earthworks",
          "description": "For several stages, including clearing, excavation, backfilling and other work coordinated by one team."
        },
        "drainage": {
          "title": "Land drainage",
          "description": "For ditches, trenches or pipes to carry water away. Ground levels and drainage are planned together."
        },
        "truck": {
          "title": "Dump trucks and fill delivery",
          "description": "For bringing in fill or removing surplus soil. We select a suitable truck and estimate transport costs."
        }
      },
      "faq": {
        "title": "Land leveling questions",
        "q1": {
          "question": "Does the whole plot need to be completely flat?",
          "answer": "No. Different areas may need different elevations and slopes. We set these based on intended use, access and water runoff routes."
        },
        "q2": {
          "question": "Does the land need clearing first?",
          "answer": "If vegetation, stumps, roots or debris are in the work area, we remove them before grading. Clearing and leveling can be booked together, with the scope and price of each stage set out separately."
        },
        "q3": {
          "question": "Will I always need to bring in fill soil?",
          "answer": "Not always. If the existing soil is suitable and there is enough, it can be moved from high areas to low ones. Imports or removal depend on the chosen levels, volumes and material properties."
        },
        "q4": {
          "question": "Can you shape a slope for rainwater runoff?",
          "answer": "Yes. We can shape the surface to the required slope. We first establish where runoff will go and how it connects to existing drainage. Ditches or pipes, if needed, are discussed as separate work."
        },
        "q5": {
          "question": "How long does leveling take?",
          "answer": "A plot for a single house usually takes a day or two. A platform for several villas in Bo Put took a few days with an excavator, dump truck and tractor crew, although the client had planned to rent a single excavator for two weeks: a crew works faster and comes out cheaper."
        },
        "q6": {
          "question": "Should drainage be planned before or after leveling?",
          "answer": "Ground levels and water runoff are best planned before work begins. The work sequence depends on the site and drainage system. This allows ditch and pipe locations and the required slopes to be defined in advance."
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
        "name": "ปรับระดับและปรับพื้นที่บนเกาะสมุย",
        "serviceTypes": {
          "landLeveling": "ปรับระดับที่ดิน",
          "grading": "ปรับพื้นที่",
          "slopeShaping": "ทำสโลป",
          "siteGrading": "ปรับพื้นที่ก่อสร้าง",
          "terracing": "ทำขั้นพื้นที่"
        }
      },
      "seo": {
        "title": "ปรับระดับที่ดินบนเกาะสมุย — ปรับพื้นที่",
        "description": "ปรับระดับที่ดินบนเกาะสมุย ตัดดินส่วนสูง ถมพื้นที่ต่ำ ทำลานและความลาดเอียง ประเมินปริมาณดินและตกลงค่าใช้จ่ายก่อนเริ่มงาน",
        "keywords": "ปรับระดับที่ดิน สมุย, ปรับพื้นที่ สมุย, ปรับหน้าดิน สมุย, ทำสโลป สมุย, ปรับลาน สมุย"
      },
      "hero": {
        "title": "ปรับระดับที่ดินบนเกาะสมุย",
        "description": "ตัดดินส่วนสูง ถมพื้นที่ต่ำ และทำลานให้ได้ระดับและความลาดเอียงที่ต้องการ ปรับพื้นที่สำหรับบ้าน ถนน ที่จอดรถ หรือสวน"
      },
      "intro": "ทำงานตามระดับและแนวเขตที่ตกลง ก่อนเริ่มจะกำหนดจุดตัดและถม พิจารณาว่าดินเดิมใช้ต่อในพื้นที่ได้หรือไม่ และต้องขนเข้าหรือขนออกเท่าไร จากนั้นเลือกเครื่องจักรและประเมินราคา ที่ดินบนเกาะสมุยส่วนใหญ่มีความลาดเอียง งานจึงมักเป็นการทำลานเป็นชั้นและทางเชื่อมระหว่างชั้น ไม่ใช่พื้นเรียบผืนเดียว",
      "tasks": {
        "title": "งานปรับพื้นที่ที่เรารับทำ",
        "t1": {
          "title": "ปรับรูปแบบพื้นที่",
          "description": "ทำพื้นที่ใช้งานตามระดับที่กำหนด เชื่อมต่อแต่ละระดับ และแบ่งลานบนพื้นที่ลาดชัน"
        },
        "t2": {
          "title": "ตัดดินส่วนสูง",
          "description": "ตักดินส่วนเกินในบริเวณที่สูง แล้วย้ายไปจุดที่ต้องการหรือจัดขนออก"
        },
        "t3": {
          "title": "ถมพื้นที่ต่ำ",
          "description": "เติมจุดต่ำและยกระดับดิน โดยใช้ดินเดิมที่เหมาะสมหรือนำวัสดุเข้ามาเพิ่ม"
        },
        "t4": {
          "title": "ปรับพื้นที่สำหรับสิ่งปลูกสร้าง",
          "description": "ปรับบริเวณที่จะสร้างบ้าน วิลล่า หรืออาคารตามแผนและระดับความสูงที่กำหนด"
        },
        "t5": {
          "title": "ทางเข้าและที่จอดรถ",
          "description": "ปรับผิวทางเดินรถ ทางเข้า และลานจอดรถตามระดับและความลาดเอียงที่ต้องการ"
        },
        "t6": {
          "title": "ทำความลาดเอียง",
          "description": "ปรับความลาดเอียงของผิวดินตามทิศทางที่ต้องการ โดยคำนึงถึงเส้นทางระบายน้ำเดิม"
        }
      },
      "included": {
        "title": "สิ่งที่เราคำนึงถึงในการปรับพื้นที่",
        "levels": {
          "title": "การเชื่อมต่อของระดับ",
          "description": "จัดระดับลาน ทางเข้า และพื้นที่ข้างเคียงให้สอดคล้องกับแผนการใช้ที่ดิน"
        },
        "slope": {
          "title": "ทิศทางน้ำฝน",
          "description": "พิจารณาว่าน้ำฝนไหลไปทางไหนและระดับใหม่มีผลอย่างไร พร้อมคุยเรื่องระบบระบายน้ำหากจำเป็น"
        },
        "material": {
          "title": "ใช้ดินในพื้นที่",
          "description": "ประเมินว่าดินส่วนใดย้ายใช้ภายในพื้นที่ได้ และต้องนำเข้าหรือขนออกเท่าไร"
        }
      },
      "seoBlock": {
        "title": "กำหนดระดับที่ดินอย่างไรให้เหมาะกับการใช้งาน",
        "p1": "เริ่มจากการใช้งานแต่ละโซน เช่น บ้าน ทางเข้า ที่จอดรถ หรือสวน แล้วกำหนดระดับเทียบกับถนน อาคารเดิม และพื้นที่รอบข้าง หากมีแบบระบุระดับ เราจะใช้ประกอบการประเมินและทำงาน",
        "p2": "พื้นที่ที่มีระดับต่างกันสามารถทำเป็นหลายลานและทางเชื่อมได้ ปริมาณตัดและถมขึ้นอยู่กับสภาพเดิมและระดับที่เลือก ที่ดินขนาดเท่ากันจึงอาจมีปริมาณงานต่างกันมาก",
        "p3": "กำหนดด้วยว่าจะย้ายดินที่ขุดไปไว้ไหนและใช้วัสดุอะไรถม ทางเข้าและพื้นที่ทำงานของเครื่องจักรมีผลต่อประเภทรถและจำนวนเที่ยว หากมีงานระบายน้ำ จะวางลำดับร่วมกับงานปรับระดับ"
      },
      "process": {
        "title": "ขั้นตอนการปรับระดับ",
        "p1": {
          "title": "ศึกษาพื้นที่",
          "description": "ดูรูป ทางเข้า และแบบที่มี พร้อมคุยเรื่องระดับที่ต่างกันและผลลัพธ์ที่ต้องการ หากจำเป็นจะนัดดูหน้างาน"
        },
        "p2": {
          "title": "ตกลงระดับและค่าใช้จ่าย",
          "description": "กำหนดจุดตัด จุดถม ระดับและความลาดเอียง พร้อมตกลงปริมาณงาน วัสดุ ระยะเวลา และเงื่อนไขชำระเงิน"
        },
        "p3": {
          "title": "ย้ายและเกลี่ยดิน",
          "description": "ใช้เครื่องจักรตัด ถม และปรับพื้นที่ พร้อมจัดขนวัสดุเข้าหรือออกหากรวมอยู่ในงาน"
        },
        "p4": {
          "title": "ตรวจสอบผลงาน",
          "description": "ตรวจสอบลาน ระดับ และความลาดเอียงตามงานที่กำหนด พร้อมคุยขั้นตอนถัดไปหากมีแผนทำต่อ"
        }
      },
      "pricing": {
        "title": "ปรับระดับที่ดินราคาเท่าไร",
        "text": "ราคาขึ้นอยู่กับขนาดพื้นที่ ความต่างระดับ ปริมาณและชนิดดินที่ต้องย้าย และทางเข้าเครื่องจักร ใบประเมินรวมค่าเครื่องจักร วัสดุถม และขนส่ง ราคาเครื่องจักรดูได้ในหน้าเครื่องจักรแต่ละคัน"
      },
      "cta": {
        "title": "บอกเราว่าต้องการปรับพื้นที่อย่างไร",
        "text": "ส่งโลเคชัน ขนาดพื้นที่โดยประมาณ รูปลักษณะพื้นที่และทางเข้า ระบุจุดที่ต้องการยกหรือลดระดับ หากมีแบบระบุความสูงให้แนบมาด้วย เราจะประเมินเบื้องต้นและแจ้งว่าต้องดูหน้างานหรือไม่"
      },
      "related": {
        "title": "งานอื่นสำหรับพื้นที่ของคุณ",
        "earthworks": {
          "title": "งานดิน",
          "description": "สำหรับหลายขั้นตอน เช่น เคลียร์พื้นที่ ขุด ถม และงานอื่นที่ต้องการให้ทีมเดียวประสานงาน"
        },
        "drainage": {
          "title": "ระบบระบายน้ำ",
          "description": "หากต้องใช้คู ร่อง หรือท่อเพื่อนำน้ำออก โดยวางแผนระดับดินและระบบระบายน้ำร่วมกัน"
        },
        "truck": {
          "title": "รถดั๊มและส่งดินถม",
          "description": "สำหรับขนวัสดุถมเข้า หรือขนดินส่วนเกินออก เราช่วยเลือกรถและประเมินค่าขนส่ง"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "ต้องปรับทั้งแปลงให้เป็นแนวราบทั้งหมดไหม?",
          "answer": "ไม่จำเป็น แต่ละโซนอาจต้องมีระดับและความลาดเอียงต่างกัน เราจะกำหนดตามการใช้งาน ทางเข้า และทิศทางน้ำไหล"
        },
        "q2": {
          "question": "ต้องเคลียร์ที่ดินก่อนหรือไม่?",
          "answer": "หากมีพืชรก ตอไม้ รากไม้ หรือเศษวัสดุในบริเวณทำงาน จะนำออกก่อนปรับพื้นที่ สามารถจองงานเคลียร์และปรับระดับพร้อมกัน โดยระบุขอบเขตและราคาแต่ละขั้นตอน"
        },
        "q3": {
          "question": "ต้องนำดินเข้ามาเพิ่มทุกครั้งไหม?",
          "answer": "ไม่เสมอไป หากดินเดิมเหมาะสมและมีเพียงพอ สามารถย้ายจากจุดสูงไปจุดต่ำได้ การขนเข้าหรือออกขึ้นอยู่กับระดับที่เลือก ปริมาณ และคุณสมบัติของวัสดุ"
        },
        "q4": {
          "question": "ทำสโลปให้น้ำฝนไหลได้ไหม?",
          "answer": "ได้ เราปรับความลาดเอียงของผิวดินได้ โดยกำหนดก่อนว่าน้ำจะไหลไปไหนและเชื่อมกับระบบระบายน้ำเดิมอย่างไร หากต้องขุดคูหรือวางท่อ จะคุยเป็นงานแยก"
        },
        "q5": {
          "question": "งานปรับระดับใช้เวลานานแค่ไหน?",
          "answer": "ที่ดินสำหรับบ้านหนึ่งหลังโดยทั่วไปใช้เวลาหนึ่งถึงสองวัน ลานสำหรับวิลล่าหลายหลังที่บ่อผุดเสร็จในไม่กี่วันด้วยทีมรถขุด รถดั๊ม และแทรกเตอร์ ทั้งที่ลูกค้าวางแผนจะเช่ารถขุดคันเดียวสองสัปดาห์ การใช้ทีมเครื่องจักรเร็วกว่าและค่าใช้จ่ายต่ำกว่า"
        },
        "q6": {
          "question": "ควรวางแผนระบายน้ำก่อนหรือหลังปรับระดับ?",
          "answer": "ควรวางแผนระดับดินและทางระบายน้ำก่อนเริ่มงาน ลำดับทำจริงขึ้นอยู่กับพื้นที่และระบบที่เลือก เพื่อกำหนดตำแหน่งคู ท่อ และความลาดเอียงไว้ล่วงหน้า"
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
      tone="muted"
      :items="includedItems"
    />

    <CoreContacts
      compact
      page="services/land-leveling"
      location="content"
      :name="t('landLeveling.seo.title')"
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
      class="mt-6 mb-10 sm:mb-14"
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
      :name="t('landLeveling.seo.title')"
    />

    <CoreFloatingContact
      page="services/land-leveling"
      :name="t('landLeveling.seo.title')"
    />
  </UPage>
</template>
