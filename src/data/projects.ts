import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'ops-intelligence',
    title: 'Operations Intelligence Platform',
    category: 'Business Software',
    tag: 'Concept project',
    problem:
      'Operations teams rely on scattered spreadsheets and tools, making it hard to see bottlenecks or align on priorities.',
    solution:
      'A unified dashboard concept that aggregates workflow status, key metrics, and exception alerts in one place—with role-based views for managers and frontline staff.',
    value:
      'Faster operational decisions, clearer accountability, and a single source of truth for day-to-day performance.',
    accent: 'from-indigo-brand/20 to-cyan-brand/10',
  },
  {
    id: 'subscription-saas',
    title: 'Subscription SaaS Platform',
    category: 'SaaS Engineering',
    tag: 'Illustrative solution',
    problem:
      'A growing product team needs multi-tenant architecture, billing hooks, and admin tooling without rebuilding from scratch each quarter.',
    solution:
      'A modular SaaS concept with tenant isolation, subscription tiers, role-based access, and an analytics layer for product and revenue insights.',
    value:
      'A foundation designed for recurring revenue, self-service onboarding, and iterative feature delivery.',
    accent: 'from-violet-brand/20 to-indigo-brand/10',
  },
  {
    id: 'ai-workflow',
    title: 'AI-Powered Workflow Assistant',
    category: 'AI & Automation',
    tag: 'Concept project',
    problem:
      'Incoming documents and requests are manually sorted, causing delays and inconsistent routing across teams.',
    solution:
      'An automation concept that classifies documents, suggests routing, and surfaces exceptions for human review—with audit trails and configurable rules.',
    value:
      'Reduced manual triage, more consistent handling, and time returned to high-value work.',
    accent: 'from-cyan-brand/20 to-indigo-brand/10',
  },
]
