import styles from './LogoStatCard.module.css';

export interface LogoStatCardProps {
  logoUrl?: string;
  logoAlt?: string;
  name?: string;
  metricLabel?: string;
  metricValue?: string;
  className?: string;
}

export function LogoStatCard({
  logoUrl,
  logoAlt = '',
  name = 'Customer name',
  metricLabel = 'Bookings',
  metricValue = '1,234%',
  className,
}: LogoStatCardProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <div className={styles.logoArea}>
        {logoUrl ? (
          <img className={styles.logoImage} src={logoUrl} alt={logoAlt} />
        ) : (
          <div className={styles.logoPlaceholder}>
            <p className={styles.logoPlaceholderLabel}>Logo</p>
          </div>
        )}
      </div>
      <div className={styles.body}>
        <p className={styles.name}>{name}</p>
        <div className={styles.divider} />
        <div className={styles.metric}>
          <p className={styles.metricLabel}>{metricLabel}</p>
          <p className={styles.metricValue}>{metricValue}</p>
        </div>
      </div>
    </div>
  );
}
