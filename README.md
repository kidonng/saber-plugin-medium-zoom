<h1 align="center">medium-zoom for Saber</h1>

<div align="center">

[![Latest version](https://img.shields.io/npm/v/saber-plugin-medium-zoom.svg?style=flat-square)](https://npm.im/saber-plugin-medium-zoom)
![npm downloads](https://img.shields.io/npm/dt/saber-plugin-medium-zoom.svg?style=flat-square)
[![License](https://img.shields.io/github/license/kidonng/saber-plugin-medium-zoom.svg?style=flat-square)](LICENSE)
[![Mentioned in Awesome Saber](https://awesome.re/mentioned-badge-flat.svg)](https://github.com/saberland/awesome-saber)

</div>

[medium-zoom](https://github.com/francoischalifour/medium-zoom) plugin for [Saber](https://github.com/saberland/saber).

## Install

- npm: `npm i saber-plugin-medium-zoom`
- Yarn: `yarn add saber-plugin-medium-zoom`

## Usage

Add the plugin to your Saber config and we will handle the rest:

```js
module.exports = {
  // ...
  plugins: [
    {
      resolve: 'saber-plugin-medium-zoom',
      options: {
        // Default selector
        selector: '[data-zoomable]',
        // See https://github.com/francoischalifour/medium-zoom#options for details
        options: {
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
