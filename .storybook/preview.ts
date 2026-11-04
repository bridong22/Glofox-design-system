import type { Preview } from '@storybook/react';
import React from 'react';
import '../src/tokens/tokens.css';

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#14131a' },
      ],
    },
  },
  globalTypes: {
    brand: {
      name: 'Brand',
      description: 'Brand theme (controls --color-brand*/--color-cta* only)',
      defaultValue: 'glofox',
      toolbar: {
        icon: 'paintbrush',
        items: [
          { value: 'glofox', title: 'Glofox' },
          { value: 'abc', title: 'ABC' },
        ],
        showName: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const brand = context.globals.brand;
      return React.createElement(
        'div',
        { 'data-brand': brand === 'abc' ? 'abc' : undefined },
        React.createElement(Story),
      );
    },
  ],
};

export default preview;
