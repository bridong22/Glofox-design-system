import { Button } from '../Button';
import styles from './MidPostCtaCard.module.css';

export interface MidPostCtaCardProps {
  eyebrow?: string;
  body?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export function MidPostCtaCard({
  eyebrow = 'FOR PILATES STUDIOS',
  body = 'See how ABC Glofox keeps reformers full and billing automatic — class caps, waitlists and recurring payments in one system.',
  ctaLabel = 'Get a Free Demo',
  onCtaClick,
}: MidPostCtaCardProps) {
  return (
    <div className={styles.midPostCtaCard}>
      <p className={styles.eyebrow}>{eyebrow}</p>
      <p className={styles.body}>{body}</p>
      <Button type="button" variant="primary" size="large" onClick={onCtaClick}>
        {ctaLabel}
      </Button>
    </div>
  );
}
