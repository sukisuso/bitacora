const path = require('path');
const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');

const paths = {
  less: ['./src/views/less/**/*.less'],
};

gulp.task('default', ['less']);

gulp.task('less', function () {
  return gulp.src('./src/views/less/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'less', 'includes')],
    }))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./src/static/css/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.less, ['less']);
});