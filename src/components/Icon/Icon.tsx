import type { SVGProps } from 'react';
import * as icons from 'lucide-react';
import { HelpCircle } from 'lucide-react';

/**
 * The Figma sprite sheet ("Sprite Sheet" page, `icon` component set, node 180:1556)
 * uses the Feather icon set, which is a 1:1 name match for lucide-react (lucide is
 * Feather's maintained fork). A handful of custom, non-Feather names were added in
 * Figma (layout helpers, "graph", "question") — those are mapped individually below.
 */
const CUSTOM_ICON_MAP: Record<string, keyof typeof icons> = {
  '2 Column': 'Columns2',
  '3 Column': 'Columns3',
  '6 Column': 'Grid3x3',
  Scan: 'Scan',
  graph: 'LineChart',
  question: 'HelpCircle',
};

export type IconName = string;

export interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  /** Figma "Style" variant value, e.g. "chevron-down", "alert-circle", "2 Column". */
  name: IconName;
  size?: number | string;
}

function toPascalCase(kebab: string): string {
  return kebab
    .split(/[\s-]+/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

export function Icon({ name, size = 20, ...rest }: IconProps) {
  const componentKey = CUSTOM_ICON_MAP[name] ?? (toPascalCase(name) as keyof typeof icons);
  const LucideIcon = (icons[componentKey] as typeof icons.Circle | undefined) ?? HelpCircle;

  return <LucideIcon size={size} aria-hidden={rest['aria-label'] ? undefined : true} {...rest} />;
}
