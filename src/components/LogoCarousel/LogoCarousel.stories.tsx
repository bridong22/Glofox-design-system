import type { Meta, StoryObj } from '@storybook/react';
import { LogoCarousel } from './LogoCarousel';

const meta: Meta<typeof LogoCarousel> = {
  title: 'Components/LogoCarousel',
  component: LogoCarousel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LogoCarousel>;

export const Default: Story = {};

export const WithCarouselControls: Story = {
  args: {
    enableCarousel: true,
    perPage: 4,
  },
};

export const Grayscale: Story = {
  args: {
    grayscale: true,
  },
};
