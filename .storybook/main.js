module.exports = {
  stories: ['../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],

  webpackFinal: async (baseConfig) => {
    baseConfig.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1, // 1 => postcss-loader
            modules: {
              localIdentName: '[local]___[hash:base64:2]',
            },
          },
        },
        'sass-loader',
      ],
    })
    return { ...baseConfig }
  }
}