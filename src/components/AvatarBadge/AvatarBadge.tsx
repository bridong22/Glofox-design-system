import styles from './AvatarBadge.module.css';

export interface AvatarBadgeProps {
  src?: string;
  alt?: string;
  initials?: string;
  type?: 'logo' | 'initials';
}

export function AvatarBadge({ src, alt = '', initials, type = 'logo' }: AvatarBadgeProps) {
  // `initials` implies initials-style content regardless of `type`, so
  // existing callers that only ever passed `initials` keep rendering an
  // initials chip instead of silently falling back to the "LOGO" placeholder.
  const isInitials = type === 'initials' || Boolean(initials);
  const badgeClass = isInitials ? styles.initialsVariant : styles.logoVariant;
  const labelClass = isInitials ? styles.initialsLabel : styles.logoLabel;

  return (
    <div className={`${styles.avatar} ${badgeClass}`}>
      {src ? (
        <img className={styles.image} src={src} alt={alt} />
      ) : (
        <span className={labelClass}>{isInitials ? initials : 'LOGO'}</span>
      )}
    </div>
  );
}
