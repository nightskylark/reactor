import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { HtmlEditorCore } from './HtmlEditorCore';
import { toolbarPlugin } from '@lib/htmleditor-toolbar';

const meta: Meta<typeof HtmlEditorCore> = {
  title: 'HtmlEditor/Core',
  component: HtmlEditorCore,
  parameters: {
    controls: { hideNoControlsWarning: true },
  },
};

export default meta;

type Story = StoryObj<typeof HtmlEditorCore>;

const BasicComponent: React.FC = () => {
  const [value, setValue] = useState('');
  return (
    <HtmlEditorCore
      value={value}
      onChange={setValue}
      plugins={[toolbarPlugin]}
    />
  );
};

export const Basic: Story = {
  render: () => <BasicComponent />,
};
