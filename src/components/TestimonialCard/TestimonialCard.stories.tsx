import type { Meta, StoryObj } from '@storybook/react';
import { TestimonialCard } from './TestimonialCard';

const meta: Meta<typeof TestimonialCard> = {
  title: 'Components/TestimonialCard',
  component: TestimonialCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof TestimonialCard>;

export const Default: Story = {};

export const CustomTestimonial: Story = {
  args: {
    quote: '“The support team is incredible and the platform just works.”',
    name: 'James Ortega',
    role: 'Founder, Flow Yoga Collective',
  },
};
