import { forwardRef, type AnchorHTMLAttributes } from 'react';
import { Icon } from '../Icon';
import styles from './LinkArrow.module.css';

export type LinkArrowProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const LinkArrow = forwardRef<HTMLAnchorElement, LinkArrowProps>(function LinkArrow(
  { children, className, ...rest },
  ref,
) {
  return (
    <a ref={ref} className={`${styles.linkArrow} ${className ?? ''}`} {...rest}>
      <span>{children}</span>
      <Icon name="arrow-right" size={16} />
    </a>
  );
});
