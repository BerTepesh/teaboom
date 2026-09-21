const paths 				= require('../paths'),
      entries 			= require('../../src/javascripts/_entries'),
			gulp 					= require('gulp'),
      webpackStream = require('webpack-stream'),
      plumber 			= require('gulp-plumber');

module.exports = function scripts(done) {
  Object.entries(entries).forEach(entry => {
    const [key, value] = entry;

    let pathArr = value.map(el=> paths.src.scripts + el);

    pathArr.unshift('/src/javascripts/prepend.js');
    pathArr.push('/src/javascripts/append.js');
    
    webpackStream({
      entry: {
        app: pathArr 
      },
      output: {
        filename: `${key}.js`
      },
      mode: "production",
    })
    .pipe(plumber())
    .pipe(gulp.dest(paths.build.scripts))
  });
  done();
}

