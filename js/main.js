//-----------------
// LOADING
//-----------------
$(document).ready(documentReady)

function documentReady(){
	$(window).load(everythingReady)
}
function everythingReady(){
	$(".content").fadeIn(200)
	setUp()
}


//-----------------
// MAIN ACTIONS
//-----------------
var current = 1
var clicked

function setUp() {
	$(".sign_up").click(openLogin)
	$(".slider_link").click(openLogin)
	$(".circle.link").click(openLogin)
	
	$(".close_button").click(closeLogin)
	$(".login_button").click(closeLogin)
	$(".blind").click(closeLogin)
	$(document).keydown(function(e) {
		if (e.keyCode == 27) {
			closeLogin()
		}
	})
	
	$(".catbox.1").show()
	$(".circle_button.1").addClass("circle_active")
	$(".circle_button").click(sliderNavi)
	TweenLite.to($(".catbox.1"), 0, {left:"20px", autoAlpha:1});
	
	slider1()
}
function slider1(){
	TweenLite.to(".catbox."+current, 0.3, {autoAlpha:0, delay:5, onComplete:showhide});
}
function showhide() {
	$(".catbox."+current).hide()
	$(".circle_button."+current).removeClass("circle_active")
	current++
	if(current > 3) current = 1
	$(".catbox."+current).show()
	$(".circle_button."+current).addClass("circle_active")
	slider2()
}
function slider2() {
	TweenLite.to(".catbox."+current, 0.3, {autoAlpha:1, onComplete:slider1});
}
function sliderNavi() {
	if(!$(this).hasClass("circle_active")) {
		TweenLite.killTweensOf(".catbox")
		clicked = $(this).attr("class").slice(-1)
		TweenLite.to(".catbox."+current, 0.3, {autoAlpha:0, onComplete:showhide2});
	}
}
function showhide2() {
	$(".catbox."+current).hide()
	$(".circle_button."+current).removeClass("circle_active")
	current = clicked
	$(".catbox."+current).show()
	$(".circle_button."+current).addClass("circle_active")
	slider3()
}
function slider3() {
	TweenLite.to(".catbox."+current, 0.3, {autoAlpha:1, onComplete:slider1});
}
function openLogin() {
	$(".blind").show()
	$(".popup").show()
	TweenLite.killTweensOf(".catbox")
	$("body").addClass("stop_scrolling")
	$("body").bind("touchmove", function(e){e.preventDefault()})
}
function closeLogin() {
	$(".blind").hide()
	$(".popup").hide()
	$("body").removeClass("stop_scrolling")
	$("body").unbind("touchmove")
	slider1()
}
