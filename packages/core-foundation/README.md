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

Use `LocaleProvider` to supply translated messages, switch locales and control text direction.
The provider updates the document `lang` and `dir` attributes based on the active locale.

```tsx
import { LocaleProvider, useLocale } from '@lib/core-foundation';

const messages = {
  en: { hello: 'Hello' },
  es: { hello: 'Hola' },
};
const directions = { en: 'ltr', es: 'ltr', ar: 'rtl' };

function Greeting() {
  const { t, setLocale } = useLocale();
  return (
    <>
      <p>{t('hello')}</p>
      <button onClick={() => setLocale('es')}>ES</button>
    </>
  );
}

<LocaleProvider initialLocale="en" messages={messages} directions={directions}>
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

## VisuallyHidden

`VisuallyHidden` renders content that is hidden visually but still available to screen readers. Use it to provide additional instructions or context for assistive technology users.

```tsx
import { VisuallyHidden } from '@lib/core-foundation';

<button>
  Submit
  <VisuallyHidden>submits the form</VisuallyHidden>
</button>
```
