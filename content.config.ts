import { defineCollection, defineContentConfig } from '@nuxt/content';
import { defineSitemapSchema } from '@nuxtjs/sitemap/content';
import { z } from 'zod/v4';


const projectSchema = z.object({
  title: z.string(),
  date: z.date(),
  slug: z.string(),
  service: z.enum([
    'excavator',
    'truck',
    'land-clearing',
    'earthworks',
    'land-leveling',
    'drainage',
    'site-preparation',
  ]),
  location: z.string(),
  cover: z.string(),
  gallery: z.array(z.object({ src: z.string(), alt: z.string() })),
  summary: z.string(),
  equipment: z.array(z.string()).optional(),
});


export default defineContentConfig({
  collections: {
    'projects_en': defineCollection({
      type: 'page',
      source: {
        include: 'projects/en/**/*.md',
        prefix: '/projects',
      },
      schema: projectSchema.extend({
        sitemap: defineSitemapSchema({ z, name: 'projects_en' }),
      }),
      indexes: [
        { columns: ['slug'] },
        { columns: ['date'] },
      ],
    }),

    'projects_ru': defineCollection({
      type: 'page',
      source: {
        include: 'projects/ru/**/*.md',
        prefix: '/projects',
      },
      schema: projectSchema.extend({
        sitemap: defineSitemapSchema({
          z,
          name: 'projects_ru',
          onUrl: (url) => {
            url.loc = `/ru${url.loc}`;
          },
        }),
      }),
      indexes: [
        { columns: ['slug'] },
        { columns: ['date'] },
      ],
    }),

    'projects_th': defineCollection({
      type: 'page',
      source: {
        include: 'projects/th/**/*.md',
        prefix: '/projects',
      },
      schema: projectSchema.extend({
        sitemap: defineSitemapSchema({
          z,
          name: 'projects_th',
          onUrl: (url) => {
            url.loc = `/th${url.loc}`;
          },
        }),
      }),
      indexes: [
        { columns: ['slug'] },
        { columns: ['date'] },
      ],
    }),
  },
});
