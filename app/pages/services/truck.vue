<script setup lang="ts">
import { getEquipmentByCategory } from '~/data/equipment';


const { t, locale } = useI18n();
const localePath = useLocalePath();

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

const equipmentItems = computed(() =>
  getEquipmentByCategory('truck').map(item => {
    const loc = item.i18n[locale.value as 'en' | 'ru' | 'th'] ?? item.i18n.en;

    return {
      title: item.name,
      image: item.image,
      subtitle: loc.type,
      description: loc.summary,
      to: localePath({ name: 'equipment-slug', params: { slug: item.id } }),
      prices: [
        { label: t('trucks.equipment.prices.trip'), value: formatPrice(item.prices.trip!) },
        { label: t('trucks.equipment.prices.day'), value: formatPrice(item.prices.shift) },
      ],
    };
  }),
);

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

useServiceSeo({
  t,
  path: '/services/trucks',
  prefix: 'trucks',
  image: {
    url: 'https://supermansamui.com/images/services/trucks/hero.webp',
    width: '960',
    height: '540',
  },
  serviceTypes,
  catalogItems: tasksItems,
  priceRange: {
    low: Math.min(...getEquipmentByCategory('truck').map(e => e.prices.trip ?? e.prices.shift)),
    high: Math.max(...getEquipmentByCategory('truck').map(e => e.prices.shift)),
  },
});
</script>

