module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  globals: {},
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.vue$": "vue-jest",
    "^.+\\ts$": "ts-jest"
  },
  moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"]
};
