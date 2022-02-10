'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function build() {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
};


exports.build = build;
exports.watch = function () {
  gulp.watch('./sass/**/*.scss', gulp.series('build'));
};
