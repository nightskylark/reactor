# Reactor UI Library

This monorepo contains a modular React component library. The first feature is a rich text HTML editor split into micro-packages.

## Packages

- `@lib/htmleditor-core` – Core Quill wrapper.
- `@lib/htmleditor-toolbar` – Default toolbar plugin.
- `@lib/htmleditor-media` – Image upload plugin.
- `@lib/core-foundation` – Shared utilities including theming.

Run `npm ci` at the repo root, then `npm run build` and `npm test` to build and test all packages. Start Storybook with `npm run storybook` to explore components. Use the core editor with plugins. The library includes a simple theming system via `ThemeProvider` from `@lib/core-foundation`:

```tsx
import { HtmlEditorCore } from '@lib/htmleditor-core';
import { toolbarPlugin } from '@lib/htmleditor-toolbar';
import { createImageUploadPlugin } from '@lib/htmleditor-media';

const imageUpload = createImageUploadPlugin({
  upload: async (file) => URL.createObjectURL(file),
});

<HtmlEditorCore plugins={[toolbarPlugin, imageUpload]} />;

// Wrap your application with ThemeProvider to enable runtime theme switching
import { ThemeProvider } from '@lib/core-foundation';

<ThemeProvider>
  <HtmlEditorCore plugins={[toolbarPlugin, imageUpload]} />
</ThemeProvider>;
```
