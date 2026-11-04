import type { Meta, StoryObj } from '@storybook/react';
import { PricingAddOns } from './PricingAddOns';

const meta: Meta<typeof PricingAddOns> = {
  title: 'Components/PricingAddOns',
  component: PricingAddOns,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  decorators: [
    (Story) => (
      <div style={{ width: 320 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof PricingAddOns>;

export const ForPurchase: Story = {};

export const Included: Story = {
  args: { type: 'included' },
};
