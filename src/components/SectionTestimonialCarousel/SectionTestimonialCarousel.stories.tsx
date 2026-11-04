import type { Meta, StoryObj } from '@storybook/react';
import { SectionTestimonialCarousel } from './SectionTestimonialCarousel';

const meta: Meta<typeof SectionTestimonialCarousel> = {
  title: 'Components/SectionTestimonialCarousel',
  component: SectionTestimonialCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionTestimonialCarousel>;

export const Default: Story = {};
