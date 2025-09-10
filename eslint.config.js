// @ts-check
import vue from 'eslint-plugin-vue'
import prettier from 'eslint-config-prettier'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import vueParser from 'vue-eslint-parser'

export default [
  {
    ignores: ['.nuxt/**', 'node_modules/**', '.output/**', 'dist/**'],
  },
  // Vue SFCs
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 2022,
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
    plugins: { vue, '@typescript-eslint': tsPlugin },
    rules: {
      ...vue.configs['flat/essential'].rules,
      ...(tsPlugin.configs.recommended?.rules || {}),
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/await-thenable': 'off',
    },
  },
  // TS/JS files
  {
    files: ['**/*.{ts,tsx,js}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: { '@typescript-eslint': tsPlugin },
    rules: {
      ...(tsPlugin.configs.recommended?.rules || {}),
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/await-thenable': 'off',
    },
  },
  prettier,
]

