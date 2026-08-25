import { Button } from '../Button';
import styles from './EndCtaTestimonial.module.css';

export interface EndCtaTestimonialProps {
  title?: string;
  quote?: string;
  attribution?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

export function EndCtaTestimonial({
  title = 'Ready to grow your fitness business?',
  quote = 'Glofox helped us launch in 90 days and hit break-even by month 14.',
  attribution = 'Jordan Wells, Owner, Reform Studio',
  ctaLabel = 'Get Free Demo',
  onCtaClick,
}: EndCtaTestimonialProps) {
  return (
    <section className={styles.endCtaTestimonial}>
      <p className={styles.title}>{title}</p>
      <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>
      <p className={styles.attribution}>— {attribution}</p>
      <Button type="button" variant="primary" size="medium" onClick={onCtaClick}>
        {ctaLabel}
      </Button>
    </section>
  );
}
