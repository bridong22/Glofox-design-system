import type { Meta, StoryObj } from '@storybook/react';
import { CategoryChip } from './CategoryChip';

const meta: Meta<typeof CategoryChip> = {
  title: 'Components/CategoryChip',
  component: CategoryChip,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CategoryChip>;

export const Default: Story = {
  args: {
    children: 'Marketing',
  },
};

export const WithIcon: Story = {
  args: {
    icon: 'tag',
    children: 'Marketing',
  },
};
