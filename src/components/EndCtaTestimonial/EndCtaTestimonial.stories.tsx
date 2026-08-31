import type { Meta, StoryObj } from '@storybook/react';
import { EndCtaTestimonial } from './EndCtaTestimonial';

const meta: Meta<typeof EndCtaTestimonial> = {
  title: 'Components/EndCtaTestimonial',
  component: EndCtaTestimonial,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof EndCtaTestimonial>;

export const Default: Story = {};

export const CustomTestimonial: Story = {
  args: {
    title: 'Ready to fill every reformer class?',
    subtitle: 'See how Glofox keeps your waitlists moving and your classes full.',
    ctaLabel: 'Talk to Sales',
  },
};
