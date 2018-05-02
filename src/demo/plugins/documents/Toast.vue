<template>
  <div>
    <p>运行例子</p>
    <div @click="testToast" style="text-align: center; padding-top: 20px; font-size: 18px;">点击我，就弹出一句你喜欢的话</div>
    <p>Js 用法</p>
    <e-highlight
      code="// 第二个参数可以不写
      this.$toast.show('我是骗你的', {
          position: 'bottom', // 默认是bottom ,还有 center top
          expire: 2500, // 默认是2500 毫秒值
       });
    "/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
      };
    },
    computed: {
    },
    methods: {
      testToast () {
        this.$toast.show('我是骗你的', {
          expire: 2000
        });
      },
    }
  };
</script>
<style lang="scss">
  .div1{
    background-color: #ccc;
    span{
      font-size: 16px;
    }
  }
</style>
