import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'HtmlEditorToolbar',
      fileName: (format) => `htmleditor-toolbar.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', '@lib/htmleditor-core'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
});
