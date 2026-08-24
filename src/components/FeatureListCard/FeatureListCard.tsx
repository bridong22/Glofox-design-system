import { Icon } from '../Icon';
import styles from './FeatureListCard.module.css';

export interface FeatureListCardProps {
  iconName?: string;
  title?: string;
  description?: string;
}

export function FeatureListCard({
  iconName = 'check-circle',
  title = 'Built for fitness, not retrofitted for it',
  description = 'Purpose-built for studios and gyms, with workflows designed around bookings, memberships, waivers, payments, and member engagement.',
}: FeatureListCardProps) {
  return (
    <div className={styles.card}>
      <Icon name={iconName} size={40} className={styles.icon} />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
