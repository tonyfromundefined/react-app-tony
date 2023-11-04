const { defineConfig } = require("eslint-define-config");

module.exports = defineConfig({
  extends: ["eslint-config-tonyfromundefined"],
  ignorePatterns: [
    // Yarn Packages
    ".yarn/**/*",
    ".pnp.cjs",
    ".pnp.loader.mjs",

    // Build Artifacts
    "**/dist/**/*",
    "**/__generated__/**/*",
  ],
});
