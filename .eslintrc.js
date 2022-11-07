// ESLint的配置文件，遵循CommonJS的导出规则，所导出的对象就是ESLint的配置对象
module.exports = {
  // 表示当前目录问项目的根目录，所有的ESLint规则都只在当前目录下生效
  root: true,
  // 启用ESLint检测的环境
  env: {
    // 在node环境下启动ESLint检测
    node: true
  },
  // ESLint中基础配置需要继承的配置
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
  ],
  // 解析器
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  // 需要修改的启用规则，及其各自的错误级别
  /**
   * 错误级别分三种：
   * off 或 0 - 关闭规则
   * warn 或 1 - 开启规则，使用警告级别的错误：warn（不会导致程序退出）
   * error 或 2 - 开启规则，使用错误级别的错误：error（当被触发的时候，程序退出）
   */
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'quotes': 'off',
    // 'comma-dangle': 'off',
    // 'semi': 'off',
    'space-before-function-paren': 'off'
  }
}
