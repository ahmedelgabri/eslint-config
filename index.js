module.exports = {
  extends: ['eslint:recommended', './prettier'],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: '2018',
  },
  env: {
    es6: true,
    browser: true,
    jest: true,
    node: true,
  },
}
