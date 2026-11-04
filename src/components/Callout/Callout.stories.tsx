import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './Callout';

const meta: Meta<typeof Callout> = {
  title: 'Components/Callout',
  component: Callout,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Callout>;

export const Accent: Story = {};

export const Subtle: Story = {
  args: {
    style: 'subtle',
    showTitle: false,
    showLink: true,
    text: 'VENT Fitness moved from paper contracts to e-agreements, a member app and door access to Ignite',
  },
};
