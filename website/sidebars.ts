import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Guides',
      items: ['guides/getting-started'],
    },
    {
      type: 'category',
      label: 'API Reference',
      items: [
        'api/core-foundation',
        'api/htmleditor-core',
        'api/htmleditor-toolbar',
        'api/htmleditor-media',
      ],
    },
  ],
};

export default sidebars;
