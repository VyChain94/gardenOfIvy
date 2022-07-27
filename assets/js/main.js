/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

document.getElementById("name").onchange = name
document.getElementById("email").onchange = email
document.getElementById("message").onchange = message
document.getElementById("ourwork").onmouseover = ourwork

function name(){
	document.getElementById("name").style.background="green"
	document.getElementById("name").style.color="white"
	document.getElementById("name").style.fontWeight="400"
}

function email(){
	document.getElementById("email").style.background="green"
	document.getElementById("email").style.color="white"
	document.getElementById("email").style.fontWeight="400"
}

function message(){
	document.getElementById("message").style.background="green"
	document.getElementById("message").style.color="white"
	document.getElementById("message").style.fontWeight="400"
}

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);