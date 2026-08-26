import { Badge } from '../Badge';
import { Button } from '../Button';
import { MediaFrame } from '../MediaFrame';
import styles from './FeaturedModuleRow.module.css';

export interface FeaturedModuleRowProps {
  imageUrl?: string;
  imageAlt?: string;
  badgeLabel?: string;
  title?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export function FeaturedModuleRow({
  imageUrl,
  imageAlt = '',
  badgeLabel = 'Featured',
  title = 'The Complete Guide to Gym Marketing in 2026',
  description = "Everything from paid ads to referral programs, built for owners who don't have a marketing team — start here before the deep-dives below.",
  buttonLabel = 'Read More',
  onButtonClick,
}: FeaturedModuleRowProps) {
  return (
    <div className={styles.card}>
      <div className={styles.media}>
        <MediaFrame ratio="hero" src={imageUrl} alt={imageAlt} />
      </div>
      <div className={styles.content}>
        <Badge size="large" className={styles.badge}>
          {badgeLabel}
        </Badge>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
        <Button variant="ghost" size="small" className={styles.button} onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
