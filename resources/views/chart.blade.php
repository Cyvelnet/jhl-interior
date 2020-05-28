@extends('layouts.layout1')

@section('content')
<!-- content begin -->
        <!-- subheader -->
        <section id="subheader" data-speed="8" data-type="background">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Organization Chart</h1>
                        <ul class="crumb">
                            <li><a href="/home">Home</a></li>
                            <li class="sep">/</li>
                            <li><a href="/about">About Us</a></li>
							<li class="sep">/</li>
                            <li>Organization Chart</li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        <!-- subheader close -->

        <!-- content begin -->
        <div id="content" class="no-top no-bottom">
            <section id="section-about-us-2" class="side-bg no-padding">
               

                <div class="container">
                    <div class="row">
                        <div class="inner-padding text-center">
                            <div class="col-md-12" data-animation="fadeInRight" data-delay="200">
                            
                             	<img class="img img-responsive" src="/images/core/chart.png">
                            </div>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>


           
            



        </div>
@endsection
@section('jscripts')
<!-- Jscripts begin -->

@endsection