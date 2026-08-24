import type { Meta, StoryObj } from '@storybook/react';
import { ImagePlaceholderBlock } from './ImagePlaceholderBlock';

const meta: Meta<typeof ImagePlaceholderBlock> = {
  title: 'Components/ImagePlaceholderBlock',
  component: ImagePlaceholderBlock,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof ImagePlaceholderBlock>;

export const Default: Story = {
  args: {},
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
};

export const WithImage: Story = {
  args: {
    src: 'https://picsum.photos/280/200',
    alt: 'Example uploaded photo',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 280 }}>
        <Story />
      </div>
    ),
  ],
};

export const SquareAspectRatio: Story = {
  args: {
    aspectRatio: '1 / 1',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 200 }}>
        <Story />
      </div>
    ),
  ],
};
