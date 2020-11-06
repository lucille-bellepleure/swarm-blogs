const { src, dest, task, series } = require('gulp');
const posthtml = require('gulp-posthtml');
const posthtmlInlineAssets = require('posthtml-inline-assets');
const inlineFonts = require('gulp-inline-fonts');

let inline_fonts1 = function () {
  return src(['src/assets/fonts/IBMPlexMonoRegular.woff'])
    .pipe(inlineFonts({ name: 'IBMPlexMonoRegular' }))
    .pipe(dest('generated-fonts'));
};

let inline_fonts2 = function () {
  return src(['src/assets/fonts/IBMPlexMono500.woff'])
    .pipe(inlineFonts({ name: 'IBMPlexMono500' }))
    .pipe(dest('generated-fonts'));
};

let inline_fonts3 = function () {
  return src(['src/assets/fonts/IBMPlexMono600.woff'])
    .pipe(inlineFonts({ name: 'IBMPlexMono600' }))
    .pipe(dest('generated-fonts'));
};

let inline_fonts4 = function () {
  return src(['src/assets/fonts/WorkSans500.woff'])
    .pipe(inlineFonts({ name: 'WorkSans500' }))
    .pipe(dest('generated-fonts'));
};

let inline_js_css = function () {
  return src('src/*.html')
    .pipe(
      posthtml([
        posthtmlInlineAssets({
          cwd: 'src'
        })
      ])
    ).pipe(dest('dist/'));
};

// exports.inline_js_css = inline_js_css;
exports.default = series(
  inline_fonts1,
  inline_fonts2,
  inline_fonts3,
  inline_fonts4,
  inline_js_css
);