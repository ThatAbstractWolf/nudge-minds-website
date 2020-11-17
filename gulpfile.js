const gulp = require('gulp');

const sass = require('gulp-sass');

const concat = require('gulp-concat');

const uglify = require('gulp-uglify');
const cleanCSS = require('gulp-clean-css');

const del = require('del');

 gulp.task('js', () => {
    return gulp.src('assets/scripts/**/*.js')
		.pipe(uglify())
		.pipe(concat('main.js'))
        .pipe(gulp.dest('./web/dist/'));
});
 
 gulp.task('css', () => {
    return gulp.src('assets/styles/**/styles.scss')
        .pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS())
		.pipe(concat('main.css'))
        .pipe(gulp.dest('./web/dist/'));
});

gulp.task('watch', () => {
	
    gulp.watch('assets/styles/**/*.scss', (done) => {
        gulp.series(['css'])(done);
    });
	
	gulp.watch('assets/scripts/**/*.js', (done) => {
        gulp.series(['js'])(done);
    });
});

gulp.task('default', gulp.series(['css', 'js']));