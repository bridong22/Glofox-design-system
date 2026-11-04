import { Button } from '../Button';
import styles from './FeatureGridCard.module.css';

export interface FeatureGridCardProps {
  imageUrl?: string;
  imageAlt?: string;
  showImage?: boolean;
  heading?: string;
  showSubheading?: boolean;
  subheading?: string;
  copy?: string;
  showLink?: boolean;
  linkLabel?: string;
  onLinkClick?: () => void;
  className?: string;
}

export function FeatureGridCard({
  imageUrl,
  imageAlt = '',
  showImage = true,
  heading = 'Feature heading',
  showSubheading = true,
  subheading = 'Subheading',
  copy = 'Short copy describing the feature and the outcome it drives for the studio.',
  showLink = true,
  linkLabel = 'Learn more',
  onLinkClick,
  className,
}: FeatureGridCardProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {showImage &&
        (imageUrl ? (
          <img className={styles.image} src={imageUrl} alt={imageAlt} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <p className={styles.imagePlaceholderLabel}>Image</p>
          </div>
        ))}
      <div className={styles.body}>
        <p className={styles.heading}>{heading}</p>
        {showSubheading && <p className={styles.subheading}>{subheading}</p>}
        <p className={styles.copy}>{copy}</p>
        {showLink && (
          <Button variant="ghost" size="small" className={styles.link} onClick={onLinkClick}>
            {linkLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
