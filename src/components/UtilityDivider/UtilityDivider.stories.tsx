import type { Meta, StoryObj } from '@storybook/react';
import { UtilityDivider } from './UtilityDivider';

const meta: Meta<typeof UtilityDivider> = {
  title: 'Components/UtilityDivider',
  component: UtilityDivider,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof UtilityDivider>;

export const Default: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, backgroundColor: '#110f14', padding: 12 }}>
      <span style={{ color: '#fff', fontFamily: 'var(--font-family-base)', fontSize: 14 }}>Customer login</span>
      <UtilityDivider />
      <span style={{ color: '#fff', fontFamily: 'var(--font-family-base)', fontSize: 14 }}>Support</span>
    </div>
  ),
};
