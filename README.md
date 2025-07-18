# Reactor UI Library

This monorepo contains a modular React component library. The first feature is a rich text HTML editor split into micro-packages.

## Packages

- `@lib/htmleditor-core` – Core Quill wrapper.
- `@lib/htmleditor-toolbar` – Default toolbar plugin.
- `@lib/htmleditor-media` – Image upload plugin.
- `@lib/core-foundation` – Shared utilities including theming, localization and text direction management.

Run `npm ci` at the repo root, then `npm run build` and `npm test` to build and test all packages. Start Storybook with `npm run storybook` to explore components.
The `website` folder contains the documentation site. Deploy it with:

```bash
npm run deploy
```

The library includes theming and locale providers from `@lib/core-foundation`:

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
const directions = { en: 'ltr', es: 'ltr', ar: 'rtl' };

<ThemeProvider>
  <LocaleProvider initialLocale="en" messages={messages} directions={directions}>
    <HtmlEditorCore plugins={[toolbarPlugin, imageUpload]} />
  </LocaleProvider>
</ThemeProvider>;
```

`LocaleProvider` automatically updates the document `lang` and `dir` attributes based on the active locale and the provided `directions` map.
