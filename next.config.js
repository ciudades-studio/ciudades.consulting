const withSass = require('@zeit/next-sass');
const assetRule = config.module.rules.find(({ test }) => test.test(".svg"));

const assetLoader = {
  loader: assetRule.loader,
  options: assetRule.options || assetRule.query
};

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", assetLoader]
    });

    return config;
  }
}

module.exports = withSass({
	cssModules: true,
});
