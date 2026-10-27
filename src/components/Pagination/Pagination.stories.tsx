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

export const Start: Story = {
  args: {
    currentPage: 1,
    totalPages: 12,
  },
};

export const Middle: Story = {
  args: {
    currentPage: 6,
    totalPages: 12,
  },
};

export const End: Story = {
  args: {
    currentPage: 12,
    totalPages: 12,
  },
};

export const FewPages: Story = {
  args: {
    currentPage: 2,
    totalPages: 5,
  },
};

export const Compact: Story = {
  args: {
    currentPage: 1,
    totalPages: 12,
    layout: 'compact',
  },
};

export const Interactive: Story = {
  render: () => {
    const totalPages = 12;
    const [currentPage, setCurrentPage] = useState(1);

    return <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />;
  },
};
