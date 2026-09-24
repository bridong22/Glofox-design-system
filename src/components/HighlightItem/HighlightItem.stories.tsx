import type { Meta, StoryObj } from '@storybook/react';
import { HighlightItem } from './HighlightItem';

const meta: Meta<typeof HighlightItem> = {
  title: 'Components/HighlightItem',
  component: HighlightItem,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof HighlightItem>;

export const Default: Story = {};
