@extends('layouts.layout1')

@section('content')
	<!-- subheader -->
	<section id="subheader" data-speed="8" data-type="background">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h1>Contact</h1>
					<ul class="crumb">
						<li><a href="{{ url('/') }}">Home</a></li>
						<li class="sep">/</li>
						<li>Contact</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!-- subheader close -->

	<!-- content begin -->
	<div id="content">
		<!--     <section class="no-top" aria-label="map-container">
				<div id="map"></div>
			</section> -->

		<div class="container">

			@if(session()->has('status'))
				<div class="alert {{ session('status') === true ? 'alert-success bg-success': 'alert-danger bg-danger' }} mb30 text-white">
					{{ session('message') }}
				</div>
			@endif

			@if($errors->count())


					<div class="alert alert-danger bg-danger mb30 text-white">
						<ul>
							@foreach($errors->all() as $key => $error)
							    <li>{{ $error }}</li>
							@endforeach
						</ul>
					</div>

			@endif

			<div class="row">

				<div class="col-md-8">

					<h3>Send Us Message</h3>

					<form id='contact_form' method="post" action='{{ route('contact') }}'>
						@csrf
						<div class="row">
							<div class="col-md-4">
								<div id='name_error' class='error'>Please enter your name.</div>
								<div>
									<input type='text' name='name' id='name' class="form-control"
										   placeholder="Your Name" value="{{ old('name') }}">
								</div>

								<div id='email_error' class='error'>Please enter your valid E-mail ID.</div>
								<div>
									<input type='text' name='email' id='email' class="form-control"
										   placeholder="Your Email" value="{{ old('email') }}">
								</div>

								<div id='phone_error' class='error'>Please enter your phone number.</div>
								<div>
									<input type='text' name='phone' id='phone' class="form-control" value="{{ old('phone') }}"
										   placeholder="Your Phone (Optional)">
								</div>
							</div>
							<div class="col-md-8">
								<div id='message_error' class='error'>Please enter your message.</div>
								<div>
									<textarea name='message' id='message' class="form-control"
											  placeholder="Your Message">{{ old('message') }}</textarea>
								</div>
							</div>

							<div class="col-md-12">
								<p id='submit'>
									<input type='submit' id='send_message' value='Submit Form' class="btn btn-line">
								</p>
								<div id='mail_success' class='success'>Your message has been sent successfully.</div>
								<div id='mail_fail' class='error'>Sorry, error occured this time sending your message.
								</div>
							</div>
						</div>
					</form>
				</div>

				<div id="sidebar" class="col-md-4">

					<div class="widget widget_text">
						<h3>Contact Info</h3>
						<address>
							<span>JHL Maju</span>{{--
							<span><strong>Name:</strong>Anqi</span>--}}
							<span><strong>Phone:</strong>(+60) 011-1081 1096</span>
							<span><strong>Email:</strong><a href="mailto:jhlgroup@live.com">jhlgroup@live.com</a></span>

							{{--
							  <span>JHL Maju</span>
							  <span><strong>Name:</strong>Alfred</span>
							  <span><strong>Phone:</strong>+60 11-1068 0096</span>
							  <span><strong>Email:</strong><a href="mailto:jhlgroup@live.com">jhlgroup@live.com</a></span><br>

							  <span>Jac Design</span>
							  <span><strong>Name:</strong>Jackson</span>
							  <span><strong>Phone:</strong>+6012-601 0776</span>
							  <span><strong>Email:</strong><a href="mailto:jhlgroup@live.com">jhlgroup@live.com</a></span>--}}

						</address>
					</div>


				</div>
			</div>
		</div>
	</div>

@endsection
@section('jscripts')
	<!-- Jscripts begin -->

@endsection
