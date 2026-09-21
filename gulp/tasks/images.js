const paths 				= require('../paths'),
			gulp 					= require('gulp'),
			plumber 			= require('gulp-plumber'),
			imagemin 			= require('gulp-imagemin')

module.exports = function images() {
	return gulp.src(paths.src.img)
		.pipe(plumber())
		.pipe(gulp.dest(paths.build.img))
}