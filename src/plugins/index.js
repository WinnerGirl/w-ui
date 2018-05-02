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
// 设置title
Vue.use(require('vue-wechat-title'));
