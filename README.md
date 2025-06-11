# Reactor UI Library

This monorepo contains a modular React component library. The first feature is a rich text HTML editor split into micro-packages.

## Packages

- `@lib/htmleditor-core` – Core Quill wrapper.
- `@lib/htmleditor-toolbar` – Default toolbar plugin.
- `@lib/htmleditor-media` – Image upload plugin.
- `@lib/core-foundation` – Shared utilities including theming and localization.

Run `npm ci` at the repo root, then `npm run build` and `npm test` to build and test all packages. Start Storybook with `npm run storybook` to explore components. The library includes theming and locale providers from `@lib/core-foundation`:

```tsx
import { HtmlEditorCore } from '@lib/htmleditor-core';
import { toolbarPlugin } from '@lib/htmleditor-toolbar';
import { createImageUploadPlugin } from '@lib/htmleditor-media';
import { ThemeProvider, LocaleProvider } from '@lib/core-foundation';

const imageUpload = createImageUploadPlugin({
  upload: async (file) => URL.createObjectURL(file),
});

const messages = {
  en: { hello: 'Hello' },
  es: { hello: 'Hola' },
};

<ThemeProvider>
  <LocaleProvider initialLocale="en" messages={messages}>
    <HtmlEditorCore plugins={[toolbarPlugin, imageUpload]} />
  </LocaleProvider>
</ThemeProvider>;
```
