import { Icon } from '../Icon';
import styles from './FeatureListItem.module.css';

/**
 * Chrome-less list item: icon + title + one-line description. Used for
 * feature/benefit grids — deliberately has no fill/stroke/radius, unlike
 * Card, since this is a list entry rather than a bounded container.
 */
export interface FeatureListItemProps {
  iconName?: string;
  title?: string;
  description?: string;
}

export function FeatureListItem({
  iconName = 'check-circle',
  title = 'Feature Title',
  description = 'Feature Description.',
}: FeatureListItemProps) {
  return (
    <div className={styles.item}>
      <Icon name={iconName} size={28} className={styles.icon} />
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
