import type { Meta, StoryObj } from '@storybook/react';
import { VerticalCard } from './VerticalCard';

const meta: Meta<typeof VerticalCard> = {
  title: 'Components/VerticalCard',
  component: VerticalCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof VerticalCard>;

export const Default: Story = {};

export const CustomCopy: Story = {
  args: {
    title: 'A longer title that spans across two lines of text',
    buttonLabel: 'Learn More',
  },
};
