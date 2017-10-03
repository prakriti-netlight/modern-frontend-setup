const path = require('path');

const config = {
    'context': path.resolve(__dirname, 'src'),
    'entry': './app.js',
    'output': {
        'path': path.resolve(__dirname, 'dist'),
        'filename': 'bundle.js'
    },
    'module': {
        'rules': [
            {
                'test': /\.js|.jsx?$/,
                'include': path.resolve(__dirname, 'src'),
                'exclude': [/node_modules/],
                'use': [{'loader': 'babel-loader'}]
            }
        ]
    }
};

module.exports = config;