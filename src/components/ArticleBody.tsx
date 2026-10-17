import type { InsightBlock } from '@/types'

interface ArticleBodyProps {
  blocks: InsightBlock[]
}

export function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="space-y-6 text-[1.0625rem] leading-[1.75] text-body">
      {blocks.map((block, i) => {
        if (block.type === 'paragraph') {
          return <p key={i}>{block.text}</p>
        }
        if (block.type === 'heading') {
          return (
            <h2 key={i} className="pt-6 text-2xl leading-snug font-semibold tracking-[-0.02em] text-heading">
              {block.text}
            </h2>
          )
        }
        return (
          <ul key={i} className="space-y-3">
            {block.items.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-[0.85em] h-px w-4 shrink-0 bg-blue-corporate" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        )
      })}
    </div>
  )
}
