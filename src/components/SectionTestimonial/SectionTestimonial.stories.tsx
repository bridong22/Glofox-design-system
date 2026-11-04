import type { Meta, StoryObj } from '@storybook/react';
import { SectionTestimonial } from './SectionTestimonial';

const meta: Meta<typeof SectionTestimonial> = {
  title: 'Components/SectionTestimonial',
  component: SectionTestimonial,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionTestimonial>;

export const ImageLeft: Story = {};

export const ImageRight: Story = {
  args: { imageAlign: 'right' },
};
