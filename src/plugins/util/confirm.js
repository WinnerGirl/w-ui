import Template from '../../components/Confirm.vue';
const Confirm = {}; // 定义插件对象

const resetVMData = (_VM, _Opt) => {
  _VM.confirmTitle = _Opt.title;
  _VM.confirmTips = _Opt.tips || ['你确定吗？'];
  _Opt.options = _Opt.options || {};
  _VM.confirmOptions = {
    cancelHide: false,
    cancelValue: '取消',
    timesHide: false,
    confirmHide: false,
    confirmValue: '确定',
    ..._Opt.options,
  };
  _VM.show = true;
};

Confirm.install = function (Vue, options) {
  let _Tpl = null;
  let _VM = null;
  let _Opt = null;
  // 在Vue的原型上添加实例方法，以全局调用
  Vue.prototype.$confirm = {
    show(data) {
      // 防止重复
      if (_VM && _VM.show) {
        return _VM.openModel();
      }
      data = data || {};
      _Opt = Object.assign(options || {}, data);
      // 放到这里原因是在初始化时，不会创建dom
      if (!_VM) {
        _Tpl = Vue.extend(Template);
        // 实例化， Vue挂载目标
        _VM = new _Tpl();
        // 重置默认值
        resetVMData(_VM, _Opt);
        // 添加DOM
        document.body.appendChild(_VM.$mount().$el);
        return _VM.openModel();
      }
      resetVMData(_VM, _Opt);
      return _VM.openModel();
    }
  };
};
export default Confirm;
