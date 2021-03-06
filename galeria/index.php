<!DOCTYPE html>
<html lang="sk">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Galéria - Rozpravkovo Tatry</title>
	<meta name="description" content="Rozprávkové bývanie v Tatranskej Lomnici.">
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link
		href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Lora:wght@400;600;700&family=Pacifico&display=swap"
		rel="stylesheet">
	<link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
	<link rel="stylesheet" href="/assets/css/simple-lightbox.min.css">
	<link rel="stylesheet" href="/assets/css/style.min.css">
</head>

<body>

	<div id="cookiesBanner">
		<p>Tento web používa súbory cookies. Prehliadaním webu vyjadrujete súhlas s ich používaním.</p>
		<button id="cookiesCloser">Súhlasím</button>
	</div>

	<header id="mainheader">
		<div id="mainbanner" class="announcement-banner">
			<div class="container-banner">
				<strong>Už v Predaji!</strong>
				<span id="bannercloser">X</span>
			</div>
		</div>
		<div class="header-container">
			<a href="/">
				<img src="/assets/img/main-logo.svg">
			</a>
			<div class="topNavigation">
				<nav>
					<ul>
						<li>
							<a href="/ponuka-nehnutelnosti">Ponuka Nehnuteľností</a>
						</li>
						<li>
							<a href="/prenajom-naveky">Prenájom Naveky</a>
							<span>Time Sharing</span>
						</li>
						<li>
							<a href="/aktivity">Aktivity</a>
						</li>
						<li>
							<a href="/o-projekte">O projekte</a>
						</li>
						<li>
							<a href="/novinky">Novinky</a>
						</li>
						<li>
							<a class="active" href="/galeria">Galéria</a>
						</li>
						<li>
							<a href="/kontakt">Kontakt</a>
						</li>
					</ul>
				</nav>
				<div id="languageSelector" class="language-selector">
					<span id="currentLanguage" class="selected-language">SK</span>
					<div class="another-laguages">
						<a href="#">EN</a>
						<a href="#">PL</a>
					</div>
				</div>
			</div>

			<div id="topBurger">
				<span id="burgerThree"></span>
				<span id="burgerTwo"></span>
				<span id="burgerOne"></span>
			</div>
		</div>
		<div id="mobileNavigation" class="topNavigation mobileNavigation">
			<nav>
				<ul>
					<li>
						<a href="/ponuka-nehnutelnosti">Ponuka Nehnuteľností</a>
					</li>
					<li>
						<a href="/prenajom-naveky">Prenájom Naveky</a>
						<span>Time Sharing</span>
					</li>
					<li>
						<a href="/aktivity">Aktivity</a>
					</li>
					<li>
						<a href="/o-projekte">O projekte</a>
					</li>
					<li>
						<a href="/novinky">Novinky</a>
					</li>
					<li>
						<a href="/galeria">Galéria</a>
					</li>
					<li>
						<a href="/kontakt">Kontakt</a>
					</li>
				</ul>
			</nav>
			<div id="languageSelector" class="language-selector">
				<span id="currentLanguage" class="selected-language">SK</span>
				<div class="another-laguages">
					<a href="#">EN</a>
					<a href="#">PL</a>
					<a href="#">EN</a>
					<a href="#">PL</a>
					<a href="#">EN</a>
				</div>
			</div>
		</div>
	</header>


	<main class="galeria-wrapper">
		<section class="main-galeria">
			<div class="container">
				<h2>Galéria</h2>
				<img class="divider" src="/assets/img/home-galery-element.svg">
				<div class="homegallery">
					<a href="/assets/img/home-gallery.jpg">
						<img src="/assets/img/home-gallery.jpg" alt="" title="" />
					</a>
					<a href="/assets/img/home-gallery02.jpg">
						<img src="/assets/img/home-gallery02.jpg" alt="" title="" />
					</a>
					<a href="/assets/img/home-gallery03.jpg">
						<img src="/assets/img/home-gallery03.jpg" alt="" title="" />
					</a>
					<a href="/assets/img/home-gallery03.jpg">
						<img src="/assets/img/home-gallery03.jpg" alt="" title="" />
					</a>
					<a href="/assets/img/home-gallery02.jpg">
						<img src="/assets/img/home-gallery02.jpg" alt="" title="" />
					</a>
					<a href="/assets/img/home-gallery.jpg">
						<img src="/assets/img/home-gallery.jpg" alt="" title="" />
					</a>
					<a href="/assets/img/home-gallery.jpg">
						<img src="/assets/img/home-gallery.jpg" alt="" title="" />
					</a>
					<a href="/assets/img/home-gallery02.jpg">
						<img src="/assets/img/home-gallery02.jpg" alt="" title="" />
					</a>
					<a href="/assets/img/home-gallery03.jpg">
						<img src="/assets/img/home-gallery03.jpg" alt="" title="" />
					</a>
					<a href="/assets/img/home-gallery03.jpg">
						<img src="/assets/img/home-gallery03.jpg" alt="" title="" />
					</a>
					<a href="/assets/img/home-gallery02.jpg">
						<img src="/assets/img/home-gallery02.jpg" alt="" title="" />
					</a>
					<a href="/assets/img/home-gallery.jpg">
						<img src="/assets/img/home-gallery.jpg" alt="" title="" />
					</a>
				</div>
			</div>
		</section>
		</div>
		</section>

		<?php require_once '../_partials/mainform.php'; ?>
	</main>

	<?php require_once '../_partials/footer.php'; ?>
