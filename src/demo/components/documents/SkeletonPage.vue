<template>
  <div>
  <div class="main-skeleton">
    <div class="e-row-flex">
      <div class="e-col-5"><e-skeleton width="100%" radius="50%"></e-skeleton></div>
      <div class="e-col-8 e-col-offset-1">
        <div class="pl15">
          <e-skeleton  height="10px"></e-skeleton>
          <e-skeleton height="10px"></e-skeleton>
        </div>
      </div>
    </div>
    <e-skeleton width="80%" height="15px"></e-skeleton>
  </div>
    <p>HTML 写法</p>
    <e-highlight type="html" code='<div class="main-skeleton">
    <div class="e-row-flex">
      <div class="e-col-5"><e-skeleton width="100%" radius="50%"></e-skeleton></div>
      <div class="e-col-8 e-col-offset-1">
        <div class="pl15">
          <e-skeleton  height="10px"></e-skeleton>
          <e-skeleton height="10px"></e-skeleton>
        </div>
      </div>
    </div>
    <e-skeleton width="80%" height="15px"></e-skeleton></div>'/>
    <p>参数说明</p>
    <e-highlight code="/** 参数说明
   * 参数       说明     类型    可选值    默认值
   * width    占位长度  String     -        100%
   * height   占位宽度  String     -         -
   * bgc       背景色   String     -       #f1f1f1
   * mt       marginTop   String     -       15px
   * radius      圆角     String     -       0px
   * */"/>
    <p>用法说明</p>
    <e-highlight code="
     引入Skeleton组件
     引入布局样式表@import '../../../static/styles/theme/skeleton.scss';
     样式类：
     e-row-flex：flex布局,将一整行等分成24个单位
     e-col: 一行下的某列
     e-col-num: 该列占据整行的多少份，比如e-col-6占整行的6/24
     e-col-offset-num: 该列和该列左边元素距离多少单位
      "/>
  </div>
</template>

<script>
  /** 参数说明
   * 参数       说明     类型    可选值    默认值
   * width    占位长度  String     -        100%
   * height   占位宽度  String     -         -
   * bgc       背景色   String     -       #f1f1f1
   * mt       marginTop   String     -       15px
   * radius      圆角     String     -       0px
   * */
  import ESkeleton from '../../../components/Skeleton.vue';

  export default {
    components: {
      ESkeleton
    }
  };
</script>

<style scoped>
  @import '../../../static/styles/theme/skeleton.scss';
  .main-skeleton{
    padding:0 15px;
  }
</style>

