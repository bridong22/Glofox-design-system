import { Icon } from '../Icon';
import styles from './PullQuote.module.css';

export interface PullQuoteProps {
  /**
   * Center (default): large quote-marked pull quote, no attribution.
   * Left (added 2026-11-04): testimonial quote with name/role attribution,
   * no quote-mark glyph — matches the live customer-story pattern.
   */
  align?: 'center' | 'left';
  quote?: string;
  name?: string;
  role?: string;
}

export function PullQuote({
  align = 'center',
  quote = '“Glofox helped us cut admin time in half and grow membership 30% year over year.”',
  name = 'Sarah Kim',
  role = 'Owner, Pulse Studio',
}: PullQuoteProps) {
  const isLeft = align === 'left';
  const classes = [styles.pullQuote, isLeft ? styles.left : undefined].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {!isLeft && <Icon name="quote" size={73} className={styles.quoteGlyph} aria-hidden="true" />}
      <p className={styles.quote}>{quote}</p>
      <div className={styles.attribution}>
        <p className={styles.name}>{name}</p>
        <p className={styles.role}>{role}</p>
      </div>
    </div>
  );
}
