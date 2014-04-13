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
       <div class="list results">
       
           <div class="story">
           
                <div class="heading">
                    <h1>Tea Guild Members <span class="smaller-text">- Scotland</span></h1>
                </div>
                
                <div class="section result">
                	<div class="heading">
                    	<h2>Claridge's</h2>
                        <div class="action">
                        	<a href="result.php" class="show-more">Read&nbsp;more</a>
                        </div>
                    </div>
                    <div class="details">               
                        <address>Claridge's<br>
                        Brook Street<br>
                        Mayfair<br>
                        London W1K 4HR.                     
                        </address> 
                        <h3>Introduction</h3>
                        <p>Vestibulum tortor quam, feugiat vita lorn rocks! Lentesque habitant morbi tr. ultricies eget, tempor sit amet, ante. <a href="result.php" class="show-more">Read&nbsp;more</a></p>
                    </div>
                    <div class="imagery">
                         <a href="result.php"><img src="images/logo-claridges.jpg" alt="Claridge's" width="174" height="65" /></a>
                    </div>
                </div>
                
                
                <div class="section result">
                	<div class="heading">
                    	<h2>Cup</h2>
                        <div class="action">
                        	<a href="#" class="show-more">Read&nbsp;more</a>
                        </div>
                    </div>
                    <div class="details">               
                        <address>Cup Glasgow Ltd<br>
                        311 Byres Road<br>
                        Glasgow<br>
                        G12 8UQ.                     
                        </address> 
                        <h3>Introduction</h3>
                        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. <a href="#" class="show-more">Read&nbsp;more</a></p>
                    </div>
                    <div class="imagery">
                         <a href="#"><img src="images/logo-cup.jpg" alt="Cup" width="139" height="141" /></a>
                    </div>
                </div>
                
                
                
                <div class="section result">
                	<div class="heading">
                    	<h2>Abbey Cottage Tea Rooms</h2>
                        <div class="action">
                        	<a href="#" class="show-more">Read&nbsp;more</a>
                        </div>
                    </div>
                    <div class="details">               
                        <address>26 Main Street
                        New Abbey<br>
                        Dumfires<br>
                        DG2 8BY.                     
                        </address> 
                        <h3>Introduction</h3>
                        <p>Cum sociis natoque penatibus et magnis dis parturient monte mus. In condimentum turpis eget  pharetra eget et  A better way! apibus eleifend pulvinar. Duis eu risus ut urna varius blandit. Cras congue diam mauris, fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. <a href="#" class="show-more">Read&nbsp;more</a></p>
                    </div>
                    <div class="imagery">
                         <a href="#"><img src="images/photo-result.jpg" alt="Abbey Cottage Tea Rooms" width="120" height="120" /></a>
                    </div>
                </div>
                
           
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

<div id="mobile-nav-list"></div>

<script src="js/jquery-1.9.1.min.js"></script>
<script src="js/uktandia.js"></script>

</body>
</html>