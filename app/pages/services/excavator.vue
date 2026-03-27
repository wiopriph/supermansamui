<script setup lang="ts">
const { t } = useI18n();

const heroTitle = computed(() => t('excavator.hero.title'));
const heroDescription = computed(() => t('excavator.hero.description'));

const tasksTitle = computed(() => t('excavator.tasks.title'));
const tasksItems = computed(() => [
  {
    icon: 'i-lucide-axe',
    title: t('excavator.tasks.t1.title'),
    description: t('excavator.tasks.t1.description'),
  },
  {
    icon: 'i-lucide-rows',
    title: t('excavator.tasks.t2.title'),
    description: t('excavator.tasks.t2.description'),
  },
  {
    icon: 'i-lucide-tree-pine',
    title: t('excavator.tasks.t3.title'),
    description: t('excavator.tasks.t3.description'),
  },
  {
    icon: 'i-lucide-truck',
    title: t('excavator.tasks.t4.title'),
    description: t('excavator.tasks.t4.description'),
  },
  {
    icon: 'i-lucide-house',
    title: t('excavator.tasks.t5.title'),
    description: t('excavator.tasks.t5.description'),
  },
  {
    icon: 'i-lucide-mountain',
    title: t('excavator.tasks.t6.title'),
    description: t('excavator.tasks.t6.description'),
  },
]);

const equipmentTitle = computed(() => t('excavator.equipment.title'));
const equipmentNote = computed(() => t('excavator.equipment.note'));
const equipmentItems = computed(() => ([
  {
    title: 'Komatsu PC30-7',
    image: '/images/equipment/excavators/komatsu-pc30-7.webp',
    subtitle: t('excavator.equipment.items.pc30.type'),
    description: t('excavator.equipment.items.pc30.description'),
    prices: [
      {
        label: t('excavator.equipment.prices.hour'),
        value: '800 THB',
      },
      {
        label: t('excavator.equipment.prices.day'),
        value: '6 000 THB',
      },
    ],
  },
  {
    title: 'Caterpillar 305CR',
    image: '/images/equipment/excavators/cat-305cr.webp',
    subtitle: t('excavator.equipment.items.cat305.type'),
    description: t('excavator.equipment.items.cat305.description'),
    prices: [
      {
        label: t('excavator.equipment.prices.hour'),
        value: '1 000 THB',
      },
      {
        label: t('excavator.equipment.prices.day'),
        value: '7 500 THB',
      },
    ],
  },
  {
    title: 'Komatsu PC128US',
    image: '/images/equipment/excavators/komatsu-pc128us.webp',
    subtitle: t('excavator.equipment.items.pc128.type'),
    description: t('excavator.equipment.items.pc128.description'),
    prices: [
      {
        label: t('excavator.equipment.prices.hour'),
        value: '2 000 THB',
      },
      {
        label: t('excavator.equipment.prices.day'),
        value: '15 000 THB',
      },
    ],
  },
]));


const includedTitle = computed(() => t('excavator.included.title'));
const includedItems = computed(() => ([
  {
    icon: 'i-heroicons-clock',
    title: t('excavator.included.flexible.title'),
    description: t('excavator.included.flexible.description'),
  },
  {
    icon: 'i-heroicons-map',
    title: t('excavator.included.planning.title'),
    description: t('excavator.included.planning.description'),
  },
  {
    icon: 'i-heroicons-camera',
    title: t('excavator.included.report.title'),
    description: t('excavator.included.report.description'),
  },
]));

const faqTitle = computed(() => t('excavator.faq.title'));
const faqItems = computed(() => ([
  {
    question: t('excavator.faq.q1.question'),
    answer: t('excavator.faq.q1.answer'),
  },
  {
    question: t('excavator.faq.q2.question'),
    answer: t('excavator.faq.q2.answer'),
  },
  {
    question: t('excavator.faq.q3.question'),
    answer: t('excavator.faq.q3.answer'),
  },
  {
    question: t('excavator.faq.q4.question'),
    answer: t('excavator.faq.q4.answer'),
  },
  {
    question: t('excavator.faq.q5.question'),
    answer: t('excavator.faq.q5.answer'),
  },
  {
    question: t('excavator.faq.q6.question'),
    answer: t('excavator.faq.q6.answer'),
  },
]));

