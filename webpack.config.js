const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const entryPath = "eCommerce";

module.exports = {
    mode: "development",
    entry: `./${entryPath}/js/app.js`,
    devtool: "inline-source-map",
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, `${entryPath}/build`),
        clean: true,
    },
    devServer: {
        open: true,
        hot: false,
        static: [
            {
                directory: path.join(__dirname, entryPath),
                publicPath: "/",
                serveIndex: true,
            },
        ],
        devMiddleware: {
            writeToDisk: true,
        },
        compress: true,
        port: 3001,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    // 'style-loader',
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [['autoprefixer']],
                            },
                        },
                    },
                    'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|gif|png|svg)$/,
                loader: "file-loader",
                options: {
                    name: "[name].[ext]",
                    publicPath: "/images/",
                    outputPath: "/images/"
                }
            }
        ],
    },
    plugins: [
        new webpack.ProvidePlugin({
            process: "process/browser",
        }),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: entryPath +"/index.html",
            inject: false
        }),
        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
    ],
};