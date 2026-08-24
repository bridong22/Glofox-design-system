import styles from './ComparisonCardUs.module.css';

export interface ComparisonCardUsProps {
  title?: string;
  description?: string;
}

export function ComparisonCardUs({
  title = 'ABC Glofox',
  description = 'Glofox keeps your members inside your brand at every touchpoint — booking, payments, and communication all live in one app.',
}: ComparisonCardUsProps) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
