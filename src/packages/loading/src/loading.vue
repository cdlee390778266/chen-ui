<template>
  <div class="full" :class="[customClass]" v-show="visible">
    <div class="loading-mask" v-if="!hideMask" :style="{background}"></div>
    <div class="loading" :class="{hasMask: !hideMask}">
      <div class="loading-content">
        <div class="loading-icon" v-if="!loadingIconTemplate"></div>
        <div v-else v-html="loadingIconTemplate"></div>
        <div class="loading-text mgt5" v-if="text">
          {{text}}
        </div>
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
      hideMask: false,
      lock: false,
      loadingIconTemplate: '',
      text: '',
      background: 'rgba(0, 0, 0, .8)',
      customClass: ''
    }
  }
}
</script>
<style scoped lang="scss">
.full {
  display: flex;
  align-items: center;
}
.loading-mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(255, 255, 255, .8);
  z-index: 9999;
}
.loading{
  position:relative;
  margin-left: auto;
  margin-right: auto;
  z-index: 10000;
  .loading-content {
    display: inline-block;
    max-width: 280px;
    text-align: center;
    .loading-icon {
      position: relative;
      display: inline-block;
      width: 2.5em;
      height: 2.5em;
      transform: rotate(165deg);
      &:before, &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 0.5em;
        height: 0.5em;
        border-radius: 0.25em;
        transform: translate(-50%, -50%);
      }
      &:before {
        animation: before 2s infinite;
      }
      &:after {
        animation: after 2s infinite;
      }
    }
  }
  &.hasMask {
    .loading-text {
      color: #333;
    }
  }
}
@keyframes before {
  0% {
    width: 0.5em;
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
  }
  35% {
    width: 2.5em;
    box-shadow: 0 -0.5em rgba(225, 20, 98, 0.75), 0 0.5em rgba(111, 202, 220, 0.75);
  }
  70% {
    width: 0.5em;
    box-shadow: -1em -0.5em rgba(225, 20, 98, 0.75), 1em 0.5em rgba(111, 202, 220, 0.75);
  }
  100% {
    box-shadow: 1em -0.5em rgba(225, 20, 98, 0.75), -1em 0.5em rgba(111, 202, 220, 0.75);
  }
}
@keyframes after {
  0% {
    height: 0.5em;
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
  }
  35% {
    height: 2.5em;
    box-shadow: 0.5em 0 rgba(61, 184, 143, 0.75), -0.5em 0 rgba(233, 169, 32, 0.75);
  }
  70% {
    height: 0.5em;
    box-shadow: 0.5em -1em rgba(61, 184, 143, 0.75), -0.5em 1em rgba(233, 169, 32, 0.75);
  }
  100% {
    box-shadow: 0.5em 1em rgba(61, 184, 143, 0.75), -0.5em -1em rgba(233, 169, 32, 0.75);
  }
}
</style>
