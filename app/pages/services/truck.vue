<script setup lang="ts">
import { PRICING } from '~/constants/pricing';


const { t } = useI18n();

const heroTitle = computed(() => t('trucks.hero.title'));
const heroDescription = computed(() => t('trucks.hero.description'));

const tasksItems = computed(() => [
  {
    icon: 'i-lucide-mountain',
    title: t('trucks.tasks.t1.title'),
    description: t('trucks.tasks.t1.description'),
  },
  {
    icon: 'i-lucide-trash-2',
    title: t('trucks.tasks.t2.title'),
    description: t('trucks.tasks.t2.description'),
  },
  {
    icon: 'i-lucide-package-plus',
    title: t('trucks.tasks.t3.title'),
    description: t('trucks.tasks.t3.description'),
  },
  {
    icon: 'i-lucide-truck',
    title: t('trucks.tasks.t4.title'),
    description: t('trucks.tasks.t4.description'),
  },
  {
    icon: 'i-lucide-shovel',
    title: t('trucks.tasks.t5.title'),
    description: t('trucks.tasks.t5.description'),
  },
  {
    icon: 'i-lucide-container',
    title: t('trucks.tasks.t6.title'),
    description: t('trucks.tasks.t6.description'),
  },
]);

const formatPrice = (value: number) => t('trucks.equipment.prices.thb', { price: value });

const equipmentItems = computed(() => [
  {
    title: 'Isuzu ELF',
    image: '/images/equipment/trucks/isuzu_elf.webp',
    subtitle: t('trucks.equipment.items.elf.type'),
    description: t('trucks.equipment.items.elf.description'),
    prices: [
      { label: t('trucks.equipment.prices.trip'), value: formatPrice(PRICING.trucks.elf.trip) },
      { label: t('trucks.equipment.prices.day'), value: formatPrice(PRICING.trucks.elf.shift) },
    ],
  },
  {
    title: 'Hino 300',
    image: '/images/equipment/trucks/hino_300.webp',
    subtitle: t('trucks.equipment.items.hino300.type'),
    description: t('trucks.equipment.items.hino300.description'),
    prices: [
      { label: t('trucks.equipment.prices.trip'), value: formatPrice(PRICING.trucks.hino300.trip) },
      { label: t('trucks.equipment.prices.day'), value: formatPrice(PRICING.trucks.hino300.shift) },
    ],
  },
  {
    title: 'Hino Super FM18',
    image: '/images/equipment/trucks/hino_super_fm18.webp',
    subtitle: t('trucks.equipment.items.fm18.type'),
    description: t('trucks.equipment.items.fm18.description'),
    prices: [
      { label: t('trucks.equipment.prices.trip'), value: formatPrice(PRICING.trucks.fm18.trip) },
      { label: t('trucks.equipment.prices.day'), value: formatPrice(PRICING.trucks.fm18.shift) },
    ],
  },
  {
    title: 'Nissan CWA12M',
    image: '/images/equipment/trucks/nissan_cwa12m.webp',
    subtitle: t('trucks.equipment.items.nissan.type'),
    description: t('trucks.equipment.items.nissan.description'),
    prices: [
      { label: t('trucks.equipment.prices.trip'), value: formatPrice(PRICING.trucks.nissan.trip) },
      { label: t('trucks.equipment.prices.day'), value: formatPrice(PRICING.trucks.nissan.shift) },
    ],
  },
  {
    title: 'Hino Ranger 4D',
    image: '/images/equipment/trucks/hino_ranger_4d.webp',
    subtitle: t('trucks.equipment.items.ranger.type'),
    description: t('trucks.equipment.items.ranger.description'),
    prices: [
      { label: t('trucks.equipment.prices.trip'), value: formatPrice(PRICING.trucks.ranger.trip) },
      { label: t('trucks.equipment.prices.day'), value: formatPrice(PRICING.trucks.ranger.shift) },
    ],
  },
  {
    title: 'DEVA Hercules',
    image: '/images/equipment/trucks/deva_hercules.webp',
    subtitle: t('trucks.equipment.items.deva.type'),
    description: t('trucks.equipment.items.deva.description'),
    prices: [
      { label: t('trucks.equipment.prices.trip'), value: formatPrice(PRICING.trucks.deva.trip) },
      { label: t('trucks.equipment.prices.day'), value: formatPrice(PRICING.trucks.deva.shift) },
    ],
  },
]);

