<script setup lang="ts">
import { CONTACT_PHONE } from '~/constants/contacts';


const { t } = useI18n();


const heroTitle = computed(() => t('excavator.hero.title'));
const heroDescription = computed(() => t('excavator.hero.description'));
const heroLinks = computed(() =>  [
  {
    label: t('excavator.hero.primary'),
    icon: 'i-lucide-phone',
    color: 'primary',
    to: `tel:${CONTACT_PHONE}`,
  },
]);

const equipmentTitle = computed(() => t('excavator.equipment.title'));
const equipmentItems = computed(() => ([
  {
    title: 'Komatsu PC30-7',
    image: '/images/equipment/excavators/komatsu-pc30-7.webp',
    specs: [
      { label: t('excavator.equipment.specs.bucket'), value: '0,1 м³' },
      { label: t('excavator.equipment.specs.depth'), value: '3,1 м' },
      { label: t('excavator.equipment.specs.dump'), value: '3,3 м' },
      { label: t('excavator.equipment.specs.weight'), value: '3,2 т' },
    ],
    prices: [
      { label: t('excavator.equipment.prices.hour'), value: '800 THB' },
      { label: t('excavator.equipment.prices.day'), value: '6 000 THB' },
    ],
  },

  {
    title: 'Caterpillar 305CR',
    image: '/images/equipment/excavators/cat-305cr.webp',
    specs: [
      { label: t('excavator.equipment.specs.bucket'), value: '0,3 м³' },
      { label: t('excavator.equipment.specs.depth'), value: '3,7 м' },
      { label: t('excavator.equipment.specs.dump'), value: '3,9 м' },
      { label: t('excavator.equipment.specs.weight'), value: '5,5 т' },
    ],
    prices: [
      { label: t('excavator.equipment.prices.hour'), value: '1 000 THB' },
      { label: t('excavator.equipment.prices.day'), value: '7 500 THB' },
    ],
  },

  {
    title: 'Komatsu PC128US',
    image: '/images/equipment/excavators/komatsu-pc128us.webp',
    specs: [
      { label: t('excavator.equipment.specs.bucket'), value: '0,45 м³' },
      { label: t('excavator.equipment.specs.depth'), value: '5,4 м' },
      { label: t('excavator.equipment.specs.dump'), value: '6,9 м' },
      { label: t('excavator.equipment.specs.weight'), value: '12,8 т' },
    ],
    prices: [
      { label: t('excavator.equipment.prices.hour'), value: '2 000 THB' },
      { label: t('excavator.equipment.prices.day'), value: '15 000 THB' },
    ],
  },
]));


const includedTitle = computed(() => t('excavator.included.title'));

