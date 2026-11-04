import type { Meta, StoryObj } from '@storybook/react';
import { CardQuote } from './CardQuote';

const meta: Meta<typeof CardQuote> = {
  title: 'Components/CardQuote',
  component: CardQuote,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CardQuote>;

export const Default: Story = {};

export const NoLogoNoHeadshot: Story = {
  args: {
    showLogo: false,
    showHeadshot: false,
  },
};
