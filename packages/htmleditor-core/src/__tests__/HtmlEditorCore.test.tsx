import React from 'react';
import { render, screen } from '@testing-library/react';
import { HtmlEditorCore } from '../HtmlEditorCore';
import { toolbarPlugin } from '@lib/htmleditor-toolbar';

jest.mock('react-quill', () => {
  const Mock: React.FC<Record<string, unknown>> = (props) => (
    <div
      data-testid="quill"
      data-modules={JSON.stringify(props.modules)}
      data-formats={JSON.stringify(props.formats)}
    />
  );
  Mock.displayName = 'MockReactQuill';
  return Mock;
});

describe('HtmlEditorCore', () => {
  it('applies plugin modules and formats', () => {
    render(<HtmlEditorCore plugins={[toolbarPlugin]} />);
    const el = screen.getByTestId('quill');
    const modules = JSON.parse(el.getAttribute('data-modules')!);
    const formats = JSON.parse(el.getAttribute('data-formats')!);
    expect(modules.toolbar).toBeDefined();
    expect(formats).toEqual(expect.arrayContaining(['bold', 'italic']));
  });
});
