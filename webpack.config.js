const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const path = require('path');

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/index_bundle.js',
    },

    module: {
        rules: [

            {
                test: /\.(sass|css|scss)$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }
                    },
                    "css-loader",
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer
                                ]
                            }
                        }
                    },
                    "sass-loader",
                ],

            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
                generator: {
                    filename: "./images/[name][ext]",
                },
            },
            {
                loader: 'image-webpack-loader',
                options: {
                    bypassOnDebug: true,
                    mozjpeg: {
                        progressive: true,
                    },
                    // optipng.enabled: false will disable optipng
                    optipng: {
                        enabled: true,
                    },
                    pngquant: {
                        quality: [0.65, 0.90],
                        speed: 4
                    },
                    gifsicle: {
                        interlaced: false,
                    },
                    // the webp option will enable WEBP
                    webp: {
                        quality: 75
                    }
                }
            },
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: "./fonts/[name][ext]",
                },
            },
            // {
            //     test: require.resolve("jquery"),
            //     loader: "expose-loader",
            //     options: {
            //         exposes: ["$", "jQuery"],
            //     },
            // },

        ],
    },


    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        devMiddleware: {
            writeToDisk: true,
        },
        //compress: true,
        port: 9000,
        open: false,
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "css/style.css",
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        }),

        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),

        new HtmlWebpackPlugin({
            template: './src/student-1.html',
            filename: 'student-1.html',
        }),

        new HtmlWebpackPlugin({
            template: './src/student-2.html',
            filename: 'student-2.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/login.html',
            filename: 'login.html',
        }),
    ],
};