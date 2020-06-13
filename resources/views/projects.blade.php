@extends('layouts.layout1')

@section('content')
	<!-- subheader -->
	<section id="subheader" data-speed="8" data-type="background">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h1>Projects</h1>
					<ul class="crumb">
						<li><a href="{{ url('/') }}">Home</a></li>
						<li class="sep">/</li>
						<li>Projects</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- subheader close -->

	<!-- content begin -->
	<div id="content" class="no-top no-bottom">
		<!-- section begin -->
		<section id="section-portfolio" class="no-top no-bottom" aria-label="section-portfolio">
			<div class="container">

				<div class="spacer-single"></div>

				<!-- portfolio filter begin -->
				<div class="row">
					<div class="col-md-12 text-center">
						<ul id="filters" class="wow fadeInUp" data-wow-delay="0s">


							@foreach($predefinedCategories as $class => $category)
								<li><a href="#" data-filter="{{ $class }}" class="{{ $class =='*' ? 'selected': '' }}">{{ $category }}</a></li>
							@endforeach

							@foreach($categories as $key => $category)
								<li><a href="#" data-filter=".{{ \Illuminate\Support\Str::snake($category->name) }}">{{ $category->name }}</a></li>
							@endforeach
						</ul>

					</div>
				</div>
				<!-- portfolio filter close -->

			</div>

			<div id="gallery" class="gallery full-gallery de-gallery pf_full_width pf_4_cols wow fadeInUp"
				 data-wow-delay=".3s">

			@foreach($projects as $key => $project)

				<!-- gallery item -->
					<div class="item new {{ $project->css_class }}">
						<div class="picframe">
							<a class="simple-ajax-popup-align-top" href="{{ route('projects.show', $project->id) }}">
                                <span class="overlay">
                                    <span class="pf_text">
                                        <span class="project-name">{{ $project->name }}</span>
                                    </span>
                                </span>
							</a>
							<img src="{{ optional($project->images->first())->cover_url ?? 'https://via.placeholder.com/645x430' }}" alt=""/>
						</div>
					</div>
					<!-- close gallery item -->

				@endforeach

				{{--				<!-- gallery item -->--}}
				{{--				<div class="item new">--}}
				{{--					<div class="picframe">--}}
				{{--						<a class="simple-ajax-popup-align-top" href="{{ route('projects.show', $project->id) }}">--}}
				{{--                                <span class="overlay">--}}
				{{--                                    <span class="pf_text">--}}
				{{--                                        <span class="project-name">Title</span>--}}
				{{--                                    </span>--}}
				{{--                                </span>--}}
				{{--						</a>--}}

				{{--						<img src="images/portfolio/pf%20(2).jpg" alt=""/>--}}
				{{--					</div>--}}
				{{--				</div>--}}
				{{--				<!-- close gallery item -->--}}

				{{--				<!-- gallery item -->--}}
				{{--				<div class="item new">--}}
				{{--					<div class="picframe">--}}
				{{--						<a class="simple-ajax-popup-align-top" href="{{ route('projects.show', $project->id) }}">--}}
				{{--                                <span class="overlay">--}}
				{{--                                    <span class="pf_text">--}}
				{{--                                        <span class="project-name">Title</span>--}}
				{{--                                    </span>--}}
				{{--                                </span>--}}
				{{--						</a>--}}

				{{--						<img src="images/portfolio/pf%20(3).jpg" alt=""/>--}}
				{{--					</div>--}}
				{{--				</div>--}}
				{{--				<!-- close gallery item -->--}}

				{{--				<!-- gallery item -->--}}
				{{--				<div class="item new">--}}
				{{--					<div class="picframe">--}}
				{{--						<a class="simple-ajax-popup-align-top" href="{{ route('projects.show', $project->id) }}">--}}
				{{--                                <span class="overlay">--}}
				{{--                                    <span class="pf_text">--}}
				{{--                                        <span class="project-name">Title</span>--}}
				{{--                                    </span>--}}
				{{--                                </span>--}}
				{{--						</a>--}}
				{{--						<img src="images/portfolio/pf%20(4).jpg" alt=""/>--}}
				{{--					</div>--}}
				{{--				</div>--}}
				{{--				<!-- close gallery item -->--}}

				{{--				<!-- gallery item -->--}}
				{{--				<div class="item new">--}}
				{{--					<div class="picframe">--}}
				{{--						<a class="simple-ajax-popup-align-top" href="{{ route('projects.show', $project->id) }}">--}}
				{{--                                <span class="overlay">--}}
				{{--                                    <span class="pf_text">--}}
				{{--                                        <span class="project-name">Title</span>--}}
				{{--                                    </span>--}}
				{{--                                </span>--}}
				{{--						</a>--}}
				{{--						<img src="images/portfolio/pf%20(5).jpg" alt=""/>--}}
				{{--					</div>--}}
				{{--				</div>--}}
				{{--				<!-- close gallery item -->--}}

				{{--				<!-- gallery item -->--}}
				{{--				<div class="item new">--}}
				{{--					<div class="picframe">--}}
				{{--						<a class="simple-ajax-popup-align-top" href="{{ route('projects.show', $project->id) }}">--}}
				{{--                                <span class="overlay">--}}
				{{--                                    <span class="pf_text">--}}
				{{--                                        <span class="project-name">Title</span>--}}
				{{--                                    </span>--}}
				{{--                                </span>--}}
				{{--						</a>--}}
				{{--						<img src="images/portfolio/pf%20(6).jpg" alt=""/>--}}
				{{--					</div>--}}
				{{--				</div>--}}
				{{--				<!-- close gallery item -->--}}

				{{--				<!-- gallery item -->--}}
				{{--				<div class="item new">--}}
				{{--					<div class="picframe">--}}
				{{--						<a class="simple-ajax-popup-align-top" href="{{ route('projects.show', $project->id) }}">--}}
				{{--                                <span class="overlay">--}}
				{{--                                    <span class="pf_text">--}}
				{{--                                        <span class="project-name">Title</span>--}}
				{{--                                    </span>--}}
				{{--                                </span>--}}
				{{--						</a>--}}

				{{--						<img src="images/portfolio/pf%20(7).jpg" alt=""/>--}}
				{{--					</div>--}}
				{{--				</div>--}}
				{{--				<!-- close gallery item -->--}}

				{{--				<!-- gallery item -->--}}
				{{--				<div class="item new">--}}
				{{--					<div class="picframe">--}}
				{{--						<a class="simple-ajax-popup-align-top" href="{{ route('projects.show', $project->id) }}">--}}
				{{--                                <span class="overlay">--}}
				{{--                                    <span class="pf_text">--}}
				{{--                                        <span class="project-name">Title</span>--}}
				{{--                                    </span>--}}
				{{--                                </span>--}}
				{{--						</a>--}}

				{{--						<img src="images/portfolio/pf%20(8).jpg" alt=""/>--}}
				{{--					</div>--}}
				{{--				</div>--}}
				{{--				<!-- close gallery item -->--}}

				{{--				<!-- gallery item -->--}}
				{{--				<div class="item completed">--}}
				{{--					<div class="picframe">--}}
				{{--						<a class="simple-ajax-popup-align-top" href="{{ route('projects.show', $project->id) }}">--}}
				{{--                                <span class="overlay">--}}
				{{--                                    <span class="pf_text">--}}
				{{--                                        <span class="project-name">Title</span>--}}
				{{--                                    </span>--}}
				{{--                                </span>--}}
				{{--						</a>--}}

				{{--						<img src="images/portfolio/pf%20(9).jpg" alt=""/>--}}
				{{--					</div>--}}
				{{--				</div>--}}
				{{--				<!-- close gallery item -->--}}

				{{--				<!-- gallery item -->--}}
				{{--				<div class="item completed">--}}
				{{--					<div class="picframe">--}}
				{{--						<a class="simple-ajax-popup-align-top" href="{{ route('projects.show', $project->id) }}">--}}
				{{--                                <span class="overlay">--}}
				{{--                                    <span class="pf_text">--}}
				{{--                                        <span class="project-name">Title</span>--}}
				{{--                                    </span>--}}
				{{--                                </span>--}}
				{{--						</a>--}}

				{{--						<img src="images/portfolio/pf%20(10).jpg" alt=""/>--}}
				{{--					</div>--}}
				{{--				</div>--}}
				{{--				<!-- close gallery item -->--}}

				{{--				<!-- gallery item -->--}}
				{{--				<div class="item completed">--}}
				{{--					<div class="picframe">--}}
				{{--						<a class="simple-ajax-popup-align-top" href="{{ route('projects.show', $project->id) }}">--}}
				{{--                                <span class="overlay">--}}
				{{--                                    <span class="pf_text">--}}
				{{--                                        <span class="project-name">Title</span>--}}
				{{--                                    </span>--}}
				{{--                                </span>--}}
				{{--						</a>--}}

				{{--						<img src="images/portfolio/pf%20(11).jpg" alt=""/>--}}
				{{--					</div>--}}
				{{--				</div>--}}
				{{--				<!-- close gallery item -->--}}

				{{--				<!-- gallery item -->--}}
				{{--				<div class="item completed">--}}
				{{--					<div class="picframe">--}}
				{{--						<a class="simple-ajax-popup-align-top" href="{{ route('projects.show', $project->id) }}">--}}
				{{--                                <span class="overlay">--}}
				{{--                                    <span class="pf_text">--}}
				{{--                                        <span class="project-name">Title</span>--}}
				{{--                                    </span>--}}
				{{--                                </span>--}}
				{{--						</a>--}}

				{{--						<img src="images/portfolio/pf%20(12).jpg" alt=""/>--}}
				{{--					</div>--}}
				{{--				</div>--}}
				{{--				<!-- close gallery item -->--}}

			</div>

		</section>
		<!-- section close -->


		<!-- section begin -->
		<section id="call-to-action" class="call-to-action bg-color dark text-center" data-speed="5"
				 data-type="background" aria-label="call-to-action">
			<a href="/contact" class="btn btn-line black btn-big">Get Quotation</a>
		</section>
		<!-- logo carousel section close -->


	</div>

@endsection
@section('jscripts')
	<!-- Jscripts begin -->

@endsection
