import type { Meta, StoryObj } from '@storybook/react';
import { LinearProgressTrack } from './LinearProgressTrack';

const meta: Meta<typeof LinearProgressTrack> = {
  title: 'Components/LinearProgressTrack',
  component: LinearProgressTrack,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LinearProgressTrack>;

export const Default: Story = {
  args: {
    value: 30,
  },
};

export const HalfWay: Story = {
  args: {
    value: 50,
  },
};

export const Complete: Story = {
  args: {
    value: 100,
  },
};

export const Empty: Story = {
  args: {
    value: 0,
  },
};
