var path = require('path');
module.exports = {
    entry: {
        app: ["./js/main.js"]
    },
    output: {
        path: path.join(__dirname, 'js'),
        publicPath: '/js/',
        filename: 'bundle.js',
        devtoolModuleFilenameTemplate: '[resourcePath]',
        devtoolFallbackModuleFilenameTemplate: '[resourcePath]?[hash]'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    devtool: 'source-maps',
};


