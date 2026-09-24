import type { Meta, StoryObj } from '@storybook/react';
import { ComparisonRowContent } from './ComparisonRowContent';

const meta: Meta<typeof ComparisonRowContent> = {
  title: 'Components/ComparisonRowContent',
  component: ComparisonRowContent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ComparisonRowContent>;

export const Text: Story = {
  args: { type: 'text', value: 'Text' },
};

export const Icon: Story = {
  args: { type: 'icon' },
};
