export type ServiceSlug =
  | 'software-consulting'
  | 'web-development'
  | 'mobile-app-development'
  | 'saas-development'
  | 'ai-automation'
  | 'cloud-modernization'
  | 'api-integration'
  | 'ui-ux-design'
  | 'legacy-modernization'
  | 'dedicated-engineering'

export interface Service {
  slug: ServiceSlug
  title: string
  shortTitle: string
  summary: string
  description: string
  highlights: string[]
  outcomes: string[]
  featured: boolean
  icon: string
}

export interface Project {
  id: string
  title: string
  category: string
  tag: 'Concept project' | 'Illustrative solution'
  problem: string
  solution: string
  value: string
  accent: string
}

export interface InsightArticle {
  slug: string
  category: string
  readingTimeMinutes: number
  title: string
  summary: string
  body: InsightBlock[]
}

export type InsightBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }

export interface FaqItem {
  question: string
  answer: string
}

export type ShowcaseId = 'operations' | 'saas' | 'portal' | 'documents'

export interface ShowcaseTab {
  id: ShowcaseId
  label: string
  title: string
  description: string
  problem: string
  approach: string[]
  value: string
  technologies: string[]
  useCases: string[]
  relatedService: ServiceSlug
}

export interface ServiceDetail {
  headline: string
  intro: string
  audience: { title: string; text: string }[]
  problems: string[]
  process: { title: string; text: string }[]
  faqs: FaqItem[]
}

export type ContactServiceInterest =
  | 'Software Consulting & Architecture'
  | 'Custom Web Application'
  | 'Mobile Application'
  | 'SaaS Product Engineering'
  | 'AI & Workflow Automation'
  | 'Cloud, APIs & Modernization'
  | 'Not sure yet'

export interface ContactFormValues {
  fullName: string
  email: string
  company?: string
  service: ContactServiceInterest
  budget?: string
  timeline?: string
  description: string
  consent: boolean
  /** Honeypot — must stay empty */
  website?: string
}
