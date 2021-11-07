module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/", "<rootDir>/__tests__/mocks/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
  modulePaths: ["node_modules","<rootDir>/src"],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__tests__/mocks/styleMock.js",
  },
};
