import styles from './CompareCard.module.css';

export interface CompareCardProps {
  /**
   * Convention: Blush = the problem/old way, Sky = the solution/new way.
   * Outline (added 2026-11-04) = plain accent-bordered card used for a
   * neutral third comparison column or Plain Text Cards' "Outline" tone.
   */
  tone?: 'sky' | 'blush' | 'outline';
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
  const toneClass = tone === 'blush' ? styles.blush : tone === 'outline' ? styles.outline : styles.sky;
  const classes = [styles.card, toneClass, className].filter(Boolean).join(' ');

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
