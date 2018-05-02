<template>
  <div>
    <p v-if="!open">运行例子(<span class="text-gray" @click="changeType">点击运行</span>)</p>
    <p v-if="open">运行例子(<span class="text-gray" @click="changeType">关闭运行</span>，需开启App 调试模式)</p>
    <div v-show="open">
      <e-scroll
        :is-refresh="isRefresh"
        :is-load="isLoad"
        :refresh-deviation="refreshDeviation"
        :load-deviation="loadDeviation"
        :load-stage="loadStage"
        :refresh-stage="refreshStage"
        :load-completed="loadCompleted"
        :height="height"
        @refresh="refreshData"
        @load-more="loadMore"
      >
        <ul slot="content" class="scroll-content">
          <li v-for="item in values" @click="testClick(item)">{{item}}</li>
        </ul>
      </e-scroll>
    </div>
    <div v-show="!open">
      <p>HTML 写法</p>
      <e-highlight type="html" code='<e-scroll
        :is-refresh="isRefresh"
        :is-load="isLoad"
        :refresh-deviation="refreshDeviation"
        :load-deviation="loadDeviation"
        :load-stage="loadStage"
        :refresh-stage="refreshStage"
        :load-completed="loadCompleted"
        :height="height"
        @refresh="refreshData"
        @load-more="loadMore">
        <ul slot="content" class="scroll-content">
          <li v-for="item in values" v-text="item"></li>
        </ul>
      </e-scroll>'/>
      <p>参数说明</p>
      <e-highlight
        code='
      // 是否监听刷新 默认是 false
      :is-refresh="isRefresh"
      // 是否监听加载更多 默认是 true
      :is-load="isLoad"
       // 刷新误差，在误差内（下拉的距离），是不执行刷新的 Number 类型, 默认是75
      :refresh-deviation="refreshDeviation"
      // 加载误差，在误差内，是不执行加载的，默认是0，也就是滑到底部才加载，如果有值，而且是正数，就是距离到底部还有一段距离（还没有到底部）就开始加载数据了
      :load-deviation="loadDeviation"
      // 加载数据状态， 0 默认值，将要开始（没有任何状态），1 开始加载数据，2 加载完成并成功，3 加载失败
      :load-stage="loadStage"
      // 刷新数据状态，0 默认值，将要开始（没有任何状态），1 开始加载数据，2 加载完成并成功，3 加载失败
      :refresh-stage="refreshStage"
      // 是否加载完成, 默认是false, 当为true时，load将不再执行（已经加载完了）
      :load-completed="loadCompleted"
      // 滚动框的高度，默认是100%,（需要带上单位）
      :height="height"
      // 刷新回调，里面写需要刷新的东西，一般是更新数据
      @refresh="refreshData"
      // 加载回调， 里面写需要加载的东西， 一般是加载更多的数据
      @load-more="loadMore">
      // 内容位置 slot="content"
      <ul slot="content" class="scroll-content">
          <li v-for="item in values" @click="testClick(item)" v-text="item"></li>
      </ul>'/>
      <p>JS 写法</p>
      <e-highlight
        code="
    import EScroll from '../../../components/EScroll.vue';
    export default {
      data() {
        return {
          isRefresh: true,
          isLoad: true,
          loadDeviation: 0,
          refreshDeviation: 75,
          refreshStage: 0,
          loadStage: 0,
          loadCompleted: false,
          height: '300px',
          // 数据
          values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        };
      },
      methods: {
        refreshData() {
        },
        loadMore() {
        },
      },
      components: {
        EScroll // 引入组件
      }
    };"/>
    </div>
  </div>
</template>

<script>
  import EScroll from '../../../components/EScroll.vue';

  export default {
    data() {
      return {
        open: false,
        // 下面是组件数据
        isRefresh: true,
        isLoad: true,
        loadDeviation: 0,
        refreshDeviation: 75,
        refreshStage: 0,
        loadStage: 0,
        loadCompleted: false,
        height: '300px',
        // 数据
        values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        count: 1,
      };
    },
    mounted() {
    },
    methods: {
      refreshData() {
        this.count += 1;
        this.values = [this.count, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
        this.refreshStage = 1;
        setTimeout(() => {
          this.refreshStage = 2;
          if (this.values.length > 20) {
            this.loadCompleted = true;
          } else {
            this.loadCompleted = false;
          }
        }, 1000);
      },
      loadMore() {
        if (this.values.length > 20) {
          this.loadCompleted = true;
          return;
        }
        this.loadStage = 1;
        setTimeout(() => {
          this.loadStage = 2;
          this.values = this.values.concat([31, 32, 33, 34, 35, 36, 37]);
          if (this.values.length > 20) {
            this.loadCompleted = true;
          }
        }, 1000);
      },
      changeType() {
        this.open = !this.open;
      },
      testClick(item) {
        console.log(item);
      },
    },
    components: {
      EScroll
    }
  };
</script>
<style lang="scss">
  .scroll-content{
    li{
      height: 80px; border: 1px solid #CCC; margin-bottom: 10px;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
</style>
