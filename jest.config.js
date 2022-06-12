module.exports = {
  automock: false,
  resetMocks: false,
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
  moduleNameMapper: {
    '^@/(.*)': '<rootDir>/src/$1',
    '^tests/(.*)': '<rootDir>/tests/$1',
    '^fixtures/(.*)': '<rootDir>/tests/e2e/fixtures/$1',
    '^lodash-es$': 'lodash'
  },
  setupFilesAfterEnv: ['./tests/unit/setup.js'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['<rootDir>/tests/e2e/'],
  testMatch: ['**/__tests__/*.ts?(x)'],
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.vue$': 'vue3-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  }
}
