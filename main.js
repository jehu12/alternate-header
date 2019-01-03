// ALTERNATE HEADER

$(document).ready(function() {
 		var headerPosition = $('#main-nav-container').position().top;

	$(window).on('scroll', function () {
	    var scrollPosition = $(window).scrollTop();
	    
	    if (scrollPosition > headerPosition) {
	        $('#main-nav-container').addClass('navbar-shrink');
	    } 

	    else {
	        $('#main-nav-container').removeClass('navbar-shrink');
		}
	});
 });


// BACK TO TOP
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
    	$('#return-to-top').fadeIn(200);    // Fade in the arrow
    		} else {
    		$('#return-to-top').fadeOut(200);   // Else fade out the arrow
    	}
	});

	$('#return-to-top').click(function() {      // When arrow is clicked
    	$('body,html').animate({
        	scrollTop : 0                       // Scroll to top of body
    	}, 500);
});