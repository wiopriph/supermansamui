<script setup lang="ts">
import { PRICING } from '~/constants/pricing';


const { t } = useI18n();

const sections = [
  {
    titleKey: 'pricing.excavators.title',
    rows: [
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
    ],
  },
  {
    titleKey: 'pricing.trucks.title',
    rows: [
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
    ],
  },
  {
    titleKey: 'pricing.crane.title',
    rows: [
      {
        labelKey: 'pricing.crane.hourly.label',
        priceKey: 'pricing.crane.hourly.price',
        value: PRICING.crane.hourly,
      },
    ],
  },
  {
    titleKey: 'pricing.delivery.title',
    rows: [
      {
        labelKey: 'pricing.delivery.excavator.label',
        priceKey: 'pricing.delivery.excavator.price',
        value: PRICING.delivery.excavator,
      },
    ],
  },
];
</script>

<i18n lang="json">
{
  "ru": {
    "pricing": {
      "title": "Цены",
      "excavators": {
        "title": "Экскаваторы",
        "pc30": {
          "label": "Мини-экскаватор",
          "price": "от {price} бат/час"
        },
        "cat305cr": {
          "label": "Экскаватор",
          "price": "от {price} бат/час"
        },
        "pc128": {
          "label": "Большой экскаватор",
          "price": "от {price} бат/час"
        }
      },
      "trucks": {
        "title": "Грузовики",
        "small4": {
          "label": "4-колёсный самосвал",
          "price": "от {price} бат/рейс"
        },
        "medium6": {
          "label": "6-колёсный самосвал",
          "price": "от {price} бат/рейс"
        },
        "big10": {
          "label": "10-колёсный грузовик с краном",
          "price": "от {price} бат/рейс"
        }
      },
      "crane": {
        "title": "Крановые работы",
        "hourly": {
          "label": "Кран (подъём, погрузка, монтаж)",
          "price": "от {price} бат/час (в зависимости от задачи)"
        }
      },
      "delivery": {
        "title": "Подача техники",
        "excavator": {
          "label": "Подача экскаватора на объект",
          "price": "{price} бат, если работа до 3 часов. Если больше - подача бесплатная."
        }
      }
    }
  },

  "en": {
    "pricing": {
      "title": "Pricing",
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
        "title": "Trucks",
        "small4": {
          "label": "4-wheel dump truck",
          "price": "from {price} THB/trip"
        },
        "medium6": {
          "label": "6-wheel dump truck",
          "price": "from {price} THB/trip"
        },
        "big10": {
          "label": "10-wheel truck with crane",
          "price": "from {price} THB/trip"
        }
      },
      "crane": {
        "title": "Crane service",
        "hourly": {
          "label": "Crane (lifting, loading, installation)",
          "price": "from {price} THB/hour (depending on the job)"
        }
      },
      "delivery": {
        "title": "Equipment delivery",
        "excavator": {
          "label": "Excavator delivery to site",
          "price": "{price} THB if the job is under 3 hours. Free for longer jobs."
        }
      }
    }
  },

  "th": {
    "pricing": {
      "title": "ราคา",
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
        "title": "รถบรรทุก",
        "small4": {
          "label": "รถดั๊มพ์ 4 ล้อ",
          "price": "เริ่มต้น {price} บาท/เที่ยว"
        },
        "medium6": {
          "label": "รถดั๊มพ์ 6 ล้อ",
          "price": "เริ่มต้น {price} บาท/เที่ยว"
        },
        "big10": {
          "label": "รถบรรทุก 10 ล้อ พร้อมเครน",
          "price": "เริ่มต้น {price} บาท/เที่ยว"
        }
      },
      "crane": {
        "title": "บริการเครน",
        "hourly": {
          "label": "เครน (ยก โหลด ติดตั้ง)",
          "price": "เริ่มต้น {price} บาท/ชั่วโมง (ขึ้นอยู่กับลักษณะงาน)"
        }
      },
      "delivery": {
        "title": "ค่าขนส่งเครื่องจักร",
        "excavator": {
          "label": "ค่าขนส่งรถขุดไปไซต์งาน",
          "price": "{price} บาท หากงานไม่เกิน 3 ชม. มากกว่านั้นขนส่งฟรี"
        }
      }
    }
  }
}
</i18n>

<template>
  <section class="py-10 space-y-6">
    <h2 class="text-2xl font-semibold text-center">
      {{ t('pricing.title') }}
    </h2>

    <div class="space-y-8">
      <div
        v-for="section in sections"
        :key="section.titleKey"
        class="border border-gray-200 rounded-xl overflow-hidden"
      >
        <div class="bg-gray-100 px-4 py-2 font-semibold text-sm">
          {{ t(section.titleKey) }}
        </div>

        <table class="w-full text-sm">
          <tbody>
            <tr
              v-for="row in section.rows"
              :key="row.labelKey"
              class="odd:bg-white even:bg-gray-50"
            >
              <td class="px-4 py-2 align-top">
                {{ t(row.labelKey) }}
              </td>

              <td class="px-4 py-2 text-right font-medium whitespace-pre-line">
                {{ t(row.priceKey, { price: row.value }) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
