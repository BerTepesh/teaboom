const paths 				= require('../paths'),
			gulp 					= require('gulp'),
			plumber 			= require('gulp-plumber');

module.exports = function static() {
	return gulp.src(paths.src.static)
		.pipe(plumber())
		.pipe(gulp.dest(paths.build.static))
}