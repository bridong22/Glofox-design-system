import styles from './CompareCard.module.css';

export interface CompareCardProps {
  /** Convention: Blush = the problem/old way, Sky = the solution/new way. */
  tone?: 'sky' | 'blush';
  showLabel?: boolean;
  label?: string;
  title?: string;
  /** One bullet per entry, rendered as a plain bulleted list. */
  bullets?: string[];
  className?: string;
}

const DEFAULT_BULLETS = ['First point', 'Second point', 'Third point'];

export function CompareCard({
  tone = 'sky',
  showLabel = true,
  label = 'Label',
  title = 'Comparison heading',
  bullets = DEFAULT_BULLETS,
  className,
}: CompareCardProps) {
  const classes = [styles.card, tone === 'blush' ? styles.blush : styles.sky, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      {showLabel && <p className={styles.label}>{label}</p>}
      <p className={styles.title}>{title}</p>
      <ul className={styles.bullets}>
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
