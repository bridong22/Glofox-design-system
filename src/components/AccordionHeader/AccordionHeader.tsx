import { useState } from 'react';
import { Icon } from '../Icon';
import styles from './AccordionHeader.module.css';

/**
 * Collapsible section header — subtle gray background + bold label +
 * chevron toggle, for collapsing a grouped list section (e.g. a
 * comparison-table category). Distinct from FaqItem: this is a chrome-boxed
 * group toggle for external content with no attached answer copy of its
 * own, not a self-contained question+answer row.
 */
export interface AccordionHeaderProps {
  label?: string;
  expanded?: boolean;
  defaultExpanded?: boolean;
  onToggle?: (expanded: boolean) => void;
}

export function AccordionHeader({
  label = 'Growth',
  expanded,
  defaultExpanded = true,
  onToggle,
}: AccordionHeaderProps) {
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const isExpanded = expanded ?? internalExpanded;

  function toggle() {
    const next = !isExpanded;
    if (expanded === undefined) {
      setInternalExpanded(next);
    }
    onToggle?.(next);
  }

  return (
    <button type="button" className={styles.header} onClick={toggle} aria-expanded={isExpanded}>
      <span className={styles.label}>{label}</span>
      <Icon name={isExpanded ? 'chevron-up' : 'chevron-down'} size={20} className={styles.chevron} />
    </button>
  );
}
