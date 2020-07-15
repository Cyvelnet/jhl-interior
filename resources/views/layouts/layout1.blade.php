<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>{{ config('app.name') }}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="description"
		  content="JHL MAJU SDN BHD was managed by a group of qualified, enthusiatic and experienced individuals. The main business activities were interior design, construction & renovation and technological services.">
	<meta name="keywords"
		  content="architecture,building,business,garden design,house,interior design,landscape design,property,studio,security system,cleaning,rectification works,maintenance service,interior design">


	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/site.webmanifest">
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
	<meta name="msapplication-TileColor" content="#da532c">
	<meta name="theme-color" content="#ffffff">

	<!--[if lt IE 9]>
	<script src="js/html5shiv.js"></script>
	<![endif]-->


	<!-- CSS Files
	================================================== -->
	<link rel="stylesheet" href="css/bootstrap.css" type="text/css">
	<link rel="stylesheet" href="css/jpreloader.css" type="text/css">
	<link rel="stylesheet" href="css/animate.css" type="text/css">
	<link rel="stylesheet" href="css/plugin.css" type="text/css">
	<link rel="stylesheet" href="css/owl.carousel.css" type="text/css">
	<link rel="stylesheet" href="css/owl.theme.css" type="text/css">
	<link rel="stylesheet" href="css/owl.transitions.css" type="text/css">
	<link rel="stylesheet" href="css/magnific-popup.css" type="text/css">
	<link rel="stylesheet" href="css/style.css" type="text/css">

	<!-- custom background -->
	<link rel="stylesheet" href="css/bg.css" type="text/css">

	<!-- color scheme -->
	<link rel="stylesheet" href="css/color.css" type="text/css" id="colors">

	<!-- load fonts -->
	<link rel="stylesheet" href="fonts/font-awesome/css/font-awesome.css" type="text/css">
	<link rel="stylesheet" href="fonts/elegant_font/HTML_CSS/style.css" type="text/css">
	<link rel="stylesheet" href="fonts/et-line-font/style.css" type="text/css">

	<!-- revolution slider -->
	<link rel="stylesheet" href="rs-plugin/css/settings.css" type="text/css">
	<link rel="stylesheet" href="css/rev-settings.css" type="text/css">
	<style type="text/css">
		ul {
			padding-left: 15px;
		}

		.table-dark {
			background: transparent;
		}

		.table .thead-dark th {
			color: #fff;
			background-color: #101d2a;
			border-color: #454d55;
			text-transform: uppercase;
			font-size: 14px;
		}

		.table-dark.table-striped tbody tr:nth-of-type(even) {
			background-color: #0c363e;
		}

		.table-dark.table-striped tbody tr:nth-of-type(odd) {
			background-color: transparent;
		}
	</style>
</head>

<body class="page-projects">

<div id="wrapper">

	<!-- header begin -->
	<header>
		<div class="info">
			<div class="container">
				<div class="row">
					<div class="col-md-12">
						<div class="col">Working Hours Monday - Friday <span
									class="id-color"><strong>08:00-16:00</strong></span></div>
						<div class="col">Toll Free <span class="id-color"><strong>1800.899.900</strong></span></div>
						<!-- social icons -->
						<div class="col social">
							<a href="#"><i class="fa fa-facebook"></i></a>
							<a href="#"><i class="fa fa-twitter"></i></a>
							<a href="#"><i class="fa fa-rss"></i></a>
							<a href="#"><i class="fa fa-google-plus"></i></a>
							<a href="#"><i class="fa fa-envelope-o"></i></a>
						</div>
						<!-- social icons close -->
					</div>
				</div>
			</div>
		</div>

		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<!-- logo begin -->
					<div id="logo">
						<a href="{{ url('/') }}">
							<img class="logo" src="/images/jhlgroup.png" alt="">
						</a>
					</div>
					<!-- logo close -->

					<!-- small button begin -->
					<span id="menu-btn"></span>
					<!-- small button close -->

					<!-- mainmenu begin -->
					<nav>
						<ul id="mainmenu">
							<li><a href="{{ url('/') }}">Home</a></li>
							<li><a href="{{ route('about') }}">About Us</a>
								<ul>
									<li><a href="/culture">Our Culture</a></li>
									<li><a href="/mission">Mission & Vision</a></li>
									{{--<li><a href="/chart">Organization Chart</a></li>
									<li><a href="/info">Company Information</a></li>--}}
								</ul>
							</li>
							<li><a href="{{ route('services') }}">Our Services</a>
								<ul>
									<li><a href="{{ route('business-nature') }}">NATURE OF BUSINESS</a></li>{{--
										<li><a href="/core">Core BUSINESS</a></li>--}}
								</ul>
							</li>
							<li><a href="{{ route('projects.index') }}">Projects</a>
								<!-- 	<ul>
										<li><a href="/projects/new">New Projects</a></li>
										<li><a href="/projects/current">Current Projects</a></li>
									</ul> -->
							</li>
							<li><a href="{{ route('contact') }}">Contact</a></li>
						</ul>
					</nav>

				</div>
				<!-- mainmenu close -->

			</div>
		</div>
	</header>
	<!-- header close -->

