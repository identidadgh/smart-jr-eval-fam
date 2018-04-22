var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch('./*.html', browserSync.reload);
    gulp.watch('./scripts/*.js', browserSync.reload);
});

gulp.task('serve', function(callback) {
  runSequence(['browser-sync'], callback);
});
