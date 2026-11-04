import { SectionHeading } from '../SectionHeading';
import { LogoCarousel, type LogoCarouselProps } from '../LogoCarousel';
import styles from './SectionIntegrationsCarousel.module.css';

export interface SectionIntegrationsCarouselProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  logoCarousel?: LogoCarouselProps;
  className?: string;
}

export function SectionIntegrationsCarousel({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  logoCarousel,
  className,
}: SectionIntegrationsCarouselProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <LogoCarousel enableCarousel {...logoCarousel} />
      </div>
    </section>
  );
}
