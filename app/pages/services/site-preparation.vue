<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const heroTitle = computed(() => t('sitePreparation.hero.title'));
const heroDescription = computed(() => t('sitePreparation.hero.description'));

const tasksItems = computed(() => [
  {
    icon: 'i-lucide-land-plot',
    title: t('sitePreparation.tasks.t1.title'),
    description: t('sitePreparation.tasks.t1.description'),
  },
  {
    icon: 'i-lucide-tree-pine',
    title: t('sitePreparation.tasks.t2.title'),
    description: t('sitePreparation.tasks.t2.description'),
  },
  {
    icon: 'i-lucide-ruler',
    title: t('sitePreparation.tasks.t3.title'),
    description: t('sitePreparation.tasks.t3.description'),
  },
  {
    icon: 'i-lucide-droplets',
    title: t('sitePreparation.tasks.t4.title'),
    description: t('sitePreparation.tasks.t4.description'),
  },
  {
    icon: 'i-lucide-route',
    title: t('sitePreparation.tasks.t5.title'),
    description: t('sitePreparation.tasks.t5.description'),
  },
  {
    icon: 'i-lucide-truck',
    title: t('sitePreparation.tasks.t6.title'),
    description: t('sitePreparation.tasks.t6.description'),
  },
]);

const includedItems = computed(() => [
  {
    icon: 'i-heroicons-home-modern',
    title: t('sitePreparation.included.build.title'),
    description: t('sitePreparation.included.build.description'),
  },
  {
    icon: 'i-heroicons-map',
    title: t('sitePreparation.included.sequence.title'),
    description: t('sitePreparation.included.sequence.description'),
  },
  {
    icon: 'i-heroicons-truck',
    title: t('sitePreparation.included.team.title'),
    description: t('sitePreparation.included.team.description'),
  },
]);

const processItems = computed(() => [
  {
    icon: 'i-lucide-map-pin',
    title: t('sitePreparation.process.p1.title'),
    description: t('sitePreparation.process.p1.description'),
  },
  {
    icon: 'i-lucide-clipboard-list',
    title: t('sitePreparation.process.p2.title'),
    description: t('sitePreparation.process.p2.description'),
  },
  {
    icon: 'i-lucide-shovel',
    title: t('sitePreparation.process.p3.title'),
    description: t('sitePreparation.process.p3.description'),
  },
  {
    icon: 'i-lucide-check-circle',
    title: t('sitePreparation.process.p4.title'),
    description: t('sitePreparation.process.p4.description'),
  },
]);

const relatedServices = computed(() => [
  {
    icon: 'i-lucide-land-plot',
    title: t('sitePreparation.related.earthworks.title'),
    description: t('sitePreparation.related.earthworks.description'),
    to: localePath({ name: 'services-earthworks' }),
  },
  {
    icon: 'i-lucide-tree-pine',
    title: t('sitePreparation.related.clearing.title'),
    description: t('sitePreparation.related.clearing.description'),
    to: localePath({ name: 'services-land-clearing' }),
  },
  {
    icon: 'i-lucide-droplets',
    title: t('sitePreparation.related.drainage.title'),
    description: t('sitePreparation.related.drainage.description'),
    to: localePath({ name: 'services-drainage' }),
  },
]);

const faqItems = computed(() => [
  { question: t('sitePreparation.faq.q1.question'), answer: t('sitePreparation.faq.q1.answer') },
  { question: t('sitePreparation.faq.q2.question'), answer: t('sitePreparation.faq.q2.answer') },
  { question: t('sitePreparation.faq.q3.question'), answer: t('sitePreparation.faq.q3.answer') },
  { question: t('sitePreparation.faq.q4.question'), answer: t('sitePreparation.faq.q4.answer') },
  { question: t('sitePreparation.faq.q5.question'), answer: t('sitePreparation.faq.q5.answer') },
  { question: t('sitePreparation.faq.q6.question'), answer: t('sitePreparation.faq.q6.answer') },
]);

const photos = computed(() => {
  const order = [
    'house-construction',
    'villa-plot-preparation',
    'access-road-for-construction',
    'foundation-area-preparation',
    'site-preparation-for-construction',
    'construction-site-cleanup',
  ];

  return order.map((key) => ({
    title: t(`sitePreparation.photos.${key}.title`),
    alt: t(`sitePreparation.photos.${key}.alt`),
    src: `/images/services/site-preparation/photos/${key}.webp`,
  }));
});

