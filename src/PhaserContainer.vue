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
          width: 800,
          height: 600,
          pageContainer: 'container',
          phaserContainer: 'phaser-container',
          fixedSize: false
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
    this.$nextTick(() => {
      // get page's main container (for sizing)
      const pageContainer = document.getElementsByClassName(this.phaserProps.pageContainer)[0]

      // launch game with resizing
      if (!this.fixedSize) {
        this.game.launch({
          width:
            pageContainer.clientWidth < this.phaserProps.width ? pageContainer.clientWidth : this.phaserProps.width,
          height:
            pageContainer.clientHeight < this.phaserProps.height ? pageContainer.clientHeight : pageContainer.clientWidth * 0.7 < his.phaserProps.height ? pageContainer.clientWidth * 0.7 : this.phaserProps.height,
          parent:
            this.phaserProps.phaserContainer
        })
      // launch game without resizing
      } else {
        this.game.launch({
          width: this.phaserProps.width,
          height: this.phaserProps.height,
          parent: this.phaserProps.phaserContainer
        })
      }
    })
  }
}
</script>
