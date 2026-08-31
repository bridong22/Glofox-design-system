import { Button } from '../Button';
import styles from './EndCtaTestimonial.module.css';

export interface EndCtaTestimonialProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export function EndCtaTestimonial({
  title = 'Ready to grow your fitness business?',
  subtitle = 'See how Glofox runs your studio, gym or club in one platform',
  ctaLabel = 'Get Free Demo',
  onCtaClick,
}: EndCtaTestimonialProps) {
  return (
    <section className={styles.endCtaTestimonial}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle}</p>
      <Button type="button" variant="primary" size="medium" onClick={onCtaClick}>
        {ctaLabel}
      </Button>
    </section>
  );
}
