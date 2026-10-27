import type { Meta, StoryObj } from '@storybook/react';
import { tokenValue } from './tokenValue';

const SPACE_TOKENS = ['--space-1', '--space-2', '--space-3', '--space-4', '--space-6', '--space-8', '--space-12', '--space-16'];
const RADIUS_TOKENS = ['--radius-sm', '--radius-base', '--radius-md', '--radius-lg', '--radius-full'];

const meta: Meta = {
  title: 'Foundations/Spacing & Radius',
};

export default meta;
type Story = StoryObj;

export const Spacing: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
      {SPACE_TOKENS.map((cssVar) => (
        <div key={cssVar} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
          <div style={{ width: 140, fontSize: 'var(--font-size-tiny)', color: 'var(--color-fg-muted)' }}>
            {cssVar} ({tokenValue(cssVar)})
          </div>
          <div style={{ height: 16, width: `var(${cssVar})`, background: 'var(--color-brand)', borderRadius: 'var(--radius-sm)' }} />
        </div>
      ))}
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div style={{ fontFamily: 'var(--font-family-base)', display: 'flex', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
      {RADIUS_TOKENS.map((cssVar) => (
        <div key={cssVar} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 72,
              height: 72,
              background: 'var(--color-brand-subtle)',
              border: '1px solid var(--color-brand)',
              borderRadius: `var(${cssVar})`,
            }}
          />
          <div style={{ marginTop: 'var(--space-2)', fontSize: 'var(--font-size-tiny)', color: 'var(--color-fg-muted)' }}>
            {cssVar} ({tokenValue(cssVar)})
          </div>
        </div>
      ))}
    </div>
  ),
};
