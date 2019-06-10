'use strict';
const gulp = require('gulp');
const babel = require('gulp-babel');
const eslint = require('gulp-eslint');
// const excludeGitignore = require('gulp-exclude-gitignore');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');
const plumber = require('gulp-plumber');

gulp.task('eslint', function() {
  return gulp.src('generators/**/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('pre-test', gulp.series(function() {
  return gulp.src('generators/**/*.js')
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(istanbul.hookRequire());
}));

gulp.task('test', gulp.series('pre-test', function(cb) {
  let mochaErr;

  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .on('error', function(err) {
      mochaErr = err;
    })
    .pipe(istanbul.writeReports())
    .on('end', function() {
      cb(mochaErr);
    });
}));
gulp.task('watch', gulp.series(function() {
  gulp.watch(['generators/**/*.js', 'test/**'], ['test']);
}));

gulp.task('default', gulp.series('eslint', 'test'));
