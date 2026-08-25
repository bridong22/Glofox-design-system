import type { Meta, StoryObj } from '@storybook/react';
import { BreadcrumbTrail } from './BreadcrumbTrail';

const meta: Meta<typeof BreadcrumbTrail> = {
  title: 'Components/BreadcrumbTrail',
  component: BreadcrumbTrail,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof BreadcrumbTrail>;

export const Default: Story = {};

export const DeeperTrail: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Resources', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Business Tips' },
    ],
  },
};

export const TwoLevels: Story = {
  args: {
    items: [{ label: 'Home', href: '#' }, { label: 'Pricing' }],
  },
};
