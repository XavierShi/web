# 移动端页面适配方案
## 核心实现
1. `index.html`  
```html
<meta name="viewport" content="maximum-scale=1.0,minimum-scale=1.0,user-scalable=0,width=device-width,initial-scale=1.0" />
```  
2. `rem.js`  
1rem = 16px (iphone6s)
```js
(function () {
  document.addEventListener('DOMContentLoaded', function (e) {
    document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 23.4375 + 'px';
  }, false);
}());
```  
3. `npm i postcss-pxtorem --save-dev`  
`.postcssrc.js`  
```js
module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {},
    // 刚才安装的插件 如下
    "postcss-pxtorem": {
      rootValue: 16,
      propList: ['*']
    }
  }
}
```  
或者  
`package.json`  
```json
  "postcss": {
    "plugins": {
      "autoprefixer": {},
      "postcss-pxtorem": {
        "rootValue": 16,
        "propList": [
          "*"
        ]
      }
    }
  },
```  
[postcss-pxtorem](https://github.com/cuth/postcss-pxtorem)
## 其余问题解决
### 字号问题



