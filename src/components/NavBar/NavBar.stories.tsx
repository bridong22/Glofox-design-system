import type { Meta, StoryObj } from '@storybook/react';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'Components/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Desktop: Story = {
  args: {
    layout: 'desktop',
    theme: 'light',
  },
};

export const DesktopDark: Story = {
  args: {
    layout: 'desktop',
    theme: 'dark',
  },
  parameters: {
    backgrounds: { default: 'dark' },
  },
};

export const DesktopDarkScrolled: Story = {
  name: 'Desktop, Dark, Scrolled',
  render: () => (
    <div>
      <NavBar layout="desktop" theme="dark" />
      <div style={{ padding: 24, color: 'var(--color-fg-muted)', fontFamily: 'var(--font-family-base)' }}>
        Scroll this page — past ~8px the dark nav swaps to the same solid white
        background as the light theme, mirroring the live site's fixed nav.
      </div>
      <div style={{ height: '150vh' }} />
    </div>
  ),
};

export const Mobile: Story = {
  args: {
    layout: 'mobile',
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};

export const MobileMenuOpen: Story = {
  args: {
    layout: 'mobile',
    defaultMenuOpen: true,
  },
  parameters: {
    viewport: { defaultViewport: 'mobile1' },
  },
};
