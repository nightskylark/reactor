# @lib/core-foundation

Shared foundation utilities for the Reactor UI library. This package currently provides theming, localization, and basic accessibility helpers.

## Installation

```bash
npm install @lib/core-foundation
```

## ThemeProvider

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

## LocaleProvider

Use `LocaleProvider` to supply translated messages and switch locales.

```tsx
import { LocaleProvider, useLocale } from '@lib/core-foundation';

const messages = {
  en: { hello: 'Hello' },
  es: { hello: 'Hola' },
};

function Greeting() {
  const { t, setLocale } = useLocale();
  return (
    <>
      <p>{t('hello')}</p>
      <button onClick={() => setLocale('es')}>ES</button>
    </>
  );
}

<LocaleProvider initialLocale="en" messages={messages}>
  <Greeting />
</LocaleProvider>;
```

## FocusTrap

`FocusTrap` keeps keyboard focus inside its children while active.

```tsx
import { FocusTrap } from '@lib/core-foundation';

<FocusTrap>
  <dialog open>
    <button>First</button>
    <button>Second</button>
  </dialog>
</FocusTrap>;
```
