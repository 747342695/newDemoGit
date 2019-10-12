# 说明

## 页面开发规范
- 界面含有功能的函数名 统一为doXXX();
- 界面跳转，统一为goToPage(url);

## JS文件规范
- 统一存放在script/js下
- 分模块放js文件
- js文件名统一为： 模块名-页面名.js
- js要求

在自己的文件中加入此配置；覆写该配置
```js
/**
 * 系统配置
 * @type {{PROXY_IP: string, DOMAIN: string}}
 */
var SYS_CONF = {
    DOMAIN: "",
};
```
页面功能编写要求
```js
// 封装模块的页面请求到 模块名Module 中
// 函数都要写对应的参数注释以及方法说明
const 模块名Module ={
    
    query:function(url,data) {
      
    }
    
    方法名:function(data,url) {
      
    }
}
```
通用JS在APIUtils.js中

## 接口定义
- controller 说明统一在@Api中加入 wxApp.功能模块说明