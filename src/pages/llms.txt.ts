// /llms.txt — a plain-Markdown map of the site for AI assistants (llmstxt.org format):
// who Datonum is, then one described link per page worth reading. Links are built from the
// shared route table and case study data so the file cannot drift from the site.
import type { APIRoute } from 'astro';
import { routes, serviceLinks } from '../data/navigation.ts';
import { caseStudies, caseStudyPath } from '../data/caseStudies.ts';
import { siteIdentity } from '../data/site.ts';
import { getInsights, insightPath } from '../data/insights.ts';

interface DescribedLink {
  label: string;
  href: string;
  description: string;
}

const serviceDescriptions: Record<string, string> = {
  [routes.audit]:
    'A structured assessment of your processes and systems. In two to three weeks you get a ranked, costed view of where AI creates value and what to do first.',
  [routes.deep]:
    'A structured AI assessment across the whole operation: six to eight processes, measured volumes and a build-ready specification for the best opportunity.',
  [routes.impl]:
    'Design and implementation of a defined AI-enabled workflow, integrated into your existing systems, with clear success criteria, testing and human oversight.',
  [routes.retainer]:
    'AI workflow maintenance and optimization: maintenance, quality tuning, and improvement work, with someone accountable when the output looks off.',
};

const companyLinks: readonly DescribedLink[] = [
  {
    label: 'What we automate',
    href: routes.automate,
    description:
      'AI workflow automation with n8n, Make, and Zapier. Real sequences, one per function, each showing where AI does the reading and judging and where fixed rules take over.',
  },
  {
    label: 'AI vs automation',
    href: routes.aivs,
    description:
      'Where AI automation and traditional rule-based automation each belong. Most of what a business wants to automate does not need AI at all.',
  },
  {
    label: 'Approach',
    href: routes.approach,
    description:
      'We measure before we build. Most AI projects fail because the wrong thing was automated, nobody checked the output, or nobody maintained it.',
  },
  {
    label: 'About',
    href: routes.about,
    description:
      'Who runs Datonum and why it exists: businesses with recurring operational load and no internal capability to turn AI into something that works day to day.',
  },
];

const optionalLinks: readonly DescribedLink[] = [
  { label: 'Book a call', href: routes.contact, description: 'Thirty minutes, no preparation needed.' },
  { label: 'Privacy Notice', href: routes.privacy, description: 'How personal data is collected, used and protected.' },
  { label: 'Terms of Use', href: routes.terms, description: 'The terms that govern use of the website.' },
];

export const GET: APIRoute = async ({ site }) => {
  const section = (heading: string, links: readonly DescribedLink[]): string =>
    [
      `## ${heading}`,
      '',
      ...links.map((link) => `- [${link.label}](${new URL(link.href, site).href}): ${link.description}`),
      '',
    ].join('\n');

  const services: DescribedLink[] = serviceLinks.map((link) => ({
    ...link,
    description: serviceDescriptions[link.href],
  }));
  const cases: DescribedLink[] = caseStudies.map((study) => ({
    label: study.indexTitle,
    href: caseStudyPath(study.slug),
    description: study.indexDesc,
  }));

  const insights: DescribedLink[] = (await getInsights()).map((insight) => ({
    label: insight.data.title,
    href: insightPath(insight.id),
    description: insight.data.description,
  }));

  const body = [
    `# ${siteIdentity.name}`,
    '',
    `> ${siteIdentity.summary}`,
    '',
    siteIdentity.positioning,
    '',
    `Based in Spain, working worldwide. Small by design: engagements are run by the person who scoped them. Contact: ${siteIdentity.contactEmail}`,
    '',
    section('Services', services),
    section('Case studies', cases),
    ...(insights.length > 0 ? [section('Insights', insights)] : []),
    section('How we work', companyLinks),
    section('Optional', optionalLinks),
  ].join('\n');

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
