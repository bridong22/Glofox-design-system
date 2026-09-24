import type { Meta, StoryObj } from '@storybook/react';
import { AccordionHeader } from './AccordionHeader';

const meta: Meta<typeof AccordionHeader> = {
  title: 'Components/AccordionHeader',
  component: AccordionHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof AccordionHeader>;

export const Expanded: Story = {
  args: { defaultExpanded: true },
  render: (args) => (
    <div style={{ width: 600 }}>
      <AccordionHeader {...args} />
    </div>
  ),
};

export const Collapsed: Story = {
  args: { defaultExpanded: false },
  render: (args) => (
    <div style={{ width: 600 }}>
      <AccordionHeader {...args} />
    </div>
  ),
};
