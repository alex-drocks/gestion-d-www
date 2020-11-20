const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const clean = require("gulp-clean");

function optimizeImages() {
  return gulp.src("_imagesToOptimize/*")
    .pipe(imagemin([
        imagemin.optipng({ optimizationLevel: 7 }),
        imagemin.mozjpeg({ quality: 85, progressive: true })
      ])
    )
    .pipe(webp())
    .pipe(gulp.dest("src/images/"));
  // .pipe(gulp.dest('public/icons/'))
}

function moveImagesToOriginals() {
  return gulp.src("_imagesToOptimize/*")
    .pipe(gulp.dest("_originalRawImages/"));
}

function cleanImagesToOptimizeFolder() {
  return gulp.src("_imagesToOptimize/*", { read: false })
    .pipe(clean({ force: true }));
}

exports.optimizeImages = gulp.series(
  optimizeImages,
  moveImagesToOriginals,
  cleanImagesToOptimizeFolder
);
