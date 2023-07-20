// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
export default {
  packageManager: 'yarn',
  reporters: ['html', 'clear-text', 'progress'],
  testRunner: 'jest',
  ignorePatterns: ['main.tsx'],
  coverageAnalysis: 'perTest',
};
