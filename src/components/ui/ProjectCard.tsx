import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/Button'
import type { Project } from '@/types'

interface ProjectCardProps {
  project: Project
}

function ProjectMockup({ id }: { id: string }) {
  if (id === 'ops-intelligence') {
    return (
      <div className="relative h-48 overflow-hidden rounded-xl border border-white/10 bg-ink/40 p-3">
        <div className="mb-2 flex gap-2">
          <div className="h-2 w-12 rounded-full bg-white/20" />
          <div className="h-2 w-8 rounded-full bg-cyan-brand/40" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-lg bg-white/5 p-2">
              <div className="h-1.5 w-8 rounded bg-white/20" />
              <div className="mt-2 h-6 rounded bg-indigo-brand/30" />
            </div>
          ))}
        </div>
        <div className="mt-2 h-16 rounded-lg bg-gradient-to-r from-indigo-brand/20 to-cyan-brand/10" />
      </div>
    )
  }
  if (id === 'subscription-saas') {
    return (
      <div className="relative h-48 overflow-hidden rounded-xl border border-white/10 bg-ink/40 p-3">
        <div className="flex gap-2">
          <div className="w-1/3 space-y-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-2 rounded bg-white/10" />
            ))}
          </div>
          <div className="flex-1 rounded-lg border border-white/10 bg-white/5 p-2">
            <div className="h-2 w-16 rounded bg-violet-brand/50" />
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="h-12 rounded bg-indigo-brand/25" />
              <div className="h-12 rounded bg-cyan-brand/20" />
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="relative h-48 overflow-hidden rounded-xl border border-white/10 bg-ink/40 p-3">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-lg bg-cyan-brand/30" />
        <div className="flex-1 space-y-1">
          <div className="h-2 w-full rounded bg-white/15" />
          <div className="h-2 w-2/3 rounded bg-white/10" />
        </div>
      </div>
      <div className="mt-3 space-y-2">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg bg-white/5 p-2">
            <div className="h-2 w-2 rounded-full bg-indigo-brand" />
            <div className="h-1.5 flex-1 rounded bg-white/15" />
            <div className="h-4 w-10 rounded bg-cyan-brand/25 text-[8px]" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      className={`flex flex-col overflow-hidden rounded-2xl border border-border-light bg-surface-elevated shadow-soft`}
    >
      <div className={`bg-gradient-to-br ${project.accent} p-6 pb-0`}>
        <span className="inline-block rounded-full bg-surface-elevated/95 px-2.5 py-0.5 text-xs font-medium text-ink">
          {project.tag}
        </span>
        <div className="mt-4">
          <ProjectMockup id={project.id} />
        </div>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-semibold tracking-wide text-indigo-brand uppercase">
          {project.category}
        </p>
        <h3 className="mt-2 text-xl font-semibold text-ink">{project.title}</h3>
        <dl className="mt-4 space-y-3 text-sm text-muted">
          <div>
            <dt className="font-medium text-ink">Challenge</dt>
            <dd className="mt-1 leading-relaxed">{project.problem}</dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Approach</dt>
            <dd className="mt-1 leading-relaxed">{project.solution}</dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Potential value</dt>
            <dd className="mt-1 leading-relaxed">{project.value}</dd>
          </div>
        </dl>
        <div className="mt-6">
          <Button to="/contact" variant="secondary" size="sm">
            Discuss a similar project
          </Button>
        </div>
      </div>
    </article>
  )
}

export function ProjectCardCompact({ project }: ProjectCardProps) {
  return (
    <Link
      to="/work"
      className="block rounded-2xl border border-border-light bg-surface-elevated p-6 shadow-soft hover:border-indigo-brand/20"
    >
      <span className="text-xs font-medium text-muted">{project.tag}</span>
      <h3 className="mt-2 font-semibold text-ink">{project.title}</h3>
      <p className="mt-2 text-sm text-muted line-clamp-2">{project.problem}</p>
    </Link>
  )
}
