import { ComparisonRowContent } from '../ComparisonRowContent';
import styles from './ComparisonRow.module.css';

export interface ComparisonRowCell {
  type?: 'text' | 'icon';
  value?: string;
  iconName?: string;
}

/**
 * Chrome-less list row: feature label + N cells, bottom border only. Used
 * for vs-competitor comparison tables — duplicate a cell per comparison
 * column, mixing checkmarks with plain-text values (pricing, "Add-on",
 * "N/A") in the same row.
 */
export interface ComparisonRowProps {
  label?: string;
  cells?: ComparisonRowCell[];
}

const DEFAULT_CELLS: ComparisonRowCell[] = [
  { type: 'text', value: 'Text' },
  { type: 'text', value: 'Text' },
  { type: 'icon' },
  { type: 'icon' },
];

export function ComparisonRow({ label = 'Website integration', cells = DEFAULT_CELLS }: ComparisonRowProps) {
  return (
    <div className={styles.row}>
      <div className={styles.labelCell}>
        <p className={styles.label}>{label}</p>
      </div>
      <div className={styles.checks}>
        {cells.map((cell, index) => (
          <ComparisonRowContent key={index} type={cell.type} value={cell.value} iconName={cell.iconName} />
        ))}
      </div>
    </div>
  );
}