const localeRoute = useLocaleRoute();

const relatedServices = computed(() => [
  {
    icon: 'i-lucide-shovel',
    title: t('trucks.related.excavator.title'),
    description: t('trucks.related.excavator.description'),
    to: localeRoute({ name: 'services-excavator' }),
  },
  {
    icon: 'i-lucide-land-plot',
    title: t('trucks.related.earthworks.title'),
    description: t('trucks.related.earthworks.description'),
    to: localeRoute({ name: 'services-earthworks' }),
  },
]);

const includedItems = computed(() => [
  {
    icon: 'i-heroicons-user',
    title: t('trucks.included.driver.title'),
    description: t('trucks.included.driver.description'),
  },
  {
    icon: 'i-heroicons-map',
    title: t('trucks.included.routing.title'),
    description: t('trucks.included.routing.description'),
  },
  {
    icon: 'i-heroicons-clock',
    title: t('trucks.included.flexible.title'),
    description: t('trucks.included.flexible.description'),
  },
]);

const faqItems = computed(() => [
  { question: t('trucks.faq.q1.question'), answer: t('trucks.faq.q1.answer') },
  { question: t('trucks.faq.q2.question'), answer: t('trucks.faq.q2.answer') },
  { question: t('trucks.faq.q3.question'), answer: t('trucks.faq.q3.answer') },
  { question: t('trucks.faq.q4.question'), answer: t('trucks.faq.q4.answer') },
  { question: t('trucks.faq.q5.question'), answer: t('trucks.faq.q5.answer') },
  { question: t('trucks.faq.q6.question'), answer: t('trucks.faq.q6.answer') },
  { question: t('trucks.faq.q7.question'), answer: t('trucks.faq.q7.answer') },
]);

const photos = computed(() => {
  const order = [
    'soil-delivery',
    'loading-of-soil',
    'our-vintage-big-truck',
    'transportation-of-excavator',
    'transportation-of-special-equipment',
  ];

  return order.map((key) => ({
    title: t(`trucks.photos.${key}.title`),
    alt: t(`trucks.photos.${key}.alt`),
    src: `/images/services/trucks/photos/${key}.webp`,
  }));
});

const serviceTypes = computed(() => [
  t('trucks.schema.serviceTypes.dumpTruck'),
  t('trucks.schema.serviceTypes.soilRemoval'),
  t('trucks.schema.serviceTypes.wasteRemoval'),
  t('trucks.schema.serviceTypes.materialDelivery'),
  t('trucks.schema.serviceTypes.soilDelivery'),
  t('trucks.schema.serviceTypes.equipmentTransport'),
]);

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://supermansamui.com/services/trucks#service',
      name: t('trucks.schema.name'),
      description: t('trucks.seo.description'),
      provider: {
        '@id': 'https://supermansamui.com#business',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Koh Samui, Surat Thani, Thailand',
      },
      serviceType: serviceTypes.value,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t('trucks.tasks.title'),
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
              name: 'Koh Samui, Surat Thani, Thailand',
            },
          },
        })),
      },
    },
  ],
}));

