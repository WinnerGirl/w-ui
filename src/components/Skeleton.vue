<template>
  <div class="e_skeleton" :style="{background: bgColor, paddingBottom, width, marginTop: mt, borderRadius: radius, height}">
  </div>
</template>

<script>
  export default{
    name: 'Skeleton',
    props: {
      proportion: {
        type: Number,
        default: 1
      }, // h : w
      bgColor: {
        type: String,
        default: '#f1f1f1'
      },
      width: {
        type: String,
        default: '100%'
      },
      mt: {
        type: String,
        default: '15px'
      },
      radius: {
        type: String,
        default: '0px'
      },
      height: {
        type: [String, Boolean],
        default: false
      }
    },
    data() {
      return {
        paddingBottom: this.height || `${this.proportion * 100}%`
      };
    }
  };
</script>

<style lang="scss">
  .e_skeleton{
    animation: bling 2s infinite linear;
  }
  @keyframes bling {
    0%{
      opacity:1;
    }
    10%, 90%{
      opacity: 0.8;
    }
    20%, 80%{
      opacity: 0.7;
    }
    30%, 70%{
      opacity: 0.6;
    }
    50%{
      opacity: 0.5;
    }
    10%, 90%{
      opacity: 0.9;
    }
    100% {
      opacity: 0.95;
    }
  }
</style>
