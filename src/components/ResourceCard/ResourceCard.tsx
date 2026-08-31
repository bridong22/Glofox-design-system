import { Badge } from '../Badge';
import { Button } from '../Button';
import styles from './ResourceCard.module.css';

export interface ResourceCardProps {
  imageUrl?: string;
  imageAlt?: string;
  category?: string;
  meta?: string;
  title?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export function ResourceCard({
  imageUrl,
  imageAlt = '',
  category = 'Experience',
  meta = '24 Jun 2025 • 10 min read',
  title = 'The Best Gym Management Software 2026, Reviewed & Compared',
  buttonLabel = 'Read More',
  onButtonClick,
}: ResourceCardProps) {
  return (
    <div className={styles.card}>
      {imageUrl ? (
        <img className={styles.thumbnail} src={imageUrl} alt={imageAlt} />
      ) : (
        <div className={styles.thumbnail} />
      )}
      <div className={styles.content}>
        <div className={styles.metaRow}>
          <Badge size="small">{category}</Badge>
          <span className={styles.meta}>{meta}</span>
        </div>
        <p className={styles.title}>{title}</p>
        <Button variant="ghost" size="small" className={styles.button} onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
