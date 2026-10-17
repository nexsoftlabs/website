import type { ShowcaseTab } from '@/types'

export const showcaseTabs: ShowcaseTab[] = [
  {
    id: 'operations',
    label: 'Operations platform',
    title: 'A single operating picture for a field-service business',
    description:
      'Corvane is a fictional facilities company running jobs across dozens of sites. Dispatchers, technicians and managers each see the same live data through the interface built for their role.',
    problem:
      'Work orders live in spreadsheets, updates arrive by phone and managers find out about missed visits after the customer complains.',
    approach: [
      'Map the real dispatch workflow with the people who run it, before designing screens',
      'One API and data model shared by the web dashboard and the technicians’ mobile app',
      'Status changes captured at the source, with offline-tolerant sync for low-signal sites',
      'Role-based views and an audit trail for every change to a job',
    ],
    value:
      'Fewer missed visits, faster dispatch decisions and reporting that no longer needs a weekly spreadsheet merge.',
    technologies: ['React', 'TypeScript', 'ASP.NET Core', 'PostgreSQL', 'Docker'],
    useCases: ['Field service & maintenance', 'Logistics & fulfillment', 'Multi-site operations'],
    relatedService: 'web-development',
  },
  {
    id: 'saas',
    label: 'SaaS subscription platform',
    title: 'A multi-tenant subscription product, ready to grow',
    description:
      'A B2B scheduling product for clinics, sold on monthly plans. Each customer organization gets its own workspace, users and billing.',
    problem:
      'The prototype won early customers, but every new account means manual setup, and pricing changes require code changes.',
    approach: [
      'Tenant isolation and role-based permissions designed into the data model from the start',
      'Self-service onboarding, plan changes and invoices handled through a billing provider',
      'Usage and health metrics so the team can see which accounts need attention',
      'Feature flags and CI/CD so releases ship safely to every tenant',
    ],
    value:
      'New customers can sign up and pay without the team’s involvement, and the platform can add plans without a rewrite.',
    technologies: ['React', 'Python', 'PostgreSQL', 'AWS', 'CI/CD'],
    useCases: ['Vertical B2B SaaS', 'Membership & subscription products', 'Partner portals'],
    relatedService: 'saas-development',
  },
  {
    id: 'portal',
    label: 'Mobile customer portal',
    title: 'A customer app that takes pressure off the support line',
    description:
      'A mobile portal for a fictional utilities provider, giving customers self-service access to their account, bills and service requests.',
    problem:
      'Most support calls are routine — balance checks, meter readings, outage updates — and the existing website is hard to use on a phone.',
    approach: [
      'Start from the ten most common support requests and design around them',
      'Secure sign-in and an API layer in front of the existing billing system, which stays unchanged',
      'Push notifications for outages and bills, with clear preferences control',
      'Accessible, readable interfaces tested with real customers before launch',
    ],
    value:
      'Routine requests move to self-service, giving the support team time for issues that need a person.',
    technologies: ['Cross-platform mobile', 'TypeScript', 'REST APIs', 'SQL Server'],
    useCases: ['Customer self-service', 'Member & loyalty apps', 'Companion apps for web products'],
    relatedService: 'mobile-app-development',
  },
  {
    id: 'documents',
    label: 'AI document workflow',
    title: 'AI-assisted document intake, with people in control',
    description:
      'An intake workflow for a fictional insurance broker that reads incoming documents, extracts key fields and routes each case to the right team.',
    problem:
      'Staff re-key data from hundreds of PDFs and emails a week, and urgent cases wait in the same queue as routine ones.',
    approach: [
      'Measure the current process first, so improvement can be shown rather than assumed',
      'AI extraction with confidence scores; anything uncertain goes to a human reviewer',
      'Routing rules the operations team can adjust without a developer',
      'Full history of what the system suggested and what a person approved',
    ],
    value:
      'Less manual re-keying, urgent cases surfaced sooner and a clear record for compliance reviews.',
    technologies: ['Python', 'AI APIs', 'Workflow automation', 'PostgreSQL', 'AWS'],
    useCases: ['Invoice & claims intake', 'Support ticket triage', 'Compliance review assistance'],
    relatedService: 'ai-automation',
  },
]
