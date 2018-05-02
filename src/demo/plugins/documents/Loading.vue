<template>
  <div>
    <button @click="$loading.start()" class="ml10">开始</button>
    <button @click="$loading.end();" class="ml10">结束</button>
    <button @click="$loading.error();" class="ml10">报错</button>
    <p>HTML 写法</p>
    <e-highlight type="html" code='<button @click="$loading.start()" class="ml10">开始</button>
    <button @click="$loading.end();" class="ml10">结束</button>
    <button @click="$loading.error();" class="ml10">报错</button>'/>
    <p>参数说明</p>
    <e-highlight code="/**
   * LoadingBar参数说明
   * 参数    说明                类型     可选值                        默认值
   * speed    加载速度           Number    0-100                          5
   * easing   加载动画           String   linear, ease, cubic-bezier..   ease
   * percentNum 每次前进的百分比 Float     0-1                         Math.random()
   * 方法说明：
   * 开始出现: this.$loading.start();
   * 正常结束：this.$loading.end();
   * 异常结束：this.$loading.error();
   * 配置参数：this.$loading.config({
   *               easing: 'ease'，
    *                percentNum: 0.1，
    *               speed: 6
    *             })
    */"/>
    <p>js代码</p>
    <e-highlight code="  export default {
    mounted () {
      this.$loading.start();
      //  这里模拟数据请求
      setTimeout(() => {
        this.$loading.end();
      }, 1000);
    }
  };"/>
  </div>
</template>

<script>
  /**
   * LoadingBar参数说明
   * 参数    说明                类型     可选值                        默认值
   * speed    加载速度           Number    0-100                          5
   * easing   加载动画           String   linear, ease, cubic-bezier..   ease
   * percentNum 每次前进的百分比 Float     0-1                         Math.random()
   * 方法说明：
   * 开始出现: this.$loading.start();
   * 正常结束：this.$loading.end();
   * 异常结束：this.$loading.error();
   * 配置参数：this.$loading.config({
   *               easing: 'ease'，
   *                percentNum: 0.1，
   *               speed: 6
   *             })
   */
  export default {
    mounted () {
      this.$loading.start();
      //  这里模拟数据请求
      setTimeout(() => {
        this.$loading.end();
      }, 1000);
    }
  };
</script>

<style>

</style>
