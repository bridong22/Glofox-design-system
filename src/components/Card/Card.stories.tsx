import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {};

export const CustomContent: Story = {
  args: {
    title: 'Payments & billing',
    description: 'Take payments, manage plans, and automate billing without lifting a finger.',
  },
};

export const LongContent: Story = {
  args: {
    title: 'A much longer title that wraps across multiple lines',
    description:
      'A longer description to demonstrate how the card handles extra copy and wraps gracefully within its fixed width.',
  },
};
