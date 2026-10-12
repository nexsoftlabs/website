import type { ShowcaseTab } from '@/types'

export const showcaseTabs: ShowcaseTab[] = [
  {
    id: 'web',
    label: 'Web Applications',
    title: 'Operations management dashboard',
    description:
      'Illustrative concept: a responsive web application that unifies tasks, approvals, and operational KPIs for distributed teams—with real-time status and exportable reports.',
    technologies: ['React', 'TypeScript', 'REST APIs', 'PostgreSQL'],
    useCases: [
      'Internal operations and workflow tracking',
      'Customer portals and self-service hubs',
      'Admin consoles for complex business rules',
    ],
  },
  {
    id: 'saas',
    label: 'SaaS Platforms',
    title: 'Subscription-based SaaS platform',
    description:
      'Illustrative concept: a multi-tenant SaaS with onboarding flows, tiered access, billing integration points, and product analytics for growth teams.',
    technologies: ['React', 'ASP.NET Core / Python APIs', 'SQL databases', 'CI/CD'],
    useCases: [
      'B2B software with role-based tenants',
      'Usage-based or subscription billing models',
      'Partner and reseller portals',
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile Experiences',
    title: 'Customer self-service mobile application',
    description:
      'Illustrative concept: a mobile experience for account management, notifications, and lightweight workflows—optimized for intermittent connectivity.',
    technologies: ['Cross-platform mobile', 'Secure auth', 'Push notifications', 'API integration'],
    useCases: [
      'Field service and on-site workflows',
      'Member and loyalty applications',
      'Companion apps for existing web products',
    ],
  },
  {
    id: 'ai',
    label: 'AI & Automation',
    title: 'AI-assisted document processing workflow',
    description:
      'Illustrative concept: a pipeline that ingests documents, classifies content, routes tasks, and flags exceptions for human review—with full audit history.',
    technologies: ['AI APIs', 'Workflow automation', 'Webhooks', 'Cloud storage'],
    useCases: [
      'Invoice and form processing',
      'Support ticket triage',
      'Compliance review assistance',
    ],
  },
]
