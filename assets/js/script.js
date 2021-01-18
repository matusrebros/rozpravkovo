// TOP BANNER

const header = document.getElementById('mainheader')
const banner = document.getElementById('mainbanner')
const bannercloser = document.getElementById('bannercloser')

bannercloser.addEventListener('click', () => {
	header.classList.add('disabled')
	banner.classList.add('disabled')
})

//gallery
var lightbox1 = $('.homegallery a').simpleLightbox();
var lightbox2 = $('.previewgallery a').simpleLightbox();
var lightbox3 = $('.previewgallerysecond a').simpleLightbox();
var lightbox4 = $('.previewgallerythird a').simpleLightbox();
var lightbox5 = $('.previewdvoj a').simpleLightbox();
