<script setup lang="ts">
const { t } = useI18n();

const heroTitle = computed(() => t('earthworks.hero.title'));
const heroDescription = computed(() => t('earthworks.hero.description'));

const tasksTitle = computed(() => t('earthworks.tasks.title'));
const tasksItems = computed(() => [
  {
    icon: 'i-lucide-shovel',
    title: t('earthworks.tasks.t1.title'),
    description: t('earthworks.tasks.t1.description'),
  },
  {
    icon: 'i-lucide-ruler',
    title: t('earthworks.tasks.t2.title'),
    description: t('earthworks.tasks.t2.description'),
  },
  {
    icon: 'i-lucide-layers',
    title: t('earthworks.tasks.t3.title'),
    description: t('earthworks.tasks.t3.description'),
  },
  {
    icon: 'i-lucide-hard-hat',
    title: t('earthworks.tasks.t4.title'),
    description: t('earthworks.tasks.t4.description'),
  },
  {
    icon: 'i-lucide-droplets',
    title: t('earthworks.tasks.t5.title'),
    description: t('earthworks.tasks.t5.description'),
  },
  {
    icon: 'i-lucide-truck',
    title: t('earthworks.tasks.t6.title'),
    description: t('earthworks.tasks.t6.description'),
  },
]);

const equipmentTitle = computed(() => t('earthworks.equipment.title'));
const equipmentNote = computed(() => t('earthworks.equipment.note'));
const equipmentItems = computed(() => ([
  {
    title: 'Komatsu PC30-7',
    image: '/images/equipment/excavators/komatsu-pc30-7.webp',
    subtitle: t('earthworks.equipment.items.pc30.type'),
    description: t('earthworks.equipment.items.pc30.description'),
  },
  {
    title: 'Caterpillar 305CR',
    image: '/images/equipment/excavators/cat-305cr.webp',
    subtitle: t('earthworks.equipment.items.cat305.type'),
    description: t('earthworks.equipment.items.cat305.description'),
  },
  {
    title: 'Komatsu PC128US',
    image: '/images/equipment/excavators/komatsu-pc128us.webp',
    subtitle: t('earthworks.equipment.items.pc128.type'),
    description: t('earthworks.equipment.items.pc128.description'),
  },
]));

const trucksTitle = computed(() => t('earthworks.trucks.title'));
const trucksNote = computed(() => t('earthworks.trucks.note'));
const trucksItems = computed(() => ([
  {
    title: 'Hino 300',
    image: '/images/equipment/trucks/hino_300.webp',
    subtitle: t('earthworks.trucks.items.hino300.type'),
    description: t('earthworks.trucks.items.hino300.description'),
  },
  {
    title: 'Hino Super FM18',
    image: '/images/equipment/trucks/hino_super_fm18.webp',
    subtitle: t('earthworks.trucks.items.fm18.type'),
    description: t('earthworks.trucks.items.fm18.description'),
  },
  {
    title: 'Isuzu ELF',
    image: '/images/equipment/trucks/isuzu_elf.webp',
    subtitle: t('earthworks.trucks.items.elf.type'),
    description: t('earthworks.trucks.items.elf.description'),
  },
]));

const pricingTitle = computed(() => t('earthworks.pricing.title'));
const pricingText = computed(() => t('earthworks.pricing.text'));

