import type { ReactNode } from 'react';
import styles from './Container.module.css';

export interface ContainerProps {
  width?: 'wide' | 'narrow';
  className?: string;
  children?: ReactNode;
}

export function Container({ width = 'wide', className, children }: ContainerProps) {
  const widthClassName = width === 'narrow' ? styles.narrow : styles.wide;

  return <div className={className ? `${widthClassName} ${className}` : widthClassName}>{children}</div>;
}
