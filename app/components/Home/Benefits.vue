<script setup lang="ts">
const { t } = useI18n();

const benefits = [
  { key: 'consult', icon: 'i-lucide-phone-call' },
  { key: 'delivery', icon: 'i-lucide-calendar-clock' },
  { key: 'operators', icon: 'i-lucide-hard-hat' },
  { key: 'fuel', icon: 'i-lucide-fuel' },
  { key: 'condition', icon: 'i-lucide-wrench' },
  { key: 'payment', icon: 'i-lucide-credit-card' },
];
</script>

<i18n lang="json">
{
  "ru": {
    "benefits": {
      "badge": "Почему выбирают Superman Samui",
      "lead": "Берём на себя технику, доставку, расчёты и организацию работ - вы просто ставите задачу и получаете результат.",
      "items": {
        "consult": {
          "title": "Бесплатный выезд и оценка",
          "text": "Осматриваем участок, определяем объём работ и подбираем технику. Даём понятную смету без скрытых расходов."
        },
        "delivery": {
          "title": "Чёткая подача техники",
          "text": "Привозим экскаваторы и грузовики точно в назначенное время - без задержек и переносов."
        },
        "operators": {
          "title": "Профессиональные операторы",
          "text": "Опытные местные машинисты и водители, которые знают рельеф Самуи и работают аккуратно даже в стеснённых условиях."
        },
        "fuel": {
          "title": "Топливо уже включено",
          "text": "Мы сами заправляем и обслуживаем технику. Вы платите только за фактические часы работы."
        },
        "condition": {
          "title": "Надёжная и обслуженная техника",
          "text": "Проводим регулярное ТО и проверяем машины перед каждым выездом, чтобы работа проходила без простоев."
        },
        "payment": {
          "title": "Удобные способы оплаты",
          "text": "Принимаем наличные, переводы на тайский счёт и другие варианты - подберём удобный формат под вас."
        }
      }
    }
  },
  "en": {
    "benefits": {
      "badge": "Why clients choose Superman Samui",
      "lead": "We handle equipment, logistics and scheduling - you set the task, and we deliver a clean, reliable result.",
      "items": {
        "consult": {
          "title": "Free site visit & estimate",
          "text": "We inspect the site, assess the job and recommend the right equipment. Clear pricing with no hidden fees."
        },
        "delivery": {
          "title": "On-time equipment delivery",
          "text": "Excavators and trucks arrive exactly at the scheduled time - no delays or last-minute changes."
        },
        "operators": {
          "title": "Skilled and reliable operators",
          "text": "Experienced local operators who know Samui’s terrain and work safely even in tight or complex locations."
        },
        "fuel": {
          "title": "Fuel included",
          "text": "We take care of refuelling and maintenance. You pay only for rental hours - nothing extra on top."
        },
        "condition": {
          "title": "Well-maintained machines",
          "text": "Regular servicing and pre-job inspections help prevent breakdowns and downtime on your project."
        },
        "payment": {
          "title": "Flexible payment options",
          "text": "Cash, transfers to Thai bank accounts and other methods - we adapt to what works best for you."
        }
      }
    }
  },
  "th": {
    "benefits": {
      "badge": "ทำไมลูกค้าเลือก Superman Samui",
      "lead": "เราดูแลเรื่องเครื่องจักร การขนส่ง และการจัดตารางงานให้ครบ คุณเพียงบอกงานที่ต้องการ แล้วรอผลลัพธ์ที่เรียบร้อย.",
      "items": {
        "consult": {
          "title": "สำรวจหน้างานและประเมินราคาฟรี",
          "text": "ลงพื้นที่จริง ประเมินปริมาณงาน แนะนำเครื่องจักรที่เหมาะสม และแจ้งราคาคร่าว ๆ อย่างชัดเจน ไม่มีค่าใช้จ่ายแอบแฝง."
        },
        "delivery": {
          "title": "ส่งเครื่องจักรตรงเวลา",
          "text": "นำรถขุดหรือรถบรรทุกไปถึงไซต์งานตามเวลานัดเป๊ะ ไม่เลื่อน ไม่ดีเลย์."
        },
        "operators": {
          "title": "ทีมงานมืออาชีพ",
          "text": "คนขับและช่างควบคุมเครื่องจักรที่มีประสบการณ์ รู้พื้นที่บนเกาะสมุย และทำงานได้ดีแม้ในพื้นที่แคบหรืองานซับซ้อน."
        },
        "fuel": {
          "title": "รวมค่าน้ำมันแล้ว",
          "text": "เราดูแลเรื่องเติมน้ำมันและการบำรุงรักษาให้ทั้งหมด ลูกค้าจ่ายเฉพาะค่าเช่าและชั่วโมงทำงานจริง."
        },
        "condition": {
          "title": "เครื่องจักรพร้อมใช้งานเสมอ",
          "text": "บำรุงรักษาเป็นประจำ และตรวจเช็คสภาพก่อนออกงานทุกครั้ง เพื่อให้งานเดินได้ลื่นไหลไม่สะดุด."
        },
        "payment": {
          "title": "ชำระเงินได้หลายรูปแบบ",
          "text": "รองรับเงินสด โอนเข้าบัญชีไทย และตัวเลือกอื่น ๆ ตามที่ลูกค้าสะดวก."
        }
      }
    }
  }
}
</i18n>

<template>
  <section class="py-10 space-y-6">
    <div class="space-y-2 text-center">
      <h2 class="text-2xl sm:text-3xl font-semibold">
        {{ t('benefits.badge') }}
      </h2>

      <p class="text-sm text-gray-600 max-w-2xl mx-auto">
        {{ t('benefits.lead') }}
      </p>
    </div>

    <div class="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <UCard
        v-for="item in benefits"
        :key="item.key"
        class="h-full"
      >
        <div class="flex flex-col gap-3 h-full">
          <div class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
            <UIcon
              :name="item.icon"
              class="h-5 w-5"
            />
          </div>

          <div class="space-y-1">
            <p class="font-semibold text-sm sm:text-base">
              {{ t(`benefits.items.${item.key}.title`) }}
            </p>

            <p class="text-xs sm:text-sm text-gray-600">
              {{ t(`benefits.items.${item.key}.text`) }}
            </p>
          </div>
        </div>
      </UCard>
    </div>
  </section>
</template>
