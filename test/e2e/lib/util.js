/**
 * Created by administrato on 2017/7/28.
 */
module.exports = {
  getFullUrl: function(browser, path, params) {
    let packageParams = '';
    if (params) {
      for (let key in params) {
        if (packageParams === '') {
          packageParams += '?';
        } else {
          packageParams += '&';
        }
        packageParams += key + '=' + params[key];
      }
    }
    return browser.globals.devServerURL + path + packageParams;
    // return 'http://localhost:8080/myqr';
  }
};
