<template>
  <div :id="phaserProps.phaserContainer" />
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
          pageContainer: 'container',
          phaserContainer: 'phaser-container'
        }
      }
    },
    game: {
      default() {
        return {}
      }
    }
  },
  
  mounted() {
    this.$nextTick(() =>
      this.game.launch({
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
