import React, { useMemo } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export interface HtmlEditorPlugin {
  modules?: Record<string, any>;
  formats?: string[];
}

export interface HtmlEditorCoreProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
  plugins?: HtmlEditorPlugin[];
}

export const HtmlEditorCore: React.FC<HtmlEditorCoreProps> = ({
  value,
  defaultValue,
  onChange,
  readOnly = false,
  placeholder,
  plugins = [],
}) => {
  const modules = useMemo(() => {
    const base: Record<string, any> = {};
    for (const plugin of plugins) {
      Object.assign(base, plugin.modules);
    }
    return base;
  }, [plugins]);

  const formats = useMemo(() => {
    const base: string[] = [];
    for (const plugin of plugins) {
      if (plugin.formats) {
        base.push(...plugin.formats);
      }
    }
    return Array.from(new Set(base));
  }, [plugins]);

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

export default HtmlEditorCore;
