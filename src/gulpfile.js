var gulp = require('gulp');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var jshint = require('gulp-jshint');
var webpack = require('gulp-webpack');
var compass = require('gulp-compass');
var gulpConfig = require('./gulp.config');

// or more concisely
var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) { sys.puts(stdout) }


// Tasks
gulp.task('default', ['hint', 'scripts', 'compass']);

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

gulp.task('compass', function() {
  gulp.src(gulpConfig.styles.paths.entry)
    .pipe(compass({
      config_file: './config.rb',
      css: gulpConfig.styles.paths.output.dev,
      sass: 'styles'
    }))
    .pipe(gulp.dest(gulpConfig.styles.paths.output.prod));
});

gulp.task('watch', ['default'], function() {
	gulp.watch(gulpConfig.scripts.paths.all, ['scripts', 'hint']);
	gulp.watch(gulpConfig.styles.paths.all, ['compass']);
	connect.server({
		port: gulpConfig.connect.port,
		root: gulpConfig.ports.expressRoot,
		livereload: true
	});
});



