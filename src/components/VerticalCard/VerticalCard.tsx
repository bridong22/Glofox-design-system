import { Button } from '../Button';
import { MediaFrame } from '../MediaFrame';
import styles from './VerticalCard.module.css';

export interface VerticalCardProps {
  imageSrc?: string;
  imageAlt?: string;
  title?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export function VerticalCard({
  imageSrc,
  imageAlt = '',
  title = 'Built for fitness, not retrofitted for it',
  buttonLabel = 'Read More',
  onButtonClick,
}: VerticalCardProps) {
  return (
    <div className={styles.card}>
      <MediaFrame ratio="square" src={imageSrc} alt={imageAlt} />
      <div className={styles.content}>
        <p className={styles.title}>{title}</p>
        <Button variant="ghost" size="small" className={styles.button} onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      </div>
    </div>
  );
}
