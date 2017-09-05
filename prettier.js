module.exports = {
  extends: ['prettier', 'prettier/flowtype', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      { semi: false, trailingComma: 'es5', singleQuote: true },
    ],
  },
}
