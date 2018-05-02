<template>
  <div class="loading-bar" v-show="isShow">
    <div
      class="loading-bar--bar"
      :class="isError ? 'loading-bar--error' : ''"
      role="bar"
      :style="{transform: 'translate3d(-'+(100-totalProgress)+'%, 0, 0)'}">
      <div class="loading-bar--peg"></div>
    </div>
    <div class="loading-bar--spinner" role="spinner" v-if="showSpinner">
      <div class="spinner-icon" :class="isError ? 'spinner-icon--error' : ''"
           :style="{'animation': 'w-spinner 400ms '+easing+' infinite'}"></div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'LoadingBar',
    props: {
      type: {
        type: Number,
        default: 1
      }
    },
    data () {
      return {
        speed: 5,
        easing: 'linear',
        percentNum: 0,
        totalProgress: 0,
        showSpinner: false,
        isError: false,
        isInit: false,
        isShow: false
      };
    }
  };
</script>

<style lang="scss">
  .loading-bar--bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    z-index: 9999;
    transition: all .2s ease;
    transform: translate3d(-100%,0,0);
    background: #3faaf5;
  }
  .loading-bar--error {
    background: #ff4949;
  }
  .loading-bar--peg {
    display: block;
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #ffdc00,0 0 5px #ffdc00;
    opacity: 1;
    -ms-transform: rotate(3deg) translate(0,-4px);
    transform: rotate(3deg) translate(0,-4px);
  }
  .loading-bar--spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
    .spinner-icon {
      width: 18px;
      height: 18px;
      box-sizing: border-box;
      border: 2px solid transparent;
      border-top-color: #3faaf5;
      border-left-color: #3faaf5;
      border-radius: 50%;
    }
    .spinner-icon--error {
      border-top-color: #ff4949;
      border-left-color: #ff4949;
    }
  }
</style>
