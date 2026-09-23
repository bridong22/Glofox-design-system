import type { CSSProperties } from 'react';
import styles from './AvatarBadge.module.css';

export interface AvatarBadgeProps {
  src?: string;
  alt?: string;
  initials?: string;
  type?: 'logo' | 'initials';
  /** Diameter in px. Figma instances of this component are frequently scaled down (e.g. 28px in Card=Testimonial's author row) rather than always used at the 56px master size. */
  size?: number;
}

export function AvatarBadge({ src, alt = '', initials, type = 'logo', size = 56 }: AvatarBadgeProps) {
  // `initials` implies initials-style content regardless of `type`, so
  // existing callers that only ever passed `initials` keep rendering an
  // initials chip instead of silently falling back to the "LOGO" placeholder.
  const isInitials = type === 'initials' || Boolean(initials);
  const badgeClass = isInitials ? styles.initialsVariant : styles.logoVariant;
  const labelClass = isInitials ? styles.initialsLabel : styles.logoLabel;

  return (
    <div
      className={`${styles.avatar} ${badgeClass}`}
      style={{ '--avatar-size': `${size}px` } as CSSProperties}
    >
      {src ? (
        <img className={styles.image} src={src} alt={alt} />
      ) : (
        <span className={labelClass}>{isInitials ? initials : 'LOGO'}</span>
      )}
    </div>
  );
}
