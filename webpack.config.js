var webpack = require('webpack');
var path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {

    // 配置服务器
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        contentBase: ".", //最好写上，否则报错，难道这里是一个坑？
        port: 8080
    },

    entry: [
        'webpack-hot-middleware/client',
      "./js/app.js"
    ],

    output: {
        publicPath: 'build',
        filename: "bundle.js"
    },

    resolve: {
        extensions: ['', '.scss', '.css', '.js', '.json'],
        modulesDirectories: [
            'node_modules',
            path.resolve(__dirname, './node_modules')
        ]
    },
    module: {
        loaders: [
            {
                test: /(\.js|\.jsx)$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: { presets: ['es2015', 'stage-0', 'react'] }
            }, {
                test: /(\.scss|\.css)$/,
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!postcss!sass')
            }
        ]
    },
    postcss: [autoprefixer],
    sassLoader: {
        data: '@import "' + path.resolve(__dirname, 'css/theme.scss') + '";'
    },
    plugins: [
        new ExtractTextPlugin('react-toolbox.css', { allChunks: true }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
};
