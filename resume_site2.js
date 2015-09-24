//Load resume information and load into template
var resumeTemplate = this.templates.resume;

Handlebars.registerHelper( 'languageName', function( name ) {
	if ( name === 'C++' ) {
		return 'Cpp';
	}
	if ( name === 'C#' ) {
		return 'Csharp';
	}
	return name;
});

$.getJSON( 'Resume/resumeInfo.json', function( data ) {

	var resumeInfo = data;
	$( '.resume' ).html( resumeTemplate( resumeInfo ) );

	//jQuery events
	$( '.job' ).on( 'click', function() {
		if ( $( this ).hasClass( 'currentJob' ) ) {
			return;
		}
		var job = this;

		//TODO clean this up
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

	//When hovering over class, highlight used languages
	$( '.course' ).on( 'mouseenter', function() {
		$( '.language, .course' ).addClass( 'dim' );
		$( this ).removeClass( 'dim' );
		var classList = $( this )[0].classList;
		for ( var i = 0; i < classList.length; i++ ) {
			var className = classList[i];
			$( '.language.' + className ).addClass( 'selected' ).removeClass( 'dim' );
		}

	});
	$( '.course' ).on( 'mouseleave', function() {
		$( '.selected, .dim' ).removeClass( 'selected dim' );
	});

	//Same thing, but maps language to courses
	$( '.language' ).on( 'mouseenter', function() {
		$( '.language, .course' ).addClass( 'dim' );
		$( this ).removeClass( 'dim' );
		var classList = $( this )[0].classList;
		for ( var i = 0; i < classList.length; i++ ) {
			var className = classList[i];
			$( '.course.' + className ).addClass( 'selected' ).removeClass( 'dim' );
		}

	});
	$( '.language' ).on( 'mouseleave', function() {
		$( '.selected, .dim' ).removeClass( 'selected dim' );
	});

});

//TODO Add in relevant class/work/personal projects for each language
//TODO Add list of classes taken/currently enrolled in (probably replace applications)
