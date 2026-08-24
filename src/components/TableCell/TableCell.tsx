import type { ReactNode, TdHTMLAttributes } from 'react';
import styles from './TableCell.module.css';

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  highlighted?: boolean;
  children: ReactNode;
}

export function TableCell({ highlighted = false, children, className, ...rest }: TableCellProps) {
  const classes = [styles.cell, highlighted ? styles.highlighted : undefined, className]
    .filter(Boolean)
    .join(' ');

  return (
    <td className={classes} {...rest}>
      {children}
    </td>
  );
}
