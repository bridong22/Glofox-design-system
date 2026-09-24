import { Badge } from '../Badge';
import { HighlightItem } from '../HighlightItem';
import styles from './HighlightSection.module.css';

export interface HighlightSectionItem {
  title: string;
  description: string;
}

const DEFAULT_ITEMS: HighlightSectionItem[] = [
  {
    title: 'ABC XLerate automated sales engagement',
    description: 'Automate custom email & SMS outreach to convert trials and reduce member churn.',
  },
  {
    title: 'Custom Branded Member App in the app store',
    description: 'Automate custom email & SMS outreach to convert trials and reduce member churn.',
  },
];

/**
 * Tinted wrapper for 1-N HighlightItems — the add-ons-included call-out
 * block for a Pricing Card tier (e.g. Elite). The "ADD-ONS INCLUDED" pill
 * reuses Badge with its fill/border colors overridden per-instance (Figma's
 * own source does the same override at the instance level — this system
 * has no separate branded/outlined Badge variant).
 */
export interface HighlightSectionProps {
  badgeLabel?: string;
  items?: HighlightSectionItem[];
}

export function HighlightSection({ badgeLabel = 'ADD-ONS INCLUDED', items = DEFAULT_ITEMS }: HighlightSectionProps) {
  return (
    <div className={styles.section}>
      <Badge
        size="small"
        className={styles.badge}
        style={{
          backgroundColor: 'var(--color-brand-subtle)',
          border: '1px solid var(--color-success)',
          color: 'var(--color-brand)',
        }}
      >
        {badgeLabel}
      </Badge>
      {items.map((item) => (
        <HighlightItem key={item.title} title={item.title} description={item.description} />
      ))}
    </div>
  );
}
