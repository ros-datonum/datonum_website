// Insights articles (the `insights` content collection), newest first.
import { getCollection, type CollectionEntry } from 'astro:content';
import { routes } from './navigation.ts';
import { siteIdentity } from './site.ts';

export type Insight = CollectionEntry<'insights'>;

export async function getInsights(): Promise<Insight[]> {
  const insights = await getCollection('insights');
  return insights.sort((a, b) => b.data.publishedDate.getTime() - a.data.publishedDate.getTime());
}

export function insightPath(id: string): string {
  return `${routes.insights}/${id}`;
}

const articleDateFormat = new Intl.DateTimeFormat(siteIdentity.dateLocale, {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatArticleDate(date: Date): string {
  return articleDateFormat.format(date);
}
