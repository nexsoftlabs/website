import type { InsightBlock } from '@/types'

interface ArticleBodyProps {
  blocks: InsightBlock[]
}

export function ArticleBody({ blocks }: ArticleBodyProps) {
  return (
    <div className="space-y-6 text-muted leading-relaxed">
      {blocks.map((block, i) => {
        if (block.type === 'paragraph') {
          return <p key={i}>{block.text}</p>
        }
        if (block.type === 'heading') {
          return (
            <h2 key={i} className="pt-2 text-xl font-semibold text-ink">
              {block.text}
            </h2>
          )
        }
        return (
          <ul key={i} className="list-disc space-y-2 pl-5">
            {block.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )
      })}
    </div>
  )
}
