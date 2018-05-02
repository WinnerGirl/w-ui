<template>
  <div id="app" v-wechat-title="webTitle">
    <main-skeleton v-if="!hide"></main-skeleton>
    <router-view class="page" v-else></router-view>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
//  require('vconsole');
  export default {
    name: 'app',
    data() {
      return {
      };
    },
    computed: {
      ...mapState('skeleton', {
        hide: state => state.hide,
      }),
      ...mapState('title', {
        title: state => state.text,
      }),
      webTitle() {
        return (this.$route.meta && this.$route.meta.title) || this.title;
      }
    },
    mounted() {
    },
    components: {
      MainSkeleton: () => import('./skeletons/main.skeleton.vue'),
    },
  };
</script>

<style lang="scss">
@import "static/styles/basic";
  #app{
    width: 100%;
    height: 100%;
    position: relative;
    .page{
      width: 100%;
      height: 100%;
    }
  }
</style>
