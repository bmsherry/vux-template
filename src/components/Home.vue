<template>
  <div>
    <div class="vux-demo">
      <img class="logo" :src="src">
      <h1>{{msg}}</h1>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: "Hello World!",
      src: "http://ww1.sinaimg.cn/large/663d3650gy1fplwu9ze86j20m80b40t2.jpg",
    };
  },
  mounted () {
  }
    
};
</script>


<style lang="less" scoped>
.vux-demo {
  text-align: center;
}
.logo {
  width: 200px;
  height: 200px;
}
</style>

