import type { Meta, StoryObj } from '@storybook/react';
import { ChecklistItem } from './ChecklistItem';

const meta: Meta<typeof ChecklistItem> = {
  title: 'Components/ChecklistItem',
  component: ChecklistItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ChecklistItem>;

export const Default: Story = {
  args: {
    label: 'Unlimited classes & bookings',
  },
};

export const List: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <ChecklistItem label="Unlimited classes & bookings" />
      <ChecklistItem label="Payments & invoicing" />
      <ChecklistItem label="Marketing automation" />
    </div>
  ),
};
