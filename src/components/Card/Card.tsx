import { Icon } from '../Icon';
import styles from './Card.module.css';

export interface CardProps {
  iconName?: string;
  title?: string;
  description?: string;
}

export function Card({
  iconName = 'calendar',
  title = 'Bookings & scheduling',
  description = 'Let members book classes, sessions, and facilities in seconds.',
}: CardProps) {
  return (
    <div className={styles.card}>
      <Icon name={iconName} size={40} className={styles.icon} />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
