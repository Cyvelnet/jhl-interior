@extends('layouts.authentication')

@section('content')

	<div class="auth-wrapper">

		<div class="container-fluid h-100">
			<div class="row flex-row h-100 bg-white">
				<div class="col-xl-8 col-lg-6 col-md-5 p-0 d-md-block d-lg-block d-sm-none d-none">
					<div class="lavalite-bg" style="background-image: url('/img/auth/login-bg.jpg')">
						<div class="lavalite-overlay"></div>
					</div>
				</div>
				<div class="col-xl-4 col-lg-6 col-md-7 my-auto p-0">
					<div class="authentication-form mx-auto">
						<div class="logo-centered">
							<a href="{{ url('/') }}"><img src="/images/logo.png" alt=""></a>
						</div>
						<h3>Sign In to {{ config('app.name') }}</h3>
						<p>Happy to see you again!</p>

						<form method="POST" action="{{ route('login') }}">

							@csrf
							<div class="form-group">
								<input type="text" name="email"
									   class="form-control @error('email') is-invalid @enderror"
									   placeholder="{{ __('E-Mail Address') }}" required="" value="">
								<i class="ik ik-user"></i>

								@error('email')
								<span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
								@enderror

							</div>
							<div class="form-group">
								<input type="password" name="password" class="form-control @error('password') is-invalid @enderror" placeholder="{{ __('Password') }}" required="">
								<i class="ik ik-lock"></i>
								@error('password')
								<span class="invalid-feedback" role="alert">
                                        <strong>{{ $message }}</strong>
                                    </span>
								@enderror
							</div>
							<div class="row">
								<div class="col text-left">
									<label class="custom-control custom-checkbox">
										<input type="checkbox" class="custom-control-input" id="item_checkbox"
											   name="remember" {{ old('remember') ? 'checked' : '' }}>
										<span class="custom-control-label">{{ __('Remember Me') }}</span>
									</label>

								</div>
								{{--<div class="col text-right">
									<a href="forgot-password.html">Forgot Password ?</a>
								</div>--}}
							</div>
							<div class="sign-btn text-center">
								<button class="btn btn-theme">Sign In</button>
							</div>
						</form>
						{{--<div class="register">
							<p>Don't have an account? <a href="register.html">Create an account</a></p>
						</div>--}}
					</div>
				</div>
			</div>
		</div>

	</div>



@endsection
