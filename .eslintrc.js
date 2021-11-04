module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:vue/base', 'plugin:vue/vue3-essential', 'plugin:vue/vue3-recommended', 'prettier'],
  // https://eslint.vuejs.org/user-guide/#usage
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-console': 'error',
    'vue/no-unused-vars': [
      'error',
      {
        ignorePattern: '^_',
      },
    ],
  },

  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
};
