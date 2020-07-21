const path = require('path');
const { CleanWebpackPlugin }  = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[hash:8].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: false,
    port: 9090
  },
  optimization: {
  	usedExports: false
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader?cacheDirectory',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        ],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', 'css-loader'
        ]
        /* 或者这么写
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
        */
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/i,
        use: [
        {
          loader: 'file-loader',
          options: {
            name: '[contenthash].[ext]',
            outputPath: 'images',
            context: 'project'
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            disable: true
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '祖国欢你',
      template: './src/index.html'
    }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: true  // 不对index.html进行删除
    })
  ]
}