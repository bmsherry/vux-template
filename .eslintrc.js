// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  //extends: 'eslint:recommended',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  globals: {
    "module": true,
    "process": true,
    "require": true,
    "__dirname": true
  },
  // add your custom rules here
  /**
   *  "off" 或 0 - 关闭规则
   *  "warn" 或 1 - 开启规则，使用警告级别的错误：warn (不会导致程序退出),
   *  "error" 或 2 - 开启规则，使用错误级别的错误：error (当被触发的时候，程序会退出)
   */
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 1,
    // allow console during development
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 1,
    // no empty function
    'no-empty-function': 1,
    // no eq null
    'no-eq-null': 1,
    //no eval
    'no-eval': 1,
    //禁止使用较短的符号实现类型转换
    'no-implicit-coercion': 2,
    //禁止多个空格	
    'no-multi-spaces': 1,
    //禁止使用多行字符串
    'no-multi-str': 1,
    //vue校验
    // 'vue/jsx-uses-vars': 2
  }
}
