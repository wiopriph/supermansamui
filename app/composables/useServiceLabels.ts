import { SERVICE_ICON, SERVICE_ROUTE, SERVICE_LABELS, RELATED_SERVICES, type ServiceKey } from '~/constants/services';


/** `locale` is the page's own ref from useI18n(); calling useI18n here again would clash with the page's local scope */
export function useServiceLabels(locale: Ref<string>, labels?: ComputedRef<Record<string, string>>) {
  const localePath = useLocalePath();

  const defaultLabels = computed(() => SERVICE_LABELS[locale.value as 'en' | 'ru' | 'th'] ?? SERVICE_LABELS.en);

  function labelFor(service: string): string {
    return labels?.value[service] ??
      defaultLabels.value[service as ServiceKey] ??
      service;
  }

  function routeFor(service: string): string | null {
    const name = SERVICE_ROUTE[service as ServiceKey];

    return name ? localePath({ name }) : null;
  }

  function relatedFor(service: string) {
    return (RELATED_SERVICES[service as ServiceKey] ?? []).map(key => ({
      key,
      label: labelFor(key),
      icon: SERVICE_ICON[key],
      to: localePath({ name: SERVICE_ROUTE[key] }),
    }));
  }

  return { labelFor, routeFor, relatedFor };
}
