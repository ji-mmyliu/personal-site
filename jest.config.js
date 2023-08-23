/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  modulePathIgnorePatterns: ["dist", "build"],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};