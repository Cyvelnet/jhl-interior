<!doctype html>
<html class="no-js" lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="x-ua-compatible" content="ie=edge">
	<title>Login | ThemeKit - Admin Template</title>
	<meta name="description" content="">
	<meta name="keywords" content="">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="icon" href="/admin/favicon.ico" type="image/x-icon"/>

	<link href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600,700,800" rel="stylesheet">

	<link rel="stylesheet" href="/admin/plugins/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="/admin/plugins/fontawesome-free/css/all.min.css">
	<link rel="stylesheet" href="/admin/plugins/ionicons/dist/css/ionicons.min.css">
	<link rel="stylesheet" href="/admin/plugins/icon-kit/dist/css/iconkit.min.css">
	<link rel="stylesheet" href="/admin/plugins/perfect-scrollbar/css/perfect-scrollbar.css">
	<link rel="stylesheet" href="/admin/css/theme.min.css">
	<script src="/admin/js/vendor/modernizr-2.8.3.min.js"></script>
</head>

<body>


<!--[if lt IE 8]>
<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
	your browser</a> to improve your experience.</p>
<![endif]-->


@yield('content')


<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script>window.jQuery || document.write('<script src="/admin/src/js/vendor/jquery-3.3.1.min.js"><\/script>');</script>
<script src="/admin/plugins/popper.js/dist/umd/popper.min.js"></script>
<script src="/admin/plugins/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="/admin/plugins/perfect-scrollbar/dist/perfect-scrollbar.min.js"></script>
<script src="/admin/plugins/screenfull/dist/screenfull.js"></script>
<script src="/admin/js/theme.js"></script>
<!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
<script>
    (function (b, o, i, l, e, r) {
        b.GoogleAnalyticsObject = l;
        b[l] || (b[l] =
            function () {
                (b[l].q = b[l].q || []).push(arguments);
            });
        b[l].l = +new Date;
        e = o.createElement(i);
        r = o.getElementsByTagName(i)[0];
        e.src = 'https://www.google-analytics.com/analytics.js';
        r.parentNode.insertBefore(e, r);
    }(window, document, 'script', 'ga'));
    ga('create', 'UA-XXXXX-X', 'auto');
    ga('send', 'pageview');
</script>
</body>
</html>
