var gulp          = require('gulp'),
    connect       = require('gulp-connect'),
    nightwatch    = require('gulp-nightwatch');

gulp.task('test', function() {
  connect.server({
    root: 'lib'
  });

  gulp.src('')
    .pipe(nightwatch({
      configFile: "nightwatch.json"
    }));
});

gulp.task('default', ['test']);
