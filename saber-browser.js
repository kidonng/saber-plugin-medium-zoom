import mediumZoom from 'medium-zoom'

const zoom = el => mediumZoom(el, __MEDIUM_ZOOM_OPTIONS__)
const applyZoom = () => {
  for (const el of document.querySelectorAll(__MEDIUM_ZOOM_SELECTOR__)) {
    // No transition
    if (window.getComputedStyle(el).transition === 'all 0s ease 0s') zoom(el)
    // Temp fix for https://github.com/francoischalifour/medium-zoom/issues/110
    else el.addEventListener('transitionend', () => zoom(el), { once: true })
  }
}

export default ({ rootOptions }) =>
  rootOptions.mixins.push({
    mounted() {
      applyZoom()

      // This event is fired when entire view has been rendered
      // Source: https://github.com/saberland/saber/blob/e675ce95c203b3d42f9df2685219fbfa5b722a15/packages/saber/vue-renderer/app/router.js#L81
      this.$on('trigger-scroll', applyZoom)
    }
  })
