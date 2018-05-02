<template>
    <div class="slide-container">
      <my-slider :images="pics" :auto="auto"></my-slider>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        auto: true,
        pics: [{
          id: 0,
          src: 'https://dlhr.oss-cn-hangzhou.aliyuncs.com/img/170825/9ae314e88ee88a5aa9994ecd0f80083c.JPG'
        }, {
          id: 1,
          src: 'https://dlhr.oss-cn-hangzhou.aliyuncs.com/img/170714/d95dcc7a4c35281f4ab053897280ba60.JPG'
        }, {
          id: 2,
          src: 'https://dlhr.oss-cn-hangzhou.aliyuncs.com/img/170825/9ae314e88ee88a5aa9994ecd0f80083c.JPG'
        }]
      };
    },
    components: {
      MySlider: () => import('../../../components/Slide.vue'),
    }
  };
</script>
<style lang="scss" scoped>
  .slide-container{
    height: 188px;
    width: 100%;
    text-align: left;
  }
</style>
