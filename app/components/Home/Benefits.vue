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
      "badge": "Почему с нами удобно работать",
      "lead": "Мы берём на себя технику, людей и организацию работ. Вы просто говорите, что нужно сделать, — мы подбираем решение.",
      "items": {
        "consult": {
          "title": "Поможем выбрать технику",
          "text": "Расскажете задачу — подскажем, какой экскаватор или грузовик подойдёт и во сколько это обойдётся."
        },
        "delivery": {
          "title": "Приезжаем в договорённое время",
          "text": "Сразу договариваемся о дне и времени. Приезжаем, когда обещали, без сюрпризов и переносов в последний момент."
        },
        "operators": {
          "title": "Местные опытные операторы",
          "text": "Люди, которые знают рельеф Самуи и работают аккуратно рядом с домами, заборами и на узких подъездах."
        },
        "fuel": {
          "title": "Топливо и обслуживание на нас",
          "text": "Вы платите за работу. Заправка, расходники и базовое обслуживание техники уже включены в стоимость."
        },
        "condition": {
          "title": "Техника в рабочем состоянии",
          "text": "Следим за машиной и проверяем её перед выездом, чтобы не было простоев и нервов на объекте."
        },
        "payment": {
          "title": "Удобные варианты оплаты",
          "text": "Можно оплатить наличными или переводом на тайский счёт. Подберём вариант, который будет удобен вам."
        }
      }
    }
  },
  "en": {
    "benefits": {
      "badge": "Why it’s easy to work with us",
      "lead": "We take care of equipment, operators and scheduling. You simply tell us what needs to be done — we handle the rest.",
      "items": {
        "consult": {
          "title": "We help you choose the right machine",
          "text": "Tell us about your project and we’ll recommend the right excavator or truck and give an approximate budget."
        },
        "delivery": {
          "title": "We arrive when we promise",
          "text": "We agree on a clear day and time in advance and stick to it — no last-minute delays or sudden changes."
        },
        "operators": {
          "title": "Local, experienced operators",
          "text": "Operators who know Samui, work safely near houses and walls, and can handle tight or tricky access roads."
        },
        "fuel": {
          "title": "Fuel and maintenance included",
          "text": "You pay for the job, not for refuelling. Fuel and basic maintenance of the machines are already included."
        },
        "condition": {
          "title": "Equipment ready to work",
          "text": "We service and check the machines before sending them out to minimise breakdowns and downtime on your site."
        },
        "payment": {
          "title": "Easy payment options",
          "text": "Cash or bank transfer to a Thai account — we’ll use whichever option is more convenient for you."
        }
      }
    }
  },
  "th": {
    "benefits": {
      "badge": "ทำไมทำงานกับเราถึงสะดวก",
      "lead": "เราดูแลทั้งเครื่องจักร คนขับ และการจัดตารางงานให้ครบ คุณเพียงบอกว่างานต้องการอะไร เราช่วยจัดการให้.",
      "items": {
        "consult": {
          "title": "ช่วยแนะนำเครื่องจักรที่เหมาะสม",
          "text": "เล่าให้งานที่ต้องทำ เราจะแนะนำว่าควรใช้รถขุดหรือรถบรรทุกแบบไหน และประเมินค่าใช้จ่ายคร่าว ๆ ให้."
        },
        "delivery": {
          "title": "ไปถึงหน้างานตามเวลานัด",
          "text": "ตกลงวันและเวลาชัดเจนล่วงหน้า แล้วไปตามนัด ไม่เลื่อน ไม่ดีเลย์แบบไม่มีเหตุผล."
        },
        "operators": {
          "title": "ทีมงานท้องถิ่นมีประสบการณ์",
          "text": "คนขับที่รู้พื้นที่บนเกาะสมุยดี ทำงานได้ปลอดภัย ใกล้บ้าน รั้ว หรือทางเข้าที่แคบ."
        },
        "fuel": {
          "title": "รวมค่าน้ำมันและดูแลเครื่องแล้ว",
          "text": "ลูกค้าจ่ายเฉพาะค่างาน ส่วนค่าน้ำมันและการดูแลเครื่องพื้นฐาน เราดูแลให้ทั้งหมด."
        },
        "condition": {
          "title": "เครื่องพร้อมใช้งานเสมอ",
          "text": "มีการบำรุงรักษาและตรวจเช็คก่อนออกงานทุกครั้ง เพื่อลดโอกาสที่เครื่องจะเสียระหว่างทำงาน."
        },
        "payment": {
          "title": "จ่ายเงินได้หลายแบบ",
          "text": "จะจ่ายเป็นเงินสด หรือโอนเข้าบัญชีไทยก็ได้ เลือกวิธีที่สะดวกสำหรับคุณ."
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

    <UPageGrid class="pt-2">
      <UPageFeature
        v-for="(item, index) in benefits"
        :key="index"
        :icon="item.icon || 'i-heroicons-check-circle'"
        :title="t(`benefits.items.${item.key}.title`)"
        :description="t(`benefits.items.${item.key}.text`)"
        :ui="{ title: 'text-gray-600' }"
      />
    </UPageGrid>
  </section>
</template>
