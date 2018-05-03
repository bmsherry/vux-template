<template>
   <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <!-- remember to import BusPlugin in main.js if you use components: x-img and sticky -->   
      <router-view class="router-view"></router-view>
    </view-box>
</template>

<script>
import { ViewBox } from 'vux'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    ViewBox
  },
  // computed: {
  //   ...mapState({
  //     loading: state => state.home.isLoading
  //   }),
  // }
}
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
@import "~vux/src/styles/1px.less";
@import "~vux/src/styles/tap.less";

html {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

body {
  &:extend(html);
  background-color: #fbf9fe;
}
</style>
