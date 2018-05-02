<template>
  <div>
    <p>运行例子</p>
    <ul>
      <li v-for="val in values" :class="`pl${val}`"> pl{{val}} 控制的文字 手如柔荑，肤如凝脂，领如蝤蛴，齿如瓠犀，螓首蛾眉，巧笑倩兮，美目眇兮</li>
    </ul>
    <p>CSS 用法</p>
    <e-highlight
      code='// 设置标签的 padding 总共有四个方向，pl: padding-left, pr: padding-right, pt: padding-top, pb: padding-bottom;
      // 后面跟上数字总共有2, 4, 8, 10, 15, 20, 25, 30, 40, 50这几个数字
      // 例如:
      <p class="pl15 pr15">手如柔荑，肤如凝脂，领如蝤蛴，齿如瓠犀，螓首蛾眉，巧笑倩兮，美目眇兮</p>
    '/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        values: [2, 4, 8, 10, 15, 20, 25, 30, 40, 50]
      };
    }
  };
</script>
<style lang="scss">
</style>
