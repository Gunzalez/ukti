<?php
	if (empty($keywords))
	{
		$keywords  = 'Default keywords goes here...';
	}
	
	if (empty($description))
	{
		$description  = 'Default description goes here...';
	}
	
?><!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>
	<meta charset="utf-8">

	<title>UKTea &amp; Infusions Association<?=($page_title ? ' - '.$page_title:'')?></title>
	<meta name="description" content="<?=$description?>" />
	<meta name="keywords" content="<?=$keywords?>" />

	<link rel="shortcut icon" href="<?=site_url('images/favicon.ico')?>" />

	<!-- Responsive and mobile friendly stuff -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <!-- Stylesheets -->  
    
    <style type="text/css" media="all">
        @import url('<?=site_url('css/uktandi.css')?>');
        @import url('<?=site_url('css/extra.css')?>');
        @import url('<?=site_url('css/paged-nav.css')?>');
        @import url('<?=site_url('js/library/owl.carousel.css')?>');
        @import url('<?=site_url('js/library/owl.theme.css')?>');
        @import url('<?=site_url('js/fancybox/jquery.fancybox-1.3.4.css')?>');
    </style>   
   
    <script type="text/javascript">
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
		document.getElementsByTagName('html')[0].className = 'mobile';
	} else {
		document.getElementsByTagName('html')[0].className = 'desktop';
	};
    </script>
	<script src="<?=site_url('js/modernizr-2.5.3-min.js')?>"></script>
</head>

<body>

<div id="wrapper">

    <div id="mobile-search-div"></div>

    <div id="header">
    	<h1><a href="<?=site_url('')?>"><img src="<?=site_url('images/logo.png')?>" alt="UKTea &amp; Infusions Association"/></a></h1>
        <div class="top-nav">
            <ul>
                <li><a href="<?=site_url('login')?>">Login</a></li>
                <li><a href="<?=site_url('sitemap')?>">Sitemap</a></li>
                <li><a href="<?=site_url('contact')?>">Contact</a></li>
                <li class="search-form">
                    <?php echo form_open('search-results', array('id'=>'search_form', 'class'=>'')); ?>
                        <label for="search-term">Search</label>
                        <input type="text" placeholder="Search" value="" id="term" name="term" class="text" />
                        <input type="submit" value="Search" class="submit" />
                    </form>
                    <div id="mobile-search-btn">
                        <a href="#" title="Search"></a>
                    </div>
                </li>
            </ul>
        </div>
        
        <div class="tea-count">
        	<span>Cups of tea consumed in UK so far today</span>
            <span class="figure">165,000,000</span>
        </div>
    
        <?php $this->view('nav', $output); ?>
               
    </div>
    <!--- header end /-->
        