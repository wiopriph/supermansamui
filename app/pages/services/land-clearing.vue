<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const heroTitle = computed(() => t('landClearing.hero.title'));
const heroDescription = computed(() => t('landClearing.hero.description'));

const tasksItems = computed(() => [
  {
    icon: 'i-lucide-tree-pine',
    title: t('landClearing.tasks.t1.title'),
    description: t('landClearing.tasks.t1.description'),
  },
  {
    icon: 'i-lucide-shovel',
    title: t('landClearing.tasks.t2.title'),
    description: t('landClearing.tasks.t2.description'),
  },
  {
    icon: 'i-lucide-leaf',
    title: t('landClearing.tasks.t3.title'),
    description: t('landClearing.tasks.t3.description'),
  },
  {
    icon: 'i-lucide-hammer',
    title: t('landClearing.tasks.t4.title'),
    description: t('landClearing.tasks.t4.description'),
  },
  {
    icon: 'i-lucide-trash-2',
    title: t('landClearing.tasks.t5.title'),
    description: t('landClearing.tasks.t5.description'),
  },
  {
    icon: 'i-lucide-hard-hat',
    title: t('landClearing.tasks.t6.title'),
    description: t('landClearing.tasks.t6.description'),
  },
]);

const includedItems = computed(() => [
  {
    icon: 'i-heroicons-bolt',
    title: t('landClearing.included.machine.title'),
    description: t('landClearing.included.machine.description'),
  },
  {
    icon: 'i-heroicons-shield-check',
    title: t('landClearing.included.roots.title'),
    description: t('landClearing.included.roots.description'),
  },
  {
    icon: 'i-heroicons-truck',
    title: t('landClearing.included.removal.title'),
    description: t('landClearing.included.removal.description'),
  },
]);

const processItems = computed(() => [
  {
    icon: 'i-lucide-map-pin',
    title: t('landClearing.process.p1.title'),
    description: t('landClearing.process.p1.description'),
  },
  {
    icon: 'i-lucide-clipboard-list',
    title: t('landClearing.process.p2.title'),
    description: t('landClearing.process.p2.description'),
  },
  {
    icon: 'i-lucide-shovel',
    title: t('landClearing.process.p3.title'),
    description: t('landClearing.process.p3.description'),
  },
  {
    icon: 'i-lucide-truck',
    title: t('landClearing.process.p4.title'),
    description: t('landClearing.process.p4.description'),
  },
]);

const relatedServices = computed(() => [
  {
    icon: 'i-lucide-land-plot',
    title: t('landClearing.related.earthworks.title'),
    description: t('landClearing.related.earthworks.description'),
    to: localePath({ name: 'services-earthworks' }),
  },
  {
    icon: 'i-lucide-ruler',
    title: t('landClearing.related.leveling.title'),
    description: t('landClearing.related.leveling.description'),
    to: localePath({ name: 'services-land-leveling' }),
  },
  {
    icon: 'i-lucide-truck',
    title: t('landClearing.related.truck.title'),
    description: t('landClearing.related.truck.description'),
    to: localePath({ name: 'services-truck' }),
  },
]);

const faqItems = computed(() => [
  { question: t('landClearing.faq.q1.question'), answer: t('landClearing.faq.q1.answer') },
  { question: t('landClearing.faq.q2.question'), answer: t('landClearing.faq.q2.answer') },
  { question: t('landClearing.faq.q3.question'), answer: t('landClearing.faq.q3.answer') },
  { question: t('landClearing.faq.q4.question'), answer: t('landClearing.faq.q4.answer') },
  { question: t('landClearing.faq.q5.question'), answer: t('landClearing.faq.q5.answer') },
  { question: t('landClearing.faq.q6.question'), answer: t('landClearing.faq.q6.answer') },
]);

const photos = computed(() => {
  const order = [
    'overgrown-land-clearing',
    'tree-root-removal',
    'structure-demolition',
    'jungle-land-clearing',
    'debris-removal-after-clearing',
    'clean-land-ready-for-excavation',
  ];

  return order.map((key) => ({
    title: t(`landClearing.photos.${key}.title`),
    alt: t(`landClearing.photos.${key}.alt`),
    src: `/images/services/land-clearing/photos/${key}.webp`,
  }));
});