const photos = computed(() => {
  const order = [
    'earthworks',
    'construction-foundation',
    'leveling-construction-site',
    'root-removal',
    'bush-removal',
    'sewerage-installation',
    'delivery-of-an-excavator',
    'drainage-installation',
    'garbage-collection',
    'loading-excavator-onto-truck',
    'refueling-excavator',
    'road-construction',
    'scavengery',
    'night-work',
    'transporting-excavator',
  ];

  return order.map((key) => ({
    title: t(`excavator.photos.${key}.title`),
    alt: t(`excavator.photos.${key}.alt`),
    src: `/images/services/excavators/photos/${key}.webp`,
  }));
});


const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://supermansamui.com/services/excavator#service',
      name: t('excavator.seo.title'),
      description: t('excavator.seo.description'),
      provider: {
        '@id': 'https://supermansamui.com#business',
      },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Ko Samui, Surat Thani, Thailand',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t('excavator.tasks.title'),
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
  const title = t('excavator.seo.title');
  const description = t('excavator.seo.description');
  const keywords = t('excavator.seo.keywords');
  const image = 'https://supermansamui.com/images/services/excavators/hero.webp';

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },

      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '960' },
      { property: 'og:image:height', content: '466' },

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
    "excavator": {
      "seo": {
        "title": "Аренда экскаватора на Самуи | Земляные работы, вывоз грунта и подготовка участка",
        "description": "Аренда экскаватора на Самуи с оператором. Копаем котлованы и траншеи, расчищаем и выравниваем участки, вывозим грунт и готовим площадки под строительство. Быстрый выезд, понятные цены без сюрпризов.",
        "keywords": "аренда экскаватора самуи, услуги экскаватора самуи, земляные работы самуи, мини экскаватор самуи, подготовка участка самуи, вывоз грунта самуи"
      },
      "hero": {
        "title": "Аренда экскаватора на Самуи",
        "description": "Копаем, вывозим и подготавливаем участок под строительство. Приезжаем вовремя, работаем аккуратно и без неожиданных доплат."
      },
      "intro": "Нужно выкопать котлован, сделать траншею, расчистить участок или вывезти грунт? Мы закрываем такие задачи под ключ. Работаем своей техникой и своей командой - без посредников и без хаоса на объекте. Вы присылаете фото и короткое описание задачи, мы быстро считаем стоимость, подбираем технику и приезжаем в назначенный день. Без затягивания сроков и без «внезапных» доплат в процессе.",
      "tasks": {
        "title": "Чем можем помочь",
        "t1": {
          "title": "Котлованы",
          "description": "Копаем под дом, фундамент, бассейн или любые другие задачи."
        },
        "t2": {
          "title": "Траншеи",
          "description": "Под воду, электричество, канализацию и дренаж."
        },
        "t3": {
          "title": "Расчистка участка",
          "description": "Убираем кусты, корни, мусор и подготавливаем землю."
        },
        "t4": {
          "title": "Вывоз грунта",
          "description": "Загружаем и вывозим лишний грунт и строительный мусор."
        },
        "t5": {
          "title": "Подготовка под строительство",
          "description": "Выравниваем участок и делаем основу под фундамент."
        },
        "t6": {
          "title": "Отсыпка",
          "description": "Привозим грунт, песок и распределяем по участку."
        }
      },
      "equipment": {
        "title": "Какая техника у нас есть",
        "note": "Не знаете, какой экскаватор подойдёт? Просто отправьте фото - подскажем.",
        "prices": {
          "hour": "За час",
          "day": "За смену"
        },
        "items": {
          "pc30": {
            "type": "Малый экскаватор",
            "description": "Для узких участков, траншей и работы рядом с домом. Заходит туда, куда крупная техника не сможет."
          },
          "cat305": {
            "type": "Средний экскаватор",
            "description": "Оптимальный вариант для большинства задач: расчистка, котлованы, выравнивание."
          },
          "pc128": {
            "type": "Большой экскаватор",
            "description": "Для больших объёмов работ, подготовки участков и сложных проектов."
          }
        }
      },
      "packages": {
        "title": "Нужен самосвал или грунт?",
        "text": "Можем сразу привезти материалы или вывезти лишний грунт. Закрываем задачу полностью: экскаватор + самосвал + логистика."
      },
      "included": {
        "title": "Почему с нами проще",
        "flexible": {
          "title": "Гибкий формат работы",
          "description": "Можно по часам, сменами или под ключ - как удобнее под вашу задачу."
        },
        "planning": {
          "title": "Помогаем с решением",
          "description": "Подскажем, как лучше сделать, чтобы не переплачивать и не переделывать."
        },
        "report": {
          "title": "Контроль без вашего присутствия",
          "description": "Можем присылать фото и видео, если вас нет на объекте."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "Оператор входит в стоимость?",
          "answer": "Да, вся техника работает только с нашим оператором."
        },
        "q2": {
          "question": "Есть ли скрытые расходы?",
          "answer": "Нет. Цена согласовывается заранее и не меняется в процессе."
        },
        "q3": {
          "question": "Как проходит работа?",
          "answer": "Вы отправляете фото и задачу. Мы считаем стоимость, согласуем и приезжаем в назначенный день."
        },
        "q4": {
          "question": "Как считается цена?",
          "answer": "По часам, смене или за весь объём - выбираем оптимальный вариант под задачу."
        },
        "q5": {
          "question": "Сколько стоит доставка?",
          "answer": "Бесплатно от 3 часов. Иначе - 1000 бат."
        },
        "q6": {
          "question": "Есть ли грузовики?",
          "answer": "Да, есть самосвалы для вывоза грунта и доставки материалов."
        }
      },
      "photos": {
        "title": "Примеры наших работ",
        "bush-removal": {
          "title": "Очистка участка от кустарника и подготовка земли",
          "alt": "Очистка участка от кустарника и растительности, подготовка земли под строительство"
        },
        "construction-foundation": {
          "title": "Подготовка основания и земляные работы под фундамент",
          "alt": "Земляные работы и подготовка основания под фундамент здания"
        },
        "delivery-of-an-excavator": {
          "title": "Доставка экскаватора на строительный объект заказчика",
          "alt": "Доставка экскаватора на объект и транспортировка строительной техники"
        },
        "drainage-installation": {
          "title": "Устройство дренажной системы и водоотведения на участке",
          "alt": "Монтаж дренажной системы и организация водоотведения на участке"
        },
        "earthworks": {
          "title": "Земляные работы экскаватором на строительном участке",
          "alt": "Земляные работы экскаватором, копка и перемещение грунта"
        },
        "garbage-collection": {
          "title": "Сбор и вывоз строительного мусора с участка",
          "alt": "Сбор и вывоз строительного мусора и отходов с территории"
        },
        "leveling-construction-site": {
          "title": "Выравнивание и планировка строительного участка под застройку",
          "alt": "Планировка и выравнивание участка перед строительными работами"
        },
        "loading-excavator-onto-truck": {
          "title": "Погрузка грунта экскаватором в самосвал на объекте",
          "alt": "Погрузка грунта экскаватором в самосвал для вывоза"
        },
        "night-work": {
          "title": "Ночные строительные и земляные работы на объекте",
          "alt": "Выполнение строительных и земляных работ в ночное время"
        },
        "refueling-excavator": {
          "title": "Заправка экскаватора и подготовка техники к работе",
          "alt": "Заправка экскаватора топливом и подготовка техники к работе"
        },
        "road-construction": {
          "title": "Строительство и отсыпка подъездной дороги к участку",
          "alt": "Строительство подъездной дороги и отсыпка грунта для проезда"
        },
        "root-removal": {
          "title": "Удаление корней деревьев и расчистка строительного участка",
          "alt": "Удаление корней деревьев и очистка участка под строительство"
        },
        "scavengery": {
          "title": "Комплексная расчистка участка и вывоз строительного мусора",
          "alt": "Полная расчистка участка и вывоз мусора после работ"
        },
        "sewerage-installation": {
          "title": "Прокладка канализации и подготовка траншей под коммуникации",
          "alt": "Прокладка канализации и рытьё траншей под инженерные сети"
        },
        "transporting-excavator": {
          "title": "Перевозка экскаватора на трале между строительными объектами",
          "alt": "Перевозка экскаватора на трале и доставка техники на объект"
        }
      }
    }
  },
  "en": {
    "excavator": {
      "seo": {
        "title": "Excavator rental on Koh Samui | Digging, land clearing & site preparation",
        "description": "Excavator rental on Koh Samui with operator. We dig pits and trenches, clear land, remove soil and prepare sites for construction. Fast response, clear pricing, no hidden costs.",
        "keywords": "excavator rental koh samui, excavator service samui, land clearing samui, digging samui, mini excavator samui, soil removal samui, site preparation samui"
      },

      "hero": {
        "title": "Excavator rental on Koh Samui",
        "description": "We dig, clear and prepare your land. We show up on time, work clean and don’t change the price halfway."
      },

      "intro": "Need to dig a pit, trench, clear land or remove soil? We handle the whole job. We work with our own machines and our own team - no middlemen, no confusion on site. You send photos and a short description, we estimate quickly, choose the right machine and show up on the agreed day. No delays, no chaos, no surprise costs during the work.",

      "tasks": {
        "title": "What we do",
        "t1": {
          "title": "Pits and foundations",
          "description": "Digging for houses, pools, foundations or any construction needs."
        },
        "t2": {
          "title": "Trenches",
          "description": "For water, electricity, drainage and utility lines."
        },
        "t3": {
          "title": "Land clearing",
          "description": "Removing vegetation, roots, debris and preparing the land."
        },
        "t4": {
          "title": "Soil removal",
          "description": "Loading and removing excess soil and construction waste."
        },
        "t5": {
          "title": "Site preparation",
          "description": "Leveling and preparing the ground for construction."
        },
        "t6": {
          "title": "Backfilling",
          "description": "Delivering and spreading soil, sand and other materials."
        }
      },

      "equipment": {
        "title": "Our excavators",
        "note": "Not sure which one you need? Send a photo - we’ll recommend the right machine.",
        "prices": {
          "hour": "Per hour",
          "day": "Per day"
        },
        "items": {
          "pc30": {
            "type": "Small excavator",
            "description": "Best for tight spaces, trenches and work close to buildings."
          },
          "cat305": {
            "type": "Medium excavator",
            "description": "The most common choice for clearing, digging and leveling."
          },
          "pc128": {
            "type": "Large excavator",
            "description": "For bigger jobs, large volumes and heavy earthworks."
          }
        }
      },

      "packages": {
        "title": "Need dump trucks or materials?",
        "text": "We can deliver soil, sand or remove waste at the same time. One team handles everything - excavator, trucks and logistics."
      },

      "included": {
        "title": "Why it’s easier to work with us",
        "flexible": {
          "title": "Flexible pricing",
          "description": "Hourly, daily or full job - we choose what makes sense for your task."
        },
        "planning": {
          "title": "We help you decide",
          "description": "We suggest the right approach so you don’t waste time or money."
        },
        "report": {
          "title": "Remote updates",
          "description": "We can send photos and videos if you are not on site."
        }
      },

      "faq": {
        "title": "Frequently asked questions",
        "q1": {
          "question": "Is the operator included?",
          "answer": "Yes. All machines come with our operator."
        },
        "q2": {
          "question": "Any hidden costs?",
          "answer": "No. We agree on the price before starting and don’t change it during the job."
        },
        "q3": {
          "question": "How does it work?",
          "answer": "You send photos and task details. We estimate, confirm and come on the agreed day."
        },
        "q4": {
          "question": "How is pricing calculated?",
          "answer": "By hour, by day or as a full job - depending on what works best."
        },
        "q5": {
          "question": "Delivery cost?",
          "answer": "Free from 3 hours. Otherwise 1000 THB."
        },
        "q6": {
          "question": "Do you have trucks?",
          "answer": "Yes, we have dump trucks for soil removal and material delivery."
        }
      },

      "photos": {
        "title": "Our work examples",
        "bush-removal": {
          "title": "Site clearing and bush removal for land preparation",
          "alt": "Clearing bushes and vegetation, preparing land for construction"
        },
        "construction-foundation": {
          "title": "Foundation preparation and excavation works on site",
          "alt": "Excavation and ground preparation for building foundation"
        },
        "delivery-of-an-excavator": {
          "title": "Excavator delivery to construction site location",
          "alt": "Transport and delivery of excavator to job site"
        },
        "drainage-installation": {
          "title": "Drainage system installation and water management works",
          "alt": "Installing drainage system and managing water flow on site"
        },
        "earthworks": {
          "title": "Excavation and earthworks on construction site",
          "alt": "Excavation works, digging and moving soil with excavator"
        },
        "garbage-collection": {
          "title": "Construction waste collection and debris removal",
          "alt": "Collecting and removing construction waste from site"
        },
        "leveling-construction-site": {
          "title": "Site leveling and grading for construction preparation",
          "alt": "Leveling and grading land before construction works"
        },
        "loading-excavator-onto-truck": {
          "title": "Loading soil into dump truck using excavator",
          "alt": "Excavator loading soil into dump truck for transport"
        },
        "night-work": {
          "title": "Night construction and excavation works on site",
          "alt": "Performing construction and excavation works at night"
        },
        "refueling-excavator": {
          "title": "Refueling excavator and preparing equipment for work",
          "alt": "Refueling construction equipment before starting work"
        },
        "road-construction": {
          "title": "Access road construction and soil filling works",
          "alt": "Building access road and preparing surface for transport"
        },
        "root-removal": {
          "title": "Tree root removal and land clearing works",
          "alt": "Removing tree roots and clearing land for construction"
        },
        "scavengery": {
          "title": "Full site clearing and construction debris removal",
          "alt": "Complete site clearing and waste removal services"
        },
        "sewerage-installation": {
          "title": "Sewer system installation and trenching works",
          "alt": "Installing sewer lines and digging trenches for utilities"
        },
        "transporting-excavator": {
          "title": "Transporting excavator on lowbed trailer between sites",
          "alt": "Heavy equipment transport using trailer to job site"
        }
      }
    }
  },
  "th": {
    "excavator": {
      "seo": {
        "title": "เช่ารถขุด เกาะสมุย | ขุดดิน เคลียร์พื้นที่ และเตรียมไซต์ก่อสร้าง",
        "description": "บริการเช่ารถขุดพร้อมคนขับบนเกาะสมุย ขุดหลุม ทำร่องน้ำ เคลียร์ที่ดิน ขนดินออก และเตรียมพื้นที่ก่อสร้าง รวดเร็ว ราคาเคลียร์ ไม่มีค่าใช้จ่ายแอบแฝง",
        "keywords": "เช่ารถขุด สมุย, รถขุด สมุย, ขุดดิน สมุย, เคลียร์ที่ดิน สมุย, เตรียมพื้นที่ก่อสร้าง สมุย, ขนดิน สมุย"
      },

      "hero": {
        "title": "เช่ารถขุดบนเกาะสมุย",
        "description": "ขุด เคลียร์ และเตรียมพื้นที่ ตรงเวลา ทำงานเรียบร้อย ไม่มีบวกเพิ่มกลางงาน"
      },

      "intro": "ต้องการขุดหลุม ทำร่องน้ำ เคลียร์พื้นที่ หรือขนดินออก? เราดูแลให้ครบทุกขั้นตอน ใช้ทีมงานและเครื่องจักรของเราเอง ไม่มีตัวกลาง ไม่มีความวุ่นวายในหน้างาน คุณส่งรูปและรายละเอียดมา เราประเมินให้เร็ว เลือกเครื่องจักรที่เหมาะสม และเข้าทำงานตามเวลาที่ตกลงไว้ ไม่มีดีเลย์ และไม่มีค่าใช้จ่ายเพิ่มระหว่างงาน",

      "tasks": {
        "title": "งานที่เราทำ",
        "t1": {
          "title": "ขุดหลุม",
          "description": "สำหรับบ้าน ฐานราก สระว่ายน้ำ และงานก่อสร้าง"
        },
        "t2": {
          "title": "ขุดร่อง",
          "description": "สำหรับน้ำ ไฟฟ้า ระบบระบายน้ำ"
        },
        "t3": {
          "title": "เคลียร์พื้นที่",
          "description": "กำจัดต้นไม้ รากไม้ และสิ่งกีดขวาง"
        },
        "t4": {
          "title": "ขนดินออก",
          "description": "ขนดินส่วนเกินและเศษวัสดุก่อสร้าง"
        },
        "t5": {
          "title": "เตรียมพื้นที่",
          "description": "ปรับระดับและเตรียมพื้นที่สำหรับก่อสร้าง"
        },
        "t6": {
          "title": "ถมดิน",
          "description": "นำดินและวัสดุมาเกลี่ยให้พร้อมใช้งาน"
        }
      },

      "equipment": {
        "title": "เครื่องจักรของเรา",
        "note": "ไม่แน่ใจว่าใช้ขนาดไหน? ส่งรูปมา เราช่วยเลือกให้",
        "prices": {
          "hour": "ต่อชั่วโมง",
          "day": "ต่อวัน"
        },
        "items": {
          "pc30": {
            "type": "ขนาดเล็ก",
            "description": "เหมาะกับพื้นที่แคบและงานใกล้อาคาร"
          },
          "cat305": {
            "type": "ขนาดกลาง",
            "description": "เหมาะกับงานส่วนใหญ่ เช่น เคลียร์และปรับพื้นที่"
          },
          "pc128": {
            "type": "ขนาดใหญ่",
            "description": "สำหรับงานขนาดใหญ่และปริมาณมาก"
          }
        }
      },

      "packages": {
        "title": "ต้องการรถดั๊มพ์หรือวัสดุไหม?",
        "text": "เราสามารถจัดการให้ครบ ทั้งรถขุด รถดั๊มพ์ และวัสดุในงานเดียว"
      },

      "included": {
        "title": "ทำไมลูกค้าถึงเลือกเรา",
        "flexible": {
          "title": "ราคายืดหยุ่น",
          "description": "คิดราคาตามชั่วโมง รายวัน หรือเหมางาน"
        },
        "planning": {
          "title": "ช่วยวางแผน",
          "description": "แนะนำวิธีที่เหมาะสมเพื่อลดต้นทุนและเวลา"
        },
        "report": {
          "title": "มีอัปเดตงาน",
          "description": "ส่งรูปและวิดีโอให้ดูระหว่างงานได้"
        }
      },

      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "มีคนขับรวมไหม?",
          "answer": "มี รถทุกคันมาพร้อมคนขับ"
        },
        "q2": {
          "question": "มีค่าใช้จ่ายแอบแฝงไหม?",
          "answer": "ไม่มี ราคาตกลงก่อนเริ่มงาน"
        },
        "q3": {
          "question": "เริ่มงานยังไง?",
          "answer": "ส่งรูปและรายละเอียด เราประเมินและเข้าทำงานตามนัด"
        },
        "q4": {
          "question": "คิดราคายังไง?",
          "answer": "ตามชั่วโมง รายวัน หรือเหมางาน"
        },
        "q5": {
          "question": "ค่าขนส่งเท่าไหร่?",
          "answer": "ฟรีถ้าใช้เกิน 3 ชั่วโมง ไม่งั้น 1000 บาท"
        },
        "q6": {
          "question": "มีรถบรรทุกไหม?",
          "answer": "มี สำหรับขนดินและวัสดุ"
        }
      },

      "photos": {
        "title": "ผลงานของเรา",
        "bush-removal": {
          "title": "เคลียร์พื้นที่ ตัดพุ่มไม้ และเตรียมที่ดินก่อนก่อสร้าง",
          "alt": "กำจัดพุ่มไม้และวัชพืช พร้อมเตรียมพื้นที่สำหรับงานก่อสร้าง"
        },
        "construction-foundation": {
          "title": "เตรียมฐานรากและงานขุดดินสำหรับงานก่อสร้าง",
          "alt": "งานขุดดินและเตรียมพื้นที่สำหรับฐานรากอาคาร"
        },
        "delivery-of-an-excavator": {
          "title": "ขนส่งรถขุดไปยังหน้างานก่อสร้าง",
          "alt": "บริการขนส่งและส่งมอบรถขุดไปยังไซต์งาน"
        },
        "drainage-installation": {
          "title": "ติดตั้งระบบระบายน้ำและจัดการน้ำในพื้นที่",
          "alt": "ติดตั้งระบบระบายน้ำและควบคุมการไหลของน้ำ"
        },
        "earthworks": {
          "title": "งานขุดดินและปรับพื้นที่ด้วยรถขุด",
          "alt": "งานขุด เคลื่อนย้ายดิน และปรับพื้นที่ด้วยรถขุด"
        },
        "garbage-collection": {
          "title": "เก็บและขนย้ายเศษวัสดุก่อสร้างออกจากพื้นที่",
          "alt": "เก็บและขนย้ายขยะและเศษวัสดุก่อสร้าง"
        },
        "leveling-construction-site": {
          "title": "ปรับระดับพื้นที่และเตรียมไซต์สำหรับการก่อสร้าง",
          "alt": "ปรับระดับดินและเตรียมพื้นที่ก่อนเริ่มงานก่อสร้าง"
        },
        "loading-excavator-onto-truck": {
          "title": "ตักดินขึ้นรถบรรทุกด้วยรถขุด",
          "alt": "ใช้รถขุดตักดินขึ้นรถบรรทุกเพื่อขนย้าย"
        },
        "night-work": {
          "title": "งานก่อสร้างและขุดดินในช่วงเวลากลางคืน",
          "alt": "ดำเนินงานก่อสร้างและขุดดินในเวลากลางคืน"
        },
        "refueling-excavator": {
          "title": "เติมน้ำมันรถขุดและเตรียมเครื่องจักรก่อนทำงาน",
          "alt": "เติมน้ำมันและเตรียมอุปกรณ์ก่อนเริ่มงาน"
        },
        "road-construction": {
          "title": "ก่อสร้างถนนทางเข้าและถมดินปรับพื้น",
          "alt": "สร้างถนนทางเข้าและเตรียมพื้นผิวสำหรับการใช้งาน"
        },
        "root-removal": {
          "title": "ขุดและกำจัดรากไม้ พร้อมเคลียร์พื้นที่",
          "alt": "กำจัดรากไม้และเคลียร์พื้นที่เพื่อเตรียมก่อสร้าง"
        },
        "scavengery": {
          "title": "เคลียร์พื้นที่ทั้งหมดและขนย้ายขยะออกจากไซต์",
          "alt": "บริการเคลียร์พื้นที่และขนย้ายเศษวัสดุ"
        },
        "sewerage-installation": {
          "title": "ติดตั้งระบบท่อระบายน้ำและขุดร่องสำหรับสาธารณูปโภค",
          "alt": "วางท่อระบายน้ำและขุดร่องสำหรับระบบสาธารณูปโภค"
        },
        "transporting-excavator": {
          "title": "ขนย้ายรถขุดด้วยรถเทรลเลอร์ระหว่างไซต์งาน",
          "alt": "ขนส่งเครื่องจักรหนักไปยังหน้างานด้วยรถเทรลเลอร์"
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
      :title="tasksTitle"
      :items="tasksItems"
    />

    <ServiceEquipment
      :title="equipmentTitle"
      :note="equipmentNote"
      :items="equipmentItems"
      page="services/excavator"
    />

    <UAlert
      :title="t('excavator.packages.title')"
      :description=" t('excavator.packages.text')"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-truck"
    />

    <ServiceIncluded
      :title="includedTitle"
      :items="includedItems"
    />

    <CoreContactsMini
      page="services/excavator"
      location="content"
    />

    <ServiceGallery
      :title="t('excavator.photos.title')"
      :items="photos"
    />


    <CoreFAQ
      :title="faqTitle"
      :items="faqItems"
    />

    <CoreContacts
      page="services/excavator"
      location="bottom"
    />
  </UPage>
</template>
