const gulp       = require('gulp'),
      twig2html  = require('./gulp/tasks/twig2html'),
      styles     = require('./gulp/tasks/styles'),
      scripts    = require('./gulp/tasks/scripts'),
      images     = require('./gulp/tasks/images'),
      icons      = require('./gulp/tasks/icons'),
      fonts      = require('./gulp/tasks/fonts'),
      static     = require('./gulp/tasks/static'),
      clean      = require('./gulp/tasks/clean'),
      paths      = require('./gulp/paths'); 

function setMode(isProduction = false) {
	return cb => {
		process.env.NODE_ENV = isProduction ? 'production' : 'development'
		cb()
	}
}

const dev = gulp.parallel(twig2html, static, styles, scripts, fonts, images, icons)

const build = gulp.series(clean, dev)

function watchFiles() {
	gulp.watch(paths.watch.styles, styles)
	gulp.watch(paths.watch.html, twig2html)
	gulp.watch(paths.watch.static, static)
	gulp.watch(paths.watch.scripts, scripts)
	gulp.watch(paths.watch.fonts, fonts)
	gulp.watch(paths.watch.img, images)
	gulp.watch(paths.watch.icons, icons)
}

module.exports.start = gulp.series(setMode(), build, watchFiles)
module.exports.build = gulp.series(setMode(true), build)
