module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'prettier',
    'plugin:nuxt/base',
    'plugin:vue/strongly-recommended',
    'plugin:vue/recommended',
    'plugin:vue/essential',
    'plugin:vue/base',
    'eslint:recommended',
  ],
  plugins: [],
  // add your custom rules here
  rules: {},
}
