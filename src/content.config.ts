// Content collections. Insights articles are Markdown files in src/content/insights/;
// the filename (without .md) is the URL slug: /insights/<slug>.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { caseStudies } from './data/caseStudies.ts';

const INSIGHTS_DIRECTORY = './src/content/insights';
const DESCRIPTION_MAX_LENGTH = 160;

const caseStudySlugs = caseStudies.map((study) => study.slug) as [string, ...string[]];

const insights = defineCollection({
  loader: glob({ pattern: '*.md', base: INSIGHTS_DIRECTORY }),
  schema: z.object({
    title: z.string(),
    // Doubles as the meta description and the lead under the headline.
    description: z.string().max(DESCRIPTION_MAX_LENGTH),
    publishedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    // Key of the service route in data/navigation.ts this article leads to.
    relatedService: z.enum(['audit', 'deep', 'impl', 'retainer']),
    relatedCaseStudy: z.enum(caseStudySlugs).optional(),
  }),
});

export const collections = { insights };
