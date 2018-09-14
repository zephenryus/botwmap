<!DOCTYPE html>
<html lang="<?php echo e(str_replace('_', '-', app()->getLocale())); ?>">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta property="og:site_name" content="">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">

    <title></title>

    <link rel="apple-touch-icon" sizes="180x180" href="">
    <link rel="icon" type="image/png" sizes="32x32" href="">
    <link rel="icon" type="image/png" sizes="16x16" href="">
    <link rel="manifest" href="">
    <link rel="mask-icon" color="" href="">
    <link rel="shortcut icon" href="">
    <meta name="msapplication-config" content="">
    <meta name="theme-color" content="">

    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link href="<?php echo e(asset('css/app.css')); ?>" rel="stylesheet">
</head>
<body>
<!--[if lt IE 7]>
<p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade
    your browser</a> to improve your experience.</p>
<![endif]-->


    <?php echo $__env->yieldContent('content'); ?>


<script src="<?php echo e(asset('js/runtime.js')); ?>"></script>
<script src="<?php echo e(asset('js/polyfills.js')); ?>"></script>
<script src="<?php echo e(asset('js/vendor.js')); ?>"></script>
<script src="<?php echo e(asset('js/main.js')); ?>"></script>
<script type="text/javascript" src="runtime.js"></script><script type="text/javascript" src="polyfills.js"></script><script type="text/javascript" src="vendor.js"></script><script type="text/javascript" src="main.js"></script></body>
</html>
