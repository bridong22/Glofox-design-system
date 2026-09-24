import type { Meta, StoryObj } from '@storybook/react';
import { NumberedStep } from './NumberedStep';

const meta: Meta<typeof NumberedStep> = {
  title: 'Components/NumberedStep',
  component: NumberedStep,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NumberedStep>;

export const Default: Story = {};

export const HowItWorks: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24, maxWidth: 340 }}>
      <NumberedStep
        step={1}
        iconName="users"
        title="Match with a Specialist"
        description="We match you with a Glofox specialist who knows your type of business."
      />
      <NumberedStep
        step={2}
        iconName="calendar"
        title="Book a Demo"
        description="See the platform in action, tailored to your business."
      />
      <NumberedStep
        step={3}
        iconName="check-circle"
        title="Go Live"
        description="Our team helps you launch and migrate your data."
      />
    </div>
  ),
};
