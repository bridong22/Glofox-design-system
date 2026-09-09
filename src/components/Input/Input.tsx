import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes, Ref, TextareaHTMLAttributes } from 'react';
import styles from './Input.module.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  error?: boolean;
  errorMessage?: string;
  /**
   * Figma `Show title` / `Title` properties (added 2026-09-09) — an optional
   * label rendered above the field. Figma's own default is `showTitle: true`,
   * but this repo defaults to `false` to preserve every existing consumer
   * (Hero, TocSidebar, NewsletterCapture, ...) that already renders a bare
   * field with no label; opt in per-instance instead. Confirmed live: the
   * pricing wizard's fields use this exact labeled style.
   */
  showTitle?: boolean;
  title?: string;
  /**
   * Figma `Type` variant. `'textarea'` renders a multi-line `<textarea>`
   * (Figma `Type=Textarea, State=Default` — that variant only documents a
   * Default state so far, so it just inherits the shared `.input` styling
   * below plus native `:focus`/`:disabled` behavior). Any other value
   * (the default `'text'`, or a native HTML input type such as `'email'`
   * or `'password'`) renders an `<input>` with that `type` attribute,
   * preserving this component's pre-existing behavior — several consumers
   * (Hero, TocSidebar, NewsletterCapture) already pass `type="email"`.
   *
   * Figma's `Type=Select` variant is intentionally NOT mapped here — it
   * matches the separately-built `src/components/Select` component instead.
   */
  type?: 'textarea' | InputHTMLAttributes<HTMLInputElement>['type'];
  /** Only applies when `type="textarea"`. Defaults to 3 rows. */
  rows?: TextareaHTMLAttributes<HTMLTextAreaElement>['rows'];
}

export const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      error = false,
      errorMessage,
      className,
      placeholder = 'Work email',
      type = 'text',
      rows,
      showTitle = false,
      title = 'Label',
      id,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const fieldId = id ?? generatedId;
    const isTextarea = type === 'textarea';
    const classes = [styles.input, isTextarea && styles.textarea, error && styles.error, className]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={styles.wrapper}>
        {showTitle && (
          <label htmlFor={fieldId} className={styles.title}>
            {title}
          </label>
        )}
        {isTextarea ? (
          <textarea
            ref={ref as Ref<HTMLTextAreaElement>}
            id={fieldId}
            className={classes}
            placeholder={placeholder}
            rows={rows ?? 3}
            aria-invalid={error || undefined}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as Ref<HTMLInputElement>}
            id={fieldId}
            className={classes}
            type={type}
            placeholder={placeholder}
            aria-invalid={error || undefined}
            {...rest}
          />
        )}
        {error && errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';
