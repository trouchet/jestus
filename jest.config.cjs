module.exports = {
  // The bail config option can be used here to have Jest stop running tests after
  // the first failure.
  bail: false,

  // Indicates whether each individual test should be reported during the run.
  verbose: false,

  preset: "ts-jest",

  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  testEnvironment: "jsdom",
  coverageProvider: "v8",

  // Indicates whether the coverage information should be collected while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files.
  coverageDirectory: "./coverage/",

  // If the test path matches any of the patterns, it will be skipped.
  testPathIgnorePatterns: ["<rootDir>/node_modules/"],

  // If the file path matches any of the patterns, coverage information will be skipped.
  coveragePathIgnorePatterns: ["node_modules", "fixtures", "testCases"],

  // The pattern Jest uses to detect test files.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",

  // @see: https://jestjs.io/docs/en/configuration#coveragethreshold-object
  coverageThreshold: {
    global: {
      statements: 95,
      branches: 90,
      functions: 95,
      lines: 95,
    },
  },
};
