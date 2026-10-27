import type { Meta, StoryObj } from '@storybook/react';
import { ImageTileCard } from './ImageTileCard';

const meta: Meta<typeof ImageTileCard> = {
  title: 'Components/ImageTileCard',
  component: ImageTileCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ImageTileCard>;

export const Default: Story = {};

export const Clickable: Story = {
  args: {
    caption: 'Boxing studios',
    onClick: () => alert('Navigate to boxing studios'),
  },
};

export const NoArrowBadge: Story = {
  args: {
    showArrowBadge: false,
  },
};
