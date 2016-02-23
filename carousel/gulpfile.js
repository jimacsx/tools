//tareas a realizar
var gulp = require('gulp'),
	 minifycss = require('gulp-minify-css'),
	 sass = require('gulp-sass'),
	 browserSync = require('browser-sync'),
	 reload = browserSync.reload,
	 rename = require('gulp-rename'),
	 concat = require('gulp-concat');

//configuración de variables
var config = {
	sass: [ 'sass/**/*.sass' ],
	css: 	[ 'css/'],
	html: [ '*.html'],
	src: 	[ '' ]
};

//Tarea Estilos
gulp.task('estilos', function() {
	return gulp.src(config.sass)
				  .pipe(sass()
				  .on('error', sass.logError))
				  //.pipe(minifycss())
				  //.pipe(rename({suffix: '.min'}))
				  .pipe(gulp.dest(''+config.css+''))
				  .pipe(reload({stream:true}));
});

//Tarea html
gulp.task('html', function() {
	return gulp.src(config.html)
				  .pipe(reload({stream:true}));
});


//Tarea browser-sync
gulp.task('browserSync', function() {
	browserSync({
		server: {
			baseDir: config.src
		}
	});
});

//Tarea Watch
gulp.task('watch', function() {
	gulp.watch(config.sass, ['estilos']);
	gulp.watch(config.html, ['html']);
});

//Tarea Gulp Default
gulp.task('default', ['watch', 'browserSync', 'estilos', 'html']);
