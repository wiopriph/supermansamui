<script setup lang="ts">
const { t } = useI18n();

const benefits = [
  { key: 'fixed', icon: 'i-lucide-badge-dollar-sign' },
  { key: 'delivery', icon: 'i-lucide-calendar-clock' },
  { key: 'operators', icon: 'i-lucide-hard-hat' },
];
</script>

<i18n lang="json">
{
  "ru": {
    "benefits": {
      "badge": "Почему с нами удобно работать",
      "lead": "Берём на себя технику, людей и организацию. Вы просто описываете задачу - мы делаем.",
      "items": {
        "fixed": {
          "title": "Фиксируем цену заранее",
          "text": "Сразу считаем объем и даём понятную цену до начала работ. Без неожиданных доплат в процессе."
        },
        "delivery": {
          "title": "Приезжаем вовремя",
          "text": "Фиксируем дату и время заранее и приезжаем как договорились - без переносов и ожиданий."
        },
        "operators": {
          "title": "Опытные местные операторы",
          "text": "Знают дороги Самуи и аккуратно работают даже на сложных участках и узких подъездах."
        }
      }
    }
  },

  "en": {
    "benefits": {
      "badge": "Why it’s easy to work with us",
      "lead": "We handle equipment, operators and scheduling. You describe the job - we take care of the rest.",
      "items": {
        "fixed": {
          "title": "Clear price before we start",
          "text": "We calculate the job in advance and give a fixed price. No unexpected costs during the work."
        },
        "delivery": {
          "title": "We arrive on time",
          "text": "We agree on the schedule заранее and show up as promised - no delays."
        },
        "operators": {
          "title": "Experienced local operators",
          "text": "They know Samui roads and work safely even in tight or difficult locations."
        }
      }
    }
  },

  "th": {
    "benefits": {
      "badge": "ทำไมลูกค้าถึงเลือกเรา",
      "lead": "เราดูแลทั้งเครื่องจักร คนขับ และการจัดงานให้ครบ คุณแค่บอกงาน - เราจัดการให้ทั้งหมด",
      "items": {
        "fixed": {
          "title": "แจ้งราคาชัดเจนก่อนเริ่มงาน",
          "text": "เราคำนวณงานและแจ้งราคาก่อนเริ่ม ไม่มีค่าใช้จ่ายเพิ่มระหว่างงาน"
        },
        "delivery": {
          "title": "มาตรงเวลา",
          "text": "นัดเวลาแล้วไปตามนัด ไม่มีดีเลย์หรือเลื่อนงาน"
        },
        "operators": {
          "title": "คนขับท้องถิ่นมีประสบการณ์",
          "text": "รู้เส้นทางในสมุยและทำงานได้ดีแม้ในพื้นที่แคบหรือซับซ้อน"
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
