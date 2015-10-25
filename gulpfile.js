var gulp = require('gulp');
var webpack = require('webpack-stream');

gulp.task('default', function() {
  return gulp.src('app/assets/application.jsx')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('public/assets'));
});
