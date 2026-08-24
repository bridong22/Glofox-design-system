import styles from './TestimonialCard.module.css';

export interface TestimonialCardProps {
  quote?: string;
  name?: string;
  role?: string;
}

export function TestimonialCard({
  quote = '“Glofox helped us cut admin time in half and grow membership 30% year over year.”',
  name = 'Sarah Kim',
  role = 'Owner, Pulse Studio',
}: TestimonialCardProps) {
  return (
    <div className={styles.testimonialCard}>
      <p className={styles.quote}>{quote}</p>
      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{role}</p>
    </div>
  );
}
