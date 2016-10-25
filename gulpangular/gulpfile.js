var gulp = require('gulp'),
    less = require('gulp-less'),
    connect = require('gulp-connect');
    webserver=require('gulp-webserver')
 
gulp.task('testLess', function () {
    gulp.src('public/style/app.less')
        .pipe(less())
        .pipe(gulp.dest('public/style/'));
});
gulp.task("webserver",function(){
  gulp.src("./")
   .pipe(webserver({
      port:9898,
      directoryListing:{
        enable:true,
        paths:"./"
      },
      livereload:true //保存后立即执行
    }));
});
gulp.task('watchFile', function () {
  gulp.src('*.html').pipe(connect.reload());
  gulp.src('*.js').pipe(connect.reload());
  gulp.src('**/*.js').pipe(connect.reload());
  gulp.src('**/*.html').pipe(connect.reload());
  gulp.src('**/**/*.html').pipe(connect.reload());
  gulp.src('**/**/*.js').pipe(connect.reload());
  gulp.src('**/**/*.less').pipe(connect.reload());
  gulp.src('**/**/**/*.less').pipe(connect.reload());
});

gulp.task('testWatch', function () {
  gulp.watch('public/style/app.less', ['testLess']);
    gulp.watch('public/style/less/*.less', ['testLess']);
});

gulp.task('default', ["webserver",'testLess',"testWatch",'watchFile']);