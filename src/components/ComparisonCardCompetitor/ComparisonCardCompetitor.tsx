import styles from './ComparisonCardCompetitor.module.css';

export interface ComparisonCardCompetitorProps {
  title?: string;
  description?: string;
}

export function ComparisonCardCompetitor({
  title = 'Competitor',
  description = 'Glofox keeps your members inside your brand at every touchpoint — booking, payments, and communication all live in one app.',
}: ComparisonCardCompetitorProps) {
  return (
    <div className={styles.card}>
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{description}</p>
    </div>
  );
}
