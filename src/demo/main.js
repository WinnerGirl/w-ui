import Vue from 'vue';
import App from './Demo.vue';
import router from './router';
import store from './core/stores/appStore';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  return next();
});
router.afterEach((to, from) => {
  setTimeout(() => {
    store.commit('skeleton/setSkeletonStatus', { hide: true });
  }, 200);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
