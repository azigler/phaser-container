<template>
  <div :id="phaserContainer" />
</template>

<script>
export default {
  name: 'PhaserContainer',

  props: {
    width: {
      type: Number,
      default: 800
    },
    height: {
      type: Number,
      default: 600
    },
    pageContainer: {
      type: String,
      default: 'container'
    },
    phaserContainer: {
      type: String,
      default: 'phaser-container'
    },
    fixedSize: {
      type: Boolean,
      default: false
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
      const pageContainer = document.getElementsByClassName(this.pageContainer)[0]

      // launch game with resizing
      if (this.fixedSize === false) {
        this.game.launch({
          width:
            pageContainer.clientWidth < this.width ? pageContainer.clientWidth : this.width,
          height:
            pageContainer.clientHeight < this.height ? pageContainer.clientHeight : pageContainer.clientWidth * 0.7 < this.height ? pageContainer.clientWidth * 0.7 : this.height,
          parent:
            this.phaserContainer
        })
      // launch game without resizing
      } else {
        this.game.launch({
          width: this.width,
          height: this.height,
          parent: this.phaserContainer
        })
      }
    })
  }
}
</script>
