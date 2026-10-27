import { Button } from '../Button';
import styles from './CustomerStoryCard.module.css';

export interface CustomerStoryCardProps {
  logoUrl?: string;
  logoAlt?: string;
  secondLogoUrl?: string;
  secondLogoAlt?: string;
  headline?: string;
  showMetric?: boolean;
  metricLabel?: string;
  metricValue?: string;
  showLink?: boolean;
  linkLabel?: string;
  onLinkClick?: () => void;
  className?: string;
}

function LogoSlot({ src, alt }: { src?: string; alt: string }) {
  return src ? (
    <img className={styles.logoImage} src={src} alt={alt} />
  ) : (
    <div className={styles.logoPlaceholder}>
      <p className={styles.logoPlaceholderLabel}>Logo</p>
    </div>
  );
}

export function CustomerStoryCard({
  logoUrl,
  logoAlt = '',
  secondLogoUrl,
  secondLogoAlt = '',
  headline = "Short headline of the customer outcome, written in the customer's words.",
  showMetric = true,
  metricLabel = 'Metric label, e.g. increase in member retention',
  metricValue = '+42%',
  showLink = true,
  linkLabel = 'Read More',
  onLinkClick,
  className,
}: CustomerStoryCardProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.logos}>
        <LogoSlot src={logoUrl} alt={logoAlt} />
        <LogoSlot src={secondLogoUrl} alt={secondLogoAlt} />
      </div>
      <p className={styles.headline}>{headline}</p>
      {showMetric && (
        <div className={styles.metric}>
          <p className={styles.metricLabel}>{metricLabel}</p>
          <p className={styles.metricValue}>{metricValue}</p>
        </div>
      )}
      {showLink && (
        <Button variant="ghost" size="small" className={styles.link} onClick={onLinkClick}>
          {linkLabel}
        </Button>
      )}
    </div>
  );
}
