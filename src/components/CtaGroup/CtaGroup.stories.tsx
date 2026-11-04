import type { Meta, StoryObj } from '@storybook/react';
import { CtaGroup } from './CtaGroup';

const meta: Meta<typeof CtaGroup> = {
  title: 'Components/CtaGroup',
  component: CtaGroup,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CtaGroup>;

export const Default: Story = {};

export const PrimaryOnly: Story = {
  args: {
    showSecondary: false,
  },
};

export const LeftAligned: Story = {
  args: {
    align: 'left',
    primaryLabel: 'Start free trial',
    secondaryLabel: 'Talk to sales',
  },
};
