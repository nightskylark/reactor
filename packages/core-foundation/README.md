# @lib/core-foundation

Shared foundation utilities for the Reactor UI library. This package currently provides a simple theming system using CSS variables.

## Installation

```bash
npm install @lib/core-foundation
```

## Usage

Wrap your app with `ThemeProvider` to enable runtime theme switching.

```tsx
import { ThemeProvider, useTheme } from '@lib/core-foundation';

function App() {
  const { toggle } = useTheme();
  return (
    <ThemeProvider>
      <button onClick={toggle}>Toggle theme</button>
      {/* your app components */}
    </ThemeProvider>
  );
}
```

The provider sets CSS variables on `document.documentElement` based on the current mode (`light` or `dark`). Override the variables in your own CSS to customize the design tokens.
