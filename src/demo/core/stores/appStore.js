import Vue from 'vue';
import Vuex from 'vuex';
import skeleton from './skeleton';
import title from './title';
// import identity from '../../security/stores/identity';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    skeleton,
    // identity,
    title,
  },
  // 开启严格模式
  strict: process.env.NODE_ENV !== 'production'
});
