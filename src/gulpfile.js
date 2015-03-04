var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var imagemin = require('gulp-imagemin');
var webpack = require('gulp-webpack');
var gulpConfig = require('./gulp.config');

// Tasks
gulp.task('default', ['hint', 'scripts', 'styles']);

// JS packaging
gulp.task('scripts', function() {
	return gulp.src(gulpConfig.scripts.paths.entry)
		.pipe(webpack(gulpConfig.webpack))
		.pipe(gulp.dest(gulpConfig.scripts.paths.output.dev))
		.pipe(connect.reload())
		.pipe(uglify())
		.pipe(gulp.dest(gulpConfig.scripts.paths.output.prod));
});

gulp.task('hint', function() {
	return gulp.src(gulpConfig.scripts.paths.all)
		.pipe(jshint('.jshintrc'))
		.pipe(jshint.reporter('default'));
});

gulp.task('styles', function() {
	return gulp.src(gulpConfig.styles.paths.entry)
		.pipe(sass())
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest(gulpConfig.styles.paths.output.dev))
		.pipe(connect.reload())
		.pipe(sass())
		.pipe(minifycss())
		.pipe(gulp.dest(gulpConfig.styles.paths.output.prod));
});

gulp.task('watch', ['default'], function() {
	gulp.watch(gulpConfig.scripts.paths.all, ['scripts']);
	gulp.watch(gulpConfig.styles.paths.all, ['styles']);
	connect.server({
		port: gulpConfig.connect.port,
		root: gulpConfig.scripts.paths.output.dev,
		livereload: true
	});
});