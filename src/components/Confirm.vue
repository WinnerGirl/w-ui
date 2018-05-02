<template>
  <div class="confirm-wrapper fs14 flex-row row-center" v-show="show">
    <div class="confirm text-center" :style="confirmOptions.wrapperStyle">
      <div class="confirm-title" v-if="confirmTitle">{{confirmTitle}}</div>
      <ul class="confirm-content" :style="confirmOptions.contentStyle">
        <li v-for="tip in confirmTips" v-html="tip"></li>
      </ul>
      <div class="confirm-footer flex-row">
        <button class="left-btn flex-1" @click="close" v-if="!confirmOptions.cancelHide">{{confirmOptions.cancelValue}}</button>
        <span class="confirm-divider" v-if="!confirmOptions.cancelHide"></span>
        <button class="right-btn flex-1" @click="confirm" v-if="!confirmOptions.confirmHide">{{confirmOptions.confirmValue}}</button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  @import "../static/styles/color";
  .icon-tip{
    width: 40px;
    height: 40px;
  }
  .confirm-wrapper{
    position: fixed;
    left:0;
    top:0;
    bottom:0;
    right:0;
    background-color: rgba(0, 0, 0, .5);
    z-index: 99999;
    .confirm{
      background-color: $c-white;
      border-radius: 5px;
      width:72%;
      line-height: 1.2;
      padding-top: 30px;
      overflow: hidden;
      .confirm-title{
        font-size: 16px;
        font-weight: bold;
        padding-bottom: 15px;
      }
      .confirm-content{
        padding: 0 15px 30px;
        line-height: 1.7;
      }
      .confirm-footer{
        background-color: $c-red;
        height: 50px;
        .right-btn, .left-btn{
          background-color: transparent;
          height: 100%;
          color: $c-white;
        }
        .left-btn{
          opacity: 0.5;
        }
        .confirm-divider{
          width: 0;
          height: 16px;
          border-left: 1px solid $c-white;
        }
      }
    }
  }
</style>
<script>
  export default{
    data() {
      return {
        show: false,
        resolve: null,
        confirmTitle: null,
        confirmTips: null,
        confirmOptions: null,
      };
    },
    methods: {
      close() {
        this.show = false;
        if (this.resolve) {
          this.resolve('cancel');
        }
      },
      confirm() {
        this.show = false;
        if (this.resolve) {
          this.resolve('ok');
        }
      },
      openModel() {
        return new Promise((resolve) => {
          this.resolve = resolve;
        });
      },
    }
  };
</script>
