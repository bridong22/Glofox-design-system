/**
 * Reads the resolved value of a CSS custom property for display in token
 * stories. Defaults to the document root, but accepts a specific element so
 * callers nested inside a scoped override (e.g. the `[data-brand="abc"]`
 * wrapper the Storybook toolbar's Brand toggle applies) read the value that
 * actually cascades there, not the root's — otherwise the printed hex never
 * updates when the brand toggle changes a token like `--color-brand`.
 */
export function tokenValue(cssVar: string, el: Element = document.documentElement): string {
  return getComputedStyle(el).getPropertyValue(cssVar).trim();
}
