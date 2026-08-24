import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: (
      <>
        <span style={{ color: 'var(--color-brand)' }}>Solutions</span>
        <span>|</span>
        <span>Manage My Business</span>
      </>
    ),
  },
};

export const SimpleLabel: Story = {
  args: {
    children: 'New',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    children: (
      <>
        <span style={{ color: 'var(--color-brand)' }}>Solutions</span>
        <span>|</span>
        <span>Manage My Business</span>
      </>
    ),
  },
};
