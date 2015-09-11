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
	gulp.src( 'Resume/Templates/*.hbs' )
		.pipe( handlebars() )
		.pipe( wrap( 'Handlebars.template(<%= contents %>)' ) )
		.pipe( declare({
			  namespace: 'templates',
			  noRedeclare: true, // Avoid duplicate declarations
		}))
		.pipe( concat( 'Resume/compiled-templates.js' ) )
		.pipe( gulp.dest( '' ) );
		//.pipe( notify({ message: 'Templates compiled' }));
});

gulp.task( 'css', function() {
	gulp.src( 'Resume/Sass files/*.scss' )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( concat( 'site.css' ) )
		.pipe( autoprefixer({
			browsers: [ 'last 2 versions' ],
			cascade: false
		}) )
		.pipe( gulp.dest( 'Resume/' ) );
});

gulp.task( 'watch', function() {
	gulp.watch( 'Resume/Sass files/*.scss', [ 'css' ] );
	gulp.watch( 'Resume/Templates/*.hbs', [ 'templates' ] );
});
