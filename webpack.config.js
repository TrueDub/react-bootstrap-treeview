const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'react-bootstrap-treeview.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/}
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "public")
    }
};