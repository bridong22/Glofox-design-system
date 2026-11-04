import { Icon } from '../Icon';
import styles from './PricingAddOns.module.css';

export interface PricingAddOnRow {
  label: string;
  status?: 'add-on' | 'included';
}

export interface PricingAddOnsProps {
  title?: string;
  /** Sets the default status for every row that doesn't set its own. */
  type?: 'for-purchase' | 'included';
  rows?: PricingAddOnRow[];
  className?: string;
}

const DEFAULT_ROWS: PricingAddOnRow[] = [
  { label: 'Custom Branded Member App in the app store' },
  { label: 'ABC XLerate automated sales engagement' },
  { label: 'ABC Insights Multi-Location Analytics' },
];

export function PricingAddOns({ title = 'Add-ons', type = 'for-purchase', rows = DEFAULT_ROWS, className }: PricingAddOnsProps) {
  const classes = [styles.addOns, className].filter(Boolean).join(' ');

  return (
    <div className={classes}>
      <p className={styles.title}>{title}</p>
      <div className={styles.list}>
        {rows.map((row, index) => {
          const isIncluded = (row.status ?? (type === 'included' ? 'included' : 'add-on')) === 'included';
          return (
            <div key={index} className={styles.row}>
              <p className={styles.label}>{row.label}</p>
              <span className={[styles.status, isIncluded ? styles.included : undefined].filter(Boolean).join(' ')}>
                {isIncluded ? (
                  <>
                    <Icon name="check" size={12} />
                    Included
                  </>
                ) : (
                  '$ Add-on'
                )}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
