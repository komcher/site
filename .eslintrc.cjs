module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier", "tailwindcss"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended", // integrates Prettier with ESLint
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    "prettier/prettier": "error", // Prettier rules = ESLint errors
    "tailwindcss/no-custom-classname": "off", // you can customize if needed
  },
};
