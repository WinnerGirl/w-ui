import Vue from 'vue';
import {
  platform, version, baseUrl
} from './global';

const header = { 'Content-Type': 'application/x-www-form-urlencoded' };

function fetchData() {
  async function getResponse(url, data, type, headers) {
    const loading = Vue.prototype.$loading;
    loading.start();
    data = Object.assign({}, data, {
      platform,
      version
    });
    if (type === 'GET') {
      let dataStr = ''; // 数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&';
      });
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'));
        url = url.indexOf('?') === -1 ? `${url}?json=${encodeURIComponent(JSON.stringify(data))}`
          : `${url}&json=${encodeURIComponent(JSON.stringify(data))}`;
      }
    }
    url = baseUrl + url;
    if (window.fetch) {
      let requestConfig = {
        method: type,
        mode: 'cors',
        headers,
      };
      // console.log(requestConfig);
      if (type === 'POST') {
        Object.defineProperty(requestConfig, 'body', {
          value: `${encodeURIComponent('json')}=${JSON.stringify(data)}`
          // value: JSON.stringify(data)
        });
      }
      try {
        const response = await fetch(url, requestConfig).then(res => res.json()).then(data => {
          if (data.code === 0) {
            loading.end();
            return data.data || data;
          } else {
            loading.error();
            Vue.prototype.$toast.show(data.msg || data.message || '请求服务器失败');
            return data;
          }
        }).catch((err) => {
          Vue.prototype.$toast.show(err.message);
          loading.error();
          return {};
          // toast.show(err);
        });
        return response;
      } catch (error) {
        Vue.prototype.$toast.show(error.message);
        console.error(error);
      }
    } else { // 不兼容fetch的浏览器用XMLHttpRequest
      return new Promise((resolve, reject) => {
        let requestObj;
        if (window.XMLHttpRequest) {
          requestObj = new XMLHttpRequest();
        } else {
          requestObj = new ActiveXObject; // eslint-disable-line
        }

        let sendData = '';
        if (type === 'POST') {
          sendData = `${encodeURIComponent('json')}=${JSON.stringify(data)}`;
        }

        requestObj.open(type, url, true);
        requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        requestObj.send(sendData);

        requestObj.onreadystatechange = () => {
          if (requestObj.readyState === 4) {
            if (requestObj.status === 200) {
              let obj = requestObj.response;
              if (typeof obj !== 'object') {
                obj = JSON.parse(obj);
              }
              if (obj.code === 0) {
                loading.end();
              } else {
                loading.error();
                Vue.prototype.$toast.show(obj.msg);
              }
              resolve(obj.data);
            } else {
              loading.error();
              Vue.prototype.$toast.show(obj.error);
              reject(requestObj);
            }
          }
        };
      });
    }
  }
  return {
    // 'Content-Type': 'application/json'
    // get(url = '', data = {}, headers = {'Content-Type': 'application/json'}) {
    get(url = '', data = {}, headers = header) {
      return getResponse(url, data, 'GET', headers);
    },
    post(url = '', data = {}, headers = header) {
      return getResponse(url, data, 'POST', headers);
    }
  };
};

Vue.prototype.$fetch = fetchData();

export default fetchData();
