module.exports = {
  extends: [
    'prettier',
    'prettier/flowtype',
    'prettier/react',
    'prettier/standard',
    'plugin:prettier/recommended',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: false,
        proseWrap: 'always',
      },
    ],
  },
}
