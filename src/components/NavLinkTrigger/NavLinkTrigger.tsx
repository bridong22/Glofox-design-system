import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { Icon } from '../Icon';
import styles from './NavLinkTrigger.module.css';

export interface NavLinkTriggerProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  /** Figma "Label" text property. */
  label: string;
  /**
   * Figma "State" property (Default/Open). This is a static snapshot of a
   * live hover-to-open interaction on glofox.com, not a click-toggle — the
   * consumer (e.g. NavBar) drives this from its own hover/mouseleave state
   * rather than this component managing it internally.
   */
  open?: boolean;
}

export const NavLinkTrigger = forwardRef<HTMLButtonElement, NavLinkTriggerProps>(function NavLinkTrigger(
  { label, open = false, className, ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type="button"
      className={[styles.trigger, className].filter(Boolean).join(' ')}
      data-state={open ? 'open' : 'default'}
      aria-haspopup="true"
      aria-expanded={open}
      {...rest}
    >
      <span className={styles.label}>{label}</span>
      <Icon name="chevron-down" size={15} className={styles.chevron} />
    </button>
  );
});
