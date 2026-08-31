import { forwardRef, type AnchorHTMLAttributes } from 'react';
import { Icon } from '../Icon';
import styles from './NavMenuItem.module.css';

export interface NavMenuItemProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Figma "Title" text property. */
  title: string;
  /** Figma "Description" text property. */
  description?: string;
  /**
   * Figma "Show description" boolean. Off for label-only lists (e.g. the
   * Business types dropdown); on for content that benefits from more
   * context (e.g. the Platform mega panel's "By goal" column, Resources).
   */
  showDescription?: boolean;
  /** Figma "Icon" instance-swap property — a lucide/`Icon` glyph name. */
  icon?: string;
}

export const NavMenuItem = forwardRef<HTMLAnchorElement, NavMenuItemProps>(function NavMenuItem(
  { title, description, showDescription = true, icon = 'circle', className, ...rest },
  ref,
) {
  return (
    <a ref={ref} className={[styles.item, className].filter(Boolean).join(' ')} {...rest}>
      <Icon name={icon} size={20} className={styles.icon} />
      <span className={styles.text}>
        <span className={styles.title}>{title}</span>
        {showDescription && description && <span className={styles.description}>{description}</span>}
      </span>
    </a>
  );
});
