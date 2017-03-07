'use strict';

let gulp = require('gulp');

let sequence = require('gulp-sequence');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');

let webpackStream = require('webpack-stream');
let webpackConfig = require('./webpack.config');
let webpack = require('webpack');
let {Server} = require('karma');
let cloneDeep = require('lodash/cloneDeep');

gulp.task('webpack', () =>
  gulp.src('src.js')
    .pipe(webpackStream(webpackConfig, webpack))
    .pipe(gulp.dest('.'))
);

gulp.task('test', (done) => {
  new Server({configFile: __dirname + '/karma.conf.js'}, (exitCode) => {
    done();
    process.exit(exitCode);
  }).start();
});

gulp.task('test:debug', (done) => {
  new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: false,
    browsers: ['Chrome']
  }, (exitCode) => {
    done();
    process.exit(exitCode);
  }).start();
});

gulp.task('uglify', () => {
  let webpackConfigMin = cloneDeep(webpackConfig);
  webpackConfigMin.plugins =[
      new webpack.optimize.UglifyJsPlugin({sourceMap: true})
    ];
  webpackConfigMin.output.filename = 'dist/bc-countries.min.js';

  return gulp.src('src.js')
    .pipe(webpackStream(webpackConfigMin, webpack))
    .pipe(gulp.dest('.'));
});

gulp.task('build', ['webpack', 'uglify']);
