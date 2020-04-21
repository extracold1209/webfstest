const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV || 'development',
    entry: path.join(__dirname, 'src', 'react', 'index.tsx'),
    output: {
        path: path.join(__dirname, 'public', 'dist'),
        filename: 'dist.bundle.js'
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    }
}
