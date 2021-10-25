const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin')
const {
  override,
  addWebpackPlugin,
  addWebpackModuleRule,
} = require('customize-cra')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = override(
  addWebpackModuleRule({
    test: /\.vanilla\.css$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: require.resolve('css-loader'),
        options: {
          url: false,
        },
      },
    ],
  }),
  addWebpackPlugin(new VanillaExtractPlugin()),
  addWebpackPlugin(new MiniCssExtractPlugin())
)
