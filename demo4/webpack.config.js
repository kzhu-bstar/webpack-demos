module.exports = {
    entry: {
        bundle: './main1.js',
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
                // loader: 'style-loader!css-loader'
            }
        ]
    }
};