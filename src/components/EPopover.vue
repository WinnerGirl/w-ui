<template>
  <div class="popover" ref="popover" :class="placement" :style="{ width: popoverWidth, height: popoverHeight}">
    <slot name="tip"></slot>
  </div>
</template>
<script>
  export default {
    props: ['position', 'width', 'height'],
    data() {
      return {
        placement: 'top',
        popoverWidth: '100%',
        popoverHeight: 'auto',
      };
    },
    created() {
      this.popoverWidth = `${this.width}px` || this.popoverWidth;
      this.popoverHeight = `${this.height}px` || this.popoverHeight;
    },
    mounted() {
      this.placement = this.position || this.placement;
      this.initPopover();
      window.addEventListener('resize', this.initPopover, false);
    },
    methods: {
      initPopover() {
        const popover = this.$refs.popover;
        const popoverHeight = popover.clientHeight;
        const popoverWidth = popover.clientWidth;
        if (this.placement === 'top' || this.placement === 'bottom') {
          popover.style.left = `${Math.floor((popover.parentNode.clientWidth / 2) - (popoverWidth / 2))}px`;
          popover.style[this.placement] = `${-25 - popoverHeight}px`;
        } else if (this.placement === 'left' || this.placement === 'right') {
          popover.style.top = `${Math.floor((popover.parentNode.clientHeight / 2) - (popoverHeight / 2))}px`;
          popover.style[this.placement] = `${-25 - popoverWidth}px`;
        }
      }
    },
    destoryed() {
      window.removeEventListener('resize', this.initPopover, false);
    }
  };
</script>

<style lang="scss">
  @import '../static/styles/color.scss';
  .popover {
    position: absolute;
    background-color: $c-text;
    padding: 6px 10px;
    line-height: 1.6;
    border-radius: 4px;
    font-size: 14px;
    color: $c-white;
    &.top:before{
      content: "";
      position: absolute;
      left: 50%;
      margin-left: -10px;
      bottom: -10px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 20px solid  $c-text;
    }
    &.bottom:before{
      content: "";
      position: absolute;
      left: 50%;
      margin-left: -10px;
      top: -10px;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 20px solid  $c-text;
    }
    &.right:before{
      content: "";
      position: absolute;
      top: 50%;
      margin-top: -10px;
      left: -10px;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-right: 20px solid  $c-text;
      border-bottom: 10px solid transparent;
    }
    &.left:before{
      content: "";
      position: absolute;
      top: 50%;
      margin-top: -10px;
      right: -10px;
      width: 0;
      height: 0;
      border-top: 10px solid transparent;
      border-left: 20px solid $c-text;
      border-bottom: 10px solid transparent;
    }
  }
</style>
