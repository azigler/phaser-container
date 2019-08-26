<template>
  <div v-if="downloaded" :id="phaserProps.phaserContainer" />
  <div v-else class="placeholder">
    Downloading ...
  </div>
</template>

<script>
export default {
  name: 'PhaserContainer',

  props: {
    phaserProps: {
      type: Object,
      default() {
        return {
          clientWidth: 800,
          clientHeight: 600,
          pageContainer: 'example container',
          phaserContainer: 'phaser-container',
          srcFile: 'game'
        }
      }
    }
  },

  data() {
    return {
      downloaded: false
    }
  },
  async mounted() {
    const game = await import(`@/assets/phaser/${this.phaserProps.srcFile}`)
    this.downloaded = true

    this.$nextTick(() =>
      game.launch({
        width:
          document.getElementsByClassName(this.phaserProps.pageContainer)[0]
            .clientWidth < this.phaserProps.clientWidth
            ? document.getElementsByClassName(this.phaserProps.pageContainer)[0]
                .clientWidth
            : this.phaserProps.clientWidth,
        height:
          document.getElementsByClassName(this.phaserProps.pageContainer)[0]
            .clientHeight < this.phaserProps.clientHeight
            ? document.getElementsByClassName(this.phaserProps.pageContainer)[0]
                .clientHeight
            : document.getElementsByClassName(this.phaserProps.pageContainer)[0]
                .clientWidth *
                0.7 <
              this.phaserProps.clientHeight
            ? document.getElementsByClassName(this.phaserProps.pageContainer)[0]
                .clientWidth * 0.7
            : this.phaserProps.clientHeight,
        parent: this.phaserProps.phaserContainer
      })
    )
  }
}
</script>

<style lang="scss" scoped>
.placeholder {
  font-size: 2rem;
  font-family: 'Courier New', Courier, monospace;
}

canvas {
  border-radius: 1rem;
}
</style>
