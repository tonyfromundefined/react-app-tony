module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  extends: ["react-app", "react-app/jest", "airbnb", "prettier"],
  plugins: ["json-format", "simple-import-sort"],
  rules: {
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx", ".tsx"],
      },
    ],
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  ignorePatterns: ["**/__generated__/**/*", "**/lib/**/*", "**/dist/**/*"],
};