useHead(() => {
  const title = t('trucks.seo.title');
  const description = t('trucks.seo.description');
  const keywords = t('trucks.seo.keywords');
  const image = 'https://supermansamui.com/images/services/trucks/hero.webp';

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },

      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '960' },
      { property: 'og:image:height', content: '540' },

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
    "trucks": {
      "schema": {
        "name": "Самосвалы и грузовики на Самуи",
        "serviceTypes": {
          "dumpTruck": "Аренда самосвала",
          "soilRemoval": "Вывоз грунта",
          "wasteRemoval": "Вывоз строительного мусора",
          "materialDelivery": "Доставка строительных материалов",
          "soilDelivery": "Доставка грунта",
          "equipmentTransport": "Перевозка техники"
        }
      },
      "seo": {
        "title": "Самосвалы и грузовики на Самуи - Вывоз грунта и доставка материалов",
        "description": "Самосвалы и грузовики на Самуи: вывоз грунта, камней и строительного мусора, доставка песка, щебня, земли и перевозка техники. Расчёт за рейс, смену или объём.",
        "keywords": "самосвал самуи, грузовик самуи, вывоз грунта самуи, вывоз строительного мусора самуи, доставка песка самуи, доставка щебня самуи, доставка грунта самуи, перевозка техники самуи, dump truck koh samui"
      },
      "hero": {
        "title": "Самосвалы и грузовики на Самуи",
        "description": "Вывоз грунта и строительного мусора, доставка песка, щебня, земли и перевозка техники по Самуи."
      },
      "intro": "Нужен самосвал или грузовик на Самуи? Мы вывозим грунт после копки, убираем строительный мусор, доставляем песок, щебень, землю и перевозим технику между объектами. Вы отправляете локацию, фото подъезда и короткое описание задачи - мы подбираем подходящий грузовик, считаем примерный объём, количество рейсов и стоимость до начала работ.",
      "tasks": {
        "title": "Для каких задач нужны грузовики",
        "t1": {
          "title": "Вывоз грунта",
          "description": "Вывозим землю, глину, камни и лишний материал после копки, выравнивания или расчистки участка."
        },
        "t2": {
          "title": "Вывоз строительного мусора",
          "description": "Забираем бетон, корни, остатки демонтажа, строительные отходы и смешанный мусор с объекта."
        },
        "t3": {
          "title": "Доставка песка и щебня",
          "description": "Привозим сыпучие материалы для стройки, дорог, отсыпки, дренажа и подготовки участка."
        },
        "t4": {
          "title": "Доставка грунта",
          "description": "Доставляем землю и материалы для поднятия уровня участка, засыпки ям и подготовки площадки."
        },
        "t5": {
          "title": "Работа с экскаватором",
          "description": "Самосвалы работают вместе с экскаватором: техника грузит, грузовики вывозят или привозят материал."
        },
        "t6": {
          "title": "Перевозка техники",
          "description": "Перевозим экскаваторы, оборудование и тяжёлые грузы между строительными объектами."
        }
      },
      "equipment": {
        "title": "Наши грузовики",
        "note": "Не знаете, какой грузовик нужен? Отправьте точку на карте, фото подъезда и задачу - подскажем.",
        "prices": {
          "thb": "{price} бат",
          "trip": "За рейс",
          "day": "За смену"
        },
        "items": {
          "elf": {
            "type": "Малый самосвал 4×2",
            "description": "Для узких подъездов, небольших объёмов, доставки песка, щебня, грунта и вывоза материала с маленьких участков."
          },
          "hino300": {
            "type": "6-колёсный самосвал",
            "description": "Основная машина для стройки: вывоз грунта, камней, мусора и работа в паре с экскаватором."
          },
          "fm18": {
            "type": "10-колёсный самосвал",
            "description": "Для больших объёмов грунта, песка, щебня и тяжёлых материалов. Меньше рейсов - быстрее работа."
          },
          "nissan": {
            "type": "Трал с краном",
            "description": "Для перевозки экскаваторов, спецтехники, оборудования и тяжёлых грузов между объектами."
          },
          "ranger": {
            "type": "Грузовик с краном",
            "description": "Для тяжёлых материалов, оборудования и задач, где нужна погрузка или установка краном."
          },
          "deva": {
            "type": "Грузовик для бригады и инструмента",
            "description": "Для перевозки рабочих, инструмента, лёгких материалов и коротких выездных задач."
          }
        }
      },
      "packages": {
        "title": "Нужен экскаватор вместе с самосвалами?",
        "text": "Для вывоза грунта, камней или мусора часто нужен экскаватор для погрузки. Мы можем организовать экскаватор и самосвалы одной командой, чтобы работа шла быстрее и без лишней координации."
      },
      "related": {
        "title": "Может понадобиться дополнительно",
        "excavator": {
          "title": "Экскаватор с оператором",
          "description": "Если нужно выкопать, погрузить грунт, разобрать бетон или подготовить материал к вывозу."
        },
        "earthworks": {
          "title": "Земляные работы под ключ",
          "description": "Если нужна комплексная подготовка участка: расчистка, дренаж, отсыпка, уровни и вывоз."
        }
      },
      "included": {
        "title": "Почему с нами удобно",
        "driver": {
          "title": "Местные водители",
          "description": "Знают дороги Самуи, подъёмы, узкие участки, сложные подъезды и реальные ограничения на острове."
        },
        "routing": {
          "title": "Помогаем посчитать объём",
          "description": "Подскажем, какой грузовик нужен и сколько рейсов может потребоваться под вашу задачу."
        },
        "flexible": {
          "title": "Гибкий формат оплаты",
          "description": "Можно считать за рейс, за смену или за весь объём - зависит от задачи и расстояния."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "Как рассчитывается стоимость?",
          "answer": "Обычно за рейс. Для больших объёмов можем считать за смену или за весь проект."
        },
        "q2": {
          "question": "Что нужно для расчёта?",
          "answer": "Точка на карте, фото подъезда, описание материала, примерный объём и место выгрузки или вывоза."
        },
        "q3": {
          "question": "Можно ли заказать самосвал вместе с экскаватором?",
          "answer": "Да. Часто это лучший вариант: экскаватор грузит, самосвалы сразу вывозят грунт или мусор."
        },
        "q4": {
          "question": "Вы доставляете песок, щебень и грунт?",
          "answer": "Да. Можем привезти песок, щебень, землю и другие сыпучие материалы на объект."
        },
        "q5": {
          "question": "Работаете на узких дорогах и сложных подъездах?",
          "answer": "Да. Сначала оцениваем подъезд и подбираем грузовик под реальные условия."
        },
        "q6": {
          "question": "Можно заказать срочно?",
          "answer": "Да, если техника свободна. Лучше написать заранее, чтобы зафиксировать время."
        },
        "q7": {
          "question": "Вы перевозите экскаваторы и технику?",
          "answer": "Да. Для этого используем трал, грузовики и кран при необходимости."
        }
      },
      "photos": {
        "title": "Примеры работ грузовиков",
        "soil-delivery": {
          "title": "Доставка грунта",
          "alt": "Самосвал доставляет грунт и сыпучие материалы на строительный участок на Самуи"
        },
        "loading-of-soil": {
          "title": "Погрузка грунта",
          "alt": "Экскаватор загружает грунт в самосвал для вывоза с участка"
        },
        "our-vintage-big-truck": {
          "title": "Большой грузовик для стройки",
          "alt": "Большой грузовик для перевозки строительных материалов и тяжёлых грузов на Самуи"
        },
        "transportation-of-excavator": {
          "title": "Перевозка экскаватора",
          "alt": "Перевозка экскаватора на трале между строительными объектами на Самуи"
        },
        "transportation-of-special-equipment": {
          "title": "Перевозка спецтехники",
          "alt": "Перевозка строительной техники и тяжёлого оборудования грузовиком на Самуи"
        }
      }
    }
  },
  "en": {
    "trucks": {
      "schema": {
        "name": "Dump truck and truck services on Koh Samui",
        "serviceTypes": {
          "dumpTruck": "Dump truck rental",
          "soilRemoval": "Soil removal",
          "wasteRemoval": "Construction waste removal",
          "materialDelivery": "Construction material delivery",
          "soilDelivery": "Soil delivery",
          "equipmentTransport": "Equipment transport"
        }
      },
      "seo": {
        "title": "Dump Truck Service on Koh Samui - Soil Removal & Material Delivery",
        "description": "Dump truck and truck services on Koh Samui: soil removal, construction waste removal, sand, gravel and soil delivery, equipment transport. Per trip, per day or full job pricing.",
        "keywords": "dump truck koh samui, dump truck rental koh samui, truck service samui, soil removal koh samui, construction waste removal samui, sand delivery samui, gravel delivery samui, soil delivery samui, equipment transport samui"
      },
      "hero": {
        "title": "Dump truck and truck services on Koh Samui",
        "description": "Soil removal, construction waste removal, sand, gravel and soil delivery, and equipment transport across Koh Samui."
      },
      "intro": "Need a dump truck or construction truck on Koh Samui? We remove soil after excavation, haul construction waste, deliver sand, gravel and fill soil, and transport equipment between job sites. Send us the location, access photos and a short task description - we will choose the right truck, estimate the volume, number of trips and price before the job starts.",
      "tasks": {
        "title": "What trucks are used for",
        "t1": {
          "title": "Soil removal",
          "description": "Removing soil, clay, rocks and excess material after excavation, leveling or land clearing."
        },
        "t2": {
          "title": "Construction waste removal",
          "description": "Removing concrete, roots, demolition debris, construction waste and mixed site waste."
        },
        "t3": {
          "title": "Sand & gravel delivery",
          "description": "Delivering bulk materials for construction, roads, backfilling, drainage and site preparation."
        },
        "t4": {
          "title": "Soil delivery",
          "description": "Delivering fill soil and materials for raising land level, filling holes and preparing work areas."
        },
        "t5": {
          "title": "Excavator support",
          "description": "Dump trucks work with excavators: the excavator loads, trucks remove or deliver material."
        },
        "t6": {
          "title": "Equipment transport",
          "description": "Transporting excavators, machinery, equipment and heavy loads between construction sites."
        }
      },
      "equipment": {
        "title": "Our trucks",
        "note": "Not sure which truck you need? Send a map pin, access photos and task details - we will recommend the right option.",
        "prices": {
          "thb": "{price} THB",
          "trip": "Per trip",
          "day": "Per day"
        },
        "items": {
          "elf": {
            "type": "Small dump truck 4×2",
            "description": "For tight access, smaller volumes, sand, gravel and soil delivery, and removing material from small sites."
          },
          "hino300": {
            "type": "6-wheel dump truck",
            "description": "Main construction truck for soil removal, rocks, debris and work together with excavators."
          },
          "fm18": {
            "type": "10-wheel dump truck",
            "description": "For large volumes of soil, sand, gravel and heavy materials. Fewer trips and faster work."
          },
          "nissan": {
            "type": "Lowbed with crane",
            "description": "For transporting excavators, heavy equipment, machinery and large loads between job sites."
          },
          "ranger": {
            "type": "Crane truck",
            "description": "For heavy materials, equipment and jobs where crane loading or placement is needed."
          },
          "deva": {
            "type": "Crew and utility truck",
            "description": "For transporting workers, tools, light materials and short on-site tasks."
          }
        }
      },
      "packages": {
        "title": "Need an excavator with dump trucks?",
        "text": "For soil, rock or waste removal, an excavator is often needed for loading. We can organize excavator and dump trucks as one team so the work is faster and easier to coordinate."
      },
      "related": {
        "title": "You may also need",
        "excavator": {
          "title": "Excavator with operator",
          "description": "If you need digging, loading soil, concrete breaking or preparing material for removal."
        },
        "earthworks": {
          "title": "Full earthworks services",
          "description": "If you need complete land preparation: clearing, drainage, backfilling, levels and removal."
        }
      },
      "included": {
        "title": "Why clients work with us",
        "driver": {
          "title": "Local drivers",
          "description": "They know Samui roads, slopes, narrow access, difficult entrances and real island limitations."
        },
        "routing": {
          "title": "We help estimate volume",
          "description": "We recommend the right truck and estimate how many trips may be needed for your task."
        },
        "flexible": {
          "title": "Flexible pricing",
          "description": "Per trip, per day or full volume - depending on the task, distance and material."
        }
      },
      "faq": {
        "title": "Frequently asked questions",
        "q1": {
          "question": "How is the price calculated?",
          "answer": "Usually per trip. For larger volumes, we can calculate by day or for the full project."
        },
        "q2": {
          "question": "What do you need for a quote?",
          "answer": "A map pin, access photos, material type, estimated volume and loading or delivery location."
        },
        "q3": {
          "question": "Can I book a dump truck with an excavator?",
          "answer": "Yes. This is often the best setup: the excavator loads and dump trucks remove soil or waste."
        },
        "q4": {
          "question": "Do you deliver sand, gravel and soil?",
          "answer": "Yes. We can deliver sand, gravel, fill soil and other bulk materials to your site."
        },
        "q5": {
          "question": "Can you work on narrow roads and difficult access?",
          "answer": "Yes. We check access first and choose a truck that fits the real site conditions."
        },
        "q6": {
          "question": "Can I book urgently?",
          "answer": "Yes, if trucks are available. It is better to contact us in advance to secure the time."
        },
        "q7": {
          "question": "Do you transport excavators and equipment?",
          "answer": "Yes. We use lowbed trucks, transport trucks and crane support when needed."
        }
      },
      "photos": {
        "title": "Truck work examples",
        "soil-delivery": {
          "title": "Soil delivery",
          "alt": "Dump truck delivering soil and bulk materials to a construction site on Koh Samui"
        },
        "loading-of-soil": {
          "title": "Soil loading",
          "alt": "Excavator loading soil into a dump truck for removal from site"
        },
        "our-vintage-big-truck": {
          "title": "Large construction truck",
          "alt": "Large truck for transporting construction materials and heavy loads on Koh Samui"
        },
        "transportation-of-excavator": {
          "title": "Excavator transport",
          "alt": "Transporting an excavator by lowbed trailer between construction sites on Koh Samui"
        },
        "transportation-of-special-equipment": {
          "title": "Equipment transport",
          "alt": "Transporting construction machinery and heavy equipment by truck on Koh Samui"
        }
      }
    }
  },
  "th": {
    "trucks": {
      "schema": {
        "name": "บริการรถดั๊มพ์และรถบรรทุกบนเกาะสมุย",
        "serviceTypes": {
          "dumpTruck": "บริการรถดั๊มพ์",
          "soilRemoval": "ขนดินออก",
          "wasteRemoval": "ขนเศษวัสดุก่อสร้างออก",
          "materialDelivery": "ส่งวัสดุก่อสร้าง",
          "soilDelivery": "ส่งดินถม",
          "equipmentTransport": "ขนย้ายเครื่องจักร"
        }
      },
      "seo": {
        "title": "บริการรถดั๊มพ์บนเกาะสมุย {'|'} ขนดินออก ส่งทราย หิน และวัสดุ",
        "description": "บริการรถดั๊มพ์และรถบรรทุกบนเกาะสมุย ขนดินออก ขนเศษวัสดุก่อสร้าง ส่งทราย หิน ดินถม และขนย้ายเครื่องจักร คิดราคาต่อเที่ยว ต่อวัน หรือเหมางาน",
        "keywords": "รถดั๊มพ์ สมุย, รถบรรทุก สมุย, ขนดิน สมุย, ขนดินออก สมุย, ขนขยะก่อสร้าง สมุย, ส่งทราย สมุย, ส่งหิน สมุย, ส่งดินถม สมุย, ขนย้ายเครื่องจักร สมุย"
      },
      "hero": {
        "title": "บริการรถดั๊มพ์และรถบรรทุกบนเกาะสมุย",
        "description": "ขนดินออก ขนเศษวัสดุก่อสร้าง ส่งทราย หิน ดินถม และขนย้ายเครื่องจักรทั่วเกาะสมุย"
      },
      "intro": "ต้องการรถดั๊มพ์หรือรถบรรทุกสำหรับงานก่อสร้างบนเกาะสมุย? เรารับขนดินหลังงานขุด ขนเศษวัสดุก่อสร้าง ส่งทราย หิน ดินถม และขนย้ายเครื่องจักรระหว่างหน้างาน ส่งโลเคชัน รูปทางเข้า และรายละเอียดงานสั้น ๆ มาให้เรา เราจะช่วยเลือกประเภทรถ ประเมินปริมาณ จำนวนเที่ยว และแจ้งราคาก่อนเริ่มงาน",
      "tasks": {
        "title": "รถบรรทุกใช้ทำงานอะไรได้บ้าง",
        "t1": {
          "title": "ขนดินออก",
          "description": "ขนดิน ดินเหนียว หิน และวัสดุส่วนเกินหลังงานขุด ปรับพื้นที่ หรือเคลียร์ที่ดิน"
        },
        "t2": {
          "title": "ขนเศษวัสดุก่อสร้างออก",
          "description": "ขนคอนกรีต รากไม้ เศษรื้อถอน ขยะก่อสร้าง และเศษวัสดุผสมออกจากพื้นที่"
        },
        "t3": {
          "title": "ส่งทรายและหิน",
          "description": "ส่งวัสดุเทกองสำหรับงานก่อสร้าง ถนน ถมพื้นที่ ระบบระบายน้ำ และเตรียมหน้างาน"
        },
        "t4": {
          "title": "ส่งดินถม",
          "description": "ส่งดินและวัสดุสำหรับยกระดับพื้นที่ ถมหลุม และเตรียมพื้นที่ทำงาน"
        },
        "t5": {
          "title": "ทำงานร่วมกับรถขุด",
          "description": "รถดั๊มพ์ทำงานคู่กับรถขุด รถขุดตักวัสดุ และรถดั๊มพ์ขนออกหรือส่งเข้า"
        },
        "t6": {
          "title": "ขนย้ายเครื่องจักร",
          "description": "ขนย้ายรถขุด เครื่องจักร อุปกรณ์ และของหนักระหว่างไซต์งานก่อสร้าง"
        }
      },
      "equipment": {
        "title": "รถของเรา",
        "note": "ไม่แน่ใจว่าควรใช้รถแบบไหน? ส่งโลเคชัน รูปทางเข้า และรายละเอียดงานมา เราช่วยแนะนำได้",
        "prices": {
          "thb": "{price} บาท",
          "trip": "ต่อเที่ยว",
          "day": "ต่อวัน"
        },
        "items": {
          "elf": {
            "type": "รถดั๊มพ์เล็ก 4×2",
            "description": "เหมาะกับทางเข้าแคบ งานปริมาณไม่มาก ส่งทราย หิน ดิน และขนวัสดุออกจากพื้นที่เล็ก"
          },
          "hino300": {
            "type": "รถดั๊มพ์ 6 ล้อ",
            "description": "รถหลักสำหรับงานก่อสร้าง ใช้ขนดิน หิน เศษวัสดุ และทำงานคู่กับรถขุด"
          },
          "fm18": {
            "type": "รถดั๊มพ์ 10 ล้อ",
            "description": "สำหรับงานปริมาณมาก ขนดิน ทราย หิน และวัสดุหนัก ลดจำนวนเที่ยวและทำงานได้เร็วขึ้น"
          },
          "nissan": {
            "type": "รถเทรลเลอร์พร้อมเครน",
            "description": "สำหรับขนย้ายรถขุด เครื่องจักร อุปกรณ์หนัก และของขนาดใหญ่ระหว่างหน้างาน"
          },
          "ranger": {
            "type": "รถบรรทุกพร้อมเครน",
            "description": "สำหรับวัสดุหนัก อุปกรณ์ และงานที่ต้องใช้เครนช่วยยกหรือวางของ"
          },
          "deva": {
            "type": "รถสำหรับทีมงานและเครื่องมือ",
            "description": "สำหรับขนคนงาน เครื่องมือ วัสดุเบา และงานระยะสั้นในหน้างาน"
          }
        }
      },
      "packages": {
        "title": "ต้องการรถขุดพร้อมรถดั๊มพ์ไหม?",
        "text": "งานขนดิน หิน หรือเศษวัสดุมักต้องใช้รถขุดช่วยตัก เราสามารถจัดรถขุดและรถดั๊มพ์ให้ทำงานเป็นทีมเดียวกัน เพื่อให้งานเร็วขึ้นและประสานงานง่ายขึ้น"
      },
      "related": {
        "title": "บริการที่อาจต้องใช้เพิ่ม",
        "excavator": {
          "title": "รถขุดพร้อมคนขับ",
          "description": "สำหรับงานขุด ตักดิน ทุบคอนกรีต หรือเตรียมวัสดุก่อนขนออก"
        },
        "earthworks": {
          "title": "งานดินแบบครบวงจร",
          "description": "สำหรับงานเตรียมพื้นที่แบบครบชุด เช่น เคลียร์พื้นที่ ระบายน้ำ ถมดิน ปรับระดับ และขนดินออก"
        }
      },
      "included": {
        "title": "ทำไมลูกค้าเลือกเรา",
        "driver": {
          "title": "คนขับท้องถิ่น",
          "description": "รู้จักถนน ทางชัน ทางแคบ ทางเข้าไซต์ และข้อจำกัดจริงของเกาะสมุย"
        },
        "routing": {
          "title": "ช่วยประเมินปริมาณงาน",
          "description": "แนะนำประเภทรถและประเมินจำนวนเที่ยวที่เหมาะกับงานของคุณ"
        },
        "flexible": {
          "title": "คิดราคาได้หลายแบบ",
          "description": "คิดราคาต่อเที่ยว ต่อวัน หรือเหมางาน ขึ้นอยู่กับงาน ระยะทาง และวัสดุ"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "คิดราคายังไง?",
          "answer": "ส่วนใหญ่คิดเป็นต่อเที่ยว งานปริมาณมากสามารถคิดเป็นรายวันหรือเหมาทั้งงานได้"
        },
        "q2": {
          "question": "ต้องส่งอะไรเพื่อขอราคา?",
          "answer": "ส่งโลเคชัน รูปทางเข้า ประเภทวัสดุ ปริมาณโดยประมาณ และจุดรับหรือจุดส่ง"
        },
        "q3": {
          "question": "สั่งรถดั๊มพ์พร้อมรถขุดได้ไหม?",
          "answer": "ได้ครับ หลายงานเหมาะกับการใช้รถขุดตัก และรถดั๊มพ์ขนดินหรือเศษวัสดุออก"
        },
        "q4": {
          "question": "ส่งทราย หิน และดินถมได้ไหม?",
          "answer": "ได้ครับ เราสามารถส่งทราย หิน ดินถม และวัสดุเทกองอื่น ๆ ไปยังหน้างาน"
        },
        "q5": {
          "question": "ทำงานบนทางแคบหรือทางเข้ายากได้ไหม?",
          "answer": "ได้ครับ เราจะดูทางเข้าก่อน แล้วเลือกขนาดรถให้เหมาะกับสภาพหน้างานจริง"
        },
        "q6": {
          "question": "สั่งงานด่วนได้ไหม?",
          "answer": "ได้ถ้ามีรถว่าง แนะนำให้ติดต่อก่อนเพื่อจองเวลา"
        },
        "q7": {
          "question": "ขนย้ายรถขุดและเครื่องจักรได้ไหม?",
          "answer": "ได้ครับ เรามีรถสำหรับขนย้ายเครื่องจักร และใช้เครนช่วยเมื่อต้องยกของหนัก"
        }
      },
      "photos": {
        "title": "ตัวอย่างงานรถบรรทุก",
        "soil-delivery": {
          "title": "ส่งดินถม",
          "alt": "รถดั๊มพ์ส่งดินและวัสดุเทกองไปยังไซต์ก่อสร้างบนเกาะสมุย"
        },
        "loading-of-soil": {
          "title": "ตักดินขึ้นรถ",
          "alt": "รถขุดตักดินขึ้นรถดั๊มพ์เพื่อขนออกจากหน้างาน"
        },
        "our-vintage-big-truck": {
          "title": "รถบรรทุกขนาดใหญ่สำหรับงานก่อสร้าง",
          "alt": "รถบรรทุกขนาดใหญ่สำหรับขนวัสดุก่อสร้างและของหนักบนเกาะสมุย"
        },
        "transportation-of-excavator": {
          "title": "ขนย้ายรถขุด",
          "alt": "ขนย้ายรถขุดด้วยรถเทรลเลอร์ระหว่างไซต์งานบนเกาะสมุย"
        },
        "transportation-of-special-equipment": {
          "title": "ขนย้ายเครื่องจักร",
          "alt": "ขนย้ายเครื่องจักรก่อสร้างและอุปกรณ์หนักด้วยรถบรรทุกบนเกาะสมุย"
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
      imageSrc="/images/services/trucks/hero.webp"
      page="services/truck"
    />

    <ServiceIntro :text="t('trucks.intro')" />

    <ServiceIncluded
      :title="t('trucks.tasks.title')"
      :items="tasksItems"
    />

    <ServiceIncluded
      :title="t('trucks.included.title')"
      :items="includedItems"
    />

    <CoreContactsMini
      page="services/truck"
      location="content"
    />

    <ServiceEquipment
      :title="t('trucks.equipment.title')"
      :note="t('trucks.equipment.note')"
      :items="equipmentItems"
      page="services/truck"
    />

    <UAlert
      :title="t('trucks.packages.title')"
      :description="t('trucks.packages.text')"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-shovel"
    />

    <ServiceGallery
      :title="t('trucks.photos.title')"
      :items="photos"
    />

    <ServiceRelated
      :title="t('trucks.related.title')"
      :items="relatedServices"
    />

    <CoreFAQ
      :title="t('trucks.faq.title')"
      :items="faqItems"
    />

    <CoreContacts
      page="services/truck"
      location="bottom"
    />
  </UPage>
</template>
