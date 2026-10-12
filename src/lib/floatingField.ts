/** Placeholder text for FlyonUI floating fields (must be non-empty for :placeholder-shown). */
export function floatingPlaceholder(label: string, placeholder?: string): string {
  if (placeholder?.trim()) return placeholder
  return label.replace(/\s*\*+\s*$/g, '').replace(/\s*\(optional\)\s*$/i, '').trim() || ' '
}
