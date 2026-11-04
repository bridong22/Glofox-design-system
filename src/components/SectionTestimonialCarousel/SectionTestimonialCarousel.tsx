import { SectionHeading } from '../SectionHeading';
import { TestimonialCarouselCard, type TestimonialCarouselCardProps } from '../TestimonialCarouselCard';
import styles from './SectionTestimonialCarousel.module.css';

export interface SectionTestimonialCarouselProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  card?: TestimonialCarouselCardProps;
  className?: string;
}

export function SectionTestimonialCarousel({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  card,
  className,
}: SectionTestimonialCarouselProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && (
        <div className={styles.header}>
          <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />
        </div>
      )}
      <TestimonialCarouselCard {...card} />
    </section>
  );
}
