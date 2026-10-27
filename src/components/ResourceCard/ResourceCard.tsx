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
      {imageUrl ? (
        <img className={styles.thumbnail} src={imageUrl} alt={imageAlt} />
      ) : (
        <div className={styles.thumbnail}>
          <p className={styles.thumbnailLabel}>Image</p>
        </div>
      )}
      <div className={styles.content}>
        {showEyebrow && (
          <div className={styles.metaRow}>
            <Badge size="small">{category}</Badge>
            <span className={styles.meta}>{meta}</span>
          </div>
        )}
        <p className={styles.title}>{title}</p>
        {description && <p className={styles.description}>{description}</p>}
        {showLink && (
          <Button variant="ghost" size="small" className={styles.button} onClick={onButtonClick}>
            {buttonLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
