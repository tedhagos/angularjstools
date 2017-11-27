(function(){
  "use strict";
  
  let gulp = require('gulp');
  let concat = require('gulp-concat');
  let uglify = require('gulp-uglify');
  let del = require('del');
  let watch = require('gulp-watch');
  let ngAnnotate = require('gulp-ng-annotate');
  let obfuscate = require('gulp-obfuscate');
  let sourcemaps = require('gulp-sourcemaps');
  let args = require('yargs').argv;
  let util = require('gulp-util');
  
  
  //console.log(args);
  
  let prod = args.prod;
  
  gulp.task('default', ['script'] ,function(){
    gulp.watch('js/**/*.js', ['script']);
  });
  
  
  gulp.task('script', ['clean'],function(){
    console.log("Ready to go");
    return gulp.src('js/**/*.js')
    .pipe(ngAnnotate())
    .pipe(!prod ? sourcemaps.init() : util.noop())
    .pipe(concat('bundle.js'))
    .pipe(!prod ? uglify() : util.noop())
    .pipe(!prod ? obfuscate() : util.noop())
    .pipe(!prod ? sourcemaps.write() : util.noop())
    .pipe(gulp.dest('bin/js'));
  });
  
  gulp.task('t1', function(){
    console.log('t1');
  });
  
  gulp.task('clean', function(){
    console.log('cleaning build');
    return del([
      'bin/**/*'
    ]);
  });
})();

