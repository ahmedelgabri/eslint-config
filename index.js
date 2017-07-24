module.exports = {
  extends: [
    './config/best-practices',
    './config/errors',
    './config/style',
    './config/es6',
    './config/node',
    './config/react',
    './config/react-a11y',
    './config/imports',
    './config/prettier',
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },
  rules: {
    strict: 'error',
  },
}
