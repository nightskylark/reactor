import { toolbarPlugin } from '../toolbarPlugin';

describe('toolbarPlugin', () => {
  it('provides toolbar modules and formats', () => {
    expect(toolbarPlugin.modules?.toolbar).toBeDefined();
    expect(toolbarPlugin.formats).toContain('bold');
    expect(toolbarPlugin.formats).toContain('image');
  });
});
