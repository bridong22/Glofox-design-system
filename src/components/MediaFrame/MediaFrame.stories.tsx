import type { Meta, StoryObj } from '@storybook/react';
import { MediaFrame } from './MediaFrame';

const meta: Meta<typeof MediaFrame> = {
  title: 'Components/MediaFrame',
  component: MediaFrame,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    ratio: {
      control: 'select',
      options: ['hero', 'card', 'square'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof MediaFrame>;

export const Hero: Story = {
  args: { ratio: 'hero' },
  decorators: [
    (Story) => (
      <div style={{ width: 480 }}>
        <Story />
      </div>
    ),
  ],
};

export const Card: Story = {
  args: { ratio: 'card' },
  decorators: [
    (Story) => (
      <div style={{ width: 420 }}>
        <Story />
      </div>
    ),
  ],
};

export const Square: Story = {
  args: { ratio: 'square' },
  decorators: [
    (Story) => (
      <div style={{ width: 300 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithImage: Story = {
  args: {
    ratio: 'card',
    src: 'https://picsum.photos/420/280',
    alt: 'Example uploaded photo',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 420 }}>
        <Story />
      </div>
    ),
  ],
};
