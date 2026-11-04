import { Button } from '../Button';
import { Icon } from '../Icon';
import styles from './FeatureListCard.module.css';

export interface FeatureListCardProps {
  iconName?: string;
  title?: string;
  description?: string;
  /** Figma "Show link" property (added 2026-10-28, WP Small Card List field). */
  showLink?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
  className?: string;
}

export function FeatureListCard({
  iconName = 'credit-card',
  title = 'Built for fitness, not retrofitted for it',
  description = 'Purpose-built for studios and gyms, with workflows designed around bookings, memberships, waivers, payments, and member engagement.',
  showLink = true,
  buttonLabel = 'Read More',
  onButtonClick,
  className,
}: FeatureListCardProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.iconBadge}>
        <Icon name={iconName} size={20} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      {showLink && (
        <Button variant="ghost" size="small" className={styles.button} onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      )}
    </div>
  );
}
