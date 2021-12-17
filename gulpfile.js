 
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sourcemaps = require('gulp-sourcemaps');
const rename = require("gulp-rename")
const del = require("del")
const concat = require("gulp-concat")

const browsersync = require("browser-sync")

function browserSyncReload(done) {
    browsersync.reload();
    done();
  }
  

  function clean() {
    return del(["./dist/"]);
  }
  
function browserSync(done) {
    browsersync.init({
      server: {
        baseDir: "./"
      },
      port: 3000
    });
    done();
  }
  
//funcao gulp css ele pega todos o  css concatena em um só e minifica
  function css(){
      return gulp.src('./assets/css/*.css')
          .pipe(sourcemaps.init())
          .pipe(concat('all.css'))
          .pipe(cleanCSS())
          .pipe(sourcemaps.write())
          .pipe(rename({
            suffix: ".min"
          }))
          .pipe(gulp.dest('dist/css'))
          
          .pipe(browsersync.stream());
    }
  
  

      //funcao para assistir as mudanças dos arquivos
      function watchFiles() {
        gulp.watch("./assets/css/*.css", css);
        gulp.watch("./*.js", browserSyncReload);
      }

      const assetsDirectory = gulp.series(clean);
      const build = gulp.series(assetsDirectory, gulp.parallel(css));
      const watch = gulp.series(build, gulp.parallel(watchFiles, browserSync));
      
      
      exports.watch = watch;
      exports.css = css;
      exports.build = build;
      exports.assetsDirectory = assetsDirectory
      exports.clean = clean;
      exports.default = build;

      
 