var gulp = require( 'gulp' );
var wrap = require( 'gulp-wrap' );
var handlebars = require( 'gulp-handlebars' );
var declare = require( 'gulp-declare' );
var concat = require( 'gulp-concat' );
var sass = require( 'gulp-sass' );
var autoprefixer = require( 'gulp-autoprefixer' );
var replace = require( 'gulp-replace' );
var del = require( 'del' );
var fs = require( 'fs' );

var versionJSON = require( './version.json' );
var VERSION = versionJSON.version;

gulp.task( 'default', function() {
	gulp.start( 'templates', 'css', 'js', 'watch' );
});

gulp.task( 'templates', function() {

	var fileName = 'resume_compiled-templates' + VERSION + '.js';

	gulp.src( 'Resume/Templates/*.hbs' )
		.pipe( handlebars() )
		.pipe( wrap( 'Handlebars.template(<%= contents %>)' ) )
		.pipe( declare({
			  namespace: 'templates',
			  noRedeclare: true, // Avoid duplicate declarations
		}))
		.pipe( concat( fileName ) )
		.pipe( gulp.dest( '' ) );
		//.pipe( notify({ message: 'Templates compiled' }));


});

var folders = [ 'Resume', 'Flow Free' ]; //TODO add Flow Free again later

gulp.task( 'css', function() {

	var fileName = 'resume_site' + VERSION + '.css';


	gulp.src( 'Resume/Sass files/**/*.scss' )
		.pipe( sass().on( 'error', sass.logError ) )
		.pipe( concat( fileName ) )
		.pipe( autoprefixer({
			browsers: [ 'last 2 versions' ],
			cascade: false
		}) )
		.pipe( gulp.dest( '' ) );

});

gulp.task( 'js', function() {

	var fileName = 'resume_site' + VERSION + '.js';

	gulp.src( 'Resume/site.js' )
		.pipe( concat( fileName ) )
		.pipe( gulp.dest('') );


});

gulp.task( 'htmlRef', function() {

	//Replace references in HTML
	gulp.src( 'index.html' )
		.pipe( replace( /resume_(.*?)\.css/, 'resume_site' + VERSION + '.css' ) )
		.pipe( replace( /resume_(site.*?).js/, 'resume_site' + VERSION + '.js' ) )
		.pipe( replace( /resume_(compiled.*?)\.js/, 'resume_compiled-templates' + VERSION + '.js' ) )
		.pipe( gulp.dest('') );

});

//Compile everything and add version number to end of CSS/JavaScript files to prevent caching
gulp.task( 'build', [ 'templates', 'css', 'js' ], function() {

	//Increment version number for next build
//	var versionNum = VERSION + 1;
//	versionJSON.version = versionNum;
//	fs.writeFile( 'version.json', JSON.stringify( versionJSON, null, 4 ), function( err ) {
//		console.log( err );
//	});

	//Delete old compiled files
	del.sync( 'resume_*.@(css|js)' );

	gulp.start( 'htmlRef' );

});


gulp.task( 'watch', function() {
	gulp.watch( 'Resume/Sass files/*.scss', [ 'css', 'htmlRef' ] );
	gulp.watch( 'Resume/Templates/*.hbs', [ 'templates' ] );
});
