const gulp = require('gulp'),
sass = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
minifyCss = require('gulp-minify-css'),
rename = require('gulp-rename');

gulp.task('sass', ()=>
gulp.src('./scss/**/*.scss')
.pipe(sass({
  outputStyle: 'expanded'
}))
.pipe(autoprefixer({
  versions: ['last 2 browsers']
}))
.pipe(minifyCss({keepBreaks:true}))
.pipe(rename(function (path){
  path.basename += ".min";
  path.extname = ".css";
}))
.pipe(gulp.dest('./css/'))
);
gulp.task('default',()=>{
  gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});
