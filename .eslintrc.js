module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["react-app", "react-app/jest", "airbnb-typescript", "prettier"],
  plugins: ["json-format", "simple-import-sort"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  rules: {
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  ignorePatterns: ["**/__generated__/**/*", "**/dist/**/*", ".eslintrc.js"],
};
