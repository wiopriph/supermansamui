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
        summary: 'Compact 3-tonne excavator for work in tight spaces, near fences, walls and existing structures.',
        features: [
          'Fits through standard gate openings',
          'Low ground pressure — suitable for soft soil',
          'Ideal for trenching and drainage work',
          'Minimal disturbance to surrounding area',
        ],
      },
      ru: {
        type: 'Мини-экскаватор · 3 т',
        summary: 'Компактный 3-тонный экскаватор для работы в ограниченном пространстве, вблизи заборов, стен и готовых конструкций.',
        features: [
          'Проходит через стандартные ворота',
          'Малое давление на грунт — подходит для мягкой почвы',
          'Идеален для траншей и дренажа',
          'Минимальное воздействие на окружающий участок',
        ],
      },
      th: {
        type: 'มินิเอ็กซ์คาเวเตอร์ · 3 ตัน',
        summary: 'รถขุดขนาดเล็ก 3 ตัน สำหรับงานในพื้นที่แคบ ใกล้รั้ว กำแพง หรือโครงสร้างที่มีอยู่',
        features: [
          'ผ่านประตูมาตรฐานได้',
          'แรงกดพื้นต่ำ — เหมาะกับดินอ่อน',
          'เหมาะสำหรับขุดร่องและงานระบายน้ำ',
          'กระทบต่อพื้นที่โดยรอบน้อยที่สุด',
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
        summary: 'Reliable 3-tonne mini excavator for yard work, narrow access sites and work close to walls or fences.',
        features: [
          'Good visibility from the cab',
          'Suitable for residential and small commercial plots',
          'Works well alongside other compact equipment',
          'Low transport cost',
        ],
      },
      ru: {
        type: 'Мини-экскаватор · 3 т',
        summary: 'Надёжный 3-тонный мини-экскаватор для работы во дворах, на узких участках и вблизи стен.',
        features: [
          'Хороший обзор из кабины',
          'Подходит для жилых и небольших коммерческих объектов',
          'Хорошо работает в паре с другой компактной техникой',
          'Низкие расходы на транспортировку',
        ],
      },
      th: {
        type: 'มินิเอ็กซ์คาเวเตอร์ · 3 ตัน',
        summary: 'มินิเอ็กซ์คาเวเตอร์ 3 ตัน สำหรับงานในสวน พื้นที่ทางเข้าแคบ และงานใกล้กำแพงหรือรั้ว',
        features: [
          'มองเห็นได้ดีจากห้องควบคุม',
          'เหมาะกับที่พักอาศัยและพื้นที่เชิงพาณิชย์ขนาดเล็ก',
          'ทำงานร่วมกับเครื่องจักรขนาดเล็กอื่นได้ดี',
          'ค่าขนส่งต่ำ',
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
        summary: 'Versatile 5-tonne excavator for general earthworks, trenching, soil loading and light demolition on Koh Samui sites.',
        features: [
          'Compact radius tail swing — safe to work in confined areas',
          'Higher breakout force than mini class',
          'Suitable for foundation prep and grading',
          'Compatible with hydraulic breaker attachment',
        ],
      },
      ru: {
        type: 'Компактный экскаватор · 5.7 т',
        summary: 'Универсальный 5-тонный экскаватор для земляных работ, траншей, погрузки грунта и лёгкого демонтажа.',
        features: [
          'Компактный хвостовой радиус — безопасная работа в ограниченных зонах',
          'Большее усилие отрыва по сравнению с мини-классом',
          'Подходит для подготовки фундамента и планировки',
          'Совместим с гидромолотом',
        ],
      },
      th: {
        type: 'รถขุดขนาดกะทัดรัด · 5.7 ตัน',
        summary: 'รถขุด 5 ตัน สำหรับงานดินทั่วไป ขุดร่อง ตักดิน และทุบรื้อเล็กน้อยบนเกาะสมุย',
        features: [
          'รัศมีหางหมุนสั้น — ปลอดภัยในพื้นที่แคบ',
          'แรงขุดสูงกว่าคลาสมินิ',
          'เหมาะกับการเตรียมฐานและปรับระดับ',
          'รองรับหัวทุบไฮดรอลิก',
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
        summary: 'Mid-large excavator with zero tail swing — digs deeper and handles heavier soil while staying safe in tight Samui sites.',
        features: [
          'Zero tail swing — no overhang behind the tracks',
          'Digs up to 4.6 m deep — suitable for deep drainage and foundations',
          'Handles hard clay, rock fill and heavy debris',
          'Compatible with hydraulic breaker and rock bucket',
        ],
      },
      ru: {
        type: 'Экскаватор без хвостового свеса · 7.5 т',
        summary: 'Средне-крупный экскаватор без хвостового свеса — копает глубже и работает с тяжёлым грунтом без риска столкновений.',
        features: [
          'Нет хвостового свеса за гусеницами',
          'Глубина копания до 4.6 м — подходит для глубокого дренажа и фундаментов',
          'Работает с твёрдой глиной, крупным обломочным материалом',
          'Совместим с гидромолотом и скальным ковшом',
        ],
      },
      th: {
        type: 'รถขุดซีโร่เทลสวิง · 7.5 ตัน',
        summary: 'รถขุดขนาดกลาง-ใหญ่ ซีโร่เทลสวิง ขุดลึกกว่าและรับน้ำหนักดินได้มากกว่า ปลอดภัยในพื้นที่แคบ',
        features: [
          'ไม่มีส่วนยื่นออกด้านหลังของแทร็ก',
          'ขุดลึกได้ถึง 4.6 ม. — เหมาะกับระบายน้ำลึกและฐานราก',
          'รับมือกับดินแข็ง หินถม และเศษวัสดุหนัก',
          'รองรับหัวทุบและถังหิน',
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
        summary: 'Powerful 13-tonne excavator for large earthmoving jobs, deep foundations and heavy-volume soil work on Koh Samui.',
        features: [
          'Short tail swing — practical for roadside and boundary work',
          'Digs up to 5.4 m — handles deep foundations and large drainage',
          '0.5 m³ bucket — moves significant volume per cycle',
          'Best matched with multiple dump trucks for high-output operations',
        ],
      },
      ru: {
        type: 'Экскаватор с коротким хвостом · 13 т',
        summary: 'Мощный 13-тонный экскаватор для крупных объёмов земляных работ, глубоких фундаментов и тяжёлых проектов.',
        features: [
          'Короткий хвостовой свес — удобен для работы у дорог и границ участка',
          'Копание до 5.4 м — для глубоких фундаментов и крупного дренажа',
          'Ковш 0.5 м³ — перемещает большой объём за один цикл',
          'Оптимально работает с несколькими самосвалами',
        ],
      },
      th: {
        type: 'รถขุดชอร์ตเทลสวิง · 13 ตัน',
        summary: 'รถขุดทรงพลัง 13 ตัน สำหรับงานขนดินขนาดใหญ่ ฐานรากลึก และงานดินปริมาณมาก',
        features: [
          'เทลสวิงสั้น — ใช้งานริมถนนและขอบแปลงได้',
          'ขุดลึกได้ถึง 5.4 ม. — สำหรับฐานรากลึกและระบายน้ำขนาดใหญ่',
          'ถัง 0.5 ม³ — ตักดินได้ปริมาณมากต่อรอบ',
          'ทำงานร่วมกับรถดั๊มพ์หลายคันได้ดีที่สุด',
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
        summary: 'Small dump truck for residential sites and narrow access roads where larger vehicles cannot enter.',
        features: [
          'Fits on narrow Samui sois and tight driveways',
          'Ideal for small soil volumes and garden waste',
          'Low weight — does not damage driveways or soft ground',
          'Quick turnaround for short hauls',
        ],
      },
      ru: {
        type: 'Мини-самосвал · 3 т',
        summary: 'Небольшой самосвал для жилых участков и узких подъездных дорог, куда крупная техника не проходит.',
        features: [
          'Проходит по узким дорогам и въездам Самуи',
          'Идеален для небольших объёмов грунта и растительного мусора',
          'Малый вес — не повреждает подъезды и мягкий грунт',
          'Быстрый оборот при коротких рейсах',
        ],
      },
      th: {
        type: 'มินิรถดั๊มพ์ · 3 ตัน',
        summary: 'รถดั๊มพ์ขนาดเล็กสำหรับที่พักอาศัยและถนนทางเข้าแคบที่รถใหญ่เข้าไม่ได้',
        features: [
          'เข้าซอยแคบและทางเข้าบ้านได้',
          'เหมาะกับดินปริมาณน้อยและเศษพืช',
          'น้ำหนักเบา — ไม่ทำลายทางเข้าหรือดินอ่อน',
          'รอบเที่ยวเร็วสำหรับระยะสั้น',
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
        type: 'Light dump truck · 5 t',
        summary: 'Reliable medium-light dump truck — the most common choice for earthworks, soil removal and material delivery on Samui.',
        features: [
          'Good access on most Samui roads and construction sites',
          '5 m³ body — efficient for standard earthwork volumes',
          'Pairs well with 3–5 tonne excavators',
          'Available for single trips and full-day hire',
        ],
      },
      ru: {
        type: 'Лёгкий самосвал · 5 т',
        summary: 'Надёжный средне-лёгкий самосвал — самый распространённый выбор для земляных работ и вывоза грунта на Самуи.',
        features: [
          'Хороший доступ по большинству дорог и стройплощадок Самуи',
          'Кузов 5 м³ — эффективен для стандартных объёмов земляных работ',
          'Хорошо работает в паре с экскаваторами 3–5 тонн',
          'Доступен для разовых рейсов и аренды на день',
        ],
      },
      th: {
        type: 'รถดั๊มพ์เบา · 5 ตัน',
        summary: 'รถดั๊มพ์ขนาดกลาง-เบา — ตัวเลือกยอดนิยมสำหรับงานดิน ขนดิน และส่งวัสดุบนเกาะสมุย',
        features: [
          'เข้าถึงได้บนถนนและไซต์ก่อสร้างส่วนใหญ่ของสมุย',
          'กระบะ 5 ม³ — เหมาะกับปริมาณงานดินมาตรฐาน',
          'ทำงานร่วมกับรถขุด 3–5 ตันได้ดี',
          'รับงานเที่ยวเดียวและเหมารายวัน',
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
        summary: 'Medium dump truck with a crane mounted behind the cab — hauls soil and also lifts heavy items like concrete blocks, pipes or equipment.',
        features: [
          'Crane behind the cab — lifts heavy items without a separate crane truck',
          '9 m³ tipper body — solid capacity for soil, gravel and fill',
          'Two machines in one: dump + crane on a single hire',
          'Useful for deliveries where unloading by hand is not practical',
        ],
      },
      ru: {
        type: 'Самосвал с краном · 8 т',
        summary: 'Самосвал среднего класса с краном за кабиной — возит грунт и при этом может поднять тяжёлые грузы: блоки, трубы, оборудование.',
        features: [
          'Кран за кабиной — поднимает тяжёлые грузы без отдельной крановой машины',
          'Кузов-самосвал 9 м³ — хорошая вместимость для грунта, гравия и засыпки',
          'Две функции в одном: самосвал + кран за одну аренду',
          'Удобен там, где разгрузка вручную невозможна или нерациональна',
        ],
      },
      th: {
        type: 'รถดั๊มพ์พร้อมเครน · 8 ตัน',
        summary: 'รถดั๊มพ์ขนาดกลางพร้อมเครนหลังห้องคนขับ — ขนดินและยกของหนักได้ในคันเดียว เช่น บล็อก ท่อ หรืออุปกรณ์',
        features: [
          'เครนหลังห้องคนขับ — ยกของหนักได้โดยไม่ต้องใช้รถเครนแยก',
          'กระบะดั๊มพ์ 9 ม³ — ความจุดีสำหรับดิน กรวด และวัสดุถม',
          'สองฟังก์ชันในคันเดียว: ดั๊มพ์ + เครนในราคาเดียว',
          'เหมาะเมื่อขนถ่ายด้วยมือไม่สะดวกหรือไม่ปลอดภัย',
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
        summary: 'Large 6×4 dump truck for high-volume earthworks — moves the most material per trip on open-access construction sites.',
        features: [
          '18 m³ body — maximum volume per trip on Samui',
          'Ideal for large fill projects, road base and bulk soil removal',
          'Requires good road access and turning space',
          'Best paired with the Komatsu PC128US excavator',
        ],
      },
      ru: {
        type: 'Тяжёлый самосвал · 15 т',
        summary: 'Крупный самосвал 6×4 для больших объёмов земляных работ — максимум материала за рейс на открытых площадках.',
        features: [
          'Кузов 18 м³ — максимальный объём за рейс на Самуи',
          'Идеален для крупных проектов отсыпки, дорожного основания и массового вывоза',
          'Требует хорошего подъезда и площадки для разворота',
          'Лучше всего сочетается с экскаватором Komatsu PC128US',
        ],
      },
      th: {
        type: 'รถดั๊มพ์หนัก · 15 ตัน',
        summary: 'รถดั๊มพ์ 6×4 ขนาดใหญ่ สำหรับงานดินปริมาณมาก — ขนวัสดุได้มากที่สุดต่อเที่ยวในไซต์ที่เข้าถึงได้',
        features: [
          'กระบะ 18 ม³ — ปริมาณสูงสุดต่อเที่ยวบนเกาะสมุย',
          'เหมาะกับโครงการถมดินขนาดใหญ่ ฐานถนน และขนดินจำนวนมาก',
          'ต้องการทางเข้าและพื้นที่กลับรถที่ดี',
          'เหมาะที่สุดกับรถขุด Komatsu PC128US',
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
        type: 'Heavy flatbed transporter · 10 t',
        summary: 'Heavy-duty flatbed truck for transporting excavators, generators and oversized equipment across Koh Samui.',
        features: [
          'Flatbed platform — loads excavators, generators, compressors and large machinery',
          '6×4 drivetrain — handles steep Samui slopes and rough site access',
          'Ramps included — safe loading and unloading of tracked equipment',
          'The go-to truck when your excavator needs to move between sites',
        ],
      },
      ru: {
        type: 'Тяжёлый платформенный транспортёр · 10 т',
        summary: 'Грузовик-платформа для перевозки экскаваторов, генераторов и крупногабаритного оборудования по Самуи.',
        features: [
          'Открытая платформа — перевозит экскаваторы, генераторы, компрессоры и тяжёлую технику',
          'Привод 6×4 — уверенно проходит крутые подъёмы и сложные подъезды Самуи',
          'Въездные трапы в комплекте — безопасная погрузка и выгрузка гусеничной техники',
          'Основной вариант, когда экскаватор нужно перебросить между объектами',
        ],
      },
      th: {
        type: 'รถบรรทุกแพลตฟอร์มหนัก · 10 ตัน',
        summary: 'รถบรรทุกแพลตฟอร์มสำหรับขนย้ายรถขุด เครื่องกำเนิดไฟฟ้า และอุปกรณ์หนักบนเกาะสมุย',
        features: [
          'แพลตฟอร์มเปิด — ขนรถขุด เครื่องกำเนิดไฟฟ้า คอมเพรสเซอร์ และเครื่องจักรหนัก',
          'ขับเคลื่อน 6×4 — ขึ้นเนินชันและทางเข้าไซต์ยากของสมุยได้',
          'มีแผ่นทางลาด — โหลดและขนถ่ายรถตีนตะขาบได้อย่างปลอดภัย',
          'ตัวเลือกหลักเมื่อต้องย้ายรถขุดระหว่างไซต์งาน',
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
        type: 'Enclosed cargo truck · 2 t',
        summary: 'Compact Thai-market truck with a lattice cage body and roof — used for bagged goods, furniture, coal sacks and general cargo on tight Samui roads.',
        features: [
          'Cage body with roof — protects cargo from rain and keeps loads secure',
          'Bench seats inside — can carry a small crew alongside the load',
          'Extremely compact — reaches sites where larger trucks cannot enter',
          'Good for bagged goods: coal, cement, soil bags, furniture, mixed cargo',
        ],
      },
      ru: {
        type: 'Малотоннажный грузовик · 2 т',
        summary: 'Компактный тайский грузовик с решётчатым кузовом и крышей — используется для мешков с углём, мебели, сыпучих грузов и любого штучного товара по узким дорогам Самуи.',
        features: [
          'Решётчатый кузов с крышей — защищает груз от дождя, ничего не выпадает',
          'Лавки внутри — можно перевезти небольшую бригаду вместе с грузом',
          'Очень компактный — проезжает туда, куда крупная техника не попадёт',
          'Подходит для мешков: уголь, цемент, мешки с грунтом, мебель, сборный груз',
        ],
      },
      th: {
        type: 'รถบรรทุกสินค้าขนาดเล็ก · 2 ตัน',
        summary: 'รถขนาดเล็กตลาดไทยพร้อมตัวถังกรงและหลังคา — ใช้ขนถ่านในกระสอบ เฟอร์นิเจอร์ สินค้าทั่วไปบนถนนแคบของสมุย',
        features: [
          'ตัวถังกรงพร้อมหลังคา — ป้องกันฝนและรักษาสินค้าไม่ให้ร่วง',
          'ม้านั่งด้านใน — ขนทีมงานพร้อมสินค้าได้',
          'ขนาดเล็กมาก — เข้าพื้นที่ที่รถใหญ่เข้าไม่ได้',
          'เหมาะกับสินค้าบรรจุกระสอบ: ถ่าน ปูน กระสอบดิน เฟอร์นิเจอร์ สินค้าเบ็ดเตล็ด',
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
        summary: 'Compact 4WD tractor with front dozer blade and rear rotary mower — handles land clearing, levelling and grass cutting in a single machine.',
        features: [
          'Front dozer blade — pushes soil, levels ground and clears light debris',
          'Rear rotary mower — cuts overgrown grass and light vegetation',
          '4WD traction on slopes and soft Samui soil',
          'Compact size — works on plots where heavy machinery cannot operate',
          'Cost-effective for mixed clearing + levelling jobs',
        ],
      },
      ru: {
        type: 'Универсальный трактор · 36 л.с.',
        summary: 'Компактный 4WD трактор с передним отвалом и задней роторной косилкой — расчистка, планировка и покос в одной машине.',
        features: [
          'Передний бульдозерный отвал — срезает грунт, разравнивает поверхность, убирает лёгкий мусор',
          'Задняя роторная косилка — скашивает высокую траву и лёгкую растительность',
          'Полный привод 4WD на склонах и мягком грунте Самуи',
          'Компактные габариты — работает там, где тяжёлая техника не проходит',
          'Выгоден для совмещения расчистки и планировки в одном выезде',
        ],
      },
      th: {
        type: 'แทรกเตอร์อเนกประสงค์ · 36 แรงม้า',
        summary: 'แทรกเตอร์ขนาดกะทัดรัด 4WD พร้อมใบมีดบุลโดเซอร์หน้าและเครื่องตัดหญ้าหลัง — ถาง ปรับระดับ และตัดหญ้าในเครื่องเดียว',
        features: [
          'ใบมีดบุลโดเซอร์หน้า — ดันดิน ปรับระดับ และเก็บเศษเบา',
          'เครื่องตัดหญ้าหลัง — ตัดหญ้าและพืชเบาที่รกร้าง',
          'ขับเคลื่อน 4WD บนลาดเชิงเขาและดินอ่อนของสมุย',
          'ขนาดกะทัดรัด — ทำงานในพื้นที่ที่เครื่องจักรหนักเข้าไม่ได้',
          'คุ้มค่าสำหรับงานถาง + ปรับระดับในเที่ยวเดียว',
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
