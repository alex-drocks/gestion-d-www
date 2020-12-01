const gulp = require("gulp");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const clean = require("gulp-clean");

function optimizeImages() {
  return gulp.src("_imagesToOptimize/*")
    .pipe(imagemin([
        imagemin.optipng({ optimizationLevel: 7 }),
        imagemin.mozjpeg({ quality: 82, progressive: true })
      ])
    )
    .pipe(gulp.dest("src/images/"))
    .pipe(webp())
    .pipe(gulp.dest("src/images/"));
}

function optimizeIcons() {
  return gulp.src("_iconsToOptimize/*")
    .pipe(imagemin([
        imagemin.optipng({ optimizationLevel: 7 }),
        imagemin.mozjpeg({ quality: 82, progressive: true })
      ])
    )
    .pipe(gulp.dest("public/icons/"));
}


function moveImagesToOriginals() {
  return gulp.src("_imagesToOptimize/*")
    .pipe(gulp.dest("_originalRawImages/"));
}

function moveIconsToOriginals() {
  return gulp.src("_iconsToOptimize/*")
    .pipe(gulp.dest("_originalRawImages/"));
}

function cleanImagesToOptimizeFolder() {
  return gulp.src("_imagesToOptimize/*", { read: false })
    .pipe(clean({ force: true }));
}

function cleanIconsToOptimizeFolder() {
  return gulp.src("_iconsToOptimize/*", { read: false })
    .pipe(clean({ force: true }));
}

exports.optimizeImages = gulp.series(
  optimizeImages,
  moveImagesToOriginals,
  cleanImagesToOptimizeFolder
);

exports.optimizeIcons = gulp.series(
  optimizeIcons,
  moveIconsToOriginals,
  cleanIconsToOptimizeFolder
);
