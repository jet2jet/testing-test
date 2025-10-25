import { createDefaultEsmPreset } from 'ts-jest';

const presetConfig = createDefaultEsmPreset({
  tsconfig: 'tsconfig.json',
  diagnostics: {
    ignoreCodes: ['TS151001'],
  },
});

/** @type {import('jest').Config} */
const config = {
  ...presetConfig,
  testEnvironment: 'jsdom',
  testRegex: ['src\\/.*\\.(?:spec|test)\\.[mc]?[jt]sx?$'],
};
export default config;
