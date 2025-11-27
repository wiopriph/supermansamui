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
      "badge": "Преимущества Superman Samui",
      "lead": "Подстраиваемся под вашу задачу, берём на себя спецтехнику, логистику и организацию, чтобы вы занимались только своим проектом.",
      "items": {
        "consult": {
          "title": "Бесплатный выезд и консультация",
          "text": "Приезжаем на участок, оцениваем объём работ, помогаем подобрать технику и даём ориентировочную смету - бесплатно."
        },
        "delivery": {
          "title": "Подача к оговоренному времени",
          "text": "Привозим технику на объект строго к согласованному часу."
        },
        "operators": {
          "title": "Опытные машинисты и водители",
          "text": "Команда со стажем работы на спецтехнике и объектами на Самуи."
        },
        "fuel": {
          "title": "Топливо и сервис - наша забота",
          "text": "Заправка и обслуживание включены, вы платите только за аренду и часы работы."
        },
        "condition": {
          "title": "Исправная техника",
          "text": "Регулярное обслуживание и осмотр перед выездом на каждый объект."
        },
        "payment": {
          "title": "Удобная оплата",
          "text": "Наличные, переводы на тайский счёт и другие варианты по договорённости."
        }
      }
    }
  },
  "en": {
    "benefits": {
      "badge": "Superman Samui advantages",
      "lead": "We handle equipment, logistics and scheduling so you can focus on the project, not on the machines.",
      "items": {
        "consult": {
          "title": "Free site visit & consultation",
          "text": "We come to your site, estimate the job, recommend the right machines and give an approximate quote for free."
        },
        "delivery": {
          "title": "On-time equipment delivery",
          "text": "We bring the machines to your site exactly at the agreed time."
        },
        "operators": {
          "title": "Skilled operators & drivers",
          "text": "Experienced team used to working with heavy equipment and Samui sites."
        },
        "fuel": {
          "title": "Fuel & service included",
          "text": "We handle refuelling and maintenance - you pay only for rental and working hours."
        },
        "condition": {
          "title": "Well-maintained machines",
          "text": "Regular service and checks before every job."
        },
        "payment": {
          "title": "Flexible payment options",
          "text": "Cash, bank transfers to Thai accounts and other options on request."
        }
      }
    }
  },
  "th": {
    "benefits": {
      "badge": "ข้อดีของ Superman Samui",
      "lead": "เราช่วยดูแลเรื่องเครื่องจักร การขนส่ง และการจัดตารางงาน ให้คุณโฟกัสแค่งานก่อสร้างของตัวเอง",
      "items": {
        "consult": {
          "title": "สำรวจหน้างานและให้คำปรึกษาฟรี",
          "text": "ไปดูหน้างาน ประเมินปริมาณงาน แนะนำเครื่องจักรที่เหมาะสม และบอกราคาประเมินคร่าว ๆ โดยไม่คิดค่าใช้จ่าย"
        },
        "delivery": {
          "title": "ส่งเครื่องจักรตรงเวลา",
          "text": "นำเครื่องจักรไปถึงไซต์งานตามเวลาที่ตกลงไว้"
        },
        "operators": {
          "title": "ทีมคนขับมืออาชีพ",
          "text": "มีประสบการณ์ทำงานกับเครื่องจักรหนักและไซต์งานบนเกาะสมุย"
        },
        "fuel": {
          "title": "ค่าน้ำมันและเซอร์วิส เราดูแลให้",
          "text": "เติมน้ำมันและบำรุงรักษารวมอยู่แล้ว คุณจ่ายเฉพาะค่าเช่าและชั่วโมงทำงาน"
        },
        "condition": {
          "title": "เครื่องจักรสภาพพร้อมใช้งาน",
          "text": "ตรวจเช็คและบำรุงรักษาเป็นประจำก่อนออกงานทุกครั้ง"
        },
        "payment": {
          "title": "ชำระเงินได้หลายรูปแบบ",
          "text": "รับเงินสด โอนเข้าบัญชีไทย และตัวเลือกอื่น ๆ ตามตกลง"
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
