module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/.jest/setup-tests.js', '<rootDir>/jest.setup.js'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
    coveragePathIgnorePatterns: [
        '/dist/',
        '/node_modules/',
        '.*\\.d\\.ts',
    ],
    collectCoverage: true,
    coverageReporters: ['lcov'],
    collectCoverageFrom: ['<rootDir>/src/**/**/*.{tsx,ts}', '!<rootDir>/src/**/style.ts', '!<rootDir>/src/*.{tsx,ts}', '!<rootDir>/src/mocks/*.{tsx,ts}', '!<rootDir>/src/styles/*.{tsx,ts}', '!<rootDir>/src/pages/**/*.{tsx,ts}', '!<rootDir>/src/utils/routes.ts', '!<rootDir>/src/utils/AnimationRoutes.tsx'],
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/__mocks__/fileMock.js',
        "&components/(.*)": ["<rootDir>/src/components/$1"],
        "&utils/(.*)": ["<rootDir>/src/utils/$1"],
        "&hooks/(.*)": ["<rootDir>/src/hooks/$1"],
        "&services/(.*)": ["<rootDir>/src/services/$1"],
        "&contexts/(.*)": ["<rootDir>/src/contexts/$1"],
        "&domains/(.*)": ["<rootDir>/src/domains/$1"],
        "&schemas/(.*)": ["<rootDir>/src/schemas/$1"],
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    setupFiles: ["<rootDir>/.jest/globalSetup.ts"]
}