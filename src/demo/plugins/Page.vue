<template>
  <div>
    <div class="left-bar">
      <ul class="list">
        <li @click="goPage('loading')" :class="{'active': selectRouter === 'loading'}">导航条Loading</li>
        <li @click="goPage('toast')" :class="{'active': selectRouter === 'toast'}">Toast 提示框</li>
        <li @click="goPage('confirm')" :class="{'active': selectRouter === 'confirm'}">Confirm 弹出框</li>
        <li @click="goPage('fetch')" :class="{'active': selectRouter === 'fetch'}">获取数据</li>
      </ul>
    </div>
    <router-view class="document"></router-view>
  </div>
</template>
<script>
  import Vue from 'vue';
  import Toast from '@/plugins/util/toast';
  import Confirm from '@/plugins/util/confirm';
  import Loading from '@/plugins/util/loading';
  import Fetch from '@/plugins/util/fetch';

  // 提示
  Vue.use(Toast, {
    position: 'bottom',
    expire: 3000
  });
  // confirm 选择框
  Vue.use(Confirm);
  Vue.use(Loading);
  Vue.use(Fetch);
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
