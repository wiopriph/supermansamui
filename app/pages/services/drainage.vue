<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const heroTitle = computed(() => t('drainage.hero.title'));
const heroDescription = computed(() => t('drainage.hero.description'));

const tasksItems = computed(() => [
  {
    icon: 'i-lucide-waves',
    title: t('drainage.tasks.t1.title'),
    description: t('drainage.tasks.t1.description'),
  },
  {
    icon: 'i-lucide-shovel',
    title: t('drainage.tasks.t2.title'),
    description: t('drainage.tasks.t2.description'),
  },
  {
    icon: 'i-lucide-droplet',
    title: t('drainage.tasks.t3.title'),
    description: t('drainage.tasks.t3.description'),
  },
  {
    icon: 'i-lucide-arrow-down-up',
    title: t('drainage.tasks.t4.title'),
    description: t('drainage.tasks.t4.description'),
  },
  {
    icon: 'i-lucide-mountain',
    title: t('drainage.tasks.t5.title'),
    description: t('drainage.tasks.t5.description'),
  },
  {
    icon: 'i-lucide-hard-hat',
    title: t('drainage.tasks.t6.title'),
    description: t('drainage.tasks.t6.description'),
  },
]);

const includedItems = computed(() => [
  {
    icon: 'i-heroicons-cloud',
    title: t('drainage.included.rain.title'),
    description: t('drainage.included.rain.description'),
  },
  {
    icon: 'i-heroicons-home',
    title: t('drainage.included.foundation.title'),
    description: t('drainage.included.foundation.description'),
  },
  {
    icon: 'i-heroicons-map',
    title: t('drainage.included.levels.title'),
    description: t('drainage.included.levels.description'),
  },
]);

const processItems = computed(() => [
  {
    icon: 'i-lucide-map-pin',
    title: t('drainage.process.p1.title'),
    description: t('drainage.process.p1.description'),
  },
  {
    icon: 'i-lucide-ruler',
    title: t('drainage.process.p2.title'),
    description: t('drainage.process.p2.description'),
  },
  {
    icon: 'i-lucide-shovel',
    title: t('drainage.process.p3.title'),
    description: t('drainage.process.p3.description'),
  },
  {
    icon: 'i-lucide-check-circle',
    title: t('drainage.process.p4.title'),
    description: t('drainage.process.p4.description'),
  },
]);

const relatedServices = computed(() => [
  {
    icon: 'i-lucide-land-plot',
    title: t('drainage.related.earthworks.title'),
    description: t('drainage.related.earthworks.description'),
    to: localePath({ name: 'services-earthworks' }),
  },
  {
    icon: 'i-lucide-ruler',
    title: t('drainage.related.leveling.title'),
    description: t('drainage.related.leveling.description'),
    to: localePath({ name: 'services-land-leveling' }),
  },
  {
    icon: 'i-lucide-truck',
    title: t('drainage.related.truck.title'),
    description: t('drainage.related.truck.description'),
    to: localePath({ name: 'services-truck' }),
  },
]);

const faqItems = computed(() => [
  { question: t('drainage.faq.q1.question'), answer: t('drainage.faq.q1.answer') },
  { question: t('drainage.faq.q2.question'), answer: t('drainage.faq.q2.answer') },
  { question: t('drainage.faq.q3.question'), answer: t('drainage.faq.q3.answer') },
  { question: t('drainage.faq.q4.question'), answer: t('drainage.faq.q4.answer') },
  { question: t('drainage.faq.q5.question'), answer: t('drainage.faq.q5.answer') },
  { question: t('drainage.faq.q6.question'), answer: t('drainage.faq.q6.answer') },
]);

const photos = computed(() => {
  const order = [
    'water-runoff-channel',
    'drainage-trench-excavation',
    'drainage-after-backfilling',
    'pipe-under-access-road',
    'wet-land-drainage',
    'preparing-the-access-road',
  ];

  return order.map((key) => ({
    title: t(`drainage.photos.${key}.title`),
    alt: t(`drainage.photos.${key}.alt`),
    src: `/images/services/drainage/photos/${key}.webp`,
  }));
});

const seoBlock = computed(() => ({
  title: t('drainage.seoBlock.title'),
  paragraphs: [
    t('drainage.seoBlock.p1'),
    t('drainage.seoBlock.p2'),
    t('drainage.seoBlock.p3'),
  ],
}));

