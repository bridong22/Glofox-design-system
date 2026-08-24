import type { Meta, StoryObj } from '@storybook/react';
import { FilterTab } from './FilterTab';

const meta: Meta<typeof FilterTab> = {
  title: 'Components/FilterTab',
  component: FilterTab,
  tags: ['autodocs'],
  args: {
    children: 'Filter label',
  },
};

export default meta;
type Story = StoryObj<typeof FilterTab>;

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
