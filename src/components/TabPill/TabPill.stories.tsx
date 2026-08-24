import type { Meta, StoryObj } from '@storybook/react';
import { TabPill } from './TabPill';

const meta: Meta<typeof TabPill> = {
  title: 'Components/TabPill',
  component: TabPill,
  tags: ['autodocs'],
  args: {
    children: 'Tab label',
  },
};

export default meta;
type Story = StoryObj<typeof TabPill>;

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
