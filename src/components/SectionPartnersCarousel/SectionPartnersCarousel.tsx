import { SectionHeading } from '../SectionHeading';
import { LogoCarousel, type LogoCarouselProps } from '../LogoCarousel';
import styles from './SectionPartnersCarousel.module.css';

export interface SectionPartnersCarouselProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  grayscale?: boolean;
  logoCarousel?: LogoCarouselProps;
  className?: string;
}

export function SectionPartnersCarousel({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  grayscale = false,
  logoCarousel,
  className,
}: SectionPartnersCarouselProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <LogoCarousel enableCarousel grayscale={grayscale} {...logoCarousel} />
      </div>
    </section>
  );
}
