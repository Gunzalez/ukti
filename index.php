<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->

<head>
	<meta charset="utf-8">

	<title>UKTea &amp; Infusions Association</title>
	<meta name="description" content="" />
	<meta name="keywords" content="" />

	<link rel="shortcut icon" href="images/favicon.ico" />

	<!-- Responsive and mobile friendly stuff -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
	<!-- Stylesheets -->   
    <link rel="stylesheet" media="all" href="css/uktandi.css" />
    
    <link href="js/library/owl.carousel.css" rel="stylesheet">
    <link href="js/library/owl.theme.css" rel="stylesheet">
   
    <script type="text/javascript">
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)){
		document.getElementsByTagName('html')[0].className = 'mobile';
	} else {
		document.getElementsByTagName('html')[0].className = 'desktop';
	};
    </script>
	<script src="js/modernizr-2.5.3-min.js"></script>
</head>

<body>

<div id="wrapper">

    <?php include ("frags/header-frag.php");?>
    <!--- header end /-->
    
	<div class="content">	
        <div id="carousel">
            <div class="stage">
            	<div class="owl-carousel owl-theme">
                    <div class="item">                    	
                        <img src="images/slide1.jpg" alt=""/>
                        <h2 class="slide-title colour3">
                        	All the tea in china!
                        </h2>
                        <div class="slide-link">
                        	<a href="list.php">Click here to read the full story!</a>
                        </div>
                    </div>
                    <div class="item">                    	
                        <img src="images/slide2.jpg" alt=""/>
                        <h2 class="slide-title">
                        	One with no Link<br>below.
                        </h2>
                    </div>
                    <div class="item">                    	
                        <img src="images/slide3.jpg" alt=""/>
                        <h2 class="slide-title colour1">
                        	Green stuff in a <br> big white spoon!
                        </h2>
                        <div class="slide-link">
                        	<a href="article.php">I'm a reasonable man, get off my case, get off my case!</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="controls">
                <ul>
                    <li class="firstLI"><a href="#" class="button button-1 active"><img src="images/slide1-small.jpg" width="220" height="87" alt=""/></a></li>
                    <li><a href="#" class="button button-2"><img src="images/slide2-small.jpg" width="220" height="87" alt=""/></a></li>
                    <li class="lastLi"><a href="#" class="button button-3"><img src="images/slide3-small.jpg" width="220" height="87" alt=""/></a></li>
                </ul>
            </div>
        </div>
    </div>
    
    <div class="content">
        <div class="content-row">
            <div class="content-block content-block-1">
            	
                <div class="block tea-news">
                	<h2><a href="#">News</a></h2>
                    <ul>
                    	<li>
                        	<a href="#">
                            	<span class="title">Replace with real title</span>
                            	<span class="description">I do fancy wearing nice ear rings.</span>
                        	</a>
                        </li>
                    	<li>
                        	<a href="#">
                            	<span class="title">Skating backwards is fun!</span>
                            	<span class="description">Arsenal beat Everton in the end, phew.</span>
                        	</a>
                        </li>
                    </ul>
                </div>
            
            </div>
            <div class="content-block content-block-2">
            	
                <div class="block tea-facts">
                	<a href="#">
                		<h2>Tea Facts</h2>
                    </a>
                </div>
            
            </div>
            <div class="content-block content-block-3">
            	
                <div class="block tea-list">
                	<h2>The Tea List</h2>
                    <p>Our guide of the best afternoon tea venues and businesses.</p>
                    <form action="list.php" name="category-form" method="post">                 	
                		<label for="list-category">Category</label>
                    	<select id="list-category" name="list-category" class="select">
                        	<option selected="selected" value="--">Please pick a category</option>
                            <option value="category1">Category1</option>
                        </select>
                        <input type="submit" value="Browse" class="submit" /><span>- Join the list</span>
                    </form>                    
                </div>
                
            </div>
        </div>
    </div>    
    
	<div class="content">
    	<div class="content-row double">
        	<div class="content-half content-half-1">
                <h2><a href="#">The Magic of Tea</a></h2>
            	<div class="copy magic-of-tea">
                	<img src="images/magic-of-tea.jpg" alt=""/>                    
                    <div class="padding">
                        <h3>The perfect brew</h3>
                        <p>The far this nightingale that this jeepers wetted gosh hello some between stared much lizard more inappreciably. <a href="#">Read&nbsp;more</a></p>
                    </div>
                </div>
            </div>
        	<div class="content-half content-half-2">
            	<h2><a href="#">18th-century smugglers</a></h2>
            	<div class="copy tea-smugglers">
                	<img src="images/tea-smugglers.jpg" alt=""/>
                    <div class="padding">
                        <h3>Tea Smuggling</h3>
                        <p>Spiderman 2 starring Andrew Garfield looks really good. I simply can't wait to see it with the kids, oh yeah! <a href="#">Read&nbsp;more</a></p>
                    </div>
                </div>            
            </div>
            <div class="cleft"></div>
        </div>
    </div>
    
    
	<?php include ("frags/footer-frag.php");?>
    <!--- footer end /-->

</div>

<div id="mobile-nav-list">stuff</div>
    
<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/uktandia.js"></script>
<script src="js/library/owl.carousel.js"></script>

</body>
</html>