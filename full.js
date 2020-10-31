module.exports = {
  extends: ['./', './import', './typescript', './react'].map(require.resolve),
}
