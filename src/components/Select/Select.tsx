import { forwardRef, useId, useState } from 'react';
import type { ChangeEvent, SelectHTMLAttributes } from 'react';
import { Icon } from '../Icon';
import styles from './Select.module.css';

export type SelectOption = string | { label: string; value: string };

export interface SelectProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'value' | 'defaultValue' | 'onChange'> {
  /** Text shown when no option is selected. Figma default: "Business type". */
  placeholder?: string;
  options: SelectOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  disabled?: boolean;
  className?: string;
}

function normalizeOption(option: SelectOption): { label: string; value: string } {
  return typeof option === 'string' ? { label: option, value: option } : option;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      placeholder = 'Business type',
      options,
      value,
      defaultValue,
      onChange,
      disabled = false,
      className,
      id,
      ...rest
    },
    ref,
  ) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;

    // Support both controlled (`value`) and uncontrolled (`defaultValue`) usage,
    // matching the native <select>/<input> convention used elsewhere in this
    // design system (see Input). Internal state tracks the uncontrolled case so
    // we can tell, either way, whether the placeholder should still be shown.
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? '');
    const currentValue = isControlled ? value : internalValue;
    const isPlaceholder = !currentValue;

    function handleChange(event: ChangeEvent<HTMLSelectElement>) {
      const nextValue = event.target.value;
      if (!isControlled) {
        setInternalValue(nextValue);
      }
      onChange?.(nextValue);
    }

    const selectClasses = [styles.select, isPlaceholder && styles.placeholder]
      .filter(Boolean)
      .join(' ');
    const wrapperClasses = [styles.wrapper, className].filter(Boolean).join(' ');

    return (
      <div className={wrapperClasses}>
        <select
          ref={ref}
          id={selectId}
          className={selectClasses}
          value={currentValue}
          onChange={handleChange}
          disabled={disabled}
          data-placeholder={isPlaceholder || undefined}
          {...rest}
        >
          {/* Disabled placeholder option: selectable by default (native selects
              always show the first option until a real choice is made) but not
              re-selectable once a real option is chosen. */}
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((option) => {
            const { label, value: optionValue } = normalizeOption(option);
            return (
              <option key={optionValue} value={optionValue}>
                {label}
              </option>
            );
          })}
        </select>
        <Icon name="chevron-down" size={16} className={styles.icon} />
      </div>
    );
  },
);

Select.displayName = 'Select';
