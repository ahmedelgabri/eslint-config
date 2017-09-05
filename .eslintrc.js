module.exports = {
  extends: ['./', './prettier', './flow', './import'].map(require.resolve),
}
