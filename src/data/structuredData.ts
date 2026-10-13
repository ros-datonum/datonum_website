// schema.org JSON-LD builders. Each returns one node; pages pass the nodes they need to
// PageLayout, which renders them in <head>. `site` is Astro.site, so every URL is absolute
// and follows the configured origin.
import type { AccordionItem } from '../components/Accordion.astro';
import { routes, type NavLink } from './navigation.ts';
import { siteIdentity, founder, socialProfiles, shareImage, logoPath } from './site.ts';

export type StructuredDataNode = Record<string, unknown>;
// Astro.site as Astro types it. It is always set in astro.config.mjs; if it were removed,
// URL construction below fails the build rather than emitting relative URLs.
type SiteOrigin = URL | undefined;

const SCHEMA_CONTEXT = 'https://schema.org';
const ORGANIZATION_FRAGMENT = '#organization';
const WEBSITE_FRAGMENT = '#website';

function absoluteUrl(site: SiteOrigin, path: string): string {
  return new URL(path, site).href;
}

// Other nodes point at the Organization by @id instead of repeating it.
function organizationReference(site: SiteOrigin): StructuredDataNode {
  return { '@id': absoluteUrl(site, ORGANIZATION_FRAGMENT) };
}

export function organizationSchema(site: SiteOrigin): StructuredDataNode {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Organization',
    '@id': absoluteUrl(site, ORGANIZATION_FRAGMENT),
    name: siteIdentity.name,
    url: absoluteUrl(site, routes.home),
    logo: absoluteUrl(site, logoPath),
    image: absoluteUrl(site, shareImage.path),
    description: siteIdentity.summary,
    email: siteIdentity.contactEmail,
    address: { '@type': 'PostalAddress', addressCountry: siteIdentity.countryCode },
    sameAs: Object.values(socialProfiles),
    founder: {
      '@type': 'Person',
      name: founder.name,
      jobTitle: founder.jobTitle,
      sameAs: [founder.linkedInUrl],
    },
  };
}

export function webSiteSchema(site: SiteOrigin): StructuredDataNode {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'WebSite',
    '@id': absoluteUrl(site, WEBSITE_FRAGMENT),
    name: siteIdentity.name,
    url: absoluteUrl(site, routes.home),
    inLanguage: siteIdentity.language,
    publisher: organizationReference(site),
  };
}

interface PageSummary {
  name: string;
  description: string;
  path: string;
}

export function serviceSchema(site: SiteOrigin, service: PageSummary): StructuredDataNode {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: absoluteUrl(site, service.path),
    provider: organizationReference(site),
  };
}

// Insights articles carry a byline and dates; case studies are published by the organization.
interface Publication {
  authorName: string;
  published: Date;
  updated?: Date;
}

export function articleSchema(
  site: SiteOrigin,
  article: PageSummary,
  publication?: Publication,
): StructuredDataNode {
  const url = absoluteUrl(site, article.path);
  const byline = publication && {
    author: { '@type': 'Person', name: publication.authorName },
    datePublished: publication.published.toISOString(),
    dateModified: (publication.updated ?? publication.published).toISOString(),
  };
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'Article',
    headline: article.name,
    description: article.description,
    url,
    mainEntityOfPage: url,
    image: absoluteUrl(site, shareImage.path),
    inLanguage: siteIdentity.language,
    author: organizationReference(site),
    publisher: organizationReference(site),
    ...byline,
  };
}

export function faqSchema(items: readonly AccordionItem[]): StructuredDataNode {
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };
}

// `trail` runs from the top-level section down to the current page; Home is prepended.
export function breadcrumbSchema(site: SiteOrigin, trail: readonly NavLink[]): StructuredDataNode {
  const crumbs: readonly NavLink[] = [{ label: 'Home', href: routes.home }, ...trail];
  return {
    '@context': SCHEMA_CONTEXT,
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.label,
      item: absoluteUrl(site, crumb.href),
    })),
  };
}
