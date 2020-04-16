<template>
  <div class="full" :class="[customClass]" v-show="visible">
    <div class="loading-mask" v-if="mask" :style="{background}"></div>
    <div class="loading" :class="{hasMask: mask}">
      <div class="loading-icon"></div>
      <div class="loading-text text-center mgt20" v-if="text">
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {
      visible: false,
      fullscreen: false,
      lock: false,
      mask: true,
      spinner: '',
      text: '',
      background: 'rgba(0, 0, 0, .8)',
      customClass: ''
    }
  }
}
</script>
<style scoped lang="scss">
.loading-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, .8);
  z-index: 9999;
}
.loading{
  position:absolute;
  left: 50%;
  top: 50%;
  max-width: 300px;
  margin-left: -15px;
  margin-top: -15px;
  z-index: 10000;
}
.loading-icon {
  position: relative;
  width:30px;
  height:30px;
  background:#3498db;
  border-radius:50px;
  animation: preloader_5 1.5s infinite linear;
}
.loading-icon:after{
  position:absolute;
  width:50px;
  height:50px;
  border-top:10px solid #9b59b6;
  border-bottom:10px solid #9b59b6;
  border-left:10px solid transparent;
  border-right:10px solid transparent;
  border-radius:50px;
  content:'';
  top:-20px;
  left:-20px;
  animation: preloader_5_after 1.5s infinite linear;
}
.hasMask {
  .loading-text {
    color: #fff;
  }
}
@keyframes preloader_5 {
  0% {transform: rotate(0deg);}
  50% {transform: rotate(180deg);background:#2ecc71;}
  100% {transform: rotate(360deg);}
}
@keyframes preloader_5_after {
  0% {border-top:10px solid #9b59b6;border-bottom:10px solid #9b59b6;}
  50% {border-top:10px solid #3498db;border-bottom:10px solid #3498db;}
  100% {border-top:10px solid #9b59b6;border-bottom:10px solid #9b59b6;}
}
</style>