<i18n lang="json">
{
  "ru": {
    "trucks": {
      "schema": {
        "name": "Самосвалы и грузоперевозки на Самуи",
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
        "title": "Самосвалы и грузоперевозки на Самуи",
        "description": "Вывоз грунта и строительного мусора, доставка песка, щебня и грунта, перевозка техники на Самуи. Подберём грузовик и согласуем цену за рейс, смену или весь объём.",
        "keywords": "самосвал самуи, грузоперевозки самуи, вывоз грунта самуи, вывоз строительного мусора самуи, доставка песка самуи, доставка щебня самуи, доставка грунта самуи, перевозка техники самуи"
      },
      "hero": {
        "title": "Самосвалы и грузоперевозки на Самуи",
        "description": "Вывозим грунт и строительный мусор, доставляем песок, щебень и другие материалы, перевозим технику. Один рейс или перевозки на весь период работ."
      },
      "intro": "Подберём машину под груз, маршрут и подъезд к объекту. Поможем оценить объём и количество рейсов, согласуем место погрузки и выгрузки. До выезда объясним стоимость и что входит в заказ.",
      "tasks": {
        "title": "Что мы перевозим",
        "t1": {
          "title": "Вывоз грунта",
          "description": "Забираем лишнюю землю, глину и камни после копки котлована, траншей или планировки участка."
        },
        "t2": {
          "title": "Вывоз строительного мусора",
          "description": "Вывозим бетон, остатки демонтажа, корни и другие отходы с объекта. Состав груза и способ погрузки уточняем заранее."
        },
        "t3": {
          "title": "Доставка песка и щебня",
          "description": "Привозим сыпучие материалы для строительства, дорог и дренажа. Согласуем вид материала, количество и место выгрузки."
        },
        "t4": {
          "title": "Доставка грунта",
          "description": "Завозим грунт для отсыпки, поднятия уровня участка и засыпки ям. Можно заказать одну машину или несколько рейсов."
        },
        "t5": {
          "title": "Перевозки на стройке",
          "description": "Организуем рейсы под график работ и погрузку экскаватором: вывозим вынутый грунт и подвозим нужные материалы."
        },
        "t6": {
          "title": "Перевозка техники",
          "description": "Перевозим экскаваторы, оборудование и тяжёлые грузы между объектами. Подбираем транспорт по массе, габаритам и условиям погрузки."
        }
      },
      "equipment": {
        "title": "Грузовики и цены",
        "note": "Сравните вместимость, грузоподъёмность и тарифы. Итоговую стоимость рассчитаем по грузу, маршруту и условиям погрузки и выгрузки.",
        "prices": {
          "thb": "{price} бат",
          "trip": "За рейс",
          "day": "За смену"
        }
      },
      "packages": {
        "title": "Нужна техника для погрузки?",
        "text": "Для грунта, камней и тяжёлого мусора можем добавить экскаватор с оператором. Согласуем его работу с подачей самосвалов и учтём погрузку в расчёте — вам не придётся координировать две команды."
      },
      "related": {
        "title": "Другие услуги для вашего объекта",
        "excavator": {
          "title": "Экскаватор с оператором",
          "description": "Для копки, демонтажа и погрузки перед вывозом. Выбор машины, оснащение и условия аренды."
        },
        "earthworks": {
          "title": "Земляные работы",
          "description": "Если нужно не только перевезти материал, но и выполнить работы на участке: выемку грунта, отсыпку, планировку или дренаж."
        }
      },
      "included": {
        "title": "Перевозки без лишних хлопот",
        "driver": {
          "title": "Учитываем дороги Самуи",
          "description": "Наши водители знают остров. Перед заказом проверяем подъезд, уклоны и место для разворота и выгрузки."
        },
        "routing": {
          "title": "Помогаем рассчитать рейсы",
          "description": "Оценим количество поездок по объёму, массе и типу груза. Подберём машину, которая подходит для вашего маршрута."
        },
        "flexible": {
          "title": "Согласуем цену заранее",
          "description": "За рейс, смену или весь объём — выберем формат под задачу и объясним, что включено в стоимость."
        }
      },
      "faq": {
        "title": "Частые вопросы",
        "q1": {
          "question": "От чего зависит стоимость перевозки?",
          "answer": "От типа и количества груза, расстояния, выбранной машины и условий погрузки и выгрузки. Обычно считаем за рейс, для длительной работы — за смену или весь объём. Заранее уточним, входят ли в расчёт погрузка, материалы и плата за приём отходов."
        },
        "q2": {
          "question": "Что отправить для расчёта?",
          "answer": "Локации погрузки и выгрузки, если они известны, фото груза и подъезда, примерный объём или массу, желаемую дату. Если объём неизвестен или вы не знаете, куда вывезти материал, напишите — поможем определить условия перевозки."
        },
        "q3": {
          "question": "Можно заказать самосвал вместе с погрузкой?",
          "answer": "Да. Можем организовать экскаватор с оператором для погрузки грунта, камней или строительного мусора. Погрузку и перевозку согласуем в одном заказе, а их стоимость укажем в расчёте."
        },
        "q4": {
          "question": "Вы доставляете песок, щебень и грунт?",
          "answer": "Да. Уточним вид материала, количество и место выгрузки. Перед заказом согласуем стоимость материала и доставки. Если после выгрузки нужно распределить материал по участку, эту работу обсудим отдельно."
        },
        "q5": {
          "question": "Сможет ли грузовик проехать по узкой или крутой дороге?",
          "answer": "Это зависит от ширины, уклона, покрытия и места для манёвра. Пришлите фото или видео подъезда — оценим возможность проезда и подберём подходящую машину. Учитываем также место для разгрузки."
        },
        "q6": {
          "question": "Можно заказать машину на сегодня?",
          "answer": "Если есть свободная подходящая машина и время на выполнение рейса. Напишите локацию и задачу — проверим возможность подачи. Для нескольких рейсов или работы на смену лучше договориться заранее."
        },
        "q7": {
          "question": "Как заказать перевозку экскаватора или оборудования?",
          "answer": "Пришлите модель, массу, габариты, фото и точки погрузки и доставки. Сообщите, может ли техника заехать на платформу своим ходом. Подберём транспорт и при необходимости согласуем кран для погрузки."
        }
      },
      "photos": {
        "title": "Примеры работ грузовиков",
        "soil-delivery": {
          "title": "Доставка грунта",
          "alt": "Самосвал доставляет грунт и сыпучие материалы на строительный участок на Самуи"
        },
        "loading-of-soil": {
          "title": "Погрузка грунта",
          "alt": "Экскаватор загружает грунт в самосвал для вывоза с участка"
        },
        "our-vintage-big-truck": {
          "title": "Большой грузовик для стройки",
          "alt": "Большой грузовик для перевозки строительных материалов и тяжёлых грузов на Самуи"
        },
        "transportation-of-excavator": {
          "title": "Перевозка экскаватора",
          "alt": "Перевозка экскаватора на трале между строительными объектами на Самуи"
        },
        "transportation-of-special-equipment": {
          "title": "Перевозка спецтехники",
          "alt": "Перевозка строительной техники и тяжёлого оборудования грузовиком на Самуи"
        }
      }
    }
  },
  "en": {
    "trucks": {
      "schema": {
        "name": "Dump Truck & Hauling Services on Koh Samui",
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
        "title": "Dump Truck & Hauling Services on Koh Samui",
        "description": "Soil and construction waste removal, sand, gravel and fill delivery, and equipment transport on Koh Samui. Truck selection and pricing by trip, day or full job.",
        "keywords": "dump truck koh samui, dump truck rental samui, hauling services samui, soil removal samui, construction waste removal samui, sand delivery samui, gravel delivery samui, equipment transport samui"
      },
      "hero": {
        "title": "Dump Truck & Hauling Services on Koh Samui",
        "description": "Soil and construction waste removal, bulk material delivery and equipment transport. Book a single trip or hauling throughout your project."
      },
      "intro": "We match the truck to the load, route and site access. We help estimate volume and trip numbers, and agree on loading and unloading locations. Before dispatch, we explain the price and what your booking includes.",
      "tasks": {
        "title": "What We Transport",
        "t1": {
          "title": "Soil Removal",
          "description": "Removal of surplus soil, clay and rocks after excavation, trenching or land grading."
        },
        "t2": {
          "title": "Construction Waste Removal",
          "description": "Hauling concrete, demolition debris, roots and other site waste. We confirm the load contents and loading method in advance."
        },
        "t3": {
          "title": "Sand & Gravel Delivery",
          "description": "Bulk materials for construction, roads and drainage. We agree on material type, quantity and the unloading location."
        },
        "t4": {
          "title": "Fill Soil Delivery",
          "description": "Soil for backfilling, raising ground levels and filling holes. Book one truckload or several trips."
        },
        "t5": {
          "title": "Construction Site Hauling",
          "description": "Trips coordinated with your work schedule and excavator loading, removing excavated soil and bringing in materials."
        },
        "t6": {
          "title": "Equipment Transport",
          "description": "Moving excavators, equipment and heavy loads between sites. We select transport based on weight, dimensions and loading requirements."
        }
      },
      "equipment": {
        "title": "Trucks & Rates",
        "note": "Compare load volumes, payloads and rates. Your final quote will account for the load, route and loading and unloading conditions.",
        "prices": {
          "thb": "{price} THB",
          "trip": "Per trip",
          "day": "Per day"
        }
      },
      "packages": {
        "title": "Need Equipment for Loading?",
        "text": "For soil, rocks and heavy debris, we can add an excavator with an operator. We coordinate it with truck arrivals and include loading in the estimate, so you don’t have to manage two separate teams."
      },
      "related": {
        "title": "Other Services for Your Site",
        "excavator": {
          "title": "Excavator With Operator",
          "description": "For digging, demolition and loading before removal. Explore machines, attachments and rental terms."
        },
        "earthworks": {
          "title": "Earthworks",
          "description": "For work on the land as well as transport: excavation, backfilling, grading or drainage."
        }
      },
      "included": {
        "title": "Straightforward Hauling",
        "driver": {
          "title": "Knowledge of Samui Roads",
          "description": "Our drivers know the island. Before booking, we check access, slopes and room for turning and unloading."
        },
        "routing": {
          "title": "Help Estimating Trips",
          "description": "We estimate trips from load volume, weight and material type, then recommend a truck suited to your route."
        },
        "flexible": {
          "title": "Prices Agreed in Advance",
          "description": "By trip, day or full volume: we agree on a pricing basis for your job and explain what is included."
        }
      },
      "faq": {
        "title": "Frequently Asked Questions",
        "q1": {
          "question": "What determines the transport price?",
          "answer": "Load type and quantity, distance, truck choice, and loading and unloading conditions. We usually charge per trip; longer jobs can be priced per day or for the full volume. We clarify whether loading, materials and waste disposal fees are included before starting."
        },
        "q2": {
          "question": "What should I send for a quote?",
          "answer": "Loading and unloading locations if known, photos of the load and access, approximate volume or weight, and your preferred date. If you don’t know the volume or where the material can go, tell us and we’ll help work out the hauling arrangements."
        },
        "q3": {
          "question": "Can I book a dump truck with loading?",
          "answer": "Yes. We can arrange an excavator with an operator to load soil, rocks or construction debris. Loading and hauling can be booked together, with the costs set out in your estimate."
        },
        "q4": {
          "question": "Do you deliver sand, gravel and fill soil?",
          "answer": "Yes. We confirm the material type, quantity and unloading point, then agree on material and delivery costs. If the material needs spreading after delivery, we discuss that work separately."
        },
        "q5": {
          "question": "Can a truck use a narrow or steep access road?",
          "answer": "It depends on road width, gradient, surface and turning space. Send photos or a video of the access so we can assess feasibility and choose a suitable truck. We also check the unloading area."
        },
        "q6": {
          "question": "Can I book a truck for today?",
          "answer": "If a suitable truck is available and there is time to complete the trip. Send your location and job details so we can check availability. For several trips or a full day, booking ahead is best."
        },
        "q7": {
          "question": "How do I book excavator or equipment transport?",
          "answer": "Send the model, weight, dimensions, photos, and pickup and delivery locations. Tell us whether the machine can drive onto a platform under its own power. We’ll select the transport and arrange crane loading if needed."
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
        "name": "บริการรถดั๊มและขนส่งบนเกาะสมุย",
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
        "title": "รถดั๊มและบริการขนส่งบนเกาะสมุย",
        "description": "ขนดินและเศษวัสดุก่อสร้างออก ส่งทราย หิน ดินถม และขนย้ายเครื่องจักรบนเกาะสมุย ช่วยเลือกรถและตกลงราคาต่อเที่ยว รายวัน หรือเหมางานก่อนเริ่ม",
        "keywords": "รถดั๊ม สมุย, รถบรรทุก สมุย, ขนดินออก สมุย, ขนขยะก่อสร้าง สมุย, ส่งทราย สมุย, ส่งหิน สมุย, ส่งดินถม สมุย, ขนย้ายเครื่องจักร สมุย"
      },
      "hero": {
        "title": "รถดั๊มและบริการขนส่งบนเกาะสมุย",
        "description": "ขนดินและเศษวัสดุก่อสร้างออก ส่งทราย หิน และวัสดุอื่น พร้อมขนย้ายเครื่องจักร เลือกใช้บริการเที่ยวเดียวหรือขนส่งตลอดโครงการ"
      },
      "intro": "เลือกรถให้เหมาะกับของที่บรรทุก เส้นทาง และทางเข้าหน้างาน ช่วยประเมินปริมาณและจำนวนเที่ยว พร้อมตกลงจุดขึ้นและลงของ ก่อนนำรถออก เราจะแจ้งราคาและสิ่งที่รวมอยู่ในงาน",
      "tasks": {
        "title": "เราขนส่งอะไรบ้าง",
        "t1": {
          "title": "ขนดินออก",
          "description": "ขนดินส่วนเกิน ดินเหนียว และหิน หลังงานขุดบ่อ ขุดร่อง หรือปรับระดับพื้นที่"
        },
        "t2": {
          "title": "ขนเศษวัสดุก่อสร้างออก",
          "description": "ขนคอนกรีต เศษรื้อถอน รากไม้ และเศษวัสดุอื่นจากหน้างาน โดยตรวจสอบประเภทของและวิธีขึ้นของล่วงหน้า"
        },
        "t3": {
          "title": "ส่งทรายและหิน",
          "description": "ส่งวัสดุเทกองสำหรับก่อสร้าง ถนน และระบบระบายน้ำ ตกลงประเภทวัสดุ ปริมาณ และจุดลงของก่อนส่ง"
        },
        "t4": {
          "title": "ส่งดินถม",
          "description": "ส่งดินสำหรับถมที่ ยกระดับพื้นที่ และถมหลุม สั่งได้ตั้งแต่หนึ่งคันรถไปจนถึงหลายเที่ยว"
        },
        "t5": {
          "title": "ขนส่งในงานก่อสร้าง",
          "description": "จัดเที่ยวรถให้สอดคล้องกับตารางงานและการตักของรถขุด ทั้งขนดินที่ขุดออกและส่งวัสดุเข้า"
        },
        "t6": {
          "title": "ขนย้ายเครื่องจักร",
          "description": "ขนย้ายรถขุด อุปกรณ์ และของหนักระหว่างหน้างาน เลือกรถตามน้ำหนัก ขนาด และวิธีขึ้นของ"
        }
      },
      "equipment": {
        "title": "รถบรรทุกและอัตราค่าบริการ",
        "note": "เปรียบเทียบความจุ น้ำหนักบรรทุก และราคา ราคาสำหรับงานของคุณจะคำนวณตามของที่ขน เส้นทาง และเงื่อนไขขึ้นลงของ",
        "prices": {
          "thb": "{price} บาท",
          "trip": "ต่อเที่ยว",
          "day": "ต่อวัน"
        }
      },
      "packages": {
        "title": "ต้องการเครื่องจักรช่วยตักขึ้นรถไหม?",
        "text": "สำหรับดิน หิน และเศษวัสดุหนัก เราจัดรถขุดพร้อมคนขับให้ได้ โดยประสานงานกับเวลาที่รถดั๊มเข้ารับ และรวมงานตักไว้ในรายการประเมิน คุณจึงไม่ต้องจัดคิวให้สองทีมเอง"
      },
      "related": {
        "title": "บริการอื่นสำหรับหน้างานของคุณ",
        "excavator": {
          "title": "รถขุดพร้อมคนขับ",
          "description": "สำหรับขุด รื้อถอน และตักวัสดุก่อนขนออก ดูรุ่นรถ อุปกรณ์ และเงื่อนไขการเช่า"
        },
        "earthworks": {
          "title": "งานดิน",
          "description": "สำหรับงานในพื้นที่นอกเหนือจากขนส่ง เช่น ขุดดิน ถมดิน ปรับระดับ หรือทำระบบระบายน้ำ"
        }
      },
      "included": {
        "title": "ขนส่งสะดวก ลดภาระจัดการ",
        "driver": {
          "title": "รู้จักเส้นทางบนสมุย",
          "description": "คนขับของเรารู้จักพื้นที่ ก่อนรับงานจะตรวจสอบทางเข้า ความชัน และพื้นที่กลับรถและลงของ"
        },
        "routing": {
          "title": "ช่วยคำนวณจำนวนเที่ยว",
          "description": "ประเมินจำนวนเที่ยวจากปริมาตร น้ำหนัก และประเภทของ พร้อมเลือกรถให้เหมาะกับเส้นทาง"
        },
        "flexible": {
          "title": "ตกลงราคาล่วงหน้า",
          "description": "เลือกคิดต่อเที่ยว รายวัน หรือเหมาทั้งงานตามความเหมาะสม พร้อมอธิบายว่าราคารวมอะไรบ้าง"
        }
      },
      "faq": {
        "title": "คำถามที่พบบ่อย",
        "q1": {
          "question": "ค่าขนส่งขึ้นอยู่กับอะไรบ้าง?",
          "answer": "ประเภทและปริมาณของ ระยะทาง รถที่ใช้ และเงื่อนไขขึ้นลงของ ส่วนใหญ่คิดต่อเที่ยว งานต่อเนื่องอาจคิดรายวันหรือเหมาทั้งหมด โดยแจ้งล่วงหน้าว่ารวมค่าตัก วัสดุ และค่ารับทิ้งเศษวัสดุหรือไม่"
        },
        "q2": {
          "question": "ต้องส่งอะไรเพื่อขอราคา?",
          "answer": "โลเคชันรับและส่งหากทราบ รูปของและทางเข้า ปริมาตรหรือน้ำหนักโดยประมาณ และวันที่ต้องการ หากไม่ทราบปริมาณหรือจุดนำวัสดุไปทิ้ง แจ้งเราได้ เราจะช่วยพิจารณารูปแบบการขนส่ง"
        },
        "q3": {
          "question": "จองรถดั๊มพร้อมบริการตักขึ้นรถได้ไหม?",
          "answer": "ได้ เราจัดรถขุดพร้อมคนขับสำหรับตักดิน หิน หรือเศษวัสดุก่อสร้างได้ สามารถตกลงงานตักและขนส่งในคำสั่งงานเดียว โดยระบุค่าใช้จ่ายไว้ในรายการประเมิน"
        },
        "q4": {
          "question": "ส่งทราย หิน และดินถมได้ไหม?",
          "answer": "ได้ เราจะยืนยันประเภทวัสดุ ปริมาณ และจุดลงของ พร้อมตกลงค่าวัสดุและค่าขนส่งก่อนสั่ง หากต้องเกลี่ยวัสดุหลังลงของ จะคุยเรื่องงานนี้แยกต่างหาก"
        },
        "q5": {
          "question": "รถเข้าได้ไหมถ้าถนนแคบหรือชัน?",
          "answer": "ขึ้นอยู่กับความกว้าง ความชัน ผิวถนน และพื้นที่เลี้ยว ส่งรูปหรือวิดีโอทางเข้าให้เราประเมินและเลือกรถที่เหมาะสม โดยจะดูพื้นที่ลงของด้วย"
        },
        "q6": {
          "question": "จองรถให้มาวันนี้ได้ไหม?",
          "answer": "ได้หากมีรถที่เหมาะสมว่างและมีเวลาพอสำหรับเที่ยวงาน ส่งโลเคชันและรายละเอียดมาให้เราตรวจสอบ หากต้องการหลายเที่ยวหรือใช้งานทั้งวัน ควรจองล่วงหน้า"
        },
        "q7": {
          "question": "จองขนย้ายรถขุดหรืออุปกรณ์อย่างไร?",
          "answer": "ส่งรุ่น น้ำหนัก ขนาด รูปถ่าย และจุดรับส่ง พร้อมแจ้งว่าเครื่องจักรขับขึ้นรถบรรทุกได้เองหรือไม่ เราจะเลือกรถและตกลงการใช้เครนช่วยขึ้นของหากจำเป็น"
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
      tone="muted"
      :items="includedItems"
    />

    <CoreContacts
      compact
      page="services/truck"
      location="content"
      :name="t('trucks.seo.title')"
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

    <ServiceProjects service="truck" />

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
      :name="t('trucks.seo.title')"
    />

    <CoreFloatingContact
      page="services/truck"
      :name="t('trucks.seo.title')"
    />
  </UPage>
</template>
