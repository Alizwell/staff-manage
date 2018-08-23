<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view  />
    <foot/>
  </div>
</template>

<script>
import Foot from './components/foot.vue'

export default {
  name: 'App',
  components: {
    Foot
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
