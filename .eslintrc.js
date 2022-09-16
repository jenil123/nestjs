module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    sourceType: 'module',
  },
  root: true,
  env: {
    node: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    'import/parsers': {
      'typescript-eslint-parser': ['.ts'],
    },
  },
  // ignorePatterns: ['**/*.js'], // Ignoring js files
  plugins: [
    'import',
    '@typescript-eslint',
    'prettier',
    'unicorn',
    'promise',
    'simple-import-sort',
    'unused-imports',
    'sonarjs',
  ],
  extends: [
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
  ],
  rules: {
    indent: 'off',
    '@typescript-eslint/indent': ['error', 4],
    'newline-per-chained-call': 2,
    'no-console': 2,
    'eol-last': 2,
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'simple-import-sort/imports': [
      'error',
      {
        groups: [['^\\u0000'], ['^@?\\w'], ['^\\./config*'], ['^'], ['^\\.']],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/no-duplicates': 'error',
    'promise/no-nesting': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'promise/no-callback-in-promise': 'off',
    'promise/always-return': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    'promise/catch-or-return': 'off',
    'unused-imports/no-unused-imports': 'error',
    'no-unexpected-multiline': 'error',
    quotes: ['error', 'single'],
    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-unused-vars': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'sonarjs/no-duplicate-string': 'warn',
    'sonarjs/no-identical-functions': 'warn',
    'sonarjs/cognitive-complexity': 'warn',
    '@typescript-eslint/prefer-optional-chain': 'error',
    '@typescript-eslint/array-type': [
      'error',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/await-thenable': 'error',
    'max-params': [2, 12],
  },
};
