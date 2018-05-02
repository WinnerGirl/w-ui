const createScript = (url, callback) => {
  const oScript = document.createElement('script');
  oScript.type = 'text/javascript';
  oScript.async = true;
  oScript.src = url;

  /**
   * IE6/7/8                -- onreadystatechange
   * IE9/10                 -- onreadystatechange, onload
   * Firefox/Chrome/Opera   -- onload
   */

  const isIE = !-[1];
  if (isIE) {
    // 判断IE8及以下浏览器
    oScript.onreadystatechange = () => {
      if (this.readyState === 'loaded' || this.readyState === 'complete') {
        callback();
      }
    };
  } else {
    // IE9及以上浏览器，Firefox，Chrome，Opera
    oScript.onload = () => {
      callback();
    };
  }

  document.body.appendChild(oScript);
};

export const createScripts = (urls, callback) => {
  Promise.each(urls, url => new Promise(resolve => createScript(url, resolve)))
    .then(callback);
};

export default createScript;
