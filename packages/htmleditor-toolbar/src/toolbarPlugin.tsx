import { HtmlEditorPlugin } from '@lib/htmleditor-core';

export const toolbarPlugin: HtmlEditorPlugin = {
  modules: {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean']
    ]
  },
  formats: [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    'image'
  ]
};
