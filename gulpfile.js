const gulp = require("gulp");
const obfuscator = require("gulp-javascript-obfuscator");

function obfuscateScript() {
  return gulp
    .src("script.js") // Source file
    .pipe(obfuscator()) // Obfuscate the JavaScript
    .pipe(gulp.dest("dist")); // Output folder
}

exports.default = obfuscateScript;
