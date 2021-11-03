module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/__tests__/mocks/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__tests__/mocks/styleMock.js",
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^styles/(.*)$": "<rootDir>/src/styles/$1",
    "^enums/(.*)$": "<rootDir>/src/enums/$1",
  },
};
