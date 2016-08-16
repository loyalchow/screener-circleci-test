module.exports = {
  src_folders: [__dirname + '/scripts'],
  test_settings: {
    default: {
      launch_url: 'https://screener.io/',
      selenium_port: 8888,
      selenium_host: 'dev-hub.screener.io',
      desiredCapabilities: {
        browserName: 'chrome',
        build: process.env.CIRCLE_BUILD_NUM,
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