const includedTitle = computed(() => t('earthworks.included.title'));
const includedItems = computed(() => [
  {
    icon: 'i-heroicons-user',
    title: t('earthworks.included.operator.title'),
    description: t('earthworks.included.operator.description'),
  },
  {
    icon: 'i-heroicons-calculator',
    title: t('earthworks.included.estimate.title'),
    description: t('earthworks.included.estimate.description'),
  },
  {
    icon: 'i-heroicons-currency-dollar',
    title: t('earthworks.included.fixed.title'),
    description: t('earthworks.included.fixed.description'),
  },
  {
    icon: 'i-heroicons-truck',
    title: t('earthworks.included.logistics.title'),
    description: t('earthworks.included.logistics.description'),
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

const faqTitle = computed(() => t('earthworks.faq.title'));
const faqItems = computed(() => [
  { question: t('earthworks.faq.q1.question'), answer: t('earthworks.faq.q1.answer') },
  { question: t('earthworks.faq.q2.question'), answer: t('earthworks.faq.q2.answer') },
  { question: t('earthworks.faq.q3.question'), answer: t('earthworks.faq.q3.answer') },
  { question: t('earthworks.faq.q4.question'), answer: t('earthworks.faq.q4.answer') },
  { question: t('earthworks.faq.q5.question'), answer: t('earthworks.faq.q5.answer') },
  { question: t('earthworks.faq.q6.question'), answer: t('earthworks.faq.q6.answer') },
]);

const examples = computed(() => ([
  { alt: t('earthworks.examples.1'), src: '/images/examples/earthworks/1.webp' },
  { alt: t('earthworks.examples.2'), src: '/images/examples/earthworks/2.webp' },
  { alt: t('earthworks.examples.3'), src: '/images/examples/earthworks/3.webp' },
  { alt: t('earthworks.examples.4'), src: '/images/examples/earthworks/4.webp' },
  { alt: t('earthworks.examples.5'), src: '/images/examples/earthworks/5.webp' },
  { alt: t('earthworks.examples.6'), src: '/images/examples/earthworks/6.webp' },
  { alt: t('earthworks.examples.7'), src: '/images/examples/earthworks/7.webp' },
  { alt: t('earthworks.examples.8'), src: '/images/examples/earthworks/8.webp' },
]));

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': 'https://supermansamui.com/services/earthworks#service',
      name: t('earthworks.seo.title'),
      description: t('earthworks.seo.description'),
      provider: { '@id': 'https://supermansamui.com#business' },
      areaServed: {
        '@type': 'AdministrativeArea',
        name: 'Ko Samui, Surat Thani, Thailand',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: t('earthworks.tasks.title'),
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
  const title = t('earthworks.seo.title');
  const description = t('earthworks.seo.description');
  const keywords = t('earthworks.seo.keywords');

  return {
    title,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },

      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: 'https://supermansamui.com/land.webp' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: 'https://supermansamui.com/land.webp' },
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
    "earthworks": {
      "seo": {
        "title": "Земляные работы на Самуи | Планировка участка, выравнивание, отсыпка, вывоз грунта",
        "description": "Земляные работы на Самуи под ключ: расчистка участка, выравнивание и планировка, отсыпка/подсыпка, дренаж, подготовка основания под дом и дорогу, вывоз грунта и мусора. Своя техника (экскаваторы + самосвалы), местные операторы, понятный расчет по объёму или смене.",
        "keywords": "земляные работы самуи, планировка участка самуи, выравнивание участка самуи, подготовка участка самуи, отсыпка участка самуи, подсыпка грунта самуи, вывоз грунта самуи, вывоз строительного мусора самуи, расчистка участка самуи, дренаж самуи, подготовка основания самуи, дорога на участок самуи, backfill samui, land grading samui"
      },
      "hero": {
        "title": "Земляные работы на Самуи под ключ",
        "description": "Расчистка, выравнивание, планировка и отсыпка участка. Экскаватор + самосвалы + материалы - одной командой и с понятным расчётом до старта."
      },
      "intro": "Если нужно подготовить участок к строительству или благоустройству - сделаем весь цикл земляных работ на Самуи. Расчищаем территорию, снимаем и вывозим лишний грунт, завозим землю/песок/щебень, формируем уровни и уклоны под дренаж и подъезд, готовим основание под фундамент, парковку или дорогу. Вы присылаете локацию и фото - мы оцениваем объём, подбираем технику и даём понятный расчёт до начала работ.",
      "tasks": {
        "title": "Какие земляные работы мы делаем",
        "t1": {
          "title": "Расчистка участка",
          "description": "Убираем кусты, мусор, камни, снимаем рыхлый слой и готовим площадку под дальнейшие работы."
        },
        "t2": {
          "title": "Планировка и выравнивание",
          "description": "Делаем ровную площадку, формируем уровни, уклоны и террасы под дом, сад или парковку."
        },
        "t3": {
          "title": "Отсыпка / подсыпка грунта",
          "description": "Завозим грунт, песок, щебень и распределяем по участку: поднять уровень, укрепить основание, выровнять перепады."
        },
        "t4": {
          "title": "Подготовка основания под строительство",
          "description": "Готовим основание под фундамент, плиту, дорожное полотно, въезд на участок и площадки под технику."
        },
        "t5": {
          "title": "Дренаж и водоотвод",
          "description": "Формируем уклоны, канавы и траншеи, чтобы вода уходила правильно и не размывала участок."
        },
        "t6": {
          "title": "Вывоз грунта и строительного мусора",
          "description": "Загружаем и вывозим лишнюю землю, глину, камни и строительные отходы самосвалами."
        }
      },
      "equipment": {
        "title": "Экскаваторы для земляных работ",
        "note": "Не уверены, что нужно? Пришлите фото и точку на карте - подберём технику и оценим объём.",
        "items": {
          "pc30": {
            "type": "Мини-экскаватор 3 т",
            "description": "Для узких подъездов и работ у дома: траншеи, небольшая планировка, локальная расчистка."
          },
          "cat305": {
            "type": "Экскаватор 5,5 т",
            "description": "Универсальный вариант для большинства задач: планировка, котлованы, погрузка грунта, подготовка основания."
          },
          "pc128": {
            "type": "Экскаватор 12,8 т",
            "description": "Для больших объёмов: серьёзная планировка, подготовка площадок, дорожные работы и крупные перемещения грунта."
          }
        }
      },
      "trucks": {
        "title": "Самосвалы для вывоза и завоза грунта",
        "note": "Для земляных работ используем свои самосвалы - быстрее по срокам и проще по организации. Пришлите локацию и фото подъезда - подскажем оптимальный вариант.",
        "items": {
          "hino300": {
            "type": "6-колёсный самосвал",
            "description": "Основной вариант для земляных работ: вывоз грунта, глины, камней и доставка песка/щебня. Отлично работает в связке с экскаватором."
          },
          "fm18": {
            "type": "10-колёсный самосвал",
            "description": "Для больших объёмов: меньше рейсов и быстрее закрываем объект. Оптимально для отсыпки, планировки и вывоза грунта с больших участков."
          },
          "elf": {
            "type": "Компактный самосвал / 4×2",
            "description": "Для узких подъездов и небольших объёмов: точечная доставка материалов и вывоз там, где большой самосвал не проходит."
          }
        }
      },
      "pricing": {
        "title": "Почему нет фиксированных цен на сайте",
        "text": "Стоимость земляных работ зависит от рельефа участка, подъездов, объёма грунта, необходимости вывоза/завоза и логистики по острову. Поэтому мы считаем по вашей задаче и фиксируем стоимость до начала работ - без сюрпризов в процессе. Чтобы быстро получить расчёт: отправьте точку на карте + 3–5 фото участка и подъезда."
      },
      "included": {
        "title": "Как мы работаем",
        "operator": {
          "title": "Местные операторы и водители",
          "description": "Знают рельеф Самуи, подъезды и типичные проблемы с грунтом и водой."
        },
        "estimate": {
          "title": "Расчёт объёма и плана работ",
          "description": "Помогаем понять: сколько завозить/вывозить, какие уровни и уклоны делать, сколько смен нужно."
        },
        "fixed": {
          "title": "Понятный расчёт до старта",
          "description": "Согласуем формат: по смене, по объёму или пакет «под ключ» - и фиксируем стоимость до начала работ."
        },
        "logistics": {
          "title": "Логистика и темп",
          "description": "Синхронизируем экскаватор и самосвалы, чтобы не было простоев и работа шла быстро."
        },
        "report": {
          "title": "Фото/видео-обновления",
          "description": "Если вас нет на объекте - присылаем прогресс и ключевые этапы."
        },
        "safety": {
          "title": "Аккуратно и безопасно",
          "description": "Работаем рядом с домами, заборами и коммуникациями, соблюдаем безопасность на участке."
        }
      },
      "faq": {
        "title": "Частые вопросы про земляные работы на Самуи",
        "q1": {
          "question": "Вы делаете земляные работы «под ключ»?",
          "answer": "Да. Можем взять весь цикл: расчистка, выравнивание, отсыпка, доставка материалов, вывоз грунта и мусора."
        },
        "q2": {
          "question": "Как вы считаете стоимость?",
          "answer": "По задаче: по сменам, по объёму (сколько завозим/вывозим) или фикс-пакет. Перед стартом даём понятный расчёт и фиксируем стоимость."
        },
        "q3": {
          "question": "Что нужно, чтобы быстро получить расчёт?",
          "answer": "Точка на карте + 3–5 фото участка и подъезда + коротко: что хотите сделать и сроки."
        },
        "q4": {
          "question": "Вы работаете в горах и на узких дорогах?",
          "answer": "Да. Подбираем технику под реальный подъезд и условия участка."
        },
        "q5": {
          "question": "Можно ли сделать правильные уклоны под воду/дренаж?",
          "answer": "Да. Мы планируем уровни и уклоны, чтобы вода уходила от дома и не размывала участок."
        },
        "q6": {
          "question": "Вы можете завезти грунт, песок, щебень?",
          "answer": "Да. Организуем доставку материалов и распределение по участку самосвалами и экскаватором."
        }
      },
      "examples": {
        "title": "Галерея",
        "1": "Земляные работы: копка котлована и фундамента для дома на Самуи",
        "2": "Планировка и выравнивание участка перед строительством виллы (подготовка площадки)",
        "3": "Погрузка и вывоз строительного мусора самосвалом с участка",
        "4": "Подготовка основания под подъездную дорогу: щебень, подсыпка и выравнивание",
        "5": "Отсыпка участка и поднятие уровня грунтом: подсыпка, распределение и планировка",
        "6": "Расчистка участка: уборка мусора, камней и подготовка территории под строительство",
        "7": "Загрузка и вывоз грунта самосвалом после земляных работ и планировки",
        "8": "Устройство подъездной дороги на участок: основание, уклоны и водоотвод"
      }
    }
  },
  "en": {
    "earthworks": {
      "seo": {
        "title": "Earthworks on Koh Samui | Land clearing, grading, backfilling & soil removal",
        "description": "Earthworks on Koh Samui: land clearing, grading and leveling, backfilling, drainage shaping, site preparation for houses and roads, soil & construction waste removal. Own excavators and dump trucks, local crew, clear quotes by scope or per day.",
        "keywords": "earthworks koh samui, land grading koh samui, land leveling samui, site preparation koh samui, backfilling koh samui, soil delivery samui, soil removal koh samui, construction waste removal samui, land clearing koh samui, drainage samui, road base samui"
      },
      "hero": {
        "title": "Earthworks on Koh Samui",
        "description": "Clearing, grading, leveling and backfilling. Excavator + dump trucks + materials with one team and a clear quote upfront."
      },
      "intro": "Need to prepare land for construction or landscaping? We handle full-scope earthworks on Koh Samui: clearing, cutting and filling, soil removal and delivery, grading levels and slopes for drainage, and preparing bases for foundations, roads and parking areas. Send your location and photos - we estimate the scope, select the right equipment and provide a clear quote before we start.",
      "tasks": {
        "title": "What we do",
        "t1": { "title": "Land clearing", "description": "We remove vegetation, debris, rocks and prepare the site for the next stage." },
        "t2": { "title": "Grading & leveling", "description": "We create flat pads and shape levels, terraces and slopes." },
        "t3": { "title": "Backfilling & raising ground", "description": "We deliver soil/sand/gravel and spread it to raise levels and strengthen the base." },
        "t4": { "title": "Site base preparation", "description": "Ground preparation for foundations, slabs, driveways and equipment pads." },
        "t5": { "title": "Drainage shaping", "description": "We form slopes, ditches and trenches so water flows away correctly." },
        "t6": { "title": "Soil & waste removal", "description": "We load and remove excess soil, clay, rocks and construction waste." }
      },
      "equipment": {
        "title": "Excavators for earthworks",
        "note": "Not sure what you need? Send photos and a location pin - we’ll advise and estimate.",
        "items": {
          "pc30": { "type": "Mini excavator 3 t", "description": "For tight access, residential trenches and light grading." },
          "cat305": { "type": "Excavator 5.5 t", "description": "Most versatile for grading, loading, site prep and general earthworks." },
          "pc128": { "type": "Excavator 12.8 t", "description": "For large volumes: heavy grading, road works and major cuts/fills." }
        }
      },
      "trucks": {
        "title": "Dump trucks for soil delivery & removal",
        "note": "We use our own dump trucks - faster scheduling and clearer logistics. Send a location pin and access photos and we’ll recommend the right truck.",
        "items": {
          "hino300": { "type": "6-wheel dump truck", "description": "Main workhorse for earthworks: soil/clay/rock removal and sand/gravel delivery. Perfect combo with an excavor." },
          "fm18": { "type": "10-wheel dump truck", "description": "Best for large volumes: fewer trips and faster completion. Ideal for grading, backfilling and big soil removal." },
          "elf": { "type": "Compact dump truck / 4×2", "description": "For tight access and smaller volumes where larger trucks can’t reach." }
        }
      },
      "pricing": {
        "title": "Why we don’t list fixed prices",
        "text": "Earthworks pricing depends on terrain, access, volume, haul distance and whether materials need to be delivered/removed. We estimate your specific job and confirm the total cost before we start. To get a fast quote: send a location pin + 3–5 photos of the site and access road."
      },
      "included": {
        "title": "How we work",
        "operator": { "title": "Local crew", "description": "Experienced operators who know Samui terrain and access realities." },
        "estimate": { "title": "Scope & workflow planning", "description": "We help estimate volumes, levels, slopes and timeline." },
        "fixed": { "title": "Clear quote before start", "description": "Per day / by scope / turnkey package - we confirm the total cost before starting." },
        "logistics": { "title": "Smart logistics", "description": "We synchronize excavator and trucks to avoid downtime." },
        "report": { "title": "Photo/video updates", "description": "Progress updates if you’re not on site." },
        "safety": { "title": "Safe & careful work", "description": "We work carefully around buildings, fences and utilities." }
      },
      "faq": {
        "title": "Earthworks FAQ",
        "q1": { "question": "Do you do turnkey earthworks?", "answer": "Yes - clearing, grading, backfilling, materials delivery and soil/waste removal." },
        "q2": { "question": "How do you price the job?", "answer": "By scope/volume, per day, or as a fixed turnkey package. We confirm the total cost before start." },
        "q3": { "question": "What do you need to quote fast?", "answer": "Location pin + 3–5 photos of access and the site + a short description and deadline." },
        "q4": { "question": "Can you work on hills and narrow roads?", "answer": "Yes. We choose equipment based on real access conditions." },
        "q5": { "question": "Can you shape drainage slopes?", "answer": "Yes. We plan levels and slopes so water drains properly away from structures." },
        "q6": { "question": "Can you deliver soil/sand/gravel?", "answer": "Yes. We deliver and spread materials with dump trucks and excavator." }
      },
      "examples": {
        "title": "Gallery",
        "1": "Earthworks: digging a foundation pit for a house on Koh Samui",
        "2": "Land grading and leveling before villa construction (site preparation)",
        "3": "Loading and removing construction waste with a dump truck",
        "4": "Access road base preparation: gravel backfill, compaction and leveling",
        "5": "Backfilling and raising ground level with soil: spreading and grading",
        "6": "Site clearing: debris and rock removal, preparing land for construction",
        "7": "Loading and hauling soil with a dump truck after excavation and grading",
        "8": "Building an access road to the site: base layers, slopes and drainage"
      }
    }
  },
  "th": {
    "earthworks": {
      "seo": {
        "title": "งานดินบนเกาะสมุย | เคลียร์พื้นที่ ปรับระดับ ถมดิน ขนดินออก–เอาดินเข้า",
        "description": "งานดินบนเกาะสมุยแบบครบวงจร: เคลียร์พื้นที่ ปรับระดับ ถมดิน ทำทางเข้า วางแนวระบายน้ำ ขนดินและเศษวัสดุก่อสร้างออก–เอาดิน/ทราย/หินเข้า มีรถขุดและรถดั๊มของเราเอง ทีมงานท้องถิ่น ราคาเคลียร์ก่อนเริ่มงาน",
        "keywords": "งานดิน สมุย, ปรับระดับ สมุย, เคลียร์พื้นที่ สมุย, ถมดิน สมุย, ขนดิน สมุย, ส่งดิน สมุย, รถขุด งานดิน สมุย, รถดั๊ม สมุย, ทำทางเข้า สมุย, ระบายน้ำ สมุย, เตรียมพื้นที่ก่อสร้าง สมุย"
      },
      "hero": {
        "title": "รับงานดินบนเกาะสมุย แบบจบงานในทีมเดียว",
        "description": "เคลียร์พื้นที่ ปรับระดับ ถมดิน ทำทางเข้า และขนดิน - รถขุด + รถดั๊ม + วัสดุ พร้อมประเมินราคาให้ชัดเจนก่อนเริ่ม"
      },
      "intro": "ถ้าต้องการเตรียมพื้นที่ก่อนสร้างบ้านหรือจัดสวน เรารับเหมางานดินบนเกาะสมุยครบวงจร: เคลียร์พื้นที่ ขนดินออก–เอาดินเข้า ปรับระดับ ทำความลาดเอียงสำหรับระบายน้ำ และเตรียมฐานราก/ทางเข้า/ลานจอดรถ ส่งโลเคชันและรูปพื้นที่มาให้เรา แล้วเราช่วยประเมินปริมาณงาน เลือกรถให้เหมาะ และแจ้งราคาชัดเจนก่อนเริ่มงาน",
      "tasks": {
        "title": "งานที่เราทำได้",
        "t1": { "title": "เคลียร์พื้นที่", "description": "เก็บเศษวัสดุ กำจัดพืชรก หิน และเตรียมหน้าดินก่อนทำงาน" },
        "t2": { "title": "ปรับระดับและเกลี่ยพื้นที่", "description": "ทำพื้นให้เรียบ จัดระดับ ทำขั้น/เทอเรซ และความลาดเอียงตามต้องการ" },
        "t3": { "title": "ถมดิน / ยกระดับพื้นที่", "description": "นำดิน ทราย หินเข้า และเกลี่ยกระจายเพื่อยกระดับและเสริมฐาน" },
        "t4": { "title": "เตรียมฐานสำหรับก่อสร้าง", "description": "เตรียมพื้นสำหรับฐานราก ทางเข้ารถ ลานจอด และพื้นที่วางเครื่องจักร" },
        "t5": { "title": "ทำแนวระบายน้ำ", "description": "จัดความลาด ทำร่อง/คู/แนวทางน้ำ ลดปัญหาน้ำขังและดินไหล" },
        "t6": { "title": "ขนดินและขยะก่อสร้าง", "description": "โหลดดินส่วนเกิน เศษหิน และขยะก่อสร้างขึ้นรถดั๊มและขนออก" }
      },
      "equipment": {
        "title": "รถขุดสำหรับงานดิน",
        "note": "ไม่แน่ใจว่าต้องใช้รถขนาดไหน? ส่งรูปและโลเคชันมา เราช่วยแนะนำและประเมินได้",
        "items": {
          "pc30": { "type": "รถขุดเล็ก 3 ตัน", "description": "เหมาะกับพื้นที่แคบ งานรอบบ้าน และงานเกลี่ย/ขุดเล็ก ๆ" },
          "cat305": { "type": "รถขุดกลาง 5.5 ตัน", "description": "อเนกประสงค์ เหมาะกับงานดินส่วนใหญ่: ปรับระดับ โหลดดิน เตรียมพื้นที่" },
          "pc128": { "type": "รถขุดใหญ่ 12.8 ตัน", "description": "สำหรับงานปริมาณมาก งานถนน และการปรับพื้นที่ขนาดใหญ่" }
        }
      },
      "trucks": {
        "title": "รถดั๊มสำหรับขนดินเข้า–ออก",
        "note": "เราใช้รถดั๊มของเราเอง ทำงานไว คิวชัด ส่งโลเคชันและรูปทางเข้า เราช่วยแนะนำขนาดรถให้",
        "items": {
          "hino300": { "type": "รถดั๊ม 6 ล้อ", "description": "ตัวหลักสำหรับงานดิน: ขนดิน/หิน/ดินเหนียวออก และส่งทราย/หินเข้า ทำงานคู่กับรถขุดได้ดี" },
          "fm18": { "type": "รถดั๊ม 10 ล้อ", "description": "เหมาะกับงานปริมาณมาก เที่ยวน้อยลง จบงานไว เหมาะกับถมดิน ปรับพื้นที่ และขนดินออกจำนวนมาก" },
          "elf": { "type": "รถดั๊มเล็ก / 4×2", "description": "เหมาะกับทางแคบและงานปริมาณไม่มาก รถใหญ่เข้าไม่ถึงก็ยังทำได้" }
        }
      },
      "pricing": {
        "title": "ทำไมเราไม่ลงราคาตายตัวบนเว็บ",
        "text": "ราคางานดินขึ้นอยู่กับความชันของพื้นที่ ทางเข้าหน้างาน ปริมาณดิน ระยะทางขนดิน และต้องขนเข้า–ออกมากน้อยแค่ไหน เราประเมินตามหน้างานของคุณและยืนยันราคารวมก่อนเริ่มงาน เพื่อไม่ให้งบบานปลาย ขอราคเร็ว: ส่งโลเคชัน + รูปพื้นที่และทางเข้า 3–5 รูป"
      },
      "included": {
        "title": "สิ่งที่คุณจะได้",
        "operator": { "title": "ทีมงานท้องถิ่น", "description": "รู้พื้นที่ ทางเขา และสภาพดินบนสมุย" },
        "estimate": { "title": "ประเมินงานและวางแผน", "description": "ช่วยคำนวณดินเข้า–ออก ระดับ และจำนวนวันทำงาน" },
        "fixed": { "title": "ยืนยันราคารวมก่อนเริ่ม", "description": "คิดรายวัน/ตามปริมาณ/เหมาจบ และยืนยันราคารวมก่อนเริ่มงาน" },
        "logistics": { "title": "จัดคิวรถให้ทำงานต่อเนื่อง", "description": "ซิงก์รถขุดกับรถดั๊ม ลดเวลารอ" },
        "report": { "title": "อัปเดตรูป/วิดีโอ", "description": "ถ้าคุณไม่ได้อยู่หน้างาน เราส่งความคืบหน้าให้ได้" },
        "safety": { "title": "ทำงานปลอดภัยและระมัดระวัง", "description": "ทำงานใกล้บ้าน รั้ว และสาธารณูปโภคอย่างระวัง" }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": { "question": "รับเหมางานดินแบบครบวงจรไหม?", "answer": "รับครับ ตั้งแต่เคลียร์พื้นที่ ปรับระดับ ถมดิน ส่งวัสดุ จนถึงขนดิน/ขยะออก" },
        "q2": { "question": "คิดราคาแบบไหน?", "answer": "ตามลักษณะงาน: รายวัน/ตามปริมาณ/เหมาจบ และยืนยันราคารวมก่อนเริ่ม" },
        "q3": { "question": "ขอราคาเร็ว ๆ ต้องส่งอะไร?", "answer": "โลเคชัน + รูปทางเข้าและพื้นที่ 3–5 รูป + อธิบายงานคร่าว ๆ และกำหนดเวลา" },
        "q4": { "question": "ทำงานทางเขาและทางแคบได้ไหม?", "answer": "ได้ครับ เราเลือกใช้รถให้เหมาะกับสภาพทางจริง" },
        "q5": { "question": "ช่วยทำสโลประบายน้ำได้ไหม?", "answer": "ได้ครับ เราช่วยจัดระดับและความลาดเพื่อให้น้ำไหลออกถูกทาง" },
        "q6": { "question": "มีบริการส่งดิน/ทราย/หินไหม?", "answer": "มีครับ ส่งวัสดุและเกลี่ยกระจายให้ครบด้วยรถดั๊มและรถขุด" }
      },
      "examples": {
        "title": "แกลเลอรี",
        "1": "งานดิน: ขุดหลุมฐานราก/ฟุตติ้งสำหรับบ้านบนเกาะสมุย",
        "2": "ปรับระดับและเกลี่ยพื้นที่ก่อนสร้างวิลล่า (เตรียมพื้นที่ก่อสร้าง)",
        "3": "โหลดและขนเศษวัสดุก่อสร้างออกด้วยรถดั๊มจากหน้างาน",
        "4": "เตรียมฐานทางเข้า/ถนนเข้าไซต์: ถมรองพื้นหินคลุกและปรับระดับ",
        "5": "ถมดินยกระดับพื้นที่: เกลี่ยกระจายและปรับระดับหน้างาน",
        "6": "เคลียร์พื้นที่: เก็บขยะ ก้อนหิน และเตรียมพื้นที่ก่อนก่อสร้าง",
        "7": "โหลดและขนดินออกด้วยรถดั๊มหลังงานขุดและปรับพื้นที่",
        "8": "ทำถนนทางเข้าไปยังพื้นที่: ชั้นฐาน ความลาดเอียง และงานระบายน้ำ"
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
      imageSrc="/land.webp"
    />

    <ServiceIntro :text="t('earthworks.intro')" />

    <ServiceIncluded
      :title="tasksTitle"
      :items="tasksItems"
    />

    <ServiceEquipment
      :title="equipmentTitle"
      :note="equipmentNote"
      :items="equipmentItems"
    />

    <ServiceEquipment
      :title="trucksTitle"
      :note="trucksNote"
      :items="trucksItems"
    />

    <UAlert
      :title="pricingTitle"
      :description="pricingText"
      class="mt-6"
      variant="soft"
      color="primary"
      icon="i-lucide-calculator"
    />

    <ServiceIncluded
      :title="includedTitle"
      :items="includedItems"
    />

    <CoreContactsMini />

    <CoreFAQ
      :title="faqTitle"
      :items="faqItems"
    />

    <ServiceGallery
      :title="t('earthworks.examples.title')"
      :items="examples"
    />

    <CoreContacts />
  </UPage>
</template>
