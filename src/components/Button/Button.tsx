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

    const iconSize = size === 'small' ? 16 : 24;

    return (
      <button ref={ref} className={classes} {...rest}>
        {children}
        {variant === 'ghost' && (
          <>
            {/* Figma: Ghost's trailing arrow is diagonal (↗) by default/disabled,
                but swaps to a plain right arrow (→) on Hover/Pressed — toggled
                via CSS so no interaction state needs to live in JS. */}
            <Icon name="arrow-up-right" size={iconSize} className={`${styles.icon} ${styles.iconDefault}`} />
            <Icon name="arrow-right" size={iconSize} className={`${styles.icon} ${styles.iconHover}`} />
          </>
        )}
      </button>
    );
  },
);

Button.displayName = 'Button';
