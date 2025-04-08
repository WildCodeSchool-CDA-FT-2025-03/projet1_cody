import typescriptEslint from '@typescript-eslint/eslint-plugin';
import prettier from 'eslint-plugin-prettier';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const compat = new FlatCompat({
  baseDirectory: dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  ...compat.extends(
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      prettier
    },
    ignores: ['eslint.config.mjs'],
    rules: {
      'prettier/prettier': 'error',
      'no-console': [
        'error',
        {
          allow: ['error', 'info', 'warn']
        }
      ],
      'semi': ['error', 'always'],
      'quotes': ['error', 'double'],
    }
  }
];