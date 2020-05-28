@extends('layouts.layout1')

@section('content')
        <!-- subheader -->
        <section id="subheader" data-speed="8" data-type="background">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h1>Contact</h1>
                        <ul class="crumb">
                            <li><a href="index.html">Home</a></li>
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
                <div class="row">

                    <div class="col-md-8">
                        <h3>Send Us Message</h3>
                        <form name="contactForm" id='contact_form' method="post" action='email.php'>
                            <div class="row">
                                <div class="col-md-4">
                                    <div id='name_error' class='error'>Please enter your name.</div>
                                    <div>
                                        <input type='text' name='name' id='name' class="form-control" placeholder="Your Name">
                                    </div>

                                    <div id='email_error' class='error'>Please enter your valid E-mail ID.</div>
                                    <div>
                                        <input type='text' name='email' id='email' class="form-control" placeholder="Your Email">
                                    </div>

                                    <div id='phone_error' class='error'>Please enter your phone number.</div>
                                    <div>
                                        <input type='text' name='phone' id='phone' class="form-control" placeholder="Your Phone">
                                    </div>
                                </div>
                                <div class="col-md-8">
                                    <div id='message_error' class='error'>Please enter your message.</div>
                                    <div>
                                        <textarea name='message' id='message' class="form-control" placeholder="Your Message"></textarea>
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <p id='submit'>
                                        <input type='submit' id='send_message' value='Submit Form' class="btn btn-line">
                                    </p>
                                    <div id='mail_success' class='success'>Your message has been sent successfully.</div>
                                    <div id='mail_fail' class='error'>Sorry, error occured this time sending your message.</div>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div id="sidebar" class="col-md-4">

                        <div class="widget widget_text">
                            <h3>Contact Info</h3>
                            <address>
                                <span>JHL Maju</span>
                                <span><strong>Name:</strong>Alfred</span>                                
                                <span><strong>Phone:</strong>+60 11-1068 0096</span>
                                <span><strong>Email:</strong><a href="mailto:jhlgroup@live.com">jhlgroup@live.com</a></span><br>

                                <span>Jac Design</span>
                                <span><strong>Name:</strong>Jackson</span>
                                <span><strong>Phone:</strong>+6012-601 0776</span>
                                <span><strong>Email:</strong><a href="mailto:jhlgroup@live.com">jhlgroup@live.com</a></span>
                             
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