# @lib/htmleditor-core

Core rich text editor built with React Quill. Provides the editing engine used by HtmlEditor plugins.
Plugins extend the editor with additional modules such as toolbars or media handling.

## Installation

```bash
npm install @lib/htmleditor-core
```

## Usage

```tsx
import { HtmlEditorCore } from '@lib/htmleditor-core';
import { toolbarPlugin } from '@lib/htmleditor-toolbar';

function App() {
  const [value, setValue] = useState('');

  return (
    <HtmlEditorCore
      value={value}
      onChange={setValue}
      plugins={[toolbarPlugin]}
    />
  );
}
```

## Development

- `npm run dev` – start Vite dev server
- `npm run build` – build library
