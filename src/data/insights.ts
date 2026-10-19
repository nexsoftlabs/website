import type { InsightArticle } from '@/types'

export const insights: InsightArticle[] = [
  {
    slug: 'architecture-for-growing-saas',
    category: 'Architecture',
    readingTimeMinutes: 8,
    publishedAt: '2025-09-12',
    title: 'How to Choose the Right Architecture for a Growing SaaS Product',
    summary:
      'Early architectural choices shape how fast you can ship, how safely you can scale, and how painful migrations become later. Here is a practical framework for growing products.',
    body: [
      {
        type: 'paragraph',
        text:
          'SaaS architecture is not about picking the trendiest stack—it is about matching structure to your stage, team, and risk profile. A solo founder validating an idea needs different boundaries than a team serving hundreds of tenants.',
      },
      {
        type: 'heading',
        text: 'Start from constraints, not patterns',
      },
      {
        type: 'paragraph',
        text:
          'List non-negotiables: compliance, uptime expectations, integration requirements, and how quickly the product must evolve. These constraints narrow sensible options faster than comparing microservices diagrams.',
      },
      {
        type: 'list',
        items: [
          'Data isolation and tenant model requirements',
          'Expected traffic shape and geographic distribution',
          'Team skills and hiring plans',
          'Release cadence and experimentation needs',
        ],
      },
      {
        type: 'heading',
        text: 'Prefer clear modules over premature distribution',
      },
      {
        type: 'paragraph',
        text:
          'A well-structured monolith or modular monolith often outperforms a distributed system you cannot operate yet. Extract services when boundaries are stable and operational cost is justified.',
      },
      {
        type: 'heading',
        text: 'Plan for change at integration points',
      },
      {
        type: 'paragraph',
        text:
          'Billing, authentication, notifications, and analytics are integration-heavy. Design adapters and documented contracts at these edges so you can swap providers without rewriting core domain logic.',
      },
    ],
  },
  {
    slug: 'when-to-modernize-legacy',
    category: 'Modernization',
    readingTimeMinutes: 7,
    publishedAt: '2025-09-28',
    title: 'When Should a Business Modernize Its Legacy Application?',
    summary:
      'Modernization is expensive when mistimed and costly when delayed. Learn signals that indicate when incremental change beats a big-bang rewrite.',
    body: [
      {
        type: 'paragraph',
        text:
          'Legacy systems often still run critical revenue workflows. The question is not whether the stack is old—it is whether the system blocks growth, increases risk, or drains engineering morale beyond acceptable limits.',
      },
      {
        type: 'heading',
        text: 'Signals that modernization may be warranted',
      },
      {
        type: 'list',
        items: [
          'Release cycles measured in months for small changes',
          'Security patches or dependencies no longer supported',
          'Key integrations require brittle workarounds',
          'Onboarding new engineers takes disproportionate time',
        ],
      },
      {
        type: 'heading',
        text: 'Favor incremental strategies',
      },
      {
        type: 'paragraph',
        text:
          'Strangler patterns, phased module extraction, and parallel runs reduce business risk compared to full rewrites. Define measurable milestones—performance, defect rates, deployment frequency—and track them.',
      },
      {
        type: 'paragraph',
        text:
          'If the current system is stable and change is rare, investing in observability and targeted refactors may be enough. Modernize when pain is recurring and tied to business outcomes.',
      },
    ],
  },
  {
    slug: 'practical-ai-in-workflows',
    category: 'AI & Automation',
    readingTimeMinutes: 6,
    publishedAt: '2025-10-05',
    title: 'Practical Ways to Introduce AI into Existing Workflows',
    summary:
      'Useful AI adoption starts with workflow clarity, not model hype. A grounded approach to automation that keeps humans in the loop.',
    body: [
      {
        type: 'paragraph',
        text:
          'AI works best on repetitive, pattern-rich tasks with clear inputs and reviewable outputs. Start by mapping a single workflow end to end before selecting tools.',
      },
      {
        type: 'heading',
        text: 'Identify high-friction, low-risk steps',
      },
      {
        type: 'list',
        items: [
          'Document classification and routing',
          'Drafting summaries for human approval',
          'Extracting structured fields from unstructured text',
          'Suggesting next actions based on history',
        ],
      },
      {
        type: 'heading',
        text: 'Design for oversight',
      },
      {
        type: 'paragraph',
        text:
          'Build review queues, confidence thresholds, and logging from day one. Automation should accelerate experts, not replace accountability.',
      },
      {
        type: 'paragraph',
        text:
          'Measure time saved, error rates, and override frequency. If humans constantly correct the same mistakes, refine prompts, training data, or rules—not just the model choice.',
      },
    ],
  },
]

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insights.find((a) => a.slug === slug)
}
