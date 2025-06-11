# Reactor UI Library

This monorepo contains a modular React component library. The first feature is a rich text HTML editor split into micro-packages.

## Packages

- `@lib/htmleditor-core` – Core Quill wrapper.
- `@lib/htmleditor-toolbar` – Default toolbar plugin.

Run `npm install` and then `npm run build` within each package to build. Use the core editor with plugins:

```tsx
import { HtmlEditorCore } from '@lib/htmleditor-core';
import { toolbarPlugin } from '@lib/htmleditor-toolbar';

<HtmlEditorCore plugins={[toolbarPlugin]} />;
```
