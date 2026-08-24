import type { Meta, StoryObj } from '@storybook/react';
import { TableHeaderCell } from './TableHeaderCell';

const meta: Meta<typeof TableHeaderCell> = {
  title: 'Components/TableHeaderCell',
  component: TableHeaderCell,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <table>
        <thead>
          <tr>
            <Story />
          </tr>
        </thead>
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableHeaderCell>;

export const Default: Story = {
  args: {
    children: 'Column heading',
  },
};
