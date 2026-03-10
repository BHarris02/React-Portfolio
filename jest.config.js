const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

const customConfig = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    testPathPattern: ['**/tests/**/*.{js,jsx}', '**/*.test.{js,jsx}'],
};

module.exports = createJestConfig(customConfig);