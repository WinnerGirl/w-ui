import * as CookieUtil from './cookie';

/**
 * 获取url中的get和hash参数
 *    url注意防止页面的业务参数和uid token重名
 *    url避免get参数和hash参数键值重名，错误事例：?a=1#a=1
 *    不支持键值相同的参数解析，如：?a=1&a=2
 *
 * @returns {{}}
 */
const getCurrentParams = () => {
  const search = location.search.length > 0 ? location.search.substr(1) : '';
  const hashStr = location.hash.length > 0 ? location.hash.substr(1) : '';
  const result = {};
  let paramsStr = '';
  if (search && search.trim() !== '') {
    paramsStr = search.trim();
  }
  if (hashStr && hashStr.trim() !== '') {
    paramsStr += `&${hashStr.trim()}`;
  }
  if (paramsStr) {
    const paramsArray = paramsStr.split('&');
    let param;
    paramsArray.forEach((item) => {
      param = item.split('=');
      if (param[1] && param[1].trim() !== 'undefined') {
        result[decodeURIComponent(param[0])] = decodeURIComponent(param[1]);
      }
    });
  }
  if (!result.uid || !result.token) {
    const uid = CookieUtil.get('uid');
    const token = CookieUtil.get('token');
    if (uid && token) {
      Object.assign(result, {
        uid,
        token,
      });
    }
  } else {
    CookieUtil.set('uid', result.uid, { path: '/' });
    CookieUtil.set('token', result.token, { path: '/' });
  }
  return result;
};

export { getCurrentParams };
