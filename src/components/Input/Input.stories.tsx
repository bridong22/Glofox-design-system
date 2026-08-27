import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Work email',
  },
};

export const Filled: Story = {
  args: {
    placeholder: 'Work email',
    defaultValue: 'jane@glofox.com',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Work email',
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    placeholder: 'Work email',
    defaultValue: 'not-an-email',
    error: true,
    errorMessage: 'Please enter a valid work email address.',
  },
};

export const Textarea: Story = {
  args: {
    type: 'textarea',
    placeholder: 'Tell us about your business',
  },
};
