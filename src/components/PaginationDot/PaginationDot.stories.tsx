import type { Meta, StoryObj } from '@storybook/react';
import { PaginationDot } from './PaginationDot';

const meta: Meta<typeof PaginationDot> = {
  title: 'Components/PaginationDot',
  component: PaginationDot,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof PaginationDot>;

export const Active: Story = {
  args: {
    active: true,
  },
};

export const Inactive: Story = {
  args: {
    active: false,
  },
};

export const Row: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <PaginationDot active />
      <PaginationDot />
      <PaginationDot />
    </div>
  ),
};
