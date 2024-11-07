import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1',
  },
   collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['html', 'text', 'lcov'],
  reporters: [
    'default',
    [
      'jest-html-reporter',
      {
        pageTitle: 'Test Coverage Report',
        outputPath: './coverage/test-report.html',
        includeFailureMsg: true,
        includeConsoleLog: true,
      },
    ],
  ],
};

export default config;
