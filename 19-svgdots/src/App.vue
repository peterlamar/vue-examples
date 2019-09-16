<template>
  <div id="app">
    <Dots/>
  </div>
</template>

<script>
import Dots from './components/Dots.vue'

export default {
  name: 'app',
  components: {
    Dots
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
