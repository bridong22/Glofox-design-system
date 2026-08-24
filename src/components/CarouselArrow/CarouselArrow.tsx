import { forwardRef } from 'react';
import { Icon } from '../Icon';
import styles from './CarouselArrow.module.css';

export interface CarouselArrowProps {
  direction: 'prev' | 'next';
  onClick?: () => void;
  disabled?: boolean;
}

export const CarouselArrow = forwardRef<HTMLButtonElement, CarouselArrowProps>(
  function CarouselArrow({ direction, onClick, disabled = false }, ref) {
    return (
      <button
        ref={ref}
        type="button"
        className={styles.carouselArrow}
        onClick={onClick}
        disabled={disabled}
        aria-label={direction === 'prev' ? 'Previous' : 'Next'}
      >
        <Icon name={direction === 'prev' ? 'chevron-left' : 'chevron-right'} size={16} />
      </button>
    );
  },
);
