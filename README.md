# [medium-zoom](https://github.com/francoischalifour/medium-zoom) for [Saber](https://saber.land)

## Install

- Yarn `yarn add saber-plugin-medium-zoom`
- npm `npm i saber-plugin-medium-zoom`

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
