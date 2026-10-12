import { projects } from '@/data/projects'
import { Container } from '@/components/ui/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { Seo } from '@/components/ui/Seo'

export function WorkPage() {
  return (
    <>
      <Seo
        title="Our Work"
        description="Illustrative concept projects demonstrating how NexSoft Labs approaches product engineering across business software, SaaS, and automation."
        path="/work"
      />
      <PageHeader
        eyebrow="Portfolio"
        title="Selected work & concept studies"
        description="These showcases are labeled as concept or illustrative projects. They reflect our thinking—not fabricated client deliveries or metrics."
      />
      <Container className="section-padding">
        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </>
  )
}
