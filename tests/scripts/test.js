module.exports = {
  'Demo Test': function(browser) {
    browser
      .url('http://ci.server:8080')
      .execute('/*@screener.snapshot*/', ['Home']);
      .end();
  }
};
