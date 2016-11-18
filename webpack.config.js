require( 'webpack' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const path = require( 'path' );

const BUILD_DIR = path.resolve( __dirname, 'src/' );
const APP_DIR = path.resolve( __dirname, 'src/js/' );
const CSS_DIR = path.resolve( __dirname, 'src/scss' );

let config = {

	entry: APP_DIR + '/client.jsx',
	output: {
		path: BUILD_DIR,
		filename: 'bundle.js'
	},

	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: APP_DIR,
				loader: 'babel'
			},
			{
				test: /\.scss$/,
				include: CSS_DIR,
				loader: ExtractTextPlugin.extract( 'css!sass' )
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				loader: 'file-loader?name=fonts/[name].[ext]'
			}
		]

	},

	plugins: [
		new ExtractTextPlugin('style.css', {
			allChunks: true
		})
	],

	watch: true

};

module.exports = config;
