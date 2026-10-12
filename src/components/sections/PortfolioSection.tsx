import { projects } from '@/data/projects'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { ProjectCard } from '@/components/ui/ProjectCard'

export function PortfolioSection() {
  return (
    <section className="section-padding bg-surface-page">
      <Container>
        <Reveal>
          <SectionHeading
            title="Possibilities, made tangible."
            description="Concept demonstrations that show how we think about product engineering—not fabricated client results."
          />
        </Reveal>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
