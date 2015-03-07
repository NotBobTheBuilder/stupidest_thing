module.exports = {
  "alert exists with correct test": function(browser) {
    browser.url("http://localhost:8080");
    browser.getAlertText(function (alert) {
      browser.assert.equal(alert.value, 'just banter m80');
      browser.acceptAlert();
      browser.end();
    });
  }
};
