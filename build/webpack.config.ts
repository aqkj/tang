/**
 * webpack配置
 * @author xiaoqiang <465633678@qq.com>
 * @created 2019/10/25 19:16:18
 */
// import { getEntrys } from './utils'
import path from 'path'
import fs from 'fs'
import webpack from 'webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import TangVendorWebpackPlugin from '../../tang-vendor-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
// 获取config
const appConfig: Record<string, any> = JSON.parse(fs.readFileSync('./config/app.json', {
  encoding: 'utf-8'
}))
const entrys: Record<string, string> = {}
appConfig.pages.forEach((page: string) => {
  entrys[page] = path.resolve(__dirname, `../src/${page}.ts`)
})
const VueLoaderPlugin: any = require('../../vue-loader/lib/plugin')
export default (env: 'development' | 'production' | 'none', args: any[]): webpack.Configuration => {
  const config: webpack.Configuration = {
    mode: env,
    entry: {
      app: path.resolve(__dirname, '../src/app.ts'),
      ...entrys
    },
    target: 'web',
    output: {
      path: path.resolve(__dirname, '../dist'),
      filename: '[name].js',
      chunkFilename: '[name].js',
      globalObject: 'global',
      jsonpFunction: 'tang'
    },
    module: {
      rules: [{
        test: /\.vue$/,
        use: [{
          loader: path.resolve(__dirname, '../../vue-loader/lib/index.js'),
          options: {
            compiler: require('../../vue/packages/tang-template-compiler/index.js')
          }
        }]
      }, {
        test: /\.ts$/,
        use: [
          'ts-loader'
        ]
      }, {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }, {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      }]
    },
    resolve: {
      extensions: ['.js', '.ts', '.vue', '.json'],
      alias: {
        vue: path.resolve(__dirname, '../../vue/dist/tang.runtime.js')
      }
    },
    optimization: {
      runtimeChunk: {
        name: 'vendor/runtime'
      },
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'vendor/styles',
            test: /\.wxss$/,
            chunks: 'all',
            minSize: 0,
            minChunks: 1,
            priority: -1,
            enforce: true
          },
          vendor: {
            minSize: 0,
            minChunks: 1,
            name: 'vendor/index',
            chunks: 'all',
            test: /[\\/]node_modules[\\/]/
          },
          vue: {
            minSize: 0,
            name: 'vendor/vue',
            test: /[\\/]vue[\\/]/,
            chunks: 'all',
            priority: -1
          }
        }
      }
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].wxss',
        chunkFilename: '[name].wxss'
      }),
      new VueLoaderPlugin(),
      // 拷贝根配置
      new CopyWebpackPlugin([
        { from: 'config/app.json' }
      ]),
      new TangVendorWebpackPlugin()
    ],
    devtool: '#source-map',
    watch: env === 'development',
    stats: {
      warnings: env === 'production',
      source: false,
      entrypoints: false,
      modules: false,
      assets: false
    }
  }
  return config
}
