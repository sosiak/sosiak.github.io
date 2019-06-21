$(document).ready(function() {
// all divs height
	var oneH = $('#about-me').innerHeight();
	var twoH = $('#skills').innerHeight();
	var threeH = $('#portfolio').innerHeight();

$(window).scroll(function() {    
//nav scroll    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("#one").addClass("active");
    }
    else { 
        $('#one').removeClass('active');
    }

    if (scroll >= oneH) {
        $('#one').removeClass('active');
        $("#two").addClass("active");
    }
    else { 
        $('#two').removeClass('active');
    }
    if (scroll >= oneH + twoH) {
        $('#two').removeClass('active');
        $("#three").addClass("active");
    }
    else { 
        $('#three').removeClass('active');
    }
    if (scroll >= oneH + twoH + threeH) {
        $('#three').removeClass('active');
        $("#four").addClass("active");
    }
    else { 
        $('#four').removeClass('active');
    }
});
//nav click
	$('a[href^="#"]').on('click', function(event) {
	
		var target = $( $(this).attr('href') );
	
		if( target.length ) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: target.offset().top
			}, 1000);
		}
	});

//click color
	 $(".red").click(function() {
	 	$(".navbar").css({"background": "#c0392b"});
	 	$(".navbar li a").css({"color": "#FFDAD6"});
	 	$(".navbar li a").hover(function () {
	 		$(this).css("background", "#FFDAD6");
	 		$(this).css("color", "#c0392b");}, function() {
	 		$(this).css("background", "transparent");
	 		$(this).css("color", "#FFDAD6");
	 		});
	 	$(".navbar-toggle").css({"border": "solid 1px #FFDAD6"});
	 	$(".icon-bar").css({"background": "#FFDAD6"});
	 	$(".navbar .navbar-brand .surname").css({"color": "#FFDAD6"});
	 	$(".color").css({"background": "#FFDAD6"});
	 	$(".color h2").css({"color": "#c0392b"});
	 	$(".about-me").css({"background": "#FFDAD6"});
	 	$(".about-me-paragraph p").css({"color": "#c0392b"});
	 	$(".skills").css({"background": "#c0392b"});
	 	$(".skills .row").css({"border-color": "#FFDAD6"});
	 	$(".skills-head h1").css({"background": "#c0392b", "color": "#FFDAD6"});
	 	$(".overlay").css({"background": "#c0392b", "border-color": "#FFDAD6"});
	 	$(".skills-image").css({"border-color": "#c0392b"});
	 	$(".portfolio").css({"background": "#FFDAD6"});
	 	$(".portfolio .row").css({"border-color": "#c0392b"});
	 	$(".portfolio-head h1").css({"background": "#FFDAD6", "color": "#c0392b"});
	 	$(".portfolio-image").css({"border-color": "#FFDAD6"});
	 	$(".overlay-icon a").css({"color": "#9B2114", "background": "#FFDAD6"});
	 	$(".overlay-icon a").hover(function() {
	 		$(this).css("background", "#9B2114");
	 		$(this).css("color", "#FFDAD6");}, function() {
	 		$(this).css("background", "#FFDAD6");
	 		$(this).css("color", "#9B2114");
	 	});
	 	$(".contact").css({"background": "#c0392b"});
	 	$(".contact-border").css({"border-color": "#FFDAD6"});
	 	$(".contact-head h1").css({"background": "#c0392b", "color": "#FFDAD6"});
	 	$(".answer").css({"color": "#FFDAD6"});
	 	$(".answer a").css({"color": "#FFDAD6"});
	 	$(".answer a").hover(function() {
	 		$(this).css("color", "#720B00");}, function() {
	 		$(this).css("color", "#FFDAD6");
	 	});
	 	$(".contact-form h1").css({"color": "#FFDAD6"});
	 	$(".contact-form input").css({"color": "#c0392b", "background": "#FFDAD6", "border-color": "#FFDAD6"});
		$(".contact-form textarea").css({"color": "#c0392b", "background": "#FFDAD6", "border-color": "#FFDAD6"});
		$(".contact-form button").css({"color": "#c0392b", "background": "#FFDAD6", "border-color": "#FFDAD6"});
		$(".contact-form button").hover(function() {
			$(this).css("background", "#c0392b");
			$(this).css("color", "#FFDAD6");}, function() {
			$(this).css("background", "#FFDAD6");
			$(this).css("color", "#c0392b");	
		});	 	
	 });

	 $(".green").click(function() {
	 	$(".navbar").css({"background": "#1D8013"});
	 	$(".navbar li a").css({"color": "#94ED8B"});
	 	$(".navbar li a").hover(function () {
	 		$(this).css("background", "#94ED8B");
	 		$(this).css("color", "#1D8013");}, function() {
	 		$(this).css("background", "transparent");
	 		$(this).css("color", "#94ED8B");
	 		});
	 	$(".navbar-toggle").css({"border": "solid 1px #94ED8B"});
	 	$(".icon-bar").css({"background": "#94ED8B"});
	 	$(".navbar .navbar-brand .surname").css({"color": "#94ED8B"});
	 	$(".color").css({"background": "#94ED8B"});
	 	$(".color h2").css({"color": "#1D8013"});
	 	$(".about-me").css({"background": "#94ED8B"});
	 	$(".about-me-paragraph p").css({"color": "#1D8013"});
	 	$(".skills").css({"background": "#1D8013"});
	 	$(".skills .row").css({"border-color": "#94ED8B"});
	 	$(".skills-head h1").css({"background": "#1D8013", "color": "#94ED8B"});
	 	$(".skills-image").css({"border-color": "#1D8013"});
	 	$(".overlay").css({"background": "#1D8013", "border-color": "#94ED8B"});
	 	$(".portfolio").css({"background": "#94ED8B"});
	 	$(".portfolio .row").css({"border-color": "#1D8013"});
	 	$(".portfolio-head h1").css({"background": "#94ED8B", "color": "#1D8013"});
	 	$(".portfolio-image").css({"border-color": "#94ED8B"});
	 	$(".overlay-icon a").css({"color": "#9B2114", "background": "#94ED8B"});
	 	$(".overlay-icon a").hover(function() {
	 		$(this).css("background", "#005500");
	 		$(this).css("color", "#94ED8B");}, function() {
	 		$(this).css("background", "#94ED8B");
	 		$(this).css("color", "#005500");
	 	});
	 	$(".contact").css({"background": "#1D8013"});
	 	$(".contact-border").css({"border-color": "#94ED8B"});
	 	$(".contact-head h1").css({"background": "#1D8013", "color": "#94ED8B"});
	 	$(".answer").css({"color": "#94ED8B"});
	 	$(".answer a").css({"color": "#94ED8B"});
	 	$(".answer a").hover(function() {
	 		$(this).css("color", "#005500");}, function() {
	 		$(this).css("color", "#94ED8B");
	 	});
	 	$(".contact-form h1").css({"color": "#94ED8B"});
	 	$(".contact-form input").css({"color": "#1D8013", "background": "#94ED8B", "border-color": "#94ED8B"});
		$(".contact-form textarea").css({"color": "#1D8013", "background": "#94ED8B", "border-color": "#94ED8B"});
		$(".contact-form button").css({"color": "#1D8013", "background": "#94ED8B", "border-color": "#94ED8B"});
		$(".contact-form button").hover(function() {
			$(this).css("background", "#1D8013");
			$(this).css("color", "#94ED8B");}, function() {
			$(this).css("background", "#94ED8B");
			$(this).css("color", "#1D8013");	
		});
	 });

	 $(".orange").click(function() {
	 	$(".navbar").css({"background": "#e67e22"});
	 	$(".navbar li a").css({"color": "#FFF2E6"});
	 	$(".navbar li a").hover(function () {
	 		$(this).css("background", "#FFF2E6");
	 		$(this).css("color", "#e67e22");}, function() {
	 		$(this).css("background", "transparent");
	 		$(this).css("color", "#FFF2E6");
	 		});
	 	$(".navbar-toggle").css({"border": "solid 1px #FFF2E6"});
	 	$(".icon-bar").css({"background": "#FFF2E6"});
	 	$(".navbar .navbar-brand .surname").css({"color": "#FFF2E6"});
	 	$(".color").css({"background": "#FFF2E6"});
	 	$(".color h2").css({"color": "#e67e22"});
	 	$(".about-me").css({"background": "#FFF2E6"});
	 	$(".about-me-paragraph p").css({"color": "#e67e22"});
	 	$(".skills").css({"background": "#e67e22"});
	 	$(".skills .row").css({"border-color": "#FFF2E6"});
	 	$(".skills-head h1").css({"background": "#e67e22", "color": "#FFF2E6"});
	 	$(".skills-image").css({"border-color": "#e67e22"});
	 	$(".overlay").css({"background": "#e67e22", "border-color": "#FFF2E6"});
	 	$(".portfolio").css({"background": "#FFF2E6"});
	 	$(".portfolio .row").css({"border-color": "#e67e22"});
	 	$(".portfolio-head h1").css({"background": "#FFF2E6", "color": "#e67e22"});
	 	$(".portfolio-image").css({"border-color": "#FFF2E6"});
	 	$(".overlay-icon a").css({"color": "#9B2114", "background": "#FFF2E6"});
	 	$(".overlay-icon a").hover(function() {
	 		$(this).css("background", "#924500");
	 		$(this).css("color", "#FFF2E6");}, function() {
	 		$(this).css("background", "#FFF2E6");
	 		$(this).css("color", "#924500");
	 	});
	 	$(".contact").css({"background": "#e67e22"});
	 	$(".contact-border").css({"border-color": "#FFF2E6"});
	 	$(".contact-head h1").css({"background": "#e67e22", "color": "#FFF2E6"});
	 	$(".answer").css({"color": "#FFF2E6"});
	 	$(".answer a").css({"color": "#FFF2E6"});
	 	$(".answer a").hover(function() {
	 		$(this).css("color", "#924500");}, function() {
	 		$(this).css("color", "#FFF2E6");
	 	});
	 	$(".contact-form h1").css({"color": "#FFF2E6"});
	 	$(".contact-form input").css({"color": "#e67e22", "background": "#FFF2E6", "border-color": "#FFF2E6"});
		$(".contact-form textarea").css({"color": "#e67e22", "background": "#FFF2E6", "border-color": "#FFF2E6"});
		$(".contact-form button").css({"color": "#e67e22", "background": "#FFF2E6", "border-color": "#FFF2E6"});
		$(".contact-form button").hover(function() {
			$(this).css("background", "#e67e22");
			$(this).css("color", "#FFF2E6");}, function() {
			$(this).css("background", "#FFF2E6");
			$(this).css("color", "#e67e22");	
		});
	 });

	 $(".pink").click(function() {
	 	$(".navbar").css({"background": "#BF45A1"});
	 	$(".navbar li a").css({"color": "#FAD8F1"});
	 	$(".navbar li a").hover(function () {
	 		$(this).css("background", "#FAD8F1");
	 		$(this).css("color", "#BF45A1");}, function() {
	 		$(this).css("background", "transparent");
	 		$(this).css("color", "#FAD8F1");
	 		});
	 	$(".navbar-toggle").css({"border": "solid 1px #FAD8F1"});
	 	$(".icon-bar").css({"background": "#FAD8F1"});
	 	$(".navbar .navbar-brand .surname").css({"color": "#FAD8F1"});
	 	$(".color").css({"background": "#FAD8F1"});
	 	$(".color h2").css({"color": "#BF45A1"});
	 	$(".about-me").css({"background": "#FAD8F1"});
	 	$(".about-me-paragraph p").css({"color": "#BF45A1"});
	 	$(".skills").css({"background": "#BF45A1"});
	 	$(".skills .row").css({"border-color": "#FAD8F1"});
	 	$(".skills-head h1").css({"background": "#BF45A1", "color": "#FAD8F1"});
	 	$(".skills-image").css({"border-color": "#BF45A1"});
	 	$(".overlay").css({"background": "#BF45A1", "border-color": "#FAD8F1"});
	 	$(".portfolio").css({"background": "#FAD8F1"});
	 	$(".portfolio .row").css({"border-color": "#BF45A1"});
	 	$(".portfolio-head h1").css({"background": "#FAD8F1", "color": "#BF45A1"});
	 	$(".portfolio-image").css({"border-color": "#FAD8F1"});
	 	$(".overlay-icon a").css({"color": "#9B2114", "background": "#FAD8F1"});
	 	$(".overlay-icon a").hover(function() {
	 		$(this).css("background", "#190323");
	 		$(this).css("color", "#FAD8F1");}, function() {
	 		$(this).css("background", "#FAD8F1");
	 		$(this).css("color", "#190323");
	 	});
	 	$(".contact").css({"background": "#BF45A1"});
	 	$(".contact-border").css({"border-color": "#FAD8F1"});
	 	$(".contact-head h1").css({"background": "#BF45A1", "color": "#FAD8F1"});
	 	$(".answer").css({"color": "#FAD8F1"});
	 	$(".answer a").css({"color": "#FAD8F1"});
	 	$(".answer a").hover(function() {
	 		$(this).css("color", "#190323");}, function() {
	 		$(this).css("color", "#FAD8F1");
	 	});
	 	$(".contact-form h1").css({"color": "#FAD8F1"});
	 	$(".contact-form input").css({"color": "#BF45A1", "background": "#FAD8F1", "border-color": "#FAD8F1"});
		$(".contact-form textarea").css({"color": "#BF45A1", "background": "#FAD8F1", "border-color": "#FAD8F1"});
		$(".contact-form button").css({"color": "#BF45A1", "background": "#FAD8F1", "border-color": "#FAD8F1"});
		$(".contact-form button").hover(function() {
			$(this).css("background", "#BF45A1");
			$(this).css("color", "#FAD8F1");}, function() {
			$(this).css("background", "#FAD8F1");
			$(this).css("color", "#BF45A1");	
		});
	 });

	 $(".blue").click(function() {
	 	$(".navbar").css({"background": "#0F4AB6"});
	 	$(".navbar li a").css({"color": "#D9E6FF"});
	 	$(".navbar li a").hover(function () {
	 		$(this).css("background", "#D9E6FF");
	 		$(this).css("color", "#0F4AB6");}, function() {
	 		$(this).css("background", "transparent");
	 		$(this).css("color", "#D9E6FF");
	 		});
	 	$(".navbar-toggle").css({"border": "solid 1px #D9E6FF"});
	 	$(".icon-bar").css({"background": "#D9E6FF"});
	 	$(".navbar .navbar-brand .surname").css({"color": "#D9E6FF"});
	 	$(".color").css({"background": "#D9E6FF"});
	 	$(".color h2").css({"color": "#0F4AB6"});
	 	$(".about-me").css({"background": "#D9E6FF"});
	 	$(".about-me-paragraph p").css({"color": "#0F4AB6"});
	 	$(".skills").css({"background": "#0F4AB6"});
	 	$(".skills .row").css({"border-color": "#D9E6FF"});
	 	$(".skills-head h1").css({"background": "#0F4AB6", "color": "#D9E6FF"});
	 	$(".skills-image").css({"border-color": "#0F4AB6"});
	 	$(".overlay").css({"background": "#0F4AB6", "border-color": "#D9E6FF"});
	 	$(".portfolio").css({"background": "#D9E6FF"});
	 	$(".portfolio .row").css({"border-color": "#0F4AB6"});
	 	$(".portfolio-head h1").css({"background": "#D9E6FF", "color": "#0F4AB6"});
	 	$(".portfolio-image").css({"border-color": "#D9E6FF"});
	 	$(".overlay-icon a").css({"color": "#9B2114", "background": "#D9E6FF"});
	 	$(".overlay-icon a").hover(function() {
	 		$(this).css("background", "#190323");
	 		$(this).css("color", "#D9E6FF");}, function() {
	 		$(this).css("background", "#D9E6FF");
	 		$(this).css("color", "#190323");
	 	});
	 	$(".contact").css({"background": "#0F4AB6"});
	 	$(".contact-border").css({"border-color": "#D9E6FF"});
	 	$(".contact-head h1").css({"background": "#0F4AB6", "color": "#D9E6FF"});
	 	$(".answer").css({"color": "#D9E6FF"});
	 	$(".answer a").css({"color": "#D9E6FF"});
	 	$(".answer a").hover(function() {
	 		$(this).css("color", "#190323");}, function() {
	 		$(this).css("color", "#D9E6FF");
	 	});
	 	$(".contact-form h1").css({"color": "#D9E6FF"});
	 	$(".contact-form input").css({"color": "#0F4AB6", "background": "#D9E6FF", "border-color": "#D9E6FF"});
		$(".contact-form textarea").css({"color": "#0F4AB6", "background": "#D9E6FF", "border-color": "#D9E6FF"});
		$(".contact-form button").css({"color": "#0F4AB6", "background": "#D9E6FF", "border-color": "#D9E6FF"});
		$(".contact-form button").hover(function() {
			$(this).css("background", "#0F4AB6");
			$(this).css("color", "#D9E6FF");}, function() {
			$(this).css("background", "#D9E6FF");
			$(this).css("color", "#0F4AB6");	
		});
	 });

	 $(".dark-blue").click(function() {
	 	$(".navbar").css({"background": "#292C48"});
	 	$(".navbar li a").css({"color": "#CECFD3"});
	 	$(".navbar li a").hover(function () {
	 		$(this).css("background", "#CECFD3");
	 		$(this).css("color", "#292C48");}, function() {
	 		$(this).css("background", "transparent");
	 		$(this).css("color", "#CECFD3");
	 		});
	 	$(".navbar-toggle").css({"border": "solid 1px #CECFD3"});
	 	$(".icon-bar").css({"background": "#CECFD3"});
	 	$(".navbar .navbar-brand .surname").css({"color": "#CECFD3"});
	 	$(".color").css({"background": "#CECFD3"});
	 	$(".color h2").css({"color": "#292C48"});
	 	$(".about-me").css({"background": "#CECFD3"});
	 	$(".about-me-paragraph p").css({"color": "#292C48"});
	 	$(".skills").css({"background": "#292C48"});
	 	$(".skills .row").css({"border-color": "#CECFD3"});
	 	$(".skills-head h1").css({"background": "#292C48", "color": "#CECFD3"});
	 	$(".skills-image").css({"border-color": "#292C48"});
	 	$(".overlay").css({"background": "#292C48", "border-color": "#CECFD3"});
	 	$(".portfolio").css({"background": "#CECFD3"});
	 	$(".portfolio .row").css({"border-color": "#292C48"});
	 	$(".portfolio-head h1").css({"background": "#CECFD3", "color": "#292C48"});
	 	$(".portfolio-image").css({"border-color": "#CECFD3"});
	 	$(".overlay-icon a").css({"color": "#9B2114", "background": "#CECFD3"});
	 	$(".overlay-icon a").hover(function() {
	 		$(this).css("background", "#190323");
	 		$(this).css("color", "#CECFD3");}, function() {
	 		$(this).css("background", "#CECFD3");
	 		$(this).css("color", "#190323");
	 	});
	 	$(".contact").css({"background": "#292C48"});
	 	$(".contact-border").css({"border-color": "#CECFD3"});
	 	$(".contact-head h1").css({"background": "#292C48", "color": "#CECFD3"});
	 	$(".answer").css({"color": "#CECFD3"});
	 	$(".answer a").css({"color": "#CECFD3"});
	 	$(".answer a").hover(function() {
	 		$(this).css("color", "#190323");}, function() {
	 		$(this).css("color", "#CECFD3");
	 	});
	 	$(".contact-form h1").css({"color": "#CECFD3"});
	 	$(".contact-form input").css({"color": "#292C48", "background": "#CECFD3", "border-color": "#CECFD3"});
		$(".contact-form textarea").css({"color": "#292C48", "background": "#CECFD3", "border-color": "#CECFD3"});
		$(".contact-form button").css({"color": "#292C48", "background": "#CECFD3", "border-color": "#CECFD3"});
		$(".contact-form button").hover(function() {
			$(this).css("background", "#292C48");
			$(this).css("color", "#CECFD3");}, function() {
			$(this).css("background", "#CECFD3");
			$(this).css("color", "#292C48");	
		});
	 });

});