import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  args: {
    name: 'plan',
    label: 'Monthly',
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Unselected: Story = {
  args: {
    defaultChecked: false,
  },
};

export const Selected: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledSelected: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};
