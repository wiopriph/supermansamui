<script setup lang="ts">
import type { Collections } from '@nuxt/content';


const { t, locale } = useI18n();
const localePath = useLocalePath();

const collectionName = computed(() => `projects_${locale.value}` as keyof Collections);

const { data: beforeAfterProjects } = await useAsyncData(
  () => `earthworks-beforeafter-${locale.value}`,
  async () => {
    const projects = await queryCollection(collectionName.value)
      .order('date', 'DESC')
      .all();

    return projects.filter(p => p.beforeAfter && p.beforeAfter.length > 0).slice(0, 3);
  },
  { watch: [locale] },
);

const beforeAfterItems = computed(() =>
  (beforeAfterProjects.value ?? []).map(p => ({
    title: p.title,
    description: p.summary,
    slug: p.slug,
    pairs: (p.beforeAfter ?? []).slice(0, 2),
  })),
);

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


const seoBlock = computed(() => ({
  title: t('earthworks.seoBlock.title'),
  paragraphs: [
    t('earthworks.seoBlock.p1'),
    t('earthworks.seoBlock.p2'),
    t('earthworks.seoBlock.p3'),
  ],
}));

const serviceTypes = computed(() => [
  t('earthworks.schema.serviceTypes.earthworks'),
  t('earthworks.schema.serviceTypes.landClearing'),
  t('earthworks.schema.serviceTypes.landLeveling'),
  t('earthworks.schema.serviceTypes.drainage'),
  t('earthworks.schema.serviceTypes.backfilling'),
  t('earthworks.schema.serviceTypes.sitePreparation'),
  t('earthworks.schema.serviceTypes.soilRemoval'),
]);

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

useServiceSeo({
  t,
  path: '/services/earthworks',
  prefix: 'earthworks',
  catalogNameKey: 'earthworks.services.title',
  image: {
    url: 'https://supermansamui.com/images/services/earthworks/hero.webp',
    width: '960',
    height: '492',
  },
  serviceTypes,
  catalogItems: serviceHubItems,
});
</script>

