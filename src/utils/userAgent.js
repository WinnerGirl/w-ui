/* eslint-disable */
const u = navigator.userAgent;// 获取设备信息
const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; // android终端
const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // ios终端
const isWeixin = /MicroMessenger/i.test(u);// 微信终端
const offerxx = u.indexOf('dlkjoffer') >= 0;// offer++判断
export default {
  u,
  isAndroid,
  isIOS,
  isWeixin,
  offerxx,
  isIOSApp: offerxx && isIOS,
  isAndroidApp: offerxx && isAndroid,
}
