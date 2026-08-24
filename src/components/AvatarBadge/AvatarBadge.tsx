import styles from './AvatarBadge.module.css';

export interface AvatarBadgeProps {
  src?: string;
  alt?: string;
  initials?: string;
}

export function AvatarBadge({ src, alt = '', initials }: AvatarBadgeProps) {
  return (
    <div className={styles.avatar}>
      {src ? (
        <img className={styles.image} src={src} alt={alt} />
      ) : (
        <span className={styles.initials}>{initials}</span>
      )}
    </div>
  );
}
