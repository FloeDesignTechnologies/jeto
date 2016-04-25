var gulp = require('gulp');
var runSequence = require('run-sequence');
var del = require('del');
var paths = require('../paths');
var bundles = require('../bundles.js');
var resources = require('../export.js');

// deletes all files in the output path
gulp.task('clean-export', function() {
  return del( [paths.exportSrv+'**/*  !'+paths.exportSrv], {force:true} )
});

function getBundles() {
  var bl = [];
  for (var b in bundles.bundles) {
    bl.push(b + '.js');
  }
  return bl;
}

function getExportList() {
  return resources.list.concat(getBundles());
}

gulp.task('export-copy', function() {
  return gulp.src(getExportList(), {base: '.'})
    .pipe(gulp.dest(paths.exportSrv));
});

// use after prepare-release
gulp.task('export', function(callback) {
  return runSequence(
    'bundle',
    'clean-export',
    'export-copy',
    callback
  );
});
