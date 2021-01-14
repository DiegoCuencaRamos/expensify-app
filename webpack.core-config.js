const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public', 'dist'),
    },
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
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
        ],
    },
    devtool: 'eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true,
        publicPath: '/dist/'
    },
};