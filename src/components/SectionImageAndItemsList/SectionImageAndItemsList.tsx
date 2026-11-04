import { SectionHeading } from '../SectionHeading';
import { MediaTextRow, type MediaTextRowProps } from '../MediaTextRow';
import styles from './SectionImageAndItemsList.module.css';

export interface SectionImageAndItemsListProps extends Omit<MediaTextRowProps, 'align' | 'showList'> {
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  className?: string;
}

export function SectionImageAndItemsList({
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  imageAlign = 'left',
  className,
  ...row
}: SectionImageAndItemsListProps) {
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && <SectionHeading eyebrow={eyebrow} title={headline} subtitle={subheadline} />}
      <div className={styles.body}>
        <MediaTextRow align="left" imageAlign={imageAlign} showList {...row} />
      </div>
    </section>
  );
}
