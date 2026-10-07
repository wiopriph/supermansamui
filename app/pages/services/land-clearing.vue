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

useServiceSeo({
  t,
  path: '/services/land-clearing',
  prefix: 'landClearing',
  image: {
    url: 'https://supermansamui.com/images/services/land-clearing/hero.webp',
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
    "landClearing": {
      "schema": {
        "name": "Расчистка участка на Самуи",
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
        "title": "Расчистка участка на Самуи — деревья, пни и заросли",
        "description": "Расчистка участков на Самуи: удаление деревьев, корчевание пней, уборка зарослей и мусора. Согласуем границы работ, необходимость вывоза и стоимость до начала.",
        "keywords": "расчистка участка самуи, расчистка зарослей самуи, удаление деревьев самуи, корчевание пней самуи, удаление корней самуи"
      },
      "hero": {
        "title": "Расчистка участка на Самуи",
        "description": "Убираем заросли, деревья, пни и мусор. Освобождаем участок для дальнейших работ и при необходимости организуем вывоз."
      },
      "intro": "Можно расчистить весь участок, отдельную зону или подъезд. Перед началом определим границы работ, отметим деревья и объекты, которые нужно сохранить, и согласуем, что убрать и вывезти.",
      "tasks": {
        "title": "Что можно включить в расчистку",
        "t1": {
          "title": "Удаление деревьев и пальм",
          "description": "Убираем согласованные деревья, мешающие использованию участка. Способ работы выбираем с учётом их размера и ближайших построек."
        },
        "t2": {
          "title": "Корчевание пней и корней",
          "description": "Выкапываем пни и крупные корни в рабочей зоне. Объём удаления согласуем под дальнейшее использование земли."
        },
        "t3": {
          "title": "Уборка зарослей",
          "description": "Очищаем территорию от кустарника, травы, лиан и плотной растительности, чтобы открыть доступ к участку."
        },
        "t4": {
          "title": "Разбор старых конструкций",
          "description": "Убираем старые заборы, навесы, лёгкие конструкции и остатки построек. Возможность демонтажа оцениваем заранее."
        },
        "t5": {
          "title": "Сбор и вывоз остатков",
          "description": "Собираем ветки, пни, корни и мусор. По согласованию грузим их в самосвалы и вывозим с участка."
        },
        "t6": {
          "title": "Расчистка подъезда",
          "description": "Убираем растительность и мусор вдоль согласованного проезда, чтобы освободить путь к рабочей зоне."
        }
      },
      "included": {
        "title": "Расчистка с учётом ваших планов",
        "machine": {
          "title": "Техника под условия участка",
          "description": "Подбираем экскаватор по подъезду, плотности зарослей и размеру пней. Учитываем место для работы рядом с постройками."
        },
        "roots": {
          "title": "Сохраняем нужные деревья",
          "description": "Заранее отмечаем, что нужно оставить, и согласуем границы расчистки. Учитываем эти зоны при работе техники."
        },
        "removal": {
          "title": "Вывоз в одном заказе",
          "description": "Если остатки нужно убрать с территории, организуем погрузку и самосвалы. Объём и стоимость вывоза обсудим заранее."
        }
      },
      "seoBlock": {
        "title": "Какой объём расчистки нужен участку",
        "p1": "Объём зависит от ваших планов. Для доступа к земле может хватить уборки зарослей и мусора. Если на участке предстоят земляные работы, отдельно определяем, где потребуется убрать деревья, пни и крупные корни.",
        "p2": "Не обязательно расчищать всю территорию. Можно освободить место под будущую постройку, открыть подъезд или убрать отдельную захламлённую зону, сохранив остальную растительность.",
        "p3": "Результат расчистки — освобождённая от согласованных препятствий территория. Изменение уровней, отсыпку и дренаж планируем как отдельные этапы. Если они нужны, можем включить их в общий план работ."
      },
      "process": {
        "title": "Как проходит расчистка",
        "p1": {
          "title": "Оцениваем объём",
          "description": "Изучаем фото, площадь и подъезд. Уточняем, что нужно убрать. Если по фото оценить работу нельзя, договариваемся об осмотре."
        },
        "p2": {
          "title": "Согласуем границы и цену",
          "description": "Отмечаем сохраняемые деревья и объекты, выбираем технику. Согласуем состав работ, вывоз, стоимость и сроки."
        },
        "p3": {
          "title": "Расчищаем рабочую зону",
          "description": "Убираем согласованную растительность, пни, мусор и конструкции в пределах намеченных границ."
        },
        "p4": {
          "title": "Собираем остатки",
          "description": "Складываем материал в согласованном месте или вывозим, если это входит в заказ. Проверяем результат вместе с вами."
        }
      },
      "pricing": {
        "title": "Сколько стоит расчистка участка",
        "text": "Стоимость зависит от площади, плотности зарослей, количества и размера деревьев и пней, мусора и доступа для техники. Отдельно учитываем демонтаж и вывоз, если они нужны. До начала согласуем состав работ и порядок оплаты."
      },
      "cta": {
        "title": "Покажите участок — оценим расчистку",
        "text": "Пришлите локацию, примерную площадь и 3–5 фото участка и подъезда. Укажите, что убрать, что сохранить и нужен ли вывоз. Предложим порядок работ и предварительно рассчитаем стоимость."
      },
      "related": {
        "title": "Другие работы на участке",
        "earthworks": {
          "title": "Земляные работы",
          "description": "Если после расчистки нужны котлованы, отсыпка, дренаж или несколько этапов работ под управлением одной команды."
        },
        "leveling": {
          "title": "Выравнивание участка",
          "description": "Если нужно срезать возвышенности, засыпать низины или сформировать площадку с нужными уровнями и уклонами."
        },
        "truck": {
          "title": "Самосвалы и вывоз",
          "description": "Если участок уже расчищен и осталось вывезти ветки, корни, грунт или строительный мусор."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "Вы убираете пни и корни?",
          "answer": "Да, можем выкорчевать пни и удалить крупные корни экскаватором. Уточним, в каких зонах это нужно, и включим работу в согласованный объём."
        },
        "q2": {
          "question": "Можно расчистить сильно заросший участок?",
          "answer": "Да, работаем с плотными зарослями, кустарником, деревьями и пальмами. Сначала оценим подъезд и место для техники. Если часть деревьев нужно сохранить, отметим их до начала."
        },
        "q3": {
          "question": "Вывоз мусора входит в стоимость?",
          "answer": "Вывоз включаем по согласованию. До начала уточним, какие остатки нужно вывезти, что можно оставить на участке и сколько будут стоить погрузка и перевозка."
        },
        "q4": {
          "question": "Сколько времени займёт расчистка?",
          "answer": "Срок зависит от растительности, пней, мусора, подъезда и количества рейсов на вывоз. Предварительно оценим его по фото и описанию; при необходимости уточним после осмотра."
        },
        "q5": {
          "question": "Что нужно для расчёта стоимости?",
          "answer": "Точка на карте, примерная площадь, фото участка и подъезда, описание того, что нужно убрать. Укажите, нужен ли вывоз и какие деревья или объекты хотите сохранить. Если есть план границ, приложите его."
        },
        "q6": {
          "question": "Можно сразу заказать выравнивание после расчистки?",
          "answer": "Да. Расчистку и выравнивание можно объединить в одном заказе, согласовав объём и стоимость каждого этапа. Отсыпку и дренаж также обсудим отдельно, если они нужны."
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
        "name": "Land Clearing on Koh Samui",
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
        "title": "Land Clearing on Koh Samui — Trees, Stumps & Vegetation",
        "description": "Land clearing on Koh Samui: tree and stump removal, vegetation clearing and debris cleanup. Scope, hauling needs and costs agreed before work starts.",
        "keywords": "land clearing koh samui, vegetation clearing samui, tree removal samui, stump removal samui, root removal samui"
      },
      "hero": {
        "title": "Land Clearing on Koh Samui",
        "description": "We remove vegetation, trees, stumps and debris to clear space for further work. Hauling can be arranged as part of the job."
      },
      "intro": "Clear the whole plot, a specific area or an access route. Before starting, we define the work boundaries, mark trees and features to keep, and agree on what to remove and haul away.",
      "tasks": {
        "title": "What You Can Include in Land Clearing",
        "t1": {
          "title": "Tree & Palm Removal",
          "description": "Removing agreed trees that obstruct the planned use of your land. The method depends on their size and nearby structures."
        },
        "t2": {
          "title": "Stump & Root Removal",
          "description": "Digging out stumps and large roots in the work area. We agree on the scope based on how the land will be used."
        },
        "t3": {
          "title": "Vegetation Clearing",
          "description": "Clearing bushes, grass, vines and dense growth to open up the land."
        },
        "t4": {
          "title": "Small Structure Removal",
          "description": "Removing old fences, sheds, light structures and building remains. We assess demolition feasibility before starting."
        },
        "t5": {
          "title": "Debris Collection & Hauling",
          "description": "Collecting branches, stumps, roots and debris, with loading and dump truck removal arranged as needed."
        },
        "t6": {
          "title": "Access Route Clearing",
          "description": "Removing vegetation and debris along an agreed route to open access to the work area."
        }
      },
      "included": {
        "title": "Clearing Around Your Plans",
        "machine": {
          "title": "Equipment for Your Site",
          "description": "We select an excavator for the access, vegetation and stump sizes, allowing for working space near structures."
        },
        "roots": {
          "title": "Keep the Trees You Want",
          "description": "We mark what should stay and agree on clearing boundaries before starting, accounting for these areas during machine work."
        },
        "removal": {
          "title": "Hauling in the Same Booking",
          "description": "If debris needs to leave the site, we arrange loading and dump trucks. Hauling scope and costs are discussed in advance."
        }
      },
      "seoBlock": {
        "title": "How Much Clearing Does Your Land Need?",
        "p1": "The scope depends on your plans. Clearing vegetation and debris may be enough to access the land. If earthworks will follow, we also identify where trees, stumps and large roots need to be removed.",
        "p2": "You don’t have to clear the entire plot. We can open up a future building area, clear an access route or clean a specific area while keeping vegetation elsewhere.",
        "p3": "Land clearing leaves the agreed area free of the obstacles specified in your order. Changes to ground levels, backfilling and drainage are planned as separate stages. If needed, we can include them in the overall work plan."
      },
      "process": {
        "title": "How Land Clearing Works",
        "p1": {
          "title": "Assess the Scope",
          "description": "We review photos, plot size and access, and discuss what needs removing. If photos aren’t enough, we arrange a site visit."
        },
        "p2": {
          "title": "Agree on Boundaries & Costs",
          "description": "We mark trees and features to keep, select equipment, and agree on scope, hauling, costs and timing."
        },
        "p3": {
          "title": "Clear the Work Area",
          "description": "We remove the agreed vegetation, stumps, debris and structures within the marked boundaries."
        },
        "p4": {
          "title": "Collect the Remaining Material",
          "description": "We place material in an agreed area or haul it away if included in the booking, then review the result with you."
        }
      },
      "pricing": {
        "title": "How Much Does Land Clearing Cost?",
        "text": "Costs depend on plot size, vegetation density, the number and size of trees and stumps, debris and machine access. Demolition and hauling are accounted for separately when needed. We agree on the scope and payment basis before starting."
      },
      "cta": {
        "title": "Show Us Your Land for a Clearing Estimate",
        "text": "Send a map pin, approximate plot size and 3–5 photos of the land and access. Tell us what to remove, what to keep and whether hauling is needed. We’ll recommend a work plan and provide an initial estimate."
      },
      "related": {
        "title": "Other Work for Your Land",
        "earthworks": {
          "title": "Earthworks",
          "description": "For excavation, backfilling, drainage or several stages of work coordinated by one team after clearing."
        },
        "leveling": {
          "title": "Land Leveling & Grading",
          "description": "For cutting high spots, filling low areas or shaping a platform with the required levels and slopes."
        },
        "truck": {
          "title": "Dump Trucks & Hauling",
          "description": "For land that is already cleared, with branches, roots, soil or construction debris still to be removed."
        }
      },
      "faq": {
        "title": "Frequently Asked Questions",
        "q1": {
          "question": "Do you remove stumps and roots?",
          "answer": "Yes, we can dig out stumps and large roots with an excavator. We confirm where this is needed and include it in the agreed scope."
        },
        "q2": {
          "question": "Can you clear heavily overgrown land?",
          "answer": "Yes, we work with dense growth, bushes, trees and palms. We first assess access and space for machinery. Any trees you want to keep are marked before work begins."
        },
        "q3": {
          "question": "Is debris removal included in the price?",
          "answer": "Hauling is included by agreement. Before starting, we confirm which materials must leave the site, what can stay, and the loading and transport costs."
        },
        "q4": {
          "question": "How long will clearing take?",
          "answer": "Timing depends on vegetation, stumps, debris, access and hauling trips. We give an initial estimate from photos and a description, refining it after a site visit if needed."
        },
        "q5": {
          "question": "What do you need for a quote?",
          "answer": "A map pin, approximate plot size, photos of the land and access, and a description of what to remove. Mention whether hauling is needed and which trees or features should stay. Include a boundary plan if you have one."
        },
        "q6": {
          "question": "Can I book land leveling after clearing?",
          "answer": "Yes. Clearing and leveling can be booked together, with the scope and price of each stage agreed in advance. We can also discuss backfilling and drainage separately if needed."
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
        "title": "เคลียร์ที่ดินบนเกาะสมุย — ต้นไม้ ตอไม้ และพื้นที่รก",
        "description": "เคลียร์ที่ดินบนเกาะสมุย ตัดต้นไม้ ขุดตอไม้ กำจัดวัชพืชและเก็บเศษวัสดุ ตกลงขอบเขตงาน การขนออก และค่าใช้จ่ายก่อนเริ่ม",
        "keywords": "เคลียร์ที่ดิน สมุย, เคลียร์พื้นที่รก สมุย, ตัดต้นไม้ สมุย, ขุดตอไม้ สมุย, ขุดรากไม้ สมุย"
      },
      "hero": {
        "title": "เคลียร์ที่ดินบนเกาะสมุย",
        "description": "กำจัดวัชพืช ต้นไม้ ตอไม้ และเศษวัสดุ เปิดพื้นที่สำหรับงานขั้นต่อไป พร้อมจัดขนออกหากต้องการ"
      },
      "intro": "เลือกเคลียร์ทั้งแปลง เฉพาะบางส่วน หรือทางเข้าได้ ก่อนเริ่มเราจะกำหนดขอบเขต ทำเครื่องหมายต้นไม้และสิ่งที่ต้องการเก็บไว้ พร้อมตกลงว่าจะเอาอะไรออกและต้องขนออกจากพื้นที่หรือไม่",
      "tasks": {
        "title": "เลือกงานที่ต้องการรวมในการเคลียร์พื้นที่",
        "t1": {
          "title": "นำต้นไม้และต้นปาล์มออก",
          "description": "นำต้นไม้ที่ตกลงไว้ออกเพื่อให้ใช้พื้นที่ตามแผน เลือกวิธีทำงานตามขนาดต้นไม้และสิ่งปลูกสร้างใกล้เคียง"
        },
        "t2": {
          "title": "ขุดตอไม้และรากไม้",
          "description": "ขุดตอไม้และรากขนาดใหญ่ในบริเวณทำงาน โดยตกลงขอบเขตตามการใช้งานที่ดินในขั้นต่อไป"
        },
        "t3": {
          "title": "เคลียร์วัชพืชและพื้นที่รก",
          "description": "กำจัดพุ่มไม้ หญ้า เถาวัลย์ และพืชหนาแน่น เพื่อเปิดพื้นที่ให้เข้าถึงได้"
        },
        "t4": {
          "title": "รื้อโครงสร้างขนาดเล็ก",
          "description": "นำรั้วเก่า เพิง โครงสร้างเบา และเศษสิ่งปลูกสร้างออก โดยประเมินความเป็นไปได้ก่อนเริ่มรื้อถอน"
        },
        "t5": {
          "title": "รวบรวมและขนเศษวัสดุออก",
          "description": "รวบรวมกิ่งไม้ ตอไม้ รากไม้ และเศษวัสดุ พร้อมตักขึ้นรถดั๊มและขนออกตามที่ตกลง"
        },
        "t6": {
          "title": "เคลียร์ทางเข้า",
          "description": "นำพืชรกและเศษวัสดุออกตามแนวทางเข้าที่กำหนด เพื่อเปิดทางไปยังพื้นที่ทำงาน"
        }
      },
      "included": {
        "title": "เคลียร์พื้นที่ให้สอดคล้องกับแผนของคุณ",
        "machine": {
          "title": "เครื่องจักรเหมาะกับพื้นที่",
          "description": "เลือกรถขุดตามทางเข้า ความหนาแน่นของพืชและขนาดตอไม้ พร้อมคำนึงถึงพื้นที่ทำงานใกล้สิ่งปลูกสร้าง"
        },
        "roots": {
          "title": "เก็บต้นไม้ที่คุณต้องการไว้",
          "description": "ทำเครื่องหมายสิ่งที่ต้องเก็บและตกลงแนวเขตเคลียร์ล่วงหน้า โดยคำนึงถึงบริเวณเหล่านี้ระหว่างใช้เครื่องจักร"
        },
        "removal": {
          "title": "สั่งขนออกในงานเดียวได้",
          "description": "หากต้องขนเศษวัสดุออก เราจัดงานตักและรถดั๊มให้ โดยคุยเรื่องปริมาณและค่าขนส่งก่อนเริ่ม"
        }
      },
      "seoBlock": {
        "title": "พื้นที่ของคุณต้องเคลียร์มากแค่ไหน",
        "p1": "ขอบเขตงานขึ้นอยู่กับแผนการใช้ที่ดิน หากต้องการเพียงเข้าถึงพื้นที่ อาจเคลียร์วัชพืชและเศษวัสดุก็เพียงพอ หากจะทำงานดินต่อ เราจะกำหนดเพิ่มเติมว่าจุดใดต้องนำต้นไม้ ตอไม้ และรากขนาดใหญ่ออก",
        "p2": "ไม่จำเป็นต้องเคลียร์ทั้งแปลง สามารถเปิดพื้นที่สำหรับสิ่งปลูกสร้างในอนาคต เคลียร์ทางเข้า หรือจัดการเฉพาะบริเวณที่มีเศษวัสดุ โดยเก็บพืชในส่วนอื่นไว้ได้",
        "p3": "ผลลัพธ์ของการเคลียร์คือพื้นที่ที่นำสิ่งกีดขวางตามข้อตกลงออกแล้ว ส่วนการเปลี่ยนระดับ ถมดิน และระบายน้ำจะวางแผนเป็นขั้นตอนแยก หากต้องการ สามารถรวมไว้ในแผนงานทั้งหมดได้"
      },
      "process": {
        "title": "ขั้นตอนการเคลียร์พื้นที่",
        "p1": {
          "title": "ประเมินปริมาณงาน",
          "description": "ดูรูป ขนาดที่ดิน และทางเข้า พร้อมคุยว่าอะไรต้องนำออก หากรูปไม่พอประเมิน เราจะนัดดูหน้างาน"
        },
        "p2": {
          "title": "ตกลงขอบเขตและราคา",
          "description": "ทำเครื่องหมายต้นไม้และสิ่งที่เก็บไว้ เลือกเครื่องจักร แล้วตกลงรายการงาน การขนออก ราคา และระยะเวลา"
        },
        "p3": {
          "title": "เคลียร์บริเวณทำงาน",
          "description": "นำพืช ตอไม้ เศษวัสดุ และโครงสร้างที่ตกลงไว้ออก ภายในแนวเขตที่กำหนด"
        },
        "p4": {
          "title": "รวบรวมวัสดุที่เหลือ",
          "description": "กองวัสดุไว้ในจุดที่ตกลง หรือขนออกหากรวมอยู่ในงาน แล้วตรวจสอบผลลัพธ์ร่วมกับคุณ"
        }
      },
      "pricing": {
        "title": "เคลียร์ที่ดินราคาเท่าไร",
        "text": "ราคาขึ้นอยู่กับขนาดพื้นที่ ความหนาแน่นของพืช จำนวนและขนาดต้นไม้กับตอไม้ เศษวัสดุ และทางเข้าเครื่องจักร หากมีงานรื้อถอนหรือขนออก จะคำนวณเพิ่มเติมตามรายการ โดยตกลงขอบเขตและวิธีคิดค่าบริการก่อนเริ่ม"
      },
      "cta": {
        "title": "ส่งรูปพื้นที่ให้เราประเมินงานเคลียร์",
        "text": "ส่งโลเคชัน ขนาดพื้นที่โดยประมาณ และรูปพื้นที่กับทางเข้า 3–5 รูป แจ้งว่าอะไรต้องนำออก อะไรต้องเก็บ และต้องการขนออกหรือไม่ เราจะแนะนำลำดับงานและประเมินราคาเบื้องต้น"
      },
      "related": {
        "title": "งานอื่นสำหรับพื้นที่ของคุณ",
        "earthworks": {
          "title": "งานดิน",
          "description": "หากหลังเคลียร์ต้องขุด ถม ระบายน้ำ หรือทำหลายขั้นตอนโดยให้ทีมเดียวประสานงาน"
        },
        "leveling": {
          "title": "ปรับระดับที่ดิน",
          "description": "เมื่อต้องตัดดินส่วนสูง ถมพื้นที่ต่ำ หรือทำลานให้ได้ระดับและความลาดเอียงตามต้องการ"
        },
        "truck": {
          "title": "รถดั๊มและขนส่ง",
          "description": "สำหรับพื้นที่ที่เคลียร์แล้วและเหลือเพียงขนกิ่งไม้ รากไม้ ดิน หรือเศษวัสดุก่อสร้างออก"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "ขุดตอไม้และรากไม้ให้ด้วยไหม?",
          "answer": "ได้ เราสามารถใช้รถขุดนำตอไม้และรากขนาดใหญ่ออก โดยตกลงว่าต้องทำบริเวณไหนและรวมไว้ในขอบเขตงาน"
        },
        "q2": {
          "question": "เคลียร์ที่ดินที่รกมากได้ไหม?",
          "answer": "ได้ เรารับงานพืชหนาแน่น พุ่มไม้ ต้นไม้ และต้นปาล์ม โดยประเมินทางเข้าและพื้นที่สำหรับเครื่องจักรก่อน หากต้องเก็บต้นไม้บางต้น จะทำเครื่องหมายก่อนเริ่ม"
        },
        "q3": {
          "question": "ราคารวมขนเศษวัสดุออกไหม?",
          "answer": "รวมได้ตามที่ตกลง ก่อนเริ่มจะระบุว่าวัสดุใดต้องขนออก อะไรเก็บไว้ในพื้นที่ได้ และค่าตักกับค่าขนส่งเท่าไร"
        },
        "q4": {
          "question": "ใช้เวลาเคลียร์นานเท่าไร?",
          "answer": "ขึ้นอยู่กับพืช ตอไม้ เศษวัสดุ ทางเข้า และจำนวนเที่ยวขนออก เราประเมินเบื้องต้นจากรูปและรายละเอียด แล้วปรับให้ชัดเจนหลังดูหน้างานหากจำเป็น"
        },
        "q5": {
          "question": "ต้องส่งอะไรเพื่อประเมินราคา?",
          "answer": "หมุดแผนที่ ขนาดพื้นที่โดยประมาณ รูปที่ดินและทางเข้า พร้อมบอกสิ่งที่ต้องนำออก แจ้งด้วยว่าต้องขนออกหรือไม่ และต้นไม้หรือสิ่งใดต้องเก็บไว้ หากมีแผนผังแนวเขต แนบมาได้เลย"
        },
        "q6": {
          "question": "จองปรับระดับต่อจากเคลียร์พื้นที่ได้ไหม?",
          "answer": "ได้ สามารถรวมงานเคลียร์และปรับระดับในคำสั่งงานเดียว โดยตกลงขอบเขตและราคาของแต่ละขั้นตอนล่วงหน้า หากต้องถมดินหรือทำระบายน้ำ จะคุยเพิ่มเติมแยกตามงาน"
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
      tone="muted"
      :items="includedItems"
    />

    <CoreContacts
      compact
      page="services/land-clearing"
      location="content"
      :name="t('landClearing.seo.title')"
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
      class="mt-6 mb-10 sm:mb-14"
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
      :name="t('landClearing.seo.title')"
    />

    <CoreFloatingContact
      page="services/land-clearing"
      :name="t('landClearing.seo.title')"
    />
  </UPage>
</template>
