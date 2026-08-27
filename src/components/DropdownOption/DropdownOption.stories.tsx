import type { Meta, StoryObj } from '@storybook/react';
import { DropdownOption } from './DropdownOption';
import styles from './DropdownOption.module.css';

const meta: Meta<typeof DropdownOption> = {
  title: 'Components/DropdownOption',
  component: DropdownOption,
  tags: ['autodocs'],
  args: {
    label: 'Yoga Studio',
  },
};

export default meta;
type Story = StoryObj<typeof DropdownOption>;

export const Default: Story = {};

// Hover is a real CSS :hover pseudo-class (see DropdownOption.module.css),
// not a prop, so there's nothing to pass for real pointer hover in a static
// docs snapshot. This repo has no pseudo-state Storybook addon installed, so
// `.forceHover` — an alias selector matching `:hover` exactly — is applied
// via className to render the hover look for this story.
export const Hover: Story = {
  args: {
    className: styles.forceHover,
  },
};

export const Selected: Story = {
  args: {
    selected: true,
  },
};
