# @lib/htmleditor

A simple rich text HTML editor component built with React and Quill.

## Installation

```bash
npm install @lib/htmleditor
```

## Usage

```tsx
import { HtmlEditor } from '@lib/htmleditor';

function App() {
  const [value, setValue] = useState('');

  return (
    <HtmlEditor value={value} onChange={setValue} />
  );
}
```

## Development

- `npm run dev` – start Vite dev server
- `npm run build` – build library
