import styles from './CardQuote.module.css';

export interface CardQuoteProps {
  showLogo?: boolean;
  logoUrl?: string;
  logoAlt?: string;
  quote?: string;
  showHeadshot?: boolean;
  headshotUrl?: string;
  headshotAlt?: string;
  name?: string;
  titleCompany?: string;
  className?: string;
}

export function CardQuote({
  showLogo = true,
  logoUrl,
  logoAlt = '',
  quote = '"Glofox gave us back hours every week and our members love the app."',
  showHeadshot = true,
  headshotUrl,
  headshotAlt = '',
  name = 'Alex Morgan',
  titleCompany = 'Owner, Studio Name',
  className,
}: CardQuoteProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {showLogo &&
        (logoUrl ? (
          <img className={styles.logoImage} src={logoUrl} alt={logoAlt} />
        ) : (
          <div className={styles.logoPlaceholder}>
            <p className={styles.logoPlaceholderLabel}>Logo</p>
          </div>
        ))}
      <p className={styles.quote}>{quote}</p>
      <div className={styles.attribution}>
        {showHeadshot &&
          (headshotUrl ? (
            <img className={styles.headshot} src={headshotUrl} alt={headshotAlt} />
          ) : (
            <div className={styles.headshotPlaceholder} />
          ))}
        <div className={styles.nameBlock}>
          <p className={styles.name}>{name}</p>
          <p className={styles.titleCompany}>{titleCompany}</p>
        </div>
      </div>
    </div>
  );
}
