import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySwitcher } from './CurrencySwitcher';

const meta: Meta<typeof CurrencySwitcher> = {
  title: 'Components/CurrencySwitcher',
  component: CurrencySwitcher,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CurrencySwitcher>;

export const Default: Story = {};
