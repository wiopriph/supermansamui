import type { ServiceKey } from '~/constants/services';


export type EquipmentCategory = 'excavator' | 'truck' | 'tractor';

export type EquipmentSpecs = {
  // Excavator
  operatingWeight?: string;
  bucketCapacity?: string;
  maxDigDepth?: string;
  maxReach?: string;
  enginePower?: string;
  tailSwing?: string;
  trackWidth?: string;
  // Truck
  payload?: string;
  bodyVolume?: string;
  gvw?: string;
  axles?: string;
  bodyDimensions?: string;
  bodyType?: string;
  // Tractor
  bladeWidth?: string;
  mowerWidth?: string;
  drivetrain?: string;
  pto?: string;
};

export type EquipmentPrices = {
  hour?: number;
  shift: number;
  trip?: number;
};

export type EquipmentLocale = {
  type: string;
  summary: string;
  description: string;
  features: string[];
};

export type Equipment = {
  id: string;
  category: EquipmentCategory;
  name: string;
  image: string;
  gallery: string[];
  prices: EquipmentPrices;
  specs: EquipmentSpecs;
  services: ServiceKey[];
  i18n: {
    en: EquipmentLocale;
    ru: EquipmentLocale;
    th: EquipmentLocale;
  };
};


export const EQUIPMENT: Equipment[] = [

  // ─── Excavators ─────────────────────────────────────────────────────────────

  {
    id: 'komatsu-pc30-7',
    category: 'excavator',
    name: 'Komatsu PC30-7',
    image: '/images/equipment/excavators/komatsu-pc30-7.webp',
    gallery: ['/images/equipment/excavators/komatsu-pc30-7.webp'],
    prices: { hour: 1000, shift: 8000 },
    specs: {
      operatingWeight: '3 100 kg',
      bucketCapacity: '0.09 m³',
      maxDigDepth: '3 140 mm',
      maxReach: '5 490 mm',
      enginePower: '18.5 kW / 25 hp',
      tailSwing: 'Conventional',
      trackWidth: '1 680 mm',
    },
    services: ['excavator', 'earthworks', 'land-clearing', 'drainage', 'site-preparation'],
    i18n: {
      en: {
        type: 'Mini excavator · 3 t',
        summary: 'Compact excavator for trenches, drainage and small garden earthworks.',
        description: 'A compact excavator for trenches, drainage and small earthworks in gardens and developed plots. An option for excavating a specific area, moving soil or working where access is limited. Before delivery, we check passage width and turning space: working near fences or walls still requires clearance around the machine.',
        features: [
          'Compact format for gardens and small plots',
          'Trenching for pipes and drainage',
          'Local excavation and soil handling',
          'Selected to suit access width and working space',
        ],
      },
      ru: {
        type: 'Мини-экскаватор · 3 т',
        summary: 'Компактный экскаватор для траншей, дренажа и небольших работ во дворе.',
        description: 'Компактный экскаватор для траншей, дренажа и небольших земляных работ во дворах и на застроенных участках. Подойдёт, когда нужно выкопать отдельную зону, переместить грунт или работать при ограниченном подъезде. Перед выездом проверим ширину прохода и место для поворота машины: рядом с забором или стеной важен запас пространства для работы.',
        features: [
          'Компактный формат для дворов и небольших участков',
          'Траншеи под трубы и водоотвод',
          'Локальная выемка и перемещение грунта',
          'Подбор по ширине подъезда и рабочей зоне',
        ],
      },
      th: {
        type: 'รถขุดขนาดเล็ก · 3 ตัน',
        summary: 'รถขุดขนาดเล็กสำหรับขุดร่อง ระบายน้ำ และงานดินในสวน',
        description: 'รถขุดขนาดเล็กสำหรับขุดร่อง งานระบายน้ำ และงานดินในสวนหรือพื้นที่ที่มีสิ่งปลูกสร้าง เหมาะกับการขุดเฉพาะจุด เคลื่อนย้ายดิน หรืองานที่มีทางเข้าจำกัด ก่อนนำรถเข้าจะตรวจความกว้างทางผ่านและพื้นที่หมุนตัว เพราะงานใกล้รั้วหรือกำแพงยังต้องมีระยะเผื่อรอบเครื่องจักร',
        features: [
          'ขนาดกะทัดรัดสำหรับสวนและที่ดินแปลงเล็ก',
          'ขุดร่องสำหรับท่อและทางระบายน้ำ',
          'ขุดเฉพาะจุดและเคลื่อนย้ายดิน',
          'เลือกใช้ตามความกว้างทางเข้าและพื้นที่ทำงาน',
        ],
      },
    },
  },

  {
    id: 'yanmar-b32',
    category: 'excavator',
    name: 'Yanmar B32',
    image: '/images/equipment/excavators/yanmar-b32.webp',
    gallery: ['/images/equipment/excavators/yanmar-b32.webp'],
    prices: { hour: 1000, shift: 8000 },
    specs: {
      operatingWeight: '3 200 kg',
      bucketCapacity: '0.10 m³',
      maxDigDepth: '3 300 mm',
      maxReach: '5 600 mm',
      enginePower: '20 kW / 27 hp',
      tailSwing: 'Conventional',
      trackWidth: '1 700 mm',
    },
    services: ['excavator', 'earthworks', 'land-clearing', 'drainage', 'site-preparation'],
    i18n: {
      en: {
        type: 'Mini excavator · 3 t',
        summary: 'Mini excavator for local digging and small plot preparation.',
        description: 'A mini excavator for small plots, gardens and local work around existing buildings. It can dig trenches, move soil and prepare individual areas for the next stage of a project. We match it to excavation dimensions, access and space for stockpiling soil. A practical option when the job centres on a small working area rather than bulk earthmoving.',
        features: [
          'Small residential and commercial plots',
          'Trenches and individual excavations',
          'Moving soil within the work area',
          'Preparation of selected areas on site',
        ],
      },
      ru: {
        type: 'Мини-экскаватор · 3 т',
        summary: 'Мини-экскаватор для локальной выемки грунта и подготовки небольших участков.',
        description: 'Мини-экскаватор для небольших участков, дворов и локальных работ рядом с существующей застройкой. Можно использовать для копки траншей, уборки грунта и подготовки отдельных зон под дальнейшие работы. Подберём машину с учётом размеров выемки, подъезда и места для складирования грунта. Подходит для задач, где важнее работать на небольшой площади, чем перемещать большие объёмы.',
        features: [
          'Небольшие жилые и коммерческие участки',
          'Копка траншей и отдельных выемок',
          'Перемещение грунта в пределах рабочей зоны',
          'Подготовка отдельных участков территории',
        ],
      },
      th: {
        type: 'รถขุดขนาดเล็ก · 3 ตัน',
        summary: 'รถขุดขนาดเล็กสำหรับขุดเฉพาะจุดและเตรียมที่ดินแปลงเล็ก',
        description: 'รถขุดขนาดเล็กสำหรับที่ดินแปลงเล็ก สวน และงานเฉพาะจุดใกล้อาคารเดิม ใช้ขุดร่อง เคลื่อนย้ายดิน และเตรียมพื้นที่บางส่วนสำหรับงานขั้นถัดไป เราเลือกใช้โดยดูขนาดหลุม ทางเข้ารถ และจุดกองดิน เหมาะกับงานที่เน้นพื้นที่ทำงานขนาดเล็กมากกว่าการขนย้ายดินปริมาณมาก',
        features: [
          'พื้นที่บ้านและโครงการขนาดเล็ก',
          'ขุดร่องและหลุมเฉพาะจุด',
          'เคลื่อนย้ายดินภายในพื้นที่ทำงาน',
          'เตรียมพื้นที่เฉพาะส่วนของไซต์',
        ],
      },
    },
  },

  {
    id: 'caterpillar-305cr',
    category: 'excavator',
    name: 'Caterpillar 305CR',
    image: '/images/equipment/excavators/cat-305cr.webp',
    gallery: ['/images/equipment/excavators/cat-305cr.webp'],
    prices: { hour: 1200, shift: 9600 },
    specs: {
      operatingWeight: '5 760 kg',
      bucketCapacity: '0.18 m³',
      maxDigDepth: '3 430 mm',
      maxReach: '6 290 mm',
      enginePower: '33.5 kW / 45 hp',
      tailSwing: 'Compact radius',
      trackWidth: '1 990 mm',
    },
    services: ['excavator', 'earthworks', 'land-clearing', 'land-leveling', 'drainage', 'site-preparation'],
    i18n: {
      en: {
        type: 'Compact excavator · 5.7 t',
        summary: 'Versatile excavator for trenches, small excavations and soil loading.',
        description: 'An excavator for trenches, small building excavations, soil loading and grading. A practical choice for house or villa projects that need several operations from one machine. The reduced tail swing radius is useful where working space is limited. We confirm breaker availability and other required attachments when discussing the job.',
        features: [
          'Reduced tail swing radius',
          'Excavation, soil loading and grading',
          'Foundation excavation to the project plan',
          'Attachments agreed to suit the job',
        ],
      },
      ru: {
        type: 'Компактный экскаватор · 5,7 т',
        summary: 'Универсальный экскаватор для траншей, небольших котлованов и погрузки грунта.',
        description: 'Экскаватор для траншей, небольших котлованов, погрузки грунта и планировки участка. Подойдёт для работ под дом или виллу, где нужны разные операции одной машиной. Уменьшенный радиус поворота задней части удобен при ограниченной рабочей зоне. Возможность работы с гидромолотом и нужное навесное оборудование уточним при обсуждении задачи.',
        features: [
          'Уменьшенный радиус поворота задней части',
          'Копка, погрузка грунта и планировка',
          'Подготовка выемок под фундамент по проекту',
          'Навесное оборудование согласуется под задачу',
        ],
      },
      th: {
        type: 'รถขุดขนาดกะทัดรัด · 5.7 ตัน',
        summary: 'รถขุดสำหรับขุดร่อง ขุดหลุมขนาดเล็ก และตักดินขึ้นรถ',
        description: 'รถขุดสำหรับขุดร่อง ขุดหลุมอาคารขนาดเล็ก ตักดินขึ้นรถ และปรับพื้นที่ เหมาะกับโครงการบ้านหรือวิลล่าที่ต้องทำหลายงานด้วยรถคันเดียว รัศมีการหมุนส่วนท้ายที่สั้นช่วยในการทำงานที่มีพื้นที่จำกัด หากต้องใช้หัวเจาะกระแทกหรืออุปกรณ์เสริมอื่น เราจะยืนยันอุปกรณ์ที่ใช้ได้เมื่อพูดคุยรายละเอียดงาน',
        features: [
          'รัศมีการหมุนส่วนท้ายสั้น',
          'ขุดดิน ตักดินขึ้นรถ และปรับพื้นที่',
          'ขุดพื้นที่ฐานรากตามแบบโครงการ',
          'ตกลงอุปกรณ์เสริมให้เหมาะกับงาน',
        ],
      },
    },
  },

  {
    id: 'yanmar-vio70',
    category: 'excavator',
    name: 'Yanmar ViO70',
    image: '/images/equipment/excavators/yanmar-vio70.webp',
    gallery: ['/images/equipment/excavators/yanmar-vio70.webp'],
    prices: { hour: 1500, shift: 12000 },
    specs: {
      operatingWeight: '7 530 kg',
      bucketCapacity: '0.28 m³',
      maxDigDepth: '4 670 mm',
      maxReach: '7 400 mm',
      enginePower: '42.4 kW / 57 hp',
      tailSwing: 'Zero tail swing',
      trackWidth: '2 190 mm',
    },
    services: ['excavator', 'earthworks', 'land-clearing', 'land-leveling', 'drainage', 'site-preparation'],
    i18n: {
      en: {
        type: 'Zero tail swing excavator · 7.5 t',
        summary: 'Zero tail swing excavator for excavation, trenching and site preparation.',
        description: 'An excavator for building excavations, trenches, soil loading and site preparation. Its zero tail swing design is useful where a road, fence or nearby building limits turning space. We select it according to the depth and volume of the job. Attachments and site conditions for demolition or rock work are discussed separately.',
        features: [
          'Zero tail swing design',
          'Building excavations and trenches to specified dimensions',
          'Soil loading and work area preparation',
          'Breaker and other attachments by arrangement',
        ],
      },
      ru: {
        type: 'Экскаватор без хвостового свеса · 7,5 т',
        summary: 'Экскаватор без хвостового свеса для котлованов, траншей и подготовки площадок.',
        description: 'Экскаватор для котлованов, траншей, погрузки грунта и подготовки строительных площадок. Конструкция без хвостового свеса удобна там, где место для поворота ограничено дорогой, забором или соседней застройкой. Машину выбираем с учётом требуемой глубины и объёма работ. Для демонтажа или работы с камнем отдельно согласуем навесное оборудование и условия на объекте.',
        features: [
          'Конструкция без хвостового свеса',
          'Котлованы и траншеи под проектные размеры',
          'Погрузка грунта и подготовка площадок',
          'Гидромолот и другое навесное — по согласованию',
        ],
      },
      th: {
        type: 'รถขุดแบบไม่มีท้ายยื่น · 7.5 ตัน',
        summary: 'รถขุดแบบไม่มีท้ายยื่นสำหรับขุดหลุม ขุดร่อง และเตรียมพื้นที่',
        description: 'รถขุดสำหรับขุดหลุมอาคาร ขุดร่อง ตักดินขึ้นรถ และเตรียมไซต์ก่อสร้าง ตัวรถแบบไม่มีท้ายยื่นเหมาะเมื่อพื้นที่หมุนตัวถูกจำกัดด้วยถนน รั้ว หรืออาคารข้างเคียง เราเลือกใช้ตามความลึกและปริมาณงาน หากเป็นงานรื้อถอนหรืองานหิน จะตกลงอุปกรณ์เสริมและเงื่อนไขหน้างานแยกต่างหาก',
        features: [
          'ตัวรถแบบไม่มีท้ายยื่น',
          'ขุดหลุมอาคารและร่องตามขนาดที่กำหนด',
          'ตักดินขึ้นรถและเตรียมพื้นที่ทำงาน',
          'หัวเจาะกระแทกและอุปกรณ์เสริมตามที่ตกลง',
        ],
      },
    },
  },

  {
    id: 'komatsu-pc128us',
    category: 'excavator',
    name: 'Komatsu PC128US',
    image: '/images/equipment/excavators/komatsu-pc128us.webp',
    gallery: ['/images/equipment/excavators/komatsu-pc128us.webp'],
    prices: { hour: 2200, shift: 17600 },
    specs: {
      operatingWeight: '13 200 kg',
      bucketCapacity: '0.50 m³',
      maxDigDepth: '5 450 mm',
      maxReach: '8 720 mm',
      enginePower: '64 kW / 86 hp',
      tailSwing: 'Short tail swing',
      trackWidth: '2 690 mm',
    },
    services: ['excavator', 'earthworks', 'land-leveling', 'site-preparation'],
    i18n: {
      en: {
        type: 'Short tail swing excavator · 13 t',
        summary: 'Excavator for large excavations, bulk earthmoving and dump truck loading.',
        description: 'An excavator for building excavations, bulk earthmoving and loading dump trucks. Suited to larger sites and excavation volumes that call for a heavier machine. Its short tail swing helps with work area planning near roads or plot boundaries. When removal is needed, we coordinate truck arrivals with excavation progress and the haul route.',
        features: [
          'Short tail swing design',
          'Large excavations and bulk soil handling',
          '0.5 m³ bucket for digging and loading',
          'Dump trucks coordinated with the work schedule',
        ],
      },
      ru: {
        type: 'Экскаватор с укороченным хвостовым свесом · 13 т',
        summary: 'Экскаватор для крупных котлованов, перемещения грунта и погрузки самосвалов.',
        description: 'Экскаватор для котлованов, перемещения больших объёмов грунта и погрузки самосвалов. Подойдёт для подготовки крупных площадок и работ, где объём выемки требует более тяжёлой машины. Укороченный хвостовой свес помогает организовать рабочую зону у дороги или границы участка. Если нужен вывоз, согласуем подачу самосвалов с темпом копки и маршрутом перевозки.',
        features: [
          'Укороченный хвостовой свес',
          'Крупные выемки и перемещение грунта',
          'Ковш 0,5 м³ для копки и погрузки',
          'Работа с самосвалами по согласованному графику',
        ],
      },
      th: {
        type: 'รถขุดแบบท้ายสั้น · 13 ตัน',
        summary: 'รถขุดสำหรับหลุมขนาดใหญ่ เคลื่อนย้ายดิน และตักขึ้นรถดั๊มพ์',
        description: 'รถขุดสำหรับขุดหลุมอาคาร เคลื่อนย้ายดินปริมาณมาก และตักดินขึ้นรถดั๊มพ์ เหมาะกับการเตรียมพื้นที่ขนาดใหญ่และงานขุดที่ต้องใช้เครื่องจักรหนักขึ้น ส่วนท้ายแบบสั้นช่วยในการจัดพื้นที่ทำงานริมถนนหรือแนวเขตที่ดิน หากต้องขนดินออก เราจะประสานรถดั๊มพ์ให้สอดคล้องกับงานขุดและเส้นทางขนส่ง',
        features: [
          'ตัวรถแบบท้ายสั้น',
          'ขุดพื้นที่ขนาดใหญ่และเคลื่อนย้ายดินปริมาณมาก',
          'บุ้งกี๋ 0.5 ม³ สำหรับขุดและตักขึ้นรถ',
          'ประสานรถดั๊มพ์ตามแผนงานที่ตกลง',
        ],
      },
    },
  },

  // ─── Trucks ──────────────────────────────────────────────────────────────────

  {
    id: 'isuzu-elf',
    category: 'truck',
    name: 'Isuzu ELF',
    image: '/images/equipment/trucks/isuzu_elf.webp',
    gallery: ['/images/equipment/trucks/isuzu_elf.webp'],
    prices: { trip: 800, shift: 3500 },
    specs: {
      payload: '3 t',
      bodyVolume: '3 m³',
      gvw: '5 500 kg',
      axles: '4×2',
      bodyType: 'Tipper / dump',
      bodyDimensions: '3 200 × 1 700 × 500 mm',
    },
    services: ['truck', 'earthworks', 'land-clearing', 'site-preparation'],
    i18n: {
      en: {
        type: 'Mini dump truck · 3 t',
        summary: 'Small dump truck for material deliveries and soil removal from private plots.',
        description: 'A small dump truck for material deliveries and removing soil or vegetation debris from private plots. Worth considering when the load is modest and access involves a narrow road or driveway. We check the route and unloading area before confirming access. Load size and trip numbers depend on both the weight and volume of the material.',
        features: [
          'Small material deliveries',
          'Soil and vegetation debris removal',
          'Tipper body for loose materials',
          'An option for sites with restricted access',
        ],
      },
      ru: {
        type: 'Мини-самосвал · 3 т',
        summary: 'Небольшой самосвал для доставки материалов и вывоза грунта с частных участков.',
        description: 'Небольшой самосвал для доставки материалов и вывоза грунта или растительных остатков с частных участков. Его стоит рассмотреть, если объём небольшой, а подъезд ограничен узкой дорогой или въездом во двор. Возможность заезда проверим по маршруту и месту разгрузки. Загрузку и количество рейсов рассчитаем с учётом массы и объёма материала.',
        features: [
          'Доставка небольших партий материалов',
          'Вывоз грунта и растительных остатков',
          'Самосвальный кузов для сыпучих грузов',
          'Вариант для участков с ограниченным подъездом',
        ],
      },
      th: {
        type: 'รถดั๊มพ์ขนาดเล็ก · 3 ตัน',
        summary: 'รถดั๊มพ์ขนาดเล็กสำหรับส่งวัสดุและขนดินออกจากที่ดินส่วนบุคคล',
        description: 'รถดั๊มพ์ขนาดเล็กสำหรับส่งวัสดุและขนดินหรือเศษพืชออกจากที่ดินส่วนบุคคล เป็นตัวเลือกเมื่องานมีปริมาณไม่มากและต้องผ่านถนนหรือทางเข้าบ้านที่แคบ เราจะตรวจเส้นทางและจุดลงวัสดุก่อนยืนยันการเข้าถึง ปริมาณบรรทุกและจำนวนเที่ยวคำนวณจากทั้งน้ำหนักและปริมาตรของวัสดุ',
        features: [
          'ส่งวัสดุครั้งละปริมาณไม่มาก',
          'ขนดินและเศษพืชออกจากพื้นที่',
          'กระบะดั๊มพ์สำหรับวัสดุเทกอง',
          'ตัวเลือกสำหรับพื้นที่ที่มีทางเข้าจำกัด',
        ],
      },
    },
  },

  {
    id: 'hino-300',
    category: 'truck',
    name: 'Hino 300',
    image: '/images/equipment/trucks/hino_300.webp',
    gallery: ['/images/equipment/trucks/hino_300.webp'],
    prices: { trip: 1500, shift: 5500 },
    specs: {
      payload: '5 t',
      bodyVolume: '5 m³',
      gvw: '8 300 kg',
      axles: '4×2',
      bodyType: 'Tipper / dump',
      bodyDimensions: '3 800 × 2 000 × 600 mm',
    },
    services: ['truck', 'earthworks', 'land-leveling', 'site-preparation'],
    i18n: {
      en: {
        type: 'Dump truck · 5 t',
        summary: 'Dump truck for sand, gravel and soil, available by trip or shift.',
        description: 'A dump truck for soil removal and deliveries of sand, gravel or fill. Suited to regular hauling during house construction, access work and land grading. Individual trips or shift rental can be arranged. Before booking, we confirm the material, route, loading arrangements and unloading point, which determine the load and transport cost.',
        features: [
          'Sand, gravel and soil deliveries',
          'Removal of excavated material',
          'Individual trips or shift rental',
          'Coordinated with excavator loading',
        ],
      },
      ru: {
        type: 'Самосвал · 5 т',
        summary: 'Самосвал для песка, щебня и грунта: разовые рейсы или работа на смену.',
        description: 'Самосвал для вывоза грунта и доставки песка, щебня или материала для отсыпки. Подойдёт для регулярных перевозок при строительстве дома, устройстве подъезда и планировке участка. Можно согласовать отдельные рейсы или работу на смену. Перед заказом уточним материал, маршрут, условия погрузки и место выгрузки — от них зависят загрузка и стоимость перевозки.',
        features: [
          'Доставка песка, щебня и грунта',
          'Вывоз материала после земляных работ',
          'Разовые рейсы или работа на смену',
          'Подача под погрузку экскаватором',
        ],
      },
      th: {
        type: 'รถดั๊มพ์ · 5 ตัน',
        summary: 'รถดั๊มพ์ขนทราย หิน และดิน เลือกงานรายเที่ยวหรือเป็นกะได้',
        description: 'รถดั๊มพ์สำหรับขนดินออกและส่งทราย หิน หรือวัสดุถม เหมาะกับงานขนส่งต่อเนื่องระหว่างสร้างบ้าน ทำทางเข้า และปรับที่ดิน เลือกตกลงเป็นรายเที่ยวหรือเหมาทำงานเป็นกะได้ ก่อนจองเราจะสอบถามชนิดวัสดุ เส้นทาง วิธีขึ้นของ และจุดลงวัสดุ ซึ่งมีผลต่อปริมาณบรรทุกและค่าขนส่ง',
        features: [
          'ส่งทราย หิน และดิน',
          'ขนวัสดุที่ได้จากงานขุดออก',
          'ตกลงงานรายเที่ยวหรือเป็นกะได้',
          'ประสานการตักขึ้นรถด้วยรถขุด',
        ],
      },
    },
  },

  {
    id: 'hino-ranger-4d',
    category: 'truck',
    name: 'Hino Ranger 4D',
    image: '/images/equipment/trucks/hino_ranger_4d.webp',
    gallery: ['/images/equipment/trucks/hino_ranger_4d.webp'],
    prices: { trip: 1800, shift: 6500 },
    specs: {
      payload: '8 t',
      bodyVolume: '9 m³',
      gvw: '14 000 kg',
      axles: '4×2',
      bodyType: 'Tipper / dump + crane',
      bodyDimensions: '4 500 × 2 200 × 900 mm',
    },
    services: ['truck', 'earthworks', 'land-leveling', 'site-preparation'],
    i18n: {
      en: {
        type: 'Dump truck with crane · 8 t',
        summary: 'Dump truck with crane for material hauling and unloading pipes, blocks and equipment.',
        description: 'A truck with a tipper body and a cab-mounted crane for materials and items that need mechanical unloading. An option for pipes, blocks and equipment when their weight and dimensions suit the vehicle. Before booking, we check individual item weights, the distance to the placement point and site conditions. Crane lifting capacity is checked separately from the truck payload.',
        features: [
          'Tipper body and crane on one vehicle',
          'Bulk materials and individual cargo items',
          'Crane loading and unloading by arrangement',
          'Selected by load weight and required reach',
        ],
      },
      ru: {
        type: 'Самосвал с краном · 8 т',
        summary: 'Самосвал с краном для перевозки материалов и разгрузки труб, блоков и оборудования.',
        description: 'Грузовик с самосвальным кузовом и краном за кабиной для перевозки материалов и грузов, которым нужна механизированная разгрузка. Можно рассмотреть для доставки труб, блоков и оборудования, если их вес и размеры подходят машине. Перед заказом уточним массу каждого предмета, расстояние от машины до места установки и условия площадки. Возможность подъёма проверяется отдельно от грузоподъёмности самого грузовика.',
        features: [
          'Самосвальный кузов и кран на одной машине',
          'Перевозка материалов и штучных грузов',
          'Погрузка и разгрузка краном по согласованию',
          'Подбор по массе груза и требуемому вылету',
        ],
      },
      th: {
        type: 'รถดั๊มพ์พร้อมเครน · 8 ตัน',
        summary: 'รถดั๊มพ์พร้อมเครนสำหรับขนวัสดุและยกท่อ บล็อก หรืออุปกรณ์ลง',
        description: 'รถบรรทุกกระบะดั๊มพ์พร้อมเครนหลังห้องคนขับ สำหรับวัสดุและสินค้าที่ต้องใช้เครื่องจักรช่วยขนลง เป็นตัวเลือกสำหรับท่อ บล็อก และอุปกรณ์ที่มีน้ำหนักและขนาดเหมาะกับรถ ก่อนจองต้องทราบน้ำหนักแต่ละชิ้น ระยะจากรถถึงจุดวาง และสภาพพื้นที่ ความสามารถในการยกของเครนต้องตรวจแยกจากน้ำหนักบรรทุกของรถ',
        features: [
          'กระบะดั๊มพ์และเครนในรถคันเดียว',
          'ขนวัสดุเทกองและสินค้ารายชิ้น',
          'ขึ้นและลงของด้วยเครนตามที่ตกลง',
          'เลือกใช้ตามน้ำหนักของและระยะยกที่ต้องการ',
        ],
      },
    },
  },

  {
    id: 'hino-super-fm18',
    category: 'truck',
    name: 'Hino Super FM18',
    image: '/images/equipment/trucks/hino_super_fm18.webp',
    gallery: ['/images/equipment/trucks/hino_super_fm18.webp'],
    prices: { trip: 3000, shift: 10000 },
    specs: {
      payload: '15 t',
      bodyVolume: '18 m³',
      gvw: '25 000 kg',
      axles: '6×4',
      bodyType: 'Tipper / dump',
      bodyDimensions: '5 800 × 2 400 × 1 200 mm',
    },
    services: ['truck', 'earthworks', 'land-leveling', 'site-preparation'],
    i18n: {
      en: {
        type: 'Heavy dump truck · 15 t',
        summary: 'Large dump truck for site filling, road materials and bulk soil removal.',
        description: 'A large dump truck for site filling, road material deliveries and soil removal from high-volume excavations. Suited to sites with access and manoeuvring space for a heavy vehicle. We calculate loads according to the material and permitted weight, then coordinate trips with loading on site. The route, turning space and unloading conditions are checked before dispatch.',
        features: [
          'Large loads of loose materials',
          'Site filling and road projects',
          'Soil removal from building excavations',
          'Requires suitable access and manoeuvring space',
        ],
      },
      ru: {
        type: 'Тяжёлый самосвал · 15 т',
        summary: 'Крупный самосвал для отсыпки площадок, дорожных материалов и вывоза грунта.',
        description: 'Крупный самосвал для отсыпки площадок, доставки дорожных материалов и вывоза грунта при больших объёмах копки. Подойдёт для объектов, где есть подъезд и место для маневрирования тяжёлой машины. Объём загрузки рассчитываем по материалу и допустимой массе, а график рейсов согласуем с погрузкой на объекте. Перед подачей проверим маршрут, разворот и условия выгрузки.',
        features: [
          'Перевозка больших партий сыпучих материалов',
          'Отсыпка площадок и дорожные работы',
          'Вывоз грунта при разработке котлованов',
          'Требует подходящего подъезда и места для манёвра',
        ],
      },
      th: {
        type: 'รถดั๊มพ์ขนาดใหญ่ · 15 ตัน',
        summary: 'รถดั๊มพ์ขนาดใหญ่สำหรับถมพื้นที่ ส่งวัสดุทำถนน และขนดินออก',
        description: 'รถดั๊มพ์ขนาดใหญ่สำหรับถมพื้นที่ ส่งวัสดุทำถนน และขนดินจากงานขุดปริมาณมาก เหมาะกับไซต์ที่มีทางเข้าและพื้นที่ให้รถหนักเลี้ยวหรือกลับรถได้ เราคำนวณปริมาณบรรทุกตามชนิดวัสดุและน้ำหนักที่อนุญาต พร้อมจัดเที่ยวรถให้สัมพันธ์กับการตักขึ้นรถ ก่อนส่งรถจะตรวจเส้นทาง จุดกลับรถ และสภาพจุดเทวัสดุ',
        features: [
          'ขนวัสดุเทกองครั้งละปริมาณมาก',
          'งานถมพื้นที่และทำถนน',
          'ขนดินจากงานขุดหลุมอาคาร',
          'ต้องมีทางเข้าและพื้นที่เลี้ยวที่เหมาะสม',
        ],
      },
    },
  },

  {
    id: 'nissan-cwa12m',
    category: 'truck',
    name: 'Nissan CWA12M',
    image: '/images/equipment/trucks/nissan_cwa12m.webp',
    gallery: ['/images/equipment/trucks/nissan_cwa12m.webp'],
    prices: { trip: 2500, shift: 8000 },
    specs: {
      payload: '10 t',
      gvw: '20 000 kg',
      axles: '6×4',
      bodyType: 'Flatbed / lowbed',
      bodyDimensions: '5 800 × 2 400 mm',
    },
    services: ['truck', 'excavator', 'site-preparation'],
    i18n: {
      en: {
        type: 'Machinery transport truck · 10 t',
        summary: 'Platform truck for moving excavators and equipment between sites.',
        description: 'An open-platform truck for moving machinery and equipment between sites on Koh Samui. It can carry excavators, generators and other loads that fit within its weight and size limits. Before the trip, we confirm dimensions, weight, loading method and securing points. We also agree on the route and access, particularly where there are gradients, tight turns or height restrictions.',
        features: [
          'Open platform for machinery and equipment',
          'Transport between the base and job sites',
          'Selected to match cargo weight and dimensions',
          'Loading, securing and route agreed in advance',
        ],
      },
      ru: {
        type: 'Грузовик для перевозки техники · 10 т',
        summary: 'Грузовик с платформой для перевозки экскаваторов и оборудования между объектами.',
        description: 'Грузовик с открытой платформой для перевозки техники и оборудования между объектами на Самуи. Можно использовать для экскаваторов, генераторов и других грузов, которые подходят по массе и габаритам. Перед рейсом уточним размеры, вес, способ погрузки и точки крепления. Маршрут и подъезд согласуем отдельно, особенно если на пути есть уклоны, узкие повороты или ограничения по высоте.',
        features: [
          'Открытая платформа для техники и оборудования',
          'Перевозки между базой и рабочими объектами',
          'Подбор по массе и габаритам груза',
          'Погрузка, крепление и маршрут согласуются заранее',
        ],
      },
      th: {
        type: 'รถบรรทุกขนย้ายเครื่องจักร · 10 ตัน',
        summary: 'รถบรรทุกพื้นเรียบสำหรับขนย้ายรถขุดและอุปกรณ์ระหว่างไซต์',
        description: 'รถบรรทุกพื้นเรียบสำหรับขนย้ายเครื่องจักรและอุปกรณ์ระหว่างไซต์บนเกาะสมุย ใช้ขนรถขุด เครื่องกำเนิดไฟฟ้า และของอื่นที่มีน้ำหนักและขนาดอยู่ในขีดจำกัดของรถ ก่อนเดินทางจะยืนยันขนาด น้ำหนัก วิธีขึ้นรถ และจุดยึดตรึง พร้อมตกลงเส้นทางและทางเข้า โดยเฉพาะจุดที่ลาดชัน เลี้ยวแคบ หรือมีข้อจำกัดความสูง',
        features: [
          'พื้นเรียบสำหรับเครื่องจักรและอุปกรณ์',
          'ขนย้ายระหว่างฐานรถและไซต์งาน',
          'เลือกใช้ตามน้ำหนักและขนาดของสินค้า',
          'ตกลงการขึ้นรถ ยึดตรึง และเส้นทางล่วงหน้า',
        ],
      },
    },
  },

  {
    id: 'deva-hercules',
    category: 'truck',
    name: 'Deva Hercules',
    image: '/images/equipment/trucks/deva_hercules.webp',
    gallery: ['/images/equipment/trucks/deva_hercules.webp'],
    prices: { trip: 700, shift: 3000 },
    specs: {
      payload: '2 t',
      gvw: '3 500 kg',
      axles: '4×2',
      bodyType: 'Enclosed cage body with roof',
      bodyDimensions: '2 800 × 1 600 × 1 400 mm',
    },
    services: ['truck', 'land-clearing', 'earthworks'],
    i18n: {
      en: {
        type: 'Light cargo truck · 2 t',
        summary: 'Compact truck with a roof for bags, boxes, furniture and mixed cargo.',
        description: 'A compact truck with cage sides and a roof for bags, boxes, furniture and other individual items. Suited to small deliveries to plots, shops and job sites. Before the trip, we confirm cargo dimensions and weight, access and loading arrangements. Packaging, rain covers and securing are agreed according to the goods being carried.',
        features: [
          'Cage sides with a roof over the load area',
          'Bags, boxes, furniture and mixed cargo',
          'Small deliveries to plots and job sites',
          'Loading arrangements and cargo covers by agreement',
        ],
      },
      ru: {
        type: 'Малотоннажный грузовик · 2 т',
        summary: 'Компактный грузовик с крышей для мешков, коробок, мебели и сборных грузов.',
        description: 'Компактный грузовик с решётчатыми бортами и крышей для мешков, коробок, мебели и других штучных грузов. Подойдёт для небольших доставок на участки, в магазины или на рабочие объекты. Перед рейсом уточним размеры и массу груза, условия подъезда и способ погрузки. Упаковку, укрытие от дождя и крепление согласуем с учётом того, что нужно перевезти.',
        features: [
          'Решётчатые борта и крыша над кузовом',
          'Мешки, коробки, мебель и сборные грузы',
          'Небольшие доставки на участки и объекты',
          'Условия погрузки и укрытие груза — по согласованию',
        ],
      },
      th: {
        type: 'รถบรรทุกสินค้าขนาดเล็ก · 2 ตัน',
        summary: 'รถบรรทุกขนาดเล็กมีหลังคา สำหรับกระสอบ กล่อง เฟอร์นิเจอร์ และสินค้ารวม',
        description: 'รถบรรทุกขนาดเล็กที่มีกระบะคอกและหลังคา สำหรับกระสอบ กล่อง เฟอร์นิเจอร์ และสินค้ารายชิ้น เหมาะกับการส่งของปริมาณไม่มากไปยังที่ดิน ร้านค้า หรือไซต์งาน ก่อนเดินทางจะสอบถามขนาดและน้ำหนักสินค้า ทางเข้า และวิธีขึ้นของ ส่วนบรรจุภัณฑ์ ผ้าคลุมกันฝน และการยึดตรึงจะตกลงให้เหมาะกับของที่ขน',
        features: [
          'กระบะคอกพร้อมหลังคา',
          'กระสอบ กล่อง เฟอร์นิเจอร์ และสินค้ารวม',
          'ส่งของปริมาณไม่มากไปยังพื้นที่และไซต์งาน',
          'ตกลงวิธีขึ้นของและการคลุมสินค้าล่วงหน้า',
        ],
      },
    },
  },

  // ─── Tractors ─────────────────────────────────────────────────────────────────

  {
    id: 'kubota-l3608',
    category: 'tractor',
    name: 'Kubota L3608',
    image: '/images/equipment/tractors/kubota-l3608.webp',
    gallery: ['/images/equipment/tractors/kubota-l3608.webp'],
    prices: { hour: 1500, shift: 12000 },
    specs: {
      operatingWeight: '1 600 kg',
      enginePower: '35.5 kW / 36 hp',
      drivetrain: '4WD',
      bladeWidth: '1 800 mm',
      mowerWidth: '1 500 mm',
      pto: 'Rear PTO',
    },
    services: ['land-clearing', 'land-leveling', 'earthworks', 'site-preparation'],
    i18n: {
      en: {
        type: 'Utility tractor · 36 hp',
        summary: 'Tractor with blade and mower for grass cutting, soil spreading and initial grading.',
        description: 'A compact tractor with a front blade and rear rotary mower for plot maintenance and light earthworks. The mower handles grass and light vegetation, while the blade spreads soil and carries out initial grading. Useful when a site needs both mowing and surface work. Before dispatch, we assess vegetation, terrain and ground conditions to agree on a suitable scope.',
        features: [
          'Front blade for moving and spreading soil',
          'Rotary mower for grass and light vegetation',
          '4WD drivetrain',
          'Plot maintenance and initial grading',
          'Mowing and light earthworks with one machine',
        ],
      },
      ru: {
        type: 'Универсальный трактор · 36 л.с.',
        summary: 'Трактор с отвалом и косилкой для покоса, распределения грунта и планировки.',
        description: 'Компактный трактор с передним отвалом и задней роторной косилкой для ухода за участком и лёгких земляных работ. Косилка подходит для травы и лёгкой растительности, а отвал — для распределения грунта и предварительной планировки. Удобен, когда на одном участке нужно совместить покос и работу с поверхностью. Перед выездом оценим растительность, рельеф и состояние грунта, чтобы подобрать подходящий объём работ.',
        features: [
          'Передний отвал для перемещения и распределения грунта',
          'Роторная косилка для травы и лёгкой растительности',
          'Полный привод 4WD',
          'Уход за участком и предварительная планировка',
          'Покос и лёгкие земляные работы одной машиной',
        ],
      },
      th: {
        type: 'รถแทรกเตอร์อเนกประสงค์ · 36 แรงม้า',
        summary: 'รถแทรกเตอร์พร้อมใบมีดและเครื่องตัดหญ้า สำหรับตัดหญ้า เกลี่ยดิน และปรับพื้นที่',
        description: 'รถแทรกเตอร์ขนาดกะทัดรัดพร้อมใบมีดหน้าและเครื่องตัดหญ้าโรตารี่ด้านหลัง สำหรับดูแลที่ดินและงานดินเบา เครื่องตัดใช้กับหญ้าและพืชขนาดเล็ก ส่วนใบมีดใช้เกลี่ยดินและปรับพื้นที่เบื้องต้น เหมาะเมื่อต้องตัดหญ้าและจัดผิวดินในแปลงเดียวกัน ก่อนส่งรถเราจะประเมินพืช ระดับพื้นที่ และสภาพดินเพื่อกำหนดงานที่เหมาะสม',
        features: [
          'ใบมีดหน้าสำหรับดันและเกลี่ยดิน',
          'เครื่องตัดหญ้าโรตารี่สำหรับหญ้าและพืชขนาดเล็ก',
          'ระบบขับเคลื่อน 4WD',
          'ดูแลที่ดินและปรับพื้นที่เบื้องต้น',
          'ตัดหญ้าและทำงานดินเบาด้วยรถคันเดียว',
        ],
      },
    },
  },
];


// ─── Lookup helpers ──────────────────────────────────────────────────────────

export const EQUIPMENT_BY_ID = Object.fromEntries(
  EQUIPMENT.map(item => [item.id, item]),
) as Record<string, Equipment>;

export function getEquipmentById(id: string): Equipment | undefined {
  return EQUIPMENT_BY_ID[id];
}

export function getEquipmentByCategory(category: EquipmentCategory): Equipment[] {
  return EQUIPMENT.filter(item => item.category === category);
}

export function getEquipmentByService(service: string): Equipment[] {
  return EQUIPMENT.filter(item => item.services.includes(service as ServiceKey));
}
