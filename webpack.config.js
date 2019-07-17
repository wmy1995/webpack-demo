const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')


module.exports = {
  mode: 'development', // development  product
  // devtool: 'source-map', // 7 eval
  // string | object | array
  entry: './src/entry/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      // 214 kb 
      // b 
      // 1024b = 1kb
      // < 10kb
      // 214kb = ?
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024,
              name: 'image/[name].[ext]'
            },
          },
        ],
      },
      // {
      //   test: /\.css$/i,
      //   use: ['style-loader', 'css-loader'],
      //   // style-loader: 让css 注入到js里面
      //   // css-loader： 解析url  import 路径
      // }
      // {
      //   test: /\.scss$/,
      //   use: [
      //       "style-loader", // creates style nodes from JS strings
      //       "css-loader", // translates CSS into CommonJS
      //       "sass-loader" // compiles Sass to CSS, using Node Sass by default
      //   ]
      // },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          "sass-loader"
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      // {
      //   test: /\.(png|jpe?g|gif)$/,
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {},
      //     },
      //   ],
      // },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'page/index.html',
      template: './src/entry/index.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: 'css/index.css',
      // chunkFilename: '[id].css',
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ]
}