// TOP BANNER
const header = document.getElementById('mainheader')
const bannercloser = document.getElementById('bannercloser')
const banner = document.getElementById('mainbanner')

function getCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function checkCookie() {
	if (getCookie('banner')) {
		banner.classList.add('disabled');
		header.classList.add('disabled');
	} else {
		banner.classList.remove('disabled');
		header.classList.remove('disabled');
	}
}
checkCookie()

bannercloser.addEventListener('click', () => {
	setTimeout(function () {
		banner.classList.remove('disabled');
		header.classList.remove('disabled');
	}, 1 * 24 * 60 * 60 * 1000)
	var d = new Date();
	d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
	var expires = "; expires=" + d.toGMTString();
	document.cookie = "banner=1" + expires + "; path=/";
	banner.classList.add('disabled');
	header.classList.add('disabled');
})

//cookies
const cookiesCloser = document.getElementById('cookiesCloser')
const cookiesBanner = document.getElementById('cookiesBanner')

//burger animation
const topBurger = document.getElementById('topBurger')
const mobileNavigation = document.getElementById('mobileNavigation')

const burgerThree = document.getElementById('burgerThree')
const burgerTwo = document.getElementById('burgerTwo')
const burgerOne = document.getElementById('burgerOne')

topBurger.addEventListener('click', () => {
	burgerThree.classList.toggle('rotate-top');
	burgerTwo.classList.toggle('transparent');
	burgerOne.classList.toggle('rotate-bottom');
	mobileNavigation.classList.toggle('active');
})

//safari smooth scroll
$("a[href*='#']").on('click', function (e) {

	e.preventDefault();
	var $self = $(this);

	if ($('#' + $self.attr('href').split('#').pop()).length) {
		window.setTimeout(function () {
			$('html, body').animate({

				scrollTop: $('#' + $self.attr('href').split('#').pop()).offset().top - 10

			}, 1000);
		}, 25);
	} else {
		window.location = window.location.origin + $(this).attr('href');
	}

});

// scroll to id if is in url
$(document).ready(function () {

	if (window.location.hash && $(window.location.hash)) {

		window.setTimeout(function () {
			$('html, body').animate({
				scrollTop: $(window.location.hash).offset().top - 10
			}, 1000);
		}, 25);
	}

});

//language selector
const currentLanguage = document.getElementById('currentLanguage')
const languageSelector = document.getElementById('languageSelector')

currentLanguage.addEventListener('click', () => {
	languageSelector.classList.toggle('active')
})

//lightboxes
var lightbox1 = $('.homegallery a').simpleLightbox({
	animationSpeed: 150,
	fadeSpeed: 200
});
var lightbox1 = $('.dvojpreviewone a').simpleLightbox();
var lightbox2 = $('.dvojpreviewtwo a').simpleLightbox();
var lightbox3 = $('.dvojpreviewthree a').simpleLightbox();
