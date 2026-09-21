const paths 				= require('../paths'),
			gulp 					= require('gulp'),
			plumber 			= require('gulp-plumber'),
			sass					= require('gulp-sass')(require('sass')),
			cleanCSS 			= require('gulp-clean-css'),
			sourcemaps 		= require('gulp-sourcemaps'),
			shorthand 		= require('gulp-shorthand'),
			autoprefixer 	= require('gulp-autoprefixer'),
			tilde 				= require( 'node-sass-tilde-importer'),
			rename 				= require("gulp-rename")

module.exports = function styles() {
	return gulp.src(paths.src.sass)
		.pipe(plumber())
		.pipe(sass.sync({
  		importer: tilde
		}))
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
				cascade: false
		}))
		.pipe(shorthand())
		.pipe(cleanCSS({
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    }))
		.pipe(sourcemaps.write())
		.pipe(rename({ suffix: '.min' }))
		.pipe(gulp.dest(paths.build.styles))
}