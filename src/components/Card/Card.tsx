import { Button } from '../Button';
import { Icon } from '../Icon';
import styles from './Card.module.css';

export interface CardProps {
  iconName?: string;
  title?: string;
  description?: string;
  /** Figma `Show link` property (added 2026-10-28) — an exposed Ghost Button CTA (WP card CTA). */
  showLink?: boolean;
  linkLabel?: string;
  onLinkClick?: () => void;
  className?: string;
}

export function Card({
  iconName = 'calendar',
  title = 'Bookings & scheduling',
  description = 'Let members book classes, sessions, and facilities in seconds.',
  showLink = false,
  linkLabel = 'Learn more',
  onLinkClick,
  className,
}: CardProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <Icon name={iconName} size={40} className={styles.icon} />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      {showLink && (
        <Button variant="ghost" size="small" className={styles.link} onClick={onLinkClick}>
          {linkLabel}
        </Button>
      )}
    </div>
  );
}
