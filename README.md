# 实验室官网

> 本项目是为我们的实验室 `MaLab` 显示团队信息做的网站，从最开始的使用纯 HTML 页面加 CSS、到后来加入了 bootstrap 框架等增加动态效果的效果，然后又用 vue2 进行了重构，同时由于一些布局依赖于之前的 bootstrap 框架，所以留存下来了。后来因为一些模块能够用 Element-Ui 更方便的进行开发，于是又引入了该框架。

## 官网地址

[MaLab](https://machao.group)

### 涉及技术

前端

- VueCli vue 的脚手架
- vue-router 前端路由
- antDesignforVue 组件库
- vue-i18n 国际化、 实现中英切换
- cos-nodejs-sdk-v5 用于将资源上传到 cos
- echarts 基于 JavaScript 的数据可视化图表库

### 主要功能

- 首页
- 关于
- 团队 团队成员的信息展示
- 项目 实验室的项目经历
- 论文 实验室的论文展示
- 底部的地图可展示该网站中各个国家的访问量
- 可实现日夜模式的切换
- 可实现中英切换（i18n 文件夹可自定义语言包）

### 优化

实现了 CDN 加速、使用了 webpack 插件实现了构建时自动将静态资源上传到 cos 中，加快网站访问速度。

### 上手第一件事儿

```
npm install
```

### Compiles and hot-reloads for development

### 编译以及热加载

```
npm run serve
```

### Compiles and minifies for production

### 进行构建打包操作

```
npm run build
```
