<script setup lang="ts">
import { getEquipmentByCategory } from '~/data/equipment';


const { t, locale } = useI18n();
const localePath = useLocalePath();

const heroTitle = computed(() => t('excavator.hero.title'));
const heroDescription = computed(() => t('excavator.hero.description'));

const tasksItems = computed(() => [
  {
    icon: 'i-lucide-pickaxe',
    title: t('excavator.tasks.t1.title'),
    description: t('excavator.tasks.t1.description'),
  },
  {
    icon: 'i-lucide-rows-3',
    title: t('excavator.tasks.t2.title'),
    description: t('excavator.tasks.t2.description'),
  },
  {
    icon: 'i-lucide-hammer',
    title: t('excavator.tasks.t3.title'),
    description: t('excavator.tasks.t3.description'),
  },
  {
    icon: 'i-lucide-truck',
    title: t('excavator.tasks.t4.title'),
    description: t('excavator.tasks.t4.description'),
  },
  {
    icon: 'i-lucide-route',
    title: t('excavator.tasks.t5.title'),
    description: t('excavator.tasks.t5.description'),
  },
  {
    icon: 'i-lucide-hard-hat',
    title: t('excavator.tasks.t6.title'),
    description: t('excavator.tasks.t6.description'),
  },
]);

const formatPrice = (value: number) => t('excavator.equipment.prices.thb', { price: value });

const equipmentItems = computed(() =>
  getEquipmentByCategory('excavator').map(item => {
    const loc = item.i18n[locale.value as 'en' | 'ru' | 'th'] ?? item.i18n.en;

    return {
      title: item.name,
      image: item.image,
      subtitle: loc.type,
      description: loc.summary,
      to: localePath({ name: 'equipment-slug', params: { slug: item.id } }),
      prices: [
        { label: t('excavator.equipment.prices.hour'), value: formatPrice(item.prices.hour!) },
        { label: t('excavator.equipment.prices.day'), value: formatPrice(item.prices.shift) },
      ],
    };
  }),
);

const includedItems = computed(() => [
  {
    icon: 'i-heroicons-clock',
    title: t('excavator.included.flexible.title'),
    description: t('excavator.included.flexible.description'),
  },
  {
    icon: 'i-heroicons-map',
    title: t('excavator.included.machine.title'),
    description: t('excavator.included.machine.description'),
  },
  {
    icon: 'i-heroicons-camera',
    title: t('excavator.included.report.title'),
    description: t('excavator.included.report.description'),
  },
]);


const localeRoute = useLocaleRoute();

const relatedServices = computed(() => [
  {
    icon: 'i-lucide-land-plot',
    title: t('excavator.related.earthworks.title'),
    description: t('excavator.related.earthworks.description'),
    to: localeRoute({ name: 'services-earthworks' }),
  },
  {
    icon: 'i-lucide-truck',
    title: t('excavator.related.truck.title'),
    description: t('excavator.related.truck.description'),
    to: localeRoute({ name: 'services-truck' }),
  },
]);

const faqItems = computed(() => [
  { question: t('excavator.faq.q1.question'), answer: t('excavator.faq.q1.answer') },
  { question: t('excavator.faq.q2.question'), answer: t('excavator.faq.q2.answer') },
  { question: t('excavator.faq.q3.question'), answer: t('excavator.faq.q3.answer') },
  { question: t('excavator.faq.q4.question'), answer: t('excavator.faq.q4.answer') },
  { question: t('excavator.faq.q5.question'), answer: t('excavator.faq.q5.answer') },
  { question: t('excavator.faq.q6.question'), answer: t('excavator.faq.q6.answer') },
  { question: t('excavator.faq.q7.question'), answer: t('excavator.faq.q7.answer') },
]);

const photos = computed(() => {
  const order = [
    'construction-foundation',
    'sewerage-installation',
    'loading-excavator-onto-truck',
    'delivery-of-an-excavator',
    'transporting-excavator',
    'refueling-excavator',
    'night-work',
  ];

  return order.map((key) => ({
    title: t(`excavator.photos.${key}.title`),
    alt: t(`excavator.photos.${key}.alt`),
    src: `/images/services/excavators/photos/${key}.webp`,
  }));
});

