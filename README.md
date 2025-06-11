# Reactor UI Library

This monorepo contains a modular React component library. The first feature is a rich text HTML editor split into micro-packages.

## Packages

- `@lib/htmleditor-core` – Core Quill wrapper.
- `@lib/htmleditor-toolbar` – Default toolbar plugin.

Run `npm ci` at the repo root, then `npm run build` and `npm test` to build and test all packages. Use the core editor with plugins:

```tsx
import { HtmlEditorCore } from '@lib/htmleditor-core';
import { toolbarPlugin } from '@lib/htmleditor-toolbar';

<HtmlEditorCore plugins={[toolbarPlugin]} />;
```
