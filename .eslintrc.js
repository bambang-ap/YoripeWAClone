module.exports = {
  root: true,
  extends: '@react-native',
  overrides: {
    files: ['*.ts', "*.tsx"],
    rules: {
      curly: 0,
      'object-curly-spacing': 0,
      'react/jsx-curly-newline': 0,
    }
  }
};
