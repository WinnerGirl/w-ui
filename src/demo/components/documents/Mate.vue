<template>
  <div class="mate">
    mate
  </div>
</template>

<script>
  import Vue from 'vue';
  import VueMetaInfo from '../../../plugins/util/mate';
  Vue.use(VueMetaInfo);
  export default {
    metaInfo: {
      title: 'My Example Mate',
      meta: [{
        name: 'keyWords',
        content: 'My Example App'
      }]
    },
    data() {
      return {
        data: {}
      };
    },
    async created() {
      console.log(this.data);
//      this.data = await this.$fetch.post('/j2/u/task/reward/quit', {
//        uid: '19020',
//        token: '3503236c79dba3326f54b39f0e73c825',
//        taskId: 122});
//      console.log(`mate:${this.data}`);
    },
    mounted() {
    },
    methods: {
      getMoreData() {}
    }
  };
</script>

<style>

</style>
