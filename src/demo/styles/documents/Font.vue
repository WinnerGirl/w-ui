<template>
  <div>
    <p>运行例子</p>
    <ul>
      <li v-for="val in values" :class="`fs${val}`"> fs{{val}} 控制文字大小</li>
    </ul>
    <p>CSS 用法</p>
    <e-highlight
      code='// 设置字体大小 font-size ，写成fs;
      // 后面跟上数字总共有 10, 12, 14, 15, 16, 18, 20, 22, 25, 30,这几个数字
      // 例如:
      <p class="fs14">控制文字大小</p>
    '/>
    <div class="fs14 fsb">手如柔荑，肤如凝脂，领如蝤蛴，齿如瓠犀，螓首蛾眉，巧笑倩兮，美目眇兮</div>
    <e-highlight
      code='// 设置字体加粗 font-weight ，写成fsb; 可以用strong标签替换
      // 例如:
      <p class="fs14 fsb">控制文字大小</p>
    '/>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        values: [10, 12, 14, 15, 16, 18, 20, 22, 25, 30]
      };
    }
  };
</script>
<style lang="scss">
</style>
