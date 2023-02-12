const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// /. usage

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';

const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined; // find errors

// /. variables

module.exports = {
    mode,
    target,
    devtool,
    devServer: {
        port: 1337,
        open: true, // automatically open in new browser tab
        hot: true // refresh styles without page reload (might be lagged)
    },
    entry: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')], // __dirname - full pathway (not include current file)
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.[contenthash].js', // [contenthash] - generate piece of name by hash
        assetModuleFilename: 'assets/[name][ext]', // general directory for all assets
        clean: true // delete prev output path
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src', 'index.html')
        }),
        new MiniCssExtractPlugin({
            filename: 'style.[contenthash].css'
        })
    ],
    // plugins
    module: {
        rules: [
            {
                test: /\.html$/i, // $ - end of string
                loader: 'html-loader'
            },
            {
                test: /\.(c|sa|sc)ss$/i,
                use: [
                    devMode ? 'style-loader' : MiniCssExtractPlugin.loader, // add styles in html like separate file for prod mode
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.m?js$/i,
                exclude: /(node_modules|bower_components)/, // not to process these files by babel
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(woff|woff2|ttf)$/i, // alternative /\.woff2?$/i
                type: 'asset/resource',
                generator: {
                    // create custom subfolder when building (ignore output assetModuleFilename option)
                    filename: 'assets/fonts/[name][ext]'
                }
            },
            {
                test: /\.(jpe?g|png|webp|gif|svg)$/i, // jpe?g -> jpg || jpeg (e literal is optional)
                type: 'asset/resource',
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: [0.65, 0.9],
                                speed: 4
                            },
                            gifsicle: {
                                interlaced: false
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75
                            }
                        }
                    }
                ],
                generator: {
                    filename: 'assets/images/[name][ext]'
                }
            },
            {
                test: /\.(mp4|webm|ogg)$/i,
                generator: {
                    filename: 'assets/videos/[name][ext]'
                }
            }
        ]
    }
};
