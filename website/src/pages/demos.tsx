import Layout from '@theme/Layout';
import type {ReactNode} from 'react';

export default function Demos(): ReactNode {
  return (
    <Layout title="Demos" description="Interactive examples">
      <div style={{height: '80vh', display: 'flex'}}>
        <iframe
          src="/storybook/index.html"
          style={{flex: 1, border: 'none'}}
          title="Storybook"
        />
      </div>
    </Layout>
  );
}
