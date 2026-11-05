import { Button } from '../Button';
import { Icon } from '../Icon';
import styles from './PersonCard.module.css';

export interface PersonCardProps {
  photoUrl?: string;
  photoAlt?: string;
  name?: string;
  role?: string;
  /** Figma `Show bio` / `Bio` properties (added 2026-10-28, WP Team member fields) — an alias for `showIntro`/`intro` kept for Code Connect parity; prefer `showIntro`/`intro` in new code. */
  showBio?: boolean;
  bio?: string;
  showIntro?: boolean;
  intro?: string;
  /** Figma `Show LinkedIn` property (added 2026-10-28, WP Team member field). */
  showLinkedIn?: boolean;
  linkedInHref?: string;
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
  showBio,
  bio,
  showIntro,
  intro,
  showLinkedIn = false,
  linkedInHref = '#',
  showLink = true,
  linkLabel = 'Read More',
  onLinkClick,
  className,
}: PersonCardProps) {
  const resolvedShowIntro = showIntro ?? showBio ?? true;
  const resolvedIntro = intro ?? bio ?? 'One-line intro goes here.';
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
          {resolvedShowIntro && <p className={styles.intro}>{resolvedIntro}</p>}
          {showLinkedIn && (
            <a href={linkedInHref} aria-label={`${name} on LinkedIn`} className={styles.linkedIn}>
              <Icon name="linkedin" size={20} />
            </a>
          )}
        </div>
        {showLink && (
          <Button variant="ghost" size="medium" className={styles.link} onClick={onLinkClick}>
            {linkLabel}
          </Button>
        )}
      </div>
    </div>
  );
}
