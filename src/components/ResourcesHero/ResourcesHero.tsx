import { FilterTab } from '../FilterTab';
import styles from './ResourcesHero.module.css';

export interface ResourcesHeroProps {
  heading?: string;
  tabs: string[];
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export function ResourcesHero({
  heading = 'Glofox Resources',
  tabs,
  activeTab,
  onTabChange,
}: ResourcesHeroProps) {
  return (
    <div className={styles.resourcesHero}>
      <p className={styles.heading}>{heading}</p>
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <FilterTab key={tab} active={tab === activeTab} onClick={() => onTabChange?.(tab)}>
            {tab}
          </FilterTab>
        ))}
      </div>
    </div>
  );
}
