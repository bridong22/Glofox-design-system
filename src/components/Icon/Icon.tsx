import type { SVGProps } from 'react';
import * as icons from 'lucide-react';
import { HelpCircle } from 'lucide-react';

/**
 * The Figma sprite sheet ("Sprite Sheet" page, `icon` component set, node 180:1556)
 * uses the Feather icon set, which is a 1:1 name match for lucide-react (lucide is
 * Feather's maintained fork). A handful of custom, non-Feather names were added in
 * Figma (layout helpers, "graph", "question") — those are mapped individually below.
 *
 * The 8 "card category" glyphs added 2026-08-26 (studio-management, retention-heart,
 * trend-data, marketing, dumbbell, sales-funnel, product-news, flex-slot) are
 * also custom-drawn, not part of Feather — mapped to the closest matching lucide
 * icon by concept rather than traced pixel-for-pixel (see each Style's Figma
 * description, e.g. "storefront/studio glyph", "megaphone glyph", "dumbbell glyph").
 * `dumbbell` (node 414:13) replaced an earlier `rocket-launch` name on 2026-08-27 —
 * same node, renamed per design feedback that it should read as clearly
 * fitness-related rather than a generic "launch" metaphor.
 */
const CUSTOM_ICON_MAP: Record<string, keyof typeof icons> = {
  '2 Column': 'Columns2',
  '3 Column': 'Columns3',
  '6 Column': 'Grid3x3',
  Scan: 'Scan',
  graph: 'LineChart',
  question: 'HelpCircle',
  'studio-management': 'Store',
  'retention-heart': 'Heart',
  'trend-data': 'TrendingUp',
  marketing: 'Megaphone',
  dumbbell: 'Dumbbell',
  'sales-funnel': 'Filter',
  'product-news': 'Bell',
  'flex-slot': 'Clock',
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
