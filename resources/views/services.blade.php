@extends('layouts.layout1')

@section('content')
	<!-- subheader -->
	<section id="subheader" data-speed="8" data-type="background">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h1>Our Services</h1>
					<ul class="crumb">
						<li><a href="{{ url('/') }}">Home</a></li>
						<li class="sep">/</li>
						<li>Our Services</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- subheader close -->

	<!-- content begin -->

	<!-- section begin -->
	<section id="section-about">
		<div class="container">
			<div class="row">
				<div class="col-md-6 offset-md-3 text-center wow fadeInUp">
					<h1>What We Do</h1>
					<div class="separator"><span><i class="fa fa-circle"></i></span></div>
					<div class="spacer-single"></div>
				</div>


				<div class="col-md-4 wow fadeInLeft">
					<h3 class="service-title"><span class="id-color">Maintenance</span> Services</h3>
					<p class="service-description">
						Do you want to relieved from facilities and equipments servicing management? Our interior
						maintenance services include everything your need to keep your facilities up and running. We' ve
						had tons of success with out clients. Will you be next ?
					</p>
					<div class="spacer-single"></div>
					<a class="image-popup-no-margins" href="images/misc/pic_1.jpg">
						<img src="/images/misc/pic_1.jpg" class="img-responsive" alt="">
					</a>
				</div>

				<div class="col-md-4 wow fadeInUp" data-wow-delay=".2s">
					<h3 class="service-title"><span class="id-color">Renovation </span> Works</h3>

					<p class="service-description">
						By offering a wide range of renovation services. Our services field is including residential,
						industrial, commercial and hotel industry. We have been joining with kits if company that is
						responsible and trustworthy which will be providing a quality renovation services.
					</p>
					<div class="spacer-single"></div>
					<img src="/images/misc/pic_2.jpg" class="img-responsive" alt="">
				</div>

				<div class="col-md-4 wow fadeInRight">
					<h3 class="service-title"><span class="id-color">Interior</span> Design</h3>
					<p class="service-description">
                        We will work closely with clients from conceptual to completion by ensuring the best possible
                        outcome, We provide a full interior design package which includes a moodboard design concept, 2D
                        Autocad drawings, 3D perspective for a complete proposal. Nevertheless, we will also provide a
                        lost of costing within client's budget.
                    </p>
					<div class="spacer-single"></div>
					<img src="/images/misc/pic_3.jpg" class="img-responsive" alt="">
				</div>

			</div>
		</div>
	</section>
	<!-- section close -->

@endsection
@section('jscripts')
	<!-- Jscripts begin -->

@endsection
