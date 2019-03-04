'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var saneWatch = require('gulp-sane-watch');


//task para o sass
gulp.task('sass', function () {
	return gulp.src('./sass/**/*.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'));
});

//task watch 
gulp.task('watch', () => {
    saneWatch('css/**/*.css', () => {
        gulp.start('styles');
    });
});