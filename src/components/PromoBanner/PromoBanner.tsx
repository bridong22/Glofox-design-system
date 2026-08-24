import { Button } from '../Button';
import { Icon } from '../Icon';
import styles from './PromoBanner.module.css';

export interface PromoBannerProps {
  message: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export function PromoBanner({
  message,
  ctaLabel = 'Demo and Pricing',
  onCtaClick,
}: PromoBannerProps) {
  return (
    <div className={styles.promoBanner}>
      <div className={styles.content}>
        <div className={styles.iconChip}>
          <Icon name="bell" size={20} />
        </div>
        <p className={styles.message}>{message}</p>
      </div>
      <Button variant="primary" size="medium" className={styles.cta} onClick={onCtaClick}>
        {ctaLabel}
      </Button>
    </div>
  );
}
