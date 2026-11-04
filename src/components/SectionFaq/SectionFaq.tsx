import { SectionHeading } from '../SectionHeading';
import { FaqItem, type FaqItemProps } from '../FaqItem';
import styles from './SectionFaq.module.css';

export interface SectionFaqProps {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  style?: 'outline' | 'solid';
  columns?: 1 | 2;
  items?: FaqItemProps[];
  className?: string;
}

const DEFAULT_ITEMS: FaqItemProps[] = [
  { defaultOpen: true },
  {},
  {},
  {},
  {},
  {},
  {},
  {},
];

export function SectionFaq({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  style = 'outline',
  columns = 1,
  items = DEFAULT_ITEMS,
  className,
}: SectionFaqProps) {
  const perColumn = columns === 2 ? 4 : items.length;
  const column1 = items.slice(0, perColumn);
  const column2 = columns === 2 ? items.slice(perColumn, perColumn * 2) : [];
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <div className={styles.columns}>
          <div className={styles.column}>
            {column1.map((item, index) => (
              <FaqItem key={index} style={style} {...item} />
            ))}
          </div>
          {columns === 2 && (
            <div className={styles.column}>
              {column2.map((item, index) => (
                <FaqItem key={index} style={style} {...item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
