import type { Meta, StoryObj } from '@storybook/react';
import { PullQuote } from './PullQuote';

const meta: Meta<typeof PullQuote> = {
  title: 'Components/PullQuote',
  component: PullQuote,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof PullQuote>;

export const Default: Story = {};

export const CustomTestimonial: Story = {
  args: {
    quote: '“The support team is incredible and the platform just works.”',
    name: 'James Ortega',
    role: 'Founder, Flow Yoga Collective',
  },
};
