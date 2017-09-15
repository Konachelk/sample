require ('./app/gulp/tasks/styles');
require ('./app/gulp/tasks/watch');


// var gulp = require('gulp'),
//     watch = require('gulp-watch'),
//     sass = require('gulp-sass'),
//     sourcemaps = require('gulp-sourcemaps'),
//     autoprefixer = require('gulp-autoprefixer'),
//     browserSync = require('browser-sync').create();
    
// gulp.task('watch', function () {

//     browserSync.init({
//         server: {
//             baseDir: "app"
//         }
//     })
//     watch('./app/index.html', function () {
//         browserSync.reload();
//     })

//     watch('./app/assets/styles/**/*.scss', function () {
//         gulp.start('cssInject');
//     })
// });

// gulp.task('cssInject',['styles'], function() {
//     return gulp.src('./app/temp/styles/styles.css')
//     .pipe(browserSync.stream());
// });

// gulp.task('styles', function () {
//     return gulp
//         .src('./app/assets/styles/styles.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(sourcemaps.write())
//         .pipe(autoprefixer())
//         .pipe(gulp.dest('./app/temp/styles'));
// });

