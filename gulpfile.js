var gulp = require('gulp');

var cssDev = jsDev = htmlDev = 'develop/';
var cssProd = jsProd = htmlProd = 'app/';


/* CSS */
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');
var cssClean = require('gulp-clean-css');

/* JS & TS */
var typescript = require('gulp-typescript');

var tsProject = typescript.createProject('tsconfig.json');


gulp.task('build-css', function () {
    return gulp.src([
      cssDev + '*/*/*/*.scss',
      cssDev + '*/*/*.scss',
      cssDev + '*/*.scss',
      cssDev + '*.scss'
    ])
        .pipe(sourcemaps.init())
        .pipe(sass({}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 3 versions'],
            cascade: false
        }))
        .pipe(cssClean({compatibility: 'ie8'}))
        .pipe(gulp.dest( cssProd ));
});


gulp.task('build-ts', function () {
    return gulp.src([
      jsDev + '*/*/*/*.ts',
      jsDev + '*/*/*.ts',
      jsDev + '*/*.ts',
      jsDev + '*.ts'
    ] )
        .pipe(sourcemaps.init())
        .pipe(typescript(tsProject))
        .pipe(sourcemaps.write())
        //.pipe(jsuglify())
        .pipe(gulp.dest( jsProd ));
});

gulp.task('bundle-ts', ['build-ts'], function() {
    var path = require("path");
    var Builder = require('systemjs-builder');

// optional constructor options
// sets the baseURL and loads the configuration file
    var builder = new Builder('', 'systemjs.config.js');

    builder
        .buildStatic('app/boot.js', 'app/bundle.js', { minify: true, sourceMaps: true})
        .then(function() {
            console.log('Build complete');
        })
        .catch(function(err) {
            console.log('Build error');
            console.log(err);
        });
});

gulp.task('watch', function () {
    gulp.watch([
      jsDev + '*/*/*/*.ts',
      jsDev + '*/*/*.ts',
      jsDev + '*/*.ts',
      jsDev + '*.ts'
    ],['build-ts']);
    gulp.watch([
      cssDev + '*/*/*/*.scss',
      cssDev + '*/*/*.scss',
      cssDev + '*/*.scss',
      cssDev + '*.scss'
    ], ['build-css']);
    gulp.watch([
       htmlDev+'*/*/*/*.html',
       htmlDev+'*/*/*.html',
       htmlDev+'*/*.html',
       htmlDev+'*.html'
     ], ['html-dest']);
});

gulp.task('html-dest', function() {
   gulp.src([
      htmlDev+'*/*/*/*.html',
      htmlDev+'*/*/*.html',
      htmlDev+'*/*.html',
      htmlDev+'*.html'
    ])
      .pipe(gulp.dest(htmlProd));
});

gulp.task('default', ['watch', 'build-ts', 'bundle-ts', 'build-css', 'html-dest']);