const includedItems = computed(() => ([
  {
    icon: 'i-heroicons-user',
    title: t('excavator.included.operator.title'),
    description: t('excavator.included.operator.description'),
  },
  {
    icon: 'i-heroicons-wrench-screwdriver',
    title: t('excavator.included.inspection.title'),
    description: t('excavator.included.inspection.description'),
  },
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
  {
    icon: 'i-heroicons-shield-check',
    title: t('excavator.included.safety.title'),
    description: t('excavator.included.safety.description'),
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

const examples = computed(() => [
  {
    alt: t('excavator.examples.1'),
    src: '/images/examples/excavators/1.webp',
  },
  {
    alt: t('excavator.examples.2'),
    src: '/images/examples/excavators/2.webp',
  },
  {
    alt: t('excavator.examples.3'),
    src: '/images/examples/excavators/3.webp',
  },
  {
    alt: t('excavator.examples.4'),
    src: '/images/examples/excavators/4.webp',
  },
  {
    alt: t('excavator.examples.5'),
    src: '/images/examples/excavators/5.webp',
  },
  {
    alt: t('excavator.examples.6'),
    src: '/images/examples/excavators/6.webp',
  },
  {
    alt: t('excavator.examples.7'),
    src: '/images/examples/excavators/7.webp',
  },
  {
    alt: t('excavator.examples.8'),
    src: '/images/examples/excavators/8.webp',
  },
  {
    alt: t('excavator.examples.9'),
    src: '/images/examples/excavators/9.webp',
  },
]);


useHead(() => {
  const title = t('excavator.seo.title');
  const description = t('excavator.seo.description');
  const keywords = t('excavator.seo.keywords');
  const image = 'https://supermansamui.com/images/equipment/excavators/cat-305cr.webp';

  return {
    title,

    meta: [
      { name: 'description', content: description },
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
  };
});
</script>

<i18n lang="json">
{
  "en": {
    "excavator": {
      "seo": {
        "title": "Excavator Rental on Koh Samui | Earthworks, Soil Removal & Land Preparation",
        "description": "Excavator rental on Koh Samui with a skilled local operator. We handle all earthworks: foundation digging, pond and pool excavation, land grading, soil removal and delivery. Fast response, fair pricing, and equipment for both villa projects and large construction sites.",
        "keywords": "excavator rental koh samui, excavator services samui, earthworks samui, mini excavator koh samui, land preparation samui, soil removal, land grading, construction equipment samui"
      },

      "hero": {
        "title": "Excavator Rental on Koh Samui",
        "description": "We dig foundations, ponds and pools, prepare land, level terrain, and handle soil removal and delivery.",
        "primary": "Call us"
      },

      "intro": "We provide excavator rental on Koh Samui with experienced local operators who work safely, precisely, and efficiently. We dig foundations and trenches, excavate ponds and pool pits, level and grade land, remove soil, deliver materials, and fully prepare sites for construction. Our small, medium, and large excavators allow us to work both in tight villa areas and on major commercial projects. We arrive on time, keep our promises, and deliver clean results.",

      "equipment": {
        "title": "Our Excavators",
        "specs": {
          "bucket": "Bucket capacity",
          "depth": "Digging depth",
          "dump": "Dump height",
          "weight": "Operating weight"
        },
        "prices": {
          "hour": "Per hour",
          "day": "Per day (8 hours)"
        }
      },

      "included": {
        "title": "What’s Included",
        "operator": {
          "title": "Experienced operator",
          "description": "A local professional familiar with Samui’s terrain, soil conditions, and safe operating methods."
        },
        "inspection": {
          "title": "Equipment inspection",
          "description": "We fully check and service the machine before sending it to your site."
        },
        "flexible": {
          "title": "Flexible rental format",
          "description": "Choose hourly rental, a full-day shift, or a fixed-price contract for larger jobs."
        },
        "planning": {
          "title": "Basic site planning",
          "description": "We help determine levels, slopes, drainage, and the most efficient workflow."
        },
        "report": {
          "title": "Photo & video updates",
          "description": "We provide progress photos or videos if you are not on site."
        },
        "safety": {
          "title": "Safe work practices",
          "description": "We work carefully around buildings, utilities, and landscaping while following safety standards."
        }
      },

      "faq": {
        "title": "Excavator Rental FAQ",

        "q1": {
          "question": "Is the operator included?",
          "answer": "Yes. All excavators are rented only with our operator to ensure safety and quality."
        },

        "q2": {
          "question": "Is fuel included?",
          "answer": "Yes, all fuel is included in the rental price."
        },

        "q3": {
          "question": "How do you assess and organize the work?",
          "answer": "We visit your site, check access, clarify the task, and provide a free estimate. We calculate how much soil needs to be removed or delivered, agree on timing, and arrive exactly as scheduled."
        },

        "q4": {
          "question": "What rental options do you offer?",
          "answer": "Hourly rental, full-day shifts, or fixed-price contracts depending on your project."
        },

        "q5": {
          "question": "How much is transport for the excavator?",
          "answer": "Delivery is free for bookings of 3 hours or more. Otherwise, the fee is 1,000 THB."
        },

        "q6": {
          "question": "What other equipment do you provide?",
          "answer": "We also offer 4-, 6-, and 10-wheel trucks for soil delivery, sand, gravel, and construction waste removal. We handle land clearing, leveling, grading, and full site preparation."
        }
      },

      "examples": {
        "title": "Gallery",
        "1": "Road construction on Koh Samui",
        "2": "Refueling the mini excavator",
        "3": "Transporting a large excavator on a trailer",
        "4": "Clearing a construction site",
        "5": "Loading soil into a 10-wheel truck",
        "6": "Night shift excavator work",
        "7": "Excavator maintenance",
        "8": "Loading construction debris into a dump truck",
        "9": "Site clearing and preparation for building"
      }
    }
  },
  "ru": {
    "excavator": {
      "seo": {
        "title": "Аренда экскаватора на Самуи | Земляные работы, вывоз грунта и подготовка участка",
        "description": "Аренда экскаватора на Самуи с опытным оператором. Копка фундаментов и прудов, планировка участка, вывоз и доставка грунта. Быстрый выезд, честные цены, техника для любых задач — от небольших работ возле виллы до крупных строительных проектов.",
        "keywords": "аренда экскаватора самуи, услуги экскаватора самуи, земляные работы самуи, мини-экскаватор самуи, подготовка участка, вывоз грунта, планировка участка, спецтехника самуи"
      },

      "hero": {
        "title": "Аренда экскаватора на Самуи",
        "description": "Копаем фундаменты, пруды и бассейны, делаем планировку и выравнивание участка, занимаемся вывозом и доставкой грунта.",
        "primary": "Позвонить"
      },

      "intro": "Предоставляем аренду экскаваторов на Самуи с профессиональными местными операторами. Работаем аккуратно и точно: копаем фундаменты, траншеи, котлованы под бассейны, выполняем планировку, выравнивание, вывоз грунта и полную подготовку участка под строительство. Техника разных размеров позволяет работать как в стеснённых условиях около вилл, так и на больших коммерческих стройках. Выезжаем быстро, работаем по договорённости, всегда соблюдаем сроки и объёмы.",

      "equipment": {
        "title": "Наши экскаваторы",
        "specs": {
          "bucket": "Объём ковша",
          "depth": "Глубина копания",
          "dump": "Высота выгрузки",
          "weight": "Рабочий вес"
        },
        "prices": {
          "hour": "За час",
          "day": "За смену (8 ч.)"
        }
      },

      "included": {
        "title": "Что входит в аренду",
        "operator": {
          "title": "Опытный оператор",
          "description": "Местный специалист, который знает рельеф Самуи, особенности грунта и безопасные методы работы."
        },
        "inspection": {
          "title": "Полная проверка техники",
          "description": "Перед выездом осматриваем оборудование, смазываем узлы и проверяем исправность всех систем."
        },
        "flexible": {
          "title": "Удобный формат аренды",
          "description": "Вы сами выбираете: почасовая аренда, смена или работа по фиксированному объёму."
        },
        "planning": {
          "title": "Базовое планирование участка",
          "description": "Помогаем определить уровни, уклоны, дренаж и оптимальный порядок выполнения работ."
        },
        "report": {
          "title": "Фото и видеоотчёты",
          "description": "Присылаем отчёт в процессе работы, если вы находитесь не на объекте."
        },
        "safety": {
          "title": "Безопасная работа на объекте",
          "description": "Работаем аккуратно рядом с постройками, коммуникациями и ограждениями, соблюдаем технику безопасности."
        }
      },

      "faq": {
        "title": "Частые вопросы об аренде экскаватора на Самуи",

        "q1": {
          "question": "Входит ли оператор в стоимость аренды?",
          "answer": "Да. Экскаватор сдаётся только с нашим оператором — это гарантирует безопасность, точность и качество работ."
        },

        "q2": {
          "question": "Топливо включено в стоимость?",
          "answer": "Да, всё топливо включено. Никаких скрытых доплат."
        },

        "q3": {
          "question": "Как проходит оценка и организация работ?",
          "answer": "Мы выезжаем на ваш участок, смотрим доступ, уточняем задачу и бесплатно рассчитываем объём работ. Определяем, сколько грунта нужно вывезти или привезти, согласуем сроки и формат аренды. В оговорённый день приезжаем вовремя и выполняем работу."
        },

        "q4": {
          "question": "Какой формат оплаты и работ вы предлагаете?",
          "answer": "Почасовая аренда, работа за смену или договорная цена за весь объём. Подберём вариант под задачу и бюджет."
        },

        "q5": {
          "question": "Сколько стоит доставка экскаватора?",
          "answer": "При заказе от 3 часов доставка бесплатная. Если меньше — фиксированная стоимость 1 000 бат."
        },

        "q6": {
          "question": "Какая техника есть помимо экскаваторов?",
          "answer": "В нашем автопарке есть 4-, 6- и 10-колёсные грузовики для вывоза мусора, доставки грунта, песка и щебня. Также выполняем расчистку, планировку, выравнивание и полную подготовку участка под строительство."
        }
      },

      "examples": {
        "title": "Галерея",
        "1": "Строительство подъездной дороги на Самуи",
        "2": "Заправка мини-экскаватора перед работой",
        "3": "Перевозка большого экскаватора на трале",
        "4": "Расчистка участка и вывоз мусора",
        "5": "Загрузка грунта в десятиколёсный самосвал",
        "6": "Ночная смена на строительном объекте",
        "7": "Обслуживание и подготовка экскаватора к рейсу",
        "8": "Загрузка строительных отходов в самосвал",
        "9": "Очистка и подготовка земли под строительство"
      }
    }
  },
  "th": {
    "excavator": {
      "seo": {
        "title": "บริการเช่ารถขุด เกาะสมุย | งานดิน ขนดิน ถมที่ และปรับพื้นที่",
        "description": "เช่ารถขุดบนเกาะสมุย พร้อมคนขับมืออาชีพ รับขุดฟุตติ้ง สระน้ำ ปรับพื้นที่ ขนดิน ส่งดิน และเตรียมไซต์งานก่อสร้าง ราคาตรงไปตรงมา ทำงานเร็ว งานเนี้ยบ พร้อมให้บริการทั้งไทย อังกฤษ และรัสเซีย",
        "keywords": "เช่ารถขุด เกาะสมุย, งานดิน สมุย, ถมที่ ปรับพื้นที่, ขนดิน เกาะสมุย, บริการรถขุด สมุย, รถขุดขนาดเล็ก เกาะสมุย, เตรียมพื้นที่ก่อสร้าง, รถบรรทุก งานก่อสร้าง"
      },

      "hero": {
        "title": "บริการเช่ารถขุดบนเกาะสมุย",
        "description": "รับขุดสระ ขุดฟุตติ้ง ปรับระดับพื้นที่ ถมดิน ขนดิน และงานดินทุกชนิด",
        "primary": "โทรเลย"
      },

      "intro": "เราให้บริการเช่ารถขุดบนเกาะสมุย พร้อมคนขับท้องถิ่นที่มีประสบการณ์ ทำงานปลอดภัย แม่นยำ และตรงเวลา รับขุดฟุตติ้ง ขุดสระ วางท่อ ปรับระดับพื้นที่ ขนดิน ส่งดิน และเตรียมพื้นที่ก่อนก่อสร้าง รถขุดหลายขนาดรองรับทั้งงานพื้นที่แคบในบ้านพัก และงานใหญ่ในไซต์ก่อสร้าง เชื่อถือได้ เข้างานตามนัด และทำงานเรียบร้อยทุกครั้ง",

      "equipment": {
        "title": "รถขุดของเรา",
        "specs": {
          "bucket": "ขนาดบุ้งกี๋",
          "depth": "ความลึกการขุด",
          "dump": "ความสูงเทดิน",
          "weight": "น้ำหนักปฏิบัติงาน"
        },
        "prices": {
          "hour": "รายชั่วโมง",
          "day": "รายวัน (8 ชม.)"
        }
      },

      "included": {
        "title": "บริการที่รวมให้แล้ว",
        "operator": {
          "title": "คนขับมืออาชีพ",
          "description": "รู้พื้นที่สมุยดี เข้าใจลักษณะดิน และวิธีทำงานที่ปลอดภัย"
        },
        "inspection": {
          "title": "ตรวจเช็คสภาพรถก่อนเข้าพื้นที่",
          "description": "ตรวจระบบ จุดหล่อลื่น และส่วนสำคัญต่าง ๆ ให้พร้อมใช้งาน"
        },
        "flexible": {
          "title": "เลือกรูปแบบการเช่าได้",
          "description": "มีทั้งรายชั่วโมง รายวัน หรือเหมางานตามลักษณะงานของลูกค้า"
        },
        "planning": {
          "title": "ให้คำแนะนำหน้างานเบื้องต้น",
          "description": "ช่วยดูระดับดิน ความลาดเอียง การระบายน้ำ และลำดับการทำงานที่เหมาะสม"
        },
        "report": {
          "title": "อัปเดตภาพและวิดีโอระหว่างทำงาน",
          "description": "ลูกค้าดูความคืบหน้าได้ แม้ไม่ได้อยู่ในพื้นที่"
        },
        "safety": {
          "title": "ปลอดภัยในไซต์งาน",
          "description": "ทำงานอย่างระมัดระวังใกล้อาคาร ระบบท่อ และสาธารณูปโภค"
        }
      },

      "faq": {
        "title": "คำถามที่พบบ่อยเกี่ยวกับการเช่ารถขุด",

        "q1": {
          "question": "ราคารวมคนขับหรือไม่?",
          "answer": "รวมแล้ว รถขุดของเราทุกคันให้บริการพร้อมคนขับเท่านั้น เพื่อความปลอดภัยและคุณภาพงาน"
        },

        "q2": {
          "question": "รวมค่าน้ำมันหรือไม่?",
          "answer": "รวมแล้ว ไม่มีค่าใช้จ่ายเพิ่มเติม"
        },

        "q3": {
          "question": "ขั้นตอนการประเมินงานทำอย่างไร?",
          "answer": "เราจะเข้าดูพื้นที่จริง ตรวจทางเข้าหน้างาน อธิบายขั้นตอน ประเมินปริมาณงานให้ฟรี พร้อมคำนวณดินที่ต้องขนเข้า–ออก และนัดวันทำงานตามเวลาที่ลูกค้าสะดวก"
        },

        "q4": {
          "question": "มีรูปแบบคิดราคาแบบไหนบ้าง?",
          "answer": "คิดรายชั่วโมง รายวัน หรือแบบเหมางาน ขึ้นอยู่กับงานของลูกค้า"
        },

        "q5": {
          "question": "ค่าขนส่งรถขุดเท่าไหร่?",
          "answer": "ฟรีเมื่อเช่า 3 ชั่วโมงขึ้นไป น้อยกว่านั้นคิด 1,000 บาท"
        },

        "q6": {
          "question": "มีบริการอื่นนอกจากรถขุดหรือไม่?",
          "answer": "มีบริการรถบรรทุก 4, 6 และ 10 ล้อ สำหรับขนดิน ส่งดิน ทราย หิน และขนเศษวัสดุก่อสร้าง รวมถึงเคลียร์พื้นที่ ปรับระดับ และเตรียมไซต์งานก่อนก่อสร้าง"
        }
      },

      "examples": {
        "title": "แกลเลอรี",
        "1": "งานทำถนนบนเกาะสมุย",
        "2": "เติมน้ำมันให้รถขุดเล็ก",
        "3": "ขนส่งรถขุดขนาดใหญ่บนเทรลเลอร์",
        "4": "เคลียร์พื้นที่ก่อสร้าง",
        "5": "โหลดดินขึ้นรถสิบล้อ",
        "6": "งานกะกลางคืน",
        "7": "บำรุงรักษารถขุด",
        "8": "ขนเศษวัสดุก่อสร้างขึ้นรถดั๊ม",
        "9": "เคลียร์พื้นที่เตรียมสร้างบ้าน"
      }
    }
  }
}
</i18n>

<template>
  <UPage>
    <UPageHero
      :title="heroTitle"
      :description="heroDescription"
      :links="heroLinks"
    />

    <ServiceIntro :text="t('excavator.intro')" />

    <ServiceEquipment
      :title="equipmentTitle"
      :items="equipmentItems"
    />

    <ServiceIncluded
      :title="includedTitle"
      :items="includedItems"
    />

    <CoreFAQ
      :title="faqTitle"
      :items="faqItems"
    />

    <ServiceGallery
      :title="t('excavator.examples.title')"
      :items="examples"
    />

    <CoreContacts />
  </UPage>
</template>
