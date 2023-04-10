const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: '[name].js',
		publicPath: 'auto',
	},
	devServer: {
		static: {
			directory: path.join(__dirname, './dist'),
		},
		port: 9014,
		hot: true,
		historyApiFallback: true,
	},
	resolve: {
		extensions: ['.jsx', '.js', '.json'],
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules)/,
				loader: require.resolve('babel-loader'),
				options: {
					presets: [require.resolve('@babel/preset-react')],
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './public/index.html',
			title: 'Contact',
		}),
		new ModuleFederationPlugin({
			name: 'ContactApp',
			filename: 'remoteEntry.js',
			exposes: {
				'./ContactApp': './src/Contact',
			},
		}),
	],
};
