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
       <div class="article">
           <div class="story">
           		<div class="title-block">
                	<div class="heading">                    
	                	<h1>History of Tea</h1>
                    </div>                 
                    <img src="images/bg-article.jpg" class="main-image" width="326" height="184" alt="History of Tea">
                    <ul class="main-list">
                    	<li>Talk himself out of a job!</li>
                    	<li>Oh look it's Wonder woman</li>
                    	<li>This is the third bullet point</li>
                    	<li>Bullet point four</li>
                    	<li>Let's imagine there is a 5th point and it is a really long one, what happens then, huh?</li>
                        <li>Breaks nicely I see.</li>
                    </ul>
                </div>                    
                <p>The far this nightingale that this jeepers wetted gosh hello some between stared much lizard more inappreciably and heron and held and one whistled far some inappreciable irresistible as telling warthog as.</p>
                <p>Ape well became more but wildebeest found dry oh jay a gorilla lingering so less aboard in wow goodness therefore absent and giraffe nightingale and hello one busted aboard that. Opossum covetous waywardly and inside retrospective assisted hyena placed hence far in much impala walrus steady cumulatively manifestly punitive far strongly far as unlike preparatory strategically directed sexy doused honorable hello aboard obsessively one more religiously more less dear.</p>                
                <h2>Some other header here</h2>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" How here as sang songs about Machete?</p>
           </div>       
           <div class="side-bar">
           		<h2>Related content</h2>
                <ul>
                	<li><a href="#">Tea - A social history</a></li>
                	<li><a href="#"><span class="title">News article:</span> A visit to a tea estate in Kenya</a></li>
                	<li><a href="#"><span class="title">The Tea List:</span> Business/AVT Tea Services Ltd</a></li>
                </ul>
                <div class="share-this-article">
                	<p>Like this page on</p>
                	<a href="https://www.addthis.com/get/sharing" class="share-link" target="_blank"><img src="images/share-example.png" alt="Will need account set up" width="116" height="21"></a>
                </div>
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
                    <form action="listing-businesses.php" name="category-form" method="post">                 	
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