import styles from './PullQuote.module.css';

export interface PullQuoteProps {
  quote?: string;
  name?: string;
  role?: string;
}

export function PullQuote({
  quote = '“Glofox helped us cut admin time in half and grow membership 30% year over year.”',
  name = 'Sarah Kim',
  role = 'Owner, Pulse Studio',
}: PullQuoteProps) {
  return (
    <div className={styles.pullQuote}>
      <p className={styles.quote}>{quote}</p>
      <p className={styles.name}>{name}</p>
      <p className={styles.role}>{role}</p>
    </div>
  );
}
