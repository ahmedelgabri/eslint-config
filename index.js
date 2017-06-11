module.exports = {
  extends: [
    './best-practices',
    './errors',
    './style',
    './es6',
    './node',
    './react',
    './react-a11y',
    './imports',
    './prettier',
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
