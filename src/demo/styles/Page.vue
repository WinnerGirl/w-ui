<template>
  <div>
    <div class="left-bar">
      <ul class="list">
        <li @click="goPage('label')" :class="{'active': selectRouter === 'label'}">Label 标签样式</li>
        <li @click="goPage('flex')" :class="{'active': selectRouter === 'flex'}">Flex 弹性布局</li>
        <li @click="goPage('margin')" :class="{'active': selectRouter === 'margin'}">Margin 偏移</li>
        <li @click="goPage('padding')" :class="{'active': selectRouter === 'padding'}">Padding 内容填充</li>
        <li @click="goPage('font')" :class="{'active': selectRouter === 'font'}">Font 设置文字</li>
      </ul>
    </div>
    <router-view class="document"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'plugins',
    data () {
      return {
        selectRouter: this.$route.name,
      };
    },
    methods: {
      goPage(name) {
        this.$router.push({
          name,
        });
      }
    },
    watch: {
      $route () {
        this.selectRouter = this.$route.name;
      }
    },
  };
</script>
<style lang="scss">
  .left-bar{
    position: fixed;
    top: 50px;
    left: 20px;
    width: 26%;
    height: 600px;
    overflow: auto;
    .list{
      border: 1px solid #f0f0f0;
      font-size: 16px;
      li{
        padding: 10px 15px;
        border-bottom: 1px solid #f0f0f0;
        &:last-child{
          border-bottom: none;
        }
        &.active{
          color: #6EB8F1;
          background-color: #f0f0f0;
        }
      }
    }
  }
  .document{
    float: right;
    width: 70%;
    padding-bottom: 50px;
    p{
      font-size: 16px;
      font-weight: bold;
      padding: 10px 0 5px;
    }
  }
</style>
