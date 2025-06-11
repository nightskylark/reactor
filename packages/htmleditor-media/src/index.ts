export interface ImageUploadOptions {
  upload: (file: File) => Promise<string>;
}

export const createImageUploadPlugin = (options: ImageUploadOptions) => ({
  modules: {
    imageUploader: options,
  },
  formats: ['image'],
});

export type ImageUploadPlugin = ReturnType<typeof createImageUploadPlugin>;