const seoBlock = computed(() => ({
  title: t('sitePreparation.seoBlock.title'),
  paragraphs: [
    t('sitePreparation.seoBlock.p1'),
    t('sitePreparation.seoBlock.p2'),
    t('sitePreparation.seoBlock.p3'),
  ],
}));

const serviceTypes = computed(() => [
  t('sitePreparation.schema.serviceTypes.sitePreparation'),
  t('sitePreparation.schema.serviceTypes.constructionPreparation'),
  t('sitePreparation.schema.serviceTypes.foundationPreparation'),
  t('sitePreparation.schema.serviceTypes.accessPreparation'),
  t('sitePreparation.schema.serviceTypes.workAreaPreparation'),
]);

useServiceSeo({
  t,
  path: '/services/site-preparation',
  prefix: 'sitePreparation',
  image: {
    url: 'https://supermansamui.com/images/services/site-preparation/hero.webp',
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
    "sitePreparation": {
      "schema": {
        "name": "Подготовка участка под строительство на Самуи",
        "serviceTypes": {
          "sitePreparation": "Подготовка участка под строительство",
          "constructionPreparation": "Подготовка строительной площадки",
          "foundationPreparation": "Подготовка зоны под фундамент",
          "accessPreparation": "Подготовка подъезда к участку",
          "workAreaPreparation": "Подготовка рабочей зоны"
        }
      },
      "seo": {
        "title": "Подготовка участка под строительство на Самуи",
        "description": "Готовим участки под строительство домов и вилл на Самуи: подъезд, рабочие зоны и необходимые земляные работы. Согласуем этапы, стоимость и условия до начала.",
        "keywords": "подготовка участка под строительство самуи, подготовка участка под дом самуи, подготовка строительной площадки самуи, подъезд к стройке самуи"
      },
      "hero": {
        "title": "Подготовка участка под строительство на Самуи",
        "description": "Готовим площадку к началу стройки: подъезд для техники, место под здание и зоны для работы и хранения материалов. Подбираем этапы с учётом вашего проекта."
      },
      "intro": "Оценим участок, изучим план строительства и подскажем, с чего начать. Определим объём подготовки, подберём технику и пропишем стоимость и условия до начала работ. Можно заказать всю подготовку или отдельный этап.",
      "tasks": {
        "title": "Какие работы могут понадобиться",
        "t1": {
          "title": "Оценка участка и проекта",
          "description": "Уточняем расположение здания, границы работ и требования строителей. Проверяем подъезд и условия для техники."
        },
        "t2": {
          "title": "Освобождение зоны строительства",
          "description": "Убираем растительность, пни и мусор в согласованных границах. Заранее отмечаем, что нужно сохранить."
        },
        "t3": {
          "title": "Рабочие площадки",
          "description": "Готовим место под здание, площадки для техники и хранения материалов по согласованным уровням и плану."
        },
        "t4": {
          "title": "Отвод воды на время стройки",
          "description": "Уточняем, куда будет уходить дождевая вода. Определяем нужные канавы, трубы и порядок их устройства."
        },
        "t5": {
          "title": "Подъезд и движение по участку",
          "description": "Готовим въезд и проезды с учётом машин, которые будут работать на объекте, мест разгрузки и разворота."
        },
        "t6": {
          "title": "Доставка и вывоз",
          "description": "Организуем доставку грунта, песка и щебня, вывоз лишнего грунта и мусора в нужной последовательности."
        }
      },
      "included": {
        "title": "Что даёт подготовка по плану",
        "build": {
          "title": "Удобный старт для строителей",
          "description": "Подъезд, разгрузку и размещение материалов продумываем до приезда строительной команды."
        },
        "sequence": {
          "title": "Согласованный порядок работ",
          "description": "Подстраиваем подготовку под этапы стройки, чтобы не перекрыть проезд и не занять нужные рабочие зоны."
        },
        "team": {
          "title": "Одна команда на подготовку",
          "description": "Координируем работу экскаваторов и самосвалов, доставку материалов и вывоз с участка."
        }
      },
      "seoBlock": {
        "title": "Что учесть перед строительством дома или виллы",
        "p1": "Подготовка начинается с того, как будет устроена стройплощадка. Где расположится дом, откуда заедут грузовики, куда сложить материалы и оставить место для техники — эти вопросы стоит решить до начала работ.",
        "p2": "Если у вас есть план участка, отметки высот и требования подрядчика, пришлите их вместе с фотографиями. По ним определим границы подготовки и результат каждого этапа. Если данных пока мало, подскажем, что нужно уточнить со строителями.",
        "p3": "Состав работ зависит от состояния участка и проекта. Где-то достаточно подготовить въезд и рабочую зону, а где-то нужны расчистка, изменение уровней и водоотвод. Включаем в расчёт согласованные работы и заранее обсуждаем дополнительные задачи."
      },
      "process": {
        "title": "Как готовим участок к стройке",
        "p1": {
          "title": "Изучаем проект и участок",
          "description": "Обсуждаем будущую стройку, смотрим фото, план и подъезд. При необходимости осматриваем участок."
        },
        "p2": {
          "title": "Согласуем объём и цену",
          "description": "Определяем этапы, технику, доставку и вывоз. Фиксируем стоимость, условия и ожидаемый результат."
        },
        "p3": {
          "title": "Выполняем подготовку",
          "description": "Готовим подъезд и рабочие зоны по согласованному плану. Дополнительные работы обсуждаем до выполнения."
        },
        "p4": {
          "title": "Проверяем результат",
          "description": "Вместе с вами или вашим подрядчиком сверяем выполненные работы с согласованным объёмом и планом."
        }
      },
      "pricing": {
        "title": "Стоимость подготовки участка",
        "text": "Цена зависит от состояния участка, объёма работ, подъезда, техники и перевозок. В расчёте укажем, что включено: работы, материалы, доставка и вывоз. Тарифы на технику есть на странице каждой машины."
      },
      "cta": {
        "title": "Обсудим подготовку вашего участка",
        "text": "Пришлите локацию, фото участка и подъезда, расскажите, что планируете строить. Если есть план — приложите его. Предложим порядок работ и рассчитаем стоимость."
      },
      "related": {
        "title": "Подробнее об отдельных работах",
        "earthworks": {
          "title": "Земляные работы",
          "description": "Все направления: котлованы, траншеи, отсыпка, планировка и другие работы с грунтом."
        },
        "clearing": {
          "title": "Расчистка участка",
          "description": "Удаление зарослей, деревьев, пней и мусора в выбранной зоне или на всём участке."
        },
        "drainage": {
          "title": "Дренаж участка",
          "description": "Канавы, трубы и другие работы для отвода воды с участка."
        }
      },
      "faq": {
        "title": "Вопросы о подготовке к строительству",
        "q1": {
          "question": "Что входит в подготовку участка?",
          "answer": "Состав подбираем под проект: это могут быть расчистка, подъезд, рабочие площадки, планировка, отвод воды, доставка и вывоз. До начала фиксируем, какие работы включены в заказ и какой результат нужен строителям."
        },
        "q2": {
          "question": "Можно заказать только часть подготовки?",
          "answer": "Да. Например, подготовить въезд, освободить зону под дом или устроить площадку для материалов. Уточним, какие работы уже выполнены и что понадобится для следующего этапа стройки."
        },
        "q3": {
          "question": "Подготовите подъезд для строительной техники?",
          "answer": "Да, можем подготовить или улучшить подъезд. Сначала уточним размеры машин, ширину въезда, уклоны и места для разгрузки и разворота. Объём работ и материалы определяем после оценки условий."
        },
        "q4": {
          "question": "Когда нужно заниматься отводом воды?",
          "answer": "Его стоит обсудить при планировании площадки вместе с будущими уровнями и проездами. Какие работы выполнять первыми, зависит от участка и проекта. Временный отвод воды на стройке и постоянный дренаж обсуждаем отдельно."
        },
        "q5": {
          "question": "Можно рассчитать стоимость без готового проекта?",
          "answer": "Для первого обсуждения достаточно локации, фото участка и подъезда, примерной площади и описания будущей стройки. Дадим предварительную оценку и уточним, какие данные нужны для расчёта. Уровни, границы и требования к площадкам необходимо согласовать до выполнения соответствующих работ."
        },
        "q6": {
          "question": "После подготовки можно сразу делать фундамент?",
          "answer": "Готовность к фундаментным работам определяет ваш строитель или инженер по проекту и состоянию основания. Мы выполняем согласованный объём подготовки; требования к отметкам, основанию и уплотнению нужно определить заранее."
        }
      },
      "photos": {
        "title": "Примеры подготовки участков",
        "site-preparation-for-construction": {
          "title": "Подготовка участка под стройку",
          "alt": "Комплексная подготовка участка под строительство на Самуи"
        },
        "house-construction": {
          "title": "Подготовка под строительство дома",
          "alt": "Земляные работы под строительство дома или виллы на Самуи"
        },
        "villa-plot-preparation": {
          "title": "Подготовка участка под виллу",
          "alt": "Подготовка земли под строительство виллы на Самуи"
        },
        "foundation-area-preparation": {
          "title": "Зона под фундамент",
          "alt": "Подготовка зоны под фундамент дома или виллы"
        },
        "access-road-for-construction": {
          "title": "Подъезд к стройке",
          "alt": "Подготовка подъездной дороги для строительной техники"
        },
        "construction-site-cleanup": {
          "title": "Очистка стройплощадки",
          "alt": "Очистка и подготовка строительной площадки перед началом работ"
        }
      }
    }
  },
  "en": {
    "sitePreparation": {
      "schema": {
        "name": "Site preparation for construction on Koh Samui",
        "serviceTypes": {
          "sitePreparation": "Site preparation",
          "constructionPreparation": "Construction site preparation",
          "foundationPreparation": "Foundation area preparation",
          "accessPreparation": "Access preparation",
          "workAreaPreparation": "Work area preparation"
        }
      },
      "seo": {
        "title": "Construction Site Preparation on Koh Samui",
        "description": "Preparing house and villa sites on Koh Samui: access, work areas and the earthworks your project needs. Scope, prices and terms agreed before work starts.",
        "keywords": "site preparation koh samui, construction site preparation samui, house site preparation samui, construction access samui"
      },
      "hero": {
        "title": "Construction site preparation on Koh Samui",
        "description": "Prepare for the start of construction with machinery access, a building area and space to work and store materials. We plan the stages your project needs."
      },
      "intro": "We assess your land, review your construction plans and suggest where to start. We define the scope, select the machinery and set out prices and terms before work begins. Book the full preparation or an individual stage.",
      "tasks": {
        "title": "Work your site may need",
        "t1": {
          "title": "Site and project assessment",
          "description": "We confirm the building location, work boundaries and builder requirements, then check access and machinery constraints."
        },
        "t2": {
          "title": "Clearing the construction area",
          "description": "We remove vegetation, stumps and debris within the marked boundaries, marking what needs to stay before work starts."
        },
        "t3": {
          "title": "Work areas",
          "description": "We prepare the building area and space for machinery and materials to the layout and levels in your plan."
        },
        "t4": {
          "title": "Water runoff during construction",
          "description": "We check where rainwater will go and plan any channels or pipes needed and when to install them."
        },
        "t5": {
          "title": "Access and movement on site",
          "description": "We prepare entrances and routes around the vehicles using the site, with space for unloading and turning."
        },
        "t6": {
          "title": "Delivery and removal",
          "description": "We coordinate soil, sand and gravel deliveries, plus surplus soil and debris removal, around the work sequence."
        }
      },
      "included": {
        "title": "Why plan site preparation",
        "build": {
          "title": "An easier start for your builders",
          "description": "Access, unloading and material storage are planned before the construction team arrives."
        },
        "sequence": {
          "title": "A clear work sequence",
          "description": "We coordinate preparation with construction stages to keep access routes and work areas available."
        },
        "team": {
          "title": "One team for preparation",
          "description": "We coordinate excavators, dump trucks, material deliveries and removal from the site."
        }
      },
      "seoBlock": {
        "title": "Before building a house or villa",
        "p1": "Preparation starts with the site layout. Where will the house sit? How will trucks enter? Where can materials be stored while leaving room for machinery? These decisions help define the work before it begins.",
        "p2": "If you have a site plan, target levels or contractor requirements, send them with your photos. They help us define the preparation boundaries and the result of each stage. If details are still missing, we can suggest what to clarify with your builder.",
        "p3": "The scope depends on the land and your project. Some sites only need access and a work area; others need clearing, grading and drainage. Our estimate covers the listed work, and we discuss additional tasks before carrying them out."
      },
      "process": {
        "title": "How we prepare your site",
        "p1": {
          "title": "Review the site and plans",
          "description": "We discuss your build, review photos, plans and access, and visit the site if needed."
        },
        "p2": {
          "title": "Agree on scope and price",
          "description": "We define stages, machinery, deliveries and removal, then confirm the cost, terms and expected result."
        },
        "p3": {
          "title": "Carry out the preparation",
          "description": "We prepare access and work areas to the plan. Any additional work is discussed before it starts."
        },
        "p4": {
          "title": "Review the completed work",
          "description": "We check the completed work against the scope and plan with you or your contractor."
        }
      },
      "pricing": {
        "title": "Site preparation costs",
        "text": "The price depends on site conditions, work volumes, access, machinery and transport. The estimate sets out which work, materials, deliveries and removal are included. Machine rates are listed on each equipment page."
      },
      "cta": {
        "title": "Let’s plan your site preparation",
        "text": "Send the location, photos of the land and access, and a short description of your build. Include a plan if you have one. We’ll suggest a work sequence and estimate the cost."
      },
      "related": {
        "title": "More about individual services",
        "earthworks": {
          "title": "Earthworks",
          "description": "Explore excavation, trenching, filling, grading and other groundworks."
        },
        "clearing": {
          "title": "Land clearing",
          "description": "Vegetation, tree, stump and debris removal from a selected area or the whole plot."
        },
        "drainage": {
          "title": "Land drainage",
          "description": "Channels, pipes and other work to direct water off your site."
        }
      },
      "faq": {
        "title": "Site preparation questions",
        "q1": {
          "question": "What does site preparation include?",
          "answer": "The scope fits your project and may include clearing, access, work areas, grading, drainage, deliveries and removal. Before starting, we confirm the work included and the result your builders need."
        },
        "q2": {
          "question": "Can I book just part of the preparation?",
          "answer": "Yes. You can book access preparation, clearing the building area or creating a material storage area, for example. We check what is already done and what the next construction stage needs."
        },
        "q3": {
          "question": "Can you prepare access for construction vehicles?",
          "answer": "Yes, we can prepare or improve access. We first check vehicle dimensions, entrance width, slopes, and space for unloading and turning. The scope and materials are set after assessing site conditions."
        },
        "q4": {
          "question": "When should water runoff be addressed?",
          "answer": "Discuss it when planning the site layout, together with levels and access routes. The order of work depends on the site and project. Temporary runoff measures during construction and permanent drainage are handled separately."
        },
        "q5": {
          "question": "Can you estimate costs before the plans are complete?",
          "answer": "For an initial discussion, send the location, site and access photos, approximate area and a description of the build. We can give an initial estimate and identify the details needed to refine it. Levels, boundaries and work area requirements must be defined before the relevant work starts."
        },
        "q6": {
          "question": "Can foundation work start immediately afterwards?",
          "answer": "Your builder or engineer determines readiness for foundation work based on the design and ground conditions. We carry out the preparation as scoped; requirements for levels, the formation and compaction need to be defined beforehand."
        }
      },
      "photos": {
        "title": "Site preparation examples",
        "site-preparation-for-construction": {
          "title": "Site preparation",
          "alt": "Full land preparation for construction"
        },
        "house-construction": {
          "title": "Construction preparation",
          "alt": "Preparing land for house or villa"
        },
        "villa-plot-preparation": {
          "title": "Villa plot preparation",
          "alt": "Land preparation for villa construction on Koh Samui"
        },
        "foundation-area-preparation": {
          "title": "Foundation area preparation",
          "alt": "Preparing foundation area for house or villa"
        },
        "access-road-for-construction": {
          "title": "Construction access road",
          "alt": "Preparing access road for construction machinery"
        },
        "construction-site-cleanup": {
          "title": "Construction site cleanup",
          "alt": "Cleaning and preparing a construction site before work starts"
        }
      }
    }
  },
  "th": {
    "sitePreparation": {
      "schema": {
        "name": "เตรียมพื้นที่ก่อสร้างบนเกาะสมุย",
        "serviceTypes": {
          "sitePreparation": "เตรียมพื้นที่ก่อสร้าง",
          "constructionPreparation": "เตรียมไซต์ก่อสร้าง",
          "foundationPreparation": "เตรียมพื้นที่ฐานราก",
          "accessPreparation": "เตรียมทางเข้าไซต์",
          "workAreaPreparation": "เตรียมพื้นที่ทำงาน"
        }
      },
      "seo": {
        "title": "เตรียมพื้นที่ก่อสร้างบนเกาะสมุย",
        "description": "เตรียมพื้นที่สร้างบ้านและวิลล่าบนเกาะสมุย ทำทางเข้า พื้นที่ทำงาน และงานดินตามโครงการ ตกลงขอบเขต ราคา และเงื่อนไขก่อนเริ่มงาน",
        "keywords": "เตรียมพื้นที่ก่อสร้าง สมุย, เตรียมที่ดินสร้างบ้าน สมุย, เตรียมไซต์ก่อสร้าง เกาะสมุย, ทางเข้าไซต์ก่อสร้าง สมุย"
      },
      "hero": {
        "title": "เตรียมพื้นที่ก่อสร้างบนเกาะสมุย",
        "description": "เตรียมทางเข้าเครื่องจักร พื้นที่ตัวอาคาร พื้นที่ทำงานและวางวัสดุก่อนเริ่มก่อสร้าง กำหนดขั้นตอนที่จำเป็นให้เหมาะกับโครงการของคุณ"
      },
      "intro": "เราประเมินพื้นที่ ดูแผนก่อสร้าง และแนะนำว่าควรเริ่มจากอะไร กำหนดขอบเขตงาน เลือกเครื่องจักร พร้อมระบุราคาและเงื่อนไขก่อนเริ่มงาน เลือกได้ทั้งการเตรียมพื้นที่ทั้งหมดหรือเฉพาะบางขั้นตอน",
      "tasks": {
        "title": "งานที่อาจจำเป็นสำหรับพื้นที่ของคุณ",
        "t1": {
          "title": "ประเมินพื้นที่และโครงการ",
          "description": "ตรวจสอบตำแหน่งอาคาร ขอบเขตงาน และข้อกำหนดของผู้รับเหมา พร้อมดูทางเข้าและข้อจำกัดในการใช้เครื่องจักร"
        },
        "t2": {
          "title": "เคลียร์บริเวณก่อสร้าง",
          "description": "กำจัดพืช ตอไม้ และเศษวัสดุภายในขอบเขตที่กำหนด โดยทำเครื่องหมายสิ่งที่ต้องเก็บไว้ก่อนเริ่มงาน"
        },
        "t3": {
          "title": "เตรียมพื้นที่ทำงาน",
          "description": "เตรียมบริเวณตัวอาคาร พื้นที่เครื่องจักร และจุดวางวัสดุตามผังและระดับที่กำหนด"
        },
        "t4": {
          "title": "ทางระบายน้ำระหว่างก่อสร้าง",
          "description": "ตรวจสอบจุดระบายน้ำฝนออกจากพื้นที่ วางแผนงานร่องระบายน้ำหรือท่อที่จำเป็นและลำดับการติดตั้ง"
        },
        "t5": {
          "title": "ทางเข้าและทางสัญจรในไซต์",
          "description": "เตรียมทางเข้าและทางวิ่งให้เหมาะกับรถที่จะใช้งาน รวมถึงจุดลงวัสดุและพื้นที่กลับรถ"
        },
        "t6": {
          "title": "ส่งวัสดุและขนออก",
          "description": "จัดส่งดิน ทราย และหิน พร้อมขนดินส่วนเกินและเศษวัสดุออกให้สอดคล้องกับลำดับงาน"
        }
      },
      "included": {
        "title": "เตรียมพื้นที่ตามแผนช่วยอะไรบ้าง",
        "build": {
          "title": "ทีมก่อสร้างเริ่มงานสะดวกขึ้น",
          "description": "วางแผนทางเข้า จุดลงวัสดุ และพื้นที่จัดเก็บก่อนทีมก่อสร้างเข้าหน้างาน"
        },
        "sequence": {
          "title": "ลำดับงานชัดเจน",
          "description": "ประสานงานเตรียมพื้นที่กับขั้นตอนก่อสร้าง เพื่อให้ทางเข้าและพื้นที่ทำงานยังใช้งานได้"
        },
        "team": {
          "title": "ทีมเดียวดูแลงานเตรียมพื้นที่",
          "description": "ประสานรถขุด รถดั๊มพ์ การส่งวัสดุ และการขนออกจากไซต์ให้ทำงานต่อเนื่องกัน"
        }
      },
      "seoBlock": {
        "title": "สิ่งที่ควรวางแผนก่อนสร้างบ้านหรือวิลล่า",
        "p1": "เริ่มจากผังการใช้พื้นที่ในไซต์ บ้านจะอยู่ตรงไหน รถบรรทุกจะเข้าทางใด และจะวางวัสดุไว้จุดไหนโดยยังเหลือพื้นที่ให้เครื่องจักรทำงาน ควรกำหนดเรื่องเหล่านี้ก่อนเริ่มเตรียมพื้นที่",
        "p2": "หากมีผังที่ดิน ระดับที่ต้องการ หรือข้อกำหนดของผู้รับเหมา ส่งมาพร้อมรูปถ่ายได้ ข้อมูลเหล่านี้ช่วยกำหนดขอบเขตและผลลัพธ์ของแต่ละขั้นตอน หากข้อมูลยังไม่ครบ เราจะแนะนำสิ่งที่ควรสอบถามทีมก่อสร้างเพิ่มเติม",
        "p3": "ขอบเขตงานขึ้นอยู่กับสภาพที่ดินและโครงการ บางพื้นที่ต้องการเพียงทางเข้าและพื้นที่ทำงาน ส่วนบางแห่งต้องเคลียร์ ปรับระดับ และจัดทางระบายน้ำ เราคำนวณราคาตามรายการงาน และพูดคุยเรื่องงานเพิ่มเติมก่อนดำเนินการ"
      },
      "process": {
        "title": "ขั้นตอนเตรียมพื้นที่ก่อนก่อสร้าง",
        "p1": {
          "title": "ดูพื้นที่และแผนก่อสร้าง",
          "description": "พูดคุยรายละเอียดโครงการ ดูรูป ผัง และทางเข้า พร้อมเข้าดูหน้างานหากจำเป็น"
        },
        "p2": {
          "title": "ตกลงขอบเขตและราคา",
          "description": "กำหนดขั้นตอน เครื่องจักร การส่งวัสดุและขนออก พร้อมยืนยันราคา เงื่อนไข และผลลัพธ์ที่ต้องการ"
        },
        "p3": {
          "title": "ดำเนินงานเตรียมพื้นที่",
          "description": "เตรียมทางเข้าและพื้นที่ทำงานตามแผน หากมีงานเพิ่มเติมจะพูดคุยก่อนดำเนินการ"
        },
        "p4": {
          "title": "ตรวจสอบผลงานร่วมกัน",
          "description": "ตรวจงานที่ทำเสร็จเทียบกับขอบเขตและแผนร่วมกับคุณหรือผู้รับเหมา"
        }
      },
      "pricing": {
        "title": "ราคาเตรียมพื้นที่ก่อสร้าง",
        "text": "ราคาขึ้นอยู่กับสภาพพื้นที่ ปริมาณงาน ทางเข้า เครื่องจักร และการขนส่ง ใบประเมินระบุว่างาน วัสดุ การส่งและขนออกส่วนใดรวมอยู่ในราคา ราคาเครื่องจักรดูได้ในหน้าเครื่องจักรแต่ละคัน"
      },
      "cta": {
        "title": "มาวางแผนเตรียมพื้นที่ของคุณ",
        "text": "ส่งโลเคชัน รูปพื้นที่และทางเข้า พร้อมบอกว่าจะก่อสร้างอะไร หากมีผังสามารถแนบมาด้วยได้ เราจะแนะนำลำดับงานและประเมินราคาให้"
      },
      "related": {
        "title": "รายละเอียดงานแต่ละประเภท",
        "earthworks": {
          "title": "งานดิน",
          "description": "ดูบริการขุดบ่อ ขุดร่อง ถมดิน ปรับระดับ และงานดินประเภทอื่น"
        },
        "clearing": {
          "title": "เคลียร์ที่ดิน",
          "description": "กำจัดพืช ต้นไม้ ตอไม้ และเศษวัสดุเฉพาะบริเวณหรือทั้งแปลง"
        },
        "drainage": {
          "title": "งานระบายน้ำ",
          "description": "ขุดร่อง วางท่อ และงานอื่น ๆ เพื่อระบายน้ำออกจากพื้นที่"
        }
      },
      "faq": {
        "title": "คำถามเกี่ยวกับการเตรียมพื้นที่ก่อสร้าง",
        "q1": {
          "question": "งานเตรียมพื้นที่มีอะไรบ้าง?",
          "answer": "เลือกตามความจำเป็นของโครงการ เช่น เคลียร์พื้นที่ ทำทางเข้า พื้นที่ทำงาน ปรับระดับ ระบายน้ำ ส่งวัสดุและขนออก ก่อนเริ่มงานจะยืนยันรายการที่รวมในขอบเขตและผลลัพธ์ที่ทีมก่อสร้างต้องการ"
        },
        "q2": {
          "question": "จ้างเฉพาะบางขั้นตอนได้ไหม?",
          "answer": "ได้ เช่น เตรียมทางเข้า เคลียร์บริเวณตัวบ้าน หรือทำพื้นที่วางวัสดุ เราจะสอบถามว่างานใดทำไปแล้วและต้องเตรียมอะไรสำหรับขั้นตอนก่อสร้างถัดไป"
        },
        "q3": {
          "question": "เตรียมทางเข้าสำหรับรถก่อสร้างได้ไหม?",
          "answer": "ได้ เราสามารถเตรียมหรือปรับปรุงทางเข้า โดยตรวจสอบขนาดรถ ความกว้างทางเข้า ความลาดชัน จุดลงวัสดุและพื้นที่กลับรถก่อน ขอบเขตงานและวัสดุจะกำหนดหลังประเมินสภาพพื้นที่"
        },
        "q4": {
          "question": "ควรวางแผนระบายน้ำตอนไหน?",
          "answer": "ควรพูดคุยตั้งแต่จัดผังไซต์ พร้อมกับระดับพื้นที่และทางสัญจร ลำดับงานขึ้นอยู่กับสภาพที่ดินและโครงการ โดยแยกพิจารณางานระบายน้ำชั่วคราวระหว่างก่อสร้างและระบบถาวร"
        },
        "q5": {
          "question": "ยังไม่มีแบบครบ ประเมินราคาได้ไหม?",
          "answer": "เริ่มพูดคุยได้จากโลเคชัน รูปพื้นที่และทางเข้า ขนาดโดยประมาณ และรายละเอียดสิ่งที่จะสร้าง เราจะประเมินเบื้องต้นและแจ้งข้อมูลที่ต้องการเพิ่มเติม ระดับ ขอบเขต และข้อกำหนดของพื้นที่ทำงานต้องกำหนดก่อนเริ่มงานส่วนนั้น"
        },
        "q6": {
          "question": "เตรียมพื้นที่เสร็จแล้วทำฐานรากได้ทันทีไหม?",
          "answer": "ผู้รับเหมาหรือวิศวกรของคุณเป็นผู้พิจารณาความพร้อมตามแบบและสภาพดิน เราดำเนินงานเตรียมพื้นที่ตามขอบเขตที่กำหนด โดยต้องระบุข้อกำหนดเรื่องระดับ ชั้นดินรองรับ และการบดอัดไว้ล่วงหน้า"
        }
      },
      "photos": {
        "title": "ตัวอย่างงานเตรียมพื้นที่",
        "site-preparation-for-construction": {
          "title": "เตรียมพื้นที่",
          "alt": "เตรียมพื้นที่ก่อสร้าง"
        },
        "house-construction": {
          "title": "เตรียมบ้าน",
          "alt": "เตรียมพื้นที่สร้างบ้าน"
        },
        "villa-plot-preparation": {
          "title": "เตรียมพื้นที่วิลล่า",
          "alt": "เตรียมที่ดินสำหรับสร้างวิลล่าบนเกาะสมุย"
        },
        "foundation-area-preparation": {
          "title": "เตรียมพื้นที่ฐานราก",
          "alt": "เตรียมพื้นที่สำหรับฐานรากบ้านหรือวิลล่า"
        },
        "access-road-for-construction": {
          "title": "ทางเข้าไซต์ก่อสร้าง",
          "alt": "เตรียมถนนทางเข้าสำหรับเครื่องจักรก่อสร้าง"
        },
        "construction-site-cleanup": {
          "title": "จัดพื้นที่ไซต์งาน",
          "alt": "เคลียร์และเตรียมไซต์ก่อสร้างก่อนเริ่มงาน"
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
      imageSrc="/images/services/site-preparation/hero.webp"
      page="services/site-preparation"
    />

    <ServiceIntro :text="t('sitePreparation.intro')" />

    <ServiceIncluded
      :title="t('sitePreparation.tasks.title')"
      :items="tasksItems"
    />

    <ServiceIncluded
      :title="t('sitePreparation.included.title')"
      tone="muted"
      :items="includedItems"
    />


    <CoreContacts
      compact
      page="services/site-preparation"
      location="content"
      :name="t('sitePreparation.seo.title')"
    />

    <ServiceProjects service="site-preparation" />

    <ServiceGallery
      :title="t('sitePreparation.photos.title')"
      :items="photos"
    />

    <ServiceIncluded
      :title="t('sitePreparation.process.title')"
      :items="processItems"
    />

    <UAlert
      :title="t('sitePreparation.pricing.title')"
      :description="t('sitePreparation.pricing.text')"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-calculator"
    />

    <UAlert
      :title="t('sitePreparation.cta.title')"
      :description="t('sitePreparation.cta.text')"
      class="mt-6 mb-10 sm:mb-14"
      variant="soft"
      color="primary"
      icon="i-lucide-camera"
    />

    <ServiceRelated
      :title="t('sitePreparation.related.title')"
      :items="relatedServices"
    />

    <ServiceSeoBlock
      :title="seoBlock.title"
      :paragraphs="seoBlock.paragraphs"
    />

    <CoreFAQ
      :title="t('sitePreparation.faq.title')"
      :items="faqItems"
    />

    <CoreContacts
      page="services/site-preparation"
      location="bottom"
      :name="t('sitePreparation.seo.title')"
    />

    <CoreFloatingContact
      page="services/site-preparation"
      :name="t('sitePreparation.seo.title')"
    />
  </UPage>
</template>
