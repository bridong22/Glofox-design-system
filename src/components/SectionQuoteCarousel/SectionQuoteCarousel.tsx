import { SectionHeading } from '../SectionHeading';
import { CardCarousel } from '../CardCarousel';
import { CardQuote, type CardQuoteProps } from '../CardQuote';
import styles from './SectionQuoteCarousel.module.css';

export interface SectionQuoteCarouselProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  perPage?: number;
  quotes?: CardQuoteProps[];
  className?: string;
}

const DEFAULT_QUOTES: CardQuoteProps[] = Array.from({ length: 3 }, () => ({}));

export function SectionQuoteCarousel({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  perPage = 3,
  quotes = DEFAULT_QUOTES,
  className,
}: SectionQuoteCarouselProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <CardCarousel items={quotes} perPage={perPage} renderItem={(quote, index) => <CardQuote key={index} {...quote} />} />
      </div>
    </section>
  );
}
