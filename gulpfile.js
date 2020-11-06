const { src, dest, task, series } = require('gulp');
const posthtml = require('gulp-posthtml');
const posthtmlInlineAssets = require('posthtml-inline-assets');
const inlineFonts = require('gulp-inline-fonts');

let inline_fonts = function () {
  return src(['src/assets/fonts/*.woff'])
    .pipe(inlineFonts({ name: 'WorkSansRegular' }))
    .pipe(dest('src'));
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
  inline_fonts,
  inline_js_css
);