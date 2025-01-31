export default {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/setup-jest.ts"],
  testMatch: ["**/__tests__/**/*.spec.ts", "**/?(*.)+(spec|test).ts"],
  reporters: ["default", "jest-junit"],
  coverageDirectory: "coverage",
  moduleNameMapper: {
    "^@app/(.*)$": "<rootDir>/src/app/$1",
    "^@(components|services|models|utils)/(.*)$": "<rootDir>/src/app/$1/$2",
    "^@env/(.*)$": "<rootDir>/src/environments/$1",
  },
  testEnvironment: "@happy-dom/jest-environment",
};
