/**
 * 更新 metaInfo 信息
 * @param opts
 */
/**
 * 为 dom 设置属性
 * @param el
 * @param opt
 */
const VUE_META_ATTRIBUTE = 'data-vue-meta-info';

function _setAttr (el, opt) {
  el.setAttribute(VUE_META_ATTRIBUTE, true);
  for (let key in opt) {
    if (opt.hasOwnProperty(key)) {
      el.setAttribute(key, opt[key]);
    }
  }
}
/**
 * 移除节点
 * @param parent
 * @param childs
 */
function _removeNode (parent) {
  let childs = parent.querySelectorAll(`[${VUE_META_ATTRIBUTE}]`);
  for (let i = childs.length - 1; i > -1; i--) {
    if (childs[i].getAttribute(VUE_META_ATTRIBUTE) === 'true') {
      parent.removeChild(childs[i]);
    }
  }
}
/**
 * metaInfo 操作函数
 * @returns {{setMetaInfo: (function(*)), removeMetaInfo: (function())}}
 */
function operate() {
  let _ndHead = document.getElementsByTagName('head')[0];
  return {
    /**
     * 设置 metaInfo 信息
     * @param metaOpts
     */
    setMetaInfo (metaOpts) {
      for (let key in metaOpts) {
        if (key === 'title') {
          document.title = metaOpts.title;
          continue;
        }
        if (metaOpts.hasOwnProperty(key)) {
          metaOpts[key].forEach((opt) => {
            let ndKey = document.createElement(key);
            _setAttr(ndKey, opt);
            _ndHead.appendChild(ndKey);
          });
        }
      }
    },
    /**
     * 删除 metaInfo 添加的 meta 信息
     */
    removeMetaInfo () {
      _removeNode(_ndHead);
    }
  };
}
export default function updateMetaInfo (opts) {
  operate().removeMetaInfo();
  operate().setMetaInfo(opts);
}
