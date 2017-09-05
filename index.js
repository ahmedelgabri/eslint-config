module.exports = {
  extends: [
    'standard',
    'standard-react',
    ...['./config/react-a11y', './config/prettier'].map(require.resolve),
  ],
  plugins: ['flowtype', 'standard'],
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
