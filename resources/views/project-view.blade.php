<div class="container project-view">

	<div class="row">
		<div class="col-md-8 project-images">

			@foreach($project->images as $key => $image)
				<img src="{{ $image->url }}" alt="{{ $image->filename }}" class="img-responsive"/>
			@endforeach

			@if(!$project->images->count())
					<img src="https://via.placeholder.com/645x430" class="img-responsive"/>
			@endif

		</div>
		<div class="col-md-4">
			<div class="project-info">
				<h2>{{ $project->name }}</h2>

				<div class="details">
					@if($project->date)

						<div class="info-text">
							<span class="title">Date</span>
							<span class="val">{{ $project->date->format('F Y') }}</span>
						</div>

					@endif

					@if($project->location)

						<div class="info-text">
							<span class="title">Location</span>
							<span class="val">{{ $project->location }}</span>
						</div>

					@endif

					@if($project->value)


						<div class="info-text">
							<span class="title">Value</span>
							<span class="val">{{ $project->currency }}{{ number_format($project->value, 2) }}</span>
						</div>

					@endif

					<div class="info-text">
						<span class="title">Client</span>
						<span class="val">{{ $project->client_name }}</span>
					</div>

					@if($project->category)

						<div class="info-text">
							<span class="title">Category</span>
							<span class="val">{{ $project->category->name }}</span>
						</div>

					@endif

				</div>

				@if($project->highlight)

					<p>
						{!! $project->highlight !!}
					</p>

				@endif

				<p>
				<h4>Our Solutions</h4>
				{!! $project->description !!}
				</p>


			</div>
		</div>
	</div>
</div>
