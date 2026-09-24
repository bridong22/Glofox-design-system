import type { Meta, StoryObj } from '@storybook/react';
import { CtaRow } from './CtaRow';

const meta: Meta<typeof CtaRow> = {
  title: 'Components/CtaRow',
  component: CtaRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof CtaRow>;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 900 }}>
      <CtaRow {...args} />
    </div>
  ),
};
