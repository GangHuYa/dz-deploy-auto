const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const nodeExternals = require('webpack-node-externals')

module.exports = {
	entry: './src/index.ts',
	output: {
		filename: 'dz-deploy-auto.js',
		path: path.join(__dirname, 'dist'),
		libraryTarget: 'umd',
		library: 'dz-deploy-auto',
		umdNamedDefine: true
	},
	target: 'node',
	mode: 'development',
	externals: [nodeExternals()],
	resolve: {
		extensions: ['.ts']
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: ['ts-loader', 'shebang-loader'],
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin()
	]
}