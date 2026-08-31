import { Button } from '../Button';
import { Icon } from '../Icon';
import styles from './FeatureListCard.module.css';

export interface FeatureListCardProps {
  iconName?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export function FeatureListCard({
  iconName = 'credit-card',
  title = 'Built for fitness, not retrofitted for it',
  description = 'Purpose-built for studios and gyms, with workflows designed around bookings, memberships, waivers, payments, and member engagement.',
  buttonLabel = 'Read More',
  onButtonClick,
}: FeatureListCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.iconBadge}>
        <Icon name={iconName} size={20} />
      </div>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
      <Button variant="ghost" size="small" className={styles.button} onClick={onButtonClick}>
        {buttonLabel}
      </Button>
    </div>
  );
}
