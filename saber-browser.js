import mediumZoom from 'medium-zoom'

export default function({ rootOptions, router  }) {
  if (process.browser) {
    rootOptions.mounted = function() {
      mediumZoom(__MEDIUM_ZOOM_SELECTOR__, __MEDIUM_ZOOM_OPTIONS__)

      // Trick: trigger when page has fully loaded
      router.app.$on('trigger-scroll', function() {
        mediumZoom(__MEDIUM_ZOOM_SELECTOR__, __MEDIUM_ZOOM_OPTIONS__)
      })
    }
  }
}
