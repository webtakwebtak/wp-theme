// webpack.config.js

const path = require('path');

module.exports = {
  entry: './assets/build/js/app.js',
  output: {
    path: path.resolve(__dirname, 'assets/dist/js'),
    filename: 'bundle.js'
  },
  module: {
        rules: [{
            test: /\.scss$/,
            use: [
                "style-loader", // creates style nodes from JS strings
                "css-loader", // translates CSS into CommonJS
                "sass-loader" // compiles Sass to CSS, using Node Sass by default
            ]
        },
        { 
        	test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
	        use: [{
	            loader: 'file-loader',
	            options: {
	            name: '[name].[ext]',
	            outputPath: '../fonts/',  
	            publicPath: '../app/themes/wp-theme/assets/dist/fonts' 
	            }
	        }]
	    }]
    }
};