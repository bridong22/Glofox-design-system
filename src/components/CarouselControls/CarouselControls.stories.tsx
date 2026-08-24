import type { Meta, StoryObj } from '@storybook/react';
import { CarouselControls } from './CarouselControls';

const meta: Meta<typeof CarouselControls> = {
  title: 'Components/CarouselControls',
  component: CarouselControls,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CarouselControls>;

export const Default: Story = {
  args: {
    progress: 30,
  },
};

export const AtStart: Story = {
  args: {
    progress: 0,
    prevDisabled: true,
  },
};

export const AtEnd: Story = {
  args: {
    progress: 100,
    nextDisabled: true,
  },
};
