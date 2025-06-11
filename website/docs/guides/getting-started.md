---
sidebar_position: 2
---

# Getting Started

Install the core packages from npm:

```bash
npm install @lib/core-foundation @lib/htmleditor-core @lib/htmleditor-toolbar @lib/htmleditor-media
```

Import the providers and editor in your app:

```tsx
import {ThemeProvider, LocaleProvider} from '@lib/core-foundation';
import {HtmlEditorCore} from '@lib/htmleditor-core';
import {toolbarPlugin} from '@lib/htmleditor-toolbar';
import {createImageUploadPlugin} from '@lib/htmleditor-media';

const imageUpload = createImageUploadPlugin({
  upload: async (file) => URL.createObjectURL(file),
});

<ThemeProvider>
  <LocaleProvider initialLocale="en" messages={{en:{}}} directions={{en:'ltr'}}>
    <HtmlEditorCore plugins={[toolbarPlugin, imageUpload]} />
  </LocaleProvider>
</ThemeProvider>;
```

Run `npm run storybook` at the repo root to explore available components.
