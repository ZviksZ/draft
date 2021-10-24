module.exports = {
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  moduleNameMapper: {
    "^@components(.*)$": "<rootDir>/components$1",
    "^@styles(.*)$": "<rootDir>/styles$1",
    "^@pages(.*)$": "<rootDir>/pages$1",
    "^@hooks(.*)$": "<rootDir>/hooks$1",
    "^@__tests__(.*)$": "<rootDir>/__tests__$1",
  },
};
