<template>
  <div id="app">
  <div>
    <ConnectDots/>
    </div>
    <div>
    <FancyConnectDots/>
  </div>
  </div>
  
</template>

<script>
import ConnectDots from './components/ConnectDots.vue'
import FancyConnectDots from './components/FancyConnectDots.vue'


export default {
  name: 'app',
  components: {
    ConnectDots,
    FancyConnectDots
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
