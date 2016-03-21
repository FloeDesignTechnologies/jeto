var sourcemaps  = require("gulp-sourcemaps");
var babel       = require("gulp-babel");
var rename      = require('gulp-rename');
var bundler     = require('aurelia-bundler');

gulp.task('babel', function () {
    return gulp.src('js/**/*.js', { base: '.' })
        .pipe(sourcemaps.init())
        .pipe(babel({ stage: 1 }))
        .pipe(sourcemaps.write('.'))
});

gulp.task('bundle', function() {
    return bundler.bundle({
        force: true,
        packagePath: '.',
        bundles: {
            "app/app-bundle": {
                includes: [
                    '**/*',
                    '*.html!text'
                ],
                options: {
                    inject: true,
                    minify: true
                }
            },
            "app/aurelia-bundle": {
                includes: [
                    'aurelia-bootstrapper',
                    "aurelia-fetch-client",
                    "npm:aurelia-templating@^1.0.0-beta.1.1.4",
                    "npm:aurelia-templating-binding@^1.0.0-beta.1.1.2",
                    "npm:aurelia-templating-resources@^1.0.0-beta.1.1.3",
                    "npm:aurelia-loader-default@^1.0.0-beta.1.1.3",
                    'github:aurelia/loader-default@0.8.0',
                    "github:github/fetch@^0.11.0",
                    "github:systemjs/plugin-text@^0.0.7"
                ],
                options: {
                    inject: true,
                    minify: true
                }
            }
        }
    });
});