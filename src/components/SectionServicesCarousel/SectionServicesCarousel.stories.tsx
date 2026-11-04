import type { Meta, StoryObj } from '@storybook/react';
import { SectionServicesCarousel } from './SectionServicesCarousel';

const meta: Meta<typeof SectionServicesCarousel> = {
  title: 'Components/SectionServicesCarousel',
  component: SectionServicesCarousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionServicesCarousel>;

export const Default: Story = {};
