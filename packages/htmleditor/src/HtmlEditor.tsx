import React, { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export interface HtmlEditorProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
}

export const HtmlEditor: React.FC<HtmlEditorProps> = ({
  value,
  defaultValue,
  onChange,
  readOnly = false,
  placeholder,
}) => {
  const modules = useMemo(() => ({
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image'],
      ['clean'],
    ],
  }), []);

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'list',
    'bullet',
    'link',
    'image',
  ];

  return (
    <ReactQuill
      theme="snow"
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      readOnly={readOnly}
      modules={modules}
      formats={formats}
      placeholder={placeholder}
    />
  );
};

export default HtmlEditor;
