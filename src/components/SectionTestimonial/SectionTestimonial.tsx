import { SectionHeading } from '../SectionHeading';
import { MediaFrame } from '../MediaFrame';
import { PullQuote } from '../PullQuote';
import { Callout } from '../Callout';
import styles from './SectionTestimonial.module.css';

export interface SectionTestimonialProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  imageAlign?: 'left' | 'right';
  showImage?: boolean;
  imageUrl?: string;
  imageAlt?: string;
  quote?: string;
  name?: string;
  role?: string;
  showStoryBox?: boolean;
  storyText?: string;
  storyLinkLabel?: string;
  onStoryLinkClick?: () => void;
  className?: string;
}

export function SectionTestimonial({
  showHeading = false,
  eyebrow,
  headline,
  subheadline,
  imageAlign = 'left',
  showImage = true,
  imageUrl,
  imageAlt = '',
  quote = '“Our Club is now consistently running at 95 or 96 percent”',
  name = 'Trey McClain',
  role = 'CRO, BFit',
  showStoryBox = true,
  storyText = 'VENT Fitness moved from paper contracts to e-agreements, a member app and door access to Ignite',
  storyLinkLabel,
  onStoryLinkClick,
  className,
}: SectionTestimonialProps) {
  const isRight = imageAlign === 'right';
  const classes = [styles.section, className].filter(Boolean).join(' ');

  const image = showImage ? (
    <div className={styles.image}>
      <MediaFrame ratio="square" src={imageUrl} alt={imageAlt} />
    </div>
  ) : null;

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <div className={styles.columns}>
          {!isRight && image}
          <div className={styles.content}>
            <div className={styles.quoteArea}>
              <PullQuote align="left" quote={quote} name={name} role={role} />
            </div>
            {showStoryBox && (
              <Callout
                style="subtle"
                showTitle={false}
                text={storyText}
                showLink
                linkLabel={storyLinkLabel}
                onLinkClick={onStoryLinkClick}
                className={styles.storyBox}
              />
            )}
          </div>
          {isRight && image}
        </div>
      </div>
    </section>
  );
}
