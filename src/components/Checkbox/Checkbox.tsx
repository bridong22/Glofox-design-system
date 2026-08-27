import { forwardRef, useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

// Real, accessible checkbox: a native <input type="checkbox"> is kept in the
// DOM (visually hidden via opacity, not display:none) so it stays focusable,
// keyboard-operable, and works with forms/screen readers. The decorative box
// and checkmark are a sibling <span>, toggled purely with CSS via the
// `:checked` / `:disabled` / `:focus-visible` pseudo-classes on the input —
// the same technique this design system already relies on for other native
// controls (see Input, Select).
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, id, ...rest }, ref) => {
    const generatedId = useId();
    const checkboxId = id ?? generatedId;
    const wrapperClasses = [styles.wrapper, className].filter(Boolean).join(' ');

    return (
      <label className={wrapperClasses} htmlFor={checkboxId}>
        <span className={styles.control}>
          <input ref={ref} id={checkboxId} type="checkbox" className={styles.input} {...rest} />
          <span className={styles.box} aria-hidden="true">
            <svg className={styles.checkmark} viewBox="0 0 12 10" fill="none">
              <path
                d="M1 5L4.5 8.5L11 1.5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </span>
        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  },
);

Checkbox.displayName = 'Checkbox';
