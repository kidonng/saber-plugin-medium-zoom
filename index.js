const path = require('path')

const ID = 'medium-zoom'

exports.name = ID

exports.apply = (api, { selector = 'img', option = {} } = {}) => {
  api.hooks.chainWebpack.tap(ID, config => {
    config.plugin('constants').tap(([options]) => [
      Object.assign(options, {
        __MEDIUM_ZOOM_SELECTOR__: JSON.stringify(selector),
        __MEDIUM_ZOOM_OPTIONS__: option
      })
    ])
  })

  api.browserApi.add(path.join(__dirname, 'saber-browser.js'))
}
