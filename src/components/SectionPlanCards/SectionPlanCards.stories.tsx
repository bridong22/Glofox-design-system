import type { Meta, StoryObj } from '@storybook/react';
import { SectionPlanCards } from './SectionPlanCards';

const meta: Meta<typeof SectionPlanCards> = {
  title: 'Components/SectionPlanCards',
  component: SectionPlanCards,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionPlanCards>;

export const Default: Story = {};
