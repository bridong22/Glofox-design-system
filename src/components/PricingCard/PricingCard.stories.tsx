import type { Meta, StoryObj } from '@storybook/react';
import { ChecklistItem } from '../ChecklistItem';
import { HighlightSection } from '../HighlightSection';
import { PricingCard } from './PricingCard';

const meta: Meta<typeof PricingCard> = {
  title: 'Components/PricingCard',
  component: PricingCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
};

export default meta;
type Story = StoryObj<typeof PricingCard>;

export const Default: Story = {};

export const Popular: Story = {
  args: {
    style: 'popular',
    planName: 'Boost',
    planDescription: 'Everything you need to grow faster',
    price: '$450',
  },
};

/**
 * The plain "add-ons for purchase" list pattern: a semibold header row
 * followed by icon-less feature rows — per Figma's own note, the header
 * isn't a component property, just a manual font-weight override on the
 * label (here, a plain paragraph matching ChecklistItem's own label type).
 */
export const WithAddOnsList: Story = {
  args: {
    planName: 'Elite',
    planDescription: 'Advanced tools for scaling fitness brands',
    price: '$650',
    extras: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16, padding: '0 24px 32px' }}>
        <p
          style={{
            margin: 0,
            fontFamily: 'var(--font-family-base)',
            fontSize: 'var(--font-size-small)',
            fontWeight: 600,
            color: 'var(--color-fg)',
          }}
        >
          Add-ons for purchase:
        </p>
        <ChecklistItem label="ABC XLerate automated sales engagement" showIcon={false} />
        <ChecklistItem label="Custom Branded Member App in the app store" showIcon={false} />
      </div>
    ),
  },
};

export const WithHighlightSection: Story = {
  args: {
    planName: 'Elite',
    planDescription: 'Advanced tools for scaling fitness brands',
    price: '$650',
    extras: <HighlightSection />,
  },
};
