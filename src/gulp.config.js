var info = require('./package.json');
var webpack = require('webpack');

module.exports = {
	title: info.title,
	author: info.author,
	version: info.verions,
	build: Date.now(),
	scripts: {
		paths: {
			all: './scripts/*.js',
			entry: './scripts/index.js',
			output: {
				dev: '../chrome-extension',
				prod: '../chrome-extension'
			}
		}
	},
	styles: {
		paths: {
			all: './styles/**/*.scss',
			entry: './styles/dark_slack.scss',
			output: {
				dev: '../chrome-extension',
				prod: '../chrome-extension'
			}
		},
		sourcemaps: false
	},
	ports: {
		express: 8080,
		livereload: 35729,
		expressRoot: '../chrome-extension'
	},
	webpack: {
		cache: true,
		output: {
			filename: 'index.js'
		},
		resolve: {
			modulesDirectories: ['node_modules']
		},
		resolveLoader: {
			modulesDirectories: ['node_modules']
		},
		module: {
			loaders: [{
				test: /\.js$/,
				loader: 'es6-loader'
			}]
		}
	},
	connect: {
		port: 8080,
		root: './build/dev'
	},
	liveReload: {
		port: 35729
	}
};