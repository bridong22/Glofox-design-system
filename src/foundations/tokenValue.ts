/** Reads the resolved value of a CSS custom property for display in token stories. */
export function tokenValue(cssVar: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
}
