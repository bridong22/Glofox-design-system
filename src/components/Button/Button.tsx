import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Icon } from '../Icon';
import styles from './Button.module.css';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  children?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'small', className, children = 'Get Free Demo', ...rest }, ref) => {
    const classes = [styles.button, styles[variant], styles[size], className].filter(Boolean).join(' ');

    return (
      <button ref={ref} className={classes} {...rest}>
        {children}
        {variant === 'ghost' && (
          <Icon name="arrow-up-right" size={size === 'small' ? 16 : 24} className={styles.icon} />
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
