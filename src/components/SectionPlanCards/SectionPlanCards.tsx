import { SectionHeading } from '../SectionHeading';
import { CurrencySwitcher } from '../CurrencySwitcher';
import { PricingCard, type PricingCardProps } from '../PricingCard';
import { PricingAddOns } from '../PricingAddOns';
import { CtaGroup } from '../CtaGroup';
import styles from './SectionPlanCards.module.css';

export interface SectionPlanCardsProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  showCurrencySwitcher?: boolean;
  plans?: PricingCardProps[];
  footnote?: string;
  showCompareCta?: boolean;
  primaryLabel?: string;
  onPrimaryClick?: () => void;
  showSecondaryCta?: boolean;
  secondaryLabel?: string;
  onSecondaryClick?: () => void;
  className?: string;
}

const ESSENTIAL_FEATURES: PricingCardProps['features'] = [
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
];

const DEFAULT_PLANS: PricingCardProps[] = [
  {
    style: 'default',
    planName: 'Essential',
    planDescription: 'Core tools to launch and run your fitness business',
    price: '$275',
    showOfferNote: true,
    offerNote: (
      <>
        *New studios <strong>$99/mo</strong> for your first year
      </>
    ),
    features: ESSENTIAL_FEATURES,
    extras: <PricingAddOns />,
  },
  {
    style: 'popular',
    planName: 'Essential',
    planDescription: 'Advanced features to engage your members and scale across locations',
    price: '$375',
    features: ESSENTIAL_FEATURES,
    extras: <PricingAddOns />,
  },
  {
    style: 'default',
    planName: 'Essential',
    planDescription: 'Complete control to elevate your brand and automate growth at any scale',
    price: '$625',
    features: [
      { label: 'Advanced Staff App Client Metrics' },
      { label: 'Zapier Integrations' },
      { label: 'Bulk multi-location configuration' },
    ],
    extras: <PricingAddOns type="included" />,
  },
];

export function SectionPlanCards({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  showCurrencySwitcher = true,
  plans = DEFAULT_PLANS,
  footnote = '*New studios (open less than 6 months): $99/mo for your first year, then $275/mo',
  showCompareCta = true,
  primaryLabel,
  onPrimaryClick,
  showSecondaryCta = true,
  secondaryLabel,
  onSecondaryClick,
  className,
}: SectionPlanCardsProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        {showCurrencySwitcher && <CurrencySwitcher />}
        <div className={styles.group}>
          <div className={styles.cards}>
            {plans.map((plan, index) => (
              <PricingCard key={index} className={styles.card} {...plan} />
            ))}
          </div>
          {footnote && <p className={styles.footnote}>{footnote}</p>}
        </div>
        {showCompareCta && (
          <CtaGroup
            primaryLabel={primaryLabel}
            onPrimaryClick={onPrimaryClick}
            showSecondary={showSecondaryCta}
            secondaryLabel={secondaryLabel}
            onSecondaryClick={onSecondaryClick}
          />
        )}
      </div>
    </section>
  );
}
