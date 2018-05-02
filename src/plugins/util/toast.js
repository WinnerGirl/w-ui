import Template from '../../components/Toast.vue';
const Toast = {}; // 定义插件对象
Toast.install = function (Vue, options) {
  let _Tpl = null;
  let _VM = null;
  let _Opt = null;
  // 定时器
  let timer = null;
  // 在Vue的原型上添加实例方法，以全局调用
  Vue.prototype.$toast = {
    show(tip) {
      // 放到这里原因是在初始化时，不会创建dom
      if (!_VM) {
        // 重置默认值
        _Opt = Object.assign({
          position: 'bottom',
          expire: 2500,
        }, options);
        _Tpl = Vue.extend(Template);
        // 实例化， Vue挂载目标
        _VM = new _Tpl();
        // 添加DOM
        document.body.appendChild(_VM.$mount().$el);
      }
      // 防止重复
      if (_VM.show) {
        return;
      }
      _VM.tip = tip;
      _VM.show = true;
      if (timer) {
        clearTimeout(timer);
      }
      // 定时关闭
      timer = setTimeout(function () {
        _VM.show = false;
        clearTimeout(timer);
      }, _Opt.expire);
    }
  };
};
export default Toast;
