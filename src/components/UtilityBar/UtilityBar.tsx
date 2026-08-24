import { Fragment } from 'react';
import styles from './UtilityBar.module.css';

export interface UtilityBarLink {
  label: string;
  href?: string;
}

export interface UtilityBarProps {
  links?: UtilityBarLink[];
}

const DEFAULT_LINKS: UtilityBarLink[] = [
  { label: 'Customer login', href: '#' },
  { label: 'Support', href: '#' },
];

export function UtilityBar({ links = DEFAULT_LINKS }: UtilityBarProps) {
  return (
    <div className={styles.utilityBar}>
      <div className={styles.inner}>
        {links.map((link, index) => (
          <Fragment key={link.label}>
            {index > 0 && (
              <span className={styles.divider} aria-hidden="true">
                |
              </span>
            )}
            <a href={link.href ?? '#'} className={styles.link}>
              {link.label}
            </a>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
