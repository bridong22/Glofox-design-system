import styles from './Card.module.css';

export interface CardProps {
  title?: string;
  description?: string;
}

export function Card({
  title = 'Bookings & scheduling',
  description = 'Let members book classes, sessions, and facilities in seconds.',
}: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.icon} />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
