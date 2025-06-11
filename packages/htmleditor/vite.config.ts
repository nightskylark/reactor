import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'HtmlEditor',
      fileName: (format) => `htmleditor.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react-quill'],
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
