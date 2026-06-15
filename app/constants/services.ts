export type ServiceKey =
  | 'excavator'
  | 'truck'
  | 'land-clearing'
  | 'earthworks'
  | 'land-leveling'
  | 'drainage'
  | 'site-preparation';

export const SERVICE_ROUTE: Record<ServiceKey, string> = {
  'excavator': 'services-excavator',
  'truck': 'services-truck',
  'land-clearing': 'services-land-clearing',
  'earthworks': 'services-earthworks',
  'land-leveling': 'services-land-leveling',
  'drainage': 'services-drainage',
  'site-preparation': 'services-site-preparation',
};

export const SERVICE_ICON: Record<ServiceKey, string> = {
  'excavator': 'i-lucide-shovel',
  'truck': 'i-lucide-truck',
  'land-clearing': 'i-lucide-tree-pine',
  'earthworks': 'i-lucide-land-plot',
  'land-leveling': 'i-lucide-ruler',
  'drainage': 'i-lucide-droplets',
  'site-preparation': 'i-lucide-hard-hat',
};

export const RELATED_SERVICES: Record<ServiceKey, ServiceKey[]> = {
  'excavator': ['earthworks', 'truck', 'site-preparation'],
  'truck': ['excavator', 'earthworks', 'site-preparation'],
  'land-clearing': ['earthworks', 'land-leveling', 'site-preparation'],
  'earthworks': ['land-clearing', 'land-leveling', 'site-preparation'],
  'land-leveling': ['earthworks', 'drainage', 'site-preparation'],
  'drainage': ['land-leveling', 'earthworks', 'site-preparation'],
  'site-preparation': ['land-clearing', 'land-leveling', 'drainage'],
};
