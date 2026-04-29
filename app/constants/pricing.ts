export const PRICING = {
  excavators: {
    pc30: {
      hour: 1000,
      shift: 7500,
    },
    b32: {
      hour: 1000,
      shift: 7500,
    },
    cat305cr: {
      hour: 1200,
      shift: 8500,
    },
    vio70: {
      hour: 1700,
      shift: 12000,
    },
    pc128: {
      hour: 2200,
      shift: 16500,
    },
  },

  trucks: {
    elf: {
      trip: 800,
      shift: 3500,
    },
    hino300: {
      trip: 1500,
      shift: 5500,
    },
    fm18: {
      trip: 3000,
      shift: 10000,
    },
    nissan: {
      trip: 2500,
      shift: 8000,
    },
    ranger: {
      trip: 1800,
      shift: 6500,
    },
    deva: {
      trip: 700,
      shift: 3000,
    },
  },

  crane: {
    hour: 1200,
  },

  delivery: {
    excavator: 1000,
    excavatorFreeFromHours: 3,
  },
} as const;
