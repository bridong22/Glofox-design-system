import { Button } from '../Button';
import styles from './CtaRow.module.css';

/**
 * Bordered row: title + description + a reused Button. Sourced from the
 * Pricing page's Enterprise tier, but generic enough to reuse anywhere a
 * compact contact/CTA prompt is needed.
 */
export interface CtaRowProps {
  title?: string;
  description?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export function CtaRow({
  title = 'Enterprise',
  description = 'Scalable solutions for growing fitness brands. Contact us to discuss a custom enterprise plan with the tools and support you need to manage and expand your multi-location or franchise operations.',
  buttonLabel = 'Contact us',
  onButtonClick,
}: CtaRowProps) {
  return (
    <div className={styles.row}>
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <Button size="medium" onClick={onButtonClick} className={styles.button}>
        {buttonLabel}
      </Button>
    </div>
  );
}
