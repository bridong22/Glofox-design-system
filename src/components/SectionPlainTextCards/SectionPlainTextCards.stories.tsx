import type { Meta, StoryObj } from '@storybook/react';
import { SectionPlainTextCards } from './SectionPlainTextCards';

const meta: Meta<typeof SectionPlainTextCards> = {
  title: 'Components/SectionPlainTextCards',
  component: SectionPlainTextCards,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionPlainTextCards>;

export const Sky: Story = {};

export const Blush: Story = {
  args: { tone: 'blush' },
};

export const Outline: Story = {
  args: { tone: 'outline' },
};
