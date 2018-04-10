// "off" or 0 - 关闭规则
// "warn" or 1 - 将规则视为一个警告（不会影响退出码）
// "error" or 2 - 将规则视为一个错误 (退出码为1)
module.exports = {
  "extends":[
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
    // "experimentalObjectRestSpread": true 启用实验性的支持，实验性功能未来可能会变
  },
  "env":{  //预定义全局变量
    "es6":true,
    "browser": true,
    "node": true,
    "commonjs": true
  },
  "parser": "babel-eslint",
  "rules": {
        // 以下配置检查
        "array-bracket-spacing": ["error", "always"],              // 强制在[]内使用空格
        "object-curly-spacing" : ["error", "always"],              // 强制在{}使用一致的空格
        "indent"               : ["error", 2, {"SwitchCase": 1}],  // 缩进
      "semi": ["error", "always"],  //要求使用分号
      "quotes": ["error", "double"],  // 强制使用一致的单引号
        // 可能的错误
        // 这些规则与 JavaScript 代码中可能的语法错误或逻辑错误有关
        // 禁止 for 循环出现方向错误的循环，比如 for (i = 0; i < 10; i--)
      "for-direction":"error",
        // getter 必须有返回值，并且禁止返回空，比如 return;
        "getter-return": [
          "error",
          {
              "allowImplicit": false
          }
      ],
        // 禁止将 await 写在循环里，因为这样就无法同时发送多个异步请求了
        // @off 要求太严格了，有时需要在循环中写 await
        "no-await-in-loop": "off",
        // @fixable 禁止出现连续的多个空格，除非是注释前，或对齐对象的属性、变量定义、import 等
        "no-multi-spaces": [
          "error",
          {
              "ignoreEOLComments": true,
              "exceptions": {
                  "Property": true,
                  "BinaryExpression": false,
                  "VariableDeclarator": true,
                  "ImportDeclaration": true
              }
          }
      ],
        // @fixable 禁止出现多于的分号
        "no-extra-semi": "error"
  }
}
