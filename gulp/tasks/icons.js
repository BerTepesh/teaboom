const paths 				= require('../paths'),
			gulp 					= require('gulp'),
			plumber 			= require('gulp-plumber'),
			svgstore 			= require('gulp-svgstore'),
			rename 				= require('gulp-rename');

module.exports = function icons() {
	return gulp.src(paths.src.icons)
		.pipe(plumber())
		.pipe(svgstore({
			inlineSvg: true
		}))
		.pipe(rename('icons.svg'))
		.pipe(gulp.dest(paths.build.icons))
}