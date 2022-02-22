const path = require( 'path' );
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
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
            favicon: './public/favicon.ico',
            manifest: '/public/manifest.json'
        })
    ],
    devtool: 'inline-source-map'
}