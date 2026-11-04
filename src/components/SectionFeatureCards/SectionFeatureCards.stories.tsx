import type { Meta, StoryObj } from '@storybook/react';
import { SectionFeatureCards } from './SectionFeatureCards';

const meta: Meta<typeof SectionFeatureCards> = {
  title: 'Components/SectionFeatureCards',
  component: SectionFeatureCards,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionFeatureCards>;

export const Default: Story = {};

export const NoCta: Story = {
  args: {
    showCta: false,
  },
};
