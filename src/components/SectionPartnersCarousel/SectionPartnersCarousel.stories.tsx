import type { Meta, StoryObj } from '@storybook/react';
import { SectionPartnersCarousel } from './SectionPartnersCarousel';

const meta: Meta<typeof SectionPartnersCarousel> = {
  title: 'Components/SectionPartnersCarousel',
  component: SectionPartnersCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionPartnersCarousel>;

export const GrayscaleOff: Story = {
  args: {
    logoCarousel: { perPage: 4 },
  },
};

export const GrayscaleOn: Story = {
  args: {
    grayscale: true,
    logoCarousel: { perPage: 4 },
  },
};
