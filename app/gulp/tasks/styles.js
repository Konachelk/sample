var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync').create();

gulp.task('styles', function () {
    return gulp
        .src('./app/assets/styles/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer())
        .pipe(gulp.dest('./app/temp/styles'));
});
