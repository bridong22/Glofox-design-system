import styles from './MediaFrame.module.css';

export type MediaFrameRatio = 'hero' | 'card' | 'square';

export interface MediaFrameProps {
  /** Aspect ratio variant. Width always fills the parent column; only the height is derived. */
  ratio?: MediaFrameRatio;
  src?: string;
  alt?: string;
}

export function MediaFrame({ ratio = 'hero', src, alt = '' }: MediaFrameProps) {
  return (
    <div className={styles.mediaFrame} data-ratio={ratio}>
      {src ? (
        <img className={styles.image} src={src} alt={alt} />
      ) : (
        <p className={styles.placeholderText}>
          [ image placeholder — no photo/screenshot asset exists in this system ]
        </p>
      )}
    </div>
  );
}
