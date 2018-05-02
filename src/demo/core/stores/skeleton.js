/**
 * 首屏骨架屏控制器
 */
export default {
  namespaced: true,
  state: {
    hide: false,
  },
  mutations: {
    setSkeletonStatus (state, data) {
      state.hide = data.hide;
    }
  }
};
