import Vue from 'vue';
import createScript from './createScript';

const latlng = 'LATLNG';

/**
 * 根据高德API 初始化地图信息
 */
function initMap(resolve, type) {
  try {
    window.AMap = AMap;
    const mapObj = new AMap.Map('iCenter');
    mapObj.plugin('AMap.Geolocation', () => {
      const geolocation = new AMap.Geolocation();
      mapObj.addControl(geolocation);
      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, 'complete', positionSuccess.bind(this, resolve, type)); // 返回定位信息
      AMap.event.addListener(geolocation, 'error', positionError); // 返回定位出错信息
    });
  } catch (e) {
    Vue.prototype.$toast.show('定位失败请刷新界面重试');
  }
}
/**
 * 处理定位信息
 * @param res
 */
function positionSuccess(resolve, type, res) {
  const result = {};
  if (type === latlng) {
    result.lat = res.position.lat;
    result.lng = res.position.lng;
  }
  resolve(result);
}
/**
 * 处理定位出错信息
 */
function positionError() {
  Vue.prototype.$toast.show('定位失败请刷新界面重试');
}

function loadMapFile(resolve, type) {
  if (!window.AMap) {
    createScript(['https://webapi.amap.com/maps?v=1.4.0&key=548b850f54170e62455e7d61e86c17cd'], () => {
      initMap(resolve, type);
    });
    return;
  }
  initMap(resolve, type);
}
/**
 * 获取用户当前经纬度
 */
export function getLatLng() {
  return new Promise((resolve) => {
    loadMapFile(resolve, latlng);
  });
}
