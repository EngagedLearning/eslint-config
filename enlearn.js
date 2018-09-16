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
    "./rules.js",
    "prettier"
  ],
};
