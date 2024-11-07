const eslintPluginPrettier = require('eslint-plugin-prettier');
const eslintPluginTypescript = require('@typescript-eslint/eslint-plugin');
const parser = require('@typescript-eslint/parser');
const stylistic = require('@stylistic/eslint-plugin');

module.exports = [
  {
    files: ['src/**/*.ts', '*'],
    ignores: [
      'node_modules',
      'dist',
      'eslint.config.js',
      '.github',
      'coverage/*',
    ],
    plugins: {
      prettier: eslintPluginPrettier,
      '@typescript-eslint': eslintPluginTypescript,
      '@stylistic': stylistic,
    },
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    rules: {
      'no-console': 'off',
      '@stylistic/indent': ['error', 2],
      eqeqeq: 'error',
      curly: 'error',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],

      'prettier/prettier': 'error',
    },
  },
];
