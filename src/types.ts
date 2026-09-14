export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  locale: string;
  ga4: string;
  social: {
    telegram: string;
    github: string;
    youtube: string;
  };
}

export interface NavItem {
  title: string;
  url?: string;
  children?: NavItem[];
  highlight?: boolean;
  external?: boolean;
}

export type ReleaseStatus = 'released' | 'planned' | 'in-progress';

export interface ReleaseScheduleItem {
  version: string;
  slug: string;
  timeline: string;
  dateTime: string;
  status: ReleaseStatus;
  statusLabel: string;
  url?: string;
}

export interface PlanItem {
  title: string;
  description: string;
  tags?: string[];
}

export interface PlanCategory {
  /** Anchor id used for in-page navigation and heading links. */
  id: string;
  /** Indonesian label shown in the UI. */
  title: string;
  /** English technical label, kept in English by design. */
  technicalTitle: string;
  description: string;
  icon: string;
  items: PlanItem[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Breadcrumb {
  name: string;
  url: string;
}
