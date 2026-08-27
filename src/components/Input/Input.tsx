import { forwardRef } from 'react';
import type { InputHTMLAttributes, Ref, TextareaHTMLAttributes } from 'react';
import styles from './Input.module.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  error?: boolean;
  errorMessage?: string;
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
    { error = false, errorMessage, className, placeholder = 'Work email', type = 'text', rows, ...rest },
    ref,
  ) => {
    const isTextarea = type === 'textarea';
    const classes = [styles.input, isTextarea && styles.textarea, error && styles.error, className]
      .filter(Boolean)
      .join(' ');

    return (
      <div className={styles.wrapper}>
        {isTextarea ? (
          <textarea
            ref={ref as Ref<HTMLTextAreaElement>}
            className={classes}
            placeholder={placeholder}
            rows={rows ?? 3}
            aria-invalid={error || undefined}
            {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <input
            ref={ref as Ref<HTMLInputElement>}
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
