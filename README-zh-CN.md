<h1 align="center">medium-zoom for Saber</h1>

<div align="center">

[![npm](https://img.shields.io/npm/v/saber-plugin-medium-zoom.svg?style=for-the-badge)](https://npm.im/saber-plugin-medium-zoom)
![npm](https://img.shields.io/npm/dt/saber-plugin-medium-zoom.svg?style=for-the-badge)
[![GitHub](https://img.shields.io/github/license/kidonng/saber-plugin-medium-zoom.svg?style=for-the-badge)](./LICENSE)

[English](README.md) | 简体中文

</div>

本 [Saber](https://saber.land) 插件将把一个很棒的图片放大插件 [medium-zoom](https://github.com/francoischalifour/medium-zoom) 添加到你的网站中。

## 安装

- npm: `npm i saber-plugin-medium-zoom`
- Yarn: `yarn add saber-plugin-medium-zoom`

## 使用方法

```js
module.exports = {
  plugins: [
    {
      resolve: 'saber-plugin-medium-zoom',
      options: {
        // 参见 https://github.com/francoischalifour/medium-zoom/#api
        selector: '[data-zoomable]',
        option: {
          margin: 24,
          background: '#BADA55',
          scrollOffset: 0,
          container: '#zoom-container',
          template: '#zoom-template',
        }
      }
    }
  ]
}
```
