import { forwardRef } from 'react';
import type { InputHTMLAttributes } from 'react';
import styles from './Input.module.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error = false, errorMessage, className, placeholder = 'Work email', ...rest }, ref) => {
    const classes = [styles.input, error && styles.error, className].filter(Boolean).join(' ');

    return (
      <div className={styles.wrapper}>
        <input
          ref={ref}
          className={classes}
          placeholder={placeholder}
          aria-invalid={error || undefined}
          {...rest}
        />
        {error && errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
      </div>
    );
  },
);

Input.displayName = 'Input';
