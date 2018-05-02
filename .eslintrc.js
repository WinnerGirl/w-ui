// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // 关闭数组，对象最后一个元素后的逗号检查
    'comma-dangle': 0,
    "no-extra-semi": 0,
    "new-cap": 0,
    "no-new": 0,
    "no-undef": 0,
    "max-len": 0,
    "no-useless-escape": 0,
    "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格
    "semi": [2, "always"],//语句强制分号结尾
    "no-console": 0,// 禁止使用console
    // allow async-await
    'generator-star-spacing': 'off',
    'no-unused-expressions': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
