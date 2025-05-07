/**
 * npm install --save-dev jest ts-jest typescript @types/jest @types/node
 * it will only work with ESM (ES Modules) and not ES6
 *  
 */
module.exports = {
  preset: 'ts-jest/presets/default-esm', // Use ESM preset for ES modules
  testEnvironment: 'node',
  extensionsToTreatAsEsm: ['.ts'],
  transform: {
    '^.+\\.ts$': ['ts-jest', {
      useESM: true
    }]
  },
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1'
  },
  testMatch: ['**/tests/**/*.test.ts']
};