const seoBlock = computed(() => ({
  title: t('excavator.seoBlock.title'),
  paragraphs: [
    t('excavator.seoBlock.p1'),
    t('excavator.seoBlock.p2'),
    t('excavator.seoBlock.p3'),
  ],
}));

const serviceTypes = computed(() => [
  t('excavator.schema.serviceTypes.rental'),
  t('excavator.schema.serviceTypes.operator'),
  t('excavator.schema.serviceTypes.foundation'),
  t('excavator.schema.serviceTypes.trenching'),
  t('excavator.schema.serviceTypes.demolition'),
  t('excavator.schema.serviceTypes.loading'),
]);


useServiceSeo({
  t,
  path: '/services/excavator',
  prefix: 'excavator',
  schemaNameKey: 'excavator.seo.title',
  image: {
    url: 'https://supermansamui.com/images/services/excavators/hero.webp',
    width: '960',
    height: '466',
  },
  serviceTypes,
  catalogItems: tasksItems,
  priceRange: {
    low: Math.min(...getEquipmentByCategory('excavator').map(e => e.prices.hour ?? e.prices.shift)),
    high: Math.max(...getEquipmentByCategory('excavator').map(e => e.prices.shift)),
  },
});
</script>

<i18n lang="json">
{
  "ru": {
    "excavator": {
      "schema": {
        "serviceTypes": {
          "rental": "Аренда экскаватора",
          "operator": "Экскаватор с оператором",
          "foundation": "Копка под фундамент",
          "trenching": "Копка траншей",
          "demolition": "Демонтаж экскаватором",
          "loading": "Погрузка грунта"
        }
      },
      "seo": {
        "title": "Аренда экскаватора с оператором на Самуи",
        "description": "Экскаваторы с оператором на Самуи для котлованов, траншей, погрузки и демонтажа. Почасовая аренда или работа на смену. Подберём машину и согласуем доставку.",
        "keywords": "аренда экскаватора самуи, экскаватор с оператором самуи, мини-экскаватор самуи, экскаватор с гидромолотом самуи"
      },
      "seoBlock": {
        "title": "Как выбрать экскаватор для участка",
        "p1": "Начинаем с подъезда и места для работы. Важны ширина проезда, уклон, высота ворот, стены и другие препятствия. Машина должна не только попасть на участок, но и иметь достаточно места для поворота и работы стрелы.",
        "p2": "Затем учитываем глубину копки, грунт и объём. Компактная машина удобна в тесном дворе, но на большом котловане более крупный экскаватор может выполнить работу быстрее. Выбирать только по цене часа не всегда выгодно.",
        "p3": "Пришлите локацию, фото подъезда и рабочей зоны, размеры котлована или траншеи. По ним предложим модель и предварительно оценим время. Если нужен гидромолот или погрузка в самосвал, укажите это сразу."
      },
      "hero": {
        "title": "Аренда экскаватора на Самуи",
        "description": "Экскаваторы с оператором для котлованов, траншей, погрузки и демонтажа. Работаем почасово, посменно или по согласованному объёму."
      },
      "intro": "Для небольшого двора и большого котлована нужна разная техника. Поможем выбрать машину по ширине подъезда, глубине копки и грунту. До выезда согласуем задачу, тариф, доставку и условия работы.",
      "tasks": {
        "title": "Что можно сделать экскаватором",
        "t1": {
          "title": "Котлованы и ямы",
          "description": "Копаем под фундамент, бассейн, септик и опоры по согласованным размерам и глубине."
        },
        "t2": {
          "title": "Траншеи под коммуникации",
          "description": "Роем траншеи для водопровода, канализации, кабелей и дренажа по заданной трассе."
        },
        "t3": {
          "title": "Демонтаж и гидромолот",
          "description": "Разбираем старые конструкции, разбиваем бетон и твёрдые основания. Подбираем оборудование под материал и объём."
        },
        "t4": {
          "title": "Погрузка в самосвал",
          "description": "Грузим грунт, камни, корни и строительный мусор для вывоза с участка."
        },
        "t5": {
          "title": "Работа в тесных условиях",
          "description": "Подбираем компактную машину для дворов и узких проездов. Заранее проверяем место для проезда и поворота."
        },
        "t6": {
          "title": "Работа на стройке",
          "description": "Копаем, перемещаем грунт и подаём сыпучие материалы в рабочую зону по задачам вашей строительной команды."
        }
      },
      "equipment": {
        "title": "Экскаваторы и цены",
        "note": "Сравните модели, характеристики и тарифы. Все экскаваторы предоставляем с оператором; условия доставки уточним при заказе.",
        "prices": {
          "thb": "{price} бат",
          "hour": "За час",
          "day": "За смену"
        }
      },
      "related": {
        "title": "Другие услуги для вашего объекта",
        "earthworks": {
          "title": "Земляные работы",
          "description": "Если нужно поручить нам несколько этапов и их организацию: от работ с грунтом до дренажа и отсыпки."
        },
        "truck": {
          "title": "Самосвалы и перевозки",
          "description": "Вывоз грунта и мусора, доставка песка, щебня и других материалов. Машины, объёмы и условия перевозки."
        }
      },
      "packages": {
        "title": "Экскаватор и самосвал в одном заказе",
        "text": "Если грунт нужно вывозить, организуем самосвал вместе с экскаватором: один грузит, другой вывозит. Согласуем количество машин, порядок рейсов и стоимость перевозки отдельно от работы экскаватора."
      },
      "included": {
        "title": "Удобно заказать и работать",
        "flexible": {
          "title": "Подходящий формат оплаты",
          "description": "Можно заказать несколько часов, смену или согласовать цену за объём работ. До выезда объясним, как считается оплата."
        },
        "machine": {
          "title": "Машина под вашу задачу",
          "description": "Учитываем подъезд, глубину копки, грунт и место для работы. Подбираем размер экскаватора и нужное оснащение."
        },
        "report": {
          "title": "Связь во время работы",
          "description": "Можем присылать фото и видео с объекта. Если потребуется изменить объём или условия, сначала обсудим это с вами."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "Оператор входит в стоимость аренды?",
          "answer": "Да, работа нашего оператора включена в тариф. Экскаваторы предоставляем только с оператором."
        },
        "q2": {
          "question": "Как понять, какой экскаватор нужен?",
          "answer": "Пришлите описание задачи, фото и примерную ширину подъезда. Для копки также нужны размеры и глубина. Мы подберём модель по условиям участка и объёму работ."
        },
        "q3": {
          "question": "Можно арендовать экскаватор на несколько часов?",
          "answer": "Да, доступна почасовая работа. Минимальный заказ и условия доставки зависят от машины и расположения объекта — согласуем их до выезда."
        },
        "q4": {
          "question": "Сколько стоит доставка экскаватора?",
          "answer": "Обычно при заказе от 3 часов работы доставка бесплатна. Для более коротких задач её рассчитываем отдельно. Условия для вашей машины и локации подтвердим при заказе."
        },
        "q5": {
          "question": "Вывоз грунта включён в аренду?",
          "answer": "Вывоз согласуем отдельно. Если он нужен, организуем самосвал для грунта, камней, корней или строительного мусора и включим перевозку в расчёт заказа."
        },
        "q6": {
          "question": "Есть экскаватор с гидромолотом?",
          "answer": "Да, для демонтажа бетона и твёрдых оснований есть Yanmar ViO70 с гидромолотом. Пришлите фото и опишите материал — оценим, подходит ли эта техника, и уточним тариф."
        },
        "q7": {
          "question": "Что отправить для расчёта и заказа?",
          "answer": "Точку на карте, 3–5 фото участка и подъезда, описание работы и желаемую дату. Если известны размеры, глубина копки или объём грунта, укажите их. Также сообщите, нужен ли вывоз."
        }
      },
      "photos": {
        "title": "Примеры работ экскаватором",
        "construction-foundation": {
          "title": "Копка под фундамент",
          "alt": "Экскаватор копает участок под фундамент на Самуи"
        },
        "sewerage-installation": {
          "title": "Траншеи под коммуникации",
          "alt": "Копка траншеи экскаватором под трубы и коммуникации на Самуи"
        },
        "earthworks": {
          "title": "Работа экскаватора на объекте",
          "alt": "Экскаватор выполняет копку и перемещение грунта на строительном объекте"
        },
        "loading-excavator-onto-truck": {
          "title": "Погрузка грунта",
          "alt": "Экскаватор загружает грунт в самосвал для вывоза"
        },
        "delivery-of-an-excavator": {
          "title": "Доставка экскаватора",
          "alt": "Доставка экскаватора на строительный объект на Самуи"
        },
        "transporting-excavator": {
          "title": "Перевозка техники",
          "alt": "Перевозка экскаватора на трале между объектами"
        },
        "refueling-excavator": {
          "title": "Подготовка техники",
          "alt": "Заправка и подготовка экскаватора перед работой"
        },
        "night-work": {
          "title": "Работа в вечернее время",
          "alt": "Экскаватор работает на объекте в вечернее время"
        }
      }
    }
  },
  "en": {
    "excavator": {
      "schema": {
        "serviceTypes": {
          "rental": "Excavator rental",
          "operator": "Excavator with operator",
          "foundation": "Foundation digging",
          "trenching": "Trenching",
          "demolition": "Excavator demolition",
          "loading": "Soil loading"
        }
      },
      "seo": {
        "title": "Excavator Rental With Operator on Koh Samui",
        "description": "Excavators with operators on Koh Samui for excavation, trenching, loading and demolition. Hourly or daily rental. Get help choosing a machine and arranging delivery.",
        "keywords": "excavator rental koh samui, excavator with operator samui, mini excavator samui, excavator hydraulic breaker samui"
      },
      "seoBlock": {
        "title": "Choosing an Excavator for Your Site",
        "p1": "Start with access and working space. Entrance width, gradients, gate height, walls and other obstacles matter. The machine needs room not only to enter, but also to turn and operate its boom.",
        "p2": "Next, consider digging depth, soil and volume. A compact machine suits a tight yard, while a larger excavator may finish a large excavation sooner. The lowest hourly rate does not always mean the lowest total cost.",
        "p3": "Send a map pin, photos of the access and working area, and the dimensions of the excavation or trench. We’ll recommend a model and give an initial time estimate. Mention any need for a hydraulic breaker or dump truck loading."
      },
      "hero": {
        "title": "Excavator Rental on Koh Samui",
        "description": "Excavators with operators for excavation, trenching, loading and demolition. Book by the hour, by the day or for an agreed scope of work."
      },
      "intro": "A small yard and a large excavation need different machines. We help you choose based on access width, digging depth and soil conditions. Before dispatch, we agree on the task, rate, delivery and working terms.",
      "tasks": {
        "title": "What Our Excavators Can Do",
        "t1": {
          "title": "Excavations & Pits",
          "description": "Digging for foundations, pools, septic tanks and posts to agreed dimensions and depths."
        },
        "t2": {
          "title": "Utility Trenches",
          "description": "Trenching for water, sewer lines, cables and drainage along a specified route."
        },
        "t3": {
          "title": "Demolition & Hydraulic Breaker",
          "description": "Dismantling old structures and breaking concrete or hard surfaces. We select equipment for the material and scope."
        },
        "t4": {
          "title": "Loading Dump Trucks",
          "description": "Loading soil, rocks, roots and construction debris for removal from the site."
        },
        "t5": {
          "title": "Work in Tight Spaces",
          "description": "Compact machines for yards and narrow access. We check entry and turning space before choosing the excavator."
        },
        "t6": {
          "title": "Construction Site Work",
          "description": "Digging, moving soil and placing loose materials in the work area as required by your construction team."
        }
      },
      "equipment": {
        "title": "Excavators & Rental Rates",
        "note": "Compare models, specifications and rates. All excavators come with an operator; delivery terms are confirmed when booking.",
        "prices": {
          "thb": "{price} THB",
          "hour": "Per hour",
          "day": "Per day"
        }
      },
      "related": {
        "title": "Other Services for Your Site",
        "earthworks": {
          "title": "Earthworks",
          "description": "For several stages of work that you want us to coordinate, from excavation and soil movement to drainage and backfilling."
        },
        "truck": {
          "title": "Dump Trucks & Transport",
          "description": "Soil and debris removal, plus sand, gravel and other material deliveries. Explore trucks, capacities and hauling options."
        }
      },
      "packages": {
        "title": "Book an Excavator & Dump Truck Together",
        "text": "If soil needs to leave the site, we arrange a dump truck alongside the excavator: one loads, the other hauls. We agree on the number of machines, truck schedule and hauling costs separately from excavator rental."
      },
      "included": {
        "title": "Straightforward Booking & Service",
        "flexible": {
          "title": "Flexible Rental Options",
          "description": "Book a few hours, a day or agree on a price for a defined scope. We explain how charges are calculated before dispatch."
        },
        "machine": {
          "title": "Equipment Matched to the Job",
          "description": "Access, digging depth, soil and working space guide our choice of machine size and attachments."
        },
        "report": {
          "title": "Updates During the Job",
          "description": "We can send photos and videos from the site. Any changes to scope or terms are discussed with you first."
        }
      },
      "faq": {
        "title": "Frequently Asked Questions",
        "q1": {
          "question": "Is the operator included in the rental rate?",
          "answer": "Yes. Our operator’s work is included in the rate. We only supply excavators with an operator."
        },
        "q2": {
          "question": "How do I know which excavator I need?",
          "answer": "Send a job description, photos and the approximate access width. For excavation, include dimensions and depth. We’ll recommend a model for the site conditions and workload."
        },
        "q3": {
          "question": "Can I rent an excavator for just a few hours?",
          "answer": "Yes, hourly rental is available. Minimum booking and delivery terms depend on the machine and location. We confirm these before dispatch."
        },
        "q4": {
          "question": "How much does excavator delivery cost?",
          "answer": "Delivery is usually free when you book at least 3 hours of work. For shorter jobs, it is calculated separately. We confirm the terms for your machine and location when booking."
        },
        "q5": {
          "question": "Is soil removal included in excavator rental?",
          "answer": "Hauling is agreed separately. If needed, we arrange a dump truck for soil, rocks, roots or construction debris and include transport in your job estimate."
        },
        "q6": {
          "question": "Do you have an excavator with a hydraulic breaker?",
          "answer": "Yes, we have a Yanmar ViO70 with a hydraulic breaker for concrete demolition and hard surfaces. Send photos and describe the material so we can assess suitability and confirm the rate."
        },
        "q7": {
          "question": "What should I send for a quote and booking?",
          "answer": "A map pin, 3–5 photos of the site and access, a description of the work and your preferred date. Include dimensions, digging depth or soil volume if known, and let us know if removal is needed."
        }
      },
      "photos": {
        "title": "Excavator work examples",
        "construction-foundation": {
          "title": "Foundation digging",
          "alt": "Excavator digging for foundation work on Koh Samui"
        },
        "sewerage-installation": {
          "title": "Utility trenching",
          "alt": "Excavator digging trench for pipes and utilities on Koh Samui"
        },
        "earthworks": {
          "title": "Excavator working on site",
          "alt": "Excavator digging and moving soil on a construction site"
        },
        "loading-excavator-onto-truck": {
          "title": "Soil loading",
          "alt": "Excavator loading soil into dump truck for removal"
        },
        "delivery-of-an-excavator": {
          "title": "Excavator delivery",
          "alt": "Excavator delivery to construction site on Koh Samui"
        },
        "transporting-excavator": {
          "title": "Machine transport",
          "alt": "Transporting excavator on lowbed trailer between job sites"
        },
        "refueling-excavator": {
          "title": "Machine preparation",
          "alt": "Refueling and preparing excavator before work"
        },
        "night-work": {
          "title": "Evening work",
          "alt": "Excavator working on site in the evening"
        }
      }
    }
  },
  "th": {
    "excavator": {
      "schema": {
        "serviceTypes": {
          "rental": "เช่ารถขุด",
          "operator": "รถขุดพร้อมคนขับ",
          "foundation": "ขุดฐานราก",
          "trenching": "ขุดร่อง",
          "demolition": "งานทุบรื้อด้วยรถขุด",
          "loading": "ตักดินขึ้นรถ"
        }
      },
      "seo": {
        "title": "เช่ารถขุดพร้อมคนขับบนเกาะสมุย",
        "description": "เช่ารถขุดพร้อมคนขับบนเกาะสมุย สำหรับขุดบ่อ ขุดร่อง ตักวัสดุและรื้อถอน มีบริการรายชั่วโมงหรือรายวัน ช่วยเลือกขนาดรถและตกลงค่าขนส่งก่อนเริ่มงาน",
        "keywords": "เช่ารถขุด สมุย, รถขุดพร้อมคนขับ สมุย, รถขุดเล็ก สมุย, รถขุดหัวเจาะ สมุย"
      },
      "seoBlock": {
        "title": "เลือกรถขุดให้เหมาะกับพื้นที่อย่างไร",
        "p1": "เริ่มจากทางเข้าและพื้นที่ทำงาน ทั้งความกว้างทางเข้า ความลาดชัน ความสูงประตู กำแพง และสิ่งกีดขวาง รถต้องเข้าได้และมีพื้นที่เพียงพอสำหรับหมุนตัวและขยับแขนขุด",
        "p2": "จากนั้นดูความลึก สภาพดิน และปริมาณงาน รถขนาดเล็กเหมาะกับลานแคบ แต่งานขุดขนาดใหญ่อาจใช้รถใหญ่ทำได้เร็วกว่า ราคาเช่าต่อชั่วโมงที่ต่ำที่สุดจึงไม่ได้หมายถึงค่าใช้จ่ายรวมที่ต่ำที่สุดเสมอไป",
        "p3": "ส่งโลเคชัน รูปทางเข้าและพื้นที่ทำงาน พร้อมขนาดบ่อหรือร่องที่ต้องการ เราจะแนะนำรุ่นและประเมินเวลาเบื้องต้น หากต้องใช้หัวเจาะหรือตักวัสดุขึ้นรถดั๊ม แจ้งตั้งแต่ต้นได้เลย"
      },
      "hero": {
        "title": "เช่ารถขุดบนเกาะสมุย",
        "description": "รถขุดพร้อมคนขับสำหรับขุดบ่อ ขุดร่อง ตักวัสดุ และรื้อถอน เลือกได้ทั้งรายชั่วโมง รายวัน หรือเหมางานตามขอบเขตที่ตกลง"
      },
      "intro": "ลานบ้านขนาดเล็กกับงานขุดขนาดใหญ่ต้องใช้รถต่างกัน เราช่วยเลือกเครื่องจักรตามความกว้างทางเข้า ความลึกที่ต้องขุด และสภาพดิน พร้อมตกลงรายละเอียดงาน อัตราค่าบริการ ค่าขนส่ง และเงื่อนไขก่อนนำรถออก",
      "tasks": {
        "title": "รถขุดของเราทำงานอะไรได้บ้าง",
        "t1": {
          "title": "ขุดบ่อและหลุม",
          "description": "ขุดสำหรับฐานราก สระว่ายน้ำ บ่อเกรอะ และเสา ตามขนาดและความลึกที่ตกลง"
        },
        "t2": {
          "title": "ขุดร่องวางระบบ",
          "description": "ขุดร่องสำหรับท่อน้ำประปา ท่อน้ำเสีย สายเคเบิล และระบบระบายน้ำตามแนวที่กำหนด"
        },
        "t3": {
          "title": "รื้อถอนและงานหัวเจาะ",
          "description": "รื้อโครงสร้างเก่า ทุบคอนกรีตและพื้นแข็ง เลือกอุปกรณ์ให้เหมาะกับวัสดุและปริมาณงาน"
        },
        "t4": {
          "title": "ตักวัสดุขึ้นรถดั๊ม",
          "description": "ตักดิน หิน รากไม้ และเศษวัสดุก่อสร้างขึ้นรถเพื่อขนออกจากพื้นที่"
        },
        "t5": {
          "title": "งานในพื้นที่จำกัด",
          "description": "เลือกรถขนาดเล็กสำหรับลานบ้านและทางเข้าแคบ ตรวจสอบพื้นที่เข้าออกและหมุนตัวก่อนเลือกเครื่องจักร"
        },
        "t6": {
          "title": "งานในไซต์ก่อสร้าง",
          "description": "ขุด ย้ายดิน และตักวัสดุเทกองเข้าพื้นที่ทำงานตามความต้องการของทีมช่าง"
        }
      },
      "equipment": {
        "title": "รถขุดและอัตราค่าบริการ",
        "note": "เปรียบเทียบรุ่น ข้อมูลรถ และราคา รถขุดทุกคันมาพร้อมคนขับ โดยยืนยันเงื่อนไขขนส่งเมื่อจอง",
        "prices": {
          "thb": "{price} บาท",
          "hour": "ต่อชั่วโมง",
          "day": "ต่อวัน"
        }
      },
      "related": {
        "title": "บริการอื่นสำหรับหน้างานของคุณ",
        "earthworks": {
          "title": "งานดิน",
          "description": "สำหรับงานหลายขั้นตอนที่ต้องการให้เราประสานงาน ตั้งแต่ขุดและย้ายดิน ไปจนถึงระบายน้ำและถมดิน"
        },
        "truck": {
          "title": "รถดั๊มและบริการขนส่ง",
          "description": "ขนดินและเศษวัสดุออก ส่งทราย หิน และวัสดุอื่น ดูประเภทรถ ความจุ และเงื่อนไขขนส่ง"
        }
      },
      "packages": {
        "title": "จองรถขุดพร้อมรถดั๊มในงานเดียว",
        "text": "หากต้องขนดินออก เราจัดรถดั๊มให้ทำงานร่วมกับรถขุด คันหนึ่งตัก อีกคันขน โดยตกลงจำนวนรถ ลำดับเที่ยว และค่าขนส่งแยกจากค่ารถขุด"
      },
      "included": {
        "title": "จองง่าย ทำงานสะดวก",
        "flexible": {
          "title": "เลือกรูปแบบคิดราคาได้",
          "description": "จองไม่กี่ชั่วโมง รายวัน หรือเหมางานตามขอบเขตที่กำหนด เราจะอธิบายวิธีคิดค่าบริการก่อนนำรถออก"
        },
        "machine": {
          "title": "เลือกรถให้เหมาะกับงาน",
          "description": "พิจารณาทางเข้า ความลึกที่ต้องขุด สภาพดิน และพื้นที่ทำงาน เพื่อเลือกขนาดรถและอุปกรณ์ที่เหมาะสม"
        },
        "report": {
          "title": "ติดต่อได้ระหว่างทำงาน",
          "description": "สามารถส่งรูปและวิดีโอจากหน้างาน หากต้องเปลี่ยนขอบเขตหรือเงื่อนไข เราจะคุยกับคุณก่อน"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "ค่าเช่ารวมคนขับไหม?",
          "answer": "รวมค่าคนขับของเราในอัตราค่าบริการแล้ว รถขุดทุกคันให้บริการพร้อมคนขับเท่านั้น"
        },
        "q2": {
          "question": "จะรู้ได้อย่างไรว่าต้องใช้รถขุดขนาดไหน?",
          "answer": "ส่งรายละเอียดงาน รูปถ่าย และความกว้างทางเข้าโดยประมาณ หากเป็นงานขุด ให้แจ้งขนาดและความลึกด้วย เราจะเลือกรุ่นให้เหมาะกับพื้นที่และปริมาณงาน"
        },
        "q3": {
          "question": "เช่ารถขุดแค่ไม่กี่ชั่วโมงได้ไหม?",
          "answer": "ได้ มีบริการรายชั่วโมง จำนวนชั่วโมงขั้นต่ำและเงื่อนไขขนส่งขึ้นอยู่กับรถและที่ตั้งหน้างาน โดยจะตกลงก่อนนำรถออก"
        },
        "q4": {
          "question": "ค่าขนส่งรถขุดเท่าไร?",
          "answer": "โดยทั่วไปขนส่งฟรีเมื่อจองงานตั้งแต่ 3 ชั่วโมงขึ้นไป งานที่สั้นกว่านั้นคิดค่าขนส่งแยก เราจะยืนยันเงื่อนไขสำหรับรถและโลเคชันของคุณเมื่อจอง"
        },
        "q5": {
          "question": "ค่าเช่ารถขุดรวมขนดินออกไหม?",
          "answer": "การขนออกตกลงแยกต่างหาก หากต้องการ เราจัดรถดั๊มขนดิน หิน รากไม้ หรือเศษวัสดุก่อสร้าง และรวมค่าขนส่งไว้ในรายการประเมินงานได้"
        },
        "q6": {
          "question": "มีรถขุดพร้อมหัวเจาะไหม?",
          "answer": "มี Yanmar ViO70 พร้อมหัวเจาะสำหรับทุบคอนกรีตและพื้นแข็ง ส่งรูปและรายละเอียดวัสดุมาให้เราประเมินความเหมาะสมและแจ้งอัตราค่าบริการ"
        },
        "q7": {
          "question": "ต้องส่งอะไรเพื่อประเมินราคาและจอง?",
          "answer": "ส่งหมุดแผนที่ รูปพื้นที่และทางเข้า 3–5 รูป รายละเอียดงาน และวันที่ต้องการ หากทราบขนาด ความลึก หรือปริมาณดิน ให้แจ้งด้วย พร้อมระบุว่าต้องขนออกหรือไม่"
        }
      },
      "photos": {
        "title": "ตัวอย่างงานรถขุด",
        "construction-foundation": {
          "title": "ขุดฐานราก",
          "alt": "รถขุดกำลังขุดพื้นที่สำหรับงานฐานรากบนเกาะสมุย"
        },
        "sewerage-installation": {
          "title": "ขุดร่องสำหรับท่อ",
          "alt": "รถขุดกำลังขุดร่องสำหรับท่อและระบบสาธารณูปโภคบนเกาะสมุย"
        },
        "earthworks": {
          "title": "รถขุดทำงานในไซต์",
          "alt": "รถขุดกำลังขุดและเคลื่อนย้ายดินในไซต์ก่อสร้าง"
        },
        "loading-excavator-onto-truck": {
          "title": "ตักดินขึ้นรถ",
          "alt": "รถขุดตักดินขึ้นรถดั๊มพ์เพื่อขนออก"
        },
        "delivery-of-an-excavator": {
          "title": "ส่งรถขุดเข้าหน้างาน",
          "alt": "ขนส่งรถขุดไปยังไซต์งานบนเกาะสมุย"
        },
        "transporting-excavator": {
          "title": "ขนย้ายเครื่องจักร",
          "alt": "ขนย้ายรถขุดด้วยรถเทรลเลอร์ระหว่างหน้างาน"
        },
        "refueling-excavator": {
          "title": "เตรียมเครื่องจักร",
          "alt": "เติมน้ำมันและเตรียมรถขุดก่อนเริ่มงาน"
        },
        "night-work": {
          "title": "งานช่วงเย็น",
          "alt": "รถขุดทำงานในไซต์ช่วงเย็น"
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
      imageSrc="/images/services/excavators/hero.webp"
      page="services/excavator"
    />

    <ServiceIntro :text="t('excavator.intro')" />

    <ServiceIncluded
      :title="t('excavator.tasks.title')"
      :items="tasksItems"
    />

    <ServiceIncluded
      :title="t('excavator.included.title')"
      tone="muted"
      :items="includedItems"
    />

    <CoreContacts
      compact
      page="services/excavator"
      location="content"
      :name="t('excavator.seo.title')"
    />

    <ServiceEquipment
      :title="t('excavator.equipment.title')"
      :note="t('excavator.equipment.note')"
      :items="equipmentItems"
      page="services/excavator"
    />

    <UAlert
      :title="t('excavator.packages.title')"
      :description="t('excavator.packages.text')"
      variant="soft"
      color="primary"
      icon="i-lucide-truck"
    />

    <ServiceProjects service="excavator" />

    <ServiceGallery
      :title="t('excavator.photos.title')"
      :items="photos"
    />

    <ServiceRelated
      :title="t('excavator.related.title')"
      :items="relatedServices"
    />

    <ServiceSeoBlock
      :title="seoBlock.title"
      :paragraphs="seoBlock.paragraphs"
    />

    <CoreFAQ
      :title="t('excavator.faq.title')"
      :items="faqItems"
    />

    <CoreContacts
      page="services/excavator"
      location="bottom"
      :name="t('excavator.seo.title')"
    />

    <CoreFloatingContact
      page="services/excavator"
      :name="t('excavator.seo.title')"
    />
  </UPage>
</template>
