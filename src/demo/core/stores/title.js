/**
 * 设置标题
 */
export default {
  namespaced: true,
  state: {
    text: '',
  },
  mutations: {
    setTitle (state, data) {
      state.text = data;
    }
  }
};
