import eslintPluginPrettier from 'eslint-plugin-prettier';
import eslintPluginTypescript from '@typescript-eslint/eslint-plugin';
import * as parser from '@typescript-eslint/parser';

export default [
  {
    files: ['src/**/*.ts', '*'],
    ignores: ['node_modules', 'dist', 'eslint.config.js', '.github'],
    plugins: {
      prettier: eslintPluginPrettier,
      '@typescript-eslint': eslintPluginTypescript,
    },
    languageOptions: {
      parser: parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    rules: {
      semi: 'error',
      'no-console': 'off',
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
