/* 
AUTHOR: Segun Konbire
Date: 08.03.2014
*/

(function ($, window, document) {
	
	window.uktandia = {}
	
	uktandia.properties = {
		
		/* global properties */
		isMobile: false,
		isIE: false	
	}
	
	uktandia.carousel = {
		
		/* properties */		
		timer: '',
		delay: 5000,
		$html : $('#carousel'),
		$buttons: $('.controls a', this.$html),
		
		updateControls: function(index){
			
			this.$buttons.removeClass('active');
			
			this.$buttons.eq(index).addClass('active');
		},
		
		init: function(){
			
			if(!$('#carousel').length>0){
				return false;
			}
			
			var self = this; // scope
  
			$(".owl-carousel", this.$html).owlCarousel({
				
				navigation : false,
				slideSpeed : 800,
				paginationSpeed : 800,
				singleItem : true
				
			});
			
			self.$buttons.on('click',function(e){
				
				e.preventDefault();
				
				var index = self.$buttons.index($(this));
				
			    $(".owl-carousel", self.$html).trigger('owl.goTo', index);
				
				clearInterval(self.timer);				
				
			});	
		
			// sets up auto
			self.timer = setInterval(function(){	
										
					var curIndex = self.$buttons.index($('.button.active'));
					
					curIndex++;
					var newIndex = curIndex > 2 ? 0 : curIndex;	
									
					$(".owl-carousel", self.$html).trigger('owl.goTo', newIndex);
					
			}, self.delay );
			
			
			// Makes carousel slide active, helps mobile devices
			$('.item', self.$html).each(function(index, obj){
				
				$(obj).on('click',function(){
					
					if($('a', $(obj)).length > 0){
						
						window.location = $('a', $(obj)).attr('href');
						
					}
					
				});
				
			});
					
		}
		
	} /* carousel end */
		
	uktandia.accordion = {
		
		/* properties */
		$section: $('.accordion'),		
		
		init: function(){
			
			if(!$('.accordion').length>0){
				return false;
			}			
			
			var self = this; // scope		
			
			self.$section.each(function(i, obj){
				
				var heading = $('.heading', $(obj));
				
				heading.on('click', function(){
					
					if(!$(obj).hasClass('open')){	

						console.log('clicked')

						if ($(obj).siblings('.open').length > 0){

							$(obj).siblings('.accordion').removeClass('open').find('.detail').slideUp(function(){
								
								$(obj).addClass('open').find('.detail').slideDown();	
								
							});

						} else {

							$(obj).addClass('open').find('.detail').slideDown();

						}
					
												
					} else {
										
						$(obj).find('.detail').slideUp(function(){
							
							$(obj).removeClass('open');
							
						});
					}
					
				});
				
			});	
			
			self.$section.each(function(i, obj){
				
				var clipLinks = $('.show-more', $(obj));
				
				clipLinks.on('click', function(e){
									
					e.preventDefault();
										
				});
								
			});
			
			self.$section.each(function(i, obj){
				
				var clipLinks = $('.clip .show-more', $(obj));
				
				clipLinks.on('click', function(e){

					$(this).parents('.accordion').find('.heading').trigger('click');
					
				});
								
			});
			
		}	
	} /* accordion end */
		
	
	uktandia.results = {
		
		/* properties */
		$results: $('.result'),		
		
		init: function(){
			
			if(!$('.result').length>0){
				return false;
			}			
			
			var self = this; // scope			
				
			self.$results.each(function(i, obj){
				
				var $header = $('.heading', $(obj));
				
				$header.on('click',function(){
					
					window.location = $('.show-more', $(obj)).attr('href');
					
				});
												
			});
			
		}	
		
	} /* results end */
	
	
	uktandia.gallery = {
		
		/* properties */
		$gallery: $('.gallery'),
		
		init: function(){
			
			if(!$('.gallery').length>0){
				return false;
			}

			var self = this,
				$hintText = $('<span class="click-to-enlarge">Click to enlarge</span>');

			var $clip = $('.clip', self.$gallery);	

			$('a', $clip).append($hintText).addClass('click-me');			
				
			$('a', self.$gallery).on('click',function(){
				$('.click-to-enlarge').remove();
				$('.click-me').removeClass('click-me');
			});
			
		}	
		
	} /* gallery end */	
	
	
	
	uktandia.mobile = {		
		
		/* properties */
		isBusy: false,
		slideSpeed: 250,
		easing: 'swing',		
		$mobileNavBtn: $('#mobile-nav-btn'),
		$mobileSearchBtn: $('#mobile-search-btn'),
		$mobileSearchDiv: $('#mobile-search-div'),
		
		/* methods */
		_launchMobileNav: function(){
			
			var self = this,
				$mainPage = $('#wrapper'),
				$mobileNav = $('#mobile-nav-list'),
				$theStage = $('<div id="the-stage" />'),				
				$fakeWrapper = $('<div id="fake-wrapper" />'),
				$slidingContainer = $('<div id="sliding-container" />'),
				stageWidth = $(window).width(),
				stageHeight = $(window).height(),
				peakThrough = 48;				
				
			$theStage.css({
				width: stageWidth,
				height: stageHeight,
				position: 'relative',
				overflow: 'hidden'
			});
			
			$fakeWrapper.css({
				width: stageWidth,
				height: stageHeight,
				position: 'absolute',
				top: 0,
				left: 0
			});
			
			$mobileNav.css({
				width: stageWidth - peakThrough + 'px',
				position: 'absolute',
				top: 0,
				left: stageWidth + 'px',
				height: stageHeight,
				display: 'block'
			});			
			
			$slidingContainer.css({
				width: (stageWidth * 2) - peakThrough + 'px',
				height: stageHeight,					
				position: 'absolute',
				top: 0,
				left: 0
			});
			
			$fakeWrapper.append($mainPage);
			
			$slidingContainer.append($fakeWrapper).append($mobileNav);
			
			$theStage.append($slidingContainer);
			
			$('body').prepend($theStage);
			
			$slidingContainer.animate({				
				left:'-'+(stageWidth-peakThrough)+'px'	
			}, self.slideSpeed, self.easing);
			
		},
		
		_hideMobileNav: function(){
			
			var self = this,
				$slidingContainer = $('#sliding-container');
			
			$slidingContainer.animate({
				left:0	
			}, self.slideSpeed, self.easing, function(){
					self._destroyMobileNav();
				});
		},
		
		_destroyMobileNav: function(){
			
			var	$mainPage = $('#wrapper'),
				$mobileNav = $('#mobile-nav-list'),
				$theStage = $('<div id="the-stage" />');
				
			$mobileNav.css({
				display:'none'
			}).removeAttr('style');
			
			$mainPage.removeAttr('style');
				
			$('body').prepend($mobileNav).prepend($mainPage);
			
			$('#the-stage').remove();
			
		},
		
		_cloneNavigation: function(){
			
			var self = this,
				$mobileNav = $('#mobile-nav-list'),			
				$clonedNav = $('.main-nav').clone();
				
			$('.level-1', $clonedNav).each(function(index, obj){				
				
				var $linkContainer = $('<div class="linkContainer clearfix"></div>'),
					$subMenuButton = $('<span class="subMenuButton"></span>');
					
				$(obj).parent('li').append($linkContainer);				
				
				$subMenuButton.on('click', function(evt){					
					
					if(self.isBusy){
						
						return false;
						
					} else {
					
						self.isBusy = true;
						
						$(this).parent().addClass('active');
						
						var $mobileMegaDropDown = $(obj).parents('li').find('.megaDropDown'),
							$mobileMegaDropDownDiv = $('<div id="mobileMegaDropDownDiv"></div>'),
							$header = $('<div class="header">'+ $(obj).html() +'</div>');
							
							$header.on('click', function(){
								
								$mobileMegaDropDownDiv.animate({
									
									left: $mobileNav.width()
										
								}, self.slideSpeed, self.easing, function(){
									
										$mobileMegaDropDownDiv.remove();
										
										$('.linkContainer', $clonedNav).removeClass('active');
									
									});
											
							});
							
							$mobileMegaDropDownDiv.append($header);
						
						$('.level-2', $mobileMegaDropDown).each(function(index, obj){							
							
							if($(obj).parent('h2').hasClass('haslist'))	{
							
								var $clonedLink = $(obj).clone(),
									$clonedList = $(obj).parents('.megaDropSubDiv').find('ul').clone(),
									$linkContainer = $('<div class="linkContainer clearfix"></div>'),
									$subMenuButton = $('<span class="subMenuButton"></span>');
								
								$subMenuButton.on('click',function(evt){
									
									evt.preventDefault();
									
									var $subMenuBtn = $(this),
										$megaDropSubDiv = $('<div id="megaDropSubDiv"></div>'),
										$header = $('<div class="header">'+ $clonedLink.html() +'</div>');
										
									$subMenuBtn.parent().addClass('active');
										
									$header.on('click', function(){
									
										$megaDropSubDiv.animate({
											
											left: $mobileNav.width()
												
										}, self.slideSpeed, self.easing, function(){
											
												$megaDropSubDiv.remove();
												
												$subMenuBtn.parent().removeClass('active');
											
											});
													
									});	
									
									$megaDropSubDiv.append($header);
									
									$('a', $clonedList).on('click', function(){
				
										$(this).addClass('active');
										
									});
									
									$megaDropSubDiv.append($clonedList);
									
									$megaDropSubDiv.css({
								
										height: $mobileNav.height(),
										width: $mobileNav.width(),
										left: $mobileNav.width()+'px'
										
									});
																
									$mobileNav.append($megaDropSubDiv);
									
									$megaDropSubDiv.animate({
														
										left: 0
										
									}, self.slideSpeed, self.easing, function(){
										
											self.isBusy = false;	
										
										});
									
								});
								
								$clonedLink.on('click', function(){
				
									$clonedLink.parent().addClass('active');
										
								});
								
								$linkContainer.append($clonedLink).append($subMenuButton);
								
								$mobileMegaDropDownDiv.append($linkContainer);								
								
							} else {
								
								var $clonedLink = $(obj).clone();
								
								$clonedLink.on('click', function(){
				
									$clonedLink.addClass('active');
										
								});
								
								$mobileMegaDropDownDiv.append($clonedLink);	
								
							}	
							
						});
						
						$mobileMegaDropDownDiv.css({
							
							height: $mobileNav.height(),
							width: $mobileNav.width(),
							left: $mobileNav.width()+'px'
							
						});
						
						$mobileNav.append($mobileMegaDropDownDiv);
						
						$mobileMegaDropDownDiv.animate({
													
							left: 0
							
						}, self.slideSpeed, self.easing, function(){
							
								self.isBusy = false;	
							
							});
					
					}
					
				});
				
				$(obj).on('click',function(){
					
					$(this).parent().addClass('active');
					
				});
				
				$linkContainer.append($(obj)).append($subMenuButton);
				
			});
			
			$header = $('<div class="header">&nbsp;</div>');
									
			$header.on('click', function(){
			
				$('#mobile-nav-btn a').trigger('click');
							
			});
			
			$mobileNav.append($header);			
			
			$mobileNav.append($clonedNav);
			
		},
		
		init: function(){
			
			var self = this;			
			
			if($('#mobile-nav-btn').length > 0){
				
				$('#mobile-nav-btn a').on('click',function(evt){
					
					evt.preventDefault();

					
					if($('#the-stage').length > 0){
						
						self._hideMobileNav();
						
					} else {
						
						self._launchMobileNav();
						
					}
										
				});				
				
				self._cloneNavigation();
					
			}


			if($('#mobile-search-btn').length > 0){
				
				self.$mobileSearchBtn.on('click',function(evt){
					
					evt.preventDefault();

					if($('#fake-wrapper').length > 0) {

						$('#mobile-nav-btn a').trigger('click');

					} else {

						if(!self.$mobileSearchDiv.hasClass('opened')){							

							if( !$('form', self.$mobileSearchDiv).length > 0 ) {

								var $searchForm = $('.top-nav .search-form form').clone();

								self.$mobileSearchDiv.append($searchForm);

								$($searchForm).on('submit', function(){

									if($.trim($('.text', $searchForm).val()).length < 1){

										$('.text', $searchForm).focus();

										return false;

									}

								});

							}

							self.$mobileSearchDiv.css({
								display: 'block',
								'margin-top': '-40px',
								height: '40px'
							}).animate({
								'margin-top': '0'
							}, 250, 'swing', function(){

								self.$mobileSearchDiv.addClass('opened');

							});

						} else {

							self.$mobileSearchDiv.animate({
								'margin-top': '-40px'
							}, 250, 'swing', function(){

								self.$mobileSearchDiv.removeClass('opened').css( 'display', 'none');

							});

						};

					}
										
				});	
					
			}
			
		},


		
		resize: function(){
						
			var self = this;
						
			self._destroyMobileNav();

			self.$mobileSearchDiv.css('margin-top','-40px').removeClass('opened').css( 'display', 'none');
			
		}
		
	} /* mobile end */
	
	uktandia.mapforms = {
		
		$form : $('#formListings'),
		$map : $('.map-image', this.$form),
		mapResetSrc : '',

		
		_checkIfThisFormIsValid: function(){
			
			var self = this
			
			$('.map_error').hide();
			
			if($('#category', self.$form).val() == '' && $('#location', self.$form).val() == ''){

				$('.map_error').show();
				
				return false;
				
			} else {
				
				return true;
				
			}				
			
		},
		
		_setMapToThisLocation: function($obj, didClick){
						
			var self = this,
				srcArray = [],
				location = $obj.attr('class').split(' ')[0],
				newImgSrc = 'map-'+location+'.png'
				curSrc = $('img', self.$map).attr('src');

			srcArray = curSrc.split('/');
			
			srcArray.pop();
			
			srcArray.push(newImgSrc);
			
			var newImgSrc = srcArray.join('/');
		
			$('img', self.$map).attr('src', newImgSrc);
	

			if (didClick){

				self.mapResetSrc = newImgSrc;

			}	
			
		},
		
		_unSetMapAnyLocation: function(){

			var self = this;
			
			$('img', self.$map).attr('src', self.mapResetSrc);
			
		},		
		
		init: function(){
						
			var self = this;
			
			if( !$('#formListings').length > 0 ){

				return false;

			}

			self.mapResetSrc = $('img', self.$map).attr('data-location-reset');
			
			$('[href="#"]', self.$map).each(function(index, obj){
				
				$(obj).on('click',function(evt){
					
					evt.preventDefault();
					
					var pickedLocation = $(obj).attr('class').split(' ')[0];
					
					$('#location', self.$form).val(pickedLocation).trigger('change');
						
					self._setMapToThisLocation($(obj), true);

					$('.selected', self.$map).removeClass('selected');

					$('.'+ pickedLocation, self.$map).addClass('selected');
					
				});
				
			});


			$('[href="#"]', self.$map).each(function(index, obj){

				$(obj).on('mouseenter', function(){

					self._setMapToThisLocation($(obj), false);

				}).on('mouseleave', function(){
					
					self._unSetMapAnyLocation();

				});

			});
			
		}		
	},
	
	uktandia.megadropdown = {
		
		/* properties */
		fullWidth: 940,
		tabletThreshold: 805,
		resetLeft: '-999em',
		$links: $('.main-nav > li'),
		
		resize: function(){	
			
			var self = this;			
						
			$('.megaDropDown').css('left',  self.resetLeft);
			
			self.$links.removeClass('active');			
			
		},
		
		
		_hideMegaDropDownForThisLink: function(obj){
			
			var self = this;			
			
			$('.megaDropDown', $(obj)).css('left', self.resetLeft);
			
			$(obj).removeClass('active');
			
		},
		
		
		_showMegaDropDownForThisLink: function(obj){
			
			var self = this,
				megaWidth = $('#header').width(),
				megaLeft = $('#header').offset().left - $(obj).offset().left;			

			$(obj).addClass('active');
			
			if( megaWidth < self.tabletThreshold ) {
				
				$('.main-nav').addClass('notFullWidth').removeClass('tabletLandscape');
				
				$('#header .megaDropDown').removeAttr('style');				
				
				$('.megaDropDown', $(obj)).css({
					width : megaWidth,
					left : (megaLeft - 1) + 'px'
				});
				
			} else {
				
				$('.main-nav').removeClass('notFullWidth');

				if( megaWidth < self.fullWidth ){

					$('.main-nav').addClass('tabletLandscape');					

				} else {

					$('.main-nav').removeClass('tabletLandscape');

				}
				
				var index = $('#header .main-nav > li').index($(obj));
			
				switch(index)
				{
				case 0:
					$('.megaDropDown', $(obj)).css({
						width : megaWidth,
						right : 'inherit',
						left : megaLeft + 'px'
					});
					break;
				case 1:
					$('.megaDropDown', $(obj)).css({
						width : '410px',
						right : 'inherit',
						left : '0',
					});			  
					break;
				case 2:
					$('.megaDropDown', $(obj)).css({
						width : '301px',
						right : 'inherit',
						left : '0',
					});			  
					break;
				case 3:
					$('.megaDropDown', $(obj)).css({
						width : '301px',
						left : 'inherit',
						right: '-78px' 
					});			  
					break;
				case 4:
					$('.megaDropDown', $(obj)).css({
						width : '270px',
						left : 'inherit',
						right: '0'
					});			  
					break;
				default:
				  
				}

				
			}
			
		},
		
		
		init: function(){
			
			var self = this;
			
			if(!uktandia.properties.isMobile) {
			
				self.$links.each(function(index, obj){				
					
					$(obj).on('mouseenter',function(){
						
						self._showMegaDropDownForThisLink(obj);						
						
					}).on('mouseleave',function(){
						
						self._hideMegaDropDownForThisLink(obj);
						
					});
					
				});
			
			} else {
				
				self.$links.each(function(index, obj){

					var $link = $('.level-1', $(obj));
					
					$link.on('click',function(evt){
						
						evt.preventDefault();
						
						if($(obj).hasClass('active')){
							
							self._hideMegaDropDownForThisLink(obj);
							
						} else {														
						
							$('.megaDropDown').css('left',  self.resetLeft);
							
							self.$links.removeClass('active');
							
							self._showMegaDropDownForThisLink(obj);
						
						}								
						
					});
					
				});
				
			}
			
		}
			
	} /* mega drop down end */
	
	uktandia.setGlobalVariables = function(){
		
		if($('html').hasClass('mobile')){			
			
			uktandia.properties.isMobile = true;
			
		}
		
		uktandia.properties.width = $(window).width();
			
	}
	
	uktandia.init = function(){
		
		uktandia.setGlobalVariables();	
		
		uktandia.carousel.init();
		
		uktandia.accordion.init();
		
		uktandia.results.init();	
		
		uktandia.mobile.init();
		
		uktandia.gallery.init();
		
		uktandia.megadropdown.init();
		
		uktandia.mapforms.init();
		
		$(window).on('resize',function(){
			
			var theWidthNow = $(window).width()
			
			if(uktandia.properties.width != theWidthNow){
			
				uktandia.mobile.resize();
				
				uktandia.megadropdown.resize();
		
				uktandia.properties.width = theWidthNow;
			
			}
			
		});
		
		$(window).trigger('resize');
			
	}	
	
	$( window ).load(function() {	
		
		uktandia.init();		
		
	});

}(jQuery, window, document));