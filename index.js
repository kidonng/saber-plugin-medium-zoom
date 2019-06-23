const { join } = require('path')

const ID = 'medium-zoom'

exports.name = ID

exports.apply = (
  { hooks, browserApi },
  { selector = '[data-zoomable]', options = {} } = {}
) => {
  hooks.chainWebpack.tap(ID, config =>
    config.plugin('constants').tap(([config]) => [
      Object.assign(config, {
        __MEDIUM_ZOOM_SELECTOR__: JSON.stringify(selector),
        __MEDIUM_ZOOM_OPTIONS__: options
      })
    ])
  )

  browserApi.add(join(__dirname, 'saber-browser.js'))
}
