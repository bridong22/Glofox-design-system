import { LinkArrow } from '../LinkArrow';
import styles from './SectionHeaderWithLink.module.css';

export interface SectionHeaderWithLinkProps {
  title: string;
  href?: string;
  linkLabel?: string;
}

export function SectionHeaderWithLink({ title, href = '#', linkLabel = 'See All' }: SectionHeaderWithLinkProps) {
  return (
    <div className={styles.sectionHeaderWithLink}>
      <h2 className={styles.title}>{title}</h2>
      <LinkArrow href={href}>{linkLabel}</LinkArrow>
    </div>
  );
}
