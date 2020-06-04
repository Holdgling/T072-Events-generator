module.exports = {
  roots: ["<rootDir>/src"],

  // This adds support for TypeScript using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },

  setupFilesAfterEnv: [
    "@testing-library/jest-dom/extend-expect"
  ],

  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};