import type { Meta, StoryObj } from '@storybook/react';
import { SectionResourcesCarousel } from './SectionResourcesCarousel';

const meta: Meta<typeof SectionResourcesCarousel> = {
  title: 'Components/SectionResourcesCarousel',
  component: SectionResourcesCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionResourcesCarousel>;

export const Default: Story = {};
