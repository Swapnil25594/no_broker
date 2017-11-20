"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');
const gulpIf = require('gulp-if');
const rename = require('gulp-rename');
const cssmin = require('gulp-minify-css');
const concat = require('gulp-concat');
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const browserify = require('gulp-browserify');
const stringify = require('stringify');
const uglify = require('gulp-uglify');
const ngAnnotate = require('gulp-ng-annotate');

const options = {
    env: 'development',
    outputClientDir: 'build/',
    css: ['./css/no_broker.css']
};

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
    return del(["./build"], cb);
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src("src/**/*.ts")
        .pipe(tslint({
            formatter: 'prose'
        }))
        .pipe(tslint.report());
});

gulp.task('assets', () => {
    return gulp.src('./media/**/*')
        .pipe(gulp.dest(options.outputClientDir + '/media'));
});

gulp.task('viewer', () => {
    return gulp.src('src/Viewer/**/*.*')
        .pipe(gulp.dest(options.outputClientDir + '/Viewer'));
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], () => {
    let tsResult = gulp.src("src/**/*.ts")
        .pipe(sourcemaps.init())
        .pipe(tsProject());
    return tsResult.js
        .pipe(sourcemaps.write(".", { sourceRoot: '/src' }))
        .pipe(gulp.dest("build"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
    return gulp.src(["src/**/*", "!**/*.ts"])
        .pipe(gulp.dest("build"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
    return gulp.src([
        'core-js/client/shim.min.js',
        'systemjs/dist/system-polyfills.js',
        'systemjs/dist/system.src.js',
        'reflect-metadata/Reflect.js',
        'rxjs/**/*.js',
        'zone.js/dist/**',
        '@angular/**/bundles/**',
        'ng4-geoautocomplete/bundles/**',
        'ng2-styled-directive/**',
        'ng2-slideable-directive/**',
        'ngx-scroll-event/**'
    ], { cwd: "node_modules/**" }) /* Glob required here. */
        .pipe(gulp.dest("build/lib"));
});

gulp.task('css', () => {
    var config = {};
    return gulp.src(options.css)
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(options.outputClientDir + '/css'))
        .pipe(notify({
            title: 'Gulp',
            subtitle: 'success',
            message: 'Css task completed',
            sound: "Pop"
        }));
});
/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function () {
    gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch(['css/**/*.css'], ['css']).on('change', function (e) {
        console.log('CSS file ' + e.path + ' has been changed. Updating.');
    });
    gulp.watch(['resources/**/*'], ['assets']).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});


/**
 * Build the project.
 */
gulp.task("build", ['compile', 'resources', 'libs', 'assets', 'viewer', 'css'], () => {
    console.log("Building the project ...");
});

gulp.task('default', ['build', 'watch']);