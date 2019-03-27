module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    "import",
    "promise"
  ],
  extends: [
    "eslint:recommended",
    "plugin:jest/recommended",
    "./rules.js",
    "prettier"
  ],
};
