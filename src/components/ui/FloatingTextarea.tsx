import { floatingPlaceholder } from '@/lib/floatingField'
import { forwardRef, useId, type TextareaHTMLAttributes } from 'react'

export interface FloatingTextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
  helperText?: string
  wrapperClassName?: string
}

export const FloatingTextarea = forwardRef<HTMLTextAreaElement, FloatingTextareaProps>(
  function FloatingTextarea(
    {
      label,
      error,
      helperText,
      wrapperClassName = 'w-full',
      className = '',
      id,
      placeholder,
      rows = 5,
      ...props
    },
    ref,
  ) {
    const autoId = useId()
    const inputId = id ?? autoId
    const errorId = `${inputId}-error`
    const helperId = `${inputId}-helper`
    const floatPlaceholder = floatingPlaceholder(label, placeholder)

    return (
      <div className={wrapperClassName}>
        <div className={`textarea-floating w-full ${error ? 'validate' : ''}`}>
          <textarea
            ref={ref}
            id={inputId}
            rows={rows}
            placeholder={floatPlaceholder}
            className={`textarea ${error ? 'is-invalid' : ''} ${className}`.trim()}
            aria-invalid={Boolean(error)}
            aria-describedby={
              error ? errorId : helperText ? helperId : undefined
            }
            {...props}
          />
          <label className="textarea-floating-label" htmlFor={inputId}>
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
