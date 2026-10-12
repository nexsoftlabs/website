import { forwardRef, useId, type SelectHTMLAttributes } from 'react'

export interface FloatingSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  helperText?: string
  wrapperClassName?: string
  options: { value: string; label: string }[]
}

export const FloatingSelect = forwardRef<HTMLSelectElement, FloatingSelectProps>(
  function FloatingSelect(
    {
      label,
      error,
      helperText,
      options,
      wrapperClassName = 'w-full',
      className = '',
      id,
      ...props
    },
    ref,
  ) {
    const autoId = useId()
    const selectId = id ?? autoId
    const errorId = `${selectId}-error`
    const helperId = `${selectId}-helper`

    return (
      <div className={wrapperClassName}>
        <div className={`select-floating w-full ${error ? 'validate' : ''}`}>
          <select
            ref={ref}
            id={selectId}
            className={`select ${error ? 'is-invalid' : ''} ${className}`.trim()}
            aria-invalid={Boolean(error)}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            {...props}
          >
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <label className="select-floating-label" htmlFor={selectId}>
            {label}
          </label>
          {error ? (
            <span className="helper-text ps-3 text-error" id={errorId} role="alert">
              {error}
            </span>
          ) : helperText ? (
            <span className="helper-text ps-3" id={helperId}>
              {helperText}
            </span>
          ) : null}
        </div>
      </div>
    )
  },
)
