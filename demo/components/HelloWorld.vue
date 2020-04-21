
<script>
export default {
  name: 'HelloWorld',
  render: function (createElement) {
    let vnode = createElement(
      'h1',   // 标签名称
      {
        style: {
          color: 'red'
        }
      },
      'this.$slots.default' // 子节点数组
    );
    console.log(vnode)
    return vnode 
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
