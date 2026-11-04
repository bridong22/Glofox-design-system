import { useState } from 'react';
import { SectionHeading } from '../SectionHeading';
import { FilterTab } from '../FilterTab';
import { ResourceCard, type ResourceCardProps } from '../ResourceCard';
import styles from './SectionResources.module.css';

export interface SectionResourcesProps {
  layout?: 'default' | 'centered';
  showHeading?: boolean;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
  showFilters?: boolean;
  filters?: string[];
  cards?: ResourceCardProps[];
  className?: string;
}

const DEFAULT_FILTERS = ['All', 'Guides', 'Webinars', 'Case studies'];
const DEFAULT_CARDS: ResourceCardProps[] = Array.from({ length: 6 }, () => ({ showEyebrow: false }));

export function SectionResources({
  layout = 'default',
  showHeading = true,
  eyebrow,
  headline,
  subheadline,
  showFilters = true,
  filters = DEFAULT_FILTERS,
  cards = DEFAULT_CARDS,
  className,
}: SectionResourcesProps) {
  const [activeFilter, setActiveFilter] = useState(filters[0]);
  const isCentered = layout === 'centered';
  const classes = [styles.section, className].filter(Boolean).join(' ');

  return (
    <section className={classes}>
      {showHeading && (
        <SectionHeading
          align={isCentered ? 'center' : 'left'}
          eyebrow={eyebrow}
          title={headline}
          subtitle={subheadline}
        />
      )}
      <div className={styles.body}>
        {showFilters && (
          <div className={styles.filters}>
            {filters.map((filter) => (
              <FilterTab key={filter} active={filter === activeFilter} onClick={() => setActiveFilter(filter)}>
                {filter}
              </FilterTab>
            ))}
          </div>
        )}
        <div className={styles.grid}>
          {cards.map((card, index) => (
            <ResourceCard key={index} className={styles.card} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
