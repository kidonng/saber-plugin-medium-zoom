<h1 align="center">medium-zoom for Saber</h1>

<div align="center">

[![npm](https://img.shields.io/npm/v/saber-plugin-medium-zoom.svg?style=for-the-badge)](https://npm.im/saber-plugin-medium-zoom)
![npm](https://img.shields.io/npm/dt/saber-plugin-medium-zoom.svg?style=for-the-badge)
[![GitHub](https://img.shields.io/github/license/kidonng/saber-plugin-medium-zoom.svg?style=for-the-badge)](./LICENSE)

English | [简体中文](README-zh-CN.md)

</div>

This [Saber](https://saber.land) plugin will add an awesome image zoom library [medium-zoom](https://github.com/francoischalifour/medium-zoom) to your site.

## Install

- npm: `npm i saber-plugin-medium-zoom`
- Yarn: `yarn add saber-plugin-medium-zoom`

## Usage

```js
module.exports = {
  plugins: [
    {
      resolve: 'saber-plugin-medium-zoom',
      options: {
        // See https://github.com/francoischalifour/medium-zoom/#api
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
