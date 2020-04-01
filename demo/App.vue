<template>
  <div id="app">

    <test></test>
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
      value: [],
      treeData: [
        {
          value: 1,
          label: 'text1',
          children: [{ value: 5, label: 'text5' }, { value: 6, label: 'text6' }]
        },
        { value: 2, label: 'text2' },
        { value: 3, label: 'text3' },
        { value: 4, label: 'text5' }
      ],
      disabledValues: [3]
    }
  },
  created() {

    console.log(this.$el)
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
