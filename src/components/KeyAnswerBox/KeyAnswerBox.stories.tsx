import type { Meta, StoryObj } from '@storybook/react';
import { KeyAnswerBox } from './KeyAnswerBox';

const meta: Meta<typeof KeyAnswerBox> = {
  title: 'Components/KeyAnswerBox',
  component: KeyAnswerBox,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof KeyAnswerBox>;

export const Default: Story = {};

export const CustomAnswer: Story = {
  args: {
    lead: 'Bottom line:',
    body: 'most studios break even within their first two years when class utilization stays above 60%.',
  },
};
