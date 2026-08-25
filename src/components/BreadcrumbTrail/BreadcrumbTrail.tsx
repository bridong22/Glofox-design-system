import { Icon } from '../Icon';
import styles from './BreadcrumbTrail.module.css';

export interface BreadcrumbItem {
  /** Visible label for the crumb. */
  label: string;
  /** Link destination. Omit on the last item to render it as the current, non-link page. */
  href?: string;
}

export interface BreadcrumbTrailProps {
  items?: BreadcrumbItem[];
}

const DEFAULT_ITEMS: BreadcrumbItem[] = [{ label: 'Blog', href: '#' }, { label: 'Business Tips' }];

export function BreadcrumbTrail({ items = DEFAULT_ITEMS }: BreadcrumbTrailProps) {
  return (
    <nav className={styles.breadcrumbTrail} aria-label="Breadcrumb">
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isCurrent = isLast && !item.href;

          return (
            <li key={`${item.label}-${index}`} className={styles.item}>
              {isCurrent ? (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              ) : item.href ? (
                <a href={item.href} className={styles.link}>
                  {item.label}
                </a>
              ) : (
                <span className={styles.link}>{item.label}</span>
              )}
              {!isLast && <Icon name="chevron-right" size={14} className={styles.separator} />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
