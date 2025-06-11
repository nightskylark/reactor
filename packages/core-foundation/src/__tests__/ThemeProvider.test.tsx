import React from 'react';
import { render, act } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../ThemeProvider';

describe('ThemeProvider', () => {
  it('sets data-theme attribute and toggles', () => {
    const Test = () => {
      const { toggle } = useTheme();
      return <button onClick={toggle}>toggle</button>;
    };
    const { getByText } = render(
      <ThemeProvider>
        <Test />
      </ThemeProvider>
    );
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
    act(() => {
      getByText('toggle').click();
    });
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
