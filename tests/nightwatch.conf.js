module.exports = {
  src_folders: [__dirname + '/scripts'],
  test_settings: {
    default: {
      selenium_port: 80,
      selenium_host: 'hub.screener.io',
      desiredCapabilities: {
        browserName: 'chrome',
        screener: {
          name: 'Demo Test',
          apiKey: process.env.SCREENER_API_KEY,
          group: process.env.SCREENER_GROUP_ID,
          resolution: '1280x1024',
          environment: process.env.CIRCLE_BRANCH
        }
      }
    }
  }
};
