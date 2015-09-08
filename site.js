//Load resume information and load into template
var resumeTemplate = this.templates.resume;
$.getJSON( 'resumeInfo.json', function( data ) {

	var resumeInfo = data;
	$( '.resume' ).html( resumeTemplate( resumeInfo ) );

	//jQuery events
	$( '.job' ).on( 'click', function() {
		$( '.currentJob' ).removeClass( 'currentJob' );
		$( '.flexFullRow' ).removeClass( 'flexFullRow' );
		$( this ).addClass( 'currentJob' );

	});

});
