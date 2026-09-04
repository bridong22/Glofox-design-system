import { Fragment } from 'react';
import { Icon } from '../Icon';
import styles from './UtilityBar.module.css';

export interface UtilityBarLink {
  label: string;
  href?: string;
  icon?: string;
}

export interface UtilityBarProps {
  links?: UtilityBarLink[];
  /** Figma "Type" variant. No independent background — reuses whatever sits behind it. */
  type?: 'dark' | 'light';
}

const DEFAULT_LINKS: UtilityBarLink[] = [
  { label: 'Customer login', href: '#', icon: 'user' },
  { label: 'Support', href: '#' },
];

export function UtilityBar({ links = DEFAULT_LINKS, type = 'dark' }: UtilityBarProps) {
  return (
    <div className={styles.utilityBar} data-type={type}>
      <div className={styles.inner}>
        {links.map((link, index) => (
          <Fragment key={link.label}>
            {index > 0 && (
              <span className={styles.divider} aria-hidden="true">
                |
              </span>
            )}
            <a href={link.href ?? '#'} className={styles.link}>
              {link.icon && <Icon name={link.icon} size={16} className={styles.icon} />}
              {link.label}
            </a>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
