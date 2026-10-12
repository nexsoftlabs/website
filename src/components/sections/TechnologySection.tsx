import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

const groups = [
  {
    name: 'Frontend',
    items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS'],
  },
  {
    name: 'Backend',
    items: ['C#', 'ASP.NET Core', 'Python', 'REST APIs'],
  },
  {
    name: 'Data',
    items: ['PostgreSQL', 'SQL Server', 'MySQL'],
  },
  {
    name: 'Cloud & DevOps',
    items: ['AWS', 'Docker', 'CI/CD', 'Infrastructure automation'],
  },
  {
    name: 'AI & integration',
    items: ['AI APIs', 'Workflow automation', 'Third-party integrations'],
  },
]

export function TechnologySection() {
  return (
    <section className="section-padding border-t border-border-light bg-surface-elevated">
      <Container>
        <Reveal>
          <SectionHeading
            title="Modern technology. Thoughtful implementation."
            description="Capabilities we apply in client work—presented as technical skills, not vendor partnerships."
          />
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.name} delay={i * 0.04}>
              <div className="rounded-2xl border border-border-light bg-surface-inset p-6">
                <h3 className="text-sm font-semibold text-ink">{group.name}</h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-border-light bg-surface-elevated px-2.5 py-1 text-xs font-medium text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
