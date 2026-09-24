import type { Meta, StoryObj } from '@storybook/react';
import { StepIndicator } from './StepIndicator';

const meta: Meta<typeof StepIndicator> = {
  title: 'Components/StepIndicator',
  component: StepIndicator,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StepIndicator>;

export const Upcoming: Story = { args: { state: 'upcoming' } };
export const Active: Story = { args: { state: 'active' } };
export const Completed: Story = { args: { state: 'completed' } };

export const Wizard: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <StepIndicator state="completed" />
      <div style={{ width: 48, height: 1, background: 'var(--color-success)' }} />
      <StepIndicator state="active" />
      <div style={{ width: 48, height: 1, background: 'var(--color-border)' }} />
      <StepIndicator state="upcoming" />
      <div style={{ width: 48, height: 1, background: 'var(--color-border)' }} />
      <StepIndicator state="upcoming" />
    </div>
  ),
};
