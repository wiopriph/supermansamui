export const ANALYTICS_EVENTS = {
  PHONE_CLICK: 'phone_click',
  SOCIAL_CLICK: 'social_click',
  ORDER_CLICK: 'order_click',
} as const;

export type SocialKey =
    | 'facebook'
    | 'messenger'
    | 'tiktok'
    | 'line'
    | 'whatsapp'
    | 'telegram';

type BasePayload = {
  page: string;        // '/services/excavator'
  locale: string;      // 'ru' | 'en' | 'th'
  location?: string;   // header | footer | ...
};

type SocialPayload = BasePayload & {
  social: SocialKey;
  url: string;
};

type PhonePayload = BasePayload & {
  phone: string;
};

type OrderPayload = BasePayload & {
  name: string;
};

export function useAnalyticsEvent() {
  const push = (obj: Record<string, unknown>) => {
    if (
      process.env.NODE_ENV === 'production' &&
            import.meta.client &&
            typeof window !== 'undefined' &&
            'dataLayer' in window &&
            Array.isArray((window as any).dataLayer)
    ) {
      (window as any).dataLayer.push(obj);
    } else {
      console.log('analytics', obj);
    }
  };

  const pushEvent = (event: string, params: Record<string, unknown>) => push({ event, ...params });

  const trackPhoneClick = (payload: PhonePayload) => pushEvent(ANALYTICS_EVENTS.PHONE_CLICK, payload);

  const trackSocialClick = (payload: SocialPayload) => pushEvent(ANALYTICS_EVENTS.SOCIAL_CLICK, payload);

  const trackOrderClick = (payload: OrderPayload) => pushEvent(ANALYTICS_EVENTS.ORDER_CLICK, payload);

  return {
    trackPhoneClick,
    trackSocialClick,
    trackOrderClick,
  };
}