@yield('content')
<!-- footer begin -->
	<footer>
		<div class="container">
			<div class="row">


				<!-- <div class="col-md-4">
					<div class="widget widget_recent_post">
						<h3>Latest News</h3>
						<ul>
							<li><a href="blog-single.html">5 Things That Take a Room from Good to Great</a></li>
							<li><a href="blog-single.html">Functional and Stylish Wall-to-Wall Shelves</a></li>
							<li><a href="blog-single.html">9 Unique and Unusual Ways to Display Your TV</a></li>
							<li><a href="blog-single.html">The 5 Secrets to Pulling Off Simple, Minimal Design</a></li>
							<li><a href="blog-single.html">How to Make a Huge Impact With Multiples</a></li>
						</ul>
					</div>
				</div> -->

				<div class="col-md-4 col-sm-12 text-md-left text-center">

					<img src="/images/jhlgroup.png" alt="{{ config('app.name') }}" class="img-responsive" style="max-width: 130px; margin-top: 16px;"/>
					{{--<h3>Contact Us</h3>
					<div class="widget widget-address">
						<address>
							<span>JHL Maju</span>
							<span><strong>Name:</strong>Alfred</span>
							<span><strong>Phone:</strong>+60 11-1068 0096</span>
							<span><strong>Email:</strong><a href="mailto:jhlgroup@live.com">jhlgroup@live.com</a></span>

						</address>
					</div>--}}
				</div>
				<div class="col-md-4 col-sm-12 text-md-left text-center">
					<h3>Contact Us</h3>
					<div class="widget widget-address">
						<address>
							<span>JHL Maju</span>{{--
							<span><strong>Name:</strong>Anqi</span>--}}
							<span><strong>Phone:</strong>(+60) 011-1081 1096</span>
							<span><strong>Email:</strong><a href="mailto:jhlgroup@live.com">jhlgroup@live.com</a></span>

						</address>
					</div>
				</div>
				<div class="col-md-4 col-sm-12 text-md-left text-center">
					<div class=" text-md-center">
						<img src="/images/jhlmaju_rev2.png" class="logo-small img-responsive" alt="">
					</div>JHL MAJU SDN BHD
					was managed by a group of qualified, enthusiatic and experienced individuals. During the early
					set-up of the company, the main business activities were interior design, construction & renovation
					and technological services.
				</div>
			</div>
		</div>

		<div class="subfooter">
			<div class="container">
				<div class="row">
					<div class="col-md-6">
						<span>&copy; Copyright 2020 - JHL Group</span>
					</div>
					<div class="col-md-6 text-right">
						<div class="social-icons">
							<a href="#"><i class="fa fa-facebook fa-lg"></i></a>
							<a href="#"><i class="fa fa-twitter fa-lg"></i></a>
							<a href="#"><i class="fa fa-rss fa-lg"></i></a>
							<a href="#"><i class="fa fa-google-plus fa-lg"></i></a>
							<a href="#"><i class="fa fa-skype fa-lg"></i></a>
							<a href="#"><i class="fa fa-dribbble fa-lg"></i></a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<a href="#" id="back-to-top"></a>
	</footer>
	<!-- footer close -->
</div>
</div>

@yield('jscripts')

<!-- Javascript Files
    ================================================== -->
<script src="js/jquery.min.js"></script>
<script src="js/jpreLoader.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/jquery.isotope.min.js"></script>
<script src="js/easing.js"></script>
<script src="js/jquery.flexslider-min.js"></script>
<script src="js/jquery.scrollto.js"></script>
<script src="js/owl.carousel.js"></script>
<script src="js/jquery.countTo.js"></script>
<script src="js/classie.js"></script>
<script src="js/video.resize.js"></script>
<script src="js/validation.js"></script>
<script src="js/wow.min.js"></script>
<script src="js/jquery.magnific-popup.min.js"></script>
<script src="js/jquery.stellar.min.js"></script>
<script src="js/enquire.min.js"></script>
<script src="js/designesia.js"></script>

<!-- SLIDER REVOLUTION SCRIPTS  -->
<script type="text/javascript" src="rs-plugin/js/jquery.themepunch.plugins.min.js"></script>
<script type="text/javascript" src="rs-plugin/js/jquery.themepunch.revolution.min.js"></script>

<script src="js/typed.js"></script>
<script>
    $(function () {
        // jquery typed plugin
        $(".typed").typed({
            stringsElement: $('.typed-strings'),
            typeSpeed: 100,
            backDelay: 1500,
            loop: true,
            contentType: 'html', // or text
            // defaults to false for infinite loop
            loopCount: false,
            callback: function () {
                null;
            },
            resetCallback: function () {
                newTyped();
            }
        });
    });
</script>


</body>
</html>
