import Vue from 'vue';
import LoadingBar from '../../components/LoadingBar.vue';

let LoadingBarConstructor = Vue.extend(LoadingBar);
let timer = null;
let removeTimer = null;
let WLoadingBar = () => {
  return new LoadingBarConstructor();
};
LoadingBarConstructor.prototype.config = function (options) {
  Object.keys(options).forEach((key) => {
    if (key === 'isError' || key === 'totalProgress') {
      return;
    }
    this[key] = options[key];
  });
};

LoadingBarConstructor.prototype.init = function () {
  clearTimeout(timer);
  this.totalProgress = 0;
  this.isError = false;
  this.isInit = true;
  this.vm = this.$mount();
  document.body.appendChild(this.vm.$el);
  return this;
};

LoadingBarConstructor.prototype.start = function () {
  if (!this.isInit) {
    this.init();
  }
  this.isShow = true;
  timer = setInterval(() => {
    if (this.totalProgress < 90) {
      this.totalProgress += (this.percentNum || Math.random()) * this.speed;
    }
  }, 100);
};

LoadingBarConstructor.prototype.end = function () {
  timer || this.init();
  this.totalProgress = 100;
  clearTimeout(removeTimer);
  removeTimer = setTimeout(() => {
    clearTimeout(timer);
    timer = null;
    this.isShow = false;
    this.totalProgress = 0;
    this.isError = false;
  }, 200);
};

LoadingBarConstructor.prototype.error = function () {
  this.end();
  this.totalProgress = 100;
  this.isError = true;
};
Vue.prototype.$loading = WLoadingBar();

export default WLoadingBar();
