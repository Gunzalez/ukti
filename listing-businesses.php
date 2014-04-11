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
	
</head>

<body>
<div id="wrapper">

	<?php include ("frags/header-frag.php");?>
    <!--- header end /-->
	
    <div class="content">	
       <div class="list">
       
           <div class="story maps">
           
                <div class="heading">
                    <h1>The Tea List <span class="smaller-text">- Businesses</span></h1>
                </div>
                
                <form id="formListings" name="formListings" action="index.php" method="post">
                
                	<div class="map-intro">
                    	<p>Welcome to the condimentum lectus. Aliquam elementum justo vitae nisi fringilla, vel eleifend quam iaculis. Donec ut ipsum gravida, vulputate enim a, suscipit nisl. In luctus mi lobortis orci laoreet, nec bibendum nulla venenatis.</p>
                        
                        <p class="error">One or more fields is invalid</p>
                        
                        <div class="row row-1">
                            <label for="category">1<sup>st</sup> Select a category</label>
                            <select name="category" id="category" autocomplete="off">
                                <option value="null" selected="selected">Please select a category</option>
                                <option value="category1">Category 1</option>
                                <option value="category2">Category Two</option>
                            </select>
                        </div>
                        
                        <div class="row row-2">
                            <label>2<sup>nd</sup> Choose a location</label>
                            <select name="location" id="location" class="maps-on-mobile" autocomplete="off">
                                <option value="null" selected="selected">Please select a location</option>
                                <option value="east">East</option>
                                <option value="london">London</option>
                                <option value="midlands">Midlands</option>
                                <option value="north-east">North East</option>
                                <option value="north-west">North West</option>
                                <option value="scotland">Scotland</option>
                                <option value="south-east">South East</option>
                                <option value="south-west">South West</option>
                            </select>
                            <p class="hint maps-on-desktop">Click on a place or name</p>
                        </div>
                        
                        <div class="row row-3 maps-on-mobile">
                            <input type="submit" value="Submit" class="submit" id="submit">
                        </div>
                        
                    </div>
                    <div class="map-image maps-on-desktop">
                    	
                        <div class="maps-container">
                   			<img src="images/business-maps/map-full.png" data-location-reset="images/business-maps/map-full.png" alt="Map of UK" width="303" height="473" usemap="#Map"/>
                            <map name="Map">
                                <area shape="poly" coords="146,284,221,265,233,298,229,311,201,328,166,350,153,352,143,293,145,285" href="#" class="midlands">
                                <area shape="poly" coords="170,349,226,314,242,303,263,307,275,326,263,347,252,357" href="#" class="east">
                                <area shape="poly" coords="152,185,178,275,222,265,223,252,192,213,184,196,171,178,161,173" href="#" class="north-east">
                                <area shape="poly" coords="129,220,149,189,176,276,149,280,150,251,137,257,130,243" href="#" class="north-west">
                                <area shape="poly" coords="127,218,159,172,150,167,138,164,138,155,151,152,148,143,163,125,168,104,179,84,135,81,117,93,109,88,120,80,118,73,106,75,124,65,137,53,145,43,144,34,113,41,100,40,82,53,84,76,74,78,67,91,52,88,45,92,58,109,67,112,68,129,53,137,63,147,82,136,78,165,90,173,98,181,95,205,86,217,106,226" href="#" class="scotland">
                                <area shape="poly" coords="140,292,152,368,140,371,126,368,122,362,116,362,107,357,100,363,87,367,85,357,85,351,102,343,119,335,119,320,116,310,112,307,101,313,101,307,105,297,97,289,112,285,123,295" href="#" class="wales">
                                <area shape="poly" coords="78,426,87,426,93,412,105,400,117,386,134,386,148,382,156,375,158,361,153,353,174,353,162,411,150,407,139,404,129,410,131,421,126,426,107,418,89,435" href="#" class="south-west">
                                <area shape="poly" coords="180,352,245,359,250,368,239,378,253,378,267,376,259,385,255,396,238,401,227,404,220,404,209,401,200,405,195,412,181,404,173,397,172,409,168,410,165,410,176,359" href="#" class="south-east">
                                <area shape="poly" coords="203,371,196,386,216,392,226,378" href="#" class="london">
                            </map>
                            <a href="#" class="scotland">Scotland</a>
                            <a href="#" class="north-east">North East</a>
                            <a href="#" class="midlands">Midlands</a>
                            <a href="#" class="east">East</a>
                            <a href="#" class="london">London</a>
                            <a href="#" class="south-east">South East</a>
                            <a href="#" class="wales">Wales</a>
                            <a href="#" class="north-west">North West</a> 
                            <a href="#" class="south-west">South West</a>
                        </div>
                        
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