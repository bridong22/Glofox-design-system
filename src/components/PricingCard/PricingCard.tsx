import type { ReactNode } from 'react';
import { Button } from '../Button';
import { ChecklistItem } from '../ChecklistItem';
import { MostPopularBanner } from '../MostPopularBanner';
import styles from './PricingCard.module.css';

export interface PricingCardFeature {
  label: string;
  showIcon?: boolean;
}

const DEFAULT_FEATURES: PricingCardFeature[] = Array.from({ length: 8 }, () => ({ label: 'Item 1' }));

/**
 * The two pricing-tier card treatments (Starter/Essential/Elite = Default,
 * Boost = Popular). Composed from ChecklistItem (Icon=Show/Hide), Button,
 * and MostPopularBanner. `extras` is a free-form slot below the checklist
 * for either a plain add-ons ChecklistItem list (hide the icon on a
 * semibold header row) or a HighlightSection block — Figma treats these as
 * two alternate content patterns for the same card region, not one atomic
 * component, so this stays a plain ReactNode slot rather than a rigid prop.
 */
export interface PricingCardProps {
  style?: 'default' | 'popular';
  planName?: string;
  planDescription?: string;
  price?: string;
  pricePeriod?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  features?: PricingCardFeature[];
  bannerLabel?: string;
  extras?: ReactNode;
}

export function PricingCard({
  style = 'default',
  planName = 'Essential',
  planDescription = 'Core tools to launch and run your fitness business',
  price = '$275',
  pricePeriod = '/mo',
  buttonLabel = 'Book a Demo',
  onButtonClick,
  features = DEFAULT_FEATURES,
  bannerLabel = 'MOST POPULAR',
  extras,
}: PricingCardProps) {
  const isPopular = style === 'popular';

  return (
    <div className={styles.wrapper}>
      {isPopular && <MostPopularBanner label={bannerLabel} />}
      <div className={`${styles.card} ${isPopular ? styles.popular : ''}`}>
        <div className={styles.top}>
          <div className={styles.header}>
            <p className={styles.planName}>{planName}</p>
            <p className={styles.planDescription}>{planDescription}</p>
          </div>
          <div className={styles.priceBlock}>
            <div className={styles.priceRow}>
              <p className={styles.price}>{price}</p>
              <p className={styles.pricePeriod}>{pricePeriod}</p>
            </div>
            <Button size="medium" onClick={onButtonClick} className={styles.button}>
              {buttonLabel}
            </Button>
          </div>
          <div className={styles.checklist}>
            {features.map((feature, index) => (
              <ChecklistItem key={index} label={feature.label} showIcon={feature.showIcon} />
            ))}
          </div>
        </div>
        {extras && <div className={styles.extras}>{extras}</div>}
      </div>
    </div>
  );
}
