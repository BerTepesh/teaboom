const paths 				= require('../paths'),
			gulp 					= require('gulp'),
			plumber 			= require('gulp-plumber')

module.exports = function fonts() {
	return gulp.src(paths.src.fonts)
		.pipe(plumber())
		.pipe(gulp.dest(paths.build.fonts))
}