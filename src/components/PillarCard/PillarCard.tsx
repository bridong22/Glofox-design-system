import { Button } from '../Button';
import styles from './PillarCard.module.css';

export interface PillarCardProps {
  /** Alternate Right/Left down a stacked list. */
  imagePosition?: 'left' | 'right';
  keyword?: string;
  subtitle?: string;
  description?: string;
  showLink?: boolean;
  linkLabel?: string;
  onLinkClick?: () => void;
  imageUrl?: string;
  imageAlt?: string;
  className?: string;
}

export function PillarCard({
  imagePosition = 'right',
  keyword = 'Keyword',
  subtitle = 'Pillar subtitle in one line',
  description = 'Two to three sentences that explain what this pillar covers and why it matters to the customer.',
  showLink = true,
  linkLabel = 'Read More',
  onLinkClick,
  imageUrl,
  imageAlt = '',
  className,
}: PillarCardProps) {
  const classes = [styles.card, imagePosition === 'left' ? styles.imageLeft : undefined, className]
    .filter(Boolean)
    .join(' ');

  const image = imageUrl ? (
    <img className={styles.image} src={imageUrl} alt={imageAlt} />
  ) : (
    <div className={styles.imagePlaceholder}>
      <p className={styles.imagePlaceholderLabel}>Image</p>
    </div>
  );

  return (
    <div className={classes}>
      {imagePosition === 'left' && image}
      <div className={styles.text}>
        <p className={styles.keyword}>{keyword}</p>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
        {showLink && (
          <Button variant="ghost" size="small" className={styles.link} onClick={onLinkClick}>
            {linkLabel}
          </Button>
        )}
      </div>
      {imagePosition === 'right' && image}
    </div>
  );
}
