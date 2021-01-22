// TOP BANNER

const header = document.getElementById('mainheader')
const banner = document.getElementById('mainbanner')
const bannercloser = document.getElementById('bannercloser')

bannercloser.addEventListener('click', () => {
	header.classList.add('disabled')
	banner.classList.add('disabled')
})

var lightbox1 = $('.homegallery a').simpleLightbox({animationSpeed: 150});
var lightbox1 = $('.dvojpreviewone a').simpleLightbox();
var lightbox2 = $('.dvojpreviewtwo a').simpleLightbox();
var lightbox3 = $('.dvojpreviewthree a').simpleLightbox();
