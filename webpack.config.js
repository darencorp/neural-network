module.exports = {
    context: __dirname + "/react_pyramid/static/src",
    entry: {
        index: './js/index.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /(node_modules)/,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    output: {
        path: __dirname + "/react_pyramid/static/dist",
        filename: "[name].min.js"
    }
}