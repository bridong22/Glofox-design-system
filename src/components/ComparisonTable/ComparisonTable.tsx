import { TableHeaderCell } from '../TableHeaderCell';
import { TableCell } from '../TableCell';
import styles from './ComparisonTable.module.css';

export interface ComparisonTableRow {
  label: string;
  values: Array<{ text: string; highlighted?: boolean }>;
}

export interface ComparisonTableProps {
  columns: string[];
  rows: ComparisonTableRow[];
}

export function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  return (
    <table className={styles.comparisonTable}>
      <thead>
        <tr>
          {columns.map((column) => (
            <TableHeaderCell key={column}>{column}</TableHeaderCell>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.label}>
            <TableCell>{row.label}</TableCell>
            {row.values.map((value, index) => (
              <TableCell key={index} highlighted={value.highlighted}>
                {value.text}
              </TableCell>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
