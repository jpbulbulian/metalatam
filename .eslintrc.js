module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: "module",
  },
  ignorePatterns: ["build", "dist"],
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    },
  },
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks"],
  rules: {
    "no-nested-ternary": "off",
    "no-unused-vars": "warn",
    "import/prefer-default-export": "warn",
    "react-hooks/exhaustive-deps": "off",
    "react-hooks/rules-of-hooks": "error",
    "react/button-has-type": "off",
    "react/function-component-definition": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": "error",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
};
