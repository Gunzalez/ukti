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
       <div class="list">
       
           <div class="story maps">
           
                <div class="heading">
                    <h1>The Tea List <span class="list-type">- Businesses</span></h1>
                </div>
                
                <form id="formListings" name="formListings" action="" method="">
                
                	<div class="map-intro">
                    	<p>Welcome to the condimentum lectus. Aliquam elementum justo vitae nisi fringilla, vel eleifend quam iaculis. Donec ut ipsum gravida, vulputate enim a, suscipit nisl. In luctus mi lobortis orci laoreet, nec bibendum nulla venenatis.</p>
                        
                        <div class="row">
                            <label for="category">1<sup>st</sup> Select a category</label>
                            <select name="category" id="category">
                                <option value="null" selected="selected">Please select a category</option>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category Two</option>
                            </select>
                        </div>
                        
                        <div class="row">
                            <label>2<sup>nd</sup> Choose a location</label>
                            <select name="place" id="place" class="maps-on-mobile">
                                <option value="null" selected="selected">Please select a place</option>
                                <option value="scotland">Scotland</option>
                                <option value="north-east">North East</option>
                                <option value="midlands">Midlands</option>
                                <option value="east">East</option>
                                <option value="london">London</option>
                            </select>
                            <p class="hint maps-on-desktop">Click on a place or name</p>
                        </div>
                        
                        <div class="row maps-on-mobile">
                            <input type="submit" value="Submit" class="submit">
                        </div>
                        
                    </div>
                    <div class="map-image maps-on-desktop">
                    	<img src="images/sample-image-map.jpg" width="380" height="461" alt=""/>
                    </div>
                
                </form>
           
           </div>       
           
           <div class="side-bar">
           
                <div class="block tea-list">
                	<h2>The Tea List</h2>
                    <p>Our guide of the best afternoon tea venues and businesses.</p>
                    <form action="somefile.php" name="category-form" method="post">                 	
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
    
    
	<?php include ("frags/footer-frag.php");?>
    <!--- footer end /-->   

</div>

<div id="mobile-nav-list">stuff</div>

<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/uktandia.js"></script>

</body>
</html>