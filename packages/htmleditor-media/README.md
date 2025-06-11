# @lib/htmleditor-media

Image upload plugin for `@lib/htmleditor-core`.

## Installation

```bash
npm install @lib/htmleditor-core @lib/htmleditor-media
```

## Usage

```tsx
import { HtmlEditorCore } from '@lib/htmleditor-core';
import { createImageUploadPlugin } from '@lib/htmleditor-media';

const imageUpload = createImageUploadPlugin({
  upload: async (file) => {
    // TODO: upload file and return URL
    return URL.createObjectURL(file);
  },
});

<HtmlEditorCore plugins={[imageUpload]} />;
```
