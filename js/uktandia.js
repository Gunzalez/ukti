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
		delay: 12000,
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
				slideSpeed : 300,
				paginationSpeed : 400,
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
					
						$(obj).siblings('.accordion').removeClass('open').find('.detail').slideUp(function(){
							
							$(obj).addClass('open').find('.detail').slideDown();	
							
						});						
												
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
				
				clipLinks.on('click', function(){
										
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
			
			var self = this; // scope			
				
			var $clipImages  = $('.gallery .clip a'),
				ranNum = Math.floor(Math.random() * $clipImages.length) + 1,
				$hinLi = $('li', $clipImages.parents('.clip')).eq(ranNum-1),
				$hintText = $('<span class="click-to-enlarge">Click images to enlarge</span>');
				
			$('a', $hinLi).append($hintText).addClass('click-me');
				
				
			$('a', self.$gallery).on('click',function(){
				$('.click-to-enlarge').remove();
				$('.click-me').removeClass('click-me');
			});
			
		}	
		
	} /* gallery end */	
	
	
	
	uktandia.mobile = {		
		
		/* properties */
		$mobileNavBtn: $('#mobile-nav-btn'),
		
		/* methods */
		_launchMobileNav: function(){
			
			var $mainPage = $('#wrapper'),
				$mobileNav = $('#mobile-nav-list'),
				$theStage = $('<div id="the-stage" />'),				
				$fakeWrapper = $('<div id="fake-wrapper" />'),
				$slidingContainer = $('<div id="sliding-container" />'),
				stageWidth = $(window).width(),
				stageHeight = $(window).height(),
				peakThrough = 48,
				slideSpeed = 250,
				easing = 'swing';				
				
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
			}, slideSpeed, easing);
			
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
			
			var $mainPage = $('#wrapper'),
				$mobileNav = $('#mobile-nav-list'),
				$theStage = $('<div id="the-stage" />');
				
			$mobileNav.css({
				display:'none'
			}).removeAttr('style');
			
			$mainPage.removeAttr('style');
				
			$('body').prepend($mobileNav).prepend($mainPage);
			
			$('#the-stage').remove();
			
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
					
			}	
		},
		
		resize: function(){
						
			var self = this;
						
			self._destroyMobileNav();
			
		}
		
	} /* mobile end */
	
	uktandia.mapforms = {
		
		$form: $('#formListings'),
		$map: $('.map-image', this.$form),
		
		_checkIfThisFormIsValid: function(){
			
			var self = this
			
			if($('#category', self.$form).val() == 'null' || $('#location', self.$form).val() == 'null'){

				self.$form.addClass('error');
				
				return false;
				
			} else {
				
				return true;
				
			}				
			
		},
		
		_setMapToThisLocation: function($obj){
						
			var self = this,
				srcArray = [],
				location = $obj.attr('class'),
				newImgSrc = 'map-'+location+'.png'
				curSrc = $('img', self.$map).attr('src');
			
			srcArray = curSrc.split('/');
			
			srcArray.pop();
			
			srcArray.push(newImgSrc);
			
			var newImgSrc = srcArray.join('/');
		
			$('img', self.$map).attr('src', newImgSrc);
			
		},
		
		_unSetMapAnyLocation: function(){
						
			var self = this,
				resetSrc = $('img', self.$map).attr('data-location-reset');
				
			$('img', self.$map).attr('src', resetSrc);
			
		},		
		
		init: function(){
						
			var self = this;
			
			if(!$('#formListings').length>0){
				return false;
			}
			
			$('[href="#"]', self.$map).each(function(index, obj){
				
				$(obj).on('click',function(evt){
					
					evt.preventDefault();
					
					var pickedLocation = $(obj).attr('class');
					
					$('#location', self.$form).val(pickedLocation).trigger('change');
					
					$('#submit', self.$form).trigger('click');
					
				})
				
				if(!uktandia.properties.isMobile){
					
					$(obj).on('mouseenter',function(){
						
						self._setMapToThisLocation($(obj));
						
					}).on('mouseleave',function(){
						
						self._unSetMapAnyLocation();
						
					});
				}
				
			});
			
			$(self.$form).on('submit',function(){
				
				var isValid = self._checkIfThisFormIsValid();

				if(!isValid){
					return false;	
				}
				
			});
			
		}		
	},
	
	uktandia.megadropdown = {
		
		/* properties */
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
			
			var megaWidth = $('#header').width(),
				megaLeft = $('#header').offset().left - $(obj).offset().left;
				
			$(obj).addClass('active');
			
			if( megaWidth < 940 ) {
				
				$('.main-nav').addClass('notFullWidth');
				
			} else {
				
				$('.main-nav').removeClass('notFullWidth');
				
			}	
								
			$('.megaDropDown', $(obj)).css({
				width : megaWidth,
				left : megaLeft + 'px'
			});
			
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
					
					$(obj).on('click',function(evt){
						
						evt.preventDefault();
						
						if($(obj).hasClass('active')){
							
							self._hideMegaDropDownForThisLink(obj);
							
						} else {														
						
							$('.megaDropDown').css('left',  self.resetLeft);
							
							self.$links.removeClass('active');
							
							self._showMegaDropDownForThisLink(obj);
						
						}								
						
					})
					
				});
				
			}
			
		}
			
	} /* mega drop down end */
	
	uktandia.setGlobalVariable = function(){
		
		if($('html').hasClass('mobile')){
			
			uktandia.properties.isMobile = true;
			
		}
			
	}
	
	uktandia.init = function(){
		
		uktandia.setGlobalVariable();	
		
		uktandia.carousel.init();
		
		uktandia.accordion.init();
		
		uktandia.results.init();	
		
		uktandia.mobile.init();
		
		uktandia.gallery.init();
		
		uktandia.megadropdown.init();
		
		uktandia.mapforms.init();
		
		$(window).on('resize',function(){			
			
			uktandia.mobile.resize();
			
			uktandia.megadropdown.resize();
			
		});
			
	}	
	
	$( window ).load(function() {	
		
		uktandia.init();		
		
	});

}(jQuery, window, document));