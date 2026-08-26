import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

// Mirrors the "Business Types" list already used in Footer's DEFAULT_COLUMNS,
// so this story's options read consistently with the rest of the design system.
const BUSINESS_TYPE_OPTIONS = [
  'Gym',
  'Fitness Studio',
  'Yoga',
  'Pilates',
  'PT Studio',
  'Boxing Studio',
  'Martial Arts',
];

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    placeholder: 'Business type',
    options: BUSINESS_TYPE_OPTIONS,
  },
};

export const WithSelection: Story = {
  args: {
    placeholder: 'Business type',
    options: BUSINESS_TYPE_OPTIONS,
    defaultValue: 'Yoga',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Business type',
    options: BUSINESS_TYPE_OPTIONS,
    disabled: true,
  },
};
