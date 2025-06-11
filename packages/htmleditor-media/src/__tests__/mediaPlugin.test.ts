import { createImageUploadPlugin } from '../index';

describe('createImageUploadPlugin', () => {
  it('returns modules with imageUploader', () => {
    const plugin = createImageUploadPlugin({
      upload: async () => 'url',
    });
    expect(plugin.modules?.imageUploader).toBeDefined();
    expect(plugin.formats).toContain('image');
  });
});
