//Load resume information and load into template
var resumeTemplate = this.templates.resume;
$.getJSON( 'resumeInfo.json', function( data ) {

	var resumeInfo = data;
	$( '.resume' ).html( resumeTemplate( resumeInfo ) );

	//jQuery events
	$( '.job' ).on( 'click', function() {
		if ( $( this ).hasClass( 'currentJob' ) ) {
			return;
		}
		var job = this;

		//Check position and scroll up to current job if scrolled below
		var headerHeight = $( 'h1' ).height();
		var currentJobPosition = $( '.jobs' ).offset().top;
		var scrollPosition = $( 'body' ).scrollTop();

		var desiredScrollPosition = currentJobPosition - headerHeight - 60;

		if ( scrollPosition > desiredScrollPosition ) {

			$( 'body' ).animate( {'scrollTop': desiredScrollPosition}, 500);
		}



		var currentJob = $( '.currentJob' );
		currentJob.removeClass( 'topRow transitionRow' );
		$( job ).addClass( 'currentJob topRow' );

			setTimeout( function() {
			currentJob.removeClass( 'currentJob' );
		}, 200 );

		$( '.flexFullRow' ).removeClass( 'flexFullRow' );




	});

});

//TODO Add in relevant class/work/personal projects for each language
//TODO Add list of classes taken/currently enrolled in (probably replace applications)
