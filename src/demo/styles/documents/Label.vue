<template>
  <div>
    <p>运行例子</p>
    <ul class="label-list">
      <li class="label label-default" v-for="val in values" v-text="val">民营</li>
    </ul>
    <p>CSS 用法</p>
    <e-highlight
      code='// 父级需要label-list， 子级label， 现在只有默认的这种 label-default 样式，以后再加入
      <ul class="label-list">
        <li class="label label-default" v-for="val in values" v-text="val">民营</li>
      </ul>
    '/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        values: ['上海', '北京', '霍村', '中关村']
      };
    }
  };
</script>
<style lang="scss">
</style>
