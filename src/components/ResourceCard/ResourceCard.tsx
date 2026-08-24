import { Badge } from '../Badge';
import { Button } from '../Button';
import { Icon } from '../Icon';
import styles from './ResourceCard.module.css';

export interface ResourceCardProps {
  imageUrl?: string;
  imageAlt?: string;
  category?: string;
  title?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export function ResourceCard({
  imageUrl,
  imageAlt = '',
  category = 'Experience',
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
        <Badge size="small" className={styles.category}>
          {category}
        </Badge>
        <p className={styles.title}>{title}</p>
        <Button
          variant="ghost"
          size="small"
          className={styles.button}
          onClick={onButtonClick}
        >
          <span className={styles.buttonContent}>
            {buttonLabel}
            <Icon name="arrow-up-right" size={16} />
          </span>
        </Button>
      </div>
    </div>
  );
}
