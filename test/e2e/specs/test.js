// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage
const util = require('../lib/util.js');
module.exports = {
  'job detail view test': function (browser) {
    const devServer = util.getFullUrl(browser, '/job/detail', {
      activityId: 31,
      familyId: 70,
      uid: 111,
      token: '2222'
    });
    browser
      .url(devServer)
      .waitForElementVisible('#app', 1000)
      .click('strong[class="text-underline text-red"]', function(result) {
        this.expect.element('strong[class="text-underline text-gray"').text.to.contain('收起二维码');
        browser.expect.element('.e-qr-wrapper').to.be.present.after(100);
      })
      .pause(2000)
      .click('strong[class="text-underline text-gray"', function() {
        this.expect.element('strong[class="text-underline text-red"').text.to.contain('出示二维码');
        browser.expect.element('.e-qr-wrapper').to.be.present.after(100);
        browser.expect.element('.e-qr-wrapper').to.not.be.visible.after(100);
      });
      // .assert.elementPresent('.hello')
      // .assert.containsText('h1', 'Welcome to Your Vue.js App')
      // .assert.elementCount('div', 9)
      // .end();
  },
  'job detail view test1': function (browser) {
    const devServer = util.getFullUrl(browser, '/job/detail', {
      activityId: 3133,
      familyId: 70,
      uid: 111,
      token: '2222'
    });
    browser
      .url(devServer)
      .waitForElementVisible('#app', 1000)
      .click('strong[class="text-underline text-red"]', function(result) {
        this.expect.element('strong[class="text-underline text-gray"').text.to.contain('收起二维码');
        browser.expect.element('.e-qr-wrapper').to.be.present.after(100);
      })
      .pause(2000)
      .click('strong[class="text-underline text-gray"', function() {
        this.expect.element('strong[class="text-underline text-red"').text.to.contain('出示二维码');
        browser.expect.element('.e-qr-wrapper').to.be.present.after(100);
        browser.expect.element('.e-qr-wrapper').to.not.be.visible.after(100);
      });
    // .assert.elementPresent('.hello')
    // .assert.containsText('h1', 'Welcome to Your Vue.js App')
    // .assert.elementCount('div', 9)
    // .end();
  }
};
