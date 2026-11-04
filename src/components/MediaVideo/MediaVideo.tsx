import { Icon } from '../Icon';
import styles from './MediaVideo.module.css';

/**
 * Click-to-play video media: poster image/placeholder + a centered circular
 * play button. Ambient (autoplay/muted/looping, no play button) isn't built
 * yet — add `playback='ambient'` if/when a confirmed usage needs it.
 */
export interface MediaVideoProps {
  posterUrl?: string;
  posterAlt?: string;
  showPlayButton?: boolean;
  onClick?: () => void;
  className?: string;
}

export function MediaVideo({ posterUrl, posterAlt = '', showPlayButton = true, onClick, className }: MediaVideoProps) {
  const classes = [styles.media, className].filter(Boolean).join(' ');

  return (
    <div
      className={classes}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {posterUrl ? (
        <img className={styles.poster} src={posterUrl} alt={posterAlt} />
      ) : (
        <p className={styles.posterPlaceholder}>Image</p>
      )}
      {showPlayButton && (
        <span className={styles.playButton} aria-hidden="true">
          <Icon name="play" size={28} />
        </span>
      )}
    </div>
  );
}
