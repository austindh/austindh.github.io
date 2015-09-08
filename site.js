//Load resume information and load into template
var resumeTemplate = this.templates.resume;
$.getJSON( 'resumeInfo.json', function( data ) {

	var resumeInfo = data;
	$( '.resume' ).html( resumeTemplate( resumeInfo ) );

});
