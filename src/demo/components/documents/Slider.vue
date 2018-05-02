<template>
    <div class="slide-container">
      <p>HTML 写法</p>
      <e-highlight type="html" code='<my-slider :images="pics" :auto="auto"></my-slider>'/>
      <p>参数说明</p>
      <e-highlight
        code="
   /**
   * 参数说明
   * 参数     说明            类型           可选值                    默认值
   * images   轮播图图片      Array           —                         []
   * loop    是否循环播放     Boolean          -                         true
   * auto   是否自动播放      Boolean          -                         true
   * delay    轮播延时        Number          -                           5000
   */"/>
      <p>运行例子</p>
      <my-slider :images="pics" :auto="auto"></my-slider>
    </div>
</template>
<script>
  /**
   * 参数说明
   * 参数     说明            类型           可选值                    默认值
   * images   轮播图图片      Array           —                         []
   * loop    是否循环播放     Boolean          -                         true
   * auto   是否自动播放      Boolean          -                         true
   * delay    轮播延时        Number          -                           5000
   */
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
    /*width: 100%;*/
    text-align: left;
  }
</style>
