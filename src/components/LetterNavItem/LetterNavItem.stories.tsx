import type { Meta, StoryObj } from '@storybook/react';
import { LetterNavItem } from './LetterNavItem';

const meta: Meta<typeof LetterNavItem> = {
  title: 'Components/LetterNavItem',
  component: LetterNavItem,
  tags: ['autodocs'],
  args: {
    letter: 'A',
  },
};

export default meta;
type Story = StoryObj<typeof LetterNavItem>;

export const Active: Story = {};

export const Inactive: Story = {
  args: {
    letter: 'Q',
    active: false,
  },
};

/** The full A-Z jump-nav rail, mixing active and inactive letters. */
export const Rail: Story = {
  render: () => {
    const activeLetters = new Set(['A', 'B', 'C', 'M', 'P', 'R', 'S']);
    const letters = Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i));
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
        {letters.map((letter) => (
          <LetterNavItem key={letter} letter={letter} active={activeLetters.has(letter)} />
        ))}
      </div>
    );
  },
};
