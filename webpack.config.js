const path = require('path');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'codebase'),
        publicPath: "codebase/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                //      localIdentName: '[hash:base64]-[name]-[local]',
                                //     modules: true,
                                // sourceMap: IS_DEV
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                // sourceMap: IS_DEV,
                                // includePaths: modulePaths
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                // sourceMap: IS_DEV
                            }
                        }
                    ]
                })
            }
        ]
    },
    plugins: [
        new LiveReloadPlugin(),
        new ExtractTextPlugin("app.css"),
    ]

};