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
        "title": "Подготовка участка под строительство на Самуи - Дом, вилла, дорога",
        "description": "Подготовка участка под строительство на Самуи: расчистка, выравнивание, дренаж, подъезд, зона под фундамент, вывоз грунта и мусора.",
        "keywords": "подготовка участка под строительство самуи, подготовка земли самуи, site preparation koh samui, подготовка под фундамент самуи, подготовка участка под дом самуи, земляные работы самуи"
      },
      "hero": {
        "title": "Подготовка участка под строительство на Самуи",
        "description": "Готовим землю под дом, виллу, дорогу или стройплощадку: расчистка, уровни, подъезд, дренаж и вывоз."
      },
      "intro": "Готовим участки к строительству домов, вилл, дорог и коммерческих объектов на Самуи. Помогаем пройти путь от сырого участка до площадки, где можно начинать строительные работы: расчистить землю, убрать мусор и корни, сделать подъезд, подготовить зону под фундамент, продумать уровни, дренаж, завоз или вывоз материала.",
      "tasks": {
        "title": "Что входит в подготовку участка",
        "t1": {
          "title": "Оценка участка перед работами",
          "description": "Смотрим подъезд, уклон, воду, грунт, деревья, мусор и ограничения для техники."
        },
        "t2": {
          "title": "Расчистка территории",
          "description": "Убираем заросли, деревья, корни, старые конструкции и всё, что мешает стройке."
        },
        "t3": {
          "title": "Уровни и рабочие зоны",
          "description": "Готовим зоны под фундамент, технику, складирование материалов, дорогу и парковку."
        },
        "t4": {
          "title": "Дренаж и вода",
          "description": "Планируем уклоны и отвод воды, чтобы участок не заливало во время дождей."
        },
        "t5": {
          "title": "Подъезд к объекту",
          "description": "Готовим или улучшаем въезд, чтобы техника и грузовики могли нормально работать."
        },
        "t6": {
          "title": "Вывоз и доставка материалов",
          "description": "Организуем самосвалы для вывоза грунта, мусора или доставки песка, щебня и грунта."
        }
      },
      "included": {
        "title": "Почему подготовка важна до начала стройки",
        "build": {
          "title": "Стройка начинается быстрее",
          "description": "Когда участок подготовлен, строителям проще завезти материалы, поставить технику и начать работу."
        },
        "sequence": {
          "title": "Меньше хаоса на объекте",
          "description": "Правильная последовательность снижает риск переделок: расчистка, уровни, вода, подъезд, вывоз."
        },
        "team": {
          "title": "Техника и логистика вместе",
          "description": "Экскаваторы, самосвалы, доставка и вывоз работают как одна система."
        }
      },
      "seoBlock": {
        "title": "Подготовка земли перед строительством дома или виллы",
        "p1": "Перед строительством на Самуи важно подготовить не только место под дом, но и весь участок: подъезд для техники, зону складирования, направление воды, рабочие уровни и место для вывоза или завоза материалов.",
        "p2": "Если начать стройку без нормальной подготовки, часто появляются проблемы: техника не может заехать, вода стоит после дождя, грунт проседает, мусор мешает работам, а самосвалы не могут нормально разворачиваться.",
        "p3": "Мы оцениваем участок и подбираем порядок работ так, чтобы строительная команда получила понятную и готовую площадку для следующего этапа."
      },
      "process": {
        "title": "Как проходит подготовка",
        "p1": {
          "title": "Смотрим участок",
          "description": "Оцениваем локацию, подъезд, рельеф, воду, деревья, мусор и будущую зону строительства."
        },
        "p2": {
          "title": "Планируем этапы",
          "description": "Определяем, что делать сначала: расчистка, подъезд, дренаж, уровни, вывоз или доставка."
        },
        "p3": {
          "title": "Готовим площадку",
          "description": "Работаем техникой, убираем лишнее, формируем рабочие зоны и готовим землю."
        },
        "p4": {
          "title": "Передаём под стройку",
          "description": "Оставляем участок готовым для фундамента, дороги, техники или дальнейших строительных работ."
        }
      },
      "pricing": {
        "title": "Быстрый расчёт подготовки участка",
        "text": "Цена зависит от площади, подъезда, состояния участка, объёма расчистки, дренажа, выравнивания, вывоза и доставки материалов. Для расчёта отправьте локацию, фото участка, фото подъезда и короткое описание проекта."
      },
      "cta": {
        "title": "Отправьте фото участка перед строительством",
        "text": "Пришлите локацию, 3–5 фото и задачу: дом, вилла, дорога или другой проект. Мы подскажем, с чего начать подготовку."
      },
      "related": {
        "title": "Связанные услуги",
        "earthworks": {
          "title": "Земляные работы",
          "description": "Если нужна общая подготовка земли: расчистка, уровни, дренаж, отсыпка и вывоз."
        },
        "clearing": {
          "title": "Расчистка участка",
          "description": "Если участок зарос деревьями, кустами, корнями или старым мусором."
        },
        "drainage": {
          "title": "Дренаж участка",
          "description": "Если на участке стоит вода или нужно заранее продумать отвод перед строительством."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "Чем подготовка участка отличается от земляных работ?",
          "answer": "Земляные работы - широкий термин. Подготовка участка под строительство сфокусирована на том, чтобы площадка была готова именно для строителей, техники, фундамента и материалов."
        },
        "q2": {
          "question": "Можно подготовить участок под дом или виллу?",
          "answer": "Да. Готовим участки под дома, виллы, дороги, парковки и коммерческие объекты."
        },
        "q3": {
          "question": "Вы делаете подъезд для техники?",
          "answer": "Да. Можем подготовить или улучшить подъезд, чтобы экскаваторы, самосвалы и строительная техника могли работать."
        },
        "q4": {
          "question": "Нужно ли сначала делать дренаж?",
          "answer": "Если участок низкий или мокрый, дренаж лучше планировать до активной стройки и вместе с уровнями."
        },
        "q5": {
          "question": "Что нужно для расчёта?",
          "answer": "Локация, фото участка, фото подъезда, примерная площадь и описание будущего проекта."
        },
        "q6": {
          "question": "Можно после подготовки сразу начинать строительство?",
          "answer": "Зависит от проекта и требований строителей. Наша задача - подготовить землю, подъезд, уровни и рабочую зону для следующего этапа."
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
        "title": "Site Preparation on Koh Samui - Land Ready for Construction",
        "description": "Site preparation on Koh Samui for houses, villas, roads and construction sites: clearing, levels, drainage, access, foundation area, soil and debris removal.",
        "keywords": "site preparation koh samui, construction site preparation samui, land preparation koh samui, prepare land for building samui, villa site preparation samui, earthworks samui"
      },
      "hero": {
        "title": "Site preparation on Koh Samui",
        "description": "Preparing land for houses, villas, roads and construction sites: clearing, levels, access, drainage and removal."
      },
      "intro": "We prepare land for houses, villas, roads and commercial construction projects on Koh Samui. We help turn raw land into a site ready for builders: clearing vegetation and debris, preparing access, shaping working areas, planning drainage, organizing machinery, material delivery and removal.",
      "tasks": {
        "title": "What site preparation includes",
        "t1": {
          "title": "Site assessment",
          "description": "Checking access, slope, water, soil, trees, debris and machine limitations before work starts."
        },
        "t2": {
          "title": "Land clearing",
          "description": "Removing vegetation, trees, roots, old structures and everything that blocks construction."
        },
        "t3": {
          "title": "Levels and work areas",
          "description": "Preparing areas for foundations, machinery, material storage, access roads and parking."
        },
        "t4": {
          "title": "Drainage and water",
          "description": "Planning slopes and water runoff so the site does not flood during heavy rain."
        },
        "t5": {
          "title": "Site access",
          "description": "Preparing or improving access so machinery and trucks can work properly."
        },
        "t6": {
          "title": "Removal and material delivery",
          "description": "Organizing dump trucks for soil removal, debris removal or delivery of sand, gravel and fill soil."
        }
      },
      "included": {
        "title": "Why preparation matters before construction",
        "build": {
          "title": "Construction starts faster",
          "description": "A prepared site makes it easier for builders to bring materials, machinery and start work."
        },
        "sequence": {
          "title": "Less chaos on site",
          "description": "The right sequence reduces rework: clearing, access, drainage, levels, removal and delivery."
        },
        "team": {
          "title": "Machines and logistics together",
          "description": "Excavators, dump trucks, delivery and removal work as one coordinated system."
        }
      },
      "seoBlock": {
        "title": "Preparing land before building a house or villa",
        "p1": "Before construction on Koh Samui, it is not enough to prepare only the house footprint. The full site matters: machine access, material storage, water direction, working levels and space for trucks to move.",
        "p2": "Starting construction without proper site preparation often creates problems: machinery cannot enter, rainwater stays on the land, soil settles, debris blocks the work and trucks cannot turn around.",
        "p3": "We assess the land and plan the work sequence so the construction team receives a clear, usable site for the next stage."
      },
      "process": {
        "title": "How preparation works",
        "p1": {
          "title": "Site check",
          "description": "We check location, access, terrain, water, vegetation, debris and the future building area."
        },
        "p2": {
          "title": "Work planning",
          "description": "We decide the right order: clearing, access, drainage, levels, removal or material delivery."
        },
        "p3": {
          "title": "Site preparation",
          "description": "We work with machinery, remove obstacles, shape working areas and prepare the land."
        },
        "p4": {
          "title": "Ready for construction",
          "description": "We leave the site ready for foundations, roads, machinery or further building work."
        }
      },
      "pricing": {
        "title": "Fast quote for site preparation",
        "text": "The price depends on land size, access, site condition, clearing volume, drainage, leveling, removal and material delivery. Send location, site photos, access photos and a short project description."
      },
      "cta": {
        "title": "Send photos before you start construction",
        "text": "Share location, 3–5 photos and the project type: house, villa, road or another construction project. We’ll suggest where to start."
      },
      "related": {
        "title": "Related services",
        "earthworks": {
          "title": "Earthworks",
          "description": "For general land preparation: clearing, levels, drainage, backfilling and removal."
        },
        "clearing": {
          "title": "Land clearing",
          "description": "If the land has trees, bushes, roots or old debris that need to be removed."
        },
        "drainage": {
          "title": "Drainage work",
          "description": "If the site holds water or water runoff needs to be planned before construction."
        }
      },
      "faq": {
        "title": "Frequently asked questions",
        "q1": {
          "question": "How is site preparation different from earthworks?",
          "answer": "Earthworks is a broad term. Site preparation focuses on making the land ready for builders, machinery, foundations and material movement."
        },
        "q2": {
          "question": "Can you prepare land for a house or villa?",
          "answer": "Yes. We prepare land for houses, villas, roads, parking areas and commercial projects."
        },
        "q3": {
          "question": "Can you prepare access for machinery?",
          "answer": "Yes. We can prepare or improve access so excavators, dump trucks and construction machinery can work."
        },
        "q4": {
          "question": "Should drainage be planned first?",
          "answer": "If the site is low or wet, drainage should be planned before active construction and together with levels."
        },
        "q5": {
          "question": "What do you need for a quote?",
          "answer": "Location, site photos, access photos, approximate area and a short description of the future project."
        },
        "q6": {
          "question": "Can construction start immediately after preparation?",
          "answer": "It depends on the project and builder requirements. Our job is to prepare the land, access, levels and work area for the next stage."
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
        "title": "เตรียมพื้นที่ก่อสร้าง เกาะสมุย {'|'} เตรียมที่ดินสำหรับบ้านและวิลล่า",
        "description": "บริการเตรียมพื้นที่ก่อสร้างบนเกาะสมุย สำหรับบ้าน วิลล่า ถนน และไซต์งาน เคลียร์พื้นที่ ปรับระดับ ระบายน้ำ ทางเข้า และขนวัสดุออก",
        "keywords": "เตรียมพื้นที่ก่อสร้าง สมุย, เตรียมที่ดิน สมุย, งานดิน สมุย, เตรียมพื้นที่สร้างบ้าน สมุย, เตรียมพื้นที่วิลล่า สมุย, รถขุด สมุย"
      },
      "hero": {
        "title": "เตรียมพื้นที่ก่อสร้างบนเกาะสมุย",
        "description": "เตรียมที่ดินสำหรับบ้าน วิลล่า ถนน และไซต์ก่อสร้าง เคลียร์พื้นที่ ทำระดับ ทางเข้า ระบายน้ำ และขนออก"
      },
      "intro": "เรารับเตรียมพื้นที่สำหรับสร้างบ้าน วิลล่า ถนน และโครงการก่อสร้างบนเกาะสมุย ช่วยเปลี่ยนพื้นที่ดิบให้พร้อมสำหรับทีมก่อสร้าง เช่น เคลียร์พืชและเศษวัสดุ เตรียมทางเข้า ทำพื้นที่ทำงาน วางแผนระบายน้ำ จัดเครื่องจักร ขนวัสดุเข้าและขนของออก",
      "tasks": {
        "title": "งานเตรียมพื้นที่รวมอะไรบ้าง",
        "t1": {
          "title": "ประเมินหน้างาน",
          "description": "ดูทางเข้า ความลาดเอียง น้ำ ดิน ต้นไม้ เศษวัสดุ และข้อจำกัดของเครื่องจักร"
        },
        "t2": {
          "title": "เคลียร์พื้นที่",
          "description": "กำจัดพืช ต้นไม้ รากไม้ สิ่งปลูกสร้างเก่า และสิ่งที่ขวางงานก่อสร้าง"
        },
        "t3": {
          "title": "ทำระดับและพื้นที่ทำงาน",
          "description": "เตรียมพื้นที่สำหรับฐานราก เครื่องจักร วางวัสดุ ถนนทางเข้า และที่จอดรถ"
        },
        "t4": {
          "title": "ระบบน้ำและระบายน้ำ",
          "description": "วางสโลปและทางน้ำ เพื่อไม่ให้น้ำขังในไซต์ช่วงฝนตก"
        },
        "t5": {
          "title": "ทางเข้าไซต์งาน",
          "description": "เตรียมหรือปรับทางเข้า เพื่อให้รถขุด รถดั๊มพ์ และเครื่องจักรทำงานได้"
        },
        "t6": {
          "title": "ขนออกและส่งวัสดุ",
          "description": "จัดรถดั๊มพ์สำหรับขนดิน เศษวัสดุ หรือส่งทราย หิน ดินถมเข้าพื้นที่"
        }
      },
      "included": {
        "title": "ทำไมต้องเตรียมพื้นที่ก่อนก่อสร้าง",
        "build": {
          "title": "เริ่มงานก่อสร้างง่ายขึ้น",
          "description": "เมื่อพื้นที่พร้อม ทีมก่อสร้างสามารถนำวัสดุ เครื่องจักร และเริ่มงานได้เร็วขึ้น"
        },
        "sequence": {
          "title": "ลดความวุ่นวายในไซต์",
          "description": "ลำดับงานที่ดีช่วยลดการแก้งาน เช่น เคลียร์ ทางเข้า ระบายน้ำ ทำระดับ และขนออก"
        },
        "team": {
          "title": "เครื่องจักรและขนส่งครบ",
          "description": "รถขุด รถดั๊มพ์ การส่งวัสดุ และขนออกทำงานร่วมกันได้"
        }
      },
      "seoBlock": {
        "title": "เตรียมที่ดินก่อนสร้างบ้านหรือวิลล่า",
        "p1": "ก่อนเริ่มก่อสร้างบนเกาะสมุย ไม่ใช่แค่เตรียมจุดวางตัวบ้านเท่านั้น แต่ต้องดูทั้งพื้นที่ ทางเข้าเครื่องจักร จุดวางวัสดุ ทิศทางน้ำ ระดับพื้นที่ และพื้นที่ให้รถทำงาน",
        "p2": "ถ้าเริ่มก่อสร้างโดยไม่เตรียมพื้นที่ให้ดี อาจเจอปัญหา เช่น เครื่องจักรเข้าไม่ได้ น้ำขัง ดินยุบ เศษวัสดุขวางงาน หรือรถดั๊มพ์กลับรถลำบาก",
        "p3": "เราประเมินพื้นที่และวางลำดับงาน เพื่อให้ทีมก่อสร้างได้พื้นที่ที่พร้อมใช้งานสำหรับขั้นตอนต่อไป"
      },
      "process": {
        "title": "ขั้นตอนการเตรียมพื้นที่",
        "p1": {
          "title": "ดูหน้างาน",
          "description": "ดูโลเคชัน ทางเข้า ระดับพื้นที่ น้ำ ต้นไม้ เศษวัสดุ และตำแหน่งก่อสร้าง"
        },
        "p2": {
          "title": "วางแผนงาน",
          "description": "กำหนดลำดับงาน เช่น เคลียร์ ทางเข้า ระบายน้ำ ทำระดับ ขนออก หรือส่งวัสดุ"
        },
        "p3": {
          "title": "เตรียมพื้นที่",
          "description": "ใช้เครื่องจักรจัดพื้นที่ เอาสิ่งกีดขวางออก และทำพื้นที่ทำงาน"
        },
        "p4": {
          "title": "พร้อมก่อสร้างต่อ",
          "description": "เตรียมพื้นที่ให้พร้อมสำหรับฐานราก ถนน เครื่องจักร หรือขั้นตอนก่อสร้างต่อไป"
        }
      },
      "pricing": {
        "title": "ประเมินราคาเตรียมพื้นที่",
        "text": "ราคาขึ้นอยู่กับขนาดพื้นที่ ทางเข้า สภาพหน้างาน งานเคลียร์ ระบายน้ำ ปรับระดับ การขนออก และการส่งวัสดุ ส่งโลเคชัน รูปพื้นที่ รูปทางเข้า และรายละเอียดโครงการเพื่อประเมินราคา"
      },
      "cta": {
        "title": "ส่งรูปพื้นที่ก่อนเริ่มก่อสร้าง",
        "text": "ส่งโลเคชัน รูป 3–5 รูป และบอกประเภทงาน เช่น บ้าน วิลล่า ถนน หรือโครงการอื่น เราจะแนะนำว่าควรเริ่มจากอะไร"
      },
      "related": {
        "title": "บริการที่เกี่ยวข้อง",
        "earthworks": {
          "title": "งานดิน",
          "description": "สำหรับเตรียมที่ดินแบบรวม เช่น เคลียร์ ทำระดับ ระบายน้ำ ถมดิน และขนออก"
        },
        "clearing": {
          "title": "เคลียร์ที่ดิน",
          "description": "ถ้ามีต้นไม้ พุ่มไม้ รากไม้ หรือเศษวัสดุเก่าที่ต้องเอาออก"
        },
        "drainage": {
          "title": "ระบบระบายน้ำ",
          "description": "ถ้าพื้นที่มีน้ำขัง หรือจำเป็นต้องวางทางน้ำก่อนก่อสร้าง"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "เตรียมพื้นที่ต่างจากงานดินยังไง?",
          "answer": "งานดินเป็นคำกว้าง ส่วนเตรียมพื้นที่ก่อสร้างจะเน้นให้ไซต์พร้อมสำหรับทีมก่อสร้าง เครื่องจักร ฐานราก และวัสดุ"
        },
        "q2": {
          "question": "เตรียมพื้นที่สร้างบ้านหรือวิลล่าได้ไหม?",
          "answer": "ได้ครับ เราเตรียมพื้นที่สำหรับบ้าน วิลล่า ถนน ที่จอดรถ และโครงการก่อสร้าง"
        },
        "q3": {
          "question": "ทำทางเข้าเครื่องจักรได้ไหม?",
          "answer": "ได้ครับ เราสามารถเตรียมหรือปรับทางเข้าให้รถขุด รถดั๊มพ์ และเครื่องจักรทำงานได้"
        },
        "q4": {
          "question": "ควรวางแผนระบายน้ำก่อนใช่ไหม?",
          "answer": "ถ้าที่ดินต่ำหรือเปียก ควรวางแผนระบายน้ำพร้อมกับระดับพื้นที่ก่อนเริ่มก่อสร้าง"
        },
        "q5": {
          "question": "ต้องส่งอะไรเพื่อประเมินราคา?",
          "answer": "ส่งโลเคชัน รูปพื้นที่ รูปทางเข้า ขนาดโดยประมาณ และรายละเอียดโครงการที่จะก่อสร้าง"
        },
        "q6": {
          "question": "หลังเตรียมพื้นที่แล้วเริ่มสร้างได้เลยไหม?",
          "answer": "ขึ้นอยู่กับแบบและความต้องการของทีมก่อสร้าง งานของเราคือเตรียมดิน ทางเข้า ระดับ และพื้นที่ทำงานให้พร้อมสำหรับขั้นตอนต่อไป"
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
      :items="includedItems"
    />


    <CoreContactsMini
      page="services/site-preparation"
      location="content"
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
      class="mt-6"
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
    />
  </UPage>
</template>
