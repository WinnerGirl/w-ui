<template>
  <div class="fetch">
    <p v-if="!open">运行例子(<span class="text-gray" @click="getData">点击获取数据</span>)</p>
    <p v-if="open">运行例子(<span class="text-gray" @click="changeType">点击隐藏数据</span>)</p>
    <div class="data-box" v-show="open">
      {{data}}
    </div>
    <p>说明</p>
    <e-highlight type="javascript" code="
    /**
   * fetch参数说明
   * 参数    说明              类型     是否必填          默认值
   * url    接口url           String      是                ''
   * data   请求数据          Object      否                {}
   * headers 请求头           Object      否     get :{ 'Content-Type': 'application/json' }post:  { 'Content-Type': 'application/x-www-form-urlencoded' }
   * 方法说明：
   * get方法: this.$fetch.get('');
   * post方法：this.$fetch.post('');
   */
    "/>
    <p>用法</p>
    <e-highlight type="javascript" code="
    // 在相应的服务文件中获取后台数据（与后台交互）
    import fetch from '../../plugins/util/fetch';
    /**
    * 获取我的家园信息
    */
    export const myFamilyInfo = () => fetch.get('/t/family/getMyFamilyInfo', {
        uid: '19020',
        token: '3503236c79dba3326f54b39f0e73c825'
    });
    //将获取到的信息传到前台展示
    import { myFamilyInfo } from '../../demoServices/familyServices';
  export default {
    data() {
      return {
        data: {}
      };
    },
    methods: {
      async getData() {
        this.data = await myFamilyInfo();
      }
    }
  };

"/>
  </div>
</template>

<script>
  import { myFamilyInfo } from '../services/familyServices';
  export default {
    data() {
      return {
        open: false,
        data: {}
      };
    },
    methods: {
      async getData() {
        this.open = true;
        this.data = await myFamilyInfo();
      },
      changeType() {
        this.open = !this.open;
      }
    }
  };
</script>

<style>

</style>
