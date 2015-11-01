var gulp = require("gulp");
var process = require("child_process");
var run = require("run-sequence");
var gutil = require("gulp-util");

var server = function(path){
  stream = process.exec(`node ${path}`);

  stream.stdout.on('data', function(data){
    gutil.log(data.trim());
  });

  stream.stderr.on('data', function(data){
    gutil.log(gutil.colors.red(data.trim()));
  });
}

gulp.task("start", function() {
  run(["assets"], ["server"]);
});

gulp.task("assets", function(){
  server("webpack.server.js")
})

gulp.task("server", function(){
  server("server.js")
})
