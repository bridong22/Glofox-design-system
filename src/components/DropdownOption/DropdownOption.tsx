import { Icon } from '../Icon';
import styles from './DropdownOption.module.css';

export interface DropdownOptionProps {
  label: string;
  selected?: boolean;
  onClick?: () => void;
  className?: string;
}

// Standalone presentational atom — not yet wired into a full custom-dropdown
// composite, since no live custom-dropdown pattern has been sampled from
// glofox.com (Select still uses a native <select>). Rendered as a real
// <button> (not inert text) because it represents a selectable, clickable,
// keyboard-operable row for a future dropdown-list composite to compose.
// Hover is a real CSS :hover pseudo-class (a transient interaction state);
// `selected` is a boolean prop because it reflects actual selection state a
// consumer passes in, not a transient interaction.
export function DropdownOption({ label, selected = false, onClick, className }: DropdownOptionProps) {
  const classes = [styles.option, selected && styles.selected, className].filter(Boolean).join(' ');

  return (
    <button type="button" className={classes} onClick={onClick} aria-pressed={selected}>
      <span className={styles.label}>{label}</span>
      {selected && <Icon name="check" size={16} className={styles.icon} />}
    </button>
  );
}
