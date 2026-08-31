import type { Meta, StoryObj } from '@storybook/react';
import { NavLinkTrigger } from './NavLinkTrigger';

const meta: Meta<typeof NavLinkTrigger> = {
  title: 'Components/NavLinkTrigger',
  component: NavLinkTrigger,
  tags: ['autodocs'],
  args: {
    label: 'Platform',
  },
};

export default meta;
type Story = StoryObj<typeof NavLinkTrigger>;

export const Default: Story = {
  args: {
    open: false,
  },
};

export const Open: Story = {
  args: {
    open: true,
  },
};
