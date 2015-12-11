module.exports = {
  extends: [
      'eslint-config-rapid7/rules/best-practices',
      'eslint-config-rapid7/rules/errors',
      'eslint-config-rapid7/rules/legacy',
      'eslint-config-rapid7/rules/node',
      'eslint-config-rapid7/rules/style',
      'eslint-config-rapid7/rules/variables'
  ],
  env: {
    browser: true,
    node: true,
    amd: false,
    mocha: false,
    jasmine: false
  },
  ecmaFeatures: {},
  globals: {},
  rules: {}
};
