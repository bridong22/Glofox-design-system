import type { Meta, StoryObj } from '@storybook/react';
import { ComparisonRow } from './ComparisonRow';

const meta: Meta<typeof ComparisonRow> = {
  title: 'Components/ComparisonRow',
  component: ComparisonRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ComparisonRow>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 800 }}>
      <ComparisonRow />
    </div>
  ),
};

export const ComparisonTable: Story = {
  render: () => (
    <div style={{ width: 800 }}>
      <ComparisonRow
        label="Monthly price"
        cells={[
          { type: 'text', value: '$275/mo' },
          { type: 'text', value: '$450/mo' },
        ]}
      />
      <ComparisonRow
        label="Website integration"
        cells={[{ type: 'icon' }, { type: 'icon' }]}
      />
      <ComparisonRow label="Multi-location support" cells={[{ type: 'text', value: 'Add-on' }, { type: 'icon' }]} />
    </div>
  ),
};
