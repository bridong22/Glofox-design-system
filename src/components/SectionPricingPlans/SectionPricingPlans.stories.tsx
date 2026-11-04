import type { Meta, StoryObj } from '@storybook/react';
import { SectionPricingPlans } from './SectionPricingPlans';

const meta: Meta<typeof SectionPricingPlans> = {
  title: 'Components/SectionPricingPlans',
  component: SectionPricingPlans,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof SectionPricingPlans>;

export const Default: Story = {};
