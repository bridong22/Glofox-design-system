import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Pagination>;

// Figma "First": active page 1 of a 3-number window, Next arrow only.
export const First: Story = {
  args: {
    currentPage: 1,
    totalPages: 9,
  },
};

// Figma "Middle": active page centered with one neighbor on each side, both arrows shown.
export const Middle: Story = {
  args: {
    currentPage: 5,
    totalPages: 9,
  },
};

// Figma "Last": active page anchored at the end of the window, Prev arrow only.
export const Last: Story = {
  args: {
    currentPage: 9,
    totalPages: 9,
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 3,
  },
};

export const Interactive: Story = {
  render: () => {
    const totalPages = 9;
    const [currentPage, setCurrentPage] = useState(1);

    return <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />;
  },
};
