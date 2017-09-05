module.exports = {
  extends: ['standard', 'standard-react', require.resolve('./react-a11y')],
  plugins: ['standard'],
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
