<script setup lang="ts">
import { PRICING } from '~/constants/pricing';


const { t } = useI18n();

const excavators = [
  {
    labelKey: 'pricing.excavators.pc30.label',
    priceKey: 'pricing.excavators.pc30.price',
    value: PRICING.excavators.pc30,
  },
  {
    labelKey: 'pricing.excavators.cat305cr.label',
    priceKey: 'pricing.excavators.cat305cr.price',
    value: PRICING.excavators.cat305cr,
  },
  {
    labelKey: 'pricing.excavators.pc128.label',
    priceKey: 'pricing.excavators.pc128.price',
    value: PRICING.excavators.pc128,
  },
];

const trucks = [
  {
    labelKey: 'pricing.trucks.small4.label',
    priceKey: 'pricing.trucks.small4.price',
    value: PRICING.trucks.small4,
  },
  {
    labelKey: 'pricing.trucks.medium6.label',
    priceKey: 'pricing.trucks.medium6.price',
    value: PRICING.trucks.medium6,
  },
  {
    labelKey: 'pricing.trucks.big10.label',
    priceKey: 'pricing.trucks.big10.price',
    value: PRICING.trucks.big10,
  },
];
</script>

<i18n lang="json">
{
  "ru": {
    "pricing": {
      "title": "Цены",
      "lead": "Базовые цены на популярные услуги. Точный расчёт зависит от объёма, подъезда и условий на участке.",
      "excavators": {
        "title": "Экскаваторы",
        "pc30": {
          "label": "Мини-экскаватор",
          "price": "от {price} бат/час"
        },
        "cat305cr": {
          "label": "Средний экскаватор",
          "price": "от {price} бат/час"
        },
        "pc128": {
          "label": "Большой экскаватор",
          "price": "от {price} бат/час"
        }
      },
      "trucks": {
        "title": "Грузовики и самосвалы",
        "small4": {
          "label": "Лёгкий самосвал",
          "price": "от {price} бат/рейс"
        },
        "medium6": {
          "label": "6-колёсный самосвал",
          "price": "от {price} бат/рейс"
        },
        "big10": {
          "label": "10-колёсный самосвал",
          "price": "от {price} бат/рейс"
        }
      },
      "extraTitle": "Дополнительно",
      "crane": "Кран - от {price} бат/час",
      "delivery": "Доставка экскаватора - {price} бат. Бесплатно от 3 часов работы.",
      "note": "Чтобы получить точную цену, отправьте локацию, фото подъезда и короткое описание задачи."
    }
  },

  "en": {
    "pricing": {
      "title": "Prices",
      "lead": "Base prices for common jobs. Final cost depends on volume, site access and conditions.",
      "excavators": {
        "title": "Excavators",
        "pc30": {
          "label": "Mini excavator",
          "price": "from {price} THB/hour"
        },
        "cat305cr": {
          "label": "Medium excavator",
          "price": "from {price} THB/hour"
        },
        "pc128": {
          "label": "Large excavator",
          "price": "from {price} THB/hour"
        }
      },
      "trucks": {
        "title": "Trucks & dump trucks",
        "small4": {
          "label": "Light dump truck",
          "price": "from {price} THB/trip"
        },
        "medium6": {
          "label": "6-wheel dump truck",
          "price": "from {price} THB/trip"
        },
        "big10": {
          "label": "10-wheel dump truck",
          "price": "from {price} THB/trip"
        }
      },
      "extraTitle": "Additional",
      "crane": "Crane - from {price} THB/hour",
      "delivery": "Excavator delivery - {price} THB. Free from 3 hours.",
      "note": "To get an exact quote, send your location, access photos and a short job description."
    }
  },

  "th": {
    "pricing": {
      "title": "ราคา",
      "lead": "ราคาเริ่มต้นสำหรับงานที่พบบ่อย ราคาจริงขึ้นอยู่กับปริมาณงาน ทางเข้า และสภาพหน้างาน",
      "excavators": {
        "title": "รถขุด",
        "pc30": {
          "label": "รถขุดเล็ก",
          "price": "เริ่มต้น {price} บาท/ชั่วโมง"
        },
        "cat305cr": {
          "label": "รถขุดขนาดกลาง",
          "price": "เริ่มต้น {price} บาท/ชั่วโมง"
        },
        "pc128": {
          "label": "รถขุดขนาดใหญ่",
          "price": "เริ่มต้น {price} บาท/ชั่วโมง"
        }
      },
      "trucks": {
        "title": "รถบรรทุกและรถดั๊ม",
        "small4": {
          "label": "รถดั๊มขนาดเล็ก",
          "price": "เริ่มต้น {price} บาท/เที่ยว"
        },
        "medium6": {
          "label": "รถดั๊ม 6 ล้อ",
          "price": "เริ่มต้น {price} บาท/เที่ยว"
        },
        "big10": {
          "label": "รถดั๊ม 10 ล้อ",
          "price": "เริ่มต้น {price} บาท/เที่ยว"
        }
      },
      "extraTitle": "เพิ่มเติม",
      "crane": "บริการเครน - เริ่มต้น {price} บาท/ชั่วโมง",
      "delivery": "ค่าขนส่งรถขุด - {price} บาท ฟรีเมื่อใช้งานตั้งแต่ 3 ชั่วโมงขึ้นไป",
      "note": "ส่งโลเคชัน รูปทางเข้า และรายละเอียดงาน เพื่อคำนวณราคาที่แม่นยำ"
    }
  }
}
</i18n>

<template>
  <section class="py-10 space-y-6">
    <div class="space-y-2 text-center">
      <h2 class="text-2xl sm:text-3xl font-semibold">
        {{ t('pricing.title') }}
      </h2>

      <p class="text-sm text-gray-600 max-w-2xl mx-auto">
        {{ t('pricing.lead') }}
      </p>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <UCard>
        <template #header>
          <div class="font-semibold">
            {{ t('pricing.excavators.title') }}
          </div>
        </template>

        <table class="w-full text-sm">
          <tbody>
            <tr
              v-for="row in excavators"
              :key="row.labelKey"
              class="border-b border-gray-100 last:border-b-0"
            >
              <td class="py-3 pr-4 text-gray-700">
                {{ t(row.labelKey) }}
              </td>

              <td class="py-3 text-right font-semibold whitespace-nowrap">
                {{ t(row.priceKey, { price: row.value }) }}
              </td>
            </tr>
          </tbody>
        </table>
      </UCard>

      <UCard>
        <template #header>
          <div class="font-semibold">
            {{ t('pricing.trucks.title') }}
          </div>
        </template>

        <table class="w-full text-sm">
          <tbody>
            <tr
              v-for="row in trucks"
              :key="row.labelKey"
              class="border-b border-gray-100 last:border-b-0"
            >
              <td class="py-3 pr-4 text-gray-700">
                {{ t(row.labelKey) }}
              </td>

              <td class="py-3 text-right font-semibold whitespace-nowrap">
                {{ t(row.priceKey, { price: row.value }) }}
              </td>
            </tr>
          </tbody>
        </table>
      </UCard>
    </div>

    <UCard>
      <template #header>
        <div class="font-semibold">
          {{ t('pricing.extraTitle') }}
        </div>
      </template>

      <div class="space-y-2 text-sm">
        <p>
          {{ t('pricing.crane', { price: PRICING.crane.hourly }) }}
        </p>

        <p>
          {{ t('pricing.delivery', { price: PRICING.delivery.excavator }) }}
        </p>
      </div>
    </UCard>

    <p class="text-sm text-center text-gray-600 max-w-2xl mx-auto">
      {{ t('pricing.note') }}
    </p>
  </section>
</template>
