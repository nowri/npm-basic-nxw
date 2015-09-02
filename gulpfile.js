"use strict";
/*
 * Initial setting
 * */
const gulp = require('gulp');
//let runSequence = require('run-sequence');
//let del = require('del');
const dirs = require('./package.json').config.dirs;

/*
 * Examples
 * */
//gulp.task('runsequence', (cb) => {
//    runSequence(
//        /* tasks here */
//        cb);
//});
//
//gulp.task('del', function(cb) {
//    del([/* directories */], cb);
//});
//
//gulp.task('basictask', function() {
//    return gulp
//        .src(
//        [dirs.deploy + '/**'],
//        {base: dirs.deploy}
//    )
//        .pipe(gulp.dest(dirs.release));
//});
//
//gulp.task('watch', function() {
//    gulp.watch(dirs.src + '/**', ['deploy']);
//});

gulp.task('task', function(cb) {
    console.log("task");
    cb();
});

gulp.task('default', ['task']);

