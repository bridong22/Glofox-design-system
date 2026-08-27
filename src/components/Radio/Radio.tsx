import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import styles from './Radio.module.css';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

// Real, accessible radio button: a native <input type="radio"> stays in the
// DOM (visually hidden via opacity, not display:none) so it's focusable,
// keyboard-operable, and participates in native radio-group behavior
// (grouping by `name`, arrow-key navigation, form submission). The ring +
// dot are a decorative sibling <span>, toggled with CSS via `:checked` on
// the input, matching Checkbox's technique.
export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, id, ...rest }, ref) => {
    const generatedId = useId();
    const radioId = id ?? generatedId;
    const wrapperClasses = [styles.wrapper, className].filter(Boolean).join(' ');

    return (
      <label className={wrapperClasses} htmlFor={radioId}>
        <span className={styles.control}>
          <input ref={ref} id={radioId} type="radio" className={styles.input} {...rest} />
          <span className={styles.circle} aria-hidden="true" />
        </span>
        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  },
);

Radio.displayName = 'Radio';
