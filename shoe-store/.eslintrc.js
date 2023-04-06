module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript'
  ],
  overrides: [
  ],
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'no-unused-expressions': 'off',
    '@typescript-eslint/no-unused-expressions': 'error'
  }
}
