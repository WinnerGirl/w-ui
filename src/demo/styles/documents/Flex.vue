<template>
  <div>
    <p>运行例子</p>
    <p style="text-indent: 20px;">(1) 水平方向布局</p>
    <ul class="flex-row demo-flex">
      <li style="border: 1px solid red">我在左边</li>
      <li style="border: 1px solid red">我在右边</li>
    </ul>
    <div style="text-indent: 20px;">
      <e-highlight
        code='// 水平布局默认：水平左右（space-between），垂直居中的
     <ul class="flex-row">
      <li>我在左边</li>
      <li>我在右边</li>
    </ul>
    '/>
    </div>
    <p style="text-indent: 40px;">水平方向布局扩展</p>
    <ul class="flex-row row-left demo-flex">
      <li style="border: 1px solid red">我在左边</li>
      <li style="border: 1px solid red">我也在左边</li>
    </ul>
    <div style="text-indent: 40px;">
      <e-highlight
        code='// 水平布局可以控制子元素位置， 分别有：
        // row-left: 所有子元素靠左
        // row-center: 所有子元素居中
        // row-right: 所有子元素靠右
        // row-between: 所有子元素水平两侧，默认值
    <ul class="flex-row row-left" style="border: 1px solid #CCC;">
      <li style="border: 1px solid red">我在左边</li>
      <li style="border: 1px solid red">我也在左边</li>
    </ul>
    '/>
    </div>
    <ul class="flex-row row-center demo-flex">
      <li style="border: 1px solid red">我在中间</li>
      <li style="border: 1px solid red">我也在中间</li>
    </ul>
    <div style="text-indent: 40px;">
      <e-highlight
        code='
      <ul class="flex-row row-center" style="border: 1px solid #CCC;">
        <li style="border: 1px solid red">我在中间</li>
      <li style="border: 1px solid red">我也在中间</li>
    </ul>
    '/>
    </div>
    <ul class="flex-row row-center demo-flex">
      <li class="flex-1 text-center" style="border: 1px solid red">我占一半</li>
      <li class="flex-1 text-center" style="border: 1px solid red">我也占一半</li>
    </ul>
    <div style="text-indent: 40px;">
      <e-highlight
        code='// 水平子元素有flex-1, flex-2, flex-3,flex-4, flex-5, flex-6这些样式，他们占父级所占比例
    // flex属性是flex-grow（放大比例，如果存在剩余空间，也不放大）, flex-shrink（缩小比例，如果空间不足，该项目将缩小。） 和 flex-basis（本来大小）的简写
    <ul class="flex-row row-center">
      <li class="flex-1 text-center">我在中间</li>
      <li class="flex-1 text-center">我也在中间</li>
    </ul>
    '/>
    </div>
    <ul class="flex-row col-bottom demo-flex" style="height: 80px">
      <li class="flex-1" style="border: 1px solid red">我在垂直方向的下面</li>
      <li class="flex-1" style="border: 1px solid red">我也在垂直方向的下面</li>
    </ul>
    <div style="text-indent: 40px;">
      <e-highlight
        code='// col-top: 垂直方向上面
    // col-center: 垂直方向居中，默认就是居中
    // col-top: 垂直方向下面
    <ul class="flex-row col-bottom">
      <li class="flex-1">我在垂直方向的下面</li>
      <li class="flex-1">我也在垂直方向的下面</li>
    </ul>
    '/>
    </div>
    <p style="text-indent: 20px;">(2) 垂直方向布局</p>
    <ul class="flex-col demo-flex" style=" height: 100px">
      <li style="border: 1px solid red">我们垂直居中了</li>
      <li style="border: 1px solid red">我们垂直居中了</li>
    </ul>
    <e-highlight
      code='// 垂直布局默认：水平靠左，垂直居中的
     <ul class="flex-col" style="border: 1px solid #CCC; height: 100px">
      <li>我们垂直居中了</li>
      <li>我们垂直居中了</li>
    </ul>
    '/>
    <ul class="flex-col col-center demo-flex" style="height: 100px">
      <li style="border: 1px solid red">我们垂直和水平都居中了</li>
      <li style="border: 1px solid red">我们垂直和水平都居中了</li>
    </ul>
    <e-highlight
      code=' //在flex-col情况下 col-top: 水平方向左边
    // col-center: 水平方向居中，
    // col-top: 水平方向右边
      <ul class="flex-col col-center" style="border: 1px solid #CCC; height: 100px">
      <li>我们垂直和水平都居中了</li>
      <li>我们垂直和水平都居中了</li>
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
  .demo-flex{
    margin:15px;
    padding: 10px;
    border: 1px solid #CCC;
  }
</style>
