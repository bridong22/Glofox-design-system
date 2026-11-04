import { SectionHeading } from '../SectionHeading';
import { PricingCard, type PricingCardProps } from '../PricingCard';
import { PricingAddOns, type PricingAddOnsProps } from '../PricingAddOns';
import styles from './SectionPricingPlans.module.css';

export interface SectionPricingPlansProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  plan?: PricingCardProps;
  addOnsIncluded?: PricingAddOnsProps;
  addOnsForPurchase?: PricingAddOnsProps;
  className?: string;
}

const DEFAULT_PLAN: PricingCardProps = {
  planName: 'Essential',
  planDescription: 'Core tools to launch and run your fitness business',
  price: '$275',
  features: [
    { label: 'Booking and scheduling' },
    { label: 'Member management' },
    { label: 'Payment processing' },
    { label: 'Payroll Reports' },
    { label: 'Sales and revenue reporting' },
    { label: 'Members’ analysis' },
    { label: 'Automated No-Show & Late Cancellation Fees' },
    { label: 'E-Agreements' },
    { label: 'ABC Glofox Mobile App for iOS and Android' },
    { label: 'ABC Glofox Staff App for iOS and Android' },
  ],
  extras: <PricingAddOns />,
};

export function SectionPricingPlans({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  plan = DEFAULT_PLAN,
  addOnsIncluded = { type: 'included' },
  addOnsForPurchase = { type: 'for-purchase' },
  className,
}: SectionPricingPlansProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <PricingCard className={styles.plan} {...plan} />
        <div className={styles.addOnsRow}>
          <PricingAddOns className={styles.addOnsColumn} {...addOnsIncluded} />
          <PricingAddOns className={styles.addOnsColumn} {...addOnsForPurchase} />
        </div>
      </div>
    </section>
  );
}
