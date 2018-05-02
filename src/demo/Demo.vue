<template>
  <div id="app">
    <main-skeleton v-if="!hide"></main-skeleton>
    <div class="demo" v-else>
      <div class="header">
        <ul class="nav">
          <li @click="goRouter('components')">组件</li>
          <li @click="goRouter('plugins')">插件</li>
          <li @click="goRouter('styles')">样式</li>
        </ul>
      </div>
      <router-view class="page"></router-view>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import { mapState } from 'vuex';
  import EHighlight from '../components/EHighlight.vue';
  Vue.component('e-highlight', EHighlight);
  export default {
    name: 'demo',
    data () {
      return {
        init: false,
        isAbout: false,
        about: this.$route.name === 'about'
      };
    },
    computed: {
      ...mapState('skeleton', {
        hide: state => state.hide,
      }),
    },
    methods: {
      goRouter(routeName) {
        this.$router.push({
          name: routeName,
        });
      },
    },
    mounted () {
    },
    components: {
      MainSkeleton: () => import('../skeletons/main.skeleton.vue'),
    }
  };
</script>

<style lang="scss">
@import "../static/styles/basic";
  #app{
    width: 100%;
    height: 100%;
    position: relative;
  }
.demo{
  position: relative;
  padding: 0 20px;
}
.header{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 8888;
  width: 100%;
  background-color: #2c3e50;
  color: #FFF;
  font-size: 18px;
  text-align: left;
  .nav{
    margin: 0 auto;
    width: 80%;
    li{
      padding: 10px 30px;
      display: inline-block;
    }
  }
}
.page{
  width: 100%;
  height: auto;
  padding-top: 35px;
}
.content{
  position: relative;
  margin-top: 50px;
}
</style>
