const path = require('path');
const webpack = require('webpack');

const config = {
    context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js|.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: [/node_modules/],
                use: [{ loader: 'babel-loader' }]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader",
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
    }
};

module.exports = config;