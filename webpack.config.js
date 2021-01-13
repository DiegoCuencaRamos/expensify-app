const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = (env) => {
    const prodMode = env !== 'production';

    console.log(prodMode, path.resolve(__dirname, 'public', 'dist'));

    return {
        mode: prodMode ? 'production' : 'development',
        entry: './src/app.js',
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, 'public', 'dist'),
        },
        plugins: [new MiniCssExtractPlugin()],
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            "presets": [
                                [
                                    "@babel/env",
                                    {
                                        "targets": {"node": "current"},
                                        "useBuiltIns": "usage",
                                        "corejs": { "version": 3},
                                    }
                                ],
                                    "@babel/preset-react"
                                ],
                            "plugins": ["@babel/plugin-proposal-object-rest-spread"/*, "@babel/plugin-transform-modules-commonjs"*/]
                        }
                    }
                },
                {
                    test: /\.s?[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        prodMode ? MiniCssExtractPlugin.loader : 'style-loader',
                        // Translates CSS into CommonJS
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                        // Compiles Sass to CSS
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        },
                    ],
                },
            ],
        },
        // running only in Production mode
        /*optimization: {
            minimizer: [
              new CssMinimizerPlugin({
                sourceMap: true,
              }),
            ],
          },*/
        devtool: prodMode ? 'source-map' : 'inline-source-map',
        devServer: {
            contentBase: path.join(__dirname, 'public'),
            historyApiFallback: true,
            publicPath: '/dist/'
        },
    };
};