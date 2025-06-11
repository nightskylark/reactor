import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider, useTheme } from '@lib/core-foundation';

const ThemeWrapper: React.FC<{
  children: React.ReactNode;
  theme: 'light' | 'dark';
}> = ({ children, theme }) => {
  const { setMode } = useTheme();
  React.useEffect(() => {
    setMode(theme);
  }, [theme, setMode]);
  return <>{children}</>;
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
  },
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light' },
          { value: 'dark', title: 'Dark' },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider initialMode={context.globals.theme as 'light' | 'dark'}>
        <ThemeWrapper theme={context.globals.theme as 'light' | 'dark'}>
          <Story />
        </ThemeWrapper>
      </ThemeProvider>
    ),
  ],
};

export default preview;
