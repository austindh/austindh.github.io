var gulp = require( 'gulp' );
var wrap = require( 'gulp-wrap' );
var handlebars = require( 'gulp-handlebars' );
var declare = require( 'gulp-declare' );
var concat = require( 'gulp-concat' );
var sass = require( 'gulp-sass' );
var autoprefixer = require('gulp-autoprefixer');

gulp.task( 'default', function() {
	gulp.start( 'templates', 'css', 'watch' );
});

gulp.task( 'templates', function() {
	gulp.src( 'Templates/*.hbs' )
		.pipe( handlebars() )
		.pipe( wrap( 'Handlebars.template(<%= contents %>)' ) )
		.pipe( declare({
			  namespace: 'templates',
			  noRedeclare: true, // Avoid duplicate declarations
		}))
		.pipe( concat( 'compiled-templates.js' ) )
		.pipe( gulp.dest( '' ) );
		//.pipe( notify({ message: 'Templates compiled' }));
});

gulp.task( 'css', function() {
	gulp.src( 'Sass files/*.scss' )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( concat( 'site.css' ) )
		.pipe( autoprefixer({
			browsers: [ 'last 2 versions' ],
			cascade: false
		}) )
		.pipe( gulp.dest( '' ) );
});

gulp.task( 'watch', function() {
	gulp.watch( 'Sass files/*.scss', [ 'css' ] );
	gulp.watch( 'Templates/*.hbs', [ 'templates' ] );
});
