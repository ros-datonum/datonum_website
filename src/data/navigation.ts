// Single source of truth for site routes and nav grouping.
// Shared by Header, Footer and per-page active-state resolution.

export interface NavLink {
  readonly label: string;
  readonly href: string;
}

export const routes = {
  home: '/',
  services: '/services',
  audit: '/services/ai-readiness-audit',
  deep: '/services/deep-audit',
  impl: '/services/implementation',
  retainer: '/services/optimization-retainer',
  automate: '/what-we-automate',
  aivs: '/ai-vs-automation',
  cases: '/case-studies',
  approach: '/approach',
  about: '/about',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
} as const;

export const serviceLinks: readonly NavLink[] = [
  { label: 'AI Readiness Audit', href: routes.audit },
  { label: 'Deep Audit', href: routes.deep },
  { label: 'AI Workflow Implementation', href: routes.impl },
  { label: 'Optimization Retainer', href: routes.retainer },
];

// Primary header links (Services is rendered separately as a dropdown).
export const primaryLinks: readonly NavLink[] = [
  { label: 'Case studies', href: routes.cases },
  { label: 'What we automate', href: routes.automate },
  { label: 'Approach', href: routes.approach },
  { label: 'About', href: routes.about },
];

export const footerCompanyLinks: readonly NavLink[] = [
  { label: 'Case studies', href: routes.cases },
  { label: 'What we automate', href: routes.automate },
  { label: 'AI vs automation', href: routes.aivs },
  { label: 'Approach', href: routes.approach },
  { label: 'About', href: routes.about },
];

// The static build emits /about.html and /index.html, so the pathname Astro reports at build
// time carries a file suffix the public URL never has. Returns the public route path.
const BUILT_PAGE_SUFFIX = /(?:\/index)?\.html$/;

export function toRoutePath(pathname: string): string {
  return pathname.replace(BUILT_PAGE_SUFFIX, '') || routes.home;
}

// Marks a link active when the current path is the link or nested beneath it.
export function isActive(currentPath: string, href: string): boolean {
  if (href === routes.home) return currentPath === routes.home;
  return currentPath === href || currentPath.startsWith(`${href}/`);
}
