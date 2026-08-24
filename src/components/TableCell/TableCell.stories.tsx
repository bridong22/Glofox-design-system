import type { Meta, StoryObj } from '@storybook/react';
import { TableCell } from './TableCell';

const meta: Meta<typeof TableCell> = {
  title: 'Components/TableCell',
  component: TableCell,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <table>
        <tbody>
          <tr>
            <Story />
          </tr>
        </tbody>
      </table>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof TableCell>;

export const Standard: Story = {
  args: {
    children: 'Cell content',
  },
};

export const Highlighted: Story = {
  args: {
    highlighted: true,
    children: 'Cell content',
  },
};
