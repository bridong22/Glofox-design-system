import type { Meta, StoryObj } from '@storybook/react';
import { SectionTeam } from './SectionTeam';

const meta: Meta<typeof SectionTeam> = {
  title: 'Components/SectionTeam',
  component: SectionTeam,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionTeam>;

export const Default: Story = {};

export const OneRow: Story = {
  args: {
    showRow2: false,
    members: [
      { name: 'Alex Rivera', role: 'CEO', showLinkedIn: true, showLink: false },
      { name: 'Jordan Lee', role: 'CTO', showLinkedIn: true, showLink: false },
      { name: 'Sam Okafor', role: 'VP Sales', showLinkedIn: true, showLink: false },
    ],
  },
};
