module.exports = {
    entry: {
        bundle1: './main.js'
    },
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    }
};