import { LinearProgressTrack } from '../LinearProgressTrack';
import { CarouselArrow } from '../CarouselArrow';
import styles from './CarouselControls.module.css';

export interface CarouselControlsProps {
  progress?: number;
  onPrev?: () => void;
  onNext?: () => void;
  prevDisabled?: boolean;
  nextDisabled?: boolean;
}

export function CarouselControls({
  progress = 30,
  onPrev,
  onNext,
  prevDisabled = false,
  nextDisabled = false,
}: CarouselControlsProps) {
  return (
    <div className={styles.carouselControls}>
      <LinearProgressTrack value={progress} />
      <CarouselArrow direction="prev" onClick={onPrev} disabled={prevDisabled} />
      <CarouselArrow direction="next" onClick={onNext} disabled={nextDisabled} />
    </div>
  );
}
