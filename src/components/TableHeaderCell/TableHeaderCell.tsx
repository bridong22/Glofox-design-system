import type { ReactNode, ThHTMLAttributes } from 'react';
import styles from './TableHeaderCell.module.css';

export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

export function TableHeaderCell({ children, className, ...rest }: TableHeaderCellProps) {
  const classes = className ? `${styles.headerCell} ${className}` : styles.headerCell;

  return (
    <th className={classes} {...rest}>
      {children}
    </th>
  );
}
