import { Button } from '../Button';
import styles from './PersonCard.module.css';

export interface PersonCardProps {
  photoUrl?: string;
  photoAlt?: string;
  name?: string;
  role?: string;
  showIntro?: boolean;
  intro?: string;
  showLink?: boolean;
  linkLabel?: string;
  onLinkClick?: () => void;
  className?: string;
}

export function PersonCard({
  photoUrl,
  photoAlt = '',
  name = 'Person Name',
  role = 'Job title, company relationship',
  showIntro = true,
  intro = 'One-line intro goes here.',
  showLink = true,
  linkLabel = 'Read More',
  onLinkClick,
  className,
}: PersonCardProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {photoUrl ? (
        <img className={styles.photo} src={photoUrl} alt={photoAlt} />
      ) : (
        <div className={styles.photoPlaceholder}>
          <p className={styles.photoPlaceholderLabel}>Image</p>
        </div>
      )}
      <div className={styles.text}>
        <div className={styles.copy}>
          <p className={styles.name}>{name}</p>
          <p className={styles.role}>{role}</p>
          {showIntro && <p className={styles.intro}>{intro}</p>}
        </div>
        {showLink && (
          <Button variant="ghost" size="small" className={styles.link} onClick={onLinkClick}>
            {linkLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
