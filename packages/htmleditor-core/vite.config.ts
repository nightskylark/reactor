import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'HtmlEditorCore',
      fileName: (format) => `htmleditor-core.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-quill', '@lib/core-foundation'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react-quill': 'ReactQuill',
        },
      },
    },
  },
});