<i18n lang="json">
{
  "ru": {
    "earthworks": {
      "schema": {
        "name": "Земляные работы на Самуи",
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
        "title": "Земляные работы на Самуи",
        "description": "Земляные работы на Самуи: котлованы, траншеи, отсыпка и планировка. Отдельные этапы или комплекс работ. Подберём технику и согласуем стоимость до начала.",
        "keywords": "земляные работы самуи, котлован самуи, копка траншей самуи, отсыпка участка самуи, перемещение грунта самуи"
      },
      "hero": {
        "title": "Земляные работы на Самуи",
        "description": "Копаем котлованы и траншеи, перемещаем грунт, выполняем отсыпку и планировку. Можно заказать отдельный этап или комплекс работ на участке."
      },
      "intro": "Работаем на участках под дома, виллы, дороги и благоустройство. Не обязательно заранее знать, какие машины понадобятся: расскажите, что хотите сделать, — мы оценим условия, предложим порядок работ и подберём технику.",
      "value": {
        "title": "Что мы берём на себя",
        "v1": {
          "title": "Понятный объём работ",
          "description": "Определим, что нужно сделать и какой результат вы получите. Согласуем границы работ до выхода техники."
        },
        "v2": {
          "title": "Порядок выполнения",
          "description": "Свяжем этапы между собой с учётом подъезда, рельефа и отвода воды, чтобы сократить переделки."
        },
        "v3": {
          "title": "Технику и перевозки",
          "description": "Подберём машины и организуем завоз материалов и вывоз грунта в нужный момент."
        }
      },
      "services": {
        "title": "Выберите нужную услугу",
        "description": "Ниже — основные направления и техника для земляных работ. На каждой странице — подробности по услуге.",
        "landClearing": {
          "title": "Расчистка участка",
          "description": "Если мешают деревья, заросли, пни или мусор. Уберём растительность и освободим участок для дальнейших работ."
        },
        "landLeveling": {
          "title": "Выравнивание участка",
          "description": "Если нужно изменить рельеф: срезать возвышенности, засыпать низины или сформировать площадку с нужным уклоном."
        },
        "drainage": {
          "title": "Дренаж и отвод воды",
          "description": "Если после дождя стоит вода или размывает грунт. Оценим пути стока и предложим подходящий способ водоотведения."
        },
        "sitePreparation": {
          "title": "Подготовка к строительству",
          "description": "Если планируете начинать стройку. Подготовим подъезд, рабочие площадки и место для складирования материалов."
        },
        "excavator": {
          "title": "Экскаватор с оператором",
          "description": "Если нужна машина для конкретной задачи: котлована, траншеи, погрузки или демонтажа. Поможем выбрать размер и оснащение."
        },
        "truck": {
          "title": "Самосвалы и перевозки",
          "description": "Если нужно вывезти грунт или привезти материалы. Подберём самосвал под объём груза и подъезд к участку."
        },
        "linksText": {
          "prefix": "Можно заказать",
          "landClearing": "расчистку участка",
          "landLeveling": "выравнивание земли",
          "drainage": "дренажные работы",
          "sitePreparation": "подготовку к строительству",
          "suffix": "отдельно или объединить несколько услуг в одном заказе."
        }
      },
      "seoBlock": {
        "title": "От чего зависит объём земляных работ",
        "p1": "Одинаковая площадь участка не означает одинаковый объём работ. На ровной земле может хватить небольшой выемки грунта, а на склоне потребуются срезка, перемещение земли и формирование нескольких уровней.",
        "p2": "Для котлована или траншеи важны размеры и глубина, для отсыпки — площадь и высота подъёма. Если есть план с отметками или требования строителей, пришлите их вместе с фотографиями: расчёт будет точнее.",
        "p3": "Также проверяем, можно ли использовать вынутый грунт на участке или потребуется вывоз и завоз другого материала. Учитываем подъезд, место для работы машин и отвод воды — от этого зависят техника, число рейсов и сроки."
      },
      "process": {
        "title": "Как проходит работа",
        "p1": {
          "title": "Обсуждаем задачу",
          "description": "Изучаем локацию, фото и желаемый результат. Если по ним нельзя оценить объём, договариваемся об осмотре участка."
        },
        "p2": {
          "title": "Планируем работы",
          "description": "Определяем этапы, подходящую технику, потребность в материалах и вывозе. Обсуждаем сроки."
        },
        "p3": {
          "title": "Согласуем стоимость",
          "description": "Фиксируем состав работ, тарифы и условия оплаты: по времени, рейсам, объёму или за согласованный результат."
        },
        "p4": {
          "title": "Выполняем заказ",
          "description": "Организуем работу техники и перевозки по плану. По завершении сверяем результат с согласованным объёмом."
        }
      },
      "areas": {
        "title": "Работаем по всему Самуи",
        "description": "Выезжаем на частные участки и строительные объекты во всех районах острова.",
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
        "title": "Сколько стоят земляные работы",
        "text": "Стоимость зависит от объёма выемки или отсыпки, типа грунта, подъезда и нужной техники. В расчёте учитываем работу машин, материалы, доставку и вывоз. До начала согласуем, что входит в цену и как считается оплата."
      },
      "cta": {
        "title": "Расскажите, что нужно сделать на участке",
        "text": "Пришлите точку на карте, 3–5 фото участка и подъезда, описание задачи и желаемые сроки. Подскажем, с чего начать, и подготовим предварительный расчёт."
      },
      "beforeAfter": {
        "title": "Наши работы: до и после"
      },
      "included": {
        "title": "Условия понятны заранее",
        "fixed": {
          "title": "Дополнения — по согласованию",
          "description": "Если потребуется работа сверх оговорённого объёма, сначала обсудим с вами её стоимость и условия."
        },
        "report": {
          "title": "Фото и видео с участка",
          "description": "Если вы не на объекте, можем присылать фото и видео по этапам. Формат и частоту отчётов обсудим заранее."
        },
        "safety": {
          "title": "Один подрядчик",
          "description": "Мы координируем операторов, водителей и доставку материалов — вам не нужно согласовывать их работу по отдельности."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "Можно заказать только часть работ?",
          "answer": "Да. Можно заказать отдельный котлован, траншею, отсыпку или другой этап. Если нужно несколько услуг, согласуем общий объём и порядок их выполнения."
        },
        "q2": {
          "question": "Чем заказ земляных работ отличается от аренды экскаватора?",
          "answer": "При аренде вы заказываете экскаватор с оператором для определённой задачи. При заказе земляных работ мы также организуем согласованный комплекс: подбираем машины, координируем этапы, материалы и перевозки."
        },
        "q3": {
          "question": "Можно ли рассчитать стоимость по фотографиям?",
          "answer": "По фото, локации и описанию можно дать предварительную оценку. Для точного расчёта могут понадобиться размеры, высотные отметки или осмотр. Перед началом согласуем объём, тарифы и условия оплаты."
        },
        "q4": {
          "question": "Сколько времени займут работы?",
          "answer": "Срок зависит от объёма, грунта, подъезда, количества рейсов и погоды. Ориентир дадим после оценки участка. Если условия изменятся и повлияют на сроки, обсудим это с вами."
        },
        "q5": {
          "question": "Вы организуете материалы и вывоз грунта?",
          "answer": "Да. Можем доставить грунт, песок и щебень, распределить их на участке и вывезти лишний материал. Согласуем, какие материалы и перевозки входят в заказ."
        },
        "q6": {
          "question": "Можно работать на склоне или с узким подъездом?",
          "answer": "Возможность работ оцениваем по месту: важны ширина и уклон подъезда, грунт и пространство для манёвра. Подберём подходящую технику и заранее объясним ограничения."
        },
        "q7": {
          "question": "Нужно ли постоянно присутствовать на участке?",
          "answer": "Не обязательно. Заранее согласуем задачу, доступ на участок и способ связи. Можем отправлять фото и видео, а изменения объёма или стоимости обсуждать дистанционно."
        }
      }
    }
  },
  "en": {
    "earthworks": {
      "schema": {
        "name": "Earthworks on Koh Samui",
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
        "title": "Earthworks on Koh Samui",
        "description": "Earthworks on Koh Samui: excavation, trenching, backfilling and grading. Book a single task or a full scope of work. Equipment and costs agreed before starting.",
        "keywords": "earthworks koh samui, excavation samui, trenching samui, backfilling samui, soil movement samui"
      },
      "hero": {
        "title": "Earthworks on Koh Samui",
        "description": "Excavation, trenching, soil moving, backfilling and grading. Book a single task or let us coordinate several stages of work on your land."
      },
      "intro": "We work on sites for houses, villas, roads and landscaping. You don’t need to know which machines to book: tell us what you want to achieve, and we’ll assess the conditions, recommend a work plan and select the equipment.",
      "value": {
        "title": "What We Take Care Of",
        "v1": {
          "title": "A Clear Scope",
          "description": "We define the work and the result you can expect, agreeing on the scope before machinery arrives."
        },
        "v2": {
          "title": "A Practical Work Sequence",
          "description": "We coordinate the stages around access, terrain and water runoff to reduce rework."
        },
        "v3": {
          "title": "Equipment & Hauling",
          "description": "We select the machines and arrange material deliveries and soil removal when they are needed."
        }
      },
      "services": {
        "title": "Find the Service You Need",
        "description": "Explore our main services and equipment for earthworks. Each page explains the service in more detail.",
        "landClearing": {
          "title": "Land Clearing",
          "description": "For land blocked by trees, overgrowth, stumps or debris. We clear vegetation and make room for the next stage of work."
        },
        "landLeveling": {
          "title": "Land Leveling & Grading",
          "description": "For changing ground levels: cutting high spots, filling low areas or shaping a platform with the required slope."
        },
        "drainage": {
          "title": "Drainage & Water Runoff",
          "description": "For standing water or soil washed away by rain. We assess runoff routes and recommend a suitable drainage approach."
        },
        "sitePreparation": {
          "title": "Site Preparation",
          "description": "For getting ready to build. We prepare access, working areas and space for storing construction materials."
        },
        "excavator": {
          "title": "Excavator With Operator",
          "description": "For a specific digging, trenching, loading or demolition job. We help choose the machine size and attachments."
        },
        "truck": {
          "title": "Dump Trucks & Hauling",
          "description": "For soil removal or material delivery. We match the truck to the load volume and site access."
        },
        "linksText": {
          "prefix": "You can book",
          "landClearing": "land clearing",
          "landLeveling": "land leveling",
          "drainage": "drainage work",
          "sitePreparation": "site preparation",
          "suffix": "as individual services or combine several in one job."
        }
      },
      "seoBlock": {
        "title": "What Determines the Scope of Earthworks?",
        "p1": "Plots of the same size can need very different amounts of work. Flat land may require only a small excavation, while sloping land may need cutting, soil movement and several working levels.",
        "p2": "Excavation and trenching depend on dimensions and depth; backfilling depends on the area and the height to be added. If you have a plan with levels or requirements from your builder, send it with your photos for a more accurate estimate.",
        "p3": "We also check whether excavated soil can be reused on site or needs to be removed and replaced with suitable material. Access, machine working space and water runoff affect equipment choice, truck trips and timing."
      },
      "process": {
        "title": "How the Work Is Done",
        "p1": {
          "title": "Discuss the Job",
          "description": "We review the location, photos and intended result. If they aren’t enough to assess the scope, we arrange a site visit."
        },
        "p2": {
          "title": "Plan the Work",
          "description": "We define the stages, equipment, materials and hauling needs, and discuss the schedule."
        },
        "p3": {
          "title": "Agree on Costs",
          "description": "We confirm the scope, rates and payment terms: by time, truck trips, volume or an agreed result."
        },
        "p4": {
          "title": "Carry Out the Work",
          "description": "We coordinate machinery and hauling according to the plan, then check the completed work against the agreed scope."
        }
      },
      "areas": {
        "title": "Working Across Koh Samui",
        "description": "We serve private plots and construction sites in all areas of the island.",
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
        "title": "How Much Do Earthworks Cost?",
        "text": "Costs depend on excavation or fill volume, soil conditions, access and the equipment needed. We account for machine time, materials, delivery and removal. Before starting, we agree on what is included and how the work will be charged."
      },
      "cta": {
        "title": "Tell Us What You Need Done",
        "text": "Send a map pin, 3–5 photos of the land and access, a job description and your preferred timing. We’ll recommend where to start and prepare an initial estimate."
      },
      "beforeAfter": {
        "title": "Our Work: Before & After"
      },
      "included": {
        "title": "Clear Terms From the Start",
        "fixed": {
          "title": "Agree on Extras First",
          "description": "If work beyond the agreed scope is needed, we discuss its cost and terms with you before proceeding."
        },
        "report": {
          "title": "Photo & Video Updates",
          "description": "If you’re away from the site, we can send progress photos and videos. We agree on the format and frequency in advance."
        },
        "safety": {
          "title": "One Contractor",
          "description": "We coordinate operators, drivers and material deliveries, so you don’t have to arrange their work separately."
        }
      },
      "faq": {
        "title": "Frequently Asked Questions",
        "q1": {
          "question": "Can I book just one part of the work?",
          "answer": "Yes. You can book a single excavation, trench, backfill or another stage. If you need several services, we agree on the combined scope and work sequence."
        },
        "q2": {
          "question": "How are earthworks different from excavator rental?",
          "answer": "Excavator rental provides a machine with an operator for a defined task. With an earthworks job, we also organize the agreed scope, selecting machines and coordinating stages, materials and hauling."
        },
        "q3": {
          "question": "Can you estimate the cost from photos?",
          "answer": "Photos, a location and a description can support an initial estimate. Dimensions, levels or a site visit may be needed for an accurate quote. We agree on the scope, rates and payment terms before starting."
        },
        "q4": {
          "question": "How long will the work take?",
          "answer": "Timing depends on scope, soil, access, truck trips and weather. We give an estimate after assessing the site and discuss any changes in conditions that affect the schedule."
        },
        "q5": {
          "question": "Do you arrange materials and soil removal?",
          "answer": "Yes. We can deliver fill soil, sand and gravel, spread them on site and remove surplus material. We agree on which materials and hauling services are included in your order."
        },
        "q6": {
          "question": "Can you work on slopes or with narrow access?",
          "answer": "We assess feasibility for each site, considering access width and gradient, soil and turning space. We select suitable machinery and explain any limitations in advance."
        },
        "q7": {
          "question": "Do I need to stay on site throughout the work?",
          "answer": "Not necessarily. We agree on the task, site access and how to stay in touch beforehand. We can send photos and videos and discuss scope or cost changes remotely."
        }
      }
    }
  },
  "th": {
    "earthworks": {
      "schema": {
        "name": "งานดินบนเกาะสมุย",
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
        "title": "งานดินบนเกาะสมุย",
        "description": "รับงานดินบนเกาะสมุย ขุดบ่อ ขุดร่อง ย้ายดิน ถมดินและปรับระดับ เลือกทำเฉพาะงานหรือหลายขั้นตอน พร้อมจัดเครื่องจักรและตกลงค่าใช้จ่ายก่อนเริ่ม",
        "keywords": "งานดิน สมุย, ขุดบ่อ สมุย, ขุดร่อง สมุย, ถมดิน สมุย, ขนย้ายดิน สมุย"
      },
      "hero": {
        "title": "งานดินบนเกาะสมุย",
        "description": "ขุดบ่อ ขุดร่อง ย้ายดิน ถมดิน และปรับระดับ เลือกทำเฉพาะขั้นตอนที่ต้องการ หรือให้เราประสานงานหลายขั้นตอนในพื้นที่ของคุณ"
      },
      "intro": "รับงานสำหรับบ้าน วิลล่า ถนน และการปรับภูมิทัศน์ คุณไม่จำเป็นต้องรู้ล่วงหน้าว่าต้องใช้เครื่องจักรอะไร เพียงบอกผลลัพธ์ที่ต้องการ เราจะประเมินพื้นที่ แนะนำลำดับงาน และเลือกเครื่องจักรให้เหมาะสม",
      "value": {
        "title": "สิ่งที่เราดูแลให้",
        "v1": {
          "title": "ขอบเขตงานชัดเจน",
          "description": "กำหนดว่าจะทำอะไรและได้ผลลัพธ์แบบไหน พร้อมตกลงขอบเขตงานก่อนนำเครื่องจักรเข้าพื้นที่"
        },
        "v2": {
          "title": "ลำดับงานที่เหมาะสม",
          "description": "วางลำดับแต่ละขั้นตอนโดยคำนึงถึงทางเข้า ลักษณะพื้นที่ และการระบายน้ำ เพื่อลดการแก้งานซ้ำ"
        },
        "v3": {
          "title": "เครื่องจักรและขนส่ง",
          "description": "เลือกเครื่องจักร พร้อมจัดส่งวัสดุและขนดินออกให้สอดคล้องกับช่วงเวลาที่ต้องใช้งาน"
        }
      },
      "services": {
        "title": "เลือกบริการที่คุณต้องการ",
        "description": "ดูบริการหลักและเครื่องจักรสำหรับงานดินด้านล่าง แต่ละหน้ามีรายละเอียดของบริการเพิ่มเติม",
        "landClearing": {
          "title": "เคลียร์ที่ดิน",
          "description": "สำหรับพื้นที่ที่มีต้นไม้ วัชพืช ตอไม้ หรือขยะกีดขวาง เราช่วยเคลียร์พื้นที่ให้พร้อมสำหรับงานขั้นต่อไป"
        },
        "landLeveling": {
          "title": "ปรับระดับที่ดิน",
          "description": "เมื่อต้องการเปลี่ยนระดับพื้นที่ ตัดดินส่วนสูง ถมพื้นที่ต่ำ หรือทำลานพร้อมความลาดเอียงที่เหมาะสม"
        },
        "drainage": {
          "title": "ระบบระบายน้ำ",
          "description": "สำหรับพื้นที่น้ำขังหรือดินถูกน้ำฝนกัดเซาะ เราประเมินเส้นทางน้ำและแนะนำวิธีระบายน้ำที่เหมาะสม"
        },
        "sitePreparation": {
          "title": "เตรียมพื้นที่ก่อสร้าง",
          "description": "สำหรับผู้ที่กำลังจะเริ่มก่อสร้าง เตรียมทางเข้า พื้นที่ทำงาน และพื้นที่จัดเก็บวัสดุก่อสร้าง"
        },
        "excavator": {
          "title": "รถขุดพร้อมคนขับ",
          "description": "สำหรับงานขุดบ่อ ขุดร่อง ตักวัสดุ หรือรื้อถอนโดยเฉพาะ เราช่วยเลือกขนาดรถและอุปกรณ์ให้เหมาะกับงาน"
        },
        "truck": {
          "title": "รถดั๊มและบริการขนส่ง",
          "description": "เมื่อต้องการขนดินออกหรือส่งวัสดุ เลือกรถให้เหมาะกับปริมาณบรรทุกและทางเข้าพื้นที่"
        },
        "linksText": {
          "prefix": "เลือกใช้บริการ",
          "landClearing": "เคลียร์ที่ดิน",
          "landLeveling": "ปรับระดับที่ดิน",
          "drainage": "ระบบระบายน้ำ",
          "sitePreparation": "เตรียมพื้นที่ก่อสร้าง",
          "suffix": "แยกเป็นงานเฉพาะ หรือรวมหลายบริการในงานเดียวได้"
        }
      },
      "seoBlock": {
        "title": "อะไรเป็นตัวกำหนดปริมาณงานดิน",
        "p1": "ที่ดินขนาดเท่ากันอาจมีปริมาณงานต่างกันมาก พื้นที่ราบอาจขุดดินเพียงเล็กน้อย แต่พื้นที่ลาดชันอาจต้องตัดดิน ย้ายดิน และจัดพื้นที่ให้มีหลายระดับ",
        "p2": "งานขุดบ่อหรือขุดร่องต้องทราบขนาดและความลึก ส่วนงานถมดินต้องทราบพื้นที่และความสูงที่ต้องการเพิ่ม หากมีแบบระบุระดับหรือข้อกำหนดจากผู้รับเหมาก่อสร้าง ส่งมาพร้อมรูปถ่ายเพื่อให้ประเมินได้แม่นยำขึ้น",
        "p3": "เราตรวจสอบด้วยว่าดินที่ขุดขึ้นมาสามารถใช้ต่อในพื้นที่ได้หรือไม่ หรือต้องขนออกและนำวัสดุที่เหมาะสมเข้ามา ทางเข้าพื้นที่ พื้นที่ทำงานของเครื่องจักร และการระบายน้ำ ล้วนมีผลต่อการเลือกเครื่องจักร จำนวนเที่ยวรถ และระยะเวลา"
      },
      "process": {
        "title": "ขั้นตอนการทำงาน",
        "p1": {
          "title": "พูดคุยรายละเอียดงาน",
          "description": "ดูโลเคชัน รูปถ่าย และผลลัพธ์ที่ต้องการ หากข้อมูลไม่พอประเมินปริมาณงาน เราจะนัดดูพื้นที่"
        },
        "p2": {
          "title": "วางแผนงาน",
          "description": "กำหนดขั้นตอน เครื่องจักร วัสดุ และการขนส่งที่จำเป็น พร้อมคุยเรื่องระยะเวลาทำงาน"
        },
        "p3": {
          "title": "ตกลงค่าใช้จ่าย",
          "description": "สรุปขอบเขตงาน อัตราค่าบริการ และเงื่อนไขชำระเงิน คิดตามเวลา เที่ยวรถ ปริมาณงาน หรือเหมางานตามที่ตกลง"
        },
        "p4": {
          "title": "ลงมือทำงาน",
          "description": "จัดเครื่องจักรและขนส่งตามแผน เมื่อเสร็จแล้วตรวจสอบผลงานตามขอบเขตที่ตกลงกัน"
        }
      },
      "areas": {
        "title": "ให้บริการทั่วเกาะสมุย",
        "description": "รับงานในที่ดินส่วนบุคคลและไซต์ก่อสร้างทุกพื้นที่บนเกาะ",
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
        "title": "งานดินคิดราคาอย่างไร",
        "text": "ราคาขึ้นอยู่กับปริมาณขุดหรือถม สภาพดิน ทางเข้า และเครื่องจักรที่ใช้ โดยคำนวณค่าเครื่องจักร วัสดุ ค่าขนส่งเข้าและขนออก ก่อนเริ่มเราจะตกลงว่าราคารวมอะไรบ้างและคิดค่าบริการอย่างไร"
      },
      "cta": {
        "title": "บอกเราว่าคุณต้องการทำอะไรกับพื้นที่",
        "text": "ส่งหมุดแผนที่ รูปพื้นที่และทางเข้า 3–5 รูป รายละเอียดงาน และช่วงเวลาที่ต้องการ เราจะแนะนำจุดเริ่มต้นและประเมินราคาเบื้องต้นให้"
      },
      "beforeAfter": {
        "title": "ผลงานของเรา: ก่อนและหลัง"
      },
      "included": {
        "title": "เงื่อนไขชัดเจนตั้งแต่เริ่ม",
        "fixed": {
          "title": "งานเพิ่มต้องตกลงก่อน",
          "description": "หากมีงานนอกเหนือจากขอบเขตเดิม เราจะคุยเรื่องราคาและเงื่อนไขกับคุณก่อนดำเนินการ"
        },
        "report": {
          "title": "รูปและวิดีโอจากหน้างาน",
          "description": "หากคุณไม่ได้อยู่หน้างาน เราสามารถส่งรูปและวิดีโอความคืบหน้าได้ โดยตกลงรูปแบบและความถี่ล่วงหน้า"
        },
        "safety": {
          "title": "ผู้รับเหมารายเดียว",
          "description": "เราประสานงานคนขับเครื่องจักร คนขับรถบรรทุก และการส่งวัสดุ คุณจึงไม่ต้องจัดคิวงานให้แต่ละฝ่ายเอง"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "เลือกทำเฉพาะบางส่วนของงานได้ไหม?",
          "answer": "ได้ คุณสามารถจ้างเฉพาะงานขุดบ่อ ขุดร่อง ถมดิน หรือขั้นตอนอื่น หากต้องการหลายบริการ เราจะตกลงขอบเขตทั้งหมดและลำดับการทำงานร่วมกัน"
        },
        "q2": {
          "question": "จ้างงานดินต่างจากเช่ารถขุดอย่างไร?",
          "answer": "การเช่ารถขุดคือการใช้รถพร้อมคนขับสำหรับงานที่กำหนด ส่วนการจ้างงานดิน เราดูแลขอบเขตงานที่ตกลงกันเพิ่มเติมด้วย ทั้งเลือกเครื่องจักร ประสานขั้นตอน วัสดุ และขนส่ง"
        },
        "q3": {
          "question": "ประเมินราคาจากรูปถ่ายได้ไหม?",
          "answer": "รูปถ่าย โลเคชัน และรายละเอียดงานช่วยประเมินราคาเบื้องต้นได้ หากต้องการราคาที่แม่นยำ อาจต้องทราบขนาด ระดับพื้นที่ หรือเข้าดูหน้างาน เราจะตกลงขอบเขต อัตราค่าบริการ และเงื่อนไขชำระเงินก่อนเริ่ม"
        },
        "q4": {
          "question": "ใช้เวลาทำงานนานเท่าไร?",
          "answer": "ขึ้นอยู่กับปริมาณงาน สภาพดิน ทางเข้า จำนวนเที่ยวรถ และสภาพอากาศ เราจะแจ้งระยะเวลาโดยประมาณหลังประเมินพื้นที่ หากเงื่อนไขเปลี่ยนและกระทบกำหนดงาน เราจะคุยกับคุณ"
        },
        "q5": {
          "question": "จัดหาวัสดุและขนดินออกให้ได้ไหม?",
          "answer": "ได้ เราสามารถส่งดินถม ทราย และหิน เกลี่ยวัสดุในพื้นที่ และขนวัสดุส่วนเกินออก โดยตกลงล่วงหน้าว่าวัสดุและการขนส่งใดรวมอยู่ในงาน"
        },
        "q6": {
          "question": "ทำงานบนพื้นที่ลาดชันหรือทางเข้าแคบได้ไหม?",
          "answer": "ต้องประเมินแต่ละพื้นที่ โดยดูความกว้างและความชันของทางเข้า สภาพดิน และพื้นที่กลับรถ เราจะเลือกเครื่องจักรที่เหมาะสมและแจ้งข้อจำกัดล่วงหน้า"
        },
        "q7": {
          "question": "ต้องอยู่หน้างานตลอดไหม?",
          "answer": "ไม่จำเป็น เราจะตกลงรายละเอียดงาน การเข้าพื้นที่ และช่องทางติดต่อล่วงหน้า สามารถส่งรูปและวิดีโอให้ดู รวมถึงคุยเรื่องการเปลี่ยนขอบเขตงานหรือค่าใช้จ่ายทางไกลได้"
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

    <CoreContacts
      compact
      page="services/earthworks"
      location="content"
      :name="t('earthworks.seo.title')"
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
      tone="muted"
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

    <ServiceSeoBlock
      :title="areasBlock.title"
      :paragraphs="areasBlock.description"
      :tags="areasBlock.items"
    />

    <ServiceSeoBlock
      :title="seoBlock.title"
      :paragraphs="seoBlock.paragraphs"
    />

    <ServiceProjects service="earthworks" />

    <CoreFAQ
      :title="t('earthworks.faq.title')"
      :items="faqItems"
    />

    <CoreContacts
      page="services/earthworks"
      location="bottom"
      :name="t('earthworks.seo.title')"
    />

    <CoreFloatingContact
      page="services/earthworks"
      :name="t('earthworks.seo.title')"
    />
  </UPage>
</template>
