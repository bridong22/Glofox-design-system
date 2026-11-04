import { Badge } from '../Badge';
import { Button } from '../Button';
import styles from './ResourceCard.module.css';

export interface ResourceCardProps {
  /** Figma variant property `Surface`. 'card' is white/bordered/rounded, 'plain' has no container (use on a tinted section background). */
  surface?: 'card' | 'plain';
  imageUrl?: string;
  imageAlt?: string;
  showEyebrow?: boolean;
  category?: string;
  meta?: string;
  title?: string;
  description?: string;
  /** Figma `Show score` property (added 2026-10-28, WP Resources Carousel card field) — a label/value stat row, value rendered in the brand color. */
  showScore?: boolean;
  scoreLabel?: string;
  scoreValue?: string;
  /** Figma `Show tag` property (added 2026-10-28, WP Resources Carousel card field) — a small logo tag pinned over the thumbnail. */
  showTag?: boolean;
  showLink?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
  className?: string;
}

export function ResourceCard({
  surface = 'card',
  imageUrl,
  imageAlt = '',
  showEyebrow = true,
  category = 'Experience',
  meta = '24 Jun 2025 • 10 min read',
  title = 'The Best Gym Management Software 2026, Reviewed & Compared',
  description,
  showScore = false,
  scoreLabel = 'Revenue',
  scoreValue = '+44%',
  showTag = false,
  showLink = true,
  buttonLabel = 'Read More',
  onButtonClick,
  className,
}: ResourceCardProps) {
  const classes = [styles.card, surface === 'plain' ? styles.plain : undefined, className]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={classes}>
      <div className={styles.thumbnailWrapper}>
        {imageUrl ? (
          <img className={styles.thumbnail} src={imageUrl} alt={imageAlt} />
        ) : (
          <div className={styles.thumbnail}>
            <p className={styles.thumbnailLabel}>Image</p>
          </div>
        )}
        {showTag && (
          <div className={styles.tag}>
            <p className={styles.tagLabel}>Logo</p>
          </div>
        )}
      </div>
      <div className={styles.content}>
        {showEyebrow && (
          <div className={styles.metaRow}>
            <Badge size="small">{category}</Badge>
            <span className={styles.meta}>{meta}</span>
          </div>
        )}
        <p className={styles.title}>{title}</p>
        {description && <p className={styles.description}>{description}</p>}
        {showScore && (
          <div className={styles.score}>
            <span className={styles.scoreLabel}>{scoreLabel}</span>
            <span className={styles.scoreValue}>{scoreValue}</span>
          </div>
        )}
        {showLink && (
          <Button variant="ghost" size="small" className={styles.button} onClick={onButtonClick}>
            {buttonLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
