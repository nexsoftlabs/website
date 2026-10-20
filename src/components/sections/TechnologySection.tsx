import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

const technologyGroups = [
  { name: 'Frontend', use: 'Interfaces people enjoy using', items: ['React', 'TypeScript', 'JavaScript', 'HTML & CSS'] },
  { name: 'Backend & APIs', use: 'Business logic and integrations', items: ['C#', 'ASP.NET Core', 'Python', 'REST APIs'] },
  { name: 'Data', use: 'Reliable, well-modeled storage', items: ['PostgreSQL', 'SQL Server', 'MySQL'] },
  { name: 'Cloud & DevOps', use: 'Predictable, repeatable releases', items: ['AWS', 'Docker', 'CI/CD', 'Infrastructure automation'] },
  { name: 'AI & Integration', use: 'Automation with oversight', items: ['AI APIs', 'Workflow automation', 'Third-party integrations'] },
]

export function TechnologySection() {
  return (
    <section className="section bg-surface" aria-labelledby="technology-heading">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow-rule text-brand">Technology</p>
            <h2 id="technology-heading" className="display-lg mt-2 text-balance text-heading">
              The right tools for the right challenge.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8">
            <p className="leading-relaxed text-muted">
              We choose established, well-supported technologies that your future team can hire for,
              and we explain why each one fits your constraints. Listed as skills, not vendor
              partnerships.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid border-t border-heading sm:grid-cols-2 lg:mt-20 lg:grid-cols-5">
          {technologyGroups.map((group, i) => (
            <Reveal
              key={group.name}
              delay={0.05 * i}
              className="border-b border-hairline py-8 sm:pr-8 lg:border-b-0 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <h3 className="text-base font-semibold text-heading">{group.name}</h3>
              <p className="mt-1 text-sm text-muted">{group.use}</p>
              <ul className="mt-6 space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="tech-chip text-[0.9375rem] text-body">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
