<template>
  <div>
    <div class="left-bar">
      <ul class="list">
        <li @click="goPage('skeleton')" :class="{'active': selectRouter === 'skeleton'}">骨架屏</li>
        <li @click="goPage('button')" :class="{'active': selectRouter === 'button'}">按钮</li>
        <li @click="goPage('scroll')" :class="{'active': selectRouter === 'scroll'}">滚动</li>
        <li @click="goPage('datePicker')" :class="{'active': selectRouter === 'datePicker'}">日历</li>
        <li @click="goPage('slider')" :class="{'active': selectRouter === 'slider'}">轮播图</li>
      </ul>
    </div>
    <router-view class="document"></router-view>
  </div>
</template>
<script>
  export default {
    name: 'components',
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
    mounted () {
    },
    components: {
    }
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
    z-index: 100;
    .list{
      border: 1px solid #f0f0f0;
      font-size: 16px;
      li{
        padding: 10px 15px;
        border-bottom: 1px solid #f0f0f0;
        background: #fff;
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
