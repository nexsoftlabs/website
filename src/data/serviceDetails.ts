import type { ServiceDetail, ServiceSlug } from '@/types'

export const serviceDetails: Partial<Record<ServiceSlug, ServiceDetail>> = {
  'software-consulting': {
    headline: 'Make the big technology decisions with confidence.',
    intro:
      'Before you commit budget to a build, a rewrite or a new platform, get an independent view of the options. We review what exists, test assumptions against your goals and give you a recommendation you can defend to your board, your investors or your team.',
    audience: [
      { title: 'Founders before a first build', text: 'Choose a stack and architecture that suit your stage, without over-engineering for scale you do not have yet.' },
      { title: 'Leaders inheriting a system', text: 'Understand what you own, where the risks are and what it would realistically take to improve it.' },
      { title: 'Teams at a crossroads', text: 'Decide between rebuilding, refactoring, buying or integrating, with the trade-offs laid out plainly.' },
    ],
    problems: [
      'A major rebuild is being discussed, but no one can say what it will really cost or risk',
      'Delivery has slowed and it is unclear whether the cause is the code, the process or the team',
      'Vendors are each recommending their own product, and you need a neutral view',
      'You need a technical plan credible enough to raise funding or secure budget against',
    ],
    process: [
      { title: 'Context', text: 'Stakeholder interviews and a review of goals, constraints, budget and timeline.' },
      { title: 'Assessment', text: 'Hands-on review of code, infrastructure, data and delivery practices, where they exist.' },
      { title: 'Options', text: 'Two or three realistic paths, each with cost ranges, risks and what you would give up.' },
      { title: 'Roadmap', text: 'A recommended plan with phases, milestones and decision points, presented to your team.' },
    ],
    faqs: [
      { question: 'Do we have to build with you afterwards?', answer: 'No. The recommendations are yours to act on with any team. Many clients use the roadmap to brief an internal team or another supplier.' },
      { question: 'What do we receive at the end?', answer: 'A written assessment and roadmap, architecture diagrams where relevant, and a session to walk your stakeholders through the reasoning and answer questions.' },
      { question: 'How long does an advisory engagement take?', answer: 'Most reviews run for a few weeks, not months. The length depends on how much already exists to inspect and how many people we need to speak with. We agree the scope and the date of the readout before we start.' },
      { question: 'Do you need access to our code and systems?', answer: 'A useful review does. We work with read access under your existing security rules, and we say so if a conclusion is limited by something we could not see.' },
      { question: 'Can the findings stay confidential?', answer: 'Yes. The work is done under a confidentiality agreement, and the documents are written for your team. We do not publish client situations or reuse your material as a case study.' },
      { question: 'Who from our side needs to be involved?', answer: 'Someone who owns the business outcome, and the people who know how the system is built and operated. We keep interviews short and scheduled, rather than asking for a full-time commitment.' },
      { question: 'Is this useful if we already have engineers?', answer: 'Often that is exactly when it helps. An outside view can settle a disagreement, pressure-test a plan before budget is committed, or give leadership a recommendation that does not come from the team that has to build it.' },
      { question: 'How is this different from a generic audit checklist?', answer: 'We start from your decision, not a template. The output is a small number of realistic options, with the trade-offs, risks and what each one would cost you to pursue.' },
      { question: 'What does an engagement like this cost?', answer: 'It is scoped and priced as its own piece of work, separate from any later build. After a first conversation we send a fixed proposal for the review, so you know the cost before it begins.' },
    ],
  },
  'web-development': {
    headline: 'Web applications built around how your business really works.',
    intro:
      'Off-the-shelf tools force your processes to fit their assumptions. We design and build web applications that fit yours: internal platforms that remove manual work, and customer-facing products that people find easy to use.',
    audience: [
      { title: 'Operations-heavy businesses', text: 'Replace spreadsheets, email chains and disconnected tools with one system everyone trusts.' },
      { title: 'Companies serving customers online', text: 'Portals, booking flows and account areas that reduce support load and improve retention.' },
      { title: 'Teams outgrowing no-code', text: 'Move a proven internal tool onto a maintainable codebase without losing what works.' },
    ],
    problems: [
      'Critical processes depend on spreadsheets that only one or two people understand',
      'Staff re-enter the same data into several systems every day',
      'Customers phone or email for things they should be able to do themselves',
      'The current application is slow, fragile or impossible to change safely',
    ],
    process: [
      { title: 'Workflow mapping', text: 'We sit with the people who do the work to understand steps, exceptions and pain points.' },
      { title: 'Prototype', text: 'A clickable prototype validates the experience with real users before development starts.' },
      { title: 'Iterative build', text: 'Features delivered in short cycles with demos, automated tests and code review throughout.' },
      { title: 'Launch & adoption', text: 'Data migration, training material and a supported rollout so the system is actually used.' },
    ],
    faqs: [
      { question: 'Can the application integrate with our existing tools?', answer: 'Usually, yes. We assess the APIs and data exports of your current systems early, and design integrations so the new application complements what you keep.' },
      { question: 'Will it work on phones and tablets?', answer: 'Yes. Interfaces are responsive by default, and we design specifically for the devices your users rely on, including in the field.' },
      { question: 'Who designs the interface?', answer: 'We do, with your users. Workflows are mapped with the people who do the work, then prototyped and tested before development, so the design is part of the engagement rather than a separate handoff.' },
      { question: 'Can you move our existing data across?', answer: 'Yes, when the source data can be exported reliably. We map fields, clean what needs cleaning, rehearse the migration and keep a fallback until the new system is trusted.' },
      { question: 'Will our own team be able to maintain it?', answer: 'That is a goal of the build. You receive the repository, documentation and a handover, and we write the code so another competent team can change it without us.' },
      { question: 'Do you work in the stack we already use?', answer: 'Where it is a sound choice, yes. If it would create long-term risk, we say so and recommend an alternative, with the trade-off explained before any decision.' },
      { question: 'How do you approach security?', answer: 'Authentication, permissions, input validation and dependency updates are part of the build, not a later pass. Access to production is limited, and we agree how secrets and personal data are handled before development starts.' },
      { question: 'What about accessibility?', answer: 'We build to WCAG 2.2 AA: keyboard access, visible focus, sufficient contrast and labels that assistive technology can use. We test the main flows rather than treating accessibility as a checklist at the end.' },
      { question: 'How are changes handled once development has started?', answer: 'New requests are written down, estimated and placed against the current phase. You decide what moves in and what waits, so scope changes stay visible instead of quietly consuming the timeline.' },
    ],
  },
  'mobile-app-development': {
    headline: 'Mobile apps people keep using after the first week.',
    intro:
      'A mobile app earns its place on someone’s phone by being fast, focused and reliable. We design and build apps for customers and field teams that connect securely to your systems and keep working when the signal does not.',
    audience: [
      { title: 'Customer-facing brands', text: 'Self-service apps for accounts, bookings, orders and loyalty that reduce friction and support calls.' },
      { title: 'Field and frontline teams', text: 'Tools for inspections, deliveries and service visits that work offline and sync when connected.' },
      { title: 'Products with a web platform', text: 'Companion apps that extend an existing product to mobile without duplicating its logic.' },
    ],
    problems: [
      'Your web experience is difficult to use on a phone, and customers notice',
      'Field staff capture information on paper and re-type it later',
      'A previous app has poor reviews and low usage',
      'You need to reach users through notifications rather than email',
    ],
    process: [
      { title: 'Use-case focus', text: 'Identify the few jobs users will open the app for, and design around those first.' },
      { title: 'Design & prototype', text: 'Native-feeling interaction patterns, tested on real devices with representative users.' },
      { title: 'Build & integrate', text: 'Secure authentication, API integration and offline behavior engineered from the start.' },
      { title: 'Release', text: 'App store preparation, staged rollout and crash and usage monitoring after launch.' },
    ],
    faqs: [
      { question: 'Native or cross-platform?', answer: 'It depends on your budget, timeline and the device features you need. We explain the trade-offs and recommend an approach; for many business apps a single cross-platform codebase is the practical choice.' },
      { question: 'Do you handle app store submission?', answer: 'Yes. We prepare builds, listings and review requirements, and submit under your own developer accounts so you retain ownership.' },
      { question: 'Will it work for both iOS and Android?', answer: 'Yes, unless there is a clear reason to ship on one platform first. We recommend starting with the devices your users actually have, and we test on real hardware rather than simulators alone.' },
      { question: 'Can the app work without a signal?', answer: 'When the job requires it. Field workflows can capture data offline and sync later, with clear rules for conflicts. We only add offline support where it earns its complexity.' },
      { question: 'Can it use our existing backend?', answer: 'Yes. If you already have APIs, we build against them. If you do not, we can design the services the app needs, or connect it to the systems you already run the business on.' },
      { question: 'What about accounts, login and notifications?', answer: 'Sign-in, permissions and push notifications are designed with the rest of the product. Notification content stays useful and limited, and users can control what they receive.' },
      { question: 'Who owns the app store accounts?', answer: 'You do. Listings, certificates and store accounts stay in your name, and we work inside them so you are never locked out of your own product.' },
      { question: 'How do updates work after launch?', answer: 'We can ship updates with you, or hand the project to your team with the pipeline already in place. Store review times are outside anyone’s full control, and we plan releases with that in mind.' },
      { question: 'How soon can we try it on a phone?', answer: 'Early. We aim for an installable build of the core flow well before the full release, so you and a few real users can react to it while there is still time to change course.' },
    ],
  },
  'saas-development': {
    headline: 'From validated idea to a SaaS platform that can grow.',
    intro:
      'Subscription products have to get the fundamentals right early: tenancy, permissions, billing, onboarding and observability. We engineer SaaS platforms that let you sell, onboard and support customers without manual effort, and evolve without a rewrite.',
    audience: [
      { title: 'Founders with early traction', text: 'Turn a prototype or service business into a product that customers can sign up for and pay for themselves.' },
      { title: 'Companies productizing know-how', text: 'Package internal tools or expertise into software you can sell to others in your industry.' },
      { title: 'Existing SaaS teams', text: 'Strengthen architecture, billing or multi-tenancy ahead of your next growth stage.' },
    ],
    problems: [
      'Every new customer requires manual setup by the team',
      'Pricing or plan changes need a developer and a deployment',
      'One customer’s data or load can affect everyone else',
      'There is no clear view of usage, health or which accounts are at risk',
    ],
    process: [
      { title: 'Product shaping', text: 'Define the core value, the initial plans and what must be true at launch versus later.' },
      { title: 'Platform foundations', text: 'Tenant model, roles and permissions, billing integration and environments designed upfront.' },
      { title: 'Feature delivery', text: 'The product built in increments, with feature flags and CI/CD so releases stay safe.' },
      { title: 'Growth readiness', text: 'Usage analytics, monitoring and performance work so the platform scales with demand.' },
    ],
    faqs: [
      { question: 'Can you take over an existing SaaS codebase?', answer: 'Yes. We start with a technical review, stabilize the most important risks and then continue feature development, often alongside your existing team.' },
      { question: 'Which billing providers do you work with?', answer: 'We integrate with established subscription billing providers rather than building billing from scratch, and recommend one based on your markets, currencies and pricing model.' },
      { question: 'How do you keep one customer’s data separate from another’s?', answer: 'Tenancy is a foundation, not a feature added later. Every query, file and background job is scoped to the account it belongs to, and we test that isolation rather than assuming it.' },
      { question: 'Can customers sign up and pay without our team?', answer: 'That is the usual goal. Self-serve signup, plan selection and billing are part of the product, with a manual path kept only for the cases that genuinely need a person.' },
      { question: 'Can different users have different permissions?', answer: 'Yes. Roles are designed around what each kind of user should see and change, including administrators on your side and members inside a customer account.' },
      { question: 'What happens to current customers if we are replacing a product?', answer: 'We migrate them in stages. Existing accounts keep working while the new platform is proven, and we agree how data, logins and billing move across before anyone is asked to switch.' },
      { question: 'Will we be able to see how the product is being used?', answer: 'Yes. We add product analytics and operational monitoring so you can see activation, usage and failures, and we agree which events matter before we instrument everything.' },
      { question: 'Can the product be white-labelled for larger customers?', answer: 'When that is part of the business model. Custom domains, branding and isolated configuration are possible, and we design for them only if you expect to sell that way.' },
      { question: 'How do releases stay safe as the product grows?', answer: 'Automated tests, review and a deployment pipeline are standard. Risky changes can ship behind a feature flag, so a problem can be turned off without a full rollback.' },
    ],
  },
  'ai-automation': {
    headline: 'Practical AI and automation, with people still in control.',
    intro:
      'AI is most valuable when it removes repetitive work from a well-understood process. We find those opportunities, measure the baseline and build automations with clear confidence thresholds, human review and an audit trail.',
    audience: [
      { title: 'Document-heavy operations', text: 'Invoices, claims, applications and forms that are read and re-keyed by hand today.' },
      { title: 'Support and service teams', text: 'Triage, routing and draft responses that help people handle more requests, better.' },
      { title: 'Leaders exploring AI', text: 'A grounded assessment of where AI will and will not pay back in your business.' },
    ],
    problems: [
      'Skilled people spend hours copying data between documents and systems',
      'Requests sit in a shared inbox until someone has time to sort them',
      'An AI pilot impressed in a demo but could not be trusted in production',
      'There is pressure to “use AI” without a clear business case',
    ],
    process: [
      { title: 'Opportunity mapping', text: 'Map the workflow, volumes and error costs to find where automation genuinely helps.' },
      { title: 'Proof of value', text: 'A focused pilot on real data, measured against the current process.' },
      { title: 'Production build', text: 'Integration with your tools, confidence thresholds, human review steps and logging.' },
      { title: 'Monitor & refine', text: 'Ongoing measurement of accuracy and time saved, with adjustments as patterns change.' },
    ],
    faqs: [
      { question: 'Is our data safe with AI services?', answer: 'We select providers and configurations that meet your data-handling requirements, minimize what is sent and keep sensitive processing within agreed boundaries. These choices are documented and reviewed with you.' },
      { question: 'What if the AI gets something wrong?', answer: 'Every automation we build has a fallback. Low-confidence results go to a person, decisions are logged and the system can be tuned or switched off without disrupting operations.' },
      { question: 'Do you build a model, or use an existing one?', answer: 'Almost always an existing model, called through an API and wrapped in your workflow. Training a model from scratch is rarely the right first step, and we say so when a simpler approach will do.' },
      { question: 'How do you decide what is worth automating?', answer: 'We look at volume, how repetitive the task is, the cost of an error and whether a person can review the result. If those do not line up, we recommend leaving the step alone.' },
      { question: 'How is success measured?', answer: 'Against the current process, before anything is built: time spent, error rate and how often a person has to intervene. The pilot is judged on those numbers, not on how impressive a demo looks.' },
      { question: 'Will this replace our staff?', answer: 'The aim is to remove repetitive work, not to remove the people who understand the work. Review steps stay with your team, and we design the rollout so staff can see what the system did and correct it.' },
      { question: 'Is our content used to train someone else’s model?', answer: 'Not by default. We choose settings and providers that do not use your data for training, and we confirm that in writing as part of the design.' },
      { question: 'What does the AI usage itself cost?', answer: 'It varies with volume and which model is used. We estimate it from your real document or request volumes during the pilot, so the running cost is visible before you commit to production.' },
      { question: 'Can we turn an automation off?', answer: 'Yes. Each automation can be paused without taking down the surrounding process, and the manual path remains available for the work it was handling.' },
    ],
  },
  'cloud-modernization': {
    headline: 'Modernize the systems your business depends on, without stopping it.',
    intro:
      'Aging applications, manual deployments and brittle integrations slow everything down. We connect your systems through well-designed APIs, move workloads to modern infrastructure and modernize legacy software step by step, keeping the business running throughout.',
    audience: [
      { title: 'Businesses on legacy software', text: 'Critical systems that are hard to change, hard to hire for and risky to leave as they are.' },
      { title: 'Teams with manual releases', text: 'Deployments that need a late night and a checklist, and still sometimes go wrong.' },
      { title: 'Organizations with siloed data', text: 'Systems that do not talk to each other, so people move data between them by hand.' },
    ],
    problems: [
      'Releases are infrequent and stressful because deployment is manual',
      'A core system runs on technology few developers still support',
      'Integrations break silently and are discovered by customers',
      'Infrastructure costs are rising with no clear view of why',
    ],
    process: [
      { title: 'Assessment', text: 'Inventory of applications, integrations, infrastructure and the risks attached to each.' },
      { title: 'Target architecture', text: 'A realistic destination and a sequence of safe, incremental steps to reach it.' },
      { title: 'Incremental migration', text: 'APIs, containers and CI/CD introduced piece by piece, with parallel running where needed.' },
      { title: 'Operate', text: 'Monitoring, alerting and documentation so your team can run the new setup confidently.' },
    ],
    faqs: [
      { question: 'Do we have to rewrite everything?', answer: 'Rarely. Most modernization succeeds by wrapping, extracting and replacing parts of a system over time, which reduces risk and delivers value earlier than a full rewrite.' },
      { question: 'Which cloud do you use?', answer: 'Our team works most with AWS, and our approach of containers, infrastructure as code and automated pipelines keeps you portable. We recommend based on your existing contracts and needs.' },
      { question: 'Will the business have to stop while this happens?', answer: 'No. Migrations are planned so the current system keeps running. Where a cutover is unavoidable, it is rehearsed, scheduled and reversible.' },
      { question: 'Can our team operate the result?', answer: 'Yes. Monitoring, runbooks and a handover are part of the work. The point of modernization is that your team can change and deploy the system without a specialist on call.' },
      { question: 'Will cloud costs go down?', answer: 'Not automatically. We make the current spend visible first, then design for what you actually use. Some moves cost more in the short term because they buy reliability you did not have.' },
      { question: 'What about the database?', answer: 'We treat data as the hardest part. Schema changes, replication and a practiced migration come before application cutover, and we do not move production data until that path has been tested.' },
      { question: 'How do you avoid locking us in?', answer: 'Infrastructure is described as code, applications run in containers where that fits, and integrations go through APIs you own. A specific cloud is a choice you can revisit, not a trap built into the design.' },
      { question: 'How are risky releases handled today versus after?', answer: 'Today’s manual releases are replaced with an automated pipeline: build, test, deploy and a way to roll back. That is often the first improvement, because it makes every later change safer.' },
      { question: 'How do we know what to modernize first?', answer: 'From the assessment. We rank systems by how often they block the business, how risky they are to leave, and how safely they can be changed, then recommend a first slice rather than a programme of everything.' },
    ],
  },
}

export const legacyServiceRedirects: Partial<Record<string, string>> = {
  'api-integration': '/services/cloud-modernization',
  'legacy-modernization': '/services/cloud-modernization',
  'ui-ux-design': '/services/web-development',
  'dedicated-engineering': '/services',
}