const serviceTypes = computed(() => [
  t('landClearing.schema.serviceTypes.landClearing'),
  t('landClearing.schema.serviceTypes.treeRemoval'),
  t('landClearing.schema.serviceTypes.rootRemoval'),
  t('landClearing.schema.serviceTypes.vegetationClearing'),
  t('landClearing.schema.serviceTypes.debrisRemoval'),
  t('landClearing.schema.serviceTypes.structureDemolition'),
]);

const seoBlock = computed(() => ({
  title: t('landClearing.seoBlock.title'),
  paragraphs: [
    t('landClearing.seoBlock.p1'),
    t('landClearing.seoBlock.p2'),
    t('landClearing.seoBlock.p3'),
  ],
}));

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://supermansamui.com/services/land-clearing#service',
      name: t('landClearing.schema.name'),
      description: t('landClearing.seo.description'),
      provider: { '@id': 'https://supermansamui.com#business' },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Koh Samui, Surat Thani, Thailand',
      },
      serviceType: serviceTypes.value,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t('landClearing.tasks.title'),
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
  const title = t('landClearing.seo.title');
  const description = t('landClearing.seo.description');
  const keywords = t('landClearing.seo.keywords');
  const image = 'https://supermansamui.com/images/services/land-clearing/hero.webp';

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
    "landClearing": {
      "schema": {
        "name": "Расчистка участка на Самуи",
        "serviceTypes": {
          "landClearing": "Расчистка участка",
          "structureDemolition": "Демонтаж строений",
          "treeRemoval": "Удаление деревьев",
          "rootRemoval": "Удаление корней",
          "vegetationClearing": "Расчистка зарослей",
          "debrisRemoval": "Вывоз мусора после расчистки"
        }
      },
      "seo": {
        "title": "Расчистка участка на Самуи - Удаление деревьев, корней и мусора",
        "description": "Расчистка участка на Самуи под строительство дома, виллы или дороги: удаление деревьев, корней, кустов, зарослей, старых конструкций и вывоз мусора.",
        "keywords": "расчистка участка самуи, удаление деревьев самуи, удаление корней самуи, расчистка земли самуи, подготовка участка самуи, вывоз мусора самуи, экскаватор самуи"
      },
      "hero": {
        "title": "Расчистка участка на Самуи",
        "description": "Удаляем деревья, корни, заросли, мусор и старые конструкции перед строительством."
      },
      "intro": "Расчищаем участки под дома, виллы, дороги и строительные проекты на Самуи. Убираем деревья, кусты, корни, пальмы, старые конструкции, строительный мусор и плотную растительность. Работаем экскаваторами и самосвалами, поэтому можем не просто срезать верх, а подготовить землю к следующему этапу: копке, выравниванию, дренажу или строительству.",
      "tasks": {
        "title": "Что входит в расчистку участка",
        "t1": {
          "title": "Удаление деревьев",
          "description": "Убираем деревья, пальмы и крупную растительность, которые мешают строительству или подъезду техники."
        },
        "t2": {
          "title": "Удаление корней",
          "description": "Выкапываем крупные корни, чтобы они не мешали фундаменту, отсыпке и дальнейшей планировке."
        },
        "t3": {
          "title": "Расчистка зарослей",
          "description": "Очищаем участок от кустов, травы, джунглей и плотной растительности."
        },
        "t4": {
          "title": "Демонтаж строений",
          "description": "Разбираем старые заборы, навесы, лёгкие конструкции, металлические элементы и остатки построек."
        },
        "t5": {
          "title": "Сбор и вывоз мусора",
          "description": "Собираем ветки, корни, камни, мусор и вывозим материал самосвалами."
        },
        "t6": {
          "title": "Подготовка к следующему этапу",
          "description": "Оставляем участок готовым для экскавации, выравнивания, дренажа или строительства."
        }
      },
      "included": {
        "title": "Почему важно расчистить участок правильно",
        "machine": {
          "title": "Быстрее, чем вручную",
          "description": "Техника позволяет быстрее убрать деревья, корни и тяжёлый мусор."
        },
        "roots": {
          "title": "Удаляем не только верх",
          "description": "Корни и органика под землёй могут мешать стройке и вызывать просадку грунта."
        },
        "removal": {
          "title": "Сразу организуем вывоз",
          "description": "После расчистки можем вывезти ветки, корни, мусор, камни и лишний грунт."
        }
      },
      "seoBlock": {
        "title": "Расчистка земли перед строительством",
        "p1": "Перед строительством важно не просто срезать деревья и траву, а убрать всё, что будет мешать дальнейшим работам. на Самуи участки часто заросшие, с пальмами, глубокими корнями, старым мусором, камнями и плохим подъездом.",
        "p2": "Если оставить корни и органику под землёй, позже могут появиться просадки, пустоты и проблемы при отсыпке или строительстве. Поэтому мы оцениваем участок, подъезд, объём растительности и заранее подбираем технику.",
        "p3": "После расчистки можно переходить к выравниванию участка, дренажу, отсыпке или подготовке под фундамент."
      },
      "process": {
        "title": "Как проходит работа",
        "p1": {
          "title": "Оцениваем участок",
          "description": "Смотрим фото, локацию, подъезд, деревья, корни, мусор и объём работ."
        },
        "p2": {
          "title": "Планируем технику",
          "description": "Подбираем экскаватор, самосвал и порядок работ под реальные условия участка."
        },
        "p3": {
          "title": "Расчищаем землю",
          "description": "Убираем деревья, корни, заросли, мусор и старые конструкции."
        },
        "p4": {
          "title": "Вывозим материал",
          "description": "При необходимости грузим и вывозим ветки, корни, мусор, камни и лишний грунт."
        }
      },
      "pricing": {
        "title": "Быстрый расчёт по расчистке участка",
        "text": "Цена зависит от площади, количества деревьев, корней, мусора, доступа для техники и необходимости вывоза. Для расчёта отправьте локацию, 3–5 фото участка и короткое описание задачи."
      },
      "cta": {
        "title": "Отправьте фото участка - оценим объём расчистки",
        "text": "Пришлите локацию, фото подъезда и участка. Мы подскажем, какая техника нужна и сколько может занять работа."
      },
      "related": {
        "title": "Что может понадобиться после расчистки",
        "earthworks": {
          "title": "Земляные работы",
          "description": "Если нужно полностью подготовить участок: уровни, дренаж, отсыпка, техника и вывоз."
        },
        "leveling": {
          "title": "Выравнивание участка",
          "description": "Следующий этап после расчистки, если нужно сделать ровную площадку под строительство."
        },
        "truck": {
          "title": "Самосвалы и вывоз",
          "description": "Для вывоза веток, корней, земли, камней и строительного мусора."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "Вы удаляете корни или только срезаете деревья?",
          "answer": "Можем удалить корни экскаватором. Это важно, если участок готовится под строительство, отсыпку или выравнивание."
        },
        "q2": {
          "question": "Можно расчистить сильно заросший участок?",
          "answer": "Да. Работаем с заросшими участками, пальмами, кустами, корнями и плотной растительностью."
        },
        "q3": {
          "question": "Вы вывозите мусор после расчистки?",
          "answer": "Да. Можем организовать вывоз веток, корней, камней, строительного мусора и лишнего грунта."
        },
        "q4": {
          "question": "Сколько времени занимает расчистка?",
          "answer": "Зависит от площади, доступа, количества деревьев и объёма вывоза. Небольшой участок можно расчистить за день, крупный - за несколько дней."
        },
        "q5": {
          "question": "Что нужно для расчёта?",
          "answer": "Локация, 3–5 фото участка, фото подъезда и короткое описание того, что нужно убрать."
        },
        "q6": {
          "question": "Можно после расчистки сразу выровнять участок?",
          "answer": "Да. После расчистки можно перейти к выравниванию, отсыпке, дренажу или другим земляным работам."
        }
      },
      "photos": {
        "title": "Примеры расчистки участков",
        "overgrown-land-clearing": {
          "title": "Расчистка заросшего участка",
          "alt": "Расчистка заросшего участка от кустов и деревьев на Самуи"
        },
        "tree-root-removal": {
          "title": "Удаление корней",
          "alt": "Удаление корней деревьев экскаватором на участке на Самуи"
        },
        "jungle-land-clearing": {
          "title": "Расчистка джунглей",
          "alt": "Очистка плотной растительности и джунглей перед строительством на Самуи"
        },
        "debris-removal-after-clearing": {
          "title": "Вывоз мусора после расчистки",
          "alt": "Погрузка веток, корней и мусора после расчистки участка"
        },
        "clean-land-ready-for-excavation": {
          "title": "Участок готов к работам",
          "alt": "Очищенный участок готов к экскавации и строительству"
        },
        "structure-demolition": {
          "title": "Демонтаж строений",
          "alt": "Демонтаж старых строений и металлических конструкций при расчистке участка на Самуи"
        }
      }
    }
  },
  "en": {
    "landClearing": {
      "schema": {
        "name": "Land clearing on Koh Samui",
        "serviceTypes": {
          "landClearing": "Land clearing",
          "structureDemolition": "Structure demolition",
          "treeRemoval": "Tree removal",
          "rootRemoval": "Root removal",
          "vegetationClearing": "Vegetation clearing",
          "debrisRemoval": "Debris removal after clearing"
        }
      },
      "seo": {
        "title": "Land Clearing on Koh Samui - Tree, Root & Debris Removal",
        "description": "Land clearing on Koh Samui for houses, villas and construction: tree removal, root removal, vegetation clearing, small demolition and debris removal.",
        "keywords": "land clearing koh samui, tree removal koh samui, root removal samui, vegetation clearing samui, land clearing service samui, site clearing koh samui, excavator samui"
      },
      "hero": {
        "title": "Land clearing on Koh Samui",
        "description": "Tree removal, root clearing, vegetation clearing and site cleanup before construction."
      },
      "intro": "We clear land for houses, villas, roads and construction projects on Koh Samui. We remove trees, palms, roots, bushes, dense vegetation, old structures and debris. With excavators and dump trucks, we can prepare the site properly for the next stage: excavation, leveling, drainage or construction.",
      "tasks": {
        "title": "What land clearing includes",
        "t1": {
          "title": "Tree removal",
          "description": "Removing trees, palms and large vegetation that block construction or machine access."
        },
        "t2": {
          "title": "Root removal",
          "description": "Digging out large roots so they do not affect foundations, backfilling or leveling."
        },
        "t3": {
          "title": "Vegetation clearing",
          "description": "Clearing bushes, grass, jungle growth and dense vegetation from the site."
        },
        "t4": {
          "title": "Structure demolition",
          "description": "Removing old fences, sheds, light structures, metal elements and leftover building parts."
        },
        "t5": {
          "title": "Debris collection and removal",
          "description": "Collecting branches, roots, stones and waste and removing them with dump trucks."
        },
        "t6": {
          "title": "Ready for the next stage",
          "description": "Leaving the site ready for excavation, leveling, drainage or construction."
        }
      },
      "included": {
        "title": "Why proper clearing matters",
        "machine": {
          "title": "Faster than manual work",
          "description": "Machines remove trees, roots and heavy debris much faster."
        },
        "roots": {
          "title": "Not just surface cutting",
          "description": "Roots and organic material underground can create settling and construction problems."
        },
        "removal": {
          "title": "Debris removal included if needed",
          "description": "We can remove branches, roots, stones, debris and excess soil after clearing."
        }
      },
      "seoBlock": {
        "title": "Clearing land before construction",
        "p1": "Before construction starts, land needs more than simple grass cutting. Many plots on Koh Samui have dense vegetation, palms, deep roots, old debris, rocks and difficult access.",
        "p2": "If roots and organic material stay underground, they can cause settling, voids and problems during backfilling or construction. We check the site, access and amount of vegetation before choosing the right machinery.",
        "p3": "After land clearing, the site can move to land leveling, drainage, backfilling or foundation work."
      },
      "process": {
        "title": "How the work is done",
        "p1": {
          "title": "Site check",
          "description": "We check photos, location, access, trees, roots, debris and work volume."
        },
        "p2": {
          "title": "Machine planning",
          "description": "We choose the right excavator, dump truck and work sequence for the site."
        },
        "p3": {
          "title": "Land clearing",
          "description": "We remove trees, roots, vegetation, debris and old structures."
        },
        "p4": {
          "title": "Material removal",
          "description": "If needed, we load and remove branches, roots, waste, rocks and excess soil."
        }
      },
      "pricing": {
        "title": "Fast quote for land clearing",
        "text": "The price depends on land size, number of trees, roots, debris, machine access and removal needs. Send location, 3–5 photos and a short task description."
      },
      "cta": {
        "title": "Send photos of your land - we’ll estimate the clearing work",
        "text": "Share location, access photos and site photos. We’ll suggest the right machinery and work plan."
      },
      "related": {
        "title": "You may need next",
        "earthworks": {
          "title": "Earthworks",
          "description": "For full site preparation: levels, drainage, backfilling, machinery and removal."
        },
        "leveling": {
          "title": "Land leveling",
          "description": "The next stage after clearing if you need a flat area for construction."
        },
        "truck": {
          "title": "Dump trucks and hauling",
          "description": "For removing branches, roots, soil, rocks and construction waste."
        }
      },
      "faq": {
        "title": "Frequently asked questions",
        "q1": {
          "question": "Do you remove roots or only cut trees?",
          "answer": "We can remove roots with an excavator. This is important when the land is being prepared for construction, backfilling or leveling."
        },
        "q2": {
          "question": "Can you clear heavily overgrown land?",
          "answer": "Yes. We work with overgrown plots, palms, bushes, roots and dense vegetation."
        },
        "q3": {
          "question": "Do you remove debris after clearing?",
          "answer": "Yes. We can remove branches, roots, rocks, construction waste and excess soil."
        },
        "q4": {
          "question": "How long does land clearing take?",
          "answer": "It depends on land size, access, number of trees and removal volume. Small plots can take one day, larger plots may take several days."
        },
        "q5": {
          "question": "What do you need for a quote?",
          "answer": "Location, 3–5 photos of the land, access photos and a short description of what needs to be removed."
        },
        "q6": {
          "question": "Can you level the land after clearing?",
          "answer": "Yes. After clearing, we can continue with leveling, backfilling, drainage or other earthworks."
        }
      },
      "photos": {
        "title": "Land clearing examples",
        "overgrown-land-clearing": {
          "title": "Overgrown land clearing",
          "alt": "Clearing overgrown land with bushes and trees on Koh Samui"
        },
        "tree-root-removal": {
          "title": "Tree root removal",
          "alt": "Removing tree roots with excavator on Koh Samui land"
        },
        "jungle-land-clearing": {
          "title": "Jungle land clearing",
          "alt": "Clearing dense jungle vegetation before construction on Koh Samui"
        },
        "debris-removal-after-clearing": {
          "title": "Debris removal after clearing",
          "alt": "Loading branches, roots and debris after land clearing"
        },
        "clean-land-ready-for-excavation": {
          "title": "Clean land ready for work",
          "alt": "Cleared land ready for excavation and construction"
        },
        "structure-demolition": {
          "title": "Structure demolition",
          "alt": "Demolition of old structures and metal elements during land clearing on Koh Samui"
        }
      }
    }
  },
  "th": {
    "landClearing": {
      "schema": {
        "name": "เคลียร์ที่ดินบนเกาะสมุย",
        "serviceTypes": {
          "landClearing": "เคลียร์ที่ดิน",
          "structureDemolition": "รื้อถอนสิ่งปลูกสร้าง",
          "treeRemoval": "ตัดต้นไม้",
          "rootRemoval": "ขุดรากไม้",
          "vegetationClearing": "เคลียร์พืชรก",
          "debrisRemoval": "ขนเศษวัสดุออกหลังเคลียร์พื้นที่"
        }
      },
      "seo": {
        "title": "เคลียร์ที่ดิน เกาะสมุย {'|'} ตัดต้นไม้ ขุดรากไม้ และขนเศษวัสดุ",
        "description": "บริการเคลียร์ที่ดินบนเกาะสมุย ตัดต้นไม้ ขุดรากไม้ เคลียร์พืชรก รื้อสิ่งปลูกสร้างเล็ก และขนเศษวัสดุออก พร้อมรถขุดและรถดั๊มพ์",
        "keywords": "เคลียร์ที่ดิน สมุย, ตัดต้นไม้ สมุย, ขุดรากไม้ สมุย, เคลียร์พื้นที่ สมุย, รถขุด สมุย, ขนเศษวัสดุ สมุย"
      },
      "hero": {
        "title": "เคลียร์ที่ดินบนเกาะสมุย",
        "description": "ตัดต้นไม้ ขุดรากไม้ เคลียร์พืชรก และเตรียมพื้นที่ก่อนก่อสร้าง"
      },
      "intro": "เรารับเคลียร์ที่ดินสำหรับสร้างบ้าน วิลล่า ถนน และหน้างานก่อสร้างบนเกาะสมุย ตัดต้นไม้ ขุดรากไม้ เคลียร์พืชรก ต้นปาล์ม สิ่งปลูกสร้างเก่า และเศษวัสดุ ใช้รถขุดและรถดั๊มพ์ให้เหมาะกับหน้างาน เพื่อเตรียมพื้นที่ให้พร้อมสำหรับขั้นตอนต่อไป เช่น ขุดดิน ปรับระดับ ถมดิน หรือก่อสร้าง",
      "tasks": {
        "title": "งานเคลียร์พื้นที่รวมอะไรบ้าง",
        "t1": {
          "title": "ตัดต้นไม้",
          "description": "ตัดต้นไม้ ต้นปาล์ม และพืชใหญ่ที่ขวางพื้นที่ก่อสร้างหรือทางเข้าเครื่องจักร"
        },
        "t2": {
          "title": "ขุดรากไม้",
          "description": "ขุดรากไม้ขนาดใหญ่ที่อาจมีปัญหากับฐานราก การถมดิน หรือการปรับระดับ"
        },
        "t3": {
          "title": "เคลียร์พืชรก",
          "description": "เคลียร์หญ้า พุ่มไม้ พืชรก และพื้นที่ที่ปล่อยทิ้งไว้นาน"
        },
        "t4": {
          "title": "รื้อถอนสิ่งปลูกสร้าง",
          "description": "รื้อถอนรั้วเก่า เพิง โครงสร้างเบา เหล็ก และเศษวัสดุจากสิ่งปลูกสร้างเดิม"
        },
        "t5": {
          "title": "รวบรวมและขนออก",
          "description": "รวบรวมกิ่งไม้ รากไม้ หิน และเศษวัสดุ แล้วขนออกด้วยรถดั๊มพ์"
        },
        "t6": {
          "title": "เตรียมพร้อมขั้นตอนต่อไป",
          "description": "เตรียมพื้นที่ให้พร้อมสำหรับขุดดิน ปรับระดับ ถมดิน หรือก่อสร้าง"
        }
      },
      "included": {
        "title": "ทำไมต้องเคลียร์พื้นที่ให้ถูกวิธี",
        "machine": {
          "title": "เร็วกว่าใช้แรงงานอย่างเดียว",
          "description": "รถขุดช่วยจัดการต้นไม้ รากไม้ และเศษวัสดุหนักได้เร็วกว่า"
        },
        "roots": {
          "title": "ไม่ใช่แค่ตัดด้านบน",
          "description": "รากไม้และอินทรียวัตถุใต้ดินอาจทำให้ดินยุบหรือมีปัญหาตอนก่อสร้าง"
        },
        "removal": {
          "title": "ขนเศษวัสดุออกได้",
          "description": "หลังเคลียร์พื้นที่ สามารถขนกิ่งไม้ รากไม้ หิน เศษวัสดุ และดินออกได้"
        }
      },
      "seoBlock": {
        "title": "เคลียร์ที่ดินก่อนเริ่มก่อสร้าง",
        "p1": "ก่อนสร้างบ้านหรือวิลล่า พื้นที่ต้องพร้อมมากกว่าการตัดหญ้า หลายพื้นที่บนสมุยมีต้นไม้ พืชรก รากลึก เศษวัสดุเก่า หิน และทางเข้าที่จำกัด",
        "p2": "ถ้าปล่อยรากไม้หรือเศษอินทรีย์ไว้ใต้ดิน อาจทำให้ดินยุบหรือมีปัญหาตอนถมดินและก่อสร้าง เราจึงดูหน้างาน ทางเข้า และปริมาณงานก่อนเลือกเครื่องจักร",
        "p3": "หลังเคลียร์พื้นที่แล้ว สามารถทำขั้นตอนต่อไป เช่น ปรับระดับ ถมดิน ทำระบายน้ำ หรือเตรียมฐานรากได้"
      },
      "process": {
        "title": "ขั้นตอนการทำงาน",
        "p1": {
          "title": "ดูหน้างาน",
          "description": "ดูรูป โลเคชัน ทางเข้า ต้นไม้ รากไม้ เศษวัสดุ และปริมาณงาน"
        },
        "p2": {
          "title": "วางแผนเครื่องจักร",
          "description": "เลือกขนาดรถขุด รถดั๊มพ์ และลำดับงานให้เหมาะกับพื้นที่"
        },
        "p3": {
          "title": "เคลียร์พื้นที่",
          "description": "ตัดต้นไม้ ขุดรากไม้ เคลียร์พืชรก เศษวัสดุ และโครงสร้างเก่า"
        },
        "p4": {
          "title": "ขนวัสดุออก",
          "description": "หากต้องการ เราสามารถขนกิ่งไม้ รากไม้ หิน เศษวัสดุ และดินออกได้"
        }
      },
      "pricing": {
        "title": "ประเมินราคางานเคลียร์ที่ดิน",
        "text": "ราคาขึ้นอยู่กับขนาดพื้นที่ จำนวนต้นไม้ รากไม้ เศษวัสดุ ทางเข้าเครื่องจักร และการขนออก ส่งโลเคชัน รูป 3–5 รูป และรายละเอียดงานเพื่อประเมินราคา"
      },
      "cta": {
        "title": "ส่งรูปพื้นที่มาให้เราประเมิน",
        "text": "ส่งโลเคชัน รูปทางเข้า และรูปพื้นที่ เราจะแนะนำเครื่องจักรและแผนงานที่เหมาะสม"
      },
      "related": {
        "title": "บริการที่อาจต้องใช้ต่อ",
        "earthworks": {
          "title": "งานดิน",
          "description": "สำหรับงานเตรียมพื้นที่แบบครบชุด เช่น ปรับระดับ ถมดิน ระบายน้ำ และขนดินออก"
        },
        "leveling": {
          "title": "ปรับระดับที่ดิน",
          "description": "ขั้นตอนต่อไปหลังเคลียร์พื้นที่ ถ้าต้องการพื้นที่เรียบสำหรับก่อสร้าง"
        },
        "truck": {
          "title": "รถดั๊มพ์และขนวัสดุออก",
          "description": "สำหรับขนกิ่งไม้ รากไม้ ดิน หิน และเศษวัสดุก่อสร้าง"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "ขุดรากไม้ด้วยไหม หรือแค่ตัดต้นไม้?",
          "answer": "ทำได้ทั้งสองแบบ ถ้าพื้นที่เตรียมก่อสร้าง แนะนำให้ขุดรากไม้ใหญ่ด้วย"
        },
        "q2": {
          "question": "เคลียร์พื้นที่รกมากได้ไหม?",
          "answer": "ได้ครับ เราทำงานกับพื้นที่รก ต้นปาล์ม พุ่มไม้ รากไม้ และพืชหนาแน่น"
        },
        "q3": {
          "question": "ขนเศษวัสดุออกให้ได้ไหม?",
          "answer": "ได้ครับ สามารถจัดรถดั๊มพ์ขนกิ่งไม้ รากไม้ หิน ดิน และเศษวัสดุออกได้"
        },
        "q4": {
          "question": "ใช้เวลากี่วัน?",
          "answer": "ขึ้นอยู่กับขนาดพื้นที่ ทางเข้า จำนวนต้นไม้ และปริมาณวัสดุที่ต้องขนออก"
        },
        "q5": {
          "question": "ต้องส่งอะไรเพื่อประเมินราคา?",
          "answer": "ส่งโลเคชัน รูปพื้นที่ รูปทางเข้า และบอกคร่าว ๆ ว่าต้องการเอาอะไรออก"
        },
        "q6": {
          "question": "หลังเคลียร์แล้วปรับระดับต่อได้ไหม?",
          "answer": "ได้ครับ หลังเคลียร์พื้นที่แล้วสามารถทำปรับระดับ ถมดิน ระบายน้ำ หรืองานดินอื่นต่อได้"
        }
      },
      "photos": {
        "title": "ตัวอย่างงานเคลียร์พื้นที่",
        "overgrown-land-clearing": {
          "title": "เคลียร์พื้นที่รก",
          "alt": "เคลียร์พื้นที่รกและต้นไม้บนเกาะสมุย"
        },
        "tree-root-removal": {
          "title": "ขุดรากไม้",
          "alt": "ขุดรากไม้ด้วยรถขุดบนเกาะสมุย"
        },
        "jungle-land-clearing": {
          "title": "เคลียร์พื้นที่พืชหนาแน่น",
          "alt": "เคลียร์พืชรกก่อนก่อสร้างบนเกาะสมุย"
        },
        "debris-removal-after-clearing": {
          "title": "ขนเศษวัสดุออก",
          "alt": "ขนกิ่งไม้ รากไม้ และเศษวัสดุหลังเคลียร์พื้นที่"
        },
        "clean-land-ready-for-excavation": {
          "title": "พื้นที่พร้อมทำงานต่อ",
          "alt": "พื้นที่ที่เคลียร์แล้วพร้อมสำหรับงานขุดและก่อสร้าง"
        },
        "structure-demolition": {
          "title": "รื้อถอนสิ่งปลูกสร้าง",
          "alt": "รื้อถอนสิ่งปลูกสร้างเก่าและโครงสร้างเหล็กระหว่างเคลียร์ที่ดินบนเกาะสมุย"
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
      imageSrc="/images/services/land-clearing/hero.webp"
      page="services/land-clearing"
    />

    <ServiceIntro :text="t('landClearing.intro')" />

    <ServiceIncluded
      :title="t('landClearing.tasks.title')"
      :items="tasksItems"
    />

    <ServiceIncluded
      :title="t('landClearing.included.title')"
      :items="includedItems"
    />

    <CoreContactsMini
      page="services/land-clearing"
      location="content"
    />

    <ServiceProjects service="land-clearing" />

    <ServiceGallery
      :title="t('landClearing.photos.title')"
      :items="photos"
    />

    <ServiceIncluded
      :title="t('landClearing.process.title')"
      :items="processItems"
    />

    <UAlert
      :title="t('landClearing.pricing.title')"
      :description="t('landClearing.pricing.text')"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-calculator"
    />

    <UAlert
      :title="t('landClearing.cta.title')"
      :description="t('landClearing.cta.text')"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-camera"
    />

    <ServiceRelated
      :title="t('landClearing.related.title')"
      :items="relatedServices"
    />

    <ServiceSeoBlock
      :title="seoBlock.title"
      :paragraphs="seoBlock.paragraphs"
    />

    <CoreFAQ
      :title="t('landClearing.faq.title')"
      :items="faqItems"
    />

    <CoreContacts
      page="services/land-clearing"
      location="bottom"
    />
  </UPage>
</template>
