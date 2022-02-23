const path = require( 'path' );
const HTMLWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.html$/i,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader', {
                        loader: 'css-loader', options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                            },
                        }
                    },'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|jp(e*)g|svg|gif|ico)$/,
                use: ['file-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss', 'json', 'css', 'png', 'svg', 'jpeg', 'gif', 'ico']
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.html'),
            filename: './index.html',
            favicon: './public/favicon.ico'
        }),
        new WebpackPwaManifest({
            name: 'My Progressive Web App',
            short_name: 'MyPWA',
            description: 'My awesome Progressive Web App!',
            background_color: '#ffffff',
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            icons: [
              {
                src: path.resolve('src/assets/icon.png'),
                sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
              }
            //   ,{
            //     src: path.resolve('src/assets/large-icon.png'),
            //     size: '1024x1024' // you can also use the specifications pattern
            //   },
            //   {
            //     src: path.resolve('src/assets/maskable-icon.png'),
            //     size: '1024x1024',
            //     purpose: 'maskable'
            //   }
            ]
          })
    ],
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    devtool: 'inline-source-map'
}