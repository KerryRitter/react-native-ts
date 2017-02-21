var gulp = require("gulp");
var ts = require("gulp-typescript");
var tslint = require("gulp-tslint");

var tsProject = ts.createProject("tsconfig.json", {});
var tsSrc = ["src/**/*.ts", "src/**/*.tsx"];

gulp.task("ts:build", function() {
    return gulp.src(tsSrc)
        .pipe(tslint({
            formatter: "verbose"
        }))
        .pipe(tslint.report({
            emitError: false
        }))
        .pipe(tsProject())
        .js
        .pipe(gulp.dest("dist"))
        .on("error", function() {});
});

gulp.task("watch", function() {
    gulp.watch(tsSrc, ["ts:build"]);
})