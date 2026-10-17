import type { Service } from '@/types'

export const services: Service[] = [
  {
    slug: 'software-consulting',
    title: 'Software Consulting & Architecture',
    shortTitle: 'Software Consulting & Architecture',
    summary:
      'Make major technology decisions with a clear architecture, an honest view of trade-offs and a roadmap your team can act on.',
    description:
      'We help leadership teams and product owners evaluate options, reduce risk, and align technology choices with business outcomes. From discovery workshops to architecture reviews, our consulting engagements are designed to create clarity before major investments.',
    highlights: [
      'Technical discovery and stakeholder alignment',
      'Architecture and stack evaluation',
      'Delivery planning and team structure guidance',
      'Security, scalability, and maintainability reviews',
    ],
    outcomes: [
      'A shared understanding of constraints and priorities',
      'Documented recommendations you can act on',
      'Reduced uncertainty before build or modernization',
    ],
    featured: true,
    icon: 'compass',
  },
  {
    slug: 'web-development',
    title: 'Custom Web Application Development',
    shortTitle: 'Custom Web Application Development',
    summary:
      'Replace spreadsheets, workarounds and off-the-shelf compromises with web applications shaped around how your business actually operates.',
    description:
      'We design and develop web applications that balance user experience, performance, and long-term maintainability. Whether you need an internal operations tool or a customer-facing product, we engineer solutions that fit how your business actually works.',
    highlights: [
      'Product-minded frontend and full-stack development',
      'Accessible, responsive interfaces',
      'API-driven architectures',
      'Quality-focused delivery with reviews and testing',
    ],
    outcomes: [
      'Applications tailored to real user workflows',
      'Maintainable codebases your team can extend',
      'Deployments aligned with your infrastructure',
    ],
    featured: true,
    icon: 'layout',
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile Application Development',
    shortTitle: 'Mobile Application Development',
    summary:
      'Put your service in customers’ and field teams’ hands with mobile apps that stay fast, secure and connected to your core systems.',
    description:
      'We help teams ship mobile experiences that feel native to users while remaining practical to build and maintain. From customer apps to field tools, we focus on clarity, performance, and integration with your existing systems.',
    highlights: [
      'Cross-platform and native-oriented approaches',
      'Offline-aware and connectivity-conscious UX',
      'Secure authentication and API integration',
      'App store readiness and release workflows',
    ],
    outcomes: [
      'Mobile products aligned with your brand and users',
      'Reliable integration with backend services',
      'A path from MVP to ongoing iteration',
    ],
    featured: true,
    icon: 'smartphone',
  },
  {
    slug: 'saas-development',
    title: 'SaaS Product Engineering',
    shortTitle: 'SaaS Product Engineering',
    summary:
      'Take a subscription product from validated idea to dependable platform, with tenancy, billing and permissions designed in from day one.',
    description:
      'SaaS products demand thoughtful multi-tenancy, billing, permissions, and observability from early stages. We partner with founders and product teams to engineer platforms that can grow without constant rewrites.',
    highlights: [
      'Multi-tenant architecture patterns',
      'Subscription and role-based access design',
      'Admin, analytics, and onboarding flows',
      'Iterative delivery toward production readiness',
    ],
    outcomes: [
      'A technical foundation suited to recurring revenue models',
      'Features prioritized for learning and retention',
      'Documentation and handover for your team',
    ],
    featured: true,
    icon: 'layers',
  },
  {
    slug: 'ai-automation',
    title: 'AI Integration & Workflow Automation',
    shortTitle: 'AI & Workflow Automation',
    summary:
      'Remove repetitive manual work by adding AI and automation where it is reliable, reviewable and measurable.',
    description:
      'We identify practical places where AI and automation reduce manual work without compromising quality or compliance. Our approach emphasizes measurable workflow improvements, human oversight, and integration with tools you already use.',
    highlights: [
      'Workflow mapping and automation opportunities',
      'AI-assisted classification, extraction, and routing',
      'Integration with CRMs, ticketing, and document systems',
      'Guardrails, logging, and review loops',
    ],
    outcomes: [
      'Faster handling of repetitive tasks',
      'Clear boundaries for automated vs. human decisions',
      'Solutions that fit existing operations',
    ],
    featured: true,
    icon: 'sparkles',
  },
  {
    slug: 'cloud-modernization',
    title: 'Cloud, APIs & Modernization',
    shortTitle: 'Cloud, APIs & Modernization',
    summary:
      'Connect systems through well-designed APIs and move aging software onto infrastructure that deploys predictably and scales with demand.',
    description:
      'We help teams modernize infrastructure and delivery practices so software ships with confidence. From containerization to CI/CD pipelines, we focus on changes that improve reliability without unnecessary complexity.',
    highlights: [
      'Cloud architecture and cost-conscious design',
      'Containerization and environment parity',
      'CI/CD pipeline design and automation',
      'Monitoring, logging, and operational readiness',
    ],
    outcomes: [
      'More predictable deployments',
      'Infrastructure that scales with demand',
      'Reduced friction for engineering teams',
    ],
    featured: true,
    icon: 'cloud',
  },
  {
    slug: 'api-integration',
    title: 'API Development & System Integration',
    shortTitle: 'API & Integration',
    summary:
      'Connect products, data sources, and third-party services with reliable APIs and integration layers.',
    description:
      'Well-designed APIs and integrations keep systems coherent as your product ecosystem grows. We design contracts, implement services, and document interfaces so teams can integrate safely.',
    highlights: [
      'RESTful API design and documentation',
      'Third-party and legacy system integration',
      'Event-driven and webhook patterns where appropriate',
      'Versioning and backward compatibility planning',
    ],
    outcomes: [
      'Systems that exchange data reliably',
      'Clear API contracts for internal and external consumers',
      'Reduced manual data handling',
    ],
    featured: false,
    icon: 'plug',
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design & Digital Product Strategy',
    shortTitle: 'UI/UX & Product Strategy',
    summary:
      'Shape intuitive experiences and product direction before and during engineering.',
    description:
      'Strong products start with understanding users and defining flows that support business goals. We collaborate on research-informed UX, interface systems, and product strategy that inform engineering decisions.',
    highlights: [
      'User journey mapping and information architecture',
      'Wireframes and high-fidelity UI direction',
      'Design systems and component thinking',
      'Workshop facilitation with stakeholders',
    ],
    outcomes: [
      'Shared product vision across teams',
      'Interfaces that reduce user friction',
      'Design decisions tied to measurable goals',
    ],
    featured: false,
    icon: 'palette',
  },
  {
    slug: 'legacy-modernization',
    title: 'Legacy Application Modernization',
    shortTitle: 'Legacy Modernization',
    summary:
      'Gradually modernize critical systems without disrupting day-to-day operations.',
    description:
      'Legacy modernization is as much about risk management as technology. We help you sequence migrations, strangle monoliths thoughtfully, and preserve business continuity while improving maintainability.',
    highlights: [
      'System assessment and migration roadmaps',
      'Incremental refactoring and service extraction',
      'Data migration planning',
      'Parallel run and validation strategies',
    ],
    outcomes: [
      'Reduced dependency on fragile systems',
      'Modern stacks your team can support',
      'Controlled rollout with clear checkpoints',
    ],
    featured: false,
    icon: 'refresh',
  },
  {
    slug: 'dedicated-engineering',
    title: 'Dedicated Engineering & Technical Consulting',
    shortTitle: 'Dedicated Engineering',
    summary:
      'Augment your team with experienced engineers aligned to your roadmap and standards.',
    description:
      'When you need additional capacity or specialized skills, we embed as an extension of your team—following your processes, collaborating in your tools, and delivering alongside your stakeholders.',
    highlights: [
      'Flexible engagement models',
      'Code review and engineering best practices',
      'Knowledge transfer and documentation',
      'Collaboration with existing product and engineering leads',
    ],
    outcomes: [
      'Accelerated delivery on priority initiatives',
      'Shared ownership of quality and architecture',
      'Skills uplift for your internal team',
    ],
    featured: false,
    icon: 'users',
  },
]

export const featuredServices = services.filter((s) => s.featured)

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export const serviceNavItems = featuredServices.map((s) => ({
  label: s.shortTitle,
  href: `/services/${s.slug}`,
}))
