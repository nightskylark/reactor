module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'jsdom',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', {
      useESM: true,
      tsconfig: '<rootDir>/tsconfig.json',
    }],
  },
  roots: ['<rootDir>/packages'],
  moduleNameMapper: {
    '^@lib/htmleditor-core$': '<rootDir>/packages/htmleditor-core/src',
    '^@lib/htmleditor-toolbar$': '<rootDir>/packages/htmleditor-toolbar/src',
    '^@lib/htmleditor-media$': '<rootDir>/packages/htmleditor-media/src',
    '^@lib/core-foundation$': '<rootDir>/packages/core-foundation/src',
    '\\.(css)$': 'identity-obj-proxy'
  },
  setupFilesAfterEnv: ['<rootDir>/packages/htmleditor-core/jest.setup.ts']
};
