import type { CSSProperties } from 'react';
import styles from './ImagePlaceholderBlock.module.css';

export interface ImagePlaceholderBlockProps {
  src?: string;
  alt?: string;
  aspectRatio?: string;
}

export function ImagePlaceholderBlock({
  src,
  alt = '',
  aspectRatio = '280 / 200',
}: ImagePlaceholderBlockProps) {
  const style = { aspectRatio } as CSSProperties;

  if (src) {
    return <img className={styles.image} src={src} alt={alt} style={style} />;
  }

  return (
    <div className={styles.placeholder} style={style}>
      <p className={styles.placeholderText}>
        [ image placeholder — no photo/screenshot asset exists in this system ]
      </p>
    </div>
  );
}
