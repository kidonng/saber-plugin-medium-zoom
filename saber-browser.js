export default function({ router }) {
  if (process.browser) {
    const mediumZoom = require('medium-zoom')

    router.afterEach(function() {
      mediumZoom(__MEDIUM_ZOOM_SELECTOR__, __MEDIUM_ZOOM_OPTIONS__)
    })
  }
}
