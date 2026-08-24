import type { Meta, StoryObj } from '@storybook/react';
import { UtilityBar } from './UtilityBar';

const meta: Meta<typeof UtilityBar> = {
  title: 'Components/UtilityBar',
  component: UtilityBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'dark' },
  },
};

export default meta;
type Story = StoryObj<typeof UtilityBar>;

export const Default: Story = {};

export const CustomLinks: Story = {
  args: {
    links: [
      { label: 'Book a demo', href: '#' },
      { label: 'Contact sales', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
};
