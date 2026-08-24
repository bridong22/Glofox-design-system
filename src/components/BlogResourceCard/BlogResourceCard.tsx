import { ImagePlaceholderBlock } from '../ImagePlaceholderBlock';
import { LinkArrow } from '../LinkArrow';
import styles from './BlogResourceCard.module.css';

export interface BlogResourceCardProps {
  type?: 'blog';
  image?: string;
  category?: string;
  title: string;
  href?: string;
}

export function BlogResourceCard({ image, category = 'Business Tips', title, href = '#' }: BlogResourceCardProps) {
  return (
    <div className={styles.card}>
      <ImagePlaceholderBlock src={image} alt={title} aspectRatio="280 / 180" />
      <p className={styles.category}>{category}</p>
      <p className={styles.title}>{title}</p>
      <LinkArrow href={href} className={styles.link}>
        See All
      </LinkArrow>
    </div>
  );
}
