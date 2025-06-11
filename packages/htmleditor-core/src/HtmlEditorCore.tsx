import React, { useMemo, useId } from 'react';
import { VisuallyHidden } from '@lib/core-foundation';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export interface HtmlEditorPlugin {
  modules?: Record<string, unknown>;
  formats?: string[];
}

export interface HtmlEditorCoreProps {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
  plugins?: HtmlEditorPlugin[];
  /** Accessible label for the editor */
  'aria-label'?: string;
  /** ID of element labeling the editor */
  'aria-labelledby'?: string;
  /** ID of element describing the editor */
  'aria-describedby'?: string;
  /** Additional help text for screen readers */
  screenReaderHelpText?: string;
}

export const HtmlEditorCore: React.FC<HtmlEditorCoreProps> = ({
  value,
  defaultValue,
  onChange,
  readOnly = false,
  placeholder,
  plugins = [],
  'aria-label': ariaLabel,
  'aria-labelledby': ariaLabelledBy,
  'aria-describedby': ariaDescribedBy,
  screenReaderHelpText = 'Rich text editor',
}) => {
  const modules = useMemo(() => {
    const base: Record<string, unknown> = {};
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

  const hintId = useId();
  const describedBy = ariaDescribedBy ? `${ariaDescribedBy} ${hintId}` : hintId;

  return (
    <>
      <VisuallyHidden id={hintId}>{screenReaderHelpText}</VisuallyHidden>
      <ReactQuill
        theme="snow"
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        readOnly={readOnly}
        modules={modules}
        formats={formats}
        placeholder={placeholder}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={describedBy}
      />
    </>
  );
};

export default HtmlEditorCore;
