<template>
  <div id="app">
    <div v-loading="true">
      <p>1e</p>
      <hello-world>fdsafasfdasf</hello-world>
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      toggle: true,
      visible: true
    }
  },
  methods: {
    toggleLoading() {
      
    }
  },
  created() {
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
