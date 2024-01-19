/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'ts-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          '@babel/preset-typescript',
        ],
        tsconfig: 'tsconfig.json',
        isolatedModules: true,
      },
    ],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  testMatch: [
    '**/*.test.(ts|js|tsx)',
    '**/*.pacttest.(ts|js|tsx)',
    '**/*.pact.spec.(ts|js|tsx)',
  ],
  coverageReporters: ['json', 'text', 'lcov'],
};

