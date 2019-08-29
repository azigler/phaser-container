# @andrewzigler/phaser-container

[![npm version](https://badge.fury.io/js/%40andrewzigler%2Fphaser-container.svg)](https://badge.fury.io/js/%40andrewzigler%2Fphaser-container)

Wrapper component for loading and resizing [Phaser](https://phaser.io/) games in Vue. If provided a [Vuex](https://vuex.vuejs.org/) store instance, the component can pass the store to your game so you can share state between Vue and Phaser.

Example of this component in action: [https://www.andrewzigler.com/example/nuxt-and-phaser/](https://www.andrewzigler.com/example/nuxt-and-phaser/)

## Component Props
```
width: (width of game in pixels, default: 800)
height: (height of game in pixels, default: 600)
pageContainer: (class name of parent element, for determining max sizes, default: 'container')
phaserContainer: (ID name of element to contain Phaser element, default: 'phaser-container')
fixedSize: (if true, prevents the component from resizing based on pageContainer, default: false)
game: (imported Phaser game file)
store: (Vuex store, default: undefined)
```

## Installation
```
npm install
```

### Development
```
npm run dev
```

### Compiling
```
npm run build
```
