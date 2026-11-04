import { useState } from 'react';
import styles from './CurrencySwitcher.module.css';

export interface CurrencySwitcherProps {
  options?: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const DEFAULT_OPTIONS = ['USD $', 'GBP £', 'EUR €', 'AUD $'];

export function CurrencySwitcher({
  options = DEFAULT_OPTIONS,
  defaultValue,
  onChange,
  className,
}: CurrencySwitcherProps) {
  const [selected, setSelected] = useState(defaultValue ?? options[0]);
  const classes = [styles.switcher, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      {options.map((option) => {
        const isSelected = option === selected;
        return (
          <button
            key={option}
            type="button"
            className={[styles.option, isSelected ? styles.selected : undefined].filter(Boolean).join(' ')}
            aria-pressed={isSelected}
            onClick={() => {
              setSelected(option);
              onChange?.(option);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
