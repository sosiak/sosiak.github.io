$(document).ready(function() {
	 $(".red").click(function() {
	 	$(".navbar").css({"background": "#c0392b"});
	 	$(".navbar li a").css({"color": "#FF9287"});
	 	$(".navbar li a").hover(function () {
	 		$(this).css("background", "#FF9287");
	 		$(this).css("color", "#c0392b");}, function() {
	 		$(this).css("background", "#c0392b");
	 		$(this).css("color", "#FF9287");
	 		});
	 	$(".navbar-toggle").css({"border": "solid 1px #FF9287"});
	 	$(".icon-bar").css({"background": "#FF9287"});
	 	$(".navbar .navbar-brand .surname").css({"color": "#FF9287"});
	 	$(".color").css({"background": "#FF9287"});
	 	$(".color h2").css({"color": "#c0392b"});
	 	$(".about-me").css({"background": "#FF9287"});
	 	$(".about-me-paragraph p").css({"color": "#c0392b"});
	 	$(".skills").css({"background": "#c0392b"});
	 	$(".skills .row").css({"border-color": "#FF9287"});
	 	$(".skills-head h1").css({"background": "#c0392b", "color": "#FF9287"});
	 	$(".overlay").css({"background": "#c0392b", "border-color": "#FF9287"});
	 	$(".portfolio").css({"background": "#FF9287"});
	 	$(".portfolio .row").css({"border-color": "#c0392b"});
	 	$(".portfolio-head h1").css({"background": "#FF9287", "color": "#c0392b"});
	 	$(".portfolio-image").css({"border-color": "#FF9287"});
	 	$(".overlay-icon a").css({"color": "#9B2114", "background": "#FF9287"});
	 	$(".overlay-icon a").hover(function() {
	 		$(this).css("background", "#9B2114");
	 		$(this).css("color", "#c0392b");}, function() {
	 		$(this).css("background", "#FF9287");
	 		$(this).css("color", "#9B2114");
	 	});
	 	$(".contact").css({"background": "#c0392b"});
	 	$(".contact-border").css({"border-color": "#FF9287"});
	 	$(".contact-head h1").css({"background": "#c0392b", "color": "#FF9287"});
	 	$(".answer").css({"color": "#FF9287"});
	 	$(".answer a").css({"color": "#FF9287"});
	 	$(".answer a").hover(function() {
	 		$(this).css("color", "#720B00");}, function() {
	 		$(this).css("color", "#FF9287");
	 	});
	 });
	 
});