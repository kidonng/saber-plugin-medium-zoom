import mediumZoom from 'medium-zoom'

export default ({ rootOptions }) =>
  rootOptions.mixins.push({
    mounted() {
      mediumZoom(__MEDIUM_ZOOM_SELECTOR__, __MEDIUM_ZOOM_OPTIONS__)

      // This event is fired when entire view has been rendered
      // Source: https://github.com/saberland/saber/blob/e675ce95c203b3d42f9df2685219fbfa5b722a15/packages/saber/vue-renderer/app/router.js#L81
      this.$on('trigger-scroll', () =>
        mediumZoom(__MEDIUM_ZOOM_SELECTOR__, __MEDIUM_ZOOM_OPTIONS__)
      )
    }
  })
