import type { Meta, StoryObj } from '@storybook/react';
import { NavMenuItem } from './NavMenuItem';

const meta: Meta<typeof NavMenuItem> = {
  title: 'Components/NavMenuItem',
  component: NavMenuItem,
  tags: ['autodocs'],
  args: {
    href: '#',
    icon: 'activity',
    title: 'Menu item title',
    description: 'Short one-line description of this item',
    showDescription: true,
  },
};

export default meta;
type Story = StoryObj<typeof NavMenuItem>;

export const Default: Story = {};

export const LabelOnly: Story = {
  args: {
    title: 'Gym',
    icon: 'dumbbell',
    showDescription: false,
  },
};
