const path = require('path')
const webpack = require('webpack')
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const outDir = path.resolve(__dirname, "wwwroot");
const srcDir = path.resolve(__dirname, "app");
const baseUrl = "/";

const extractVendorCss = new ExtractTextPlugin({ filename: "vendor.[contenthash].css", allChunks: true });
const extractAppCss = new ExtractTextPlugin({ filename: "app.[contenthash].css", allChunks: true });

module.exports = {
    entry: `${srcDir}/index.ts`,

    output: {
        filename: "bundle.[hash].js",
        path: outDir,
        publicPath: baseUrl
    },

    devtool: "source-map",
    
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'vars': `${srcDir}/variables.scss`
        }
    },

    module: {
        rules: [
            {
                test: /\.min\.css$/,
                use: extractVendorCss.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true,
                                sourceMap: false
                            }
                        }
                    ]
                }),
                issuer: /\.ts$/i
            },
            {
                test: /index\.scss$/,
                use: extractAppCss.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: false,
                                sourceMap: true
                            }
                        },
                        {
                            loader: "sass-loader",
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                }),
                issuer: /\.ts$/i
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
                    }
                    // other vue-loader options go here
                }
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                }
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },

            // Fonts
            { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: "url-loader", options: { limit: 10000, mimetype: "application/font-woff2" } },
            { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: "url-loader", options: { limit: 10000, mimetype: "application/font-woff" } },
            { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: "url-loader" }
        ]
    },

    devServer: {
        historyApiFallback: true,
        noInfo: true
    },

    performance: {
        hints: false
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: `${srcDir}/index.ejs`,
            filename: `${outDir}/index.html`
        }),
        extractVendorCss,
        extractAppCss,
        new CleanWebpackPlugin([outDir])
    ]
}
