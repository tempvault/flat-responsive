$( document ).ready(function() {
	$('.navbar-btn').click(function() {
		if ( $('.main-menu').is( ':hidden' ) ) {
			$( '.main-menu' ).slideDown( 'slow' );
		} else {
			$( '.main-menu' ).slideUp('slow');
		}
	});
	var windowWidth = $( window ).width();
	if (windowWidth < 480) {
		$('.main-menu').hide();
	}
	
	$( window ).resize(function() {
		var windowWidth = $( window ).width();
		//$('#ww').text( "The window width is " + windowWidth + "px." );
		if (windowWidth >= 480) {
			$('.main-menu').show();
		}
		else {
			$('.main-menu').hide();
		}

	});
});
