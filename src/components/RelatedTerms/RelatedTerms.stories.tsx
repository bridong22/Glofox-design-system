import type { Meta, StoryObj } from '@storybook/react';
import { RelatedTerms } from './RelatedTerms';

const meta: Meta<typeof RelatedTerms> = {
  title: 'Components/RelatedTerms',
  component: RelatedTerms,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof RelatedTerms>;

export const Default: Story = {};

export const FewTerms: Story = {
  args: {
    terms: [{ label: 'Churn Rate' }, { label: 'Member Retention Rate' }],
  },
};
