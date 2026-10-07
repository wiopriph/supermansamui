type CatalogItem = {
  title: string;
  description: string;
};

type ServiceSeoOptions = {
  /** Canonical path of the service page, e.g. '/services/excavator' */
  path: string;
  /** i18n prefix of the page, e.g. 'excavator' */
  prefix: string;
  /** i18n key for the Service name in schema; defaults to `${prefix}.schema.name` */
  schemaNameKey?: string;
  /** i18n key for the OfferCatalog name; defaults to `${prefix}.tasks.title` */
  catalogNameKey?: string;
  image: {
    url: string;
    width: string;
    height: string;
  };
  serviceTypes: ComputedRef<string[]>;
  catalogItems: ComputedRef<CatalogItem[]>;
  /** THB price range of the machinery offered on the page, if any */
  priceRange?: {
    low: number;
    high: number;
  };
};

/**
 * Shared SEO head + Service JSON-LD for the seven service pages.
 * Expects the page's <i18n> block to provide `${prefix}.seo.{title,description,keywords}`.
 */
export function useServiceSeo(options: ServiceSeoOptions) {
  const { t } = useI18n();

  const jsonLd = computed(() => ({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://supermansamui.com${options.path}#service`,
        name: t(options.schemaNameKey ?? `${options.prefix}.schema.name`),
        description: t(`${options.prefix}.seo.description`),
        provider: {
          '@id': 'https://supermansamui.com#business',
        },
        areaServed: {
          '@type': 'AdministrativeArea',
          name: 'Koh Samui, Surat Thani, Thailand',
        },
        serviceType: options.serviceTypes.value,
        ...(options.priceRange && {
          offers: {
            '@type': 'AggregateOffer',
            priceCurrency: 'THB',
            lowPrice: options.priceRange.low,
            highPrice: options.priceRange.high,
          },
        }),
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: t(options.catalogNameKey ?? `${options.prefix}.tasks.title`),
          itemListElement: options.catalogItems.value.map(item => ({
            '@type': 'Offer',
            name: item.title,
            description: item.description,
            itemOffered: {
              '@type': 'Service',
              name: item.title,
              description: item.description,
              areaServed: 'Koh Samui',
            },
          })),
        },
      },
    ],
  }));

  useHead(() => {
    const title = t(`${options.prefix}.seo.title`);
    const description = t(`${options.prefix}.seo.description`);

    return {
      title,
      meta: [
        { name: 'description', content: description },
        { name: 'keywords', content: t(`${options.prefix}.seo.keywords`) },
        { name: 'robots', content: 'index, follow, max-image-preview:large' },

        { property: 'og:title', content: title },
        { property: 'og:description', content: description },
        { property: 'og:image', content: options.image.url },
        { property: 'og:image:width', content: options.image.width },
        { property: 'og:image:height', content: options.image.height },

        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: title },
        { name: 'twitter:description', content: description },
        { name: 'twitter:image', content: options.image.url },
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify(jsonLd.value),
        },
      ],
    };
  });
}
