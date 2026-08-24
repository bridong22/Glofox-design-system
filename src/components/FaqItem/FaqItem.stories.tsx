import type { Meta, StoryObj } from '@storybook/react';
import { FaqItem } from './FaqItem';

const meta: Meta<typeof FaqItem> = {
  title: 'Components/FaqItem',
  component: FaqItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 600 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof FaqItem>;

export const Closed: Story = {};

export const Open: Story = {
  args: {
    defaultOpen: true,
  },
};

export const CustomContent: Story = {
  args: {
    question: 'Can I cancel anytime?',
    answer: 'Yes, all plans are month-to-month with no long-term contract.',
  },
};