const serviceTypes = computed(() => [
  t('drainage.schema.serviceTypes.drainage'),
  t('drainage.schema.serviceTypes.trenches'),
  t('drainage.schema.serviceTypes.pipes'),
  t('drainage.schema.serviceTypes.runoff'),
  t('drainage.schema.serviceTypes.slopeCorrection'),
]);

useServiceSeo({
  t,
  path: '/services/drainage',
  prefix: 'drainage',
  image: {
    url: 'https://supermansamui.com/images/services/drainage/hero.webp',
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
    "drainage": {
      "schema": {
        "name": "Дренаж участка на Самуи",
        "serviceTypes": {
          "drainage": "Дренаж участка",
          "trenches": "Дренажные траншеи",
          "pipes": "Укладка труб",
          "runoff": "Отвод воды",
          "slopeCorrection": "Коррекция уклонов"
        }
      },
      "seo": {
        "title": "Дренаж участка на Самуи — канавы и трубы",
        "description": "Дренаж и отвод дождевой воды на Самуи: канавы, траншеи, укладка труб и коррекция уклонов. Оценим участок и согласуем объём, цену и условия до начала работ.",
        "keywords": "дренаж участка самуи, отвод воды самуи, дренажные канавы самуи, дренажные траншеи самуи, укладка водоотводных труб самуи"
      },
      "hero": {
        "title": "Дренаж участка на Самуи",
        "description": "Устраиваем отвод дождевой воды на участках, вдоль дорог и у въездов. Копаем канавы и траншеи, укладываем трубы и формируем уклоны по согласованной схеме."
      },
      "intro": "Оценим, откуда приходит вода, где она скапливается и куда её можно отвести. На Самуи основной сток приходится на сезон дождей с октября по декабрь, поэтому трассу и уклоны рассчитываем на ливень, а не на обычный дождь. До начала работ согласуем объём, материалы, стоимость и условия.",
      "tasks": {
        "title": "Какие дренажные работы выполняем",
        "t1": {
          "title": "Отвод воды из низких мест",
          "description": "Открываем путь воде из низин, где она стоит после дождя: канава, труба или уклон в сторону существующего стока. Решение показываем на месте после осмотра."
        },
        "t2": {
          "title": "Канавы и траншеи",
          "description": "Копаем открытые канавы мини-экскаватором там, где подъезд узкий, и тяжёлой машиной на больших участках. Глубину и уклон выдерживаем по отметкам."
        },
        "t3": {
          "title": "Трубы под дорогами и въездами",
          "description": "Укладываем водоотводные трубы там, где канава пересекает проезд, засыпаем траншею и восстанавливаем покрытие."
        },
        "t4": {
          "title": "Уклоны для стока воды",
          "description": "Срезаем или подсыпаем отдельные участки рельефа, чтобы поверхностная вода уходила к канавам, а не стояла у дома и на подъезде."
        },
        "t5": {
          "title": "Водоотвод перед отсыпкой",
          "description": "На заболоченных участках сначала открываем канал и даём воде уйти, потом завозим грунт. Так готовили топкий участок в Маенаме: канал, труба под дорогой, затем отсыпка."
        },
        "t6": {
          "title": "Водоотвод на стройплощадке",
          "description": "Канавы и трубы на время стройки, чтобы рабочие зоны и подъезд не раскисали в дождь и техника строителей могла заезжать."
        }
      },
      "included": {
        "title": "Что учитываем при устройстве дренажа",
        "rain": {
          "title": "Сезон дождей на Самуи",
          "description": "С октября по декабрь ливни идут днями, низкие и глинистые участки стоят в воде неделями. Смотрим не только на лужи, но и на то, откуда вода приходит на участок."
        },
        "foundation": {
          "title": "Здания и подъезды",
          "description": "Учитываем расположение дома, въезда и рабочих площадок при выборе трассы отвода."
        },
        "levels": {
          "title": "Существующие и будущие уровни",
          "description": "Связываем канавы и трубы с рельефом участка и запланированной отсыпкой."
        }
      },
      "seoBlock": {
        "title": "Откуда приходит вода и куда её отвести",
        "p1": "Для оценки дренажа важно увидеть весь путь воды: от места поступления на участок до точки отвода. Поэтому вместе с мокрыми зонами мы осматриваем прилегающий рельеф, существующие канавы, трубы и въезды.",
        "p2": "В зависимости от условий предлагаем открытую канаву, трубу на отдельном участке, коррекцию уклона или сочетание этих работ. Если есть готовая схема водоотвода, используем её для обсуждения объёма и расчёта.",
        "p3": "Точку отвода определяем до начала копки с учётом соседних участков и существующих водоотводов. Если подходящего выхода воды нет, сначала обсуждаем ограничения и возможные решения."
      },
      "process": {
        "title": "Как выполняем дренажные работы",
        "p1": {
          "title": "Осматриваем участок",
          "description": "Изучаем места скопления воды, рельеф, возможные точки отвода и доступ для техники."
        },
        "p2": {
          "title": "Согласуем решение и цену",
          "description": "Определяем трассу, необходимые работы и материалы. Фиксируем стоимость и условия до начала."
        },
        "p3": {
          "title": "Копаем и укладываем",
          "description": "Формируем канавы, готовим траншеи и укладываем трубы по согласованной схеме. Дополнительные работы обсуждаем заранее."
        },
        "p4": {
          "title": "Проверяем выполненные работы",
          "description": "Сверяем трассу и отметки с согласованной схемой, проверяем выходы труб и канав. Обсуждаем доступ для дальнейшей очистки."
        }
      },
      "pricing": {
        "title": "Стоимость дренажных работ",
        "text": "Цена зависит от длины и глубины траншей, грунта, подъезда и параметров труб. В расчёте укажем, какие работы, материалы, доставка и вывоз включены. Тарифы на технику есть на странице каждой машины."
      },
      "cta": {
        "title": "Стоит вода после дождя?",
        "text": "Пришлите локацию, фото или видео мокрых зон и подъезда. Расскажите, когда появляется вода и как долго остаётся. Если видны существующие канавы или трубы, покажите их тоже."
      },
      "related": {
        "title": "Работы, которые можно заказать вместе",
        "earthworks": {
          "title": "Земляные работы",
          "description": "Котлованы, траншеи, отсыпка и другие работы с грунтом: все направления в одном разделе."
        },
        "leveling": {
          "title": "Выравнивание участка",
          "description": "Планировка территории, срезка и подсыпка грунта по согласованным уровням и уклонам."
        },
        "truck": {
          "title": "Самосвалы и доставка материалов",
          "description": "Доставка песка, щебня и грунта, вывоз материала после копки траншей."
        }
      },
      "faq": {
        "title": "Вопросы о дренаже участка",
        "q1": {
          "question": "Можно ли полностью избавиться от стоячей воды?",
          "answer": "Сухой участок при любом ливне не обещаем. Результат зависит от рельефа, грунта, источника воды и точки отвода. После осмотра объясним, что решат предлагаемые работы и какие ограничения останутся."
        },
        "q2": {
          "question": "Сколько времени занимают дренажные работы?",
          "answer": "Канаву вдоль участка и трубу под въездом обычно делаем за день-два. Заболоченный участок с каналом, трубой под дорогой и отсыпкой занимает заметно дольше, сроки называем после осмотра."
        },
        "q3": {
          "question": "Вы укладываете трубы под въездом?",
          "answer": "Да. Можем выкопать траншею и уложить водоотводную трубу под въездом или проездом. Параметры трубы, глубину, засыпку и требования к проезду уточняем до начала работ."
        },
        "q4": {
          "question": "Когда делать дренаж: до или после выравнивания?",
          "answer": "Планировать их нужно вместе: будущие уровни определяют трассу и точки отвода воды. Порядок выполнения зависит от участка и проекта — определяем его до начала копки и отсыпки."
        },
        "q5": {
          "question": "Трубы, щебень и доставка входят в стоимость?",
          "answer": "Это указываем в расчёте. Набор материалов зависит от согласованного решения. Можем организовать доставку; заранее уточним стоимость материалов, перевозок, работ и вывоза лишнего грунта."
        },
        "q6": {
          "question": "Можно выполнить работы на узком участке?",
          "answer": "Проверим ширину въезда и проходов, место для работы и размещения вынутого грунта. По этим условиям подберём технику и оценим возможность выполнения работ. Пришлите фото и примерные размеры."
        }
      },
      "photos": {
        "title": "Примеры дренажных работ",
        "preparing-the-access-road": {
          "title": "Подготовка подъездной дороги",
          "alt": "Отсыпка и выравнивание подъездной дороги для техники и транспорта"
        },
        "pipe-under-access-road": {
          "title": "Труба под дорогой",
          "alt": "Укладка трубы под подъездной дорогой для отвода воды"
        },
        "water-runoff-channel": {
          "title": "Канал для отвода воды",
          "alt": "Дренажная канава для отвода воды с участка"
        },
        "drainage-trench-excavation": {
          "title": "Копка дренажной траншеи",
          "alt": "Экскаватор копает дренажную траншею на участке на Самуи"
        },
        "wet-land-drainage": {
          "title": "Дренаж влажного участка",
          "alt": "Подготовка влажного участка с водой к дальнейшим земляным работам"
        },
        "drainage-after-backfilling": {
          "title": "Участок после дренажа",
          "alt": "Участок после дренажных работ и подготовки к строительству"
        }
      }
    }
  },
  "en": {
    "drainage": {
      "schema": {
        "name": "Drainage work on Koh Samui",
        "serviceTypes": {
          "drainage": "Drainage work",
          "trenches": "Drainage trenches",
          "pipes": "Pipe installation",
          "runoff": "Water runoff",
          "slopeCorrection": "Slope correction"
        }
      },
      "seo": {
        "title": "Land Drainage on Koh Samui — Channels & Pipes",
        "description": "Land drainage on Koh Samui: runoff channels, trenches, pipe installation and slope adjustments. Site assessment, scope, prices and terms agreed before work starts.",
        "keywords": "land drainage koh samui, rainwater drainage samui, drainage channels samui, drainage trenches samui, drainage pipe installation samui"
      },
      "hero": {
        "title": "Land drainage on Koh Samui",
        "description": "We create rainwater drainage routes for plots, roadsides and entrances. We dig channels and trenches, install pipes and adjust slopes to the planned layout."
      },
      "intro": "We assess where water enters, where it collects and where it can drain. Most runoff on Koh Samui comes with the rainy season from October to December, so routes and slopes are sized for a downpour, not an average shower. We agree on the scope, materials, cost and terms before starting.",
      "tasks": {
        "title": "Drainage work we carry out",
        "t1": {
          "title": "Drainage for low areas",
          "description": "We open a way out for water from low spots that flood after rain: a channel, a pipe or a slope towards an existing outlet. We show the solution on site after an inspection."
        },
        "t2": {
          "title": "Channels and trenches",
          "description": "We dig open channels with a mini excavator where access is tight and with a heavier machine on larger plots, holding depth and fall to the set levels."
        },
        "t3": {
          "title": "Pipes under roads and entrances",
          "description": "We install drainage pipes where a channel crosses a driveway, backfill the trench and reinstate the surface."
        },
        "t4": {
          "title": "Slopes for surface runoff",
          "description": "We cut or fill selected areas so surface water runs towards the channels instead of standing by the house and the entrance."
        },
        "t5": {
          "title": "Drainage before land filling",
          "description": "On waterlogged plots we open the channel first and let the water out, then bring in fill. That is how we prepared a boggy plot in Maenam: a channel, a pipe under the road, then fill."
        },
        "t6": {
          "title": "Construction site drainage",
          "description": "Temporary channels and pipes for the construction period so work areas and access do not turn to mud in the rain and builders’ vehicles can get in."
        }
      },
      "included": {
        "title": "What we consider when planning drainage",
        "rain": {
          "title": "Samui’s rainy season",
          "description": "From October to December it can rain for days, and low or clay plots stay flooded for weeks. We look beyond the puddles to where water enters the site."
        },
        "foundation": {
          "title": "Buildings and access",
          "description": "We account for the house, entrance and work areas when choosing the drainage route."
        },
        "levels": {
          "title": "Existing and future levels",
          "description": "We coordinate channels and pipes with the terrain and any planned land filling."
        }
      },
      "seoBlock": {
        "title": "Where water comes from and where it can go",
        "p1": "Assessing drainage means looking at the full route from where water enters the site to its outlet. Alongside wet areas, we inspect nearby terrain, existing channels, pipes and entrances.",
        "p2": "Depending on conditions, we may suggest an open channel, a pipe along part of the route, slope adjustments or a combination. If you have a drainage layout, we use it to discuss the scope and prepare an estimate.",
        "p3": "We identify the outlet before excavation, taking neighboring plots and existing drainage into account. If there is no suitable outlet, we first discuss the limitations and possible options."
      },
      "process": {
        "title": "How we carry out drainage work",
        "p1": {
          "title": "Inspect the site",
          "description": "We assess water collection points, terrain, possible outlets and machinery access."
        },
        "p2": {
          "title": "Agree on the work and price",
          "description": "We confirm the route, work and materials needed, then set out costs and terms before starting."
        },
        "p3": {
          "title": "Excavate and install",
          "description": "We shape channels, dig trenches and install pipes to the planned layout. Additional work is discussed in advance."
        },
        "p4": {
          "title": "Check the completed work",
          "description": "We check routes and levels against the plan, inspect pipe and channel outlets, and discuss access for future cleaning."
        }
      },
      "pricing": {
        "title": "Drainage work costs",
        "text": "The price depends on trench length and depth, soil, access and pipe specifications. The estimate states which work, materials, deliveries and removal are included. Machine rates are listed on each equipment page."
      },
      "cta": {
        "title": "Water collecting after rain?",
        "text": "Send the location, photos or videos of wet areas and the access route. Tell us when the water appears and how long it stays. Show any existing channels or pipes too."
      },
      "related": {
        "title": "Services you can book together",
        "earthworks": {
          "title": "Earthworks",
          "description": "Explore excavation, trenching, filling and other groundworks in one place."
        },
        "leveling": {
          "title": "Land leveling",
          "description": "Site grading, cutting and filling to the required levels and slopes."
        },
        "truck": {
          "title": "Dump trucks and material delivery",
          "description": "Sand, gravel and soil deliveries, plus removal of material excavated from trenches."
        }
      },
      "faq": {
        "title": "Land drainage questions",
        "q1": {
          "question": "Can you eliminate standing water completely?",
          "answer": "We don’t promise a dry plot in any downpour. The result depends on terrain, soil, the water source and the outlet. After inspecting the site, we explain what the proposed work will solve and what limitations remain."
        },
        "q2": {
          "question": "How long does drainage work take?",
          "answer": "A channel along a plot and a pipe under an entrance usually take a day or two. A waterlogged plot with a channel, a pipe under the road and fill takes considerably longer; we give the timing after an inspection."
        },
        "q3": {
          "question": "Can you install a pipe under an entrance?",
          "answer": "Yes. We can excavate a trench and install a drainage pipe under an entrance or access road. Pipe specifications, depth, backfilling and vehicle access requirements are confirmed before work starts."
        },
        "q4": {
          "question": "Should drainage come before or after land leveling?",
          "answer": "Plan them together: future levels determine drainage routes and outlets. The work sequence depends on the site and project, and we settle it before excavation and filling begin."
        },
        "q5": {
          "question": "Are pipes, gravel and delivery included in the price?",
          "answer": "The estimate states what is included. Materials depend on the chosen approach. We can arrange delivery and clarify material, transport, labor and surplus soil removal costs in advance."
        },
        "q6": {
          "question": "Can you work on a narrow plot?",
          "answer": "We check entrance and passage widths, working space and room for excavated soil. These conditions determine machinery choice and whether the work is feasible. Send photos and approximate dimensions."
        }
      },
      "photos": {
        "title": "Drainage work examples",
        "preparing-the-access-road": {
          "title": "Access road preparation",
          "alt": "Building and leveling access road"
        },
        "pipe-under-access-road": {
          "title": "Pipe under access road",
          "alt": "Installing drainage pipe under an access road"
        },
        "water-runoff-channel": {
          "title": "Water runoff channel",
          "alt": "Drainage channel for moving water away from land"
        },
        "drainage-trench-excavation": {
          "title": "Drainage trench excavation",
          "alt": "Excavator digging a drainage trench on Koh Samui land"
        },
        "wet-land-drainage": {
          "title": "Wet land drainage",
          "alt": "Preparing wet land with drainage before further earthworks"
        },
        "drainage-after-backfilling": {
          "title": "Land after drainage",
          "alt": "Land after drainage work and preparation for construction"
        }
      }
    }
  },
  "th": {
    "drainage": {
      "schema": {
        "name": "งานระบบระบายน้ำบนเกาะสมุย",
        "serviceTypes": {
          "drainage": "ระบบระบายน้ำ",
          "trenches": "ขุดร่องระบายน้ำ",
          "pipes": "วางท่อระบายน้ำ",
          "runoff": "ทางน้ำไหล",
          "slopeCorrection": "ปรับสโลปน้ำ"
        }
      },
      "seo": {
        "title": "งานระบายน้ำบนเกาะสมุย — ขุดร่องและวางท่อ",
        "description": "งานระบายน้ำบนเกาะสมุย ขุดคูและร่อง วางท่อ ปรับความลาดเอียง ประเมินหน้างานและตกลงขอบเขต ราคา และเงื่อนไขก่อนเริ่ม",
        "keywords": "ระบายน้ำ สมุย, แก้น้ำขัง สมุย, ขุดร่องระบายน้ำ สมุย, ขุดคูระบายน้ำ สมุย, วางท่อระบายน้ำ สมุย"
      },
      "hero": {
        "title": "งานระบายน้ำบนเกาะสมุย",
        "description": "จัดทางระบายน้ำฝนในที่ดิน ริมถนน และบริเวณทางเข้า ขุดคูและร่อง วางท่อ และปรับความลาดเอียงตามแนวที่วางไว้"
      },
      "intro": "เราประเมินว่าน้ำมาจากไหน ขังอยู่จุดใด และระบายออกทางไหนได้ บนเกาะสมุยน้ำส่วนใหญ่มากับฤดูฝนช่วงตุลาคมถึงธันวาคม จึงกำหนดแนวและความลาดเอียงให้รับฝนหนักได้ พร้อมตกลงขอบเขต วัสดุ ราคา และเงื่อนไขก่อนเริ่มงาน",
      "tasks": {
        "title": "งานระบายน้ำที่เรารับทำ",
        "t1": {
          "title": "ระบายน้ำจากจุดต่ำ",
          "description": "เปิดทางให้น้ำออกจากจุดต่ำที่ขังหลังฝนตก ด้วยคู ท่อ หรือการปรับความลาดเอียงไปยังจุดระบายเดิม แนะนำวิธีหน้างานหลังตรวจดูพื้นที่"
        },
        "t2": {
          "title": "ขุดคูและร่องระบายน้ำ",
          "description": "ขุดคูเปิดด้วยรถขุดเล็กในที่ทางเข้าแคบ และใช้รถขุดขนาดใหญ่ในพื้นที่กว้าง คุมความลึกและความลาดเอียงตามระดับที่กำหนด"
        },
        "t3": {
          "title": "วางท่อใต้ถนนและทางเข้า",
          "description": "วางท่อระบายน้ำตรงจุดที่คูตัดผ่านทางเข้า กลบร่องและคืนสภาพผิวทาง"
        },
        "t4": {
          "title": "ปรับความลาดเอียงเพื่อระบายน้ำ",
          "description": "ตัดหรือถมดินเฉพาะจุดให้น้ำผิวดินไหลไปยังคู ไม่ขังอยู่ข้างบ้านหรือทางเข้า"
        },
        "t5": {
          "title": "วางแผนระบายน้ำก่อนถมดิน",
          "description": "ในที่ดินน้ำท่วมขัง เปิดคูให้น้ำออกก่อน แล้วจึงนำดินเข้าถม เช่นงานที่ดินแฉะที่แม่น้ำ: คูระบายน้ำ ท่อลอดถนน แล้วจึงถมดิน"
        },
        "t6": {
          "title": "ระบายน้ำในไซต์ก่อสร้าง",
          "description": "คูและท่อชั่วคราวระหว่างก่อสร้าง เพื่อให้พื้นที่ทำงานและทางเข้าไม่เป็นโคลนเมื่อฝนตก และรถของผู้รับเหมาเข้าได้"
        }
      },
      "included": {
        "title": "สิ่งที่คำนึงถึงในการทำทางระบายน้ำ",
        "rain": {
          "title": "ฤดูฝนบนเกาะสมุย",
          "description": "ช่วงตุลาคมถึงธันวาคมฝนตกต่อเนื่องหลายวัน ที่ดินต่ำหรือดินเหนียวอาจมีน้ำขังเป็นสัปดาห์ เราดูทั้งจุดน้ำขังและจุดที่น้ำไหลเข้าพื้นที่"
        },
        "foundation": {
          "title": "อาคารและทางเข้า",
          "description": "คำนึงถึงตำแหน่งบ้าน ทางเข้า และพื้นที่ทำงานในการเลือกแนวระบายน้ำ"
        },
        "levels": {
          "title": "ระดับปัจจุบันและระดับที่วางแผนไว้",
          "description": "กำหนดคูและท่อให้สอดคล้องกับภูมิประเทศและแผนถมดิน"
        }
      },
      "seoBlock": {
        "title": "น้ำมาจากไหน และระบายไปทางใดได้",
        "p1": "การประเมินงานระบายน้ำต้องดูเส้นทางทั้งหมด ตั้งแต่จุดที่น้ำเข้าพื้นที่จนถึงจุดระบายออก นอกจากบริเวณน้ำขัง เราจึงดูระดับพื้นที่ใกล้เคียง คู ท่อ และทางเข้าที่มีอยู่ด้วย",
        "p2": "วิธีทำอาจเป็นคูเปิด ท่อบางช่วง การปรับความลาดเอียง หรือใช้หลายวิธีร่วมกันตามสภาพหน้างาน หากมีผังระบายน้ำแล้ว สามารถใช้พูดคุยขอบเขตและคำนวณราคาได้",
        "p3": "เรากำหนดจุดระบายน้ำออกก่อนเริ่มขุด โดยคำนึงถึงที่ดินข้างเคียงและทางระบายน้ำเดิม หากยังไม่มีจุดระบายที่เหมาะสม จะพูดคุยข้อจำกัดและทางเลือกก่อน"
      },
      "process": {
        "title": "ขั้นตอนการทำงานระบายน้ำ",
        "p1": {
          "title": "ตรวจดูหน้างาน",
          "description": "ดูจุดน้ำขัง ระดับพื้นที่ จุดที่อาจระบายน้ำออกได้ และทางเข้าเครื่องจักร"
        },
        "p2": {
          "title": "ตกลงวิธีทำและราคา",
          "description": "กำหนดแนว งานและวัสดุที่จำเป็น พร้อมระบุราคาและเงื่อนไขก่อนเริ่ม"
        },
        "p3": {
          "title": "ขุดและวางท่อ",
          "description": "ทำคู ขุดร่อง และวางท่อตามแนวที่วางไว้ หากมีงานเพิ่มเติมจะพูดคุยล่วงหน้า"
        },
        "p4": {
          "title": "ตรวจสอบงานที่ทำเสร็จ",
          "description": "ตรวจแนวและระดับเทียบกับแผน ตรวจทางออกของท่อและคู พร้อมพูดคุยเรื่องช่องทางเข้าทำความสะอาดในอนาคต"
        }
      },
      "pricing": {
        "title": "ราคางานระบายน้ำ",
        "text": "ราคาขึ้นอยู่กับความยาวและความลึกร่อง สภาพดิน ทางเข้า และคุณสมบัติท่อ ใบประเมินระบุว่างาน วัสดุ การส่งและขนออกส่วนใดรวมอยู่ในราคา ราคาเครื่องจักรดูได้ในหน้าเครื่องจักรแต่ละคัน"
      },
      "cta": {
        "title": "มีน้ำขังหลังฝนตกใช่ไหม?",
        "text": "ส่งโลเคชัน รูปหรือวิดีโอจุดน้ำขังและทางเข้า พร้อมบอกว่าน้ำมาเมื่อไหร่และขังนานเท่าใด หากมีคูหรือท่อเดิม ถ่ายให้ดูด้วย"
      },
      "related": {
        "title": "บริการที่สั่งทำร่วมกันได้",
        "earthworks": {
          "title": "งานดิน",
          "description": "ดูบริการขุดบ่อ ขุดร่อง ถมดิน และงานดินประเภทอื่นในหน้าเดียว"
        },
        "leveling": {
          "title": "ปรับระดับที่ดิน",
          "description": "ปรับพื้นที่ ตัดดินและถมดินตามระดับและความลาดเอียงที่กำหนด"
        },
        "truck": {
          "title": "รถดั๊มพ์และส่งวัสดุ",
          "description": "ส่งทราย หิน และดิน พร้อมขนวัสดุที่ขุดจากร่องออกจากพื้นที่"
        }
      },
      "faq": {
        "title": "คำถามเกี่ยวกับงานระบายน้ำ",
        "q1": {
          "question": "แก้น้ำขังได้ทั้งหมดไหม?",
          "answer": "เราไม่รับปากว่าที่ดินจะแห้งทุกครั้งที่ฝนตกหนัก ผลขึ้นอยู่กับระดับพื้นที่ ดิน แหล่งน้ำ และจุดระบายออก หลังดูหน้างานเราจะอธิบายว่างานที่เสนอช่วยแก้ส่วนใดและยังมีข้อจำกัดอะไร"
        },
        "q2": {
          "question": "งานระบายน้ำใช้เวลานานแค่ไหน?",
          "answer": "คูเลียบที่ดินและท่อลอดทางเข้าโดยทั่วไปใช้เวลาหนึ่งถึงสองวัน ที่ดินน้ำขังที่ต้องทำคู ท่อลอดถนน และถมดินใช้เวลานานกว่ามาก เราแจ้งระยะเวลาหลังดูหน้างาน"
        },
        "q3": {
          "question": "วางท่อใต้ทางเข้าได้ไหม?",
          "answer": "ได้ เราขุดร่องและวางท่อระบายน้ำใต้ทางเข้าหรือทางสัญจรได้ โดยกำหนดคุณสมบัติท่อ ความลึก การกลบ และข้อกำหนดสำหรับรถที่ผ่านก่อนเริ่มงาน"
        },
        "q4": {
          "question": "ควรทำระบายน้ำก่อนหรือหลังปรับระดับที่ดิน?",
          "answer": "ควรวางแผนร่วมกัน เพราะระดับในอนาคตมีผลต่อแนวและจุดระบายน้ำ ลำดับงานขึ้นอยู่กับพื้นที่และโครงการ โดยจะกำหนดก่อนเริ่มขุดและถมดิน"
        },
        "q5": {
          "question": "ราคานี้รวมท่อ หิน และค่าส่งไหม?",
          "answer": "เราระบุรายการที่รวมไว้ในใบประเมิน วัสดุขึ้นอยู่กับวิธีทำที่เลือก สามารถจัดส่งให้ได้ โดยชี้แจงค่าวัสดุ ขนส่ง งานติดตั้ง และขนดินส่วนเกินออกล่วงหน้า"
        },
        "q6": {
          "question": "พื้นที่แคบทำได้ไหม?",
          "answer": "เราจะดูความกว้างทางเข้าและทางผ่าน พื้นที่ทำงาน และจุดวางดินที่ขุดขึ้นมา เพื่อเลือกเครื่องจักรและประเมินว่าทำงานได้หรือไม่ ส่งรูปพร้อมขนาดโดยประมาณมาได้"
        }
      },
      "photos": {
        "title": "ตัวอย่างงานระบายน้ำ",
        "preparing-the-access-road": {
          "title": "ทำทางเข้า",
          "alt": "เตรียมถนนเข้าไซต์"
        },
        "pipe-under-access-road": {
          "title": "วางท่อใต้ถนน",
          "alt": "วางท่อระบายน้ำใต้ถนนทางเข้า"
        },
        "water-runoff-channel": {
          "title": "คูน้ำไหล",
          "alt": "คูระบายน้ำเพื่อพาน้ำออกจากพื้นที่"
        },
        "drainage-trench-excavation": {
          "title": "ขุดร่องระบายน้ำ",
          "alt": "รถขุดกำลังขุดร่องระบายน้ำบนเกาะสมุย"
        },
        "wet-land-drainage": {
          "title": "ระบายน้ำพื้นที่เปียก",
          "alt": "เตรียมพื้นที่เปียกด้วยระบบระบายน้ำก่อนงานดิน"
        },
        "drainage-after-backfilling": {
          "title": "พื้นที่หลังทำระบายน้ำ",
          "alt": "พื้นที่หลังทำระบบระบายน้ำและเตรียมก่อสร้าง"
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
      imageSrc="/images/services/drainage/hero.webp"
      page="services/drainage"
    />

    <ServiceIntro :text="t('drainage.intro')" />

    <ServiceIncluded
      :title="t('drainage.tasks.title')"
      :items="tasksItems"
    />

    <ServiceIncluded
      :title="t('drainage.included.title')"
      tone="muted"
      :items="includedItems"
    />

    <CoreContacts
      compact
      page="services/drainage"
      location="content"
      :name="t('drainage.seo.title')"
    />

    <ServiceProjects service="drainage" />

    <ServiceGallery
      :title="t('drainage.photos.title')"
      :items="photos"
    />

    <ServiceIncluded
      :title="t('drainage.process.title')"
      :items="processItems"
    />

    <UAlert
      :title="t('drainage.pricing.title')"
      :description="t('drainage.pricing.text')"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-calculator"
    />

    <UAlert
      :title="t('drainage.cta.title')"
      :description="t('drainage.cta.text')"
      class="mt-6 mb-10 sm:mb-14"
      variant="soft"
      color="primary"
      icon="i-lucide-camera"
    />

    <ServiceRelated
      :title="t('drainage.related.title')"
      :items="relatedServices"
    />

    <ServiceSeoBlock
      :title="seoBlock.title"
      :paragraphs="seoBlock.paragraphs"
    />

    <CoreFAQ
      :title="t('drainage.faq.title')"
      :items="faqItems"
    />

    <CoreContacts
      page="services/drainage"
      location="bottom"
      :name="t('drainage.seo.title')"
    />

    <CoreFloatingContact
      page="services/drainage"
      :name="t('drainage.seo.title')"
    />
  </UPage>
</template>
