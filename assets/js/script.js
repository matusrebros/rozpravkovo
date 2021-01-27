// TOP BANNER
const header = document.getElementById('mainheader')
const banner = document.getElementById('mainbanner')
const bannercloser = document.getElementById('bannercloser')

bannercloser.addEventListener('click', () => {
	header.classList.add('disabled')
   banner.classList.add('disabled');
})

//safari smooth scroll
$("a[href*='#']").on('click',function(e){

	e.preventDefault();
	var $self = $(this);

	if ( $( '#'+$self.attr('href').split('#').pop() ).length ) {
		 window.setTimeout(function(){
			$('html, body').animate({

			  scrollTop: $( '#'+$self.attr('href').split('#').pop() ).offset().top -10

			}, 1000);
		 }, 25);
	} else {
		 window.location = window.location.origin + $(this).attr('href');
	}

 });

 // scroll to hash if in url
 $(document).ready(function(){

	if( window.location.hash && $( window.location.hash ) ){

	  window.setTimeout(function(){
		 $('html, body').animate({
			scrollTop: $( window.location.hash ).offset().top -10
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
var lightbox1 = $('.homegallery a').simpleLightbox({animationSpeed: 150});
var lightbox1 = $('.dvojpreviewone a').simpleLightbox();
var lightbox2 = $('.dvojpreviewtwo a').simpleLightbox();
var lightbox3 = $('.dvojpreviewthree a').simpleLightbox();
