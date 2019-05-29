# Saber Plugin `medium-zoom`

- Install `yarn add saber-plugin-medium-zoom` or `npm i saber-plugin-medium-zoom`
- Usage

```js
module.exports = {
  plugins: [
    {
      resolve: 'saber-plugin-medium-zoom',
      options: {
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
