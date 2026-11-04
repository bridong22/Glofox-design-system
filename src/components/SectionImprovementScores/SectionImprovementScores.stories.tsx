import type { Meta, StoryObj } from '@storybook/react';
import { SectionImprovementScores } from './SectionImprovementScores';

const meta: Meta<typeof SectionImprovementScores> = {
  title: 'Components/SectionImprovementScores',
  component: SectionImprovementScores,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionImprovementScores>;

export const Default: Story = {};

export const ThreeScores: Story = {
  args: {
    scores: [
      {
        prefix: 'up to',
        value: '42%',
        label: 'Increase in retention',
        description: 'Automated check-ins and churn alerts keep members engaged.',
      },
      {
        prefix: 'up to',
        value: '30%',
        label: 'More bookings',
        description: 'Barcode check-in and kiosk mode remove friction at the door.',
      },
      {
        prefix: 'up to',
        value: '97%+',
        label: 'Collection rate',
        description: 'Automated billing and payment recovery keep revenue on track.',
      },
    ],
  },
};
