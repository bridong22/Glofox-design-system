import type { Meta, StoryObj } from '@storybook/react';
import { LetterGroupHeader } from './LetterGroupHeader';

const meta: Meta<typeof LetterGroupHeader> = {
  title: 'Components/LetterGroupHeader',
  component: LetterGroupHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof LetterGroupHeader>;

export const Default: Story = {};

export const LetterM: Story = {
  args: {
    letter: 'M',
  },
};
