<template>
  <transition name="fadeIn">
    <div class="toast-wrapper" v-show="show" :class="{'toast-top':position === 'top','toast-center':position === 'center','toast-bottom':position === 'bottom'}">
      <div class="content">{{tip}}</div>
    </div>
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        show: false,
        tip: '',
        position: 'bottom',
        expire: 1500
      };
    },
  };
</script>

<style lang="scss">
  .toast-wrapper{
    position: fixed;
    left:0;
    width: 100%;
    z-index: 99999;
    text-align: center;
    .content{
      background-color: rgba(0, 0, 0, .6);
      max-width: 80%;
      display: inline-block;
      color: #FFF;
      padding: 6px 15px;
      border-radius: 4px;
      line-height: 1.4;
    }
  }
  .toast-top{
    top: 15%;
  }
  .toast-center{
    top: 45%;
  }
  .toast-bottom{
    bottom: 15%;
  }
  .fadeIn-enter-active, .fadeIn-leave-active{
    transition: opacity .3s;
  }
  .fadeIn-enter, .fadeIn-leave-active{
    opacity: 0;
  }
</style>
