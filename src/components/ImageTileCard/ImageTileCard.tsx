import styles from './ImageTileCard.module.css';

export interface ImageTileCardProps {
  imageUrl?: string;
  imageAlt?: string;
  caption?: string;
  /** Figma `Show description` property (added 2026-10-28, WP Services card field). */
  showDescription?: boolean;
  description?: string;
  showArrowBadge?: boolean;
  onClick?: () => void;
  className?: string;
}

export function ImageTileCard({
  imageUrl,
  imageAlt = '',
  caption = 'Caption or audience name',
  showDescription = false,
  description,
  showArrowBadge = true,
  onClick,
  className,
}: ImageTileCardProps) {
  const classes = [styles.card, className].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                onClick();
              }
            }
          : undefined
      }
    >
      <div className={styles.imageWrapper}>
        {imageUrl ? (
          <img className={styles.image} src={imageUrl} alt={imageAlt} />
        ) : (
          <div className={styles.imagePlaceholder}>
            <p className={styles.imagePlaceholderLabel}>Image</p>
          </div>
        )}
        {showArrowBadge && (
          <span className={styles.arrowBadge} aria-hidden="true">
            ↗
          </span>
        )}
      </div>
      <p className={styles.caption}>{caption}</p>
      {showDescription && description && <p className={styles.description}>{description}</p>}
    </div>
  );
}
