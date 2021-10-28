module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__tests__/mocks/styleMock.js",
    "^@pages/(.*)$": "<rootDir>/pages/$1",
    "^@components/(.*)$": "<rootDir>/components/$1",
    "^@styles/(.*)$": "<rootDir>/styles/$1",
  },
};
