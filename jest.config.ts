/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

const config: any = {
  roots: ['<rootDir>/src'],
  
  clearMocks: true,

  coveragePathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/src/__mocks__",
    "<rootDir>/src/__tests__",
    "<rootDir>/src/index.ts",
    "<rootDir>/src/server.ts",
    "<rootDir>/src/config",
    "<rootDir>/src/models",
    "/@types/",
    "index.ts",
  ],

  coverageProvider: 'v8',

  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

  coverageDirectory: 'coverage',
  
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameMapper: {
    "@/(.*)": '<rootDir>/src/$1'
  },

  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
}

export default config